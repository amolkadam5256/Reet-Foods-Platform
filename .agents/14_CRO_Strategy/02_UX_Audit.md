# 02_UX_Audit.md

# Comprehensive UX Audit & Heuristic Evaluation — Reet Foods & Giftings

---

## SECTION 1 — Mobile & Desktop UX Audit Summary

A heuristic UX evaluation of `https://reetfoodsngiftings.com` identified key friction areas across navigation, readability, call-to-action accessibility, and checkout flow.

| UX Dimension               | Current Finding / Friction                           | Recommendation                                                                      | Priority |
| -------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- |
| **Mobile Navigation**      | Hamburger menu hides primary B2B corporate quote CTA | Add sticky header CTA "Get Bulk Quote" + floating WhatsApp icon                     | P1       |
| **Visual Hierarchy**       | Primary CTAs blend in with secondary elements        | Use high-contrast primary brand color (`#D4AF37` Gold / `#2C5E3B` Emerald) for CTAs | P1       |
| **Trust Signal Placement** | FSSAI licence and GST details hidden in deep footer  | Move FSSAI badge (No. 21525083009881) and GSTIN to product buy-box & forms          | P1       |
| **Typography & Spacing**   | Dense text paragraphs on product detail pages        | Use bullet points, bold key benefit phrases, 1.6 line-height                        | P2       |
| **Form UX**                | Forms require unnecessary upfront details            | Reduce mandatory fields to 4 (Name, Phone, Email, Quantity)                         | P1       |
| **Search & Filtering**     | Category page filters require page reloads           | Implement instant AJAX filtering by price, occasion, and hamper type                | P2       |

---

## SECTION 2 — Page-Level UX Diagnostics

### 1. Homepage (`/`)

- **Friction:** Hero banner lacks instant clarity on B2B corporate capabilities vs B2C retail.
- **Fix:** Split hero into two clear paths: `[ Explore Corporate Gifting ]` and `[ Shop Dry Fruit Hampers ]`.

### 2. City Landing Pages (`/corporate-gifts/hinjewadi/`)

- **Friction:** Text-heavy layout without quick contact options for mobile users on Maan Road / Hinjewadi IT park.
- **Fix:** Add a top banner: _"Serving Hinjewadi IT Companies | Same-Day Pune Delivery | Call +91 9890609611"_.

### 3. Product Pages (`/products/luxury-diwali-hamper/`)

- **Friction:** Bulk pricing scale (e.g. 50 units vs 500 units) not visible.
- **Fix:** Add an interactive "Bulk Quantity Tier Pricing Table" directly in the buy-box.

---

_References: 00_CRO_Master.md, 03_UI_Optimization.md, 05_Landing_Page_CRO.md_
