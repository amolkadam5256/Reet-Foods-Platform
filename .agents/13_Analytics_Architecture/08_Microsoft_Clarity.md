# 08_Microsoft_Clarity.md
# Microsoft Clarity UX & Heatmap Strategy — Reet Foods & Giftings

---

## SECTION 1 — Microsoft Clarity Configuration

### Setup Details
- **Project Name:** Reet Foods & Giftings - Production
- **Project ID:** `clarity_project_id_123`
- **GA4 Integration:** Connected (Clarity session playback link sent directly into GA4 custom dimension `clarity_session_url`)
- **Masking Level:** Balanced (Sensitive input fields like credit cards, passwords, phone numbers masked; text content visible)

---

## SECTION 2 — Friction & Frustration Signal Tracking

Microsoft Clarity automatically flags UX friction metrics. The team must review these weekly:

| Metric | Definition | Threshold | Diagnostic Action |
|--------|------------|-----------|-------------------|
| **Dead Clicks** | User clicks an element but receives no response/action | > 5% of sessions | Check unlinked buttons, static images looking like CTAs |
| **Rage Clicks** | User rapidly clicks the exact same area 3+ times | > 2% of sessions | Fix broken forms, slow response scripts, disabled buttons |
| **Quick Backs** | User navigates to a page and immediately returns to previous page | > 10% of sessions | Improve page relevance, title alignment, load speed |
| **Excessive Scrolling** | User scrolls up and down rapidly looking for information | > 15% of sessions | Improve layout hierarchy, sticky CTAs, table of contents |
| **JS Errors** | JavaScript exception thrown during user session | 0 Tolerance | Developer bug fix priority |

---

## SECTION 3 — Custom Tagging & User Segmentation

Pass custom tags to Clarity for deep segment filtering:

```javascript
window.clarity("set", "lead_type", "corporate_bulk");
window.clarity("set", "user_city", "Pune_Hinjewadi");
window.clarity("set", "cart_value_tier", "high_value_above_5000");
```

### Key Custom Filters for Session Replay Review
1. **Corporate Quote Form Abandoners:** Sessions that started the Hinjewadi corporate form but did not submit.
2. **Checkout Drop-offs:** Sessions that added products to cart but abandoned at shipping/payment.
3. **High-Value B2B Converts:** Sessions that completed a corporate quote or clicked WhatsApp.

---

*References: 00_Analytics_Master.md, 14_CRO_Analytics.md, 19_KPI_Dashboard.md*
