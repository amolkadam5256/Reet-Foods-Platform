# 09_Form_Optimization.md
# Form Optimization & Friction Reduction SOP — Reet Foods & Giftings

---

## SECTION 1 — High-Converting Form Architecture

Forms are the single largest friction point in B2B lead generation. Reet Foods enforces a strict 4-field rule for initial quote capture.

### 1. Corporate Quote Request Form Schema
- **Field 1:** Full Name *(Text input, `autocomplete="name"`, Required)*
- **Field 2:** Corporate Email *(Email input, `autocomplete="email"`, Required - inline domain check)*
- **Field 3:** Mobile / WhatsApp Number *(Tel input, `autocomplete="tel"`, Required - prefixed `+91`)*
- **Field 4:** Estimated Quantity *(Select dropdown: `50-100 units`, `100-500 units`, `500-1000 units`, `1000+ units`)*

```
┌────────────────────────────────────────────────────────┐
│  REQUEST CORPORATE BULK QUOTE                          │
│                                                        │
│  Full Name *                                           │
│  [ Rahul Sharma                                      ] │
│                                                        │
│  Corporate Email *                                     │
│  [ rahul.sharma@company.com                           ] │
│                                                        │
│  Mobile / WhatsApp Number *                            │
│  [ +91 9890609611                                    ] │
│                                                        │
│  Estimated Quantity *                                  │
│  [ 100 - 500 units                                 ▼ ] │
│                                                        │
│  [ 💼 SUBMIT QUOTE REQUEST ]                           │
│                                                        │
│  🔒 Privacy Guaranteed | 📄 GST Invoice Provided       │
│  🌿 FSSAI Licensed: 21526079003816                     │
└────────────────────────────────────────────────────────┘
```

---

## SECTION 2 — Friction Reduction Rules

1. **Inline Validation:** Show green checkmarks (`✓`) upon valid input format; show friendly error messages (`"Please enter a valid corporate email"`) without waiting for submit.
2. **Auto-Focus First Field:** When modal opens, auto-focus cursor into "Full Name" field.
3. **No CAPTCHA Obstacles:** Use invisible Google reCAPTCHA v3 or honeypot fields instead of interactive image puzzles.

---

*References: 04_Lead_Generation.md, 08_CTA_Strategy.md, 17_Developer_Guide.md*
