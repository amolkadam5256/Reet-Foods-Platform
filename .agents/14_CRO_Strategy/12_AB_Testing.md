# 12_AB_Testing.md

# A/B Testing Strategy & Experiment Roadmap — Reet Foods & Giftings

---

## SECTION 1 — Experiment Methodology & Significance Standards

- **Minimum Confidence Level:** 95% ($p < 0.05$).
- **Minimum Test Duration:** 14 full days (accounting for day-of-week variation).
- **Minimum Sample Size:** 5,000 visitors per variation.

---

## SECTION 2 — 10 High-Impact A/B Test Specifications

| Test ID    | Page / Target   | Variation A (Control)                 | Variation B (Challenger)                                        | Primary Metric            | Hypothesis                                      |
| ---------- | --------------- | ------------------------------------- | --------------------------------------------------------------- | ------------------------- | ----------------------------------------------- | ----------------------------------------- |
| **EXP-01** | B2B Hero CTA    | `Request Corporate Quote`             | `Get Custom Bulk Pricing (Min 50 Units)`                        | Quote Form Submit %       | Specificity increases B2B intent clicks         |
| **EXP-02** | Product Buy-Box | Standard Add to Cart                  | Add Bulk Pricing Tier Table in Buy-Box                          | Add to Cart / Quote %     | Displaying savings up front drives bulk leads   |
| **EXP-03** | Mobile Bar      | Single "Call Us" CTA                  | Split Sticky Bar: `[ 💬 WhatsApp Quote ]` `[ 📞 Call ]`         | Lead Conversions          | WhatsApp matches Indian mobile behavior better  |
| **EXP-04** | Form Length     | 6 Fields (inc. Company Name & Budget) | 4 Fields (Name, Corporate Email, Phone, Quantity)               | Form Completion %         | Reducing fields increases submit rate by 20%+   |
| **EXP-05** | City Page Hero  | Standard Headline                     | Hinjewadi Proximity: _"Store near Infosys Circle, Hinjewadi"_   | Page Conversion %         | Hyper-local trust increases conversions         |
| **EXP-06** | Trust Badges    | Footer Trust Icons                    | Trust Pills Under H1: \*"FSSAI Certified: 21525083009881        | GST Billing"\*            | Bounce Rate                                     | Immediate compliance proof reduces bounce |
| **EXP-07** | Exit Popup      | Generic "Sign Up for Updates"         | Exit Modal: _"Need 50+ Boxes? Get Free Custom Logo Branding"_   | Lead Capture %            | Relevant B2B offer captures exit traffic        |
| **EXP-08** | Product Gallery | Static Product Images Only            | Product Images + 30s Unboxing Video                             | Time on Page / Orders     | Video builds tangible packaging trust           |
| **EXP-09** | Cart Drawer     | Plain Checkout Button                 | Free Delivery Progress Bar: _"Add ₹500 for Free Pune Delivery"_ | AOV (Average Order Value) | Gamifying free shipping threshold increases AOV |
| **EXP-10** | Pricing Copy    | `₹1,499 per box`                      | `₹1,499 per box (GST Invoice Included)`                         | Buy Button Click %        | Upfront GST mention eliminates tax concern      |

---

_References: 05_Landing_Page_CRO.md, 08_CTA_Strategy.md, 19_KPI_Dashboard.md_
