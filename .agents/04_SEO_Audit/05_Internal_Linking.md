# 05 — Internal Linking Audit

**Website:** https://reetfoodsngiftings.com  
**Audit Date:** August 2026  

---

## 5.1 Navigation Link Audit

### Primary Navigation (From `(site)/layout.tsx`)

| Link | Label | Href | Status |
|------|-------|------|--------|
| Home | Home | `/` | ✅ |
| Products | Products | `/products` | ✅ |
| Corporate Gifting | Corporate Gifting | `/corporate-gifting` | ✅ |
| About | About | `/about` | ✅ |
| Gallery | Gallery | `/gallery` | ✅ |
| Blog | Blog | `/blog` | ✅ |
| Contact | Contact | `/contact` | ✅ |

**Issues:**
- ❌ FAQ not in primary navigation — users and Googlebot cannot easily discover it
- ❌ Products dropdown only links to 5 paths — missing chocolates, juices
- ❌ "Custom Corporate Gifts" and "Build Your Gift Box" in dropdown both link to `/contact#quote` — duplicate anchor, no product destination

---

### Products Dropdown Menu Links

| Label | Href | Issue |
|-------|------|-------|
| Premium Dry Fruits | `/products/premium-dry-fruits` | ✅ |
| Dry Fruit Gift Boxes | `/products/categories/dry-fruit-box` | ✅ |
| Festive Hampers | `/products/celebration-hampers` | ✅ |
| Custom Corporate Gifts | `/contact#quote` | ❌ Should link to `/corporate-gifting` |
| Build Your Gift Box | `/contact#quote` | ❌ Redundant — no product page |

---

## 5.2 Footer Link Audit

Footer structure not fully visible in current code review but `Footer` component exists in `@/components/common/Footer`.

**Recommended Footer Link Architecture:**
```
Products                Corporate                Company            Support
─────────               ─────────────────        ───────            ───────
Premium Dry Fruits      Corporate Gifting         About Us           FAQ
Dry Fruit Gift Boxes    Bulk Orders               Gallery            Contact
Festive Hampers         Custom Logo Boxes         Blog               Shipping Policy
Artisanal Chocolates    Industries We Serve       Careers            Return Policy
Cold Pressed Juices     Request Quote             Privacy Policy
                                                  Terms & Conditions
```

---

## 5.3 Contextual Internal Links

### Homepage Context Links

| CTA Button | Destination | Anchor Text |
|-----------|------------|-------------|
| "Explore Premium Hampers" | Not clear — hero CTA | ⚠️ Add href |
| "Request Corporate Quote" | `/contact#quote` | ✅ |
| "Shop The Collection" | `/products` | ✅ |
| "Shop Dry Fruits" | `/products/premium-dry-fruits` | ✅ |
| "Explore Gift Boxes" | `/products/categories/dry-fruit-box` | ✅ |
| "Plan Bulk Order" | `/contact#quote` | ✅ |

---

### About Page Context Links

| CTA | Destination | Issue |
|-----|------------|-------|
| "Discover Our Range" | `/products` | ✅ |
| Missing | `/corporate-gifting` | ❌ No link to revenue page |
| Missing | `/contact` | ❌ No contact CTA |
| Missing | `/blog` | ❌ No blog link |

---

### Corporate Gifting Page Context Links

| CTA | Destination | Issue |
|-----|------------|-------|
| "Request Corporate Catalog" | `/contact#quote` | ✅ |
| "WhatsApp Corporate Desk" | `wa.me/919876543210` | ❌ WRONG NUMBER |
| "Request Corporate Proposal" | `/contact#quote` | ✅ |
| Missing | `/products` | ❌ No product discovery link |
| Missing | `/blog` | ❌ No blog link |

---

## 5.4 Anchor Text Diversity

| Anchor Text Pattern | Count | Issue |
|--------------------|-------|-------|
| "Contact#quote" | 5+ times | Too repetitive |
| "Explore" | 3+ times | Too generic |
| "Shop" | 3+ times | Generic |
| "Read More" | Multiple in blog | ❌ Non-descriptive |
| "Read Article" | Blog featured post | ✅ Better |

**Recommendation:** Replace generic "Read More" with descriptive anchors:
- ❌ "Read More" → ✅ "Read: How to Choose Corporate Gifts for Diwali"

---

## 5.5 Link Depth Analysis

| Page | Clicks from Homepage | Issue |
|------|---------------------|-------|
| `/products` | 1 click | ✅ |
| `/corporate-gifting` | 1 click | ✅ |
| `/about` | 1 click | ✅ |
| `/blog` | 1 click | ✅ |
| `/faq` | 2+ clicks (footer only) | ⚠️ Low priority signal |
| `/products/premium-dry-fruits` | 2 clicks | ✅ |
| `/blog/[slug]` | 3 clicks | ⚠️ |
| `/products/categories/dry-fruit-box` | 2 clicks | ✅ |
| Policy pages | 3+ clicks | ✅ (low priority) |

---

## 5.6 Orphan Pages

| Potential Orphan | Current Link Status | Fix |
|-----------------|--------------------|----|
| `/faq` | Footer only (possibly) | Add to navigation |
| `/gallery/photos` | Gallery sub-link | Confirm linking |
| `/gallery/videos` | Gallery sub-link | Confirm linking |
| `/blog/[slug]` | From blog index | ✅ |
| Policy pages | Footer | ✅ Acceptable |

---

## 5.7 Hub Pages & Cluster Architecture

### Current Hub Pages
- `/products` — Product Hub ✅
- `/corporate-gifting` — B2B Hub ✅
- `/blog` — Content Hub ✅

### Missing Hub Pages
- `/dry-fruits-pune` — Dry Fruits Hub (local SEO)
- `/diwali-gifting` — Seasonal Hub
- `/wholesale-gifting` — B2B Wholesale Hub
- `/chocolate-gifts` — Chocolate Hub

---

## 5.8 Link Equity Flow

```
Homepage (PageRank Core)
├── /products (High equity — nav + hero)
│   ├── /products/premium-dry-fruits
│   ├── /products/celebration-hampers
│   ├── /products/artisanal-chocolates
│   └── /products/categories/dry-fruit-box
├── /corporate-gifting (High equity — nav + hero)
├── /about (Medium equity — nav)
├── /blog (Medium equity — nav)
│   └── /blog/[slug] (Low equity — only from blog index)
├── /contact (Medium equity — nav + CTAs)
├── /gallery (Low equity — nav)
└── /faq (VERY LOW equity — footer only)
```

**Issue:** `/faq` receives almost no internal link equity. Google will treat it as low-priority.

---

## 5.9 Recommended Internal Link Additions

| From Page | Add Link To | Anchor Text |
|-----------|------------|-------------|
| About page | `/corporate-gifting` | "Explore Corporate Gifting" |
| About page | `/contact` | "Get in Touch" |
| Blog posts | `/products/premium-dry-fruits` | Product name in content |
| Blog posts | `/corporate-gifting` | "Corporate Gifting Solutions" |
| Homepage | `/faq` | "Have Questions? See FAQ" |
| Products page | `/blog` | "Read Our Gifting Guides" |
| Corporate Gifting | `/products` | "Browse All Products" |
| FAQ | `/contact#quote` | "Get a Quote" |

---

## Developer Instructions

### Fix Navigation — Add FAQ
```tsx
// (site)/layout.tsx — navItems array
const navItems: NavItem[] = [
  { label: "Home", href: "/", kind: "simple" },
  { label: "Products", href: "/products", kind: "shop" },
  { label: "Corporate Gifting", href: "/corporate-gifting", kind: "simple" },
  { label: "About", href: "/about", kind: "simple" },
  { label: "Gallery", href: "/gallery", kind: "simple" },
  { label: "Blog", href: "/blog", kind: "simple" },
  { label: "FAQ", href: "/faq", kind: "simple" }, // ADD THIS
  { label: "Contact", href: "/contact", kind: "simple" },
];
```

### Fix Wrong WhatsApp Number — Corporate Gifting Page
```tsx
// app/(site)/corporate-gifting/page.tsx — line 78
secondaryCta={{ label: "WhatsApp Corporate Desk", href: "https://wa.me/919890609611" }}
// Was: wa.me/919876543210 (wrong placeholder)
```

### Fix Generic "Read More" Anchors in Blog
```tsx
// app/(site)/blog/page.tsx — line 140
<Link href={`/blog/${post.slug}`} className="...">
  Read: {post.title.slice(0, 40)}... {/* Descriptive anchor */}
</Link>
```

---

## Testing Checklist

- [ ] Screaming Frog: Crawl all pages — export internal links report
- [ ] Check no "Read More" generic anchor texts — all must be descriptive
- [ ] Confirm `/faq` appears in footer and optionally navigation
- [ ] Verify all product dropdown links resolve to 200 HTTP responses
- [ ] Confirm WhatsApp number is `919890609611` across all pages
- [ ] Check no orphan pages (pages with 0 internal links pointing to them)
- [ ] Test all hero CTA buttons resolve correctly
- [ ] Verify navigation dropdown "Custom Corporate Gifts" links to `/corporate-gifting`
