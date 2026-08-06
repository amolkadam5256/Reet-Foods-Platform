# 07 — Core Web Vitals (CWV) Audit

**Website:** https://reetfoodsngiftings.com  
**Framework:** Next.js 15 App Router  
**Audit Date:** August 2026  

> **Note:** Actual CWV metrics require Lighthouse or PageSpeed Insights on a live server. All findings below are based on code analysis and architectural patterns. Run live tests at https://pagespeed.web.dev/ after deployment.

---

## 7.1 CWV Summary (Code-Based Estimate)

| Metric | Mobile Estimate | Desktop Estimate | Target | Status |
|--------|---------------|-----------------|--------|--------|
| **LCP** (Largest Contentful Paint) | ~3.5–4.5s | ~2.0–2.5s | <2.5s | ⚠️ Needs work |
| **INP** (Interaction to Next Paint) | ~150–250ms | ~80–120ms | <200ms | ⚠️ |
| **CLS** (Cumulative Layout Shift) | ~0.05–0.12 | ~0.02–0.05 | <0.1 | ⚠️ |
| **FCP** (First Contentful Paint) | ~2.0–3.0s | ~1.0–1.5s | <1.8s | ⚠️ |
| **TTFB** (Time to First Byte) | ~500ms–1s | ~200–400ms | <800ms | ✅ |
| **TBT** (Total Blocking Time) | ~200–400ms | ~80–150ms | <200ms | ⚠️ |

---

## 7.2 LCP Analysis

**Root Cause of High LCP:**

1. **Homepage is `"use client"`** — React hydration delays first meaningful paint
2. **Hero images loaded in client-rendered component** — browser must download and execute JS before any image request begins
3. **Multiple tracking scripts load on `afterInteractive`** — gtag, GTM, Clarity all compete for main thread on page load
4. **Hero slider auto-plays on load** — triggers JavaScript execution before user sees content
5. **Font loading** — Geist Sans, Geist Mono, Playfair Display all loaded from Google Fonts — additional DNS + connection overhead

**LCP Element:** Likely the hero image (first slide in homepage hero carousel)

**Fix:**
```tsx
// Hero primary image must have priority={true} and explicit sizes
<Image
  src={slide.image}
  alt={slide.title}
  fill
  priority  // CRITICAL for LCP
  sizes="(max-width: 1280px) 100vw, 1280px"
  className="object-cover"
/>
```

**Additional Fix:** Move LCP image outside `"use client"` barrier — pre-render hero first slide server-side.

---

## 7.3 CLS Analysis

**Root Cause of CLS:**

1. **Font loading** — Playfair Display, Geist Sans may cause FOIT/FOUT (flash of invisible/unstyled text), causing layout shift
2. **Hero slider transition** — sliding between images may cause layout reflow
3. **Images with `fill` but no explicit container height** — if parent height is not set, CLS occurs on image load
4. **Sticky header animation** — `isScrolled` state change causes header height change, pushing content down

**Fix — Fonts (in `app/layout.tsx`):**
```tsx
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",     // ADD THIS — prevent FOIT
  preload: true,        // ADD THIS — preload critical font
});
```

**Fix — Image containers (any `fill` image):**
```tsx
// Parent must have explicit height
<div className="relative h-[400px] w-full">  {/* explicit height prevents CLS */}
  <Image src={...} fill alt={...} />
</div>
```

---

## 7.4 INP Analysis

**Root Cause of High INP:**

1. **Homepage is pure client component** — large JS bundle for interactions
2. **Multiple `useEffect` hooks** — auto-slide timer, scroll listener, keyboard listener all run simultaneously
3. **Search overlay** — when opened, renders a large list of entries synchronously
4. **Mobile menu** — renders conditionally, may cause paint

**Fix — Search Results (Virtual/Debounce):**
```tsx
// Use useDeferredValue for search results
import { useDeferredValue } from "react";
const deferredQuery = useDeferredValue(searchQuery);
const searchResults = useMemo(() => {
  // use deferredQuery instead of searchQuery
}, [deferredQuery, searchScope]);
```

**Fix — Remove unnecessary `useEffect` on homepage:**
```tsx
// Move auto-slider to a dedicated client component
// Keep homepage shell as server component
```

---

## 7.5 TTFB Analysis

| Factor | Assessment |
|--------|-----------|
| Hosting platform | Unknown — Vercel assumed (fast) |
| Next.js ISR/SSG | Products page is server-rendered ✅ |
| Homepage client | SSR minimal — client hydration adds delay |
| Database queries | None — all data from local files ✅ |
| API routes | `/api/assets/serve` — check for slow file reads |

**TTFB is likely acceptable** if hosted on Vercel Edge Network. If on shared hosting, may need upgrade.

---

## 7.6 JavaScript Bundle Analysis

**Scripts Loading on Every Page:**
1. `gtag.js` (Google Analytics) — `afterInteractive`
2. GTM container script — `afterInteractive`  
3. Microsoft Clarity — `afterInteractive`
4. React hydration bundle
5. Font files (Geist × 2, Playfair)

**Total third-party script weight estimate:** ~150–250KB

**Optimizations:**
```tsx
// Defer non-critical tracking
<Script
  src="https://www.clarity.ms/tag/xy6gqwaxvu"
  strategy="lazyOnload"  // CHANGE from afterInteractive
/>
```

---

## 7.7 Font Optimization

| Font | Current | Recommended |
|------|---------|-------------|
| Geist Sans | Loaded via `next/font/google` | ✅ |
| Geist Mono | Loaded via `next/font/google` | ✅ |
| Playfair Display | Loaded via `next/font/google` | ✅ |
| `display` option | Not specified | Add `display: "swap"` |
| `preload` option | Not specified | Add `preload: true` for primary font |
| Font subset | `["latin"]` only | ✅ |

---

## 7.8 CSS Optimization

| Check | Status |
|-------|--------|
| Tailwind CSS tree-shaking | ✅ |
| Critical CSS inlined | ⚠️ Next.js does this automatically |
| Unused CSS | ⚠️ Tailwind purging handles this |
| CSS in `globals.css` | Only 2KB — ✅ minimal global CSS |
| Animation performance | ⚠️ Check `transition duration-300` — use `will-change: transform` |

---

## 7.9 Preload / Prefetch Directives

| Resource | Current | Recommended |
|----------|---------|-------------|
| Hero image (LCP) | `priority={true}` on Image | ✅ Next.js adds `<link rel="preload">` |
| Critical fonts | Auto-preloaded via `next/font` | ✅ |
| Google Analytics | `afterInteractive` | ✅ |
| DNS prefetch for GA | ❌ Missing | Add `<link rel="dns-prefetch" href="//www.googletagmanager.com">` |
| Preconnect for GA | ❌ Missing | Add `<link rel="preconnect" href="https://www.googletagmanager.com">` |

**Fix — Add in `app/layout.tsx` `<head>`:**
```html
<link rel="preconnect" href="https://www.googletagmanager.com" />
<link rel="dns-prefetch" href="//www.googletagmanager.com" />
<link rel="preconnect" href="https://www.clarity.ms" />
```

---

## 7.10 React & Next.js Optimizations

| Optimization | Status | Fix |
|-------------|--------|-----|
| `"use client"` only where needed | ❌ Homepage is full client | Split into Server + Client components |
| `Suspense` boundaries | ⚠️ Unknown | Add Suspense for lazy-loaded sections |
| `optimizePackageImports` | ✅ `react-icons` optimized | |
| Image `placeholder="blur"` | ❌ Not used | Add blur placeholder for above-fold images |
| `loading="lazy"` below fold | ✅ Default in Next.js | |
| `compress: true` | ✅ | |

---

## 7.11 Expected CWV Improvements After Fixes

| Fix Applied | LCP Impact | CLS Impact | INP Impact |
|------------|-----------|-----------|-----------|
| Server render homepage | -1.5s | None | -50ms |
| Font `display: "swap"` | None | -0.05 | None |
| Priority image on hero | -0.5s | None | None |
| Defer Clarity to `lazyOnload` | -0.2s | None | -20ms |
| Add preconnect for GTM | -0.3s | None | None |
| Explicit image container heights | None | -0.05 | None |

**Projected CWV After Fixes:**
| Metric | Before | After |
|--------|--------|-------|
| LCP Mobile | ~4.0s | ~2.0s |
| CLS | ~0.10 | ~0.02 |
| INP | ~200ms | ~100ms |

---

## Developer Instructions

### Step 1 — Fix Homepage Client Rendering
```tsx
// app/(site)/page.tsx — remove "use client" from top
// Extract ONLY interactive elements to separate Client Components

// Create: components/home/HeroSlider.tsx (use client)
// Create: components/home/CategoryAccordion.tsx (use client)

// Keep page.tsx as server component
export default function Home() {
  return (
    <div>
      <HeroSlider slides={centerSlides} />
      <CategoryAccordion categories={heroCategories} />
      {/* Rest as server-rendered content */}
    </div>
  );
}
```

### Step 2 — Add Font Display Swap
```ts
// app/layout.tsx
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});
```

### Step 3 — Add Preconnect Tags
```tsx
// app/layout.tsx — inside <head>
<link rel="preconnect" href="https://www.googletagmanager.com" />
<link rel="dns-prefetch" href="//www.googletagmanager.com" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
```

---

## Testing Checklist

- [ ] Run PageSpeed Insights — mobile and desktop — https://pagespeed.web.dev/
- [ ] Check LCP element in Chrome DevTools → Performance → Timings
- [ ] Check CLS in Chrome DevTools → Performance → Layout Shifts
- [ ] Run Lighthouse CI in CI/CD pipeline
- [ ] Verify all `priority` images have `<link rel="preload">` in page source
- [ ] Test with Network throttling (Slow 4G) — LCP must be < 4s
- [ ] CrUX data in Google Search Console → Core Web Vitals report
- [ ] Run WebPageTest.org for waterfall analysis
