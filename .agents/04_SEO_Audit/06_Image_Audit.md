# 06 — Image SEO Audit

**Website:** https://reetfoodsngiftings.com  
**Framework:** Next.js 15 with `next/image`  
**Audit Date:** August 2026  
**Reference Files:** `IMAGE_AUDIT.md`, `DUPLICATE_IMAGES.md`, `UNUSED_IMAGES.md`  

---

## 6.1 Image Technology Configuration

| Setting | Config | Status |
|---------|--------|--------|
| AVIF format | `formats: ["image/avif", "image/webp"]` | ✅ |
| WebP format | ✅ Enabled | ✅ |
| deviceSizes | 320–2048px breakpoints | ✅ |
| imageSizes | 16–384px fixed sizes | ✅ |
| Cache TTL | 30 days (`minimumCacheTTL`) | ✅ |
| Remote patterns | Unsplash, Cloudinary, GitHub | ✅ |
| SVG allowed | `dangerouslyAllowSVG: true` | ⚠️ Has strict CSP |

---

## 6.2 Next/Image Usage Audit

### Correct Usage (✅)
- `fill` prop used for responsive containers
- `priority` used on above-the-fold images (hero, blog featured)
- `sizes` attribute used on most images

### Issues Found

| Issue | Location | Impact | Fix |
|-------|----------|--------|-----|
| `fill` without explicit `sizes` | Some components | CLS, wrong image served | Add `sizes` prop |
| Hero images in client component | `page.tsx` (homepage) | LCP penalty | Move priority images to server component |
| Blog post images no `alt` fallback | `blog/page.tsx` — `alt={post.title}` | ✅ Actually good | Keep |
| `src` may be `undefined` on some product images | ProductsClient.tsx | Alt attribute empty | Add fallback |
| Decorative images missing `alt=""` | Unknown — needs audit | Accessibility | Fix |

---

## 6.3 Alt Text Audit

| Page | Image | Alt Text | Quality |
|------|-------|---------|---------|
| Homepage | Hero slides | Dynamic — from data | ⚠️ Check data values |
| Blog index | Featured post | `featuredPost.title` | ✅ Dynamic but descriptive |
| Blog index | Post cards | `post.title` | ✅ |
| About | Brand story image | "Reet Foods Production & Packaging" | ✅ |
| About | Hero | "Reet Foods Gifting Curation" | ✅ |
| Corporate Gifting | Hero | "Corporate Gifting Solutions Pune" | ✅ Good keyword in alt |
| Mobile nav | Logo | "Reet Foods" | ⚠️ Could be more descriptive |
| Mobile nav | Logo | "Reet Foods" | ⚠️ Should include "Premium Gifts Pune" |

**Global Issues:**
- ❌ No alt text on decorative images (pure visual) — should use `alt=""`
- ❌ Some images in `reetFoodImages` asset array may lack descriptive metadata

---

## 6.4 Image File Format Audit

| Image Type | Format Expected | Status |
|-----------|----------------|--------|
| Product images | AVIF/WebP (auto-converted by Next.js) | ✅ |
| Hero images | AVIF/WebP | ✅ |
| Logo | PNG (with transparency) | ✅ |
| OG image | JPG 1200×630 | ⚠️ File existence unverified |
| Gallery images | Various — needs audit | ⚠️ |
| Favicon | ICO + PNG + SVG | ✅ (all 3 provided) |

---

## 6.5 Image Compression

| Check | Status |
|-------|--------|
| Next.js auto-compression | ✅ (AVIF/WebP conversion) |
| Original file sizes optimized | ⚠️ Not verifiable without serving |
| `OPTIMIZATION_REPORT.md` exists | ✅ 85KB file suggests previous audit |
| Large unoptimized originals | ⚠️ Check `/public` folder image sizes |

From `OPTIMIZATION_REPORT.md` (85KB) and `optimization_summary.json` (85KB), previous optimization was done but results need re-verification.

---

## 6.6 Lazy Loading

| Check | Status |
|-------|--------|
| Above-fold images: `priority={true}` | ✅ Hero, featured blog |
| Below-fold images: default lazy | ✅ Next.js default |
| Lazy loading on gallery | ⚠️ Check gallery component |
| Background images (CSS) | ❌ Cannot be lazy loaded by Next.js |

---

## 6.7 Responsive Images

| Check | Status |
|-------|--------|
| `sizes` attribute on hero | ✅ `"(max-width: 1024px) 100vw, 50vw"` |
| `sizes` attribute on blog cards | ✅ `"(max-width: 768px) 100vw, 33vw"` |
| `sizes` attribute on product images | ⚠️ Needs verification in ProductsClient |
| Mobile viewport handled | ✅ `deviceSizes` includes 320, 480 |

---

## 6.8 Image SEO — Missing Elements

| Element | Status | Impact |
|---------|--------|--------|
| Image sitemap | ❌ Missing | Google Images visibility |
| `ImageObject` schema | ❌ Not implemented | Rich image results |
| EXIF data removed | ⚠️ Unknown | Privacy + size |
| Image file names keyword-rich | ⚠️ Using generic imports | "wooden-cashew-gift-box.jpg" better |
| Images in structured data | ⚠️ Product schema has `image` field | ✅ But verify URL is real |
| Social sharing images | ⚠️ Default OG image used | Custom per-page OG images |

---

## 6.9 Duplicate Images Report

Reference: `DUPLICATE_IMAGES.md` (3KB) — previous audit performed.

**Action:** Review this file and remove all duplicate images from `/public` to reduce build size.

---

## 6.10 Unused Images

Reference: `UNUSED_IMAGES.md` (1.3KB) — previous audit performed.

**Action:** Remove all unused images from the codebase to reduce bundle size and improve performance.

---

## Developer Instructions

### Fix 1 — Add Image Sitemap
```ts
// app/sitemap.ts — add image sitemap entries
// Or create app/image-sitemap.ts as separate route
export async function generateImageSitemap() {
  return productImages.map((img) => ({
    url: `https://reetfoodsngiftings.com${img.path}`,
    images: [{
      url: img.src,
      caption: img.alt,
      title: img.title,
    }],
  }));
}
```

### Fix 2 — Add ImageObject Schema to Product Pages
```tsx
const imageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "url": product.image,
  "name": product.name,
  "description": product.imageAlt,
  "width": 800,
  "height": 600,
  "contentUrl": product.image,
};
```

### Fix 3 — Create Missing OG Image
The file `/public/products-og.jpg` is referenced in the products page metadata but may not exist.

**Action:**  
1. Create a branded 1200×630px image for the products page
2. Verify `/assets/images/og-image.jpg` exists in the public directory
3. Create unique OG images for: Homepage, Products, Corporate Gifting, About, Blog

### Fix 4 — Add `sizes` to Missing Images
```tsx
// Any fill image without sizes:
<Image
  src={src}
  fill
  alt={alt}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

---

## Testing Checklist

- [ ] Lighthouse → Performance audit → check LCP image
- [ ] Chrome DevTools → Network → filter by Img — check all images load as AVIF/WebP
- [ ] View source — confirm `priority` images have `loading="eager"` (or no loading attr)
- [ ] Check `/products-og.jpg` exists in public folder
- [ ] Check `/assets/images/og-image.jpg` exists
- [ ] Facebook Debugger — verify OG image on each page
- [ ] Verify `DUPLICATE_IMAGES.md` duplicates have been removed
- [ ] Verify `UNUSED_IMAGES.md` unused images have been removed
- [ ] Google Search Console → Coverage → check for Image index coverage
- [ ] Run `next build` — check for any image-related build errors
