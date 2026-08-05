# Project Goals

## 1. Candidate goals

- Find relevant government jobs by exam, department, district, qualification, and deadline.
- See whether an opportunity is still active and where to apply officially. **(Currently unmet — see note below.)**
- Return for admissions, results, schedules, current affairs, and preparation resources.

## 2. Product goals

- Maintain a complete, structured inventory of active and historical recruitment notices. **(Currently unmet — see note below.)**
- Provide clear pathways from category and district discovery pages to individual notices.
- Reduce stale information through defined publication, review, expiry, and correction workflows.
- Establish SearchSarkariNaukri as a trustworthy Maharashtra-first government-jobs resource with national coverage.

## 3. SEO goals

- Earn visibility for high-intent queries around government jobs, recruiting bodies, exams, districts, eligibility, results, and admit cards.
- Build indexable, genuinely useful category, district, and recruitment-detail pages. **(Currently unmet for recruitment-detail pages — see note below.)**
- Maintain crawlable navigation, XML sitemap coverage, accurate canonical URLs, and structured data where appropriate. **(Structured data caveat — see note below.)**
- Avoid thin, duplicate, expired-without-context, or programmatically generated pages that do not help candidates. **(Currently violated — see note below.)**

## 4. Business and measurement goals

The primary conversion event is **a candidate reaching an official application or notice link**. Secondary engagement events include use of the eligibility checker, visits to results/admit-card/calendar content, and returning sessions.

Initial targets are **TBD**. Establish a baseline first, then define targets for:

- Organic clicks and impressions.
- Active-job page views and search/filter use.
- Official apply-link outbound clicks.
- Returning users and engagement with utility pages.
- Freshness SLA compliance and correction turnaround time.

**Note:** The SEO audit series (`02_HIGH_PRIORITY_ISSUES.md`, `09_BACKLINK_ISSUES.md`, `08_KEYWORD_ISSUES.md`) has already published specific numeric targets (e.g. ranking keywords, referring domains, Authority Score) ahead of this baselining step, and two of the audit files disagree with each other on the Authority Score target (20+ vs. 40+). Those figures should be treated as illustrative only, not adopted as the initial targets this goal calls for. See `06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md` §1.2.

## 5. Non-goals

- The site must not present itself as the recruiting authority.
- It must not accept applications on behalf of government bodies unless an explicit, compliant integration is introduced.
- It must not publish unverified vacancies or imply that a candidate is guaranteed selection.

## Implementation notes (added 2 August 2026, based on live-site audit findings)

> Per this project's own rule in `README.md`: statements based on a future decision are marked **TBD** and must not be treated as implemented functionality. The notes below exist because live findings showed a gap between stated goal and current reality.

- **"See whether an opportunity is still active" / "complete, structured inventory."** A live, non-JavaScript fetch of job detail pages (e.g. `/jobs/3553`) returns generic homepage content instead of that job's own record — there is currently no crawlable, verifiable inventory of individual notices, active or historical. Tracked as **CR-007** in the SEO audit's `01_CRITICAL_ISSUES.md`. Both goals should be read as targets, not current state, until CR-007 closes.

- **"Build indexable, genuinely useful... recruitment-detail pages."** Same root cause as above — recruitment-detail pages are not currently indexable in any genuinely useful sense, since the content a search engine or AI crawler receives is not the job's own content.

- **"Avoid thin, duplicate... pages that do not help candidates."** This goal is currently being violated, not just at risk: `/jobs/:id` pages duplicate the homepage, and `/admit-cards` / `/results` duplicate each other's title and meta description with no body content. This is the same pattern the goal explicitly warns against.

- **Structured data caveat.** "Structured data where appropriate" is the correct standard, but the audit's schema-expansion recommendations (`JobPosting`, `FAQPage`) should not be implemented on templates affected by CR-007 — adding schema for content that isn't visibly present on the page is itself a violation of this goal's spirit and risks a Google structured-data manual action. Sequence schema expansion after CR-007 is resolved. See `06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md` §1.3.

---

_Last reviewed: 2026-08-02 — implementation notes added following SEO audit cross-check (see `06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md`)._
