# 03_UI_Optimization.md

# UI Design System & Component Optimization — Reet Foods & Giftings

---

## SECTION 1 — Color Psychology & Tokens

| Token Name      | Hex Code                       | Purpose / Application               | CRO Rationale                                        |
| --------------- | ------------------------------ | ----------------------------------- | ---------------------------------------------------- |
| `brand-primary` | `#2C5E3B` (Deep Emerald Green) | Primary Brand, Headers, Badges      | Connotes freshness, organic quality, premium nature  |
| `brand-accent`  | `#D4AF37` (Royal Gold)         | Primary CTA Buttons, Key Badges     | Connotes luxury, high-end gifting, festival elegance |
| `cta-whatsapp`  | `#25D366` (WhatsApp Green)     | WhatsApp Floating & In-line Buttons | Universal recognition for instant messaging CTA      |
| `trust-blue`    | `#1A56DB` (Verification Blue)  | GST & FSSAI Badges, Guarantee Icons | Signals security, compliance, government licensing   |
| `text-primary`  | `#1F2937` (Dark Charcoal)      | Body Copy, Headings                 | Maximum contrast ratio (WCAG AAA compliant)          |
| `bg-light`      | `#F9FAFB` (Off-White)          | Section Backgrounds, Card Contours  | Clean visual separation, reduces cognitive load      |

---

## SECTION 2 — High-Converting UI Components

### 1. Sticky Mobile Bottom CTA Bar (`StickyBottomBar.tsx`)

Displayed on mobile viewports for instant lead capture:

```
[ 💬 WhatsApp Quote ]  [ 📞 Call Store (+91 9890609611) ]
```

### 2. Trust Pill Badges (Under Product Titles)

```
[ 🌿 FSSAI Certified: 21525083009881 ]  [ 📄 GST Invoice Provided ]  [ 🚚 Same-Day Pune Delivery ]
```

### 3. Interactive Bulk Pricing Tier Card (Product Buy-Box)

```
┌────────────────────────────────────────────────────────┐
│  BULK CORPORATE QUANTITY DISCOUNTS                    │
│  • 50 – 100 units   : ₹1,499 / box (Save 10%)         │
│  • 101 – 500 units  : ₹1,299 / box (Save 20%)         │
│  • 500+ units       : ₹1,099 / box (Custom Branding)   │
└────────────────────────────────────────────────────────┘
```

---

_References: 02_UX_Audit.md, 08_CTA_Strategy.md, 17_Developer_Guide.md_
