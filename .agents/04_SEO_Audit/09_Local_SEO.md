# 09 — Local SEO Audit

**Business:** Reet Foods and Giftings  
**Primary Location:** Shop No. F14, Ground Floor, Streets of Europe Mall, Maan Road near Infosys Circle, Hinjewadi Phase I, Pune – 411057  
**Secondary Location:** Yashodevi Avenue, Building B2, Vishwashanti Colony No. 4, near Govind Garden, Pune – 411027  
**Audit Date:** August 2026  

---

## 9.1 NAP Consistency Audit (Name, Address, Phone)

NAP must be identical across all digital touchpoints.

| Source | Business Name | Address | Phone |
|--------|--------------|---------|-------|
| `data/business.ts` | "Reet Foods and Giftings" | Shop No. F14, Streets of Europe Mall, Hinjewadi Phase I, Pune – 411057 | +91 9890609611 |
| `OrganizationSchema.tsx` | "Reet Foods & Gifting" | Shop F14, Streets of Europe Mall, Hinjewadi Phase I, Pune | **+91-9876543210 ❌ WRONG** |
| `LocalBusinessSchema.tsx` | "Reet Foods & Gifting" | Shop F14, Streets of Europe Mall, Hinjewadi Phase I, Pune | **+91-9876543210 ❌ WRONG** |
| Contact page | "Reet Foods" | From `business.ts` ✅ | +91 9890609611 ✅ |
| Corporate Gifting page | — | — | `wa.me/919876543210` ❌ WRONG |

**NAP Inconsistency Summary:**
- **Business Name:** 3 variants — "Reet Foods and Giftings", "Reet Foods & Gifting", "Reet Foods"
- **Phone:** Correct in `business.ts` and contact page but **WRONG** in both schema components
- **Address:** Inconsistent formatting between schema (abbreviated) and `business.ts` (full)

**Fix:** Standardize to one canonical NAP:
```ts
Name: "Reet Foods & Gifting"       // or full legal name
Phone: "+91 98906 09611"            // formatted consistently
Address: "Shop F14, Streets of Europe Mall, Hinjewadi Phase I, Pune, Maharashtra 411057"
```

---

## 9.2 Google Business Profile (GBP)

| Check | Status | Finding |
|-------|--------|---------|
| GBP claimed and verified | ❌ Unknown | Must verify — critical for local pack |
| Business name correct | ❌ Unknown | |
| Address exact match | ❌ Unknown | |
| Phone correct | ❌ Unknown | |
| Business category set | ❌ Unknown | Should be: "Gift Shop" + "Dry Goods Store" |
| Description added | ❌ Unknown | |
| Hours of operation | ❌ Unknown | |
| Photos added | ❌ Unknown | |
| Products listed in GBP | ❌ Unknown | |
| Q&A managed | ❌ Unknown | |
| Posts published | ❌ Unknown | |
| Reviews > 10 | ❌ Unknown | |
| Average rating ≥ 4.0 | ❌ Unknown | |

**Priority: CRITICAL** — Without an optimized GBP, the site will not appear in local pack (Maps) results.

**Recommended GBP Categories:**
1. **Primary:** Gift Shop
2. **Secondary:** Dry Goods Store
3. **Secondary:** Corporate Gift Supplier
4. **Secondary:** Food Gift Basket Store

---

## 9.3 LocalBusiness Schema Issues

As detailed in Schema audit:
- Wrong `@type`: `FoodEstablishment` → should be `Store`
- Wrong phone: `+91-9876543210` → fix to `+91-9890609611`
- Missing `hasMap` for Google Maps link
- Missing `aggregateRating`

**Fixed Schema (Full):**
```json
{
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Reet Foods & Gifting",
  "image": "https://reetfoodsngiftings.com/images/store-front.jpg",
  "url": "https://reetfoodsngiftings.com",
  "telephone": "+91-9890609611",
  "email": "reetfoodspune@gmail.com",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop F14, Streets of Europe Mall, Hinjewadi Phase I",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411057",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.5912,
    "longitude": 73.7389
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:30",
      "closes": "20:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "350",
    "bestRating": "5"
  },
  "hasMap": "https://maps.google.com/?q=Reet+Foods+Hinjewadi+Pune",
  "sameAs": [
    "https://www.facebook.com/reetfoodsgifting",
    "https://www.instagram.com/reetfoodsgifting"
  ]
}
```

---

## 9.4 Map Embed Audit

| Page | Map Embed | Status |
|------|-----------|--------|
| Contact page | ❌ No map embed | **Missing** |
| About page | ❌ No map embed | Missing |
| Homepage | ❌ No map embed | Missing |

**Fix:** Add a Google Maps embed to the contact page.

```html
<!-- Contact page — add after address -->
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!...HINJEWADI..."
  width="100%"
  height="300"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  title="Reet Foods Location — Hinjewadi Phase I, Pune"
/>
```

---

## 9.5 Local Keyword Targeting

| Local Keyword | Current Coverage | Opportunity |
|--------------|-----------------|-------------|
| "corporate gifting Pune" | ✅ On corporate-gifting page | Strengthen |
| "dry fruit shop Hinjewadi" | ❌ None | Add to homepage/contact |
| "gift shop Hinjewadi Phase I" | ❌ None | Add to about/contact |
| "premium gift boxes Pune" | ⚠️ Partial | Add local schema |
| "chocolate gift Pune" | ❌ None | Add product page |
| "bulk dry fruits Pune" | ❌ None | New page needed |
| "Diwali gifts Pune" | ❌ None | Seasonal page |
| "Streets of Europe Mall gift shop" | ❌ None | NAP + schema |

---

## 9.6 Citation Opportunities

Build local citations (consistent NAP) on these platforms:

| Platform | Priority | Status |
|----------|----------|--------|
| Google Business Profile | **Critical** | Unknown |
| Justdial | HIGH | Unknown |
| Sulekha | HIGH | Unknown |
| IndiaMART | HIGH | B2B corporate gifting |
| TradeIndia | MEDIUM | B2B |
| IndiaBizz | MEDIUM | |
| Yelp India | LOW | |
| Zomato (if applicable) | LOW | Food product listing |
| Swiggy Genie | LOW | |
| Bing Places | MEDIUM | Link to Bing Webmaster Tools |
| Apple Maps | MEDIUM | Growing in India |

---

## 9.7 Review Strategy

| Platform | Strategy |
|----------|---------|
| Google Reviews | Ask every satisfied corporate client via WhatsApp |
| Google Reviews — Target | 50+ reviews, 4.7+ average |
| IndiaMART | Create product listings, collect buyer reviews |
| Justdial | List with all categories |
| Social proof on website | Embed Google reviews widget |

**Review Request Template:**
```
Hi [Name], Thank you for choosing Reet Foods for your [gifting occasion].
We'd be grateful if you could share a quick Google review — it takes 2 minutes!
[Google Review Link]
```

---

## 9.8 Local Content Strategy

Create geo-targeted landing pages:

| Page | URL | Content |
|------|-----|---------|
| Corporate Gifting Pune | `/corporate-gifting-pune` | Already exists as `/corporate-gifting` — add Pune geo-targeting |
| Dry Fruits Hinjewadi | `/dry-fruits-hinjewadi-pune` | Local landing page |
| Gift Shop Hinjewadi | `/gift-shop-hinjewadi-pune` | Location-specific page |
| Diwali Hampers Pune | `/diwali-hampers-pune` | Seasonal landing page |

---

## Developer Instructions

### Fix 1 — Correct Phone in Both Schema Components

**OrganizationSchema.tsx:**
```tsx
"telephone": "+91-9890609611",
```

**LocalBusinessSchema.tsx:**
```tsx
"telephone": "+91-9890609611",
"@type": "Store",
```

### Fix 2 — Add Map Embed to Contact Page
```tsx
// app/(site)/contact/page.tsx — add after address section
<div className="mt-4">
  <iframe
    src="https://www.google.com/maps/embed?pb=..." // Get embed URL from Google Maps
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    title="Reet Foods & Gifting — Hinjewadi Phase I, Pune"
  />
</div>
```

### Fix 3 — Add hasMap to LocalBusinessSchema
```tsx
"hasMap": "https://www.google.com/maps/place/Reet+Foods+Pune",
```

---

## Testing Checklist

- [ ] Claim and verify Google Business Profile
- [ ] Verify GBP name matches website name exactly
- [ ] Verify GBP address matches website and schema exactly
- [ ] Verify GBP phone matches website and schema
- [ ] Upload 10+ photos to GBP (interior, products, packaging)
- [ ] Set GBP primary category to "Gift Shop"
- [ ] Enable GBP messaging
- [ ] Test Rich Results for LocalBusiness — https://search.google.com/test/rich-results
- [ ] Search "Reet Foods Pune" on Google — verify GBP appears
- [ ] Search "corporate gifting Hinjewadi" — monitor SERP position
- [ ] Create Justdial and IndiaMART listings
- [ ] Verify NAP is identical on all platforms
