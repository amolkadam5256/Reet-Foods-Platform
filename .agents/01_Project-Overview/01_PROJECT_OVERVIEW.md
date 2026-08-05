# Project Overview

## Product

**SearchSarkariNaukri** is an India-focused government-jobs discovery and information platform. It helps candidates find current recruitment notices, understand eligibility and deadlines, and reach official application sources. Maharashtra is a core regional focus, while national opportunities are also covered.

## Current public site coverage

The public homepage currently provides discovery paths for:

- Exam and department categories: MPSC, UPSC, SSC, Railway, Banking, Police, Talathi, Zilla Parishad, Forest, Health, Education, and Central Government jobs.
- Maharashtra district pages, including a directory for all 36 districts.
- Active job vacancies, admit cards, results, an exam calendar, daily current affairs, an eligibility checker, and study material.
- Official-application-oriented job listings with deadlines.

## Primary users

1. Maharashtra job seekers looking for district, department, or exam-specific recruitment.
2. Candidates across India searching for central-government and national exam opportunities.
3. Returning exam candidates monitoring admit cards, results, and dates.
4. Students seeking eligibility guidance and preparation resources.

## User value proposition

Give candidates a fast, trustworthy answer to: **Which government opportunities can I apply for, am I eligible, and where is the official next step?**

## Product principles

- Accuracy before publishing speed.
- Link to the authoritative recruitment notice or official application portal whenever available.
- Make important facts—eligibility, location, last date, fees, and application route—easy to scan.
- Treat expired, changed, or cancelled notices transparently. **(Currently unmet — see note below.)**
- Prioritize mobile usability, because job discovery is commonly performed on phones.
- Publish Marathi and English information where the audience requires it. **Language handling is not yet a settled product decision — see note below.**

## Implementation notes (added 2 August 2026, based on live-site audit findings)

> Per this project's own rule in `README.md`: statements based on a future decision are marked **TBD** and must not be treated as implemented functionality. The two notes below exist because live findings showed a gap between stated principle and current reality.

- **Expired/changed/cancelled notice handling — not currently achievable.** A live, non-JavaScript fetch of job detail pages (e.g. `/jobs/3553`) returns generic homepage content rather than that job's own record — there is no job-specific status field present for a crawler, and by extension no way to confirm this is handled correctly for any visitor relying on that fetch. This principle cannot be considered met until the underlying rendering issue (tracked as **CR-007** in the SEO audit's `01_CRITICAL_ISSUES.md`) is resolved. Recommend treating this bullet as a target, not a current state, until CR-007 closes. See `07_DEVELOPER_IMPLEMENTATION_GUIDE.md` for the scoped engineering fix path.

- **Language handling — policy is TBD, not yet "clear."** `05_DOCUMENTATION_INDEX.md` lists "Content language policy and translation-review process" as an open, unresolved decision. Live checks found English on the homepage and Marathi on `/admit-cards` and `/results` with no apparent governing logic (not a deliberate per-section split, not hreflang-marked). Until the language policy TBD is resolved, this bullet describes an intended future state rather than an implemented one.

## Success definition

The product succeeds when candidates can reliably discover relevant, current opportunities and complete the next official action with confidence, while the site earns sustainable organic visibility and repeat visits.

---

_Last reviewed: 2026-08-02 — implementation notes added following SEO audit cross-check (see `06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md`); CR-007 remediation cross-referenced to `07_DEVELOPER_IMPLEMENTATION_GUIDE.md`._
