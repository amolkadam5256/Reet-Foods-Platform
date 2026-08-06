# 13 — Cross-Selling Link System

**Website:** https://reetfoodsngiftings.com
**Date:** August 2026

---

## Cross-Selling Linking Strategy

Cross-selling links connect products from different categories to increase average order value (AOV) and expose users to more of the product catalog. For SEO, cross-selling links:
- Distribute authority across unrelated product clusters
- Increase pages-per-session and dwell time
- Reduce bounce rates
- Create unexpected discovery moments

### Cross-Selling Rule
- Every product page must show 3 cross-sell products from DIFFERENT categories
- Cross-sell links must be contextually relevant (not random)
- Use a visual "Complete the Gift" or "You May Also Like" section
- Track click-through rates to measure effectiveness

---

## Cross-Sell Matrix

| If Viewing | Recommend (Same Category — Related) | Cross-Sell (Different Category) |
|-----------|-------------------------------------|--------------------------------|
| Premium Cashew Gift Box | Almond Hamper, Mixed Nut Box | Luxury Chocolate Box, Diwali Gift Box, Wedding Hamper |
| Almond Hamper | Cashew Gift Box, Mixed Nut Box | Superfood Gift Box, Corporate Hamper |
| Corporate Gift Hamper | Luxury Corporate Hamper, Employee Gift | Dry Fruit Box, Chocolate Hamper, Juice Pack |
| Luxury Gift Hamper | Royal Dry Fruit Hamper, Premium Basket | Corporate Hamper, Wedding Hamper |
| Diwali Dry Fruit Box | Diwali Corporate Hamper, Cashew Box | Luxury Chocolate Box, Festival Gift Box |
| Cold Pressed Juice Pack | Detox Juice Bundle, Fruit Juice Pack | Organic Dry Fruit Hamper, Superfood Box |
| Wedding Dry Fruit Hamper | Shaadi Gift Box, Royal Wedding Box | Luxury Hamper, Chocolate Box |
| Luxury Chocolate Box | Corporate Chocolate Hamper | Cashew Gift Box, Luxury Hamper |
| Superfood Gift Box | Organic Dry Fruit Hamper | Juice Pack, Healthy Hamper |
| Bulk Cashew | Bulk Almonds, Bulk Mixed Nuts | Bulk Corporate Hampers |

---

## "Complete the Gift" Bundles

Create bundle suggestion sections on each product page:

### Bundle 1 — The Ultimate Corporate Gift
- Premium Cashew Gift Box + Luxury Chocolate Box + Corporate Branded Bag
- Link: `/products/ultimate-corporate-bundle/` (if bundle exists) or individual links

### Bundle 2 — The Diwali Celebration Kit
- Diwali Dry Fruit Box + Luxury Chocolate Box + Festival Greeting Card
- Link: `/diwali-gifts/` hub page

### Bundle 3 — The Wedding Hamper Collection
- Wedding Dry Fruit Hamper + Luxury Hamper + Flower Packaging Add-on
- Link: `/wedding-gifts/` hub page

### Bundle 4 — The Health & Wellness Gift
- Cold Pressed Juice Pack + Organic Dry Fruit Hamper + Superfood Box
- Link: `/healthy-foods/` hub page

### Bundle 5 — The Diwali Corporate Mega Pack
- Diwali Corporate Hamper + Bulk Cashews + Branded Packaging
- Link: `/diwali-corporate-gifts/`

---

## Category Cross-Linking Rules

### Dry Fruits ↔ Gift Boxes
```
On Dry Fruits category page:
"Looking for ready-to-gift packaging? Browse our [Gift Boxes & Hampers](/gift-boxes/) collection
where our dry fruits are beautifully curated into premium gift presentations."

On Gift Boxes category page:
"All our gift boxes are filled with the finest [premium dry fruits](/dry-fruits/),
sourced from the best farms in India."
```

### Corporate Gifts ↔ Festive Gifts
```
On Corporate Gifts page:
"Planning ahead for Diwali or Holi? Explore our [Festival Corporate Gift Collection](/festive-gifts/)
for specially curated seasonal hampers perfect for bulk corporate gifting."

On Festive Gifts page:
"Are you a corporate buyer? Our [Corporate Gifting Solutions](/corporate-gifts/) include
bulk festival hampers with custom branding options."
```

### Luxury Hampers ↔ Wedding Gifts
```
On Luxury Hampers page:
"Preparing for a wedding? Our [Wedding Luxury Hampers](/luxury-hampers/wedding/)
are the perfect expression of love and generosity."

On Wedding Gifts page:
"For the most premium wedding statement, explore our exclusive
[Luxury Hamper Collection](/luxury-hampers/)."
```

### Healthy Foods ↔ Cold Pressed Juices
```
On Healthy Foods page:
"Complement your healthy gifting with our range of [Cold Pressed Juices](/cold-pressed-juices/)
— the perfect addition to any wellness-focused gift."

On Cold Pressed Juices page:
"Pair your juice gift with our [Organic Dry Fruits](/healthy-foods/organic/)
for a complete healthy gifting experience."
```

### Chocolate Gifts ↔ Gift Boxes
```
On Chocolate Gifts page:
"Want a mixed gifting experience? Our [Premium Gift Boxes](/gift-boxes/)
combine chocolates with dry fruits for a truly indulgent hamper."

On Gift Boxes page:
"Add a sweet touch to any hamper with our range of [Chocolate Gifts](/chocolate-gifts/)."
```

---

## Cross-Sell Link Placement Strategy

### Placement 1 — "You May Also Like" section (below product details)
- 4 cross-sell products in a visual grid
- Link: product title + product image + CTA "Add to Cart / View"

### Placement 2 — In-content contextual mention
- 1–2 natural mentions within the product description body
- Example: "...often paired with our [Luxury Chocolate Box](/products/luxury-chocolate-box/)..."

### Placement 3 — "Frequently Bought Together" section
- 2–3 related products from same or different categories
- Checkbox-style UI for adding to cart together

### Placement 4 — Post-Add-to-Cart / Cart Page
- Show 3 cross-sell recommendations in cart sidebar
- Link: "You forgot to add..." type messaging

### Placement 5 — Email trigger (post-purchase)
- Cross-sell in thank-you email
- Not SEO but important for business (note for marketing team)

---

## Cross-Sell Anchor Text Guidelines

| Cross-Sell Context | Anchor Text Style |
|-------------------|------------------|
| Within product description | Descriptive: "[Product Name]" |
| "You May Also Like" section | Product name only |
| "Complete the Gift" section | Action-oriented: "Add [Product] to Your Hamper" |
| Category cross-links | Topical: "premium dry fruit gift boxes" |
| Blog recommendations | Contextual: "pair this with our luxury chocolate box" |

---

## Cross-Sell Linking Developer Notes

```tsx
// Cross-sell data structure
interface CrossSellConfig {
  productId: string;
  sameCategory: string[];      // 2–3 same-category related products
  crossCategory: string[];     // 3 different-category products  
  bundleId?: string;           // Optional bundle recommendation
}

// Computed at build time from product tags
// tags: ["corporate", "dry-fruits", "luxury", "diwali"]
// crossCategory = products with complementary tags
// e.g., "dry-fruits" product → show "chocolate" + "juice" cross-sells
```

---

## Cross-Sell Performance Targets

| Metric | Baseline | 30-Day Target | 90-Day Target |
|--------|----------|---------------|---------------|
| Cross-sell click rate | Unknown | 8% | 15% |
| Multi-product session rate | Unknown | 25% | 40% |
| Average products per session | 1.2 | 1.8 | 2.5 |
| Revenue from cross-sells | Baseline | +10% | +25% |
