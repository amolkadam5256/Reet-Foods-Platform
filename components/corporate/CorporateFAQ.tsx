import { SectionHeading } from "@/components/common/SectionHeading";
import { FAQList } from "@/components/common/FAQList";

const faqs = [
  {
    question:
      "What is the minimum order quantity for custom corporate logo printing?",
    answer:
      "Custom logo printing on corporate gift boxes starts at just 25 units. We provide complimentary digital visual mock-ups before production for all our Pune and PAN India clients.",
  },
  {
    question:
      "How do you handle multi-location employee and client shipping?",
    answer:
      "Simply provide an Excel sheet of recipient addresses. We manage individual door-to-door courier dispatch of corporate gifts across 19,000+ pin codes in India with tracking updates.",
  },
  {
    question:
      "Can we get sample corporate gift boxes before finalizing a bulk order?",
    answer:
      "Yes, sample dry fruit gift boxes and luxury hampers can be dispatched to your Pune office or corporate location within 24 hours for evaluation.",
  },
  {
    question:
      "What types of premium dry fruits are included in corporate hampers?",
    answer:
      "Our corporate hampers feature premium graded almonds, cashews, pistachios, walnuts, raisins, and exotic dried fruits, ensuring top-tier quality for your executive gifts.",
  },
  {
    question: "Do you offer custom foil stamping on corporate gift boxes?",
    answer:
      "Yes, we specialize in luxury corporate gifting with custom gold and silver foil stamping of your company logo on premium magnetic hardtop boxes.",
  },
  {
    question:
      "Are your corporate gift hampers suitable for Diwali gifting?",
    answer:
      "Absolutely. We are Pune's leading provider of customized Diwali gifts for corporates, offering themed hampers packed with premium dry fruits, chocolates, and diyas.",
  },
  {
    question:
      "Do you provide employee joining kits or onboarding gifts?",
    answer:
      "Yes, we curate bespoke employee joining kits containing branded merchandise, premium dry fruits, coffee, and welcome notes for IT and tech firms.",
  },
  {
    question:
      "Is GST invoicing provided for bulk B2B gifting orders?",
    answer:
      "Yes, we provide 100% GST-compliant invoicing for all B2B corporate gifting orders, allowing your business to claim full input tax credit.",
  },
  {
    question:
      "What is the shelf life of the dry fruits in your corporate gifts?",
    answer:
      "Our premium dry fruits are nitrogen-packed for freshness and have a shelf life of 6 to 12 months, making them perfect for corporate distribution.",
  },
  {
    question:
      "Can you include a personalized CEO message in the gift boxes?",
    answer:
      "Yes, we can include customized, full-color printed greeting cards signed by your CEO or leadership team in every corporate gift box.",
  },
  {
    question: "Do you offer eco-friendly corporate gifting solutions?",
    answer:
      "Yes, we provide sustainable corporate gifting options including reusable wooden chests, recyclable cardboard sleeves, and eco-friendly packaging materials.",
  },
  {
    question:
      "How long does it take to process a bulk corporate gift order?",
    answer:
      "Standard bulk corporate gifting orders are processed in 5-7 business days. For highly customized logo branding, please allow 10-14 days.",
  },
  {
    question:
      "Do you offer tiered volume discounts for large enterprise orders?",
    answer:
      "Yes, we offer attractive tiered bulk discounts for corporate gifting orders ranging from 25 units to 5000+ units.",
  },
  {
    question:
      "Can we combine artisanal chocolates with dry fruits in our hampers?",
    answer:
      "Definitely. Our luxury hampers can be customized to include a mix of premium dry fruits, artisanal chocolates, and cold-pressed juices.",
  },
  {
    question:
      "How do I request a corporate gift catalog and pricing?",
    answer:
      "You can request our latest corporate gifting catalog and pricing by filling out the quote form on our website or contacting our Pune corporate desk via WhatsApp.",
  },
];

export { faqs as corporateFaqs };

export function CorporateFAQ() {
  return (
    <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
      <SectionHeading eyebrow="Have Questions?" title="Corporate Gifting FAQ" />
      <FAQList faqs={faqs} />
    </section>
  );
}
