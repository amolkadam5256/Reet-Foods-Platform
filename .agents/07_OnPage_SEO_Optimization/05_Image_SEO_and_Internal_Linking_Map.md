# 05 — Image SEO Specifications & Internal Linking Matrix

**Website:** https://reetfoodsngiftings.com  
**Purpose:** Standardize image file naming, Alt text rules, responsive image props, and internal SILO anchor text mapping.  

---

## 1. Image SEO Standards & Asset Inventory

### Technical Standards:
- **Format:** Convert all JPG/PNG images to modern **WebP** or **AVIF** format.
- **Dimensions:** Explicit `width` and `height` attributes to eliminate Cumulative Layout Shift (CLS).
- **Compression:** 80-85% WebP compression ratio (maintains visual quality while reducing filesize by 60%+).
- **Hero Priority:** Add `priority` prop to above-the-fold hero images in Next.js.
- **Lazy Loading:** `loading="lazy"` for all below-the-fold images.

### Asset Specification Inventory Table

| Asset Path | Optimized File Name | Descriptive Alt Text | Dimensions | Loading Strategy |
|------------|---------------------|----------------------|------------|------------------|
| `/images/hero.jpg` | `corporate-gift-hampers-pune-hero.webp` | Premium corporate gift hampers with custom logo box by Reet Foods Pune | 1200 x 800 | `priority` / Eager |
| `/images/cashew.png` | `premium-w240-jumbo-cashews.webp` | Grade A W240 jumbo cashew nuts in airtight packaging | 600 x 600 | Lazy |
| `/images/almond.png` | `authentic-mamra-almonds-kashmir.webp` | Authentic oil-rich Mamra almonds from Kashmir by Reet Foods | 600 x 600 | Lazy |
| `/images/pista.png` | `roasted-salted-pistachios-container.webp` | Open shell roasted salted pistachios in nitrogen packed box | 600 x 600 | Lazy |
| `/images/diwali.png` | `corporate-diwali-dry-fruit-gift-box.webp` | Custom Diwali corporate dry fruit gift box with company logo printing | 800 x 600 | Lazy |

---

## 2. Master Internal & External Linking Matrix

### A. Internal SILO Link Architecture

```
Pillar: /corporate-gifting
 ├── Contextual Link -> /corporate-gifting-pune (Anchor: "corporate gifting services in Pune")
 ├── Contextual Link -> /products/cashews (Anchor: "premium W240 cashews")
 └── Contextual Link -> /employee-onboarding-kits (Anchor: "custom employee welcome kits")

Product: /products/cashews
 ├── Contextual Link -> /products (Anchor: "premium dry fruit collection")
 └── Contextual Link -> /products/almonds (Anchor: "authentic Mamra almonds")
```

### B. External Authority Citation Strategy
To build high E-E-A-T and factual credibility, link out selectively to non-competing authority sources:
1. **FSSAI Official Portal (`fssai.gov.in`):** Cite FSSAI food safety and packaging compliance guidelines.
2. **Ministry of Food Processing Industries (`mofpi.gov.in`):** Reference Indian food quality and agricultural standards.
3. **National Institutes of Health / PubMed:** Cite peer-reviewed clinical studies regarding nut health benefits (e.g. almond oil impact on heart health).
4. **GST Official Portal (`gst.gov.in`):** Reference official corporate tax guidelines regarding business gift deductions.
