# 04 — Hub & Spoke Model

**Website:** https://reetfoodsngiftings.com
**Date:** August 2026

---

## Hub & Spoke Architecture Overview

The Hub & Spoke model organizes content so that:
- **Hub pages** are comprehensive, authoritative pages on broad topics
- **Spoke pages** are focused pages on specific subtopics that support the hub
- **Bidirectional linking** ensures authority flows both ways
- **No orphan pages** — every spoke connects to a hub

---

## Hub & Spoke Blueprint 1 — Corporate Gifting

```
HOMEPAGE
    │
    ▼
CORPORATE GIFTS HUB (/corporate-gifts/)
    │
    ├─── Employee Gifting Programs (/employee-gifting-programs/)
    │         ├── Onboarding Gifts [product]
    │         ├── Anniversary Gifts [product]
    │         └── Recognition Gifts [product]
    │
    ├─── Client Gifting Solutions (/client-gifting-solutions/)
    │         ├── Premium Client Hampers [product]
    │         ├── Luxury Client Boxes [product]
    │         └── Festival Client Gifts [product]
    │
    ├─── Bulk Gifting Solutions (/bulk-gifting-solutions/)
    │         ├── Bulk Cashew Orders [product]
    │         ├── Bulk Hamper Orders [product]
    │         └── Wholesale Gift Boxes [product]
    │
    ├─── Diwali Corporate Gifts (/diwali-corporate-gifts/)
    │         ├── Diwali Dry Fruit Box [product]
    │         └── Diwali Corporate Hamper [product]
    │
    ├─── Corporate Gifting Pune (/corporate-gifting-pune/)
    ├─── Corporate Gifting Mumbai (/corporate-gifting-mumbai/)
    └─── Corporate Gifting Bangalore (/corporate-gifting-bangalore/)

SUPPORTING SPOKES (Blog):
    ├── /blog/best-corporate-gifts-india/ → Hub
    ├── /blog/employee-gifting-trends/ → Hub + Employee Spoke
    └── /blog/how-to-choose-corporate-gifts/ → Hub

SUPPORTING SPOKES (FAQ):
    └── /faq/corporate-gifting/ → Hub + CTA
```

**Linking Rules:**
- Hub links OUT to: All spokes (8–12 links)
- Hub links UP to: Homepage
- Each spoke links UP to: Hub (via breadcrumb + contextual link)
- Each spoke links to: 2–3 sibling spokes
- Each blog spoke links to: Hub + 3 product spokes

---

## Hub & Spoke Blueprint 2 — Dry Fruits

```
HOMEPAGE
    │
    ▼
DRY FRUITS HUB (/dry-fruits/)
    │
    ├─── Premium Cashews (/dry-fruits/cashews/)
    │         ├── Cashew Gift Box [product]
    │         ├── Bulk Cashew [product]
    │         └── Diwali Cashew Box [product]
    │
    ├─── Almonds (/dry-fruits/almonds/)
    │         ├── Almond Hamper [product]
    │         └── Almond Gift Box [product]
    │
    ├─── Pistachios (/dry-fruits/pistachios/)
    │         └── Pistachio Gift Pack [product]
    │
    ├─── Walnuts (/dry-fruits/walnuts/)
    │         └── Walnut Gift Box [product]
    │
    └─── Mixed Nuts (/dry-fruits/mixed-nuts/)
              ├── Mixed Nut Corporate Box [product]
              └── Mixed Nut Gift Pack [product]

SUPPORTING SPOKES (Blog):
    ├── /blog/dry-fruits-health-benefits/ → Hub
    ├── /blog/best-dry-fruits-for-gifting/ → Hub
    └── /blog/premium-dry-fruits-guide/ → Hub

CROSS-LINKS:
    ├── Hub → /corporate-gifts/ (dry fruits for corporate)
    ├── Hub → /gift-boxes/ (dry fruit gift boxes)
    └── Hub → /healthy-foods/ (nutritional angle)
```

---

## Hub & Spoke Blueprint 3 — Gift Boxes

```
HOMEPAGE
    │
    ▼
GIFT BOXES HUB (/gift-boxes/)
    │
    ├─── Luxury Hampers (/luxury-hampers/)
    │         ├── Royal Dry Fruit Hamper [product]
    │         ├── Luxury Chocolate Hamper [product]
    │         └── Premium Corporate Hamper [product]
    │
    ├─── Festival Gift Boxes → /festive-gifts/
    ├─── Wedding Gift Boxes → /wedding-gifts/
    └─── Corporate Gift Boxes → /corporate-gifts/

SPOKES (by recipient):
    ├── Gifts for Employees → /employee-gifting-programs/
    ├── Gifts for Clients → /client-gifting-solutions/
    └── Gifts for Family [collection]

SUPPORTING SPOKES:
    ├── /blog/gift-hamper-ideas/
    └── /faq/gift-boxes/
```

---

## Hub & Spoke Blueprint 4 — Festive Gifts

```
HOMEPAGE
    │
    ▼
FESTIVE GIFTS HUB (/festive-gifts/)
    │
    ├─── Diwali Gifts (/diwali-gifts/)
    │         ├── Diwali Dry Fruit Box [product]
    │         ├── Diwali Corporate Gift Hamper [product]
    │         └── Diwali Luxury Box [product]
    │
    ├─── Holi Gifts (/holi-gifts/)
    │         └── Holi Gift Pack [product]
    │
    ├─── Eid Gifts (/eid-gifts/)
    │         └── Eid Gift Hamper [product]
    │
    ├─── Christmas Gifts (/christmas-gifts/)
    │         └── Christmas Gift Box [product]
    │
    └─── Navratri Gifts (/navratri-gifts/)
              └── Navratri Gift Pack [product]

SUPPORTING SPOKES:
    ├── /blog/diwali-gift-ideas/ → Festive Hub + Diwali Spoke
    ├── /blog/best-diwali-corporate-gifts/ → Diwali Spoke
    └── /resources/festival-gift-calendar/ → Hub

CROSS-LINKS:
    └── Festive Hub ↔ Corporate Gifts Hub (festival corporate angle)
```

---

## Hub & Spoke Blueprint 5 — Bulk Orders

```
HOMEPAGE
    │
    ▼
BULK ORDERS HUB (/bulk-orders/)
    │
    ├─── Bulk Dry Fruits (/bulk-orders/dry-fruits/)
    │         ├── Bulk Cashew [product]
    │         ├── Bulk Almonds [product]
    │         └── Bulk Mixed Nuts [product]
    │
    ├─── Bulk Gift Boxes (/bulk-orders/gift-boxes/)
    │         ├── Bulk Hamper Orders [product]
    │         └── Wholesale Gift Boxes [product]
    │
    └─── Corporate Bulk Gifting (/bulk-orders/corporate/)
              └── → /corporate-gifts/ (cross-link)

SUPPORTING SPOKES:
    ├── /blog/bulk-gifting-guide-corporates/
    ├── /blog/how-to-order-bulk-gifts/
    └── /faq/bulk-orders/

CTA SPOKE:
    └── /contact/#bulk-quote (every page links to this)
```

---

## Hub & Spoke Blueprint 6 — Healthy Foods

```
HOMEPAGE
    │
    ▼
HEALTHY FOODS HUB (/healthy-foods/)
    │
    ├─── Organic Dry Fruits (/healthy-foods/organic/)
    │         └── Organic Dry Fruit Hamper [product]
    │
    ├─── Superfoods (/healthy-foods/superfoods/)
    │         └── Superfood Gift Box [product]
    │
    └─── Cold Pressed Juices (/cold-pressed-juices/)
              ├── Cold Pressed Juice Pack [product]
              ├── Detox Juice Bundle [product]
              ├── Fruit Juice Pack [product]
              └── Vegetable Juice Pack [product]

SUPPORTING SPOKES:
    ├── /blog/healthy-gift-ideas/
    ├── /blog/benefits-of-gifting-dry-fruits/
    └── /blog/benefits-cold-pressed-juices/
```

---

## Hub & Spoke Blueprint 7 — Luxury Hampers

```
HOMEPAGE
    │
    ▼
LUXURY HAMPERS HUB (/luxury-hampers/)
    │
    ├─── Corporate Luxury Hampers (/luxury-hampers/corporate/)
    │         └── → /corporate-gifts/ cross-link
    │
    ├─── Wedding Luxury Hampers (/luxury-hampers/wedding/)
    │         └── → /wedding-gifts/ cross-link
    │
    └─── Festive Luxury Hampers (/luxury-hampers/festive/)
              └── → /festive-gifts/ cross-link

SUPPORTING SPOKES:
    ├── /blog/luxury-gifting-guide/
    └── /blog/premium-gift-ideas-executives/
```

---

## Hub & Spoke Blueprint 8 — Wedding Gifts

```
HOMEPAGE
    │
    ▼
WEDDING GIFTS HUB (/wedding-gifts/)
    │
    ├─── Wedding Dry Fruit Hampers (/wedding-gifts/dry-fruits/)
    │         ├── Wedding Dry Fruit Hamper [product]
    │         └── Royal Wedding Box [product]
    │
    ├─── Wedding Gift Boxes (/wedding-gifts/gift-boxes/)
    │         └── Shaadi Gift Box [product]
    │
    └─── Wedding Favors (/wedding-gifts/favors/)
              └── Wedding Favor Pack [product]

SUPPORTING SPOKES:
    ├── /blog/wedding-gift-ideas-india/
    └── /blog/dry-fruits-for-wedding/
```

---

## Hub & Spoke Blueprint 9 — Employee Gifts

```
HOMEPAGE
    │
    ▼
EMPLOYEE GIFTS HUB (/employee-gifting-programs/)
    │
    ├─── Onboarding Gifts [collection]
    ├─── Anniversary Gifts [collection]
    ├─── Performance Recognition Gifts [collection]
    └─── Festival Gifts for Employees → /festive-gifts/ cross-link

SUPPORTING SPOKES:
    └── /blog/employee-gifting-trends/
```

---

## Hub & Spoke Blueprint 10 — Client Gifts

```
HOMEPAGE
    │
    ▼
CLIENT GIFTS HUB (/client-gifting-solutions/)
    │
    ├─── New Client Onboarding Gifts [collection]
    ├─── Client Appreciation Gifts [collection]
    ├─── Festival Client Gifts → /festive-gifts/ cross-link
    └─── Luxury Client Hampers → /luxury-hampers/ cross-link

SUPPORTING SPOKES:
    └── Blog articles on client relationships
```

---

## Bidirectional Link Requirements

For every Hub ↔ Spoke relationship:

| Direction | Link Type | Anchor Text Example |
|-----------|-----------|---------------------|
| Hub → Spoke | Section link in hub body | "See our Employee Gifting Programs" |
| Spoke → Hub | Breadcrumb | Home > Corporate Gifts > Employee Gifting |
| Spoke → Hub | Contextual | "...part of our comprehensive Corporate Gifting Solutions" |
| Spoke → Sibling Spoke | Contextual | "You might also be interested in Client Gifting" |
| Blog → Hub | Contextual | "...learn more in our Corporate Gifting Guide" |
| Blog → Product | CTA | "Shop [Product Name]" |
