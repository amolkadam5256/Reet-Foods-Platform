# 05_ON_PAGE_ISSUES.md

> **Project:** SearchSarkariNaukri Enterprise SEO
>
> **Website:** https://www.searchsarkarinaukri.com
>
> **Module:** On-Page SEO Audit
>
> **Priority:** Mixed (P0–P3)
>
> **Status:** Open
>
> **Version:** 1.0

---


# 🟡 LIVE VERIFICATION UPDATE — 2 August 2026

## Corrected Findings

| Item | Document Said | Live Check Found (2 Aug 2026) |
|------|----------------|-------------------------------|
| Homepage title | "Sarkari Naukri 2026 — Latest Government Jobs in India \| SearchSarkariNaukri", 75 chars | "SearchSarkariNaukri — Latest Government Jobs in India", 55 chars — **within target already** |
| Homepage meta description | 205 chars, English | ~140 chars, Marathi — within length target but different content than documented |
| H1 | "Multiple H1 tags detected" | Homepage renders exactly **one** H1 ("SearchSarkariNaukri — Latest Government Jobs in India") in the non-JS fetch. `/admit-cards` and `/results` render **zero** H1s (no body content at all) — a different but more serious problem than duplicate H1s. Recommend re-verifying OP-003 on category/job template pages specifically, since the homepage no longer shows the duplicate-H1 pattern described. |
| Content length (3,281 words) | Homepage | Not independently re-counted in this pass; the non-JS fetch of the homepage is well under 3,281 words, but that's expected since additional content likely loads client-side — this itself reinforces the CR-007 rendering issue in `01_CRITICAL_ISSUES.md`. |

## New Note

Section index pages (`/admit-cards`, `/results`) currently have **no on-page SEO to evaluate** — no title uniqueness, no H1, no body copy — because nothing renders server-side. Fixing this (see CR-007) is a prerequisite before most on-page recommendations in this document can even apply to those templates.

---

# Overview

This document contains the complete On-Page SEO audit findings for SearchSarkariNaukri.com.

On-Page SEO ensures that search engines can correctly understand page content, determine topical relevance, and rank pages for the appropriate search queries.

This audit evaluates:

- Title Tags
- Meta Descriptions
- Heading Structure
- Keywords
- Content
- Images
- Internal Linking
- URL Optimization
- HTML Structure
- SERP Optimization

---

# Overall On-Page SEO Status

| Category | Status |
|-----------|---------|
| Title Tags | 🟡 Needs Improvement |
| Meta Descriptions | 🟡 Needs Improvement |
| H1 Structure | 🔴 Issue Found |
| Heading Hierarchy | ✅ Good |
| Content Depth | ✅ Good |
| Keyword Usage | 🟡 Moderate |
| Image ALT | ✅ Good |
| Canonical | ✅ Good |
| Robots | ✅ Good |
| XML Sitemap | ✅ Good |

---

# On-Page Scorecard

| Area | Status |
|------|---------|
| Title Tag | ⚠️ |
| Meta Description | ⚠️ |
| H1 Tag | ❌ |
| H2-H6 Structure | ✅ |
| Keywords | ⚠️ |
| Content Length | ✅ |
| Images | ✅ |
| Canonical | ✅ |
| Indexability | ✅ |

---

# OP-001 — Title Tag Optimization

## Current Status

Current Title

```
Sarkari Naukri 2026 — Latest Government Jobs in India | SearchSarkariNaukri
```

Length

75 Characters

---

## Issue

Google generally displays around

50–60 characters.

Long titles may be truncated.

---

## Impact

- Lower CTR
- Truncated SERP titles
- Keyword dilution

---

## Recommendation

Use

Primary Keyword

+

Brand Name

Example

```
Sarkari Naukri 2026 | Latest Government Jobs | SearchSarkariNaukri
```

---

# OP-002 — Meta Description Optimization

## Current Status

Length

205 Characters

---

## Issue

Recommended length

120–160 characters

---

## Impact

Long descriptions may be cut off in search results.

---

## Recommendation

Write

- Clear
- Keyword-rich
- Action-oriented
- Under 160 characters

---

# OP-003 — Duplicate H1 Tags

## Current Status

Multiple H1 Tags detected.

---

## Why It Matters

Every page should have

ONE

Primary H1.

---

## Recommendation

Structure

```
H1

↓

H2

↓

H3

↓

H4
```

Never use multiple H1s.

---

# OP-004 — Heading Structure

## Current Status

| Heading | Count |
|----------|-------|
| H1 | Multiple |
| H2 | 18 |
| H3 | 34 |
| H4 | 3 |

---

## Recommendation

Maintain

- One H1
- Logical H2
- Supporting H3

Avoid skipping heading levels.

---

# OP-005 — Keyword Optimization

## Current Status

Keywords are not properly distributed across

- Title
- Meta Description
- H1
- Headings

---

## Recommendation

Each page should contain

Primary Keyword

Secondary Keywords

Semantic Keywords

Entities

Naturally throughout the page.

---

# OP-006 — Content Quality

## Current Status

Word Count

3281

---

## Positive Findings

✔ High content volume

✔ Useful information

✔ Good topical depth

---

## Recommendations

- Improve readability
- Break large paragraphs
- Add FAQs
- Add comparison tables
- Add internal references

---

# OP-007 — Image Optimization

## Current Status

Image ALT

✅ Present

---

## Recommendation

Continue using

- Descriptive ALT text
- Keyword relevance
- Accessibility best practices

---

# OP-008 — Canonical URLs

## Current Status

Canonical Tag

Present

---

## Status

✅ Good

---

# OP-009 — Robots & Indexing

## Current Status

Robots.txt

✅ Available

Noindex

Not Present

Indexing

Allowed

---

## Status

Healthy

---

# OP-010 — XML Sitemap

## Current Status

XML Sitemap

Available

---

## Recommendation

- Keep updated
- Submit to Google Search Console
- Submit to Bing Webmaster Tools

---

# OP-011 — Language Declaration

## Current Status

Language

```
en-IN
```

---

## Status

Correct

---

# OP-012 — SERP Optimization

## Current Issues

- Long Title
- Long Meta Description

---

## Recommendations

Improve

- CTR
- Rich Snippets
- Search Preview

---

# On-Page Checklist

## Titles

- [ ] 50–60 characters
- [ ] Primary keyword
- [ ] Brand name

---

## Meta

- [ ] 120–160 characters
- [ ] Call to action
- [ ] Primary keyword

---

## Headings

- [ ] One H1
- [ ] Proper hierarchy
- [ ] Keyword optimized

---

## Content

- [ ] Unique
- [ ] Helpful
- [ ] EEAT compliant
- [ ] AI friendly

---

## Images

- [ ] ALT Text
- [ ] Optimized size
- [ ] Lazy loading

---

## Internal Links

- [ ] Contextual
- [ ] Relevant
- [ ] Descriptive anchor text

---

# Success Metrics

| KPI | Current | Target |
|------|----------|---------|
| Title Length | 75 | <60 |
| Meta Length | 205 | <160 |
| H1 Tags | Multiple | One |
| Content Length | 3281 | Maintain |
| Image ALT | Good | 100% |
| Canonical | Yes | Yes |
| XML Sitemap | Yes | Yes |

---

# Related Documents

- 00_EXECUTIVE_SUMMARY.md
- 01_CRITICAL_ISSUES.md
- 02_HIGH_PRIORITY_ISSUES.md
- 06_TECHNICAL_ISSUES.md
- 07_CONTENT_ISSUES.md
- 08_KEYWORD_ISSUES.md

---

**Document Status:** Active

**Next Review:** After all On-Page SEO fixes are implemented.