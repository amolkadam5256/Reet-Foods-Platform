# 09 — Product Linking Framework

**Website:** https://reetfoodsngiftings.com
**Date:** August 2026

---

## Product Linking Architecture

Every product page must participate in the full linking ecosystem. Products should never be isolated — they must connect upward to categories, sideways to related products, and downward to supporting content.

### Product Linking Rule: MINIMUM 12 INTERNAL LINKS per product page

| Link Type | Count | Target |
|-----------|-------|--------|
| Breadcrumb links | 2–3 | Parent category, Homepage |
| Related products | 3–5 | Sibling products |
| Category link | 1 | Parent category hub |
| Corporate link | 1 | /corporate-gifts/ (if B2B relevant) |
| Bulk orders link | 1 | /bulk-orders/ |
| Supporting blog | 1–2 | Relevant blog article |
| FAQ link | 1 | Relevant FAQ |
| CTA link | 1 | /contact/ or quote form |

---

## Product Linking Template

For every product page, apply the following structure:

### Section 1 — Above the Fold
```
Breadcrumb: Home > [Category] > [Product Name]
```

### Section 2 — Product Description Body
```
"...This [Product Name] is part of our [Category Name](/[category]/) collection,
perfect for [use case like corporate gifting/Diwali/wedding].

Also explore our [Related Product 1](/products/[related-1]/),
[Related Product 2](/products/[related-2]/), and 
[Related Product 3](/products/[related-3]/) for more options.

For bulk orders of 50+ units, visit our [Bulk Gifting Solutions](/bulk-gifting-solutions/)
page or [contact us](/contact/) for volume pricing.

Learn more about [gifting tips/health benefits] in our 
[Supporting Blog Article](/blog/[relevant-article]/)."
```

### Section 3 — "Related Products" Module (UI Component)
```
[Related Product Card 1] [Related Product Card 2] [Related Product Card 3] [Related Product Card 4]
All with clickable links to individual product pages
```

### Section 4 — "You May Also Like" (Cross-Sell)
```
[Cross-sell product 1] [Cross-sell product 2] [Cross-sell product 3]
From different categories — e.g., on a dry fruit page, show chocolate gifts
```

### Section 5 — FAQ Module (on product page)
```
Frequently Asked Questions
Q: Can I customize this gift box?
A: Yes! Visit our [Custom Gifting page](/services/custom-packaging/) or [contact us](/contact/).

Q: Do you offer bulk pricing?
A: Yes, for orders of 50+, see [Bulk Orders](/bulk-orders/).
```

### Section 6 — "Complete the Hamper" CTA
```
"Planning a corporate gift? Pair this with our [Corporate Gift Hamper](/products/corporate-gift-hamper/)
for a premium presentation. [Build a Custom Hamper →](/contact/#custom-hamper)"
```

---

## Product-Specific Linking Maps

### Premium Cashew Gift Box
**URL:** `/products/premium-cashew-gift-box/`

| Link | Target URL | Anchor Text |
|------|-----------|-------------|
| Breadcrumb L1 | / | Home |
| Breadcrumb L2 | /dry-fruits/ | Dry Fruits |
| Breadcrumb L3 | /dry-fruits/cashews/ | Cashews |
| Related Product | /products/almond-hamper/ | Almond Hamper |
| Related Product | /products/mixed-nut-box/ | Mixed Nut Box |
| Related Product | /products/diwali-dry-fruit-box/ | Diwali Dry Fruit Box |
| Category | /dry-fruits/ | premium dry fruits collection |
| Corporate link | /corporate-gifts/ | corporate gifting |
| Bulk | /bulk-orders/ | bulk cashew orders |
| Blog | /blog/premium-dry-fruits-guide/ | Premium Dry Fruits Buying Guide |
| Blog | /blog/dry-fruits-health-benefits/ | health benefits of cashews |
| FAQ | /faq/dry-fruits/ | dry fruits FAQ |
| CTA | /contact/ | request a custom quote |

---

### Corporate Gift Hamper
**URL:** `/products/corporate-gift-hamper/`

| Link | Target URL | Anchor Text |
|------|-----------|-------------|
| Breadcrumb L1 | / | Home |
| Breadcrumb L2 | /corporate-gifts/ | Corporate Gifts |
| Related Product | /products/premium-dry-fruit-corporate-box/ | Premium Dry Fruit Corporate Box |
| Related Product | /products/luxury-corporate-hamper/ | Luxury Corporate Hamper |
| Related Product | /products/mixed-nut-corporate-box/ | Mixed Nut Corporate Box |
| Category | /corporate-gifts/ | corporate gifting solutions |
| Sub-category | /employee-gifting-programs/ | employee appreciation gifting |
| Sub-category | /client-gifting-solutions/ | client gifting solutions |
| City | /corporate-gifting-pune/ | corporate gifting in Pune |
| Bulk | /bulk-gifting-solutions/ | bulk corporate gift orders |
| Blog | /blog/best-corporate-gifts-india/ | guide to best corporate gifts |
| Blog | /blog/employee-gifting-trends/ | employee gifting trends |
| FAQ | /faq/corporate-gifting/ | corporate gifting FAQ |
| CTA | /contact/#quote-form | get a corporate gift quote |

---

### Diwali Dry Fruit Box
**URL:** `/products/diwali-dry-fruit-box/`

| Link | Target URL | Anchor Text |
|------|-----------|-------------|
| Breadcrumb L1 | / | Home |
| Breadcrumb L2 | /festive-gifts/ | Festive Gifts |
| Breadcrumb L3 | /diwali-gifts/ | Diwali Gifts |
| Related Product | /products/premium-cashew-gift-box/ | Premium Cashew Gift Box |
| Related Product | /products/diwali-corporate-gift-hamper/ | Diwali Corporate Hamper |
| Related Product | /products/luxury-chocolate-box/ | Luxury Chocolate Box |
| Category | /diwali-gifts/ | Diwali gift collection |
| Parent Category | /festive-gifts/ | festive gift hampers |
| Corporate | /diwali-corporate-gifts/ | Diwali corporate gifting |
| Bulk | /bulk-orders/ | bulk Diwali gift orders |
| Blog | /blog/diwali-gift-ideas/ | Diwali Gift Ideas Guide |
| Blog | /blog/best-diwali-corporate-gifts/ | best Diwali corporate gifts |
| FAQ | /faq/festive-gifts/ | festive gifting FAQ |
| CTA | /contact/ | order in bulk for Diwali |

---

### Cold Pressed Juice Pack
**URL:** `/products/cold-pressed-juice-pack/`

| Link | Target URL | Anchor Text |
|------|-----------|-------------|
| Breadcrumb L1 | / | Home |
| Breadcrumb L2 | /cold-pressed-juices/ | Cold Pressed Juices |
| Related Product | /products/detox-juice-bundle/ | Detox Juice Bundle |
| Related Product | /products/superfood-gift-box/ | Superfood Gift Box |
| Category | /cold-pressed-juices/ | cold pressed juice collection |
| Parent Category | /healthy-foods/ | healthy food gifts |
| Blog | /blog/benefits-cold-pressed-juices/ | benefits of cold pressed juices |
| Blog | /blog/cold-pressed-vs-regular-juice/ | cold pressed vs regular juice |
| FAQ | /faq/cold-pressed-juices/ | cold pressed juice FAQ |
| CTA | /contact/ | custom juice gift order |

---

### Wedding Dry Fruit Hamper
**URL:** `/products/wedding-dry-fruit-hamper/`

| Link | Target URL | Anchor Text |
|------|-----------|-------------|
| Breadcrumb L1 | / | Home |
| Breadcrumb L2 | /wedding-gifts/ | Wedding Gifts |
| Related Product | /products/shaadi-gift-box/ | Shaadi Gift Box |
| Related Product | /products/luxury-gift-hamper/ | Luxury Gift Hamper |
| Related Product | /products/premium-cashew-gift-box/ | Premium Cashew Gift Box |
| Category | /wedding-gifts/ | wedding gift hampers |
| Cross-sell | /luxury-hampers/ | luxury wedding hampers |
| Bulk | /bulk-orders/ | bulk wedding favors |
| Blog | /blog/wedding-gift-ideas-india/ | Wedding Gift Ideas India |
| Blog | /blog/dry-fruits-for-wedding/ | dry fruits for wedding |
| FAQ | /faq/wedding-gifts/ | wedding gifts FAQ |
| CTA | /contact/ | customize for your wedding |

---

## Product Category Linking Matrix

| Product | Primary Category | Secondary Category | Corporate Link | Seasonal Link |
|---------|-----------------|-------------------|----------------|---------------|
| Premium Cashew Gift Box | /dry-fruits/cashews/ | /dry-fruits/ | /corporate-gifts/ | /diwali-gifts/ |
| Almond Hamper | /dry-fruits/almonds/ | /dry-fruits/ | /corporate-gifts/ | — |
| Luxury Gift Hamper | /luxury-hampers/ | /gift-boxes/ | /corporate-gifts/ | /festive-gifts/ |
| Corporate Gift Hamper | /corporate-gifts/ | /gift-boxes/ | — | /diwali-corporate-gifts/ |
| Diwali Dry Fruit Box | /diwali-gifts/ | /festive-gifts/ | /diwali-corporate-gifts/ | — |
| Cold Pressed Juice Pack | /cold-pressed-juices/ | /healthy-foods/ | /corporate-gifts/ | — |
| Wedding Dry Fruit Hamper | /wedding-gifts/ | /dry-fruits/ | — | — |
| Bulk Cashew | /bulk-orders/dry-fruits/ | /dry-fruits/ | /bulk-gifting-solutions/ | — |
| Luxury Chocolate Box | /chocolate-gifts/ | /luxury-hampers/ | /corporate-gifts/ | /festive-gifts/ |

---

## "Complete the Look" Cross-Sell Linking

| If viewing... | Show these cross-sells |
|---------------|----------------------|
| Cashew Gift Box | Almond Hamper, Luxury Hamper, Diwali Box |
| Corporate Hamper | Luxury Hamper, Employee Gift, Chocolate Box |
| Diwali Gift Box | Corporate Hamper, Luxury Box, Mixed Nuts |
| Wedding Hamper | Luxury Hamper, Shaadi Box, Cashew Box |
| Juice Pack | Superfood Box, Organic Hamper |

---

## Product Linking — Developer Notes

### Related Products Component
```tsx
// Auto-generate from product metadata tags
// Each product should have: category[], occasion[], recipient[]
// Related products = products sharing 2+ tags

interface Product {
  tags: string[];
  relatedProductIds: string[]; // Pre-computed at build time
}
```

### Implementation Priority
- [ ] Add breadcrumbs to all product pages
- [ ] Add "Related Products" section to all product pages (4 products)
- [ ] Add "You May Also Like" section (cross-category, 3 products)
- [ ] Add contextual links in product description body
- [ ] Add FAQ module on product pages
- [ ] Link from category pages to all products
