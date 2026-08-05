# 03_MEDIUM_PRIORITY_ISSUES.md

> **Project:** SearchSarkariNaukri Enterprise SEO
>
> **Website:** https://www.searchsarkarinaukri.com
>
> **Priority Level:** 🟡 Medium Priority (P2)
>
> **Status:** Open
>
> **Version:** 1.0

---


# 🟡 LIVE VERIFICATION UPDATE — 2 August 2026

- **MP-003 (Reduce Rendered HTML, 837%)** — confirmed still relevant, but re-scoped: the live check found this isn't only a size/performance issue. `/admit-cards` and `/results` render **no body content at all** without JavaScript, and `/jobs/:id` pages render **generic homepage content** instead of unique job data. This has been escalated to a new Critical issue (**CR-007** in `01_CRITICAL_ISSUES.md`) — recommend re-classifying MP-003 as a sub-task of CR-007 rather than a standalone P2.
- **MP-002 (Friendly URL Structure)** — URLs observed during the live check (`/jobs/3553`, `/admit-cards`, `/results`, `/jobs?category=mpsc`, `/jobs?district_slug=pune`) are reasonably clean, though job detail URLs use numeric IDs (`/jobs/3553`) rather than descriptive slugs. Recommend adding descriptive slugs (e.g. `/jobs/mpsc-recruitment-2026-3553`) for both usability and keyword relevance.
- Other MP items (site speed, internal linking, content hierarchy, keyword coverage, entity optimization) were not independently re-measured in this pass and stand as originally documented.

---

# Purpose

This document contains all **Medium Priority (P2)** SEO issues identified during the audit.

These issues are **not critical blockers**, but resolving them will significantly improve:

- Search Visibility
- User Experience
- Crawl Efficiency
- AI Search Optimization
- Content Quality
- Technical SEO Score

These tasks should begin immediately after completing all **Critical (P0)** and **High Priority (P1)** issues.

---

# Medium Priority Dashboard

| ID | Issue | Category | Impact | Status |
|----|--------|----------|---------|--------|
| MP-001 | Improve Site Load Speed | Performance | ⭐⭐⭐⭐ | Open |
| MP-002 | Friendly URL Structure | Technical SEO | ⭐⭐⭐ | Open |
| MP-003 | Reduce Rendered HTML | GEO / AI SEO | ⭐⭐⭐⭐ | Open |
| MP-004 | Improve Internal Link Structure | Technical SEO | ⭐⭐⭐ | Open |
| MP-005 | Improve Content Hierarchy | Content SEO | ⭐⭐⭐ | Open |
| MP-006 | Expand Keyword Coverage | Keyword SEO | ⭐⭐⭐⭐ | Open |
| MP-007 | Improve Entity Optimization | AI SEO | ⭐⭐⭐ | Open |

---

# MP-001 — Improve Site Load Speed

## Current Status

| Metric | Current |
|---------|---------|
| Server Response | 0.813s |
| Fully Loaded | 2.5s |
| Scripts Complete | 5.5s |

---

## Why It Matters

A slow website can lead to:

- Higher bounce rates
- Lower rankings
- Poor user experience
- Reduced conversions

---

## Recommended Actions

- Optimize JavaScript execution
- Reduce unused JavaScript
- Enable browser caching
- Reduce third-party scripts
- Improve server response time
- Optimize loading sequence
- Use lazy loading where appropriate

---

## Expected Result

- Faster page rendering
- Better user experience
- Improved Core Web Vitals

---

# MP-002 — Improve URL Structure

## Current Status

Some URLs are not user-friendly.

---

## Why It Matters

SEO-friendly URLs help:

- Users understand page topics
- Search engines identify relevance
- Improve CTR
- Improve crawling

---

## Recommended Structure

Good Example

```

/mpsc-recruitment-2026

```

Avoid

```

/page?id=12345

```

---

## Best Practices

- Short URLs
- Descriptive URLs
- Hyphen separated
- Lowercase
- No unnecessary parameters

---

# MP-003 — Reduce Rendered HTML

## Current Status

Rendered Content

837%

---

## Why It Matters

Heavy client-side rendering may reduce visibility for:

- AI Crawlers
- Search Engines
- Low-resource crawlers

---

## Recommended Actions

- Prefer Server Side Rendering
- Increase Static Generation
- Reduce client hydration
- Reduce JavaScript dependency
- Optimize React components

---

## Target

Reduce rendered content significantly while preserving functionality.

---

# MP-004 — Improve Internal Linking

## Current Status

Internal Links

222

---

## Opportunities

Improve contextual linking between:

- Government Jobs
- Admit Cards
- Results
- Syllabus
- Answer Keys
- Current Affairs
- Blogs

---

## Benefits

- Better crawl depth
- Stronger topical authority
- Better PageRank distribution

---

## Recommended Actions

- Add contextual links
- Create hub pages
- Link related job posts
- Add breadcrumb navigation
- Strengthen category pages

---

# MP-005 — Improve Content Hierarchy

## Current Status

Multiple heading levels exist, but hierarchy can be improved.

---

## Recommended Structure

```

H1

├── Introduction

├── H2

│ ├── H3

│ ├── H3

│ └── H3

├── FAQ

└── Related Jobs

```

---

## Goal

Create consistent page structure across the website.

---

# MP-006 — Expand Keyword Coverage

## Current Status

Only a small number of keywords are ranking.

---

## Goal

Expand keyword coverage using:

- Long-tail keywords
- State-wise job keywords
- Department-wise keywords
- Recruitment year keywords
- Exam-specific keywords

---

## Recommended Actions

- Build keyword clusters
- Add semantic keywords
- Target informational searches
- Target transactional searches

---

# MP-007 — Improve Entity Optimization

## Current Status

Organization Schema detected.

---

## Opportunities

Expand entity coverage by adding:

- Government Departments
- Exams
- Organizations
- Locations
- Educational Institutions
- Recruiting Authorities

---

## Recommended Actions

- Improve structured data
- Strengthen entity relationships
- Add supporting content
- Expand topical coverage

---

# Implementation Timeline

## Week 1

- Improve page speed
- Review URL structure

---

## Week 2

- Optimize rendering
- Improve internal links

---

## Week 3

- Improve content hierarchy
- Expand keyword coverage

---

## Week 4

- Strengthen entity optimization
- Re-audit performance

---

# Success Metrics

| KPI | Current | Target |
|------|----------|---------|
| Fully Loaded | 2.5s | <2.0s |
| Scripts Complete | 5.5s | <3.0s |
| Internal Links | 222 | Optimized |
| Rendered HTML | 837% | Reduced |
| Keyword Coverage | Limited | Expanded |
| Entity Coverage | Basic | Comprehensive |

---

# Completion Checklist

- [ ] Improve page speed
- [ ] Optimize URLs
- [ ] Reduce rendered HTML
- [ ] Improve internal linking
- [ ] Standardize content hierarchy
- [ ] Expand keyword coverage
- [ ] Improve entity optimization
- [ ] Validate improvements

---

# Related Documents

- 00_EXECUTIVE_SUMMARY.md
- 01_CRITICAL_ISSUES.md
- 02_HIGH_PRIORITY_ISSUES.md
- 04_LOW_PRIORITY_ISSUES.md
- 05_TECHNICAL_ISSUES.md
- 08_KEYWORD_ISSUES.md
- 09_BACKLINK_ISSUES.md
- 10_GEO_AI_ISSUES.md

---

> **Document Status:** Active
>
> **Next Review:** After completion of all P2 issues.