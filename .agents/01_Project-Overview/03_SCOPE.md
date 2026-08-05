# Scope

## In scope

### Job information

- Recruitment-detail pages with a structured summary, eligibility, dates, location, vacancy information when supplied, source reference, and official application/notice links. **(Currently unmet — see note below.)**
- Browsing by job category, recruiting body/exam, Maharashtra district, and active/expired status. **(Active/expired status currently unverifiable — see note below.)**
- National and Maharashtra-focused government-job coverage.

### Candidate utilities

- Admit-card and hall-ticket updates. **(Currently unmet at the page level — see note below.)**
- Result updates. **(Currently unmet at the page level — see note below.)**
- Exam calendar.
- Current-affairs content.
- Eligibility-checker experience.
- Study material and guides.

### Trust and quality

- Editorial verification and source attribution. **(Not yet audited — see note below.)**
- Expiry handling and corrections. **(Currently unverifiable — see note below.)**
- Responsive, accessible, search-engine-friendly pages. **("Accessible" not yet audited; "search-engine-friendly" currently unmet for key page types — see note below.)**
- Measurement of key candidate actions. **(Only partially verified — see note below.)**

## Explicitly out of scope for the current product

- Taking government-job applications or payments for an application.
- Claiming affiliation with recruiting bodies without written authorization.
- Guaranteeing recruitment outcomes, eligibility, or results.
- Replacing official notices; the official document remains authoritative.

## Future scope candidates (TBD)

- Candidate accounts, saved jobs, and deadline alerts.
- Personalized job recommendations.
- Multilingual content governance beyond the currently visible Marathi/English use. **(Framing caveat — see note below.)**
- Notification channels such as email, WhatsApp, or app notifications.
- Source-ingestion integrations with government recruitment portals, subject to verification controls.

## Implementation notes (added 2 August 2026, based on live-site audit findings)

> Per this project's own rule in `README.md`: statements based on a future decision are marked **TBD** and must not be treated as implemented functionality. The notes below exist because live findings, and a gap-analysis cross-check against the SEO audit, showed items in this scope document that are either unmet or unverified at present. See `06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md` for full detail.

- **Recruitment-detail pages, admit-card updates, result updates.** A live, non-JavaScript fetch of a job detail page (`/jobs/3553`) returns generic homepage content, not that job's structured summary, dates, or vacancy data. `/admit-cards` and `/results` return an identical title/meta pair with no body content. None of these page types are currently delivering the in-scope content described above to anyone or anything relying on a standard (non-JS) fetch — including most search and AI crawlers. Tracked as **CR-007** in the SEO audit's `01_CRITICAL_ISSUES.md`.

- **"Browsing by... active/expired status."** Since job-detail pages don't currently render their own content to a crawler, active/expired status can't be confirmed as correctly surfaced at the page level either — this is blocked on the same CR-007 fix, not a separate issue.

- **"Editorial verification and source attribution."** This is a stated in-scope quality bar, but no audit performed to date (including the 12-file SEO audit) has actually checked it — there's been no spot-check of whether published listings carry a verified source URL or check date. This is a coverage gap, not a confirmed pass or fail; recommend a dedicated editorial/data-accuracy audit (see gap analysis §2).

- **"Expiry handling and corrections."** Cannot currently be verified as working, for the same reason as active/expired status above — there's no crawlable record to check expiry logic against.

- **"Responsive, accessible, search-engine-friendly pages."** No accessibility audit has been performed against this site to date — "accessible" here is an unverified claim, not a confirmed one (see gap analysis §2). "Search-engine-friendly" is confirmed for the homepage but currently unmet for job, admit-card, and result pages per CR-007.

- **"Measurement of key candidate actions."** The SEO audit confirms GA4/GTM/Clarity are not installed (`01_CRITICAL_ISSUES.md` CR-004), but hasn't verified whether the specific candidate actions this scope item refers to (job-detail views, apply-link clicks, eligibility-checker completion) would even be trackable given that job pages don't currently render distinguishable per-job content.

- **"Multilingual content governance beyond the currently visible Marathi/English use."** This phrasing implies the current Marathi/English use is itself governed or intentional. Live checks found English on the homepage and Marathi on `/admit-cards`/`/results` with no apparent controlling logic, and `05_DOCUMENTATION_INDEX.md` lists "Content language policy" as an open TBD. Recommend rewording this future-scope item to: _"Establish multilingual content governance — none currently exists, including for the languages already in use."_

---

\_Last reviewed: 2026-08-02 — implementation notes added following SEO audit cross-check\_
