# Documentation Index and Build Order

## Start here

1. Read this folder to establish the product and operational baseline.
2. Use `../02_Business-Foundation/` for business context and positioning.
3. Use `../03_Project-Architecture/` for system architecture decisions.
4. Use the remaining numbered `.agents` folders for implementation domains: accounts, infrastructure, SEO, schema, tracking, automation, QA, audits, and operations. **(QA/audits coverage gap — see note below.)**

## Documentation ownership

| Area                               | Owner                                                                    | Review trigger                             |
| ---------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------ |
| Product overview, goals, and scope | Product/SEO lead                                                         | Major product or audience change           |
| Job-data rules and verification    | Editorial lead                                                           | Source/process change or factual incident  |
| Technical requirements             | Engineering lead                                                         | Architecture, platform, or security change |
| SEO requirements                   | SEO lead                                                                 | Search policy or site-structure change     |
| Analytics requirements             | Analytics lead                                                           | New conversion, feature, or privacy change |
| Accessibility requirements         | **Unassigned (see note below)**                                          | —                                          |
| Rendering / crawlability (CR-007)  | **Unassigned — recommend joint Engineering + SEO lead (see note below)** | Rendering strategy or template change      |

## Required decisions still marked TBD

- Editorial source-verification SLA and escalation route.
- Content language policy and translation-review process.
- Candidate-account, alert, and notification roadmap.
- KPI baselines and quarterly targets.
- Data-retention, privacy, and consent requirements.

## Change control

Update the relevant document when product scope, candidate-facing claims, critical data rules, or measurement definitions change. Add a dated note to the project changelog for material changes. **The SEO audit and the resulting gap analysis (`06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md`) qualify as a material change and should be logged accordingly — see note below.**

## Implementation notes (added 2 August 2026, based on live-site audit findings)

> These notes come from cross-checking the SEO audit series against this documentation set (`06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md`). They don't change the structure of this index, but flag where it currently understates what's outstanding.

- **"QA, audits" implementation domain.** This index assumes a QA/audits domain exists and is populated. In practice, only an SEO/technical audit has been performed. Two requirement areas defined in `04_REQUIREMENTS.md` — accessibility, and data/editorial accuracy — have **no audit at all**, not even a partial one. Recommend adding "Accessibility audit" and "Editorial/data-accuracy audit" as explicit near-term deliverables under this domain, not assuming they're covered by the existing SEO audit series.

- **Ownership gaps.** The existing ownership table has no row for accessibility requirements or for the newly identified cross-functional rendering issue (tracked as **CR-007** in `01_CRITICAL_ISSUES.md` — job, admit-card, and result pages serve duplicate/empty content to non-JS crawlers). CR-007 touches Engineering (rendering strategy), SEO (indexability), and Editorial (what a "listing" is supposed to contain) simultaneously, so it doesn't fit cleanly into a single existing row. Two new rows have been added above as a starting proposal — confirm actual ownership with the team rather than treating this as final.

- **TBD list vs. audit activity.** Two items already on this TBD list turned out to have live consequences worth flagging explicitly: the SEO audit's hreflang recommendation (`02_HIGH_PRIORITY_ISSUES.md` HP-006) gets ahead of the still-open "Content language policy" TBD, and the audit's analytics-installation recommendation (`01_CRITICAL_ISSUES.md` CR-004) gets ahead of the still-open "Data-retention, privacy, and consent requirements" TBD. No change to the TBD list itself is needed — both items are already correctly listed here — but recommend cross-referencing `06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md` §3 when these TBDs are finally resolved, since audit recommendations are already queued up behind them.

- **KPI baselines TBD.** Also already correctly listed here, but worth noting the SEO audit series has already published specific numeric targets (ranking keywords, referring domains, Authority Score) ahead of this decision, and two audit files disagree with each other on one target. Resolve this TBD with those existing figures treated as illustrative input, not as the baseline itself.

---

_Last reviewed: 2026-08-02 — implementation notes added following SEO audit cross-check (see `06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md`)._
