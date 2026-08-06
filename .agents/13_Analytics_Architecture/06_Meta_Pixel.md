# 06_Meta_Pixel.md
# Meta Pixel Implementation Guide — Reet Foods & Giftings

---

## SECTION 1 — Meta Pixel Configuration

### Identifiers
- **Pixel ID:** `123456789012345`
- **Data Processing Options:** Standard (GDPR / Indian Data Protection Compliant)
- **Automatic Advanced Matching:** ENABLED (Email, Phone, First Name, Last Name, City, State, ZIP)

---

## SECTION 2 — Standard & Custom Meta Events

| Meta Event | Trigger Condition | Event Parameters | Event ID Format |
|------------|-------------------|------------------|-----------------|
| `PageView` | All Page Navigations | `page_location`, `page_title` | `pv_{timestamp}_{rand}` |
| `ViewContent` | Product Detail Page Load | `content_ids`, `content_name`, `content_type`, `value`, `currency` | `vc_{item_id}_{timestamp}` |
| `Lead` | Form Submission / Quote Request | `lead_type`, `content_category`, `value`, `currency` | `lead_{form_id}_{timestamp}` |
| `Contact` | Phone / WhatsApp Click | `contact_method`, `page_location` | `cnt_{method}_{timestamp}` |
| `InitiateCheckout` | Checkout Started | `content_ids`, `num_items`, `value`, `currency` | `ic_{trans_id}_{timestamp}` |
| `Purchase` | Order Success Page | `content_ids`, `content_type`, `num_items`, `value`, `currency` | `pur_{transaction_id}` |

---

## SECTION 3 — Meta Pixel Code & Event Payloads

### 1. ViewContent Event (Product Page)
```javascript
fbq('track', 'ViewContent', {
  content_ids: ['RF-DF-001'],
  content_name: 'Luxury Royal Dry Fruit Hamper',
  content_category: 'Dry Fruits',
  content_type: 'product',
  value: 1499.00,
  currency: 'INR'
}, { eventID: 'vc_RF-DF-001_1740000000' });
```

### 2. Lead Event (B2B Quote Request)
```javascript
fbq('track', 'Lead', {
  content_name: 'Corporate Bulk Quote Request',
  content_category: 'Hinjewadi_Pune_IT',
  value: 2500.00,
  currency: 'INR'
}, { eventID: 'lead_corp_1740000000' });
```

### 3. Purchase Event (Checkout Complete)
```javascript
fbq('track', 'Purchase', {
  content_ids: ['RF-DF-001'],
  content_type: 'product',
  num_items: 2,
  value: 3048.00,
  currency: 'INR'
}, { eventID: 'pur_RF-ORD-2025-8842' });
```

---

## SECTION 4 — Event Match Quality (EMQ) Optimization

To achieve a **High Event Match Quality Score (8.0+ / 10)** in Meta Events Manager:
1. Always pass hashed user data parameters (`em` for email, `ph` for phone, `fn` for first name, `ln` for last name, `ct` for city, `st` for state, `zp` for postal code).
2. Ensure both Client-Side Meta Pixel and Server-Side Meta CAPI share the EXACT same `event_id` for deduplication.

---

*References: 07_Conversion_API.md, 17_Debugging.md, 20_Developer_Implementation.md*
