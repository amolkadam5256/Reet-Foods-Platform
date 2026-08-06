# 04 — JavaScript SEO & Core Web Vitals Optimization Plan

**Website:** https://reetfoodsngiftings.com  
**Target Targets:** LCP < 2.5s, INP < 200ms, CLS < 0.1, TTFB < 800ms  

---

## 1. JavaScript SEO & Server Component Refactoring

### Issue: Homepage Client Hydration Constraint
`app/(site)/page.tsx` is currently marked with `"use client"`. This forces Next.js to ship the entire React component tree as client-side JavaScript, increasing bundle payload and delaying HTML rendering.

### Solution Architecture:
1. Remove `"use client"` from `app/(site)/page.tsx` to make it a **React Server Component (RSC)**.
2. Extract interactive UI elements (sliders, tab toggles, modal dialogs) into small, isolated client components (`HeroCarousel.tsx`, `FaqAccordion.tsx`).

```tsx
// ❌ Old app/(site)/page.tsx (Client Component)
"use client";
import React from 'react';
export default function Page() { ... }

// ✅ New app/(site)/page.tsx (Server Component - Fast SSR & Low Bundle Size)
import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';

export default function Page() {
  return (
    <main>
      <HeroSection />
      <CategoryGrid />
    </main>
  );
}
```

---

## 2. Core Web Vitals Action Plan

### A. Largest Contentful Paint (LCP Optimization)
- **Problem:** LCP image in Hero section is loaded late due to client-side hydration.
- **Fix:** Preload above-the-fold hero images using Next.js `<Image priority />` prop and server HTML rendering.

```tsx
import Image from 'next/image';

<Image
  src="/images/hero-corporate-gifting.webp"
  alt="Premium Corporate Gift Hampers Pune by Reet Foods"
  width={1200}
  height={675}
  priority
  sizes="(max-width: 768px) 100vw, 1200px"
  className="w-full h-auto object-cover"
/>
```

### B. Interaction to Next Paint (INP Optimization)
- **Problem:** Long tasks (> 50ms) on main thread during client hydration.
- **Fix:** Defer non-critical third-party analytics scripts (GA4, Clarity) using `strategy="lazyOnload"`.

### C. Cumulative Layout Shift (CLS Optimization)
- **Problem:** Images or dynamic banner elements without fixed aspect ratios cause layout jumps.
- **Fix:** Enforce explicit width/height or CSS `aspect-ratio` containers on all images, icons, and dynamic banners.
