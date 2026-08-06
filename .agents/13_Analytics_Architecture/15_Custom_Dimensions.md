# 15_Custom_Dimensions.md
# Custom Dimensions & User Properties Library — Reet Foods & Giftings

---

## SECTION 1 — Custom Event Dimensions (20 Registry Entries)

Register the following custom event dimensions in GA4 (`Admin -> Custom definitions -> Custom dimensions`):

| Dimension Name | Parameter Name | Scope | Description / Example Values |
|----------------|----------------|-------|------------------------------|
| Lead Type | `lead_type` | Event | `corporate_bulk_quote`, `phone_click`, `whatsapp_click` |
| City Location | `city_location` | Event | `Hinjewadi_Pune`, `Mumbai`, `Delhi_NCR`, `Bangalore` |
| Industry Vertical | `industry_vertical` | Event | `Information_Technology`, `BFSI`, `Pharma`, `Manufacturing` |
| Corporate Size | `corporate_size` | Event | `50_100_emp`, `100_500_emp`, `500_1000_emp`, `1000_plus` |
| Form ID | `form_id` | Event | `corporate_quote_modal`, `contact_page_form`, `footer_newsletter` |
| Phone Number Clicked | `phone_number` | Event | `+919890609611`, `+918007518088` |
| WhatsApp Click Context | `product_context` | Event | `Luxury Royal Dry Fruit Hamper` |
| Catalogue Name | `file_name` | Event | `Reet_Foods_Corporate_Gifting_Catalogue_2025.pdf` |
| Filter Category | `filter_category` | Event | `price_range`, `gifting_occasion`, `dietary_preference` |
| Search Results Count | `number_of_results` | Event | `0`, `12`, `45` |
| Shipping Tier | `shipping_tier` | Event | `same_day_pune`, `standard_pan_india` |
| Payment Method Selected | `payment_type` | Event | `UPI`, `Razorpay`, `Corporate_PO`, `NEFT_RTGS` |
| Coupon Code Used | `coupon_code` | Event | `DIWALI2025`, `BULK10` |
| Modal ID | `modal_id` | Event | `exit_intent_discount_modal` |
| Share Method | `method` | Event | `whatsapp`, `linkedin`, `email` |
| Content Category Sub | `item_category2` | Event | `Corporate Gifts`, `Festive Hampers` |
| Clarity Session URL | `clarity_session_url` | Event | `https://clarity.microsoft.com/projects/view/...` |
| Page Region / Zone | `click_location` | Event | `header_top_bar`, `sticky_footer`, `hero_section` |
| FSSAI Trust Signal Displayed | `fssai_visible` | Event | `true`, `false` |
| Error Message Code | `error_code` | Event | `validation_failed_email`, `inventory_out_of_stock` |

---

## SECTION 2 — User Properties Library (User Scope)

| Property Name | Parameter Name | Description |
|---------------|----------------|-------------|
| User Category | `user_type` | `b2b_corporate_buyer`, `b2c_retail_buyer`, `vendor` |
| Lifetime Order Count | `user_order_count` | `0`, `1`, `2_5`, `6_plus` |
| Preferred City | `user_home_city` | `Pune`, `Mumbai`, `Delhi`, `Other` |
| Corporate Account Name | `company_name` | Name of corporate client (if provided) |

---

*References: 01_GA4_Architecture.md, 03_Event_Tracking.md, 16_Custom_Metrics.md*
