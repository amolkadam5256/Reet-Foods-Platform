# 07 — Navigation Architecture

**Website:** https://reetfoodsngiftings.com
**Date:** August 2026

---

## Navigation Architecture Overview

Navigation is the most crawled internal linking structure on any website. Google crawls navigation links on every page visit. An optimized navigation:
- Distributes PageRank to highest-priority pages
- Signals site hierarchy to search engines
- Guides users to conversion pages
- Reduces click depth for all important pages

---

## Current Navigation Audit

| Element | Current State | Issue | Impact |
|---------|--------------|-------|--------|
| Header Nav | Basic links | No mega menu, limited categories | High |
| Mobile Nav | Hamburger | Possibly JS-rendered | Medium |
| Footer | Minimal | Missing key category links | High |
| Sidebar | None | Missing on category/product pages | Medium |
| Sticky Nav | None | No sticky on scroll | Low |
| Breadcrumbs | Missing | Not implemented | High |

---

## Recommended Header Navigation Structure

### Primary Navigation (Desktop)

```
Logo | Shop ▼ | Gifting Solutions ▼ | Occasions ▼ | Bulk Orders | Blog | About | Contact | [Get a Quote CTA]
```

### Mega Menu — "Shop" Dropdown

```
SHOP
├── By Product Type
│   ├── Dry Fruits
│   │   ├── Cashews
│   │   ├── Almonds
│   │   ├── Pistachios
│   │   ├── Walnuts
│   │   └── Mixed Nuts
│   ├── Gift Boxes & Hampers
│   │   ├── Luxury Hampers
│   │   ├── Festival Gift Boxes
│   │   └── Premium Gift Baskets
│   ├── Chocolate Gifts
│   ├── Healthy Foods
│   └── Cold Pressed Juices
│
└── [Featured Product Cards — top 3 sellers]
```

### Mega Menu — "Gifting Solutions" Dropdown

```
GIFTING SOLUTIONS
├── For Corporates
│   ├── Employee Gifting Programs
│   ├── Client Gifting Solutions
│   ├── Bulk Gifting Solutions
│   └── Custom Branded Gifts
│
├── For Occasions
│   ├── Wedding Gifts
│   ├── Festival Gifts
│   └── Birthday & Anniversary
│
├── By City
│   ├── Corporate Gifting Pune
│   ├── Corporate Gifting Mumbai
│   └── Corporate Gifting Bangalore
│
└── [CTA: Get a Custom Quote →]
```

### Mega Menu — "Occasions" Dropdown

```
OCCASIONS
├── Festivals
│   ├── Diwali Gifts
│   ├── Holi Gifts
│   ├── Eid Gifts
│   ├── Christmas Gifts
│   └── Navratri Gifts
│
├── Milestones
│   ├── Wedding Gifts
│   ├── Baby Shower Gifts
│   └── Anniversary Gifts
│
└── Corporate Events
    ├── Employee Recognition
    ├── Client Appreciation
    └── Office Party Gifts
```

---

## Navigation Link Priority (What Goes Where)

### Must Be In Primary Navigation (Top-Level)
| Link | URL | Reason |
|------|-----|--------|
| Corporate Gifts | /corporate-gifts/ | Highest revenue potential |
| Dry Fruits | /dry-fruits/ | Core product |
| Gift Boxes | /gift-boxes/ | Broad commercial intent |
| Bulk Orders | /bulk-orders/ | B2B revenue |
| Blog | /blog/ | Authority building |
| Contact / Get Quote | /contact/ | Conversion |

### Must Be In Mega Menu
| Link | URL | Reason |
|------|-----|--------|
| Employee Gifting | /employee-gifting-programs/ | B2B conversion |
| Client Gifting | /client-gifting-solutions/ | B2B conversion |
| Diwali Gifts | /diwali-gifts/ | Seasonal high-traffic |
| Corporate Gifting Pune | /corporate-gifting-pune/ | Local SEO |
| Luxury Hampers | /luxury-hampers/ | Premium AOV |
| Wedding Gifts | /wedding-gifts/ | Seasonal conversion |

### Must NOT Be In Primary Navigation
| Link | Reason |
|------|--------|
| Privacy Policy | Move to footer only |
| Terms of Service | Move to footer only |
| Shipping Policy | Move to footer only |
| Return Policy | Move to footer only |

---

## Mobile Navigation Structure

### Mobile Nav (Collapsed — Hamburger)

```
☰ MENU
├── Home
├── Shop ►
│   ├── Dry Fruits
│   ├── Gift Boxes
│   ├── Chocolate Gifts
│   ├── Healthy Foods
│   └── Cold Pressed Juices
├── Corporate Gifts ►
│   ├── Employee Gifting
│   ├── Client Gifting
│   └── Bulk Orders
├── Occasions ►
│   ├── Diwali Gifts
│   ├── Holi Gifts
│   └── Wedding Gifts
├── Blog
├── About
├── Contact
└── [Get a Quote — CTA Button]
```

**Mobile Requirements:**
- Max 2 levels deep in mobile nav
- CTA button always visible (sticky bottom or at top of nav)
- Phone number visible in mobile header
- WhatsApp chat button in mobile nav

---

## Sidebar Navigation (Category & Product Pages)

### Category Page Sidebar
```
FILTER BY
├── Product Type
│   ├── ☐ Dry Fruits
│   ├── ☐ Gift Boxes
│   └── ☐ Chocolate
│
├── Occasion
│   ├── ☐ Corporate
│   ├── ☐ Diwali
│   ├── ☐ Wedding
│   └── ☐ Birthday
│
├── Price Range
│   ├── ☐ Under ₹500
│   ├── ☐ ₹500–₹1,000
│   ├── ☐ ₹1,000–₹2,500
│   └── ☐ ₹2,500+
│
└── [CTA: Need Help? Chat with Us]
```

### Related Categories (Sidebar Links)
```
YOU MIGHT ALSO LIKE
├── → Premium Cashews
├── → Luxury Hampers
├── → Corporate Gift Boxes
└── → Diwali Special Collection
```

---

## Sticky Navigation Strategy

### Desktop Sticky Nav (on scroll down)
```
[Logo] [Corporate Gifts] [Dry Fruits] [Bulk Orders] [Get a Quote CTA]
```
- Appears after scrolling 200px
- Compact design (40px height)
- Only shows top 4 commercial links + CTA
- Phone number visible

### Mobile Sticky Bottom Bar
```
[Home] [Shop] [Bulk Quote] [WhatsApp] [Account]
```
- 5 icon + label tabs
- Always visible on mobile
- WhatsApp opens chat with pre-filled message

---

## Navigation Schema Markup

### SiteNavigationElement Schema
```json
{
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "name": [
    "Corporate Gifts",
    "Dry Fruits",
    "Gift Boxes",
    "Bulk Orders",
    "Blog",
    "Contact"
  ],
  "url": [
    "https://reetfoodsngiftings.com/corporate-gifts/",
    "https://reetfoodsngiftings.com/dry-fruits/",
    "https://reetfoodsngiftings.com/gift-boxes/",
    "https://reetfoodsngiftings.com/bulk-orders/",
    "https://reetfoodsngiftings.com/blog/",
    "https://reetfoodsngiftings.com/contact/"
  ]
}
```

---

## Navigation SEO Rules

1. **Nav links must be HTML links** — not JavaScript-only (no `onclick` without `href`)
2. **Nav links must be crawlable** — use standard `<a href>` tags
3. **Important pages must be 1 click from homepage** via nav
4. **Nav must not change based on JavaScript** — server-render the nav
5. **Avoid nofollow on nav links** — these are important authority links
6. **Max 7 primary nav items** — beyond that, use mega menu
7. **Mobile nav must render on server** — not purely client-side

---

## Navigation Audit Checklist

| Check | Status |
|-------|--------|
| Corporate Gifts in primary nav | ⬜ |
| Dry Fruits in primary nav | ⬜ |
| Bulk Orders in primary nav | ⬜ |
| Mega menu for Shop | ⬜ |
| Mega menu for Corporate/Gifting | ⬜ |
| Mobile nav ≤ 2 levels | ⬜ |
| Sticky nav on scroll | ⬜ |
| Sidebar on category pages | ⬜ |
| Policy pages removed from nav | ⬜ |
| CTA button in nav | ⬜ |
| Nav links are crawlable HTML | ⬜ |
| SiteNavigationElement schema | ⬜ |
