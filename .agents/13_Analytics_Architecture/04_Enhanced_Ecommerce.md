# 04_Enhanced_Ecommerce.md
# Enhanced E-commerce DataLayer Specification — Reet Foods & Giftings

---

## SECTION 1 — E-commerce Event Funnel Scope

Reet Foods & Giftings follows the official GA4 E-commerce protocol. All dataLayer objects must be pushed to `window.dataLayer` with the standard `ecommerce` object key.

```
view_item_list ──> select_item ──> view_item ──> add_to_cart ──> begin_checkout ──> add_shipping_info ──> add_payment_info ──> purchase
```

---

## SECTION 2 — Event DataLayer Payloads

### 1. Item List View (`view_item_list`)
Triggered when a user views a category, collection, or search results page.
```javascript
window.dataLayer.push({ ecommerce: null }); // Clear previous ecommerce object
window.dataLayer.push({
  event: 'view_item_list',
  ecommerce: {
    item_list_id: 'dry_fruits_hampers',
    item_list_name: 'Premium Dry Fruit Gift Hampers',
    items: [
      {
        item_id: 'RF-DF-001',
        item_name: 'Luxury Royal Dry Fruit Hamper',
        index: 1,
        item_brand: 'Reet Foods',
        item_category: 'Dry Fruits',
        item_category2: 'Corporate Gifts',
        price: 1499.00,
        quantity: 1
      },
      {
        item_id: 'RF-DF-002',
        item_name: 'Premium Roasted Cashew & Almond Box',
        index: 2,
        item_brand: 'Reet Foods',
        item_category: 'Dry Fruits',
        price: 899.00,
        quantity: 1
      }
    ]
  }
});
```

### 2. Product Detail View (`view_item`)
Triggered on loading a product detail page.
```javascript
window.dataLayer.push({ ecommerce: null });
window.dataLayer.push({
  event: 'view_item',
  ecommerce: {
    currency: 'INR',
    value: 1499.00,
    items: [
      {
        item_id: 'RF-DF-001',
        item_name: 'Luxury Royal Dry Fruit Hamper',
        item_brand: 'Reet Foods',
        item_category: 'Dry Fruits',
        price: 1499.00,
        quantity: 1
      }
    ]
  }
});
```

### 3. Add to Cart (`add_to_cart`)
Triggered when user clicks "Add to Cart".
```javascript
window.dataLayer.push({ ecommerce: null });
window.dataLayer.push({
  event: 'add_to_cart',
  ecommerce: {
    currency: 'INR',
    value: 2998.00,
    items: [
      {
        item_id: 'RF-DF-001',
        item_name: 'Luxury Royal Dry Fruit Hamper',
        item_brand: 'Reet Foods',
        item_category: 'Dry Fruits',
        price: 1499.00,
        quantity: 2
      }
    ]
  }
});
```

### 4. Begin Checkout (`begin_checkout`)
Triggered when user enters checkout.
```javascript
window.dataLayer.push({ ecommerce: null });
window.dataLayer.push({
  event: 'begin_checkout',
  ecommerce: {
    currency: 'INR',
    value: 2998.00,
    coupon: 'DIWALI2025',
    items: [
      {
        item_id: 'RF-DF-001',
        item_name: 'Luxury Royal Dry Fruit Hamper',
        item_brand: 'Reet Foods',
        item_category: 'Dry Fruits',
        price: 1499.00,
        quantity: 2
      }
    ]
  }
});
```

### 5. Purchase (`purchase`)
Triggered on order confirmation / thank-you page.
```javascript
window.dataLayer.push({ ecommerce: null });
window.dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: 'RF-ORD-2025-8842',
    value: 3048.00, // Total price including shipping & tax
    tax: 150.00,
    shipping: 50.00,
    currency: 'INR',
    coupon: 'DIWALI2025',
    items: [
      {
        item_id: 'RF-DF-001',
        item_name: 'Luxury Royal Dry Fruit Hamper',
        item_brand: 'Reet Foods',
        item_category: 'Dry Fruits',
        price: 1499.00,
        quantity: 2
      }
    ]
  }
});
```

---

## SECTION 3 — Implementation Checklist

- [ ] Ensure `window.dataLayer.push({ ecommerce: null });` precedes every e-commerce event push to clear previous object states.
- [ ] Confirm item IDs correspond exactly to store SKUs.
- [ ] Ensure prices are passed as numerical values (`1499.00`), not string formatted currency (`"₹1,499"`).

---

*References: 03_Event_Tracking.md, 05_Google_Ads_Tracking.md, 06_Meta_Pixel.md, 20_Developer_Implementation.md*
