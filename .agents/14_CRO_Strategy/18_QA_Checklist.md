# 18_QA_Checklist.md

# CRO & UX Verification QA Checklist — Reet Foods & Giftings

---

## SECTION 1 — Mobile & Responsive UX Verification

- [ ] Sticky bottom CTA bar renders on mobile devices (`< 768px`) with `[ 💬 WhatsApp Quote ]` and `[ 📞 Call Store ]`.
- [ ] Mobile sticky bar hides automatically when user scrolls to bottom footer.
- [ ] Touch targets for all buttons, form fields, and dropdowns have minimum 48px height.
- [ ] No horizontal scrolling or container overflow on 320px, 375px, or 414px viewports.

---

## SECTION 2 — Forms & Lead Capture Verification

- [ ] Corporate quote request form limited to 4 mandatory fields.
- [ ] Form inline validation triggers green checkmark (`✓`) on valid corporate email format.
- [ ] Submitting form triggers dataLayer event `generate_lead` with correct parameters (`city_location`, `lead_type`, `user_data`).
- [ ] Form submit confirmation message displays Hinjewadi store response timeline ("Within 15 minutes").

---

## SECTION 3 — CTAs, Trust Signals & Copy Verification

- [ ] FSSAI licence number `21525083009881` displayed near product buy-boxes and quote forms.
- [ ] GST invoice availability explicitly stated on all B2B quote components.
- [ ] Phone click on `tel:+919225130732` triggers custom `phone_call_click` event.
- [ ] WhatsApp click opens WhatsApp app/web with pre-filled context string.

---

## SECTION 4 — Analytics & CRO Integration Verification

- [ ] Microsoft Clarity project capturing heatmaps and session replays.
- [ ] GA4 DebugView verifying `generate_lead`, `whatsapp_click`, `phone_call_click`.
- [ ] A/B test experiments (EXP-01 through EXP-10) assigned with 50/50 traffic split.

---

_Sign-off required by Lead UX Researcher and Lead Developer prior to release._
