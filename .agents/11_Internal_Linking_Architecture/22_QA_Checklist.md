# 22 — QA Checklist

**Website:** https://reetfoodsngiftings.com
**Date:** August 2026
**Run Frequency:** Weekly (first 3 months), Monthly (ongoing)

---

## QA Overview

This checklist validates the complete internal linking architecture. Run after every major deployment and monthly for ongoing maintenance.

**Tools Required:**
- Screaming Frog SEO Spider (Desktop)
- Google Search Console
- Google Rich Results Test (https://search.google.com/test/rich-results)
- Bing Webmaster Tools
- Browser DevTools (for JS rendering check)

---

## SECTION 1 — Broken Internal Links

### Checklist
- [ ] Run Screaming Frog crawl from Homepage
- [ ] Export all 4xx (404) errors
- [ ] Export all 5xx (server) errors
- [ ] Export all redirect chains (3+ hops)
- [ ] Count: Number of broken links = **0** (target)

### Common Broken Link Sources
| Source | How to Find | Fix |
|--------|-----------|-----|
| Old product URLs changed | Export all 4xx in Screaming Frog | 301 redirect old → new |
| Seasonal pages deactivated | Filter by "5xx response" | Re-enable or redirect |
| Typos in content links | Manual content review | Edit links |
| Footer links outdated | Manual footer check | Update footer data |

**Pass Criteria:** 0 broken internal links
**Fail Action:** Fix all broken links within 48 hours

---

## SECTION 2 — Anchor Text Diversity

### Checklist
- [ ] Export all internal links from Screaming Frog
- [ ] Filter by target URL
- [ ] For each major page, calculate anchor text distribution
- [ ] Verify no single anchor text exceeds 25% of links to same URL

| Page | Exact Match % | Partial Match % | Branded % | Generic % | Status |
|------|-------------|----------------|-----------|-----------|--------|
| /corporate-gifts/ | ___% | ___% | ___% | ___% | ⬜ Pass/Fail |
| /dry-fruits/ | ___% | ___% | ___% | ___% | ⬜ Pass/Fail |
| /gift-boxes/ | ___% | ___% | ___% | ___% | ⬜ Pass/Fail |
| /bulk-orders/ | ___% | ___% | ___% | ___% | ⬜ Pass/Fail |
| /blog/ | ___% | ___% | ___% | ___% | ⬜ Pass/Fail |

**Pass Criteria:** No anchor text type exceeds 30% for major commercial pages
**Fail Action:** Update content links to diversify anchor text

---

## SECTION 3 — Breadcrumbs

### Checklist
- [ ] Visit 5 random product pages — verify breadcrumb visible
- [ ] Visit 5 random blog pages — verify breadcrumb visible
- [ ] Visit 3 category pages — verify breadcrumb visible
- [ ] Visit 2 FAQ pages — verify breadcrumb visible
- [ ] Test breadcrumb links — all clickable except last item
- [ ] Test in Google Rich Results Test for BreadcrumbList schema

| Page Type | Breadcrumb Visible | Links Work | Schema Valid | Status |
|-----------|--------------------|-----------|-------------|--------|
| Product pages | ⬜ | ⬜ | ⬜ | ⬜ |
| Category pages | ⬜ | ⬜ | ⬜ | ⬜ |
| Blog articles | ⬜ | ⬜ | ⬜ | ⬜ |
| FAQ pages | ⬜ | ⬜ | ⬜ | ⬜ |
| City landing pages | ⬜ | ⬜ | ⬜ | ⬜ |

**Pass Criteria:** 100% of pages have valid, schema-marked breadcrumbs
**Fail Action:** Implement breadcrumb component (see 21_Implementation_Guide.md)

---

## SECTION 4 — Navigation

### Checklist
- [ ] Verify mega menu renders on desktop
- [ ] Verify mega menu links are all crawlable HTML (not JS-only)
- [ ] Verify mobile hamburger menu opens correctly
- [ ] Verify CTA button visible in navigation
- [ ] Verify policy pages are NOT in primary navigation (footer only)
- [ ] Verify all nav links return 200 (no 404s)

| Nav Element | Present | Crawlable | Mobile OK | Status |
|------------|---------|----------|-----------|--------|
| Corporate Gifts | ⬜ | ⬜ | ⬜ | ⬜ |
| Dry Fruits | ⬜ | ⬜ | ⬜ | ⬜ |
| Gift Boxes | ⬜ | ⬜ | ⬜ | ⬜ |
| Bulk Orders | ⬜ | ⬜ | ⬜ | ⬜ |
| Blog | ⬜ | ⬜ | ⬜ | ⬜ |
| Get a Quote CTA | ⬜ | ⬜ | ⬜ | ⬜ |
| Mega Menu (Shop) | ⬜ | ⬜ | ⬜ | ⬜ |
| Mega Menu (Gifting) | ⬜ | ⬜ | ⬜ | ⬜ |

---

## SECTION 5 — Footer Links

### Checklist
- [ ] Verify footer renders on all page types
- [ ] Verify all 7 footer columns are present
- [ ] Verify all footer links return 200
- [ ] Verify city pages are in footer "We Serve" section
- [ ] Verify Contact CTA is in footer
- [ ] Verify Organization schema in footer
- [ ] Verify footer is server-side rendered

| Footer Section | Present | All Links Live | Schema | Status |
|---------------|---------|---------------|--------|--------|
| Company | ⬜ | ⬜ | — | ⬜ |
| Shop | ⬜ | ⬜ | — | ⬜ |
| Gifting Solutions | ⬜ | ⬜ | — | ⬜ |
| Contact | ⬜ | ⬜ | — | ⬜ |
| We Serve (cities) | ⬜ | ⬜ | — | ⬜ |
| Resources | ⬜ | ⬜ | — | ⬜ |
| Policies | ⬜ | ⬜ | — | ⬜ |
| Organization Schema | — | — | ⬜ | ⬜ |

---

## SECTION 6 — Orphan Pages

### Checklist
- [ ] Run Screaming Frog crawl from homepage
- [ ] Export all crawled URLs with inlink count
- [ ] Flag all pages with 0 internal inlinks
- [ ] Compare with XML sitemap for any uncrawled pages
- [ ] Count orphan pages = **0** (target)

| Orphan Page Found | Inlinks | Fix Applied | Fixed By | Verified |
|------------------|---------|------------|----------|---------|
| — | 0 | — | — | ⬜ |

**Pass Criteria:** 0 orphan pages
**Fail Action:** Apply orphan fix strategy from 17_Orphan_Page_Audit.md

---

## SECTION 7 — Click Depth

### Checklist
- [ ] Export click depth report from Screaming Frog
- [ ] Count pages at depth 4+ 
- [ ] Identify any commercial pages at depth 4+
- [ ] Verify all hub pages at depth ≤ 2
- [ ] Verify all product pages at depth ≤ 3
- [ ] Verify all blog articles at depth ≤ 3

| Click Depth | Page Count | Commercial Pages | Status |
|------------|-----------|-----------------|--------|
| 1 | ___ | ___ | ⬜ |
| 2 | ___ | ___ | ⬜ |
| 3 | ___ | ___ | ⬜ |
| 4+ | ___ | ___ (target: 0) | ⬜ |

**Pass Criteria:** 0 commercial pages at depth 4+
**Fail Action:** Add links to deep pages from hub or footer

---

## SECTION 8 — Hub Pages

### Checklist
- [ ] Verify all 10 hub pages exist and return 200
- [ ] Verify each hub links to all child pages (minimum 8 product links)
- [ ] Verify each hub links to 2+ blog articles
- [ ] Verify each hub links to its FAQ page
- [ ] Verify each hub links back to homepage via breadcrumb
- [ ] Verify each hub has a CTA section linking to /contact/

| Hub Page | Exists | Products Linked | Blog Linked | FAQ Linked | Breadcrumb | CTA |
|----------|--------|----------------|------------|-----------|-----------|-----|
| /corporate-gifts/ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| /dry-fruits/ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| /gift-boxes/ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| /luxury-hampers/ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| /wedding-gifts/ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| /festive-gifts/ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| /chocolate-gifts/ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| /healthy-foods/ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| /cold-pressed-juices/ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| /bulk-orders/ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |

---

## SECTION 9 — Contextual Links

### Checklist (Audit 5 random pages of each type)
- [ ] Product pages have 8+ contextual links in body
- [ ] Blog articles have 8+ contextual links
- [ ] FAQ answers have links to products/categories
- [ ] Hub pages have 15+ contextual links

| Page Type | Min Links | Avg Found | Status |
|-----------|----------|-----------|--------|
| Product Pages | 8 | ___ | ⬜ |
| Blog Articles | 8 | ___ | ⬜ |
| FAQ Pages | 5 | ___ | ⬜ |
| Hub Pages | 15 | ___ | ⬜ |

---

## SECTION 10 — Product Links

### Checklist (spot-check 10 product pages)
- [ ] Product has breadcrumb linking to category
- [ ] Product has "Related Products" section (4 products)
- [ ] Product has "You May Also Like" cross-sell section (3 products)
- [ ] Product links to relevant blog article
- [ ] Product links to relevant FAQ
- [ ] Product links to /bulk-orders/ or /contact/

---

## SECTION 11 — Blog Links

### Checklist (spot-check 5 blog articles)
- [ ] First 200 words link to hub/category page
- [ ] Article links to 3+ products
- [ ] Article links to 2+ related blog articles
- [ ] Article links to FAQ page
- [ ] Article ends with CTA link to /contact/

---

## SECTION 12 — FAQ Links

### Checklist
- [ ] /faq/ hub links to all sub-FAQ pages
- [ ] Each FAQ answer contains minimum 1 internal link
- [ ] FAQ pages have FAQPage JSON-LD schema
- [ ] FAQ pages link to relevant products
- [ ] FAQ pages have CTA section at bottom

---

## SECTION 13 — Schema Breadcrumbs

### Checklist
- [ ] Run all hub pages through Google Rich Results Test
- [ ] Run 5 product pages through Rich Results Test
- [ ] Run 3 blog pages through Rich Results Test
- [ ] Verify BreadcrumbList schema passes without errors
- [ ] Verify breadcrumbs appear in live GSC URL inspection

| Page | Rich Results Test | Status |
|------|-------------------|--------|
| /corporate-gifts/ | ⬜ Pass | ⬜ |
| /dry-fruits/ | ⬜ Pass | ⬜ |
| /products/premium-cashew-gift-box/ | ⬜ Pass | ⬜ |
| /blog/best-corporate-gifts-india/ | ⬜ Pass | ⬜ |
| /faq/corporate-gifting/ | ⬜ Pass | ⬜ |

---

## SECTION 14 — AI Readiness

### Checklist
- [ ] Hub pages have definition sections (What is X?)
- [ ] Hub pages have FAQ sections (5+ questions)
- [ ] Hub pages have structured lists (Types, Benefits, etc.)
- [ ] FAQPage schema on all FAQ pages
- [ ] Speakable schema on key hub pages
- [ ] Organization schema in footer/global
- [ ] Product schema on all product pages
- [ ] Entity consistency — same name used throughout

---

## QA Summary Report Template

```
QA RUN: [Date]
Conducted by: [Name]

CRITICAL (P0):
- Broken links: [count]
- Orphan pages: [count]
- Missing breadcrumbs: [count]
- Hub pages missing: [count]

HIGH (P1):
- Pages at depth 4+: [count]
- Footer missing sections: [count]
- Blog articles with < 8 links: [count]

MEDIUM (P2):
- Anchor text over-optimization: [count pages]
- Missing FAQ links: [count]
- Missing product links: [count]

AI READINESS:
- Hub pages with FAQ schema: [count]/10
- Pages with definition section: [count]/10
- Entity consistency issues: [count]

NEXT STEPS:
1. [Priority fix 1]
2. [Priority fix 2]
3. [Priority fix 3]

OVERALL STATUS: 🔴 Fail / 🟡 Partial Pass / 🟢 Pass
```

---

## QA Schedule

| Period | Frequency | Owner |
|--------|-----------|-------|
| Month 1–3 | Weekly | SEO Lead |
| Month 4–6 | Bi-weekly | SEO Lead |
| Month 7+ | Monthly | SEO Lead |
| After major deploys | Within 48 hours | Dev + SEO |
| Seasonal (Diwali, Holi) | 2 weeks before festival | SEO Lead |
