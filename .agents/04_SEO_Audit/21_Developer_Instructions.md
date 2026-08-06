# 21 — Comprehensive Developer Implementation Specification

**Website:** https://reetfoodsngiftings.com  
**Audit Date:** August 2026  
**Target Architecture:** Next.js (App Router), TypeScript, Tailwind CSS  

---

## 21.1 Task 1: Server Component Refactoring for Homepage (LCP Fix)

### Objective:
Convert `app/(site)/page.tsx` from a Client Component (`"use client"`) to a Server Component to enable server-side HTML rendering for optimal SEO and LCP.

### Instructions:
1. Remove `"use client";` from top of `app/(site)/page.tsx`.
2. Extract interactive animations and slider components into client-boundary child components (e.g. `HeroCarousel.tsx`, `TestimonialSlider.tsx`).
3. Retain static text, headers, and initial HTML on the server.

```tsx
// ❌ Old app/(site)/page.tsx
"use client";
export default function HomePage() { ... }

// ✅ New app/(site)/page.tsx
import HeroSection from '@/components/home/HeroSection';
import CorporateSection from '@/components/home/CorporateSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CorporateSection />
    </main>
  );
}
```

---

## 21.2 Task 2: Schema Modularization & Server-Side JSON-LD Rendering

### Objective:
Replace `next/script` (`afterInteractive`) rendering of Schema in favor of native `<script type="application/ld+json">` embedded directly in server-rendered layout/page JSX.

### Instructions:
Update `components/seo/OrganizationSchema.tsx`:

```tsx
// components/seo/OrganizationSchema.tsx
export default function OrganizationSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Reet Foods & Gifting",
    "url": "https://reetfoodsngiftings.com",
    "logo": "https://reetfoodsngiftings.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "mr"]
    },
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
```

---

## 21.3 Task 3: Image Optimization & Next.js Image Props

### Objective:
Ensure zero unoptimized images and prevent layout shifts.

### Instructions:
1. Replace standard `<img>` tags with `next/image` `<Image />`.
2. Add `priority` prop to above-the-fold hero images.
3. Define explicit `width` and `height` attributes or use `fill` with parent responsive aspect ratio containers.

```tsx
import Image from 'next/image';

<Image
  src="/images/hero-hamper.webp"
  alt="Premium Corporate Festive Hamper Box by Reet Foods"
  width={800}
  height={600}
  priority
  className="w-full h-auto object-cover"
/>
```

---

## 21.4 Task 4: Security Headers Configuration

### Instructions:
Update `next.config.js` or `next.config.mjs` to add security response headers.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' }
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```
