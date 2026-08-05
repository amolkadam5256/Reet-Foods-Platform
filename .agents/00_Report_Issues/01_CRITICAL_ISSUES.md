# 01_CRITICAL_ISSUES.md

> **Project:** SearchSarkariNaukri Enterprise SEO
>
> **Website:** https://www.searchsarkarinaukri.com
>
> **Audit Category:** Critical Issues (P0)
>
> **Priority:** 🔴 Critical
>
> **Status:** Open
>
> **Last Updated:** 31 July 2026

---

# 🔴 LIVE VERIFICATION UPDATE — 2 August 2026

Direct fetches of `/`, `/jobs/3553`, `/admit-cards`, and `/results` (simulating a non-JS crawler, similar to how many AI crawlers and some Googlebot passes see the site) confirm a **new Critical issue, CR-007**, added below. It is assessed as **higher impact than CR-005 and CR-006** and should be actioned first, right after CR-001/CR-002/CR-003/CR-004.

---

# CR-007 — Duplicate & Thin Content in Non-JS Rendered Output (NEW)

## Current Status

❌ Confirmed via live fetch, 2 Aug 2026

## Findings

- `https://www.searchsarkarinaukri.com/jobs/3553` returns **identical title, meta description, and body content** to the homepage — no unique job title, vacancy count, eligibility, or last date visible without JavaScript execution.
- `https://www.searchsarkarinaukri.com/admit-cards` and `https://www.searchsarkarinaukri.com/results` return the **same title and meta description as each other** (in Marathi) and contain **no body content whatsoever** — just frontmatter metadata, no H1, no text.
- Homepage title/meta differ from what earlier audit tooling captured, and are inconsistently bilingual (English on `/`, Marathi on `/admit-cards`, `/results`).

## Business Impact

- Search engines and AI crawlers relying on non-JS fetches see **duplicate titles and meta descriptions across distinct URLs** — a classic duplicate-content signal that suppresses rankings for all but one competing URL.
- Job, admit card, and result pages — the actual money pages for a Sarkari Naukri site — currently look **empty or generic to crawlers**, which likely explains the extremely low organic keyword count (9) despite high word count elsewhere.
- Directly undermines GEO/AI citation potential (see `10_GEO_AI_ISSUES.md`, GEO-013): an LLM crawler fetching these URLs today would have no unique facts to cite.

## Root Cause

Client-side rendering (Next.js) without adequate Server-Side Rendering / Static Generation for dynamic route types (`/jobs/:id`) and for section index pages (`/admit-cards`, `/results`). This is the same underlying cause flagged more mildly in HP-007 (837% rendered HTML) but the live check shows the practical effect is worse than a performance metric implies — it is a content-visibility failure, not just a speed one.

## Recommended Actions (Immediate)

- Implement SSR or SSG (`getServerSideProps` / `generateStaticParams` in Next.js App Router) for all `/jobs/:id` pages so each serves its own unique title, meta description, H1, and body text without requiring JS execution.
- Ensure `/admit-cards` and `/results` render their own unique title, meta description, and at least a summary list of items server-side.
- Re-run a raw HTML (non-JS) fetch against a sample of 10–20 URLs across job pages, admit cards, results, and district pages to confirm each returns unique, substantive content before closing this issue.
- Decide on and enforce one consistent primary content language per template (see language-consistency note); if bilingual by design, implement proper hreflang rather than silently mixing languages by page type.

## Estimated Impact

⭐⭐⭐⭐⭐ Very High — likely the single largest blocker to organic and AI visibility growth.

---

# Overview

This document contains the **highest priority SEO issues** identified during the initial enterprise SEO audit.

These issues have the greatest impact on:

- Organic Rankings
- Indexability
- User Experience
- AI Visibility
- Organic Traffic
- Authority
- Revenue Growth

These problems should be fixed **before any keyword research, content creation, or link-building campaign** begins.

---

# Priority Legend

| Priority | Meaning  | Timeline            |
| -------- | -------- | ------------------- |
| 🔴 P0    | Critical | Immediately         |
| 🟠 P1    | High     | Within 7 Days       |
| 🟡 P2    | Medium   | Within 30 Days      |
| 🟢 P3    | Low      | Future Optimization |

---

# Critical Issues Dashboard

| ID     | Issue                                                    | Category            | Priority | Status |
| ------ | -------------------------------------------------------- | ------------------- | -------- | ------ |
| CR-001 | Core Web Vitals Failed                                   | Performance         | 🔴 P0    | Open   |
| CR-002 | Organic Visibility Extremely Low                         | SEO                 | 🔴 P0    | Open   |
| CR-003 | Authority Score Very Low                                 | Authority           | 🔴 P0    | Open   |
| CR-004 | Analytics Not Detected                                   | Analytics           | 🔴 P0    | Open   |
| CR-005 | HTTP/2 Protocol Not Enabled                              | Infrastructure      | 🔴 P0    | Open   |
| CR-006 | SPF Record Missing                                       | Security            | 🔴 P0    | Open   |
| CR-007 | Duplicate & Thin Content in Non-JS Rendered Output (NEW) | Rendering / Content | 🔴 P0    | Open   |

---

# CR-001 — Core Web Vitals Failed

## Current Status

❌ Failed

---

## Current Metrics

| Metric                    | Current | Google Target | Status |
| ------------------------- | ------- | ------------- | ------ |
| Largest Contentful Paint  | 6.0s    | <2.5s         | ❌     |
| Interaction to Next Paint | 272ms   | <200ms        | ❌     |
| Cumulative Layout Shift   | 0.19    | <0.10         | ❌     |

---

## Business Impact

A poor Core Web Vitals score can result in:

- Lower Google rankings
- Reduced Page Experience score
- Higher bounce rate
- Slower loading pages
- Poor mobile experience
- Lower conversions

---

## Possible Root Causes

- Slow server response
- Render blocking JavaScript
- Large React hydration
- Excessive client-side rendering
- Large DOM size
- Poor image prioritization
- Font loading delays

---

## Recommended Actions

- Optimize LCP element
- Reduce JavaScript execution
- Implement lazy loading
- Use Next.js Image Optimization
- Enable HTTP/2 or HTTP/3
- Optimize font loading
- Reduce layout shifts

---

## Estimated Impact

⭐⭐⭐⭐⭐ Very High

---

# CR-002 — Organic Visibility Extremely Low

## Current Status

Current Organic Keywords

9

Organic Traffic

Near Zero

AI Visibility

0

ChatGPT Visibility

0

Gemini Visibility

0

AI Overview Presence

0

---

## Business Impact

The website is not receiving meaningful organic traffic despite having indexable pages.

Without organic visibility:

- Users cannot discover the website
- Government job pages receive little traffic
- Brand awareness remains low
- Long-term SEO growth is limited

---

## Root Causes

- Weak authority
- Limited backlinks
- Insufficient keyword coverage
- Competitive niche
- Low topical authority
- Limited entity recognition

---

## Recommended Actions

- Build topical authority
- Expand keyword coverage
- Improve internal linking
- Launch programmatic SEO
- Strengthen EEAT
- Improve AI Search Optimization

---

## Estimated Impact

⭐⭐⭐⭐⭐ Very High

---

# CR-003 — Authority Score Very Low

## Current Metrics

Authority Score

2

Backlinks

54

Referring Domains

26

Government Links

0

Education Links

0

---

## Why This Matters

Google heavily relies on authority signals.

Without high-quality backlinks:

- Rankings remain unstable
- Competitive keywords become difficult
- Trust signals remain weak
- AI search engines cite competitors instead

---

## Root Causes

- Limited backlink acquisition
- No Digital PR
- No authority outreach
- Few natural citations
- Weak referring domains

---

## Recommended Actions

- Enterprise Link Building
- Guest Posting
- Digital PR
- HARO
- Resource Pages
- Government Citations
- Educational Citations
- Broken Link Building

---

## Estimated Impact

⭐⭐⭐⭐⭐ Very High

---

# CR-004 — Analytics Not Detected

## Current Status

Analytics

❌ Not Detected

---

## Why This Matters

Without analytics the SEO team cannot measure:

- Organic Traffic
- User Behaviour
- Landing Pages
- Conversions
- Events
- Revenue Attribution

SEO decisions become assumptions instead of data-driven improvements.

---

## Missing Platforms

- Google Analytics 4
- Google Tag Manager
- Microsoft Clarity

---

## Recommended Actions

Install

- GA4
- GTM
- Clarity

Verify

- Events
- Conversions
- Scroll Tracking
- Click Tracking

---

## Estimated Impact

⭐⭐⭐⭐⭐ Very High

---

# CR-005 — HTTP/2 Not Enabled

## Current Status

Website currently serves using an outdated HTTP protocol.

---

## Why This Matters

HTTP/2 improves

- Parallel downloads
- Faster page loading
- Reduced latency
- Better Core Web Vitals

---

## Recommended Actions

- Enable HTTP/2
- Prefer HTTP/3 where supported
- Verify CDN configuration
- Review Nginx configuration

---

## Estimated Impact

⭐⭐⭐⭐ High

---

# CR-006 — SPF Record Missing

## Current Status

SPF Record

❌ Missing

---

## Business Impact

Missing SPF records can cause

- Email spoofing
- Spam classification
- Poor email deliverability
- Security risks

---

## Recommended Actions

- Add SPF DNS record
- Validate using MXToolbox
- Verify with Google Workspace or email provider

---

## Estimated Impact

⭐⭐⭐⭐ High

---

# Critical Issue Summary

| Category    | Total Issues |
| ----------- | ------------ |
| Technical   | 2            |
| Performance | 1            |
| Analytics   | 1            |
| Authority   | 1            |
| Security    | 1            |

---

# Immediate Action Plan (Next 7 Days)

## Day 1

- Install GA4
- Install GTM
- Install Microsoft Clarity

---

## Day 2

- Enable HTTP/2
- Configure SPF

---

## Day 3

- Optimize Largest Contentful Paint
- Reduce JavaScript execution
- Improve CLS

---

## Day 4

- Audit rendering strategy
- Reduce hydration
- Improve loading sequence

---

## Day 5

- Start backlink outreach
- Create authority-building campaign

---

## Day 6

- Expand keyword coverage
- Improve topical authority

---

## Day 7

- Re-run complete technical audit
- Validate fixes
- Update issue tracker

---

# Success Criteria

The following targets should be achieved before moving to the next implementation phase.

| KPI               | Current  | Target           |
| ----------------- | -------- | ---------------- |
| Core Web Vitals   | Failed   | Pass             |
| LCP               | 6.0s     | <2.5s            |
| INP               | 272ms    | <200ms           |
| CLS               | 0.19     | <0.10            |
| Authority Score   | 2        | 20+              |
| Referring Domains | 26       | 100+             |
| Organic Keywords  | 9        | 500+             |
| Analytics         | Missing  | Fully Configured |
| HTTP Protocol     | HTTP/1.x | HTTP/2 or HTTP/3 |
| SPF Record        | Missing  | Configured       |

---

# Implementation Rules

Before making any SEO changes:

- Review the related detailed report.
- Verify current production behavior.
- Test changes in staging.
- Validate with Google Rich Results Test.
- Validate using PageSpeed Insights.
- Confirm Search Console indexing.
- Record implementation status.

# Verification Checklist

Before closing any issue:

- [ ] Development completed
- [ ] QA completed
- [ ] SEO validation completed
- [ ] Performance verified
- [ ] Schema validated
- [ ] Search Console verified
- [ ] Documentation updated

---

# Related Documents

- 00_EXECUTIVE_SUMMARY.md
- 02_HIGH_PRIORITY_ISSUES.md
- 03_MEDIUM_PRIORITY_ISSUES.md
- 04_LOW_PRIORITY_ISSUES.md
- 05_TECHNICAL_ISSUES.md
- 11_PERFORMANCE_ISSUES.md
- 12_PRIORITY_MATRIX.md
- 13_QUICK_WINS.md

---

> **Document Status:** Active
>
> **Next Review:** After implementation of all P0 issues.
