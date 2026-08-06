# 07 — Technical Issue Tracker, QA & 30/60/90-Day Implementation Roadmap

**Website:** https://reetfoodsngiftings.com  
**Purpose:** Actionable developer task list, QA verification procedures, and 90-day technical rollout plan.  

---

## 1. Technical Issue Tracker Matrix

| Issue ID | Issue Description | Current Impact | Priority | Recommended Action | Estimated Effort |
|----------|-------------------|----------------|----------|--------------------|------------------|
| **TECH-01** | `page.tsx` is Client Component ("use client") | High (LCP & Hydration Delay) | CRITICAL | Refactor to React Server Component | 4 Hours |
| **TECH-02** | Schema rendered via `next/script` `afterInteractive` | Medium (Search Bot Crawl Miss) | HIGH | Embed `<script type="application/ld+json">` in SSR JSX | 2 Hours |
| **TECH-03** | Missing Security Response Headers | High (Security & Trust Rating) | HIGH | Add HSTS, CSP, X-Frame headers in `next.config.js` | 1 Hour |
| **TECH-04** | Static Dynamic Sitemap Coverage | Medium (Delayed Post Indexing) | HIGH | Update `app/sitemap.ts` with dynamic routes | 2 Hours |
| **TECH-05** | Missing AI Crawler Directives in `robots.txt` | Medium (AI Search Visibility) | MEDIUM | Add `GPTBot`, `ClaudeBot`, `PerplexityBot` allow rules | 0.5 Hours |

---

## 2. QA & Validation Testing Procedures

- [ ] Execute `npm run build` locally to verify zero build errors or TypeScript mismatches.
- [ ] Test URL with Google Rich Results Test (`https://search.google.com/test/rich-results`).
- [ ] Verify HTTP Security Headers using `https://securityheaders.com`.
- [ ] Check Google Search Console Coverage Report for 0 soft 404 or canonical errors.
- [ ] Verify Google PageSpeed Insights Mobile LCP < 2.5s and CLS < 0.1.

---

## 3. 30 / 60 / 90-Day Technical SEO Roadmap

```
Phase 1: Critical Server & Hydration Fixes (Days 1–30)
  ├── 1. Refactor page.tsx to React Server Component (LCP Boost)
  ├── 2. Implement Security Headers in next.config.js (HSTS, CSP)
  ├── 3. Update public/robots.txt with AI crawler allow rules
  └── 4. Migrate Schema injection to server-rendered JSON-LD JSX

Phase 2: Dynamic Sitemaps, Media & Canonicals (Days 31–60)
  ├── 1. Update app/sitemap.ts with dynamic product and blog routes
  ├── 2. Optimize image loading with WebP formats & Next.js <Image priority />
  ├── 3. Verify absolute HTTPS non-WWW self-referential canonical tags
  └── 4. Implement sticky mobile WhatsApp CTA bar

Phase 3: Core Web Vitals Polish & AI Optimization (Days 61–90)
  ├── 1. Fine-tune INP by deferring non-critical third-party analytics scripts
  ├── 2. Deploy Speakable & LocalBusiness schema for AI Voice Search
  └── 3. Conduct full quarterly technical audit and GSC indexing validation
```
