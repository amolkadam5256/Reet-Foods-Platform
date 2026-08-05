# 11_PERFORMANCE_ISSUES.md

> **Project:** SearchSarkariNaukri Enterprise SEO
>
> **Website:** https://www.searchsarkarinaukri.com
>
> **Module:** Website Performance & Core Web Vitals Audit
>
> **Priority:** P0 – P3
>
> **Status:** Open
>
> **Version:** 1.0

---


# 🟡 LIVE VERIFICATION UPDATE — 2 August 2026

**PERF-009 (Rendered HTML, 837%)** is confirmed as a real issue but the live check shows it's more severe on certain templates than others: the homepage returns a reasonable non-JS fallback, while `/jobs/:id`, `/admit-cards`, and `/results` return generic or empty content without JS (tracked as new Critical issue **CR-007** in `01_CRITICAL_ISSUES.md`). Recommend prioritizing SSR/SSG fixes for those three template types first, since they are both the highest-traffic-intent pages (jobs, admit cards, results) and currently the worst-affected. Core Web Vitals (LCP 6.0s, INP 272ms, CLS 0.19) were not independently re-measured in this pass — a Lighthouse/PageSpeed re-run is recommended before closing PERF-001–003.

---

# Overview

Website performance directly impacts:

- Google Rankings
- Core Web Vitals
- User Experience
- Crawl Efficiency
- Conversion Rate
- AI Search Rendering

This document identifies all performance bottlenecks and provides a complete optimization roadmap.

---

# Performance Health Summary

| Category | Status |
|-----------|---------|
| Core Web Vitals | 🔴 Failed |
| LCP | 🔴 Poor |
| INP | 🟡 Needs Improvement |
| CLS | 🟡 Needs Improvement |
| Server Response | 🟡 Moderate |
| JavaScript | 🟡 Heavy |
| CSS | 🟡 Moderate |
| Images | 🟢 Good |
| Fonts | 🟡 Optimize |
| HTTP/2 | ❌ Missing |

---

# Performance Scorecard

| Metric | Current | Target | Priority |
|---------|---------|---------|----------|
| LCP | 6.0s | <2.5s | P0 |
| INP | 272ms | <200ms | P0 |
| CLS | 0.19 | <0.10 | P0 |
| Server Response | 0.813s | <0.5s | P1 |
| Fully Loaded | 2.5s | <2.0s | P1 |
| Scripts Complete | 5.5s | <3.0s | P1 |

---

# PERF-001 — Largest Contentful Paint (LCP)

## Current Status

Current LCP

```
6.0 Seconds
```

---

## Impact

Poor LCP causes:

- Lower Google rankings
- Poor user experience
- Lower engagement
- Higher bounce rate

---

## Possible Causes

- Slow server response
- Large hero images
- Render-blocking CSS
- Heavy JavaScript
- Delayed font loading

---

## Recommended Actions

- Optimize hero image
- Preload LCP resources
- Reduce render-blocking CSS
- Enable server caching
- Optimize JavaScript execution

---

# PERF-002 — Interaction to Next Paint (INP)

## Current

```
272 ms
```

---

## Target

```
Below 200 ms
```

---

## Recommendations

- Reduce JavaScript execution
- Split large bundles
- Remove unused libraries
- Use passive event listeners
- Optimize React rendering

---

# PERF-003 — Cumulative Layout Shift (CLS)

## Current

```
0.19
```

---

## Target

```
Below 0.10
```

---

## Common Causes

- Images without dimensions
- Dynamic banners
- Font swapping
- Late-loading components

---

## Recommendations

- Define image dimensions
- Reserve layout space
- Preload fonts
- Avoid unexpected layout changes

---

# PERF-004 — Server Response Time

## Current

```
0.813 Seconds
```

---

## Recommendations

- Optimize Nginx configuration
- Enable FastCGI cache
- Optimize database queries
- Use CDN
- Improve server resources

---

# PERF-005 — JavaScript Optimization

## Findings

Heavy client-side rendering increases load time.

---

## Recommendations

- Code splitting
- Tree shaking
- Dynamic imports
- Remove unused JavaScript
- Minify bundles

---

# PERF-006 — CSS Optimization

## Recommendations

- Remove unused CSS
- Inline critical CSS
- Minify stylesheets
- Defer non-critical CSS

---

# PERF-007 — Image Optimization

## Current Status

Images are generally optimized.

---

## Further Improvements

- Next-gen formats (WebP/AVIF)
- Lazy loading
- Responsive images
- Compression
- CDN delivery

---

# PERF-008 — Font Optimization

## Recommendations

- Preload fonts
- Self-host fonts
- Use font-display: swap
- Limit font families
- Reduce font weights

---

# PERF-009 — Rendered HTML

## Current

```
837%
```

---

## Why It Matters

Large rendered HTML indicates excessive client-side rendering.

---

## Recommendations

- Increase Server Side Rendering
- Use Static Site Generation
- Reduce hydration
- Optimize React components

---

# PERF-010 — HTTP Protocol

## Current

HTTP/2 not detected.

---

## Recommendations

- Enable HTTP/2
- Prefer HTTP/3
- Verify CDN compatibility

---

# PERF-011 — Browser Caching

## Recommended

Enable caching for:

- CSS
- JavaScript
- Fonts
- Images
- Static assets

---

## Suggested Cache Policy

| Asset | Cache Duration |
|--------|----------------|
| Images | 1 Year |
| CSS | 1 Month |
| JS | 1 Month |
| Fonts | 1 Year |

---

# PERF-012 — Compression

## Recommended

Enable:

- Brotli
- Gzip

Compress:

- HTML
- CSS
- JavaScript
- JSON
- SVG

---

# PERF-013 — CDN Optimization

## Recommendations

Use CDN for:

- Images
- CSS
- JavaScript
- Fonts
- Static assets

---

## Benefits

- Faster global delivery
- Reduced latency
- Improved Core Web Vitals

---

# Performance Optimization Roadmap

## Phase 1 (Critical)

- Fix LCP
- Fix INP
- Fix CLS
- Enable HTTP/2

---

## Phase 2

- Optimize JavaScript
- Optimize CSS
- Enable caching
- Compress assets

---

## Phase 3

- Optimize fonts
- Improve images
- Reduce rendered HTML
- Fine-tune server

---

## Phase 4

- Continuous monitoring
- Performance regression testing
- Lighthouse audits
- Core Web Vitals monitoring

---

# Performance Checklist

## Core Web Vitals

- [ ] LCP <2.5s
- [ ] INP <200ms
- [ ] CLS <0.10

---

## Assets

- [ ] Optimize CSS
- [ ] Optimize JavaScript
- [ ] Optimize Images
- [ ] Optimize Fonts

---

## Infrastructure

- [ ] Enable HTTP/2
- [ ] Enable Brotli
- [ ] Enable CDN
- [ ] Configure caching

---

## Monitoring

- [ ] Lighthouse
- [ ] Google PageSpeed Insights
- [ ] Chrome UX Report
- [ ] Search Console Core Web Vitals

---

# Success Metrics

| KPI | Current | Target |
|------|----------|---------|
| LCP | 6.0s | <2.5s |
| INP | 272ms | <200ms |
| CLS | 0.19 | <0.10 |
| Server Response | 0.813s | <0.5s |
| Scripts Complete | 5.5s | <3.0s |
| Fully Loaded | 2.5s | <2.0s |
| HTTP/2 | No | Yes |

---

# Related Documents

- 01_CRITICAL_ISSUES.md
- 02_HIGH_PRIORITY_ISSUES.md
- 06_TECHNICAL_ISSUES.md
- 10_GEO_AI_ISSUES.md
- 20_CORE_WEB_VITALS.md
- 22_INFRASTRUCTURE_AUDIT.md

---

# Conclusion

Improving website performance is one of the highest-impact technical initiatives. Resolving Core Web Vitals failures, reducing JavaScript overhead, optimizing rendering, enabling modern protocols, and improving server performance will strengthen rankings, user experience, and AI crawler accessibility.

---

**Document Status:** Active

**Owner:** Performance Engineering & Technical SEO Team

**Review Frequency:** Monthly