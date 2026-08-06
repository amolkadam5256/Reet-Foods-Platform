# 13_Funnels.md
# Master Conversion Funnels — Reet Foods & Giftings

---

## SECTION 1 — Funnel Architecture Overview

Reet Foods tracks 5 primary conversion funnels to identify friction points and drop-offs.

---

## SECTION 2 — Funnel Blueprints

### Funnel 1: B2B Corporate Quote Request Funnel (Primary Lead Funnel)
```
Step 1: Land on Landing Page (/corporate-gifts/hinjewadi/ or /bulk-orders/)
   │  [Target Completion: 100%]
   ▼
Step 2: Click "Request Corporate Quote" CTA (`click_quote_cta`)
   │  [Target Completion: 25%]
   ▼
Step 3: Corporate Modal / Form Open (`form_start`)
   │  [Target Completion: 80%]
   ▼
Step 4: Form Field Completion & Submit (`generate_lead`)
      [Target Completion: 60% of starts -> 12% overall conversion]
```

### Funnel 2: E-commerce Direct Purchase Funnel
```
Step 1: View Product Detail Page (`view_item`) ──> 100%
Step 2: Add to Cart (`add_to_cart`) ─────────────> 15%
Step 3: Begin Checkout (`begin_checkout`) ────────> 60% of carts (9% overall)
Step 4: Complete Payment & Purchase (`purchase`) ─> 75% of checkouts (6.75% overall)
```

### Funnel 3: Local Search to Phone Call / WhatsApp Funnel
```
Step 1: Land from Google Maps / Local Organic SERP on Hinjewadi City Page ──> 100%
Step 2: Click Phone Link (`phone_call_click`) OR WhatsApp (`whatsapp_click`) ──> 18% Target
```

---

## SECTION 3 — Abandonment Recovery Protocol

| Funnel Drop-off | Diagnostic Tool | Recovery Trigger |
|-----------------|-----------------|------------------|
| Cart Abandonment (Step 2 -> Step 3) | Clarity Replays + GA4 | Abandoned Cart Email / Retargeting Ad |
| Quote Form Start Abandonment | Form Analytics in Clarity | Exit-intent popup with quick 1-click WhatsApp option |
| Checkout Shipping Drop-off | GA4 Step Funnel Report | Display "Free Delivery in Hinjewadi/Pune" badge |

---

*References: 03_Event_Tracking.md, 04_Enhanced_Ecommerce.md, 14_CRO_Analytics.md*
