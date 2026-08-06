# 04_Lead_Generation.md
# B2B Lead Generation Architecture — Reet Foods & Giftings

---

## SECTION 1 — Lead Capture Channels & Inflow Architecture

```
                                [ TRAFFIC INFLOW ]
                                         │
        ┌───────────────────┬────────────┴───────┬───────────────────┐
        ▼                   ▼                    ▼                   ▼
 [ B2B Quote Form ]   [ Phone Leads ]   [ WhatsApp Leads ]   [ Catalogue Download ]
 (Modal / Page)    (+91 9890609611)      (+91 9890609611)         (PDF Lead Gate)
        │                   │                    │                   │
        └───────────────────┴────────────┬───────┴───────────────────┘
                                         ▼
                             [ LEAD QUALIFICATION ]
                      (Quantity, Budget, Date, City, GST)
                                         │
                                         ▼
                            [ CRM / SALES DISPATCH ]
```

---

## SECTION 2 — Lead Generation Touchpoint Specifications

### 1. Corporate Quote Request Form (Primary B2B Capture)
- **Placement:** Sticky trigger button on all B2B pages, Hinjewadi city page, and `/bulk-orders/`.
- **Form Fields (4 Required):**
  1. Full Name
  2. Corporate Email Address (`company@domain.com`)
  3. Phone / WhatsApp Number (`+91 9890609611`)
  4. Estimated Quantity (Dropdown: 50–100, 100–500, 500–1000, 1000+)
- **Micro-copy Under Submit:** *"📄 GST Invoice Provided | 🌿 FSSAI Licensed: 21526079003816 | 🚚 Same-Day Delivery in Pune"*.

### 2. Click-to-Call Phone Lead Generation
- **Target Number:** `+91 9890609611` / `+91 8007518088`.
- **Placement:** Header top bar, contact page, mobile sticky bottom bar.
- **Conversion Trigger:** Click on `tel:+919890609611` link.

### 3. Corporate Gifting Catalogue PDF Gate
- **Asset:** *Reet Foods Corporate Gifting Catalogue 2025 (PDF)*.
- **Form Fields:** Name + Corporate Email + Company Name.
- **Auto-fulfillment:** Instant PDF view on thank-you page + emailed link.

---

*References: 00_CRO_Master.md, 09_Form_Optimization.md, 10_WhatsApp_Funnel.md*
