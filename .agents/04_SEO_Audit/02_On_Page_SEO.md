# 02 — On-Page SEO Audit

**Website:** https://reetfoodsngiftings.com  
**Audit Date:** August 2026

---

## 2.1 Page-by-Page Audit

### Homepage `/`

| Element          | Current Value                                                                                                                                      | Issue                                | Fix                                 |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------- |
| Title            | "Reet Foods \| Premium Dry Fruits, Chocolates & Corporate Gifting"                                                                                 | 55 chars — good length               | ✅                                  |
| Meta Description | "Premium dry fruits, chocolate gift boxes, festive hampers, corporate gifting, wholesale supply, OEM, and private label food solutions from Pune." | 148 chars ✅                         | ✅                                  |
| H1               | Client-rendered — not visible in SSR HTML                                                                                                          | **CRITICAL** — Google may not see it | Move to server component            |
| Canonical        | `https://reetfoodsngiftings.com`                                                                                                                   | ✅                                   | ✅                                  |
| OG Title         | Same as title                                                                                                                                      | ✅                                   | ✅                                  |
| OG Image         | Default `/assets/images/og-image.jpg`                                                                                                              | No explicit OG image set             | Add explicit branded 1200×630 image |
| Robots           | `index, follow`                                                                                                                                    | ✅                                   | ✅                                  |
| Schema           | Organization + LocalBusiness in layout                                                                                                             | ✅                                   | Fix phone number                    |
| Internal Links   | Navigation + hero CTAs                                                                                                                             | ✅                                   | ✅                                  |
| Keyword in Title | "Dry Fruits", "Corporate Gifting"                                                                                                                  | ✅                                   | ✅                                  |
| Brand in Title   | "Reet Foods"                                                                                                                                       | ✅                                   | ✅                                  |

---

### Products `/products`

| Element          | Current Value                                                      | Issue                       | Fix               |
| ---------------- | ------------------------------------------------------------------ | --------------------------- | ----------------- |
| Title            | "Premium Dry Fruits, Gift Boxes & Corporate Hampers \| Reet Foods" | 65 chars — slightly long    | Trim to <60       |
| Meta Description | 207 chars                                                          | ✅ Rich & keyword-dense     | ✅                |
| H1               | In `ProductsClient.tsx` — client component                         | ⚠️ Verify SSR               | Check rendering   |
| Canonical        | `https://reetfoodsngiftings.com/products`                          | ✅ Hardcoded correctly      | ✅                |
| OG Image         | `products-og.jpg`                                                  | File may not exist — verify | Create file       |
| Keywords         | 14 keywords in meta                                                | ✅ Extensive                | ✅                |
| Schema           | CollectionPage + FAQPage + Review + Organization                   | ✅ Rich                     | Fix Review schema |

---

### Corporate Gifting `/corporate-gifting`

| Element          | Current Value                                                               | Issue                          | Fix                   |
| ---------------- | --------------------------------------------------------------------------- | ------------------------------ | --------------------- |
| Title            | "Corporate Gifting Pune \| Executive Custom Logo Hampers & Dry Fruit Boxes" | 73 chars — too long            | Trim to <65           |
| Meta Description | 185 chars ✅                                                                | ✅                             | ✅                    |
| H1               | "Gifts That Make Your Brand Thoughtfully Remembered."                       | ✅ Strong, unique              | ✅                    |
| Canonical        | ✅ `/corporate-gifting`                                                     | ✅                             | ✅                    |
| WhatsApp link    | `wa.me/919876543210`                                                        | **WRONG NUMBER** — placeholder | Fix to `919225130732` |
| FAQSchema        | ✅ Present                                                                  | ✅                             | ✅                    |
| BreadcrumbSchema | ✅ Present                                                                  | ✅                             | ✅                    |

---

### About `/about`

| Element            | Current Value                                                     | Issue                       | Fix                 |
| ------------------ | ----------------------------------------------------------------- | --------------------------- | ------------------- |
| Title              | "About Reet Foods & Gifting Pune \| Our Story, Mission & Quality" | 63 chars ✅                 | ✅                  |
| H2 headings        | Multiple H2s                                                      | ✅ Correct hierarchy        | ✅                  |
| Statistics         | "4.9/5 Client Satisfaction Rating"                                | No schema markup for rating | Add AggregateRating |
| OrganizationSchema | ✅ Present                                                        | ✅                          | Fix phone           |
| BreadcrumbSchema   | ✅ Present                                                        | ✅                          | ✅                  |

---

### Blog `/blog`

| Element          | Current Value                                                 | Issue       | Fix                     |
| ---------------- | ------------------------------------------------------------- | ----------- | ----------------------- |
| Title            | "Gifting Insights & Corporate Trends Blog \| Reet Foods Pune" | 60 chars ✅ | ✅                      |
| H1               | "Insights, Trends & Purchasing Guides"                        | ✅          | ✅                      |
| H2 for featured  | ✅                                                            | ✅          | ✅                      |
| H3 for cards     | ✅                                                            | ✅          | ✅                      |
| ArticleSchema    | ❌ No schema on blog index                                    | Add         | `CollectionPage` schema |
| BreadcrumbSchema | ✅ Present                                                    | ✅          | ✅                      |

---

### FAQ `/faq`

| Element     | Current Value                                                                       | Issue                                                 | Fix                                                  |
| ----------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------- |
| Title       | "FAQ \| Reet Foods"                                                                 | Too short, no keyword                                 | "FAQ — Corporate Gifting & Dry Fruits \| Reet Foods" |
| Description | "Common customer questions about orders, customization, delivery and OEM services." | 81 chars — too short                                  | Expand to 150+ chars                                 |
| Canonical   | ❌ None                                                                             | **Missing**                                           | Add `constructMetadata`                              |
| FAQSchema   | ❌ None                                                                             | **CRITICAL** — page uses `<details>` but zero JSON-LD | Add `FAQSchema` component                            |
| H1          | "Frequently asked questions..."                                                     | ✅                                                    | ✅                                                   |

---

### Contact `/contact`

| Element             | Current Value                          | Issue                | Fix                                                          |
| ------------------- | -------------------------------------- | -------------------- | ------------------------------------------------------------ |
| Title               | "Contact Reet Foods \| Get Best Quote" | OK but weak          | "Contact Reet Foods Pune — Get a Corporate Gift Quote Today" |
| Description         | 135 chars ✅                           | ✅                   | ✅                                                           |
| Canonical           | ❌ None — plain `metadata` object      | Missing canonical    | Use `constructMetadata`                                      |
| OG image            | ❌ None                                | Social shares broken | Add OG image                                                 |
| ContactPoint schema | ❌ None                                | Missing              | Add ContactPage schema                                       |
| H1                  | "Tell us your gifting brief..."        | ✅                   | ✅                                                           |

---

### Privacy / Terms / Policies

| Element      | Status     | Note                                               |
| ------------ | ---------- | -------------------------------------------------- |
| Noindex      | ❌ Missing | Policy pages should be `noIndex: true`             |
| Thin content | ⚠️         | Typically boilerplate — verify length              |
| Canonical    | ⚠️         | Using plain `metadata` — needs `constructMetadata` |

---

## 2.2 Title Tag Analysis

| Page              | Current Length | Keyword Present | Brand Present | Grade |
| ----------------- | -------------- | --------------- | ------------- | ----- |
| Homepage          | 55 chars       | ✅              | ✅            | A     |
| Products          | 65 chars       | ✅              | ✅            | B     |
| Corporate Gifting | 73 chars       | ✅              | ❌            | C     |
| About             | 63 chars       | ✅              | ✅            | B+    |
| Blog              | 60 chars       | ✅              | ✅            | A-    |
| FAQ               | 17 chars       | ❌              | ✅            | F     |
| Contact           | 37 chars       | ⚠️              | ✅            | C     |

---

## 2.3 Meta Description Analysis

| Page              | Length               | Quality                     | Grade |
| ----------------- | -------------------- | --------------------------- | ----- |
| Homepage          | 148 chars            | Rich with keywords          | A     |
| Products          | 207 chars — too long | ✅ Keywords good, truncated | B     |
| Corporate Gifting | 185 chars            | ✅                          | A-    |
| About             | 137 chars            | ✅                          | A     |
| Blog              | 200 chars            | ✅                          | A-    |
| FAQ               | 81 chars — too short | Needs expansion             | D     |
| Contact           | 135 chars            | ✅                          | B     |

---

## 2.4 Heading Hierarchy Audit

| Page              | H1 Count              | H2 Count     | Issues                      |
| ----------------- | --------------------- | ------------ | --------------------------- |
| Homepage          | 1 (client-rendered)   | Multiple     | H1 not in SSR HTML          |
| Products          | 1 (in ProductsClient) | Multiple     | Client rendered             |
| Corporate Gifting | 1                     | 3+           | ✅ Correct                  |
| About             | 1                     | 3            | ✅ Correct                  |
| Blog              | 1                     | 1 (featured) | H3 for cards ✅             |
| FAQ               | 1                     | 0            | Consider adding H2 sections |
| Contact           | 1                     | 0            | ✅ Minimal page             |

---

## 2.5 Keyword Optimization

| Page              | Primary Keyword        | Secondary Keywords            | Keyword in H1 | Keyword in URL   |
| ----------------- | ---------------------- | ----------------------------- | ------------- | ---------------- |
| Homepage          | Corporate Gifting Pune | Dry Fruits, Festive Hampers   | ⚠️            | ✅ (`/`)         |
| Products          | Dry Fruit Gift Boxes   | Corporate Hampers, Chocolates | ⚠️            | ✅ (`/products`) |
| Corporate Gifting | Corporate Gifting Pune | Logo Hampers, Dry Fruit Boxes | ✅            | ✅               |
| Blog              | Gifting Insights       | Corporate Trends              | ✅            | ✅               |
| FAQ               | FAQ, Orders            | Customization, Delivery       | ❌            | ✅               |

---

## 2.6 Internal Link Audit (From Each Page)

| Page              | Internal Links                   | Issues                                |
| ----------------- | -------------------------------- | ------------------------------------- |
| Homepage          | Navigation + CTA links           | Missing links to `/about`, `/gallery` |
| Products          | Category links                   | Missing blog cross-links              |
| Corporate Gifting | CTA to `/contact#quote`          | ✅                                    |
| About             | Discover range → `/products`     | Missing link to corporate gifting     |
| Blog              | Category links per post          | No links to products                  |
| FAQ               | To `/contact#quote`, `/products` | ✅                                    |
| Contact           | To WhatsApp, tel:                | ✅                                    |

---

## 2.7 CTR Optimization Recommendations

| Page      | Current Title                                                      | Recommended Title                                                    |
| --------- | ------------------------------------------------------------------ | -------------------------------------------------------------------- |
| FAQ       | "FAQ \| Reet Foods"                                                | "Corporate Gift FAQ — Order, Delivery & Customization \| Reet Foods" |
| Contact   | "Contact Reet Foods \| Get Best Quote"                             | "Contact Reet Foods Pune — Quote in 2 Hours \| Corporate Gifting"    |
| Products  | "Premium Dry Fruits, Gift Boxes & Corporate Hampers \| Reet Foods" | "Premium Dry Fruits & Corporate Gift Boxes Pune — Reet Foods"        |
| Corporate | (73 chars — too long)                                              | "Corporate Gifting Pune — Custom Hampers, Logo Boxes & Bulk Orders"  |

---

## Developer Instructions

### Fix FAQ Page

```tsx
// app/(site)/faq/page.tsx
import { constructMetadata } from "@/components/seo/Metadata";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata = constructMetadata({
  title: "FAQ — Corporate Gifting & Dry Fruits Pune | Reet Foods",
  description:
    "Common questions about corporate gift orders, custom logo boxes, MOQ, PAN-India delivery, OEM services and festive hamper customization at Reet Foods Pune.",
  canonical: "/faq",
});

// Inside the component:
<FAQSchema faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />;
```

### Fix Contact Page

```tsx
// app/(site)/contact/page.tsx
import { constructMetadata } from "@/components/seo/Metadata";

export const metadata = constructMetadata({
  title: "Contact Reet Foods Pune — Corporate Gift Quote in 2 Hours",
  description:
    "Contact Reet Foods & Gifting in Pune for premium dry fruit boxes, chocolate hampers, custom corporate gifts and bulk orders. Get a quote within 2 hours.",
  canonical: "/contact",
});
```

### Fix Policy Pages — Add NoIndex

```tsx
export const metadata = constructMetadata({
  title: "Privacy Policy | Reet Foods",
  description: "...",
  canonical: "/privacy-policy",
  noIndex: true, // policy pages should not be indexed
});
```

---

## Testing Checklist

- [ ] View source of each page — confirm `<title>` in raw HTML
- [ ] View source of each page — confirm `<meta name="description">` in raw HTML
- [ ] View source of each page — confirm `<link rel="canonical">` in raw HTML
- [ ] Check each page in Google Search Console → URL Inspection
- [ ] Run Screaming Frog — export all titles and descriptions — check length and uniqueness
- [ ] Test social sharing on each page via `https://developers.facebook.com/tools/debug/`
- [ ] Test Twitter card via `https://cards-dev.twitter.com/validator`
- [ ] Confirm no duplicate titles across pages
- [ ] Confirm no duplicate descriptions across pages
