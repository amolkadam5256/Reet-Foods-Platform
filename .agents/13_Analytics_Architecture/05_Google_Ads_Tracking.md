# 05_Google_Ads_Tracking.md

# Google Ads Measurement & Enhanced Conversions — Reet Foods & Giftings

---

## SECTION 1 — Google Ads Account & Conversion Action Map

### Account Configuration

- **Google Ads ID:** `AW-123456789`
- **Conversion Linker Tag:** Fired on All Pages (Priority 100)

### Conversion Actions Registry

| Action Name             | Conversion Label | Conversion Type    | Counting Method   | Value (INR)                |
| ----------------------- | ---------------- | ------------------ | ----------------- | -------------------------- |
| `B2B Quote Submission`  | `abc_123X`       | Lead (Primary)     | One per click     | Dynamic / Estimated ₹2,500 |
| `Purchase (E-commerce)` | `def_456Y`       | Purchase (Primary) | Every transaction | Dynamic (Order Total)      |
| `Phone Call Click`      | `ghi_789Z`       | Lead (Secondary)   | One per click     | Static ₹500                |
| `WhatsApp Click`        | `jkl_012A`       | Lead (Secondary)   | One per click     | Static ₹300                |

---

## SECTION 2 — Enhanced Conversions Setup

Google Ads Enhanced Conversions securely sends hashed customer data (email, phone, name, address) to improve conversion matching accuracy for logged-in Google users.

### Hashing Standard (SHA-256)

- **Email:** Standardized (lowercase, trimmed whitespace) -> SHA-256 hash
- **Phone:** Standardized (E.164 format: `+919225130732`) -> SHA-256 hash

### Enhanced Conversion Payload Structure (DataLayer)

```javascript
window.dataLayer.push({
  event: "enhance_conversion_data",
  user_data: {
    email: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", // SHA-256
    phone_number:
      "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3", // SHA-256
    address: {
      first_name: "Rahul",
      last_name: "Sharma",
      city: "Pune",
      region: "Maharashtra",
      postal_code: "411057",
      country: "IN",
    },
  },
});
```

---

## SECTION 3 — Call Tracking & Extension Integration

1. **Website Call Conversion Tag:** Triggered when a visitor clicks `tel:+919225130732` or `tel:+918007518088`.
2. **Google Forwarding Numbers (GFN):** Configured for call extensions on Google Ads search campaigns targeting Pune, Mumbai, and PAN-India.
3. **Min Call Duration Threshold:** 60 seconds set as threshold for qualified lead conversion in Google Ads interface.

---

## SECTION 4 — Dynamic Remarketing Setup

Pass product items to Google Ads for dynamic display remarketing:

```javascript
gtag("event", "page_view", {
  send_to: "AW-123456789",
  ecomm_prodid: ["RF-DF-001"],
  ecomm_pagetype: "product",
  ecomm_totalvalue: 1499.0,
});
```

---

_References: 02_GTM_Architecture.md, 04_Enhanced_Ecommerce.md, 20_Developer_Implementation.md_
