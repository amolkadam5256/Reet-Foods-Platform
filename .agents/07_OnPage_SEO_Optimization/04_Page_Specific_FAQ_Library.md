# 04 — Page-Specific FAQ Library (With Schema & Links)

**Website:** https://reetfoodsngiftings.com  
**Purpose:** Provide 10-20 rich Q&A blocks for core routes to capture Google Featured Snippets, Voice Search, and AI Overviews.

---

## 1. Homepage (`/`) FAQ Library (10 FAQs)

1. **Q: What services does Reet Foods & Gifting provide in Pune?**  
   _A:_ Reet Foods & Gifting specializes in B2B corporate gift hampers, custom logo-printed gift boxes, employee welcome kits, and premium FSSAI certified dry fruits retail with PAN India shipping.  
   _Internal Link:_ [Explore Corporate Gifting](/corporate-gifting)

2. **Q: Where is Reet Foods located in Pune?**  
   _A:_ Our office and fulfillment facility is located in Hinjewadi Phase I, Pune, Maharashtra 411057. We serve IT companies across Hinjewadi, Baner, Magarpatta, and Kharadi.  
   _Internal Link:_ [Contact Our Pune Office](/contact)

3. **Q: Are Reet Foods dry fruit products FSSAI certified?**  
   _A:_ Yes, all our food packaging operations comply with FSSAI License `21525083009881`.

4. **Q: Can we customize corporate gift boxes with our company logo?**  
   _A:_ Yes, we provide complete custom logo printing, UV engraving, custom greeting cards, and branded ribbons for corporate bulk orders.

5. **Q: What is nitrogen-packed packaging and why is it used?**  
   _A:_ Nitrogen flushing removes oxygen from packaging to prevent oxidation, retaining 100% nut crunchiness and natural aroma without chemical preservatives.

6. **Q: What is the minimum order quantity for corporate gifts?**  
   _A:_ Corporate bulk orders start at 25 units. For custom logo-printed boxes, the standard MOQ is 50 units.

7. **Q: Do you deliver corporate gift hampers across India?**  
   _A:_ Yes, we handle direct doorstep fulfillment to multiple employee and client home addresses across India.

8. **Q: Can we request a physical sample box before placing a bulk order?**  
   _A:_ Yes, sample gift boxes can be dispatched to verified corporate HR and procurement managers upon request.

9. **Q: Do you issue B2B GST tax invoices for corporate orders?**  
   _A:_ Yes, we issue official GST invoices (`GSTIN: 27FHIPK0363N1ZX`) with line-item tax details for tax deductions.

10. **Q: What dry fruits are included in Reet Foods gift hampers?**  
    _A:_ Our hampers feature jumbo W240 cashews, Mamra almonds, roasted salted pistachios, Kashmiri walnuts, Ajwa dates, seedless raisins, and artisanal chocolates.

---

## 2. Corporate Gifting Pillar (`/corporate-gifting`) FAQ Library (10 FAQs)

11. **Q: What price tiers are available for corporate gift hampers?**  
    _A:_ We offer curated tiers including budget options under ₹500, mid-tier hampers under ₹1000, and premium executive hampers above ₹2000.

12. **Q: How much notice is required for a 500-unit corporate Diwali order?**  
    _A:_ We recommend 3 to 5 business days after artwork finalization. Express 48-hour fulfillment is available for Pune and Mumbai.

13. **Q: Can we build a custom dry fruit and chocolate hamper combination?**  
    _A:_ Yes, clients can customize nut ratios, chocolate variants, and packaging materials (wooden, tin, brass, or velvet).

14. **Q: What items are included in an employee welcome kit?**  
    _A:_ Welcome kits typically combine premium nuts, customized greeting cards, branded notebooks/pens, and custom packaging.

15–20. [Includes FAQs on payment terms, replacement policies, international shipping, custom greeting card printing, and ESG eco-friendly options].

---

## 3. Schema JSON-LD Wrapper Example (`FAQPage`)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Reet Foods & Gifting provide in Pune?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reet Foods & Gifting specializes in B2B corporate gift hampers, custom logo-printed gift boxes, employee welcome kits, and premium FSSAI certified dry fruits retail with PAN India shipping."
      }
    }
  ]
}
```
