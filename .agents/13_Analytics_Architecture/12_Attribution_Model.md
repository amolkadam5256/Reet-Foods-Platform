# 12_Attribution_Model.md
# Marketing Attribution Strategy — Reet Foods & Giftings

---

## SECTION 1 — Attribution Models Comparison & Selection

Reet Foods & Giftings serves two distinct user journeys:
1. **Short Cycle E-Commerce:** Festival gift purchases (1–3 days decision window).
2. **Long Cycle B2B Corporate Gifting:** Bulk corporate orders (14–45 days procurement cycle involving multiple touchpoints).

| Model | Mechanics | Ideal Use Case | Reet Foods Recommendation |
|-------|-----------|----------------|---------------------------|
| **Data-Driven Attribution (DDA)** | Machine learning assigns credit based on path impact | Primary GA4 Default | **PRIMARY MODEL (Sitewide)** |
| **First Click** | 100% credit to initial touchpoint | Top-of-Funnel Brand Discovery | Secondary (Evaluating SEO & Content) |
| **Last Click / Last Non-Direct** | 100% credit to final touchpoint before conversion | Short-term promo campaigns | Legacy Operational Comparison |
| **Position-Based (40-20-40)** | 40% First, 40% Last, 20% Middle touches | B2B Corporate Procurement | **PRIMARY MODEL (B2B Lead Funnels)** |

---

## SECTION 2 — Multi-Touch Journey Mapping (B2B Example)

```
[ Touchpoint 1 ] Organic Search ("corporate gifting trends pune") ──> Blog Post Read (First Click: 40%)
       │
[ Touchpoint 2 ] Retargeting Meta Ad ("Custom Branded Hampers") ──> Downloaded Catalogue (Middle: 20%)
       │
[ Touchpoint 3 ] Google Search Ad ("corporate gifts hinjewadi") ──> Submitted Quote Form (Last Click: 40%)
```

---

## SECTION 3 — Channel Grouping Customization

Configure custom channel rules in GA4:
- **Paid B2B Social:** `source / medium` matches `facebook / cpc` AND `campaign` contains `corporate`
- **Local Organic:** `page_path` contains `/city/` OR `/corporate-gifts/`
- **Direct Corporate:** Direct traffic landing on `/bulk-orders/` or `/contact/`

---

*References: 00_Analytics_Master.md, 11_BigQuery.md, 13_Funnels.md*
