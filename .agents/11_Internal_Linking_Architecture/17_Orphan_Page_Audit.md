# 17 — Orphan Page Audit

**Website:** https://reetfoodsngiftings.com
**Date:** August 2026

---

## What is an Orphan Page?

An orphan page is a page that exists on the website but has NO internal links pointing to it. As a result:
- Googlebot may never discover it (or rarely crawl it)
- It receives zero PageRank from the rest of the site
- It cannot rank for competitive keywords
- It contributes nothing to topical authority

**Orphan pages are a critical SEO issue.** Every orphan page is a wasted asset.

---

## How to Identify Orphan Pages

### Method 1 — Screaming Frog Audit
1. Crawl the website starting from Homepage
2. Export all crawled URLs
3. Compare to XML sitemap (all listed URLs)
4. Pages in sitemap but NOT crawled = potential orphans

### Method 2 — Google Search Console
1. Go to Index Coverage report
2. Filter: "Indexed, not submitted in sitemap" + "Submitted URL crawled currently not indexed"
3. Cross-reference with internal link report

### Method 3 — Log File Analysis
1. Compare Googlebot visits from log files
2. Pages with 0 Googlebot visits in 30 days = orphan candidates

---

## Predicted Orphan Page Categories

Based on typical e-commerce gifting websites, these are likely orphan page types:

### High-Risk Orphan Categories

| Page Type | Likelihood | Reason |
|-----------|-----------|--------|
| City landing pages | VERY HIGH | Created for SEO but not in nav/footer |
| Old festival/seasonal pages | HIGH | Created last year, not updated |
| Blog articles | HIGH | No interlinking strategy applied |
| FAQ sub-pages | HIGH | FAQ hub exists but sub-pages not linked |
| Collection/tag pages | HIGH | Auto-generated, not curated |
| Product variants | MEDIUM | Variant URLs not linked from main product |
| Policy pages | LOW | In footer |
| About/Contact | LOW | In navigation |

---

## Orphan Page Fix Strategy

### For City Landing Pages (e.g., /corporate-gifting-delhi/)
**Problem:** Created for local SEO but never linked internally.
**Fix:**
1. Add to footer "We Serve" section
2. Add to Corporate Gifts Hub page in "Cities We Serve" section
3. Link from Corporate Gifting blog articles
4. Add to sitemap
5. Contextual mention: "We also serve [Delhi corporate clients](/corporate-gifting-delhi/)"

### For Old Festival/Seasonal Pages
**Problem:** Diwali 2024 page now orphaned after season.
**Fix:**
1. Either redirect to main Diwali gifts page (/diwali-gifts/)
2. Or update for current year and re-link from Festive Hub
3. Add evergreen content so page is always relevant
4. Link from Festival Calendar resource page

### For Isolated Blog Articles
**Problem:** Blog post published but never linked from other articles or category.
**Fix:**
1. Add to Blog Hub (blog category page)
2. Link from 2–3 related existing blog articles
3. Link from relevant category hub page
4. Link from relevant FAQ pages
5. Add to homepage "Latest Articles" section (if recent)

### For FAQ Sub-Pages
**Problem:** /faq/bulk-orders/ exists but only /faq/ is linked.
**Fix:**
1. Add all FAQ sub-pages to FAQ Hub (/faq/) as a directory
2. Link relevant FAQ pages from corresponding category hub
3. Link from blog articles (e.g., bulk ordering article → /faq/bulk-orders/)
4. Link from product pages (e.g., bulk products → /faq/bulk-orders/)

### For Collection/Tag Pages
**Problem:** Auto-generated /collection/diwali-gifts/ or /tag/cashews/ pages exist but are orphaned.
**Fix Option A:** Noindex these pages if they duplicate category pages
**Fix Option B:** Curate them and link from relevant category hub

---

## Orphan Page Audit Checklist

Run this audit every month using Screaming Frog:

### Step 1 — Crawl Setup
```
Screaming Frog Settings:
- Start URL: https://reetfoodsngiftings.com/
- Mode: Spider
- Include subdomains: Yes
- Crawl JS: Yes
- User-Agent: Googlebot
```

### Step 2 — Export Data
```
Export these reports from Screaming Frog:
1. All Crawled URLs (with inlinks count)
2. XML Sitemap URLs
3. Orphaned pages (0 inlinks)
```

### Step 3 — Compare
```
Sitemap URLs - Crawled URLs = Missing (orphan) pages
```

### Step 4 — Classify Orphans
For each orphan URL:

| URL | Page Type | Priority | Fix Action |
|-----|-----------|---------|-----------|
| [Example] | City landing | P0 | Add to footer + corporate hub |
| [Example] | Blog article | P1 | Add to blog hub + link from 3 articles |
| [Example] | Old seasonal | P2 | Update and link from festive hub |
| [Example] | Unused tag page | P3 | Noindex or redirect |

### Step 5 — Fix Tracking

| Orphan URL | Date Discovered | Fix Applied | Fix Date | Verified |
|-----------|----------------|------------|---------|---------|
| /corporate-gifting-delhi/ | Aug 2026 | Added to footer | — | ⬜ |
| /blog/old-article/ | Aug 2026 | Linked from 3 articles | — | ⬜ |
| /faq/bulk-orders/ | Aug 2026 | Linked from bulk hub | — | ⬜ |

---

## Orphan Prevention Rules (Going Forward)

1. **Every new page created must have at least 3 internal links pointing to it BEFORE publishing**
2. **Every new blog article must be linked from the blog hub + 2 existing articles**
3. **Every new city landing page must be in footer + corporate hub**
4. **Every new product must be in its category page**
5. **Every new FAQ page must be linked from FAQ hub**
6. **Seasonal pages must be linked from the festive hub during season**
7. **Monthly orphan audit using Screaming Frog is mandatory**

---

## Orphan Page Priority Classification

| Priority | Criteria | Action Timeline |
|----------|---------|----------------|
| P0 — Critical | High commercial intent pages with no links | Fix within 1 week |
| P1 — High | Category or landing pages with no links | Fix within 2 weeks |
| P2 — Medium | Blog or informational pages with no links | Fix within 1 month |
| P3 — Low | Policy pages, old seasonal pages | Fix or noindex within 2 months |
| P4 — Purge | Thin content pages with no SEO value | Redirect or noindex |

---

## Orphan Page KPIs

| KPI | Target |
|-----|--------|
| Orphan pages after audit | 0 |
| Pages with 0 inlinks | 0 |
| Pages with ≤ 2 inlinks | < 5% of all pages |
| Monthly orphan audit completion | 100% |
| New pages launched without 3+ inlinks | 0 |
