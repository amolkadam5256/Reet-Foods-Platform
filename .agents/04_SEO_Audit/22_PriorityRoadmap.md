# 22 — Master Action Plan & Priority Implementation Roadmap

**Website:** https://reetfoodsngiftings.com  
**Audit Date:** August 2026  

---

## 22.1 Strategic Implementation Timeline Overview

```
Phase 1: Critical Technical & Indexing Fixes (Days 1–7)
  ├── 1. Fix "use client" on homepage -> Convert to Server Components (LCP Boost)
  ├── 2. Standardize Canonical Domain & GA4 Measurement Script
  ├── 3. Fix Organization & LocalBusiness JSON-LD Schema (Server-side rendering)
  └── 4. Implement Security Headers in next.config.js

Phase 2: On-Page, Accessibility & Content Gaps (Days 8–21)
  ├── 1. Optimize Meta Titles & Descriptions across all 7 main routes
  ├── 2. Implement H1 tag hierarchy & remove duplicate headings
  ├── 3. Add ARIA labels to icon buttons & fix focus-visible states
  ├── 4. Expand Corporate Gifting Landing Page content & adding FAQ Accordion
  └── 5. Build dynamic sitemap.ts with blog and product inclusion

Phase 3: AI SEO, E-E-A-T & Authority Building (Days 22–45)
  ├── 1. Publish 3 High-Authority Corporate Gifting Articles (2000+ words each)
  ├── 2. Implement FAQSchema & HowToSchema for Voice / AI Search Overviews
  ├── 3. Claim & Optimize Google Business Profile (Hinjewadi, Pune location)
  └── 4. Build local Pune directory citations & B2B backlinks
```

---

## 22.2 High-Impact Action Item Summary Table

| Action Item | Category | Priority | Effort | Expected Impact |
|-------------|----------|----------|--------|-----------------|
| Refactor `page.tsx` to Server Component | Performance / CWV | CRITICAL | Medium | High (+30 points LCP) |
| Standardize Canonical Brand Name & Schema | SEO / Technical | CRITICAL | Low | High (Fixes Rich Snippets) |
| Restore GA4 Script Data Collection | Analytics | CRITICAL | Low | High (Restores Tracking) |
| Add H1 Tag & Title Tag Optimization | On-Page SEO | HIGH | Low | High (Keyword Rankings) |
| Add Image `alt` Text & Next `<Image>` | Performance / Accessibility | HIGH | Medium | Medium (Core Web Vitals) |
| Implement Security Response Headers | Security | HIGH | Low | Medium (Protection & Trust) |
| Expand FAQ Content & FAQ Schema | AI SEO / Content | MEDIUM | Medium | High (Google AI Overviews) |
| Hyper-Local Pune SEO Landing Pages | Local SEO | MEDIUM | Medium | High (B2B Lead Generation) |

---

## 22.3 Verification & Quality Assurance Checklist

- [ ] Execute `npm run build` locally to verify zero build errors or TypeScript mismatches.
- [ ] Test URL with Google Rich Results Test (`https://search.google.com/test/rich-results`).
- [ ] Check Google PageSpeed Insights mobile score (Target: > 90).
- [ ] Verify GA4 Real-time reports register visits upon page load.
- [ ] Submit updated `sitemap.xml` to Google Search Console and Bing Webmaster Tools.
