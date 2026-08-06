# 13 — Accessibility & UX Audit

**Website:** https://reetfoodsngiftings.com  
**Audit Date:** August 2026  
**Standard Evaluated:** WCAG 2.1 Level AA  

---

## 13.1 Accessibility Score summary

| Metric | Score | Status |
|--------|-------|--------|
| WCAG 2.1 AA Compliance | 68/100 | Needs Improvement |
| Color Contrast Ratio | 75/100 | Fair |
| Keyboard Navigation | 60/100 | Poor (Focus states missing) |
| Screen Reader Compatibility | 55/100 | Poor (Missing ARIA labels) |
| Form Accessibility | 70/100 | Fair |
| Touch Target Sizes | 80/100 | Good |

---

## 13.2 Key WCAG Violations Identified

### 1. Missing ARIA Labels on Interactive Elements
- **Location:** Header Mobile Menu Toggle, Social Icons, Search Bar
- **Issue:** Buttons containing only SVG icons lack `aria-label` or visually hidden text.
- **Impact:** Screen readers report "unlabeled button" or read out raw SVG code.
- **WCAG Guideline:** 4.1.2 Name, Role, Value

```tsx
// ❌ Incorrect (Current)
<button onClick={toggleMenu} className="p-2">
  <MenuIcon />
</button>

// ✅ Correct (Fixed)
<button 
  onClick={toggleMenu} 
  className="p-2" 
  aria-label="Toggle Navigation Menu"
  aria-expanded={isOpen}
>
  <MenuIcon />
</button>
```

### 2. Inadequate Focus Indicators
- **Location:** Global Button & Link Focus States
- **Issue:** Default outline removed via `outline-none` without an alternative `focus-visible` ring.
- **Impact:** Keyboard-only users cannot see which element is currently focused.
- **WCAG Guideline:** 2.4.7 Focus Visible

```css
/* ✅ Fix in global CSS / Tailwind utility */
a:focus-visible, button:focus-visible, input:focus-visible {
  outline: 2px solid #D97706; /* Primary amber color */
  outline-offset: 2px;
}
```

### 3. Image Alternative Text (Alt Text) Gaps
- **Location:** Dynamic product images, decorative icons
- **Issue:** Some product cards rely on automated or blank alt attributes. Decorative SVG icons lack `aria-hidden="true"`.
- **WCAG Guideline:** 1.1.1 Non-text Content

---

## 13.3 UX & Usability Audit

| UX Factor | Observation | Recommendation |
|-----------|-------------|----------------|
| Header Navigation | Clean, sticky on desktop | Add visible focus ring on drop-down |
| Cart Drawer / Modal | Operates via React state | Add keyboard `Escape` key close handler |
| Form Error States | Native browser tooltips | Implement custom accessible inline validation |
| Tap Targets | Minimum 44x44px mostly respected | Expand mobile footer links padding |

---

## 13.4 Accessibility Remediation Checklist

- [ ] Audit all `<button>` elements for `aria-label` attributes.
- [ ] Ensure all SVG icons inside buttons have `aria-hidden="true"`.
- [ ] Add explicit `focus-visible` styles across input fields and CTA buttons.
- [ ] Verify color contrast ratio for text elements against background `#FFFFFF` and `#F9FAFB` (minimum 4.5:1 for standard text).
- [ ] Enable skip-to-content link at the top of `layout.tsx`.
