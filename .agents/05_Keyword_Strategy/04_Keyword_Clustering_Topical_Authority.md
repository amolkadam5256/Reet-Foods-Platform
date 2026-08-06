# 04 — Keyword Clustering & Topical Authority Architecture

**Website:** https://reetfoodsngiftings.com  
**Purpose:** Establish complete topical authority and semantic entity architecture for Google Search and AI Knowledge Graphs.  

---

## 1. Master Topic Clusters

```
                                ┌─────────────────────────────────────────┐
                                │       TOPICAL AUTHORITY ARCHITECTURE    │
                                └────────────────────┬────────────────────┘
                                                     │
         ┌──────────────────┬────────────────────────┼────────────────────────┬──────────────────┐
         ▼                  ▼                        ▼                        ▼                  ▼
┌─────────────────┐┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐┌──────────────────┐
│ Cluster 1:      ││ Cluster 2:       │    │ Cluster 3:       │    │ Cluster 4:       ││ Cluster 5:       │
│ Corporate       ││ Festive & Event  │    │ Premium Dry      │    │ Artisanal        ││ Local SEO        │
│ Gifting (B2B)   ││ Gifting          │    │ Fruits & Nuts    │    │ Chocolates       ││ Geo-Hubs         │
└────────┬────────┘└────────┬─────────┘    └────────┬─────────┘    └────────┬─────────┘└────────┬─────────┘
         │                  │                       │                       │                   │
  ├── Welcome Kits   ├── Diwali Hampers      ├── Cashews (W240)      ├── Branded Bars    ├── Pune (Hinjewadi)
  ├── Client Gifts   ├── New Year Hampers    ├── Mamra Almonds       ├── Dragees         ├── Mumbai (BKC)
  ├── Executive Boxes├── Wedding Favors      ├── Pistachios          ├── Gift Boxes      ├── Bangalore
  └── Logo Branding  └── Return Gifts        └── Dates & Raisins     └── Bulk Tins       └── Delhi NCR
```

---

## 2. Cluster Breakdown & Semantic Nodes

### Cluster 1: B2B Corporate Gifting Architecture
- **Pillar Page:** `/corporate-gifting`
- **Sub-topic Nodes:**
  1. `/corporate-gifting/employee-appreciation` (Employee welcome kits & recognition)
  2. `/corporate-gifting/client-appreciation` (Executive VIP client hampers)
  3. `/corporate-gifting/under-500` (Budget corporate gifting)
  4. `/corporate-gifting/under-1000` (Mid-tier corporate gifting)
  5. `/corporate-gifting/under-2000` (Premium corporate gifting)
  6. `/corporate-gifting/eco-friendly` (Sustainable hampers)

### Cluster 2: Festive & Occasion Gifting Architecture
- **Pillar Page:** `/festive-hampers`
- **Sub-topic Nodes:**
  1. `/corporate-diwali-gifts` (Diwali corporate bulk hampers)
  2. `/festive-hampers/new-year` (New year client & employee boxes)
  3. `/wedding-return-gifts` (Wedding favors & invitation boxes)
  4. `/festive-hampers/rakhi` (Raksha Bandhan dry fruit boxes)

### Cluster 3: Single Nuts & Dried Fruits Architecture
- **Pillar Page:** `/products`
- **Sub-topic Nodes:**
  1. `/products/cashews` (W240, W320, Flavored cashews)
  2. `/products/almonds` (Mamra, California almonds)
  3. `/products/pistachios` (Roasted salted pistachios)
  4. `/products/walnuts` (Kashmiri walnut kernels)
  5. `/products/dates` (Ajwa, Medjool dates)
  6. `/products/raisins` (Seedless raisins)

---

## 3. Entity SEO & Knowledge Graph Schema

Entities to define and reinforce across site content:

| Entity Type | Entity Name | Schema Mapping |
|-------------|-------------|----------------|
| **Brand Entity** | Reet Foods & Gifting | `Organization` |
| **Product Entity** | Premium Cashew Nuts (W240) | `Product` |
| **Product Entity** | Mamra Almonds | `Product` |
| **Service Entity** | Custom Logo Corporate Gifting | `Service` |
| **Location Entity** | Hinjewadi Phase 1, Pune | `PostalAddress` / `Place` |
| **Credential Entity** | FSSAI License `21526079003816` | `EducationalOccupationalCredential` |
| **Occasion Entity** | Diwali Corporate Gifting | `Event` / `OfferCatalog` |

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Reet Foods & Gifting",
  "url": "https://reetfoodsngiftings.com",
  "logo": "https://reetfoodsngiftings.com/images/logo.png",
  "knowsAbout": [
    "Corporate Gifting",
    "Premium Dry Fruits",
    "Artisanal Chocolates",
    "FSSAI Certified Food Packaging",
    "Custom Logo Gift Boxes"
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "FSSAI Food License",
    "identifier": "21526079003816"
  }
}
```
