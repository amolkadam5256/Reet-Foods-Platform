# 21 — Implementation Guide

**Website:** https://reetfoodsngiftings.com
**Date:** August 2026
**Audience:** Developers, Content Writers, SEO Team

---

## Implementation Overview

This guide provides step-by-step, role-specific instructions for implementing the complete internal linking architecture. All tasks are sequenced by priority and dependency.

---

## ROLE 1 — DEVELOPER TASKS

### Sprint 1 — Foundation (Week 1–2)

#### Task 1.1 — Implement Breadcrumbs (Priority: P0)

**Current State:** No breadcrumbs on product or category pages
**Issue:** No breadcrumb = no breadcrumb schema, no crawl path, no SERP display
**Root Cause:** Breadcrumb component not created
**Fix:** Create and deploy BreadcrumbList component

**Implementation:**
```tsx
// 1. Create /components/Breadcrumb.tsx
// 2. Import on all page templates: Category, Product, Blog, FAQ
// 3. Pass correct breadcrumb data from page props/frontmatter
// 4. Add JSON-LD BreadcrumbList schema to <head>

// Developer SOP:
// - Every new page template must include <Breadcrumb items={...} />
// - breadcrumb data must be defined in page metadata
// - Schema must be server-side rendered (not client-side only)
```

**Test:** Navigate to /products/[any]/ and verify breadcrumb visible + GSC rich results test passes.

---

#### Task 1.2 — Implement Mega Menu Navigation (Priority: P1)

**Current State:** Basic navigation without mega menu
**Fix:** Build mega menu with 2-level dropdown structure

```html
<!-- Navigation HTML structure (server-side rendered) -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/corporate-gifts/">Corporate Gifts</a>
      <ul class="mega-menu">
        <li><a href="/employee-gifting-programs/">Employee Gifting</a></li>
        <li><a href="/client-gifting-solutions/">Client Gifting</a></li>
        <li><a href="/bulk-gifting-solutions/">Bulk Gifting</a></li>
        <li><a href="/diwali-corporate-gifts/">Diwali Corporate Gifts</a></li>
      </ul>
    </li>
    <li><a href="/dry-fruits/">Dry Fruits</a>
      <ul class="mega-menu">
        <li><a href="/dry-fruits/cashews/">Cashews</a></li>
        <li><a href="/dry-fruits/almonds/">Almonds</a></li>
        <li><a href="/dry-fruits/mixed-nuts/">Mixed Nuts</a></li>
      </ul>
    </li>
    <!-- All nav items -->
  </ul>
</nav>
```

**Critical:** Navigation MUST be server-side rendered. Not client-side only.

---

#### Task 1.3 — Implement Footer Link Architecture (Priority: P1)

**Fix:** Update footer component to match 08_Footer_Strategy.md

```tsx
// Footer link data (centralized in /data/footer-links.ts)
export const footerLinks = {
  company: [
    { label: "About Reet Foods", href: "/about/" },
    { label: "Blog", href: "/blog/" },
    // ...
  ],
  shop: [
    { label: "Dry Fruits", href: "/dry-fruits/" },
    { label: "Cashews", href: "/dry-fruits/cashews/" },
    // ...
  ],
  giftingSolutions: [
    { label: "Corporate Gifts", href: "/corporate-gifts/" },
    // ...
  ],
  weServe: [
    { label: "Corporate Gifting Pune", href: "/corporate-gifting-pune/" },
    { label: "Corporate Gifting Mumbai", href: "/corporate-gifting-mumbai/" },
    // ...
  ],
  resources: [...],
  policies: [...]
}
```

---

#### Task 1.4 — Related Products Component (Priority: P1)

**Fix:** Create a dynamic related products section for all product pages

```tsx
// /components/RelatedProducts.tsx
// Data source: product.relatedProducts array in product metadata
// Display: 4 product cards with title + image + price + link
// Cross-sell: /components/CrossSellProducts.tsx (different category)
```

---

#### Task 1.5 — FAQ Module on Product Pages (Priority: P2)

```tsx
// /components/ProductFAQ.tsx
// Each product has faqItems: [{question, answer, links}]
// Render FAQ section with JSON-LD FAQPage schema
// Answers must include contextual links per 12_FAQ_Linking.md
```

---

#### Task 1.6 — robots.txt Update (Priority: P0)

```
Replace current robots.txt with version from 19_Crawl_Path.md
Key additions:
- Disallow: /cart/, /checkout/, /account/
- Disallow: /?*sort=, /?*filter=
- Add all sitemap URLs
```

---

#### Task 1.7 — XML Sitemap Architecture (Priority: P0)

```
Create 4 separate sitemaps:
1. /sitemap-pages.xml — All hub + landing + policy pages
2. /sitemap-products.xml — All product pages
3. /sitemap-blog.xml — All blog articles
4. /sitemap-categories.xml — All category pages

Create /sitemap.xml as sitemap index pointing to all 4
Submit all to Google Search Console
```

---

#### Task 1.8 — Canonical Tags (Priority: P0)

```tsx
// Every page must have canonical in <head>
// Dynamic pages: canonical = clean URL without parameters
// Example in Next.js:
export default function ProductPage({ product }) {
  return (
    <>
      <Head>
        <link rel="canonical" href={`https://reetfoodsngiftings.com/products/${product.slug}/`} />
      </Head>
    </>
  );
}
```

---

### Sprint 2 — Hub Pages (Week 3–4)

#### Task 2.1 — Create 10 Hub Pages (Priority: P0)

For each hub page, developer must:
1. Create route at specified URL
2. Accept hub page content from CMS/MDX
3. Render: Hero + Sub-categories grid + Products grid + Blog section + FAQ + CTA
4. Apply breadcrumb: Home > [Category]
5. Apply category page schema
6. Implement sidebar filter

**Hub pages to create:**
- /corporate-gifts/
- /dry-fruits/
- /gift-boxes/
- /luxury-hampers/
- /wedding-gifts/
- /festive-gifts/
- /chocolate-gifts/
- /healthy-foods/
- /cold-pressed-juices/
- /bulk-orders/

---

### Sprint 3 — Linking Automation (Week 5–6)

#### Task 3.1 — Auto-Breadcrumb from URL Structure

```tsx
// Utility: generateBreadcrumbs(url: string): BreadcrumbItem[]
// Parse URL segments and map to page names
// /dry-fruits/cashews/premium-cashew-gift-box/
// → [{name:"Home", url:"/"}, {name:"Dry Fruits", url:"/dry-fruits/"}, {name:"Cashews", url:"/dry-fruits/cashews/"}, {name:"Premium Cashew Gift Box"}]
```

#### Task 3.2 — Tag-Based Related Products

```tsx
// Products have tags: ["corporate", "dry-fruits", "luxury", "diwali"]
// Related products: same 2+ tags
// Cross-sell: complementary tags (dry-fruits + chocolate)
// Computed at build time, stored in product.related[]
```

---

## ROLE 2 — CONTENT WRITER TASKS

### Content Writer SOP — Internal Linking Rules

#### Before Writing Any Page:
1. Read the relevant section in 05_Contextual_Linking.md
2. Identify the topic cluster this page belongs to
3. Note the hub page URL for this cluster
4. List 3–5 products to mention
5. List 2–3 related blog articles to link to
6. Identify the FAQ page to link to
7. Identify the CTA link (usually /contact/)

#### While Writing:
1. **First 200 words:** Must contain link to hub/category page
2. **Product mentions:** Link to exact product page every time a product is named
3. **Anchor text:** Use descriptive text per 16_Anchor_Text_Strategy.md
4. **Related blogs:** Link to 2–3 related articles (in body, not just sidebar)
5. **FAQ mention:** Near end, link: "See our [Topic] FAQ"
6. **Closing CTA:** Final paragraph must link to /contact/ or conversion page

#### After Writing:
1. Count all internal links — minimum 8 per page
2. Run link check (paste in Google Docs, verify URLs)
3. Update 2–3 existing articles to link to this new page
4. Notify SEO lead that article is live for blog hub update

---

### Content Writer SOP — Blog Internal Links Template

```
PASTE THIS AT TOP OF GOOGLE DOC BEFORE WRITING:

Cluster: [Corporate Gifting / Dry Fruits / etc.]
Hub URL: [/corporate-gifts/ etc.]
Products to mention: [List 3]
Related blogs to link: [List 3]
FAQ to link: [/faq/topic/]
CTA URL: [/contact/ or /contact/#quote-form]

CHECKLIST:
[ ] Hub link in first 200 words
[ ] 3+ product links
[ ] 2+ related blog links
[ ] 1 FAQ link
[ ] 1 CTA link at end
[ ] Total internal links: ___/8 (minimum)
```

---

## ROLE 3 — SEO TEAM TASKS

### SEO Team — Weekly Tasks

| Task | Frequency | Tool |
|------|-----------|------|
| Check orphan pages | Weekly | Screaming Frog |
| Review new pages for 3+ inlinks before publish | Every publish | Manual check |
| Audit anchor text diversity | Monthly | Screaming Frog |
| Update blog hub with new articles | Weekly | CMS |
| Submit new sitemaps | Monthly | GSC |
| Check click depth of new pages | Every new page | Screaming Frog |
| Monitor AI search appearances | Monthly | Manual check |
| Update seasonal links (Diwali season) | Quarterly | Manual |

### SEO Team — Monthly Report Template

```
Internal Linking Monthly Report — [Month Year]

1. Total Internal Links: [count]
2. New Orphan Pages Found: [count] → [URLs]
3. Orphan Pages Fixed: [count]
4. Average Click Depth: [number]
5. Pages at Depth 4+: [count]
6. New Hub Pages Created: [count]
7. Blog Articles Published with Links: [count]
8. AI Search Appearances: [count]
9. Featured Snippets Won: [count]
10. Next Month Priority: [action]
```

---

## Implementation Sequence (Full Timeline)

| Week | Tasks | Owner |
|------|-------|-------|
| Week 1 | Breadcrumbs, robots.txt, sitemap, canonicals | Dev |
| Week 2 | Mega menu, footer update | Dev |
| Week 3 | Create 5 hub pages (Corporate, Dry Fruits, Gift Boxes, Festive, Bulk) | Dev + Content |
| Week 4 | Create 5 hub pages (Luxury, Wedding, Chocolate, Healthy, Juices) | Dev + Content |
| Week 5 | Related products component, FAQ module | Dev |
| Week 6 | Content: Add contextual links to all existing 20+ pages | Content |
| Week 7 | Content: Publish 5 new blog articles with full linking | Content |
| Week 8 | SEO: Full orphan page audit + fix | SEO |
| Week 9 | SEO: Click depth audit + fixes | SEO |
| Week 10 | SEO: Entity linking audit | SEO |
| Week 11–12 | AI search optimization (content + schema) | Content + Dev |

---

## Developer Handoff Checklist

Before go-live, verify:

| Item | Status |
|------|--------|
| Breadcrumbs on all page types | ⬜ |
| BreadcrumbList schema on all pages | ⬜ |
| Mega menu server-side rendered | ⬜ |
| Footer with all 7 column links | ⬜ |
| robots.txt updated | ⬜ |
| Sitemap index live | ⬜ |
| Canonical tags on all pages | ⬜ |
| Related products component live | ⬜ |
| FAQ schema on FAQ pages | ⬜ |
| Internal link count verified (Screaming Frog) | ⬜ |
| No JS-only navigation links | ⬜ |
| City pages accessible via footer | ⬜ |
