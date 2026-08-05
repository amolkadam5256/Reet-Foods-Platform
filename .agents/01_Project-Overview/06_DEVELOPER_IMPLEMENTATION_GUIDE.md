# 07_DEVELOPER_IMPLEMENTATION_GUIDE.md

> **Project:** SearchSarkariNaukri
>
> **Purpose:** Developer-facing instructions for closing **CR-007** — the rendering/content-delivery defect causing job-detail pages, `/admit-cards`, and `/results` to serve generic or empty content to any standard (non-JavaScript) request.
>
> **Scope boundary (read before doing anything else):** This document is instructions for the engineer(s) who will touch the codebase. Producing/updating this documentation itself involves **no code change and no change to any existing document's factual content** — only this guide's own text is being expanded here. Once work begins on the actual fix, the same boundary applies to the _rendering layer only_: no visual, layout, copy, or UI change of any kind. If what a JS-enabled browser shows a human today changes in any way, that is a defect in the fix, not an acceptable side effect.
>
> **Source basis:** `README.md`, `01_PROJECT_OVERVIEW.md`, `02_PROJECT_GOALS.md`, `03_SCOPE.md`, `04_REQUIREMENTS.md`, `05_DOCUMENTATION_INDEX.md`, `06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md`.
>
> **Status:** Expanded — 2 August 2026 (supersedes the initial version of this guide; no prior content was removed, only expanded)

---

## 0. Scope boundary, restated precisely

**In scope for the engineering fix:** how the server responds to a request for a job/admit-card/result page — i.e., what HTML/data is returned before or without client-side JavaScript execution.

**Out of scope, explicitly, for the engineering fix:**

- Any change to visual design, layout, component styling, spacing, colors, or typography.
- Any change to page structure as seen by a human user with JavaScript enabled.
- Any change to navigation, menus, or site architecture.
- Any change to existing copy/wording anywhere on the site.
- Any change to the content or claims in `01`–`06` of this documentation set. This guide may be expanded, but it must not alter what those other documents assert about current state.

**Out of scope for this documentation task specifically:** no code was written or modified to produce this update. This is a documentation-only pass.

If at any point a proposed change would alter what a human sees in-browser, or would change a factual claim in another document, stop and flag it before proceeding — neither is authorized by this guide.

---

## 1. The defect (root cause, not just symptom)

Confirmed by a live, non-JavaScript fetch on 2 August 2026:

- `/jobs/3553` (and by extension other job-detail URLs) returns the **generic homepage's** title, heading, and body content instead of that job's own recruiting authority, title, category, dates, location, or application link.
- `/admit-cards` and `/results` return an **identical title/meta pair to each other**, with **no body content at all** — no exam/body name, no source link, nothing.

This is not a missing field or a styling bug. The underlying per-record data is not present in the server response for these routes when JavaScript does not execute. Everything downstream (SEO, crawlability, AI-answer eligibility, several functional requirements, one acceptance criterion) fails for the same single reason — see `06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md` §1.1 for the full cross-check against requirements.

### 1.1 Diagnostic steps (do this before writing any fix)

Confirm which mechanism is at play. Do not assume — check the actual response.

1. Run a plain `curl -A "Mozilla/5.0" https://searchsarkarinaukri.com/jobs/3553` (or equivalent no-JS fetch) and save the raw HTML.
2. Compare the `<title>`, `<h1>`, and body content of that output against what the homepage returns for the same fetch method.
3. Check the server/framework routing config: is there a route handler registered for `/jobs/:id`, `/admit-cards`, `/results`, or do these fall through to a catch-all/default handler?
4. Check any CDN or reverse-proxy caching rules — is a cached homepage response being served regardless of path?
5. Identify the rendering mode currently in use (CSR only / SSR / SSG / ISR / hybrid) for these specific routes versus the homepage.
6. Document findings against this checklist:

- [ ] Client is a CSR SPA (React/Vue/etc.) with client-side routing only; server returns the same `index.html` shell for every path.
- [ ] Server-side templating exists but the job/admit-card/result routes are not wired to it (fall through to a default/catch-all handler).
- [ ] A caching or CDN layer is serving a cached homepage response for these paths regardless of the requested URL.
- [ ] Something else — document what you find here before proceeding.

Do not pick a fix strategy (§2) until this diagnostic is complete and written down. The correct fix depends entirely on which of the above is actually happening.

---

## 2. Fix approach (rendering layer only — no UI change)

Any of the following satisfies the requirement, provided the **rendered output for a JS-enabled browser stays structurally and visually identical to what it is today**:

1. **Server-side rendering (SSR)** of the existing components for these routes, so the same UI is generated server-side instead of client-side. Usually the lowest-risk option for "no UI change" because it reuses the existing component tree rather than rebuilding it.
2. **Static generation / prerendering** per job, admit-card, and result record, with a rebuild/revalidate trigger on data change (e.g. incremental static regeneration, on-publish rebuild hook, or scheduled regeneration matched to how often records change).
3. **Dynamic rendering** (serve a prerendered snapshot to known crawler user agents, CSR to browsers) — acceptable only as a stopgap. It does not close the underlying gap for all non-JS consumers (some AI crawlers, link-unfurling bots not on an allowlist), only for detected search-engine crawlers. If chosen, it must be logged explicitly as an interim measure, not a closure of CR-007, and paired with a follow-up ticket for the permanent fix.

**Do not** choose a fix that requires rebuilding the front-end component/layout code. The objective is to get the _existing_ rendered output to reach the server response — not to redesign, restructure, or re-implement the page.

### 2.1 Choosing between SSR and SSG/ISR

- If job/admit-card/result records change frequently (new listings daily, status flips from active to expired, corrections) → SSR or ISR with a short revalidation window is likely the better fit than pure static generation, to avoid serving stale status to crawlers.
- If the data store already exposes a webhook or event on record change → wire that into an on-demand revalidation trigger rather than relying purely on a timer.
- Either way, the acceptance checklist in §4 must pass regardless of which mechanism is chosen.

---

## 3. What "fixed" must produce, per page type

### Job detail (`/jobs/:id`)

A non-JS fetch of the URL must return, in the initial HTML:

- Recruiting authority, job title, category, location/applicable district
- Key dates (with unambiguous date format and time zone, if the source specifies one)
- Source URL
- Current status (active/expired/withdrawn/corrected), visibly labelled — not silently omitted
- A prominent link to the official notice and/or official application destination
- A unique, accurate `<title>`, single `<h1>`, meta description, and canonical URL (not shared with any other page)

### `/admit-cards` and `/results`

- Each must have its **own** distinct title/meta pair (currently identical to each other)
- Body content naming the related exam/body, with a link to the official source
- No longer allowed to return empty body content

### General

- `JobPosting` / `FAQPage` / other structured data must **not** be added to a template until that template passes the checks above — see §5.
- Every field listed above must trace back to the actual underlying record — do not hardcode, placeholder, or fabricate a value to make the checklist pass. See `04_REQUIREMENTS.md` § Data and editorial, "Do not invent vacancy counts, fees, dates, qualifications, or official links."

---

## 4. Acceptance checklist (verify with a non-JS / `curl`-style fetch, not a browser)

- [ ] `curl` or equivalent (no JS execution) on 3+ sample job-detail URLs returns that job's own title, H1, and body fields — not the homepage's.
- [ ] Same fetch on `/admit-cards` and `/results` returns distinct title/meta from each other, and non-empty, relevant body content.
- [ ] Expired/withdrawn/corrected sample listings show a visible status label in the non-JS response (not just conditionally rendered client-side).
- [ ] Canonical URL on each fetched page points to itself, not to the homepage.
- [ ] Sitemap URLs spot-checked against this fix — confirm the URLs listed actually resolve to unique, populated pages under the same non-JS fetch.
- [ ] **Visual regression check:** the same pages, loaded normally in a browser with JS enabled, are unchanged from pre-fix screenshots/behavior. Any difference here is a defect in this fix, not an acceptable side effect.
- [ ] Load-time/performance spot check: confirm the fix doesn't regress the existing Core Web Vitals numbers (`04_REQUIREMENTS.md` § Performance references LCP 6.0s, INP 272ms, CLS 0.19 as the confirmed-failing baseline — the fix must not make these worse; improving them is out of scope for this specific guide but should not be accidentally undone).
- [ ] Confirm the fix approach chosen (§2) is documented, including if it was the dynamic-rendering stopgap option, and logged as such rather than as a full closure.

---

## 5. Sequencing — what stays blocked until this closes

Per `04_REQUIREMENTS.md` and `06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md`, the following are explicitly **dependent on this fix** and should not be started in parallel:

- Expanding `JobPosting` / `FAQPage` structured data (risk of schema/content mismatch and a possible Google manual action if added before real content is present in the response).
- Per-job analytics event design (job-detail view tracking) — event schemas built against the current broken template would need to be rebuilt once real per-job responses exist.
- Large-scale programmatic/combination landing pages (state+department, exam+result, etc.) — also separately blocked on a not-yet-written paginated/filtered/expired-URL policy document, which is a documentation task, not part of this guide.
- Verifying date-format/time-zone correctness and expired/withdrawn labelling logic — these can't be checked at all until there's a crawlable record to check them against.

None of the above are part of this guide's scope. Do not bundle them into the same change set as the CR-007 fix — keep the fix isolated and independently reviewable.

---

## 6. Ownership and review

Per `05_DOCUMENTATION_INDEX.md`, CR-007 is a cross-functional item, proposed as a joint **Engineering + SEO lead** responsibility, with Editorial reviewing that the fields now present match what a "listing" is defined to contain (`04_REQUIREMENTS.md` § Functional #1).

Before merging:

- [ ] Engineering confirms the non-JS acceptance checklist (§4) passes.
- [ ] SEO lead confirms canonical/sitemap/indexability implications are resolved, not just page content.
- [ ] Editorial/Product confirms the returned fields match the functional requirement's field list (recruiting authority, title, category, location/district, key dates, source URL, status).
- [ ] Explicit sign-off that **no UI/layout/visual change** was introduced — attach the before/after browser comparison from §4.

### 6.1 Rollback plan

- [ ] Confirm the deployment mechanism supports a fast rollback (previous build/revision) before this change ships.
- [ ] If dynamic rendering (the stopgap option in §2) is used, confirm the crawler-detection logic fails safe — i.e., an unrecognized user agent gets the existing CSR behavior, not a broken response.
- [ ] Keep the diagnostic findings from §1.1 attached to the change so a future engineer doesn't have to re-diagnose if a related issue resurfaces.

---

## 7. Non-goals for this guide

- Not a redesign, restyling, or UI/UX change of any kind.
- Not a fix for accessibility, security, editorial/data-accuracy, or analytics/consent gaps — those are separate, currently unaudited or unresolved areas (see `06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md` §2–3) and are out of scope here.
- Not a KPI-setting exercise — no numeric targets are implied or endorsed by this guide.
- Not an authorization to alter any other document's stated findings or status labels — this guide's expansion added detail and diagnostic steps only; it did not change what `01`–`06` say about current state.

---

_Last reviewed: 2026-08-02 — expanded with diagnostic steps, SSR/SSG guidance, and a rollback plan; no code was changed to produce this update and no other document's content was altered. Cross-referenced against `04_REQUIREMENTS.md` and `06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md`._
