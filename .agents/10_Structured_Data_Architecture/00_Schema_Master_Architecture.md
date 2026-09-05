# 00 — Schema Master Architecture

**Website:** https://reetfoodsngiftings.com  
**Purpose:** Executive overview, entity inventory, schema relationship map, and master compliance standards for Google Rich Results and AI Knowledge Graphs.  
**Date:** August 2026  

---

## 1. Enterprise Entity Inventory

| Entity Type | Entity Canonical Name | Unique ID (@id) | Key Schema Types Applied |
|-------------|-----------------------|-----------------|--------------------------|
| **Organization** | Reet Foods & Gifting | `https://reetfoodsngiftings.com/#organization` | `Organization`, `Brand` |
| **LocalBusiness** | Reet Foods Hinjewadi Pune | `https://reetfoodsngiftings.com/#localbusiness` | `LocalBusiness`, `Store`, `FoodEstablishment` |
| **WebSite** | Reet Foods Platform | `https://reetfoodsngiftings.com/#website` | `WebSite`, `SearchAction` |
| **Product** | W240 King Size Cashew Nuts | `https://reetfoodsngiftings.com/products/cashews#product` | `Product`, `Offer`, `AggregateRating` |
| **Product** | Authentic Mamra Almonds | `https://reetfoodsngiftings.com/products/almonds#product` | `Product`, `Offer`, `AggregateRating` |
| **Product** | Roasted Salted Pistachios | `https://reetfoodsngiftings.com/products/pistachios#product` | `Product`, `Offer`, `AggregateRating` |
| **Product** | Kashmiri Walnut Kernels | `https://reetfoodsngiftings.com/products/walnuts#product` | `Product`, `Offer`, `AggregateRating` |
| **Service** | Corporate Gifting Solutions | `https://reetfoodsngiftings.com/corporate-gifting#service` | `Service`, `OfferCatalog` |
| **Service** | Employee Welcome Kits | `https://reetfoodsngiftings.com/employee-onboarding-kits#service` | `Service`, `Product` |
| **Person** | Founder & CEO | `https://reetfoodsngiftings.com/#person-founder` | `Person` |
| **Credential** | FSSAI License | `21525083009881` | `EducationalOccupationalCredential` |

---

## 2. Master Entity Relationship Graph

```
                            ┌─────────────────────────────────────────┐
                            │    Organization / Brand (@id)           │
                            │    https://reetfoodsngiftings.com       │
                            └────────────────────┬────────────────────┘
                                                 │
         ┌──────────────────┬────────────────────┴────────────────────┬──────────────────┐
         ▼                  ▼                                         ▼                  ▼
┌─────────────────┐┌──────────────────┐                    ┌──────────────────┐┌──────────────────┐
│  WebSite (@id)  ││ LocalBusiness    │                    │  Services (@id)  ││  Products (@id)  │
│  SearchAction   ││ Hinjewadi Pune   │                    │  Corporate Gifts ││  Cashews, Almonds│
└─────────────────┘└──────────────────┘                    └──────────────────┘└──────────────────┘
```
