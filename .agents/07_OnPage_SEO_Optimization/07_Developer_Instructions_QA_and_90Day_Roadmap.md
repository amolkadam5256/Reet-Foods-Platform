# 07 — Developer Implementation Task List, QA & 90-Day Roadmap

**Website:** https://reetfoodsngiftings.com  
**Purpose:** Precise code instructions for developers, quality assurance verification steps, and 90-day execution plan.  

---

## 1. Developer Implementation Task List

### Task 1: Refactor `app/(site)/page.tsx` to Server Component
- **Issue:** Homepage currently uses `"use client"`, delaying initial HTML render and harming LCP.
- **Fix:** Remove `"use client"` from `page.tsx`. Move interactive client logic (sliders, modals) into dedicated client components (`HeroSlider.tsx`, `TestimonialCarousel.tsx`).

### Task 2: Implement Dynamic Metadata Generator (`app/layout.tsx` & route pages)
```tsx
// app/corporate-gifting/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Gift Hampers & Custom Logo Gift Boxes | Reet Foods',
  description: 'Buy custom corporate gift hampers for employees & clients. FSSAI certified dry fruits, branded boxes & GST invoices.',
  alternates: {
    canonical: 'https://reetfoodsngiftings.com/corporate-gifting',
  },
  openGraph: {
    title: 'Custom Corporate Gift Hampers & Executive Boxes | Reet Foods',
    description: 'Custom logo corporate gift hampers, employee welcome kits & executive hampers.',
    url: 'https://reetfoodsngiftings.com/corporate-gifting',
    images: ['/images/og-corporate.webp'],
  },
};
```

### Task 3: Server-Side Embedded JSON-LD Schema
```tsx
// components/seo/SchemaOrg.tsx
export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Reet Foods & Gifting",
    "url": "https://reetfoodsngiftings.com",
    "logo": "https://reetfoodsngiftings.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hinjewadi Phase I",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411057",
      "addressCountry": "IN"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

---

## 2. QA & Verification Checklist

- [ ] Execute `npm run build` locally to verify zero build errors or TypeScript mismatches.
- [ ] Test URL with Google Rich Results Test (`https://search.google.com/test/rich-results`).
- [ ] Verify image `alt` tags exist on all product and hero images.
- [ ] Verify `<html lang="en">` tag is present in `layout.tsx`.
- [ ] Confirm `canonical` tags point to absolute `https://reetfoodsngiftings.com` URLs.
- [ ] Test sticky mobile WhatsApp and Phone CTA buttons on mobile devices (< 640px).

---

## 3. 90-Day Implementation Roadmap

```
Phase 1: Critical Server & Metadata Refactoring (Days 1–30)
  ├── 1. Refactor page.tsx to Server Component
  ├── 2. Update Metadata title & description tags across all 7 main routes
  ├── 3. Embed Organization & Product JSON-LD Schemas directly in server JSX
  └── 4. Implement WebP image formats with Next.js <Image /> props

Phase 2: On-Page Copy & FAQ Expansion (Days 31–60)
  ├── 1. Add H1-H3 heading structure across all category & product pages
  ├── 2. Implement FAQ sections with FAQPage schema on top 5 pages
  ├── 3. Deploy sticky mobile WhatsApp CTA bar
  └── 4. Add FSSAI license & GSTIN trust badges to footer & contact pages

Phase 3: Geo Landing Pages & AI Optimization (Days 61–90)
  ├── 1. Launch `/corporate-gifting-pune` & `/corporate-gifting-hinjewadi`
  ├── 2. Optimize Q&A blocks for Google AI Overviews & Perplexity AI
  └── 3. Conduct final GSC coverage audit and PageSpeed performance validation
```
