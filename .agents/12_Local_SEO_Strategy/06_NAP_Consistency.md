# 06_NAP_Consistency.md
# NAP Consistency Guide — Reet Foods & Giftings

---

## Canonical NAP (MASTER RECORD — Do Not Deviate)

```
Business Name:  Reet Foods & Giftings
Store Address:  Shop No. F14, Ground Floor, Streets of Europe Mall,
                Maan Road near Infosys Circle, Hinjewadi Phase I,
                Pune – 411057, Maharashtra, India
Phone 1:        +91 9890609611
Phone 2:        +91 8007518088
Email:          reetfoodspune@gmail.com
Website:        https://reetfoodsngiftings.com
FSSAI:          21526079003816
GSTIN:          27FHIPK0363N1ZX
```

---

## Why NAP Consistency Matters

Google's local ranking algorithm cross-validates your business details across:
- Google Business Profile
- Website (footer, contact page, schema)
- Directories (Justdial, IndiaMART, Sulekha, etc.)
- Social profiles (Facebook, LinkedIn, Instagram)

**Any mismatch signals low trust and reduces local rankings.**

---

## Common NAP Errors to Avoid

| Error Type | Wrong | Correct |
|-----------|-------|---------|
| Abbreviated Name | Reet Foods | Reet Foods & Giftings |
| Missing Ampersand | Reet Foods and Giftings | Reet Foods & Giftings |
| Old Phone Number | +91-020-XXXXXXXX | +91 9890609611 |
| Missing PIN | Hinjewadi, Pune | Hinjewadi Phase I, Pune – 411057 |
| Wrong Email | info@reetfoodsngiftings.com | reetfoodspune@gmail.com |
| HTTP vs HTTPS | http://reetfoodsngiftings.com | https://reetfoodsngiftings.com |
| Trailing Slash | reetfoodsngiftings.com/ | https://reetfoodsngiftings.com |

---

## Audit Matrix

| Platform | Business Name | Address | Phone | Website | Email | Status |
|----------|--------------|---------|-------|---------|-------|--------|
| Google Business Profile | [ ] Match | [ ] Match | [ ] Match | [ ] Match | [ ] Match | |
| Bing Places | [ ] Match | [ ] Match | [ ] Match | [ ] Match | [ ] Match | |
| Apple Maps | [ ] Match | [ ] Match | [ ] Match | [ ] Match | [ ] Match | |
| Facebook | [ ] Match | [ ] Match | [ ] Match | [ ] Match | [ ] Match | |
| LinkedIn | [ ] Match | [ ] Match | [ ] Match | [ ] Match | [ ] Match | |
| Instagram Bio | [ ] Match | [ ] Match | [ ] Match | [ ] Match | [ ] Match | |
| Justdial | [ ] Match | [ ] Match | [ ] Match | [ ] Match | [ ] Match | |
| IndiaMART | [ ] Match | [ ] Match | [ ] Match | [ ] Match | [ ] Match | |
| Sulekha | [ ] Match | [ ] Match | [ ] Match | [ ] Match | [ ] Match | |
| Website Footer | [ ] Match | [ ] Match | [ ] Match | [ ] Match | [ ] Match | |
| Website Contact Page | [ ] Match | [ ] Match | [ ] Match | [ ] Match | [ ] Match | |
| Schema on Website | [ ] Match | [ ] Match | [ ] Match | [ ] Match | [ ] Match | |

---

## Website NAP Implementation

### Footer (all pages)
```html
<address>
  <strong>Reet Foods & Giftings</strong><br>
  Shop No. F14, Ground Floor, Streets of Europe Mall,<br>
  Maan Road near Infosys Circle, Hinjewadi Phase I,<br>
  Pune – 411057, Maharashtra, India<br>
  Phone: <a href="tel:+919890609611">+91 9890609611</a> /
         <a href="tel:+918007518088">+91 8007518088</a><br>
  Email: <a href="mailto:reetfoodspune@gmail.com">reetfoodspune@gmail.com</a>
</address>
```

### Contact Page (additional)
- Embed Google Maps of Pune store.
- Add Schema (see 07_Local_Schema.md).
- Add factory address as secondary location (do NOT use as primary).

---

## Change Management Process

When the business address, phone, or name changes:
1. Update canonical NAP in this document first.
2. Update GBP → Google Business Profile (2-4 weeks to propagate).
3. Update website footer, contact page, and schema.
4. Update all Priority 1 directories within 1 week.
5. Update Priority 2 directories within 2 weeks.
6. Log all changes with dates in the NAP Change Log below.
7. Monitor BrightLocal alerts for stale citations for 60 days.

---

## NAP Change Log

| Date | Field Changed | Old Value | New Value | Updated Platforms | Verified By |
|------|--------------|-----------|-----------|------------------|------------|
| — | — | — | — | — | — |

---

## Automated Monitoring

- **Tool:** BrightLocal Citation Tracker or Whitespark Local Citation Finder
- **Frequency:** Weekly scan
- **Alert:** Email alert if any NAP mismatch detected
- **Owner:** SEO Lead
- **Action:** Correct mismatch within 48 hours, log in Change Log above

---

*References: 05_Citation_Management.md, 07_Local_Schema.md*
