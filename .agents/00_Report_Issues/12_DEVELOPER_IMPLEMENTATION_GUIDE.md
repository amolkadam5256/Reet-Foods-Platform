# 12_DEVELOPER_IMPLEMENTATION_GUIDE.md

> **Project:** SearchSarkariNaukri Enterprise SEO
>
> **Folder:** `.agents/00_Report_Issues/`
>
> **Purpose:** A single, engineering-facing task list to implement fixes for every issue raised across `01_CRITICAL_ISSUES.md` → `11_PERFORMANCE_ISSUES.md`.
>
> **Scope boundary — read this first:** Every task below is a **code, configuration, or infrastructure change**. None of these tasks change visible page wording, copy, layout, or visual design. Where an audit recommendation would require rewording text (e.g. the exact wording of a title tag or meta description), this guide implements the **mechanism** (a CMS field, a character-limit validator, a template slot) and leaves the actual wording to the content/editorial team — that decision is intentionally out of scope here.
>
> **Status:** New — 2 August 2026
>
> **Depends on:** `01_CRITICAL_ISSUES.md` through `11_PERFORMANCE_ISSUES.md`, and `06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md` (in the sibling `01_Project-Overview` folder set) for sequencing conflicts.

---

# How to use this document

Work top to bottom. Each task has:

- **Source** — which audit ID(s) it resolves
- **Type** — Code / Config / Infra (tells you which repo or system you're touching)
- **What to change** — the technical action, no content or design decisions included
- **Acceptance check** — how to confirm it's actually fixed, matching the audit's own verification method (non-JS fetch, Lighthouse, etc.)
- **Blocked by** — anything that must happen first

Do not skip Phase 0. Every other phase assumes it's done.

---

# Phase 0 — CR-007: Server-Side Rendering for Dynamic Templates (P0, do first)

This is the highest-leverage fix in the entire audit. It resolves or partially resolves: CR-007, GEO-013, HP-007, MP-003, PERF-009, and is a prerequisite for KW-009, GEO-009, TECH-010 schema work, and most of `05_ON_PAGE_ISSUES.md`.

## 0.1 — Job detail template (`/jobs/[id]`)

- **Source:** CR-007, GEO-013
- **Type:** Code (Next.js)
- **What to change:** Convert the job detail route to use `generateMetadata()` + server-rendered page body (App Router) or `getServerSideProps`/`getStaticProps` + `generateStaticParams` (whichever fits current data-fetch pattern) so the initial HTML response — before any client JS runs — contains that specific job's title, recruiting authority, category, district, dates, and application link. Do not change what fields are displayed or how they're worded; only change **when/where** the render happens (server vs. client).
- **Acceptance check:** `curl -A "Mozilla/5.0"` (no JS execution) against 10 different `/jobs/:id` URLs returns 10 different `<title>`, `<meta name="description">`, and `<h1>` values, each matching that specific job.
- **Blocked by:** nothing — start here.

## 0.2 — Section index templates (`/admit-cards`, `/results`)

- **Source:** CR-007, GEO-013
- **Type:** Code (Next.js)
- **What to change:** Same SSR/SSG treatment for these two routes. Each must independently render its own `<title>`, `<meta name="description">`, one `<h1>`, and a server-rendered list/summary of current entries (admit cards or results respectively) — not share a title/meta pair with each other, and not render empty.
- **Acceptance check:** Non-JS fetch of `/admit-cards` and `/results` returns two different titles, two different meta descriptions, and each has non-empty, distinct body content.
- **Blocked by:** nothing — can run in parallel with 0.1.

## 0.3 — Canonical URL correctness re-check

- **Source:** TECH-004, gap-analysis §1.3 note
- **Type:** Code
- **What to change:** After 0.1/0.2 land, re-verify each job/admit-card/result page emits a self-referencing canonical (not accidentally inherited from the old shared shell template).
- **Acceptance check:** Canonical tag on `/jobs/3553` points to `/jobs/3553`, not `/`.
- **Blocked by:** 0.1, 0.2.

## 0.4 — Rendered-HTML ratio re-measurement

- **Source:** HP-007, MP-003, PERF-009
- **Type:** Config/verification only, no additional code change
- **What to change:** Nothing further — this is the same underlying fix as 0.1/0.2. After they land, re-run whatever tool produced the "837%" figure.
- **Acceptance check:** Rendered HTML ratio drops materially from 837%, target <200% per the audit's own success metric.
- **Blocked by:** 0.1, 0.2.

## 0.5 — Descriptive slugs for job URLs (optional but recommended alongside 0.1)

- **Source:** MP-002
- **Type:** Code (routing)
- **What to change:** Since you're already touching the job detail route in 0.1, add a slug segment (e.g. `/jobs/mpsc-recruitment-2026-3553`) alongside the numeric ID, with the numeric-only URL 301-redirecting to the slugged version. Slug text itself (which words go in it) is a content decision — coordinate with editorial for the slug-generation rule, but the redirect/routing logic is yours to build now.
- **Acceptance check:** Old numeric URLs 301 to slugged URLs; slugged URLs resolve correctly.
- **Blocked by:** 0.1 (same route).

---

# Phase 1 — Remaining P0 Items

## 1.1 — Core Web Vitals (CR-001, PERF-001–003)

- **Type:** Code + Config
- **What to change:**
  - LCP: preload the LCP image/font, remove render-blocking CSS above the fold, enable server/CDN caching (see 1.3).
  - INP: code-split large JS bundles, remove unused libraries, switch to passive event listeners.
  - CLS: add explicit `width`/`height` (or `aspect-ratio`) to all images and embeds, reserve space for dynamically injected banners, use `font-display: swap` with preloaded fonts.
- **Acceptance check:** Lighthouse/PageSpeed Insights: LCP <2.5s, INP <200ms, CLS <0.10.
- **Blocked by:** Phase 0 (a meaningful chunk of current LCP/CLS is likely coming from the same hydration-heavy templates).

## 1.2 — Analytics installation (CR-004, TECH-007)

- **Type:** Code + Config
- **What to change:** Install GA4, GTM, and Microsoft Clarity via GTM container. **Do not fire any tag until a consent-management mechanism is in place** — this is flagged as a compliance dependency in the gap analysis (`05_DOCUMENTATION_INDEX.md` lists consent/privacy as an open TBD). Build the GTM container and event scaffolding now; gate firing behind a consent check (even a simple cookie-banner accept flag is enough to unblock this).
- **Acceptance check:** GTM container installed and verified in GTM's own preview mode; no tags fire before consent is granted.
- **Blocked by:** nothing technical, but coordinate timing with whoever owns the consent-banner decision.

## 1.3 — HTTP/2 (CR-005, TECH-006, PERF-010)

- **Type:** Infra (Nginx/CDN)
- **What to change:** Enable HTTP/2 (prefer HTTP/3 if the CDN supports it) in the Nginx config and/or CDN settings. Confirm TLS config is compatible (HTTP/2 requires TLS in practice).
- **Acceptance check:** `curl -I --http2 https://www.searchsarkarinaukri.com` confirms `HTTP/2 200`.
- **Blocked by:** nothing.

## 1.4 — SPF record (CR-006, TECH-014)

- **Type:** Infra (DNS)
- **What to change:** Add an SPF TXT record for the sending domain, matching whatever email provider is used for transactional/marketing mail.
- **Acceptance check:** MXToolbox SPF check passes.
- **Blocked by:** nothing.

---

# Phase 2 — P1 Items

## 2.1 — H1 structure (HP-003, OP-003, OP-004)

- **Type:** Code (template)
- **What to change:** Homepage already renders one H1 (confirmed live). Audit the job, admit-card, results, category, and district templates to guarantee exactly one `<h1>` each, with any secondary headings demoted to `<h2>`/`<h3>` in the template markup. This is a markup/semantics fix, not a wording fix — the same visible heading text can stay, just correct the tag level.
- **Acceptance check:** Automated crawl (Screaming Frog or similar) shows exactly one H1 per template type.
- **Blocked by:** Phase 0 for job/admit-card/result templates specifically (they currently render nothing to check).

## 2.2 — Title/meta description length enforcement (HP-004, HP-005, OP-001, OP-002)

- **Type:** Code (CMS/validation layer)
- **What to change:** Add a character-count validator in the CMS/publishing flow that warns or blocks when a title exceeds ~60 characters or a meta description exceeds ~160 characters. This gives editorial a guardrail; **do not rewrite existing titles/descriptions yourself** — that's a content-team decision. Also confirm the homepage's current title (55 chars) and meta description (Marathi, ~140 chars) were intentional edits and not an accidental regression — flag to content owner for confirmation either way.
- **Acceptance check:** CMS rejects or warns on out-of-range title/meta input at save time.
- **Blocked by:** nothing.

## 2.3 — Hreflang (HP-006, TECH-005) — HOLD

- **Type:** Code
- **What to change:** **Do not implement yet.** Per the gap analysis, this depends on the still-open content-language-policy decision. Once that policy exists, come back to this task: if it's a single bilingual site, this becomes a `lang` attribute consistency fix per template instead of hreflang; if it's genuinely separate language versions, implement `hreflang="en-IN"` / `hreflang="mr-IN"` alternates.
- **Acceptance check:** N/A until policy is set.
- **Blocked by:** Content-language-policy decision (external to engineering).

---

# Phase 3 — P2 Items

## 3.1 — Site load speed (MP-001)

- **Type:** Code + Infra
- **What to change:** Reduce unused JavaScript (tree-shake, code-split per route), enable browser caching headers for static assets, reduce third-party script count/defer non-critical scripts, improve server response time (see 3.4 below).
- **Acceptance check:** "Fully Loaded" time <2.0s, "Scripts Complete" <3.0s per the audit's own measurement method.

## 3.2 — Internal linking scaffolding (MP-004, CNT-006)

- **Type:** Code (component)
- **What to change:** Build a "Related Jobs / Related Content" component that surfaces contextually related job, admit-card, result, and syllabus links on each detail page, driven by existing taxonomy fields (category, exam, district). This is a template/component build — which specific items populate it is a data/content concern, but the mechanism is yours.
- **Acceptance check:** Component renders server-side (per Phase 0 pattern) with working links on a sample of pages.
- **Blocked by:** Phase 0 (needs real per-page data to link between).

## 3.3 — Inline CSS removal (LP-008)

- **Type:** Code
- **What to change:** Move inline `style=""` attributes to the external stylesheet/CSS modules. No visual change — same computed styles, different delivery mechanism.
- **Acceptance check:** No `style=""` attributes remain in rendered HTML (spot-check with view-source).

## 3.4 — Server response time (PERF-004)

- **Type:** Infra
- **What to change:** Enable FastCGI/response caching where applicable, review and optimize database queries backing the job-listing endpoints, confirm CDN is actually caching static and (where safe) semi-static responses.
- **Acceptance check:** Server response time <0.5s (currently 0.813s).

## 3.5 — Compression & caching headers (PERF-011, PERF-012)

- **Type:** Infra
- **What to change:** Enable Brotli (fallback Gzip) for HTML/CSS/JS/JSON/SVG. Set cache-control headers per the audit's suggested policy (images/fonts 1 year, CSS/JS 1 month).
- **Acceptance check:** Response headers show `content-encoding: br` and correct `cache-control` values.

---

# Phase 4 — P3 Items

## 4.1 — Security hardening beyond SPF (04_REQUIREMENTS.md § Performance and security, gap-analysis §2)

- **Type:** Infra + Code
- **What to change:** Add standard secure headers (`Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, `Strict-Transport-Security`, `X-Frame-Options`), set up a dependency-update process (Dependabot/Renovate), confirm backup schedule and monitoring/alerting exist, review admin-account access against least-privilege.
- **Acceptance check:** securityheaders.com scan shows the added headers present; backup job runs on schedule and is verified restorable.

## 4.2 — Input validation/sanitization (04_REQUIREMENTS.md § Performance and security)

- **Type:** Code
- **What to change:** Add server-side validation and sanitization to the search field and eligibility-checker form inputs (length limits, type checks, escaping). No UI change required — this is backend validation.
- **Acceptance check:** Basic injection/XSS payloads submitted to these fields are rejected or safely escaped, confirmed via a quick manual security pass or an automated scanner.

## 4.3 — Structured data expansion — HOLD on JobPosting/FAQPage

- **Source:** TECH-010, GEO-009
- **Type:** Code
- **What to change:** `Organization`, `WebSite`, and `SearchAction` schema can be added/expanded now — they describe the site itself and aren't blocked by Phase 0. **Do not add `JobPosting` or `FAQPage` schema to job/admit-card/result templates until Phase 0 lands** — adding schema for content that isn't yet visibly present on the page risks a Google structured-data mismatch flag, per the gap analysis.
- **Acceptance check:** Google Rich Results Test validates each schema type against the live page with no errors.
- **Blocked by:** Phase 0 for `JobPosting`/`FAQPage` specifically; `Organization`/`WebSite`/`SearchAction` can proceed now.

## 4.4 — Skip: LocalBusiness schema (LP-007)

- **Type:** N/A — do not implement as originally specified.
- **What to change:** Per the gap analysis, `LocalBusiness` schema is a mismatch for a multi-district discovery platform with no single physical service location. If entity/trust schema is wanted here, use the `Organization` schema being expanded in 4.3 instead. No dev action needed beyond what 4.3 already covers.

## 4.5 — Social profile links (LP-001–005) and Facebook Pixel (LP-006)

- **Type:** Code (once accounts exist) + Infra (consent)
- **What to change:** These require the accounts to exist first (non-engineering task — see `06_Analytics & Tracking Setup` / account-setup folders for that). Once social accounts exist, add the profile links (footer/header component) and `sameAs` schema entries. Facebook Pixel installation follows the same consent-gating pattern as 1.2 — do not fire before consent.
- **Acceptance check:** Links resolve to live profiles; Pixel fires only post-consent (Meta Pixel Helper browser extension confirms).
- **Blocked by:** Account creation (outside engineering), and the same consent mechanism as 1.2.

---

# Summary — Build Order

| Order | Task                                         | Priority     | Blocked by                       |
| ----- | -------------------------------------------- | ------------ | -------------------------------- |
| 1     | 0.1 Job detail SSR/SSG                       | P0           | —                                |
| 2     | 0.2 Admit-cards/results SSR/SSG              | P0           | —                                |
| 3     | 0.3 Canonical re-check                       | P0           | 0.1, 0.2                         |
| 4     | 0.5 Descriptive job slugs                    | P1           | 0.1                              |
| 5     | 1.1 Core Web Vitals                          | P0           | Phase 0 (partial)                |
| 6     | 1.3 HTTP/2                                   | P0           | —                                |
| 7     | 1.4 SPF record                               | P0           | —                                |
| 8     | 1.2 Analytics + consent gate                 | P0           | Consent-banner decision          |
| 9     | 2.1 H1 structure per template                | P1           | Phase 0                          |
| 10    | 2.2 Title/meta length validator              | P1           | —                                |
| 11    | 3.1–3.5 Performance/infra cleanup            | P2           | —                                |
| 12    | 4.3 Organization/WebSite/SearchAction schema | P3           | —                                |
| 13    | 4.1–4.2 Security hardening                   | P3           | —                                |
| 14    | 2.3 Hreflang                                 | P1 (on hold) | Content-language-policy decision |
| 15    | 4.3 JobPosting/FAQPage schema                | P3 (on hold) | Phase 0                          |
| 16    | 4.5 Social links + Pixel                     | P3           | Account creation, consent gate   |

---

**Document Status:** New

**Owner:** Engineering Lead

**Next Review:** After Phase 0 (CR-007) ships — re-run the non-JS fetch checks from `01_CRITICAL_ISSUES.md` before proceeding to Phase 1.
