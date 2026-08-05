# Requirements

## Functional requirements

### Job listing and detail pages

1. Every listing must identify the recruiting authority, title, category, location or applicable district, key dates, source URL, and current status where known. **(Currently unmet — see note below.)**
2. A job-detail page must prominently link to the official notice and/or official application destination when available. **(Currently unmet — see note below.)**
3. Dates must show an unambiguous format and time zone where the source specifies one. **(Currently unverifiable — see note below.)**
4. Expired, withdrawn, and corrected listings must be visibly labelled rather than silently presented as active. **(Currently unverifiable — see note below.)**
5. Search, category, and district paths must return useful empty states when no active listings match. **(Not yet audited.)**

### Content utilities

1. Admit cards, results, and calendar entries must name the related exam/body and link to the official source. **(Currently unmet for admit cards and results — see note below.)**
2. Eligibility guidance must clearly state that final eligibility is determined by the official notification. **(Not yet audited.)**
3. Study material and current-affairs content must show publication or update dates. **(Not yet audited.)**

## Data and editorial requirements

1. Record a source URL and source-check date for every recruitment record. **(Not yet audited — see note below.)**
2. Define an owner and review cadence for high-change content (deadlines, admit cards, results, and active jobs). **(Not yet audited.)**
3. Preserve a correction trail internally for material factual edits. **(Not yet audited.)**
4. Do not invent vacancy counts, fees, dates, qualifications, or official links. **(Not yet audited.)**
5. Maintain a controlled taxonomy for category, department, exam, state, district, qualification, and status. **(Not yet audited.)**

## Quality requirements

### SEO

- Each indexable page needs a unique, accurate title, primary heading, meta description, canonical URL, and internal links. **(Currently unmet for job, admit-card, and result pages — see note below.)**
- XML sitemap URLs must be valid, indexable pages only. **(Confirmed sitemap exists; individual URL validity not independently re-checked given the CR-007 finding below.)**
- Use structured data only when the page content supports it and it follows current search-engine guidelines. **(At risk — see note below.)**
- Paginated, filtered, and expired-content URL policies must be documented before scale-up. **(Not yet documented — see note below.)**

### Accessibility and usability

- Support keyboard navigation, semantic headings, visible focus, sufficient colour contrast, descriptive links, and mobile-first layouts. **(Not yet audited — see note below.)**
- Do not make deadline, status, or validation information dependent on colour alone. **(Not yet audited.)**
- Keep application links clear and distinguish external official destinations. **(Not yet audited.)**

### Performance and security

- Optimize for Core Web Vitals on mobile. **(Confirmed failing — LCP 6.0s, INP 272ms, CLS 0.19; see SEO audit `01_CRITICAL_ISSUES.md` CR-001.)**
- Use HTTPS, secure headers, dependency updates, backups, monitoring, and least-privilege administrative access. **(Partially confirmed — see note below.)**
- Validate and sanitize all user-controlled input, including search and eligibility-checker fields. **(Not yet audited.)**

## Measurement requirements

Track, with consent and privacy requirements respected:

- Job-detail views. **(Currently unmeasurable in a meaningful way — see note below.)**
- Search/filter and district/category navigation. **(Not yet audited.)**
- Official-notice and apply-link outbound clicks. **(Not yet audited.)**
- Eligibility-checker start and completion. **(Not yet audited.)**
- Admit-card, result, calendar, and study-material engagement. **(Not yet audited.)**
- Content freshness, crawl/index coverage, and technical errors. **(Partially confirmed — see note below.)**

**Note:** Analytics tooling (GA4, GTM, Clarity) is confirmed not installed at all (SEO audit `01_CRITICAL_ISSUES.md` CR-004), so none of the above are currently tracked in any form yet. Consent and privacy requirements referenced here are also unresolved — `05_DOCUMENTATION_INDEX.md` lists data-retention/privacy/consent as an open TBD, so analytics installation should not proceed independently of that decision.

## Acceptance criteria for a published job

- Source verified and stored. **(Not yet audited.)**
- Status and deadline checked. **(Not yet audited.)**
- Essential fields populated or clearly marked unavailable. **(Currently unmet — see note below.)**
- Official destination tested. **(Not yet audited.)**
- Mobile layout and page metadata reviewed. **(Partially confirmed — see note below.)**
- Internal links and sitemap eligibility confirmed. **(Not yet audited at the individual-listing level.)**

## Implementation notes (added 2 August 2026, based on live-site audit findings)

> Per this project's own rule in `README.md`: statements based on a future decision are marked **TBD** and must not be treated as implemented functionality. The notes below exist because a live-site check and a cross-reference against the SEO audit (`06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md`) found this requirements document currently describes a target state, not the present one, in several places.

- **Job listing/detail requirements #1–2, content-utility #1, SEO bullet #1, acceptance criterion "essential fields populated."** All trace to one root cause: a live, non-JavaScript fetch of a job detail page (`/jobs/3553`) returns generic homepage content instead of that job's own recruiting authority, title, dates, or application link. `/admit-cards` and `/results` return an identical title/meta pair to each other with **no body content** — no exam/body name, no official-source link, nothing to satisfy Content-utilities #1. Tracked as **CR-007** in the SEO audit's `01_CRITICAL_ISSUES.md`. Until CR-007 is resolved, these requirements should be read as unmet rather than partially met, because the underlying record isn't present for anything relying on a standard (non-JS) fetch — which includes most search and AI crawlers.

- **Functional #3–4 (date format, expired/withdrawn labelling).** Cannot currently be confirmed as correct or incorrect — there is no crawlable per-job record to check the date formatting or status labelling against. This is a dependency, not an independent gap: fix CR-007 first, then this becomes checkable.

- **Data and editorial requirements (all five items).** None of these have been checked by any audit performed to date. The 12-file SEO audit is a technical/SEO audit and doesn't test source-URL recording, review cadence, correction trails, the do-not-invent rule, or taxonomy control. Recommend commissioning a dedicated editorial/data-accuracy audit — this is a genuine blind spot, not a confirmed pass.

- **"Use structured data only when the page content supports it."** The SEO audit recommends expanding `JobPosting` and `FAQPage` schema (`06_TECHNICAL_ISSUES.md` TECH-010, `10_GEO_AI_ISSUES.md` GEO-009). Given CR-007, applying `JobPosting` schema to a page with no visible matching job content would itself violate this requirement and risks a Google structured-data manual action. Sequence schema expansion after CR-007 closes.

- **"Paginated, filtered, and expired-content URL policies must be documented before scale-up."** No such policy document exists yet anywhere in this documentation set. The SEO audit's `08_KEYWORD_ISSUES.md` KW-009 recommends large-scale programmatic landing pages (state+department, exam+result combinations, etc.) — that recommendation is blocked on this requirement, which is itself still outstanding.

- **Accessibility and usability (all three bullets).** No accessibility audit exists anywhere in the current documentation or SEO audit set. This entire requirements subsection is unverified — recommend a dedicated accessibility audit before claiming any compliance here.

- **"Use HTTPS, secure headers, dependency updates, backups, monitoring, and least-privilege administrative access."** Only HTTPS/SSL is confirmed (SEO audit `06_TECHNICAL_ISSUES.md` TECH-001) plus the related SPF-record gap (CR-006). Secure headers, dependency-update process, backup strategy, monitoring, and admin access control have not been independently checked.

- **Measurement requirements — "Job-detail views."** Even once analytics tooling is installed, job-detail views can't be measured in a meaningful per-job way while job pages don't render distinguishable per-job content (CR-007). Recommend sequencing analytics event design after CR-007, not in parallel — event schemas built against the current template would need to be redone once real per-job pages exist.

- **"Content freshness, crawl/index coverage, and technical errors."** Crawl/index and technical-error monitoring is partially covered by the SEO audit (XML sitemap, robots.txt, JS-error checks in `06_TECHNICAL_ISSUES.md`), but content-freshness tracking (last-updated dates per record) has not been verified as implemented.

- **Acceptance criteria — "Mobile layout and page metadata reviewed."** Mobile viewport and responsive design are confirmed at a template level (SEO audit `06_TECHNICAL_ISSUES.md` TECH-009), but this hasn't been checked per individual published listing, which is what this acceptance criterion actually requires.

---

_Last reviewed: 2026-08-02 — implementation notes added following SEO audit cross-check (see `06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md`)._
