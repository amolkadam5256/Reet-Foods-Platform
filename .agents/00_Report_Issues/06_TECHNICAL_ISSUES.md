# 06_TECHNICAL_ISSUES.md

> **Project:** SearchSarkariNaukri Enterprise SEO
>
> **Website:** https://www.searchsarkarinaukri.com
>
> **Module:** Technical SEO Audit
>
> **Priority:** P0 – P3
>
> **Status:** Open
>
> **Version:** 1.0

---


# 🟡 LIVE VERIFICATION UPDATE — 2 August 2026

- Confirms **TECH-011 (Core Web Vitals Failed)** framing is directionally right, but live inspection adds a sharper technical detail: the LCP/rendering problem is concentrated in dynamic routes. The homepage renders a reasonable non-JS fallback; `/jobs/:id`, `/admit-cards`, and `/results` do not render meaningful server-side content at all (see CR-007 in `01_CRITICAL_ISSUES.md`). Recommend the engineering team check whether SSR/SSG is enabled per-route rather than sitewide — it appears to be inconsistently applied.
- Language declaration (`en-IN`, TECH-008) is technically present, but live content is **not consistently English** — several templates (admit-cards, results, jobs listing chrome) render Marathi text. Recommend confirming whether `lang="en-IN"` is accurate for pages whose primary visible content is Marathi, or whether a `lang="mr-IN"` / hreflang split is more correct.
- HTTP/2, Analytics, SPF, and Hreflang status were not independently re-tested in this pass (these require header/DNS inspection tools beyond a content fetch) — they stand as originally documented.

---

# Overview

Technical SEO ensures search engines can efficiently discover, crawl, render, understand, and index website content.

This document contains all technical SEO findings identified during the audit.

---

# Technical SEO Health

| Category | Status |
|-----------|--------|
| HTTPS | ✅ Excellent |
| SSL | ✅ Enabled |
| Crawlability | ✅ Good |
| Indexability | ✅ Good |
| Robots.txt | ✅ Good |
| XML Sitemap | ✅ Good |
| Canonical | ✅ Good |
| Hreflang | ❌ Missing |
| HTTP/2 | ❌ Missing |
| Core Web Vitals | ❌ Failed |
| Schema | ✅ Good |
| Analytics | ❌ Missing |
| Language Tag | ✅ Good |
| Mobile Viewport | ✅ Good |
| JavaScript Errors | ✅ None |

---

# Technical Scorecard

| Component | Status | Priority |
|------------|--------|----------|
| HTTPS | ✅ | — |
| SSL | ✅ | — |
| Robots.txt | ✅ | — |
| XML Sitemap | ✅ | — |
| Canonical | ✅ | — |
| Lang Attribute | ✅ | — |
| JSON-LD | ✅ | — |
| Hreflang | ❌ | P2 |
| HTTP/2 | ❌ | P0 |
| Analytics | ❌ | P0 |
| Core Web Vitals | ❌ | P0 |

---

# TECH-001 — HTTPS

## Status

✅ Implemented

---

## Findings

- SSL Certificate Installed
- HTTPS Redirect Working
- Secure Connection Enabled

---

## Recommendation

No action required.

---

# TECH-002 — Robots.txt

## Status

✅ Healthy

---

## Findings

- robots.txt detected
- Search engines allowed
- AI crawlers allowed

---

## Recommendation

Continue maintaining robots.txt.

Review after every major release.

---

# TECH-003 — XML Sitemap

## Status

✅ Available

---

## Findings

- XML Sitemap detected
- Crawlable
- Accessible

---

## Recommendations

- Keep sitemap updated
- Remove orphan URLs
- Submit to Google Search Console
- Submit to Bing Webmaster Tools

---

# TECH-004 — Canonical URLs

## Status

✅ Implemented

---

## Findings

Canonical URLs detected.

No duplicate canonical issues identified in the audit.

---

## Recommendation

Ensure every page has a self-referencing canonical unless intentionally canonicalized elsewhere.

---

# TECH-005 — Hreflang

## Status

❌ Missing

---

## Impact

Missing hreflang may cause:

- Regional ambiguity
- Duplicate language interpretation
- Reduced international SEO performance

---

## Recommendation

If multilingual support is introduced:

```
hreflang="en-IN"
```

Implement alternate language references.

---

# TECH-006 — HTTP/2 Protocol

## Status

❌ Not Enabled

---

## Current

Website appears to be using an older HTTP protocol.

---

## Impact

- Slower parallel requests
- Increased latency
- Reduced performance
- Poorer Core Web Vitals

---

## Recommended Actions

- Enable HTTP/2
- Prefer HTTP/3 if supported
- Review Nginx configuration
- Verify CDN compatibility

---

# TECH-007 — Analytics

## Status

❌ Not Detected

---

## Missing

- Google Analytics 4
- Google Tag Manager
- Microsoft Clarity

---

## Impact

Without analytics you cannot measure:

- Organic traffic
- User behaviour
- Conversions
- Landing pages
- Events

---

## Recommendation

Implement:

- GA4
- GTM
- Microsoft Clarity

Verify tracking after deployment.

---

# TECH-008 — Language Declaration

## Status

✅ Correct

---

## Current

```
en-IN
```

---

## Recommendation

Maintain consistency across all pages.

---

# TECH-009 — Mobile Viewport

## Status

✅ Implemented

---

## Findings

Responsive viewport detected.

Mobile rendering supported.

---

## Recommendation

Continue testing on:

- Mobile
- Tablet
- Desktop

---

# TECH-010 — Structured Data

## Status

✅ Implemented

---

## Findings

JSON-LD detected.

Organization Schema detected.

---

## Recommendation

Expand schema coverage with:

- JobPosting
- Breadcrumb
- FAQ
- Article
- SearchAction
- WebSite

---

# TECH-011 — Core Web Vitals

## Status

❌ Failed

---

## Metrics

| Metric | Current | Target |
|---------|---------|---------|
| LCP | 6.0s | <2.5s |
| INP | 272ms | <200ms |
| CLS | 0.19 | <0.10 |

---

## Recommended Actions

- Reduce JavaScript
- Optimize LCP
- Improve CSS delivery
- Reduce layout shifts
- Optimize hydration

---

# TECH-012 — JavaScript

## Status

✅ No JavaScript Errors

---

## Findings

No JavaScript errors detected during audit.

---

## Recommendation

Continue monitoring after deployments.

---

# TECH-013 — Server

## Current Stack

Server

```
Nginx 1.24.0
```

Operating System

```
Ubuntu
```

---

## Recommendation

- Enable HTTP/2
- Monitor server response
- Optimize caching
- Review compression settings

---

# TECH-014 — Security

## Current Status

| Feature | Status |
|----------|--------|
| HTTPS | ✅ |
| SSL | ✅ |
| DMARC | ✅ |
| SPF | ❌ |

---

## Recommendation

Add SPF record to improve:

- Email security
- Deliverability
- Domain trust

---

# Technical SEO Checklist

## Infrastructure

- [x] HTTPS
- [x] SSL
- [x] Robots.txt
- [x] XML Sitemap
- [x] Canonical
- [ ] HTTP/2
- [ ] SPF Record

---

## Crawlability

- [x] Crawlable
- [x] Indexable
- [x] No Noindex
- [x] Search Engines Allowed

---

## Rendering

- [ ] Improve LCP
- [ ] Improve INP
- [ ] Improve CLS
- [ ] Reduce Rendered HTML

---

## Tracking

- [ ] GA4
- [ ] GTM
- [ ] Clarity

---

# Success Metrics

| KPI | Current | Target |
|------|----------|---------|
| HTTPS | Yes | Yes |
| Robots.txt | Yes | Yes |
| XML Sitemap | Yes | Yes |
| Hreflang | Missing | Implement |
| HTTP/2 | Missing | Enabled |
| GA4 | Missing | Installed |
| GTM | Missing | Installed |
| Clarity | Missing | Installed |
| LCP | 6.0s | <2.5s |
| INP | 272ms | <200ms |
| CLS | 0.19 | <0.10 |

---

# Related Documents

- 00_EXECUTIVE_SUMMARY.md
- 01_CRITICAL_ISSUES.md
- 05_ON_PAGE_ISSUES.md
- 07_CONTENT_ISSUES.md
- 10_GEO_AI_ISSUES.md
- 11_PERFORMANCE_ISSUES.md

---

**Document Status:** Active

**Owner:** Technical SEO Team

**Next Review:** After completion of all Technical SEO fixes.