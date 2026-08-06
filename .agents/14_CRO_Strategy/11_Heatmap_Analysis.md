# 11_Heatmap_Analysis.md
# Heatmap & Scrollmap Diagnostic SOP — Reet Foods & Giftings

---

## SECTION 1 — Heatmap Review Protocol (Microsoft Clarity & Hotjar)

Review session recordings and heatmaps weekly to diagnose user friction on key landing pages.

```
       [ CLICK HEATMAPS ]                  [ SCROLLMAPS ]                     [ RECORDINGS ]
 (Identify unlinked clicks &         (Identify content drop-off        (Diagnose form errors &
  CTA click density)                  points)                           confused scrolling)
```

---

## SECTION 2 — Diagnostic SOP Matrix

| Signal | Problem Identified | Diagnostic Threshold | Required CRO Fix |
|--------|-------------------|----------------------|------------------|
| **Dead Clicks** | User clicking non-interactive elements (e.g. FSSAI badge, static images) | > 3% of total clicks | Add hover tooltip or link badge to trust validation page |
| **Rage Clicks** | User repeatedly clicking disabled submit button or slow link | > 1.5% of sessions | Add inline validation feedback, speed up server response |
| **Scroll Drop-off** | > 50% of visitors leave before reaching Product Showcase | Drop-off before 50% scroll | Move Product Showcase & Quote CTA higher above fold |
| **Form Abandonment** | User clicks into field 2 but abandons before submit | > 40% form drop-off | Remove field 2, make fields single-column, auto-focus |

---

*References: 02_UX_Audit.md, 12_AB_Testing.md, 14_Trust_Signals.md*
