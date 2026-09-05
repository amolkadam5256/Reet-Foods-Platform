# 03_Event_Tracking.md

# Master Event Tracking Matrix — Reet Foods & Giftings

---

## SECTION 1 — Comprehensive Event Matrix

This matrix details all custom and standard events tracked across the Reet Foods platform.

| Event Name            | Category   | Trigger / Condition               | Parameters Passed                                                 | Key Event? | Priority |
| --------------------- | ---------- | --------------------------------- | ----------------------------------------------------------------- | ---------- | -------- |
| `page_view`           | System     | Page Navigation                   | `page_location`, `page_title`, `page_referrer`                    | No         | P1       |
| `generate_lead`       | Lead       | Form Submission (Contact / Quote) | `lead_type`, `city_location`, `corporate_size`, `form_id`         | **YES**    | P1       |
| `phone_call_click`    | Lead       | Click `tel:+919225130732`         | `phone_number`, `click_location`, `page_url`                      | **YES**    | P1       |
| `whatsapp_click`      | Lead       | Click WhatsApp Button             | `whatsapp_number`, `click_location`, `product_context`            | **YES**    | P1       |
| `catalogue_download`  | Micro Lead | Download Catalogue PDF            | `file_name`, `file_extension`, `page_url`                         | **YES**    | P2       |
| `view_item`           | E-commerce | View Product Details Page         | `currency`, `value`, `items` (array)                              | No         | P1       |
| `view_item_list`      | E-commerce | View Category / Collection Page   | `item_list_id`, `item_list_name`, `items`                         | No         | P2       |
| `select_item`         | E-commerce | Click Product Card in List        | `item_list_id`, `item_list_name`, `items`                         | No         | P2       |
| `add_to_cart`         | E-commerce | Click "Add to Cart" Button        | `currency`, `value`, `items`                                      | **YES**    | P1       |
| `remove_from_cart`    | E-commerce | Remove Item from Cart Drawer      | `currency`, `value`, `items`                                      | No         | P3       |
| `begin_checkout`      | E-commerce | Click "Proceed to Checkout"       | `currency`, `value`, `coupon`, `items`                            | **YES**    | P1       |
| `add_shipping_info`   | E-commerce | Enter Shipping Address            | `currency`, `value`, `shipping_tier`                              | No         | P2       |
| `add_payment_info`    | E-commerce | Select Payment Method             | `currency`, `value`, `payment_type`                               | No         | P2       |
| `purchase`            | E-commerce | Transaction Success Page          | `transaction_id`, `value`, `tax`, `shipping`, `currency`, `items` | **YES**    | P1       |
| `search`              | Engagement | Perform Site Search               | `search_term`, `number_of_results`                                | No         | P2       |
| `filter_usage`        | Engagement | Apply Product Filter              | `filter_category`, `filter_value`, `page_url`                     | No         | P3       |
| `scroll`              | Engagement | 90% Vertical Scroll               | `percent_scrolled`, `page_location`                               | No         | P3       |
| `exit_intent_trigger` | CRO        | Exit Intent Modal Displayed       | `modal_id`, `page_url`                                            | No         | P3       |
| `copy_coupon`         | Engagement | Click "Copy Coupon Code"          | `coupon_code`, `discount_percent`                                 | No         | P3       |
| `share`               | Social     | Click Social Share Button         | `method`, `content_type`, `item_id`                               | No         | P3       |

---

## SECTION 2 — Lead Generation DataLayer Specifications

### 1. B2B Corporate Quote Request Form (`generate_lead`)

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "generate_lead",
  lead_type: "corporate_bulk_quote",
  city_location: "Hinjewadi_Pune",
  corporate_size: "500_1000_employees",
  industry_vertical: "Information_Technology",
  estimated_unit_quantity: 250,
  form_id: "corporate_quote_modal",
  user_data: {
    email: "sha256_hashed_email@domain.com",
    phone: "sha256_hashed_phone",
  },
});
```

### 2. Phone Call Link Click (`phone_call_click`)

```javascript
window.dataLayer.push({
  event: "phone_call_click",
  phone_number: "+919225130732",
  click_location: "header_top_bar",
  page_url: window.location.href,
});
```

### 3. WhatsApp Button Click (`whatsapp_click`)

```javascript
window.dataLayer.push({
  event: "whatsapp_click",
  whatsapp_number: "+919225130732",
  click_location: "product_page_floating_cta",
  product_context: "Luxury Diwali Hamper Box",
});
```

### 4. Corporate Catalogue Download (`catalogue_download`)

```javascript
window.dataLayer.push({
  event: "catalogue_download",
  file_name: "Reet_Foods_Corporate_Gifting_Catalogue_2025.pdf",
  file_extension: "pdf",
  page_url: window.location.href,
});
```

---

## SECTION 3 — Implementation Guidance

- All events must be triggered asynchronously without blocking UI interactions.
- User personal identifiable information (PII) passed in `user_data` must be hashed using SHA-256 before pushing to dataLayer for Meta CAPI and Google Ads Enhanced Conversions.

---

_References: 00_Analytics_Master.md, 04_Enhanced_Ecommerce.md, 20_Developer_Implementation.md_
