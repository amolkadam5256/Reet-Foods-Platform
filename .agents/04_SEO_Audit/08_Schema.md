# 08 — Schema / Structured Data Audit

**Website:** https://reetfoodsngiftings.com  
**Framework:** Next.js 15 — JSON-LD via `next/script` + inline `<script>` tags  
**Audit Date:** August 2026

---

## 8.1 Schema Inventory

| Schema Type            | Implementation            | Location                | Status                 |
| ---------------------- | ------------------------- | ----------------------- | ---------------------- |
| Organization           | `OrganizationSchema.tsx`  | All pages via layout    | ⚠️ Errors              |
| LocalBusiness          | `LocalBusinessSchema.tsx` | All pages via layout    | ❌ Wrong type          |
| Product                | `ProductSchema.tsx`       | Component — partial use | ⚠️ Incomplete          |
| BreadcrumbList         | `BreadcrumbSchema.tsx`    | Most pages              | ✅                     |
| FAQPage                | `FAQSchema.tsx`           | Corporate Gifting only  | ❌ Missing on FAQ page |
| CollectionPage         | `CollectionSchema.tsx`    | Unknown pages           | ⚠️                     |
| Article                | `ArticleSchema.tsx`       | Unknown pages           | ⚠️                     |
| WebSite + SearchAction | ❌ None                   | Missing                 | ❌                     |
| AggregateRating        | ❌ None                   | Missing                 | ❌                     |
| Review                 | Products page — inline    | ⚠️ Invalid structure    | ❌                     |
| ImageObject            | ❌ None                   | Missing                 | ❌                     |
| VideoObject            | ❌ None                   | Missing                 | ❌                     |
| Person (Author)        | ❌ None                   | Missing on blog         | ❌                     |
| HowTo                  | ❌ None                   | Missing                 | ❌                     |
| ItemList               | ❌ None                   | Missing                 | ❌                     |

---

## 8.2 Organization Schema Audit

**File:** `components/seo/OrganizationSchema.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Reet Foods & Gifting",
  "url": "https://reetfoodsngiftings.com",
  "logo": "https://reetfoodsngiftings.com/assets/images/logo.png",
  "description": "Pune's premier partner for premium dry fruits, chocolates...",
  "address": { ... },
  "contactPoint": {
    "telephone": "+91-9876543210"  ← WRONG NUMBER
  },
  "sameAs": [...]
}
```

| Field               | Current                   | Issue                           | Fix                                                              |
| ------------------- | ------------------------- | ------------------------------- | ---------------------------------------------------------------- |
| `name`              | "Reet Foods & Gifting"    | Should match legal name         | Use "Reet Foods and Giftings" or keep brand name — be consistent |
| `telephone`         | `+91-9876543210`          | **PLACEHOLDER — WRONG**         | Change to `+91-9225130732`                                       |
| `logo`              | `/assets/images/logo.png` | File may not exist at this path | Verify URL returns 200                                           |
| `sameAs` Facebook   | `reetfoodsgifting`        | Verify actual handle            | Confirm                                                          |
| `sameAs` Instagram  | `reetfoodsgifting`        | Verify actual handle            | Confirm                                                          |
| `sameAs` LinkedIn   | `reetfoodsgifting`        | Verify actual handle            | Confirm                                                          |
| `foundingDate`      | Missing                   | Add E-E-A-T signal              | Add `"foundingDate": "2016"`                                     |
| `email`             | Missing                   | Trust signal                    | Add `"email": "reetfoodspune@gmail.com"`                         |
| `areaServed`        | Missing                   | Local SEO                       | Add `"areaServed": "IN"`                                         |
| `numberOfEmployees` | Missing                   | Trust signal                    | Add if known                                                     |

---

## 8.3 LocalBusiness Schema Audit

**File:** `components/seo/LocalBusinessSchema.tsx`

**CRITICAL ERROR — Wrong Schema Type:**

```json
"@type": "FoodEstablishment"  ← WRONG
```

Reet Foods is a **gifting and retail business**, not a restaurant or food service establishment.

**Correct types to consider:**

- `Store` — most accurate (retail store selling gifts and food products)
- `LocalBusiness` with sub-type `FoodStore` if applicable
- Or use `Organization` + `Store`

| Field                | Current                          | Issue                                       | Fix                        |
| -------------------- | -------------------------------- | ------------------------------------------- | -------------------------- |
| `@type`              | `FoodEstablishment`              | **Wrong type**                              | Change to `Store`          |
| `telephone`          | `+91-9876543210`                 | **WRONG NUMBER**                            | Change to `+91-9225130732` |
| `image`              | `/assets/images/store-front.jpg` | File may not exist                          | Verify                     |
| `geo`                | `18.5912, 73.7389`               | ⚠️ Verify coordinates for Hinjewadi Phase I | Confirm accurate           |
| `openingHours`       | Mon–Sat 09:30–20:00              | ✅                                          | Confirm with client        |
| `currenciesAccepted` | Missing                          | Add                                         | `"INR"`                    |
| `paymentAccepted`    | Missing                          | Add                                         | `"Cash, UPI, Card"`        |
| `priceRange`         | `"₹₹"`                           | ✅                                          | ✅                         |
| `servesCuisine`      | Present (FoodEstablishment)      | Remove after type change                    | Remove                     |
| `hasMap`             | Missing                          | Local SEO                                   | Add Google Maps URL        |

---

## 8.4 Product Schema Audit

**File:** `components/seo/ProductSchema.tsx`

| Field             | Current                                   | Issue                              | Fix                                       |
| ----------------- | ----------------------------------------- | ---------------------------------- | ----------------------------------------- |
| `offers.url`      | `https://reetfoodsngiftings.com/products` | Should be product-specific URL     | `/products/${slug}`                       |
| `sku`             | `"REET-FOOD-DEFAULT"`                     | Default is meaningless             | Pass real SKU                             |
| `price`           | `"499"`                                   | Default price — not per-product    | Pass real price                           |
| `AggregateRating` | Missing                                   | **No rich price snippet possible** | Add rating                                |
| `gtin`            | Missing                                   | GTIN improves merchant eligibility | Add if available                          |
| `brand.url`       | Missing                                   | Add                                | `"url": "https://reetfoodsngiftings.com"` |
| `image` array     | Single item                               | Google prefers multiple images     | Pass array of images                      |
| `datePublished`   | Missing                                   | Freshness                          | Add production date                       |

---

## 8.5 FAQPage Schema Audit

**Component:** `FAQSchema.tsx` exists but is only used on `/corporate-gifting`

| Page                 | FAQPage Schema    | Issue                                                 |
| -------------------- | ----------------- | ----------------------------------------------------- |
| `/corporate-gifting` | ✅ Used           | ✅                                                    |
| `/faq`               | ❌ NOT USED       | **CRITICAL** — FAQ page has `<details>` but no schema |
| `/products`          | ✅ Inline JSON-LD | ✅                                                    |
| `/` (homepage)       | ❌ Not present    | Consider adding 3 top FAQs                            |

**Fix for FAQ page:**

```tsx
// app/(site)/faq/page.tsx
import { FAQSchema } from "@/components/seo/FAQSchema";

// Inside component:
<FAQSchema faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />;
```

---

## 8.6 BreadcrumbList Schema Audit

**Component:** `BreadcrumbSchema.tsx`

| Page              | Breadcrumb Schema     | Correct?                        |
| ----------------- | --------------------- | ------------------------------- |
| Homepage          | ❌ Not present        | N/A — homepage doesn't need one |
| Products          | ✅ Inline in page.tsx | ✅                              |
| Corporate Gifting | ✅                    | ✅                              |
| About             | ✅                    | ✅                              |
| Blog              | ✅                    | ✅                              |
| FAQ               | ❌ Missing            | ⚠️ Should have one              |
| Contact           | ❌ Missing            | ⚠️                              |

---

## 8.7 Missing Critical Schemas

### WebSite + SearchAction (Sitelinks Search Box)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Reet Foods & Gifting",
  "url": "https://reetfoodsngiftings.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://reetfoodsngiftings.com/products?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

**Add to:** `app/layout.tsx` as a permanent Script tag.

---

### AggregateRating (Rich Snippets for Products)

```json
{
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "350",
  "bestRating": "5"
}
```

**Add to:** All `ProductSchema` instances, plus `LocalBusinessSchema`.

---

### Article Schema for Blog Posts

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-15",
  "author": {
    "@type": "Organization",
    "name": "Reet Foods & Gifting",
    "url": "https://reetfoodsngiftings.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Reet Foods & Gifting",
    "logo": {
      "@type": "ImageObject",
      "url": "https://reetfoodsngiftings.com/assets/images/logo.png"
    }
  },
  "image": "...",
  "mainEntityOfPage": "https://reetfoodsngiftings.com/blog/..."
}
```

---

## 8.8 Schema Rendering Method

**Current Issue:** All schemas use `<Script type="application/ld+json" strategy="afterInteractive">`.

`afterInteractive` = runs AFTER page becomes interactive = **LATE for Googlebot**.

**Fix:** For SEO schemas, use server-rendered `<script>` tags:

```tsx
// In Server Components (most pages):
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
// NOT next/script with afterInteractive
```

**Exception:** `OrganizationSchema` and `LocalBusinessSchema` are in the `(site)/layout.tsx` which is `"use client"`. These must either:

1. Be moved to `app/layout.tsx` as server-rendered scripts, or
2. Use `next/script` with `strategy="beforeInteractive"` (not recommended), or
3. Better: move them to be static JSON-LD in `app/layout.tsx`

---

## Developer Instructions

### Fix 1 — Organization Schema Phone + Fields

```tsx
// components/seo/OrganizationSchema.tsx
"telephone": "+91-9225130732",  // correct number
"foundingDate": "2016",
"email": "reetfoodspune@gmail.com",
"areaServed": { "@type": "Country", "name": "India" },
```

### Fix 2 — LocalBusiness Schema Type

```tsx
// components/seo/LocalBusinessSchema.tsx
"@type": "Store",  // was "FoodEstablishment"
"telephone": "+91-9225130732",  // correct number
```

### Fix 3 — Add WebSite Schema to Root Layout

```tsx
// app/layout.tsx — add static JSON-LD
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Reet Foods & Gifting",
      url: "https://reetfoodsngiftings.com",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://reetfoodsngiftings.com/products?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
  }}
/>
```

### Fix 4 — Add FAQSchema to FAQ Page

```tsx
// app/(site)/faq/page.tsx
import { FAQSchema } from "@/components/seo/FAQSchema";
<FAQSchema faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />;
```

---

## Testing Checklist

- [ ] Google Rich Results Test — https://search.google.com/test/rich-results
  - [ ] Test Organization schema
  - [ ] Test LocalBusiness schema
  - [ ] Test Product schema
  - [ ] Test FAQPage schema (corporate-gifting + faq pages)
  - [ ] Test BreadcrumbList schema
- [ ] Schema Markup Validator — https://validator.schema.org/
- [ ] Fix phone number in both OrganizationSchema and LocalBusinessSchema
- [ ] Confirm `logo` image URLs return 200 in browser
- [ ] Confirm sameAs social URLs are correct handles
- [ ] After adding WebSite schema — test Sitelinks Search Box eligibility
- [ ] Google Search Console → Enhancements → verify no schema errors
