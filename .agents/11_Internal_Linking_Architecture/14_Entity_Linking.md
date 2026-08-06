# 14 — Entity Linking Strategy

**Website:** https://reetfoodsngiftings.com
**Date:** August 2026

---

## Entity SEO Overview

Entity SEO is about helping search engines understand WHO you are, WHAT you sell, and HOW everything connects. Google's Knowledge Graph, Bing's Entity Graph, and AI search engines (ChatGPT, Gemini, Perplexity) all rely on entity recognition to understand relationships between people, places, products, concepts, and organizations.

For Reet Foods & Giftings, entity linking means:
- Consistently naming and linking entities (products, brands, cities, occasions)
- Creating definition/information pages for key entities
- Establishing semantic relationships between entities via internal links
- Using entity-rich anchor text that feeds Knowledge Graph signals

---

## Entity Inventory

### Organization Entities

| Entity | Type | Target URL |
|--------|------|-----------|
| Reet Foods & Giftings | Organization | /about/ |
| Reet Dry Fruits | Brand | /dry-fruits/ |
| Reet Corporate Gifts | Service Brand | /corporate-gifts/ |

### Product Category Entities

| Entity | Type | Target URL |
|--------|------|-----------|
| Dry Fruits | Product Category | /dry-fruits/ |
| Cashews | Product | /dry-fruits/cashews/ |
| Almonds | Product | /dry-fruits/almonds/ |
| Pistachios | Product | /dry-fruits/pistachios/ |
| Walnuts | Product | /dry-fruits/walnuts/ |
| Mixed Nuts | Product | /dry-fruits/mixed-nuts/ |
| Gift Boxes | Product Category | /gift-boxes/ |
| Luxury Hampers | Product Category | /luxury-hampers/ |
| Corporate Gift Hampers | Product | /products/corporate-gift-hamper/ |
| Chocolate Gifts | Product Category | /chocolate-gifts/ |
| Cold Pressed Juices | Product Category | /cold-pressed-juices/ |
| Organic Foods | Product Category | /healthy-foods/organic/ |

### Service Entities

| Entity | Type | Target URL |
|--------|------|-----------|
| Corporate Gifting | Service | /corporate-gifts/ |
| Employee Gifting | Service | /employee-gifting-programs/ |
| Client Gifting | Service | /client-gifting-solutions/ |
| Bulk Gifting | Service | /bulk-orders/ |
| Custom Branded Packaging | Service | /services/custom-packaging/ |
| Wedding Gifting | Service | /wedding-gifts/ |

### Occasion Entities

| Entity | Type | Target URL |
|--------|------|-----------|
| Diwali | Festival/Occasion | /diwali-gifts/ |
| Holi | Festival/Occasion | /holi-gifts/ |
| Eid | Festival/Occasion | /eid-gifts/ |
| Christmas | Festival/Occasion | /christmas-gifts/ |
| Navratri | Festival/Occasion | /navratri-gifts/ |
| Wedding | Occasion | /wedding-gifts/ |
| Corporate Events | Occasion | /corporate-gifts/ |

### Geographic Entities

| Entity | Type | Target URL |
|--------|------|-----------|
| Pune | City | /corporate-gifting-pune/ |
| Mumbai | City | /corporate-gifting-mumbai/ |
| Bangalore | City | /corporate-gifting-bangalore/ |
| Delhi | City | /corporate-gifting-delhi/ |
| Chennai | City | /corporate-gifting-chennai/ |
| India | Country | /about/ or Homepage |

### Health/Nutrition Entities

| Entity | Type | Target URL |
|--------|------|-----------|
| Nutrition | Concept | /blog/dry-fruits-health-benefits/ |
| Antioxidants | Concept | /blog/dry-fruits-health-benefits/ |
| Cold Pressing | Process | /cold-pressed-juices/ |
| Organic Certification | Concept | /healthy-foods/organic/ |
| Superfoods | Concept | /healthy-foods/superfoods/ |

### Business Entities

| Entity | Type | Target URL |
|--------|------|-----------|
| Employee Engagement | Concept | /employee-gifting-programs/ |
| Client Retention | Concept | /client-gifting-solutions/ |
| Corporate Branding | Concept | /services/custom-packaging/ |
| Bulk Procurement | Concept | /bulk-orders/ |
| B2B Gifting | Concept | /corporate-gifts/ |

---

## Entity Linking Rules

### Rule 1 — First Mention Rule
The FIRST time an entity is mentioned on any page, it MUST be linked to its canonical entity page.

```
✅ CORRECT:
"Premium [cashews](/dry-fruits/cashews/) are sourced from certified farms..."
"Our [Diwali corporate gifting](/diwali-corporate-gifts/) solutions include..."

❌ INCORRECT:
"Premium cashews are sourced from certified farms..." (first mention, not linked)
```

### Rule 2 — Entity Consistency
Always refer to entities by their canonical name:

| Entity | Canonical Name | Variations to Avoid |
|--------|---------------|---------------------|
| Cold Pressed Juices | "Cold Pressed Juices" | "cold-pressed juice", "CP juice" |
| Diwali Gifts | "Diwali gifts" or "Diwali Gift Collection" | "deepawali gifts" (use on Diwali page itself) |
| Corporate Gifting | "Corporate Gifting" or "corporate gifts" | "corporate presents" (for variety only) |
| Dry Fruits | "Dry Fruits" | "dried fruits" (acceptable variant) |
| Reet Foods | "Reet Foods & Giftings" (full) or "Reet" (informal) | |

### Rule 3 — Entity Disambiguation
For entities with multiple meanings, link with context:

```
✅ CORRECT:
"Our [Diwali gift collection](/diwali-gifts/) is perfect for corporate teams..."
(Links "Diwali gift collection" not just "Diwali" — clearer entity signal)

✅ ALSO CORRECT:
"Celebrate [Diwali](/diwali-gifts/) with our premium gift hampers..."
```

### Rule 4 — Entity Clustering
Group related entities and link them together:

```
Example cluster — Festivals:
"Whether you're celebrating [Diwali](/diwali-gifts/), [Holi](/holi-gifts/), 
or [Eid](/eid-gifts/), our festive gift hampers are perfect for every occasion.
Explore our complete [festive gifts collection](/festive-gifts/)."
```

### Rule 5 — Organizational Entity Links
Always link the brand name on third-party or supporting pages:

```
"Reet Foods & Giftings is Pune's leading [corporate gifting company](/corporate-gifts/)..."
```

---

## Entity Relationship Map

```
Reet Foods & Giftings
├── Products
│   ├── Dry Fruits → Cashews, Almonds, Pistachios, Walnuts
│   ├── Gift Boxes → Luxury Hampers, Festival Boxes, Wedding Boxes
│   ├── Chocolate Gifts → Luxury Chocolate, Corporate Chocolate
│   ├── Cold Pressed Juices → Fruit, Vegetable, Detox
│   └── Healthy Foods → Organic, Superfoods
│
├── Services
│   ├── Corporate Gifting → Employee, Client, Bulk, Branded
│   ├── Wedding Gifting → Hampers, Favors
│   └── Festival Gifting → Diwali, Holi, Eid, Christmas
│
├── Geographies
│   ├── Pune (Primary)
│   ├── Mumbai
│   ├── Bangalore
│   └── All India
│
└── Occasions
    ├── Diwali → Corporate + Retail
    ├── Holi → Retail
    ├── Wedding → Premium
    └── Corporate Events → Year-round
```

---

## Entity Pages to Create

These pages serve as canonical entity reference points:

| Entity Page | URL | Content |
|-------------|-----|---------|
| What is Corporate Gifting? | /corporate-gifts/#what-is | Definition + Reet's approach |
| What are Cold Pressed Juices? | /cold-pressed-juices/#what-are | Process explanation |
| Diwali Gifting Guide | /diwali-gifts/ | Complete Diwali hub |
| About Premium Dry Fruits | /dry-fruits/#about | Quality story |
| Our Cities | /about/#cities | Geographic coverage |

---

## Entity Schema Implementation

### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://reetfoodsngiftings.com/#organization",
  "name": "Reet Foods & Giftings",
  "url": "https://reetfoodsngiftings.com",
  "sameAs": [
    "https://www.instagram.com/reetfoods/",
    "https://www.facebook.com/reetfoods/",
    "https://g.co/kgs/[google-id]"
  ]
}
```

### Product Entity Schema (on every product)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://reetfoodsngiftings.com/products/premium-cashew-gift-box/#product",
  "name": "Premium Cashew Gift Box",
  "brand": {
    "@type": "Brand",
    "name": "Reet Foods & Giftings"
  },
  "category": "Dry Fruits > Cashews"
}
```

### Event Entity Schema (seasonal pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Diwali 2026 Corporate Gifting",
  "startDate": "2026-10-15",
  "endDate": "2026-11-05",
  "location": {
    "@type": "Place",
    "name": "India"
  }
}
```

---

## Entity Linking QA Checklist

| Entity | Canonical URL Defined | Consistent Name Used | First-Mention Links | Schema Present |
|--------|----------------------|---------------------|--------------------|----|
| Reet Foods & Giftings | ⬜ | ⬜ | ⬜ | ⬜ |
| Corporate Gifting | ⬜ | ⬜ | ⬜ | ⬜ |
| Dry Fruits | ⬜ | ⬜ | ⬜ | ⬜ |
| Cashews | ⬜ | ⬜ | ⬜ | ⬜ |
| Diwali | ⬜ | ⬜ | ⬜ | ⬜ |
| Pune | ⬜ | ⬜ | ⬜ | ⬜ |
| Mumbai | ⬜ | ⬜ | ⬜ | ⬜ |
| Luxury Hampers | ⬜ | ⬜ | ⬜ | ⬜ |
| Cold Pressed Juices | ⬜ | ⬜ | ⬜ | ⬜ |
| Wedding Gifts | ⬜ | ⬜ | ⬜ | ⬜ |
