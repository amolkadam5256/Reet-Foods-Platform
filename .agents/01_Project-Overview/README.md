# SearchSarkariNaukri Project Overview

This folder is the starting point for planning, building, operating, and improving [SearchSarkariNaukri](https://searchsarkarinaukri.com/).

| Document                                                                             | Purpose                                                                                                              |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| [01_PROJECT_OVERVIEW.md](01_PROJECT_OVERVIEW.md)                                     | Product definition, audience, current site coverage, and principles                                                  |
| [02_PROJECT_GOALS.md](02_PROJECT_GOALS.md)                                           | Business, user, content, SEO, and operational goals                                                                  |
| [03_SCOPE.md](03_SCOPE.md)                                                           | In-scope capabilities, exclusions, and future expansion                                                              |
| [04_REQUIREMENTS.md](04_REQUIREMENTS.md)                                             | Functional, data, quality, SEO, accessibility, and operational requirements                                          |
| [05_DOCUMENTATION_INDEX.md](05_DOCUMENTATION_INDEX.md)                               | Documentation ownership and implementation order                                                                     |
| [06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md](06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md) | Cross-check of the SEO audit findings against this requirements set — conflicts, coverage gaps, and TBD dependencies |
| [07_DEVELOPER_IMPLEMENTATION_GUIDE.md](07_DEVELOPER_IMPLEMENTATION_GUIDE.md)         | Developer-scoped guide for fixing CR-007 (rendering/content-delivery defect) with no UI/layout change                |

## Source of truth

The live website is the product reference. Statements in these documents based on a future decision are marked **TBD**; they must not be treated as implemented functionality.

## Current known gap

A live-site check (2 August 2026) found that job detail pages, `/admit-cards`, and `/results` do not serve unique, crawlable content — tracked as **CR-007** in the SEO audit's `01_CRITICAL_ISSUES.md` and cross-referenced throughout `01`–`05` in this folder as "(Currently unmet)" or "(Currently unverifiable)" notes. See `06_AUDIT_VS_REQUIREMENTS_GAP_ANALYSIS.md` for the full breakdown, and `07_DEVELOPER_IMPLEMENTATION_GUIDE.md` for the scoped engineering path to closing it without any UI/layout change. Until CR-007 is resolved, treat the affected statements in `01_PROJECT_OVERVIEW.md`, `02_PROJECT_GOALS.md`, `03_SCOPE.md`, and `04_REQUIREMENTS.md` as target state, not current state.

_Last reviewed: 2026-08-02 — updated to reference the SEO audit cross-check and its findings, and the CR-007 developer implementation guide._
