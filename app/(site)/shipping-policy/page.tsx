import { FAQSchema } from "@/components/seo/FAQSchema";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata = {
  title: "Shipping Policy | Reet Foods & Giftings Pune",
  description: "Shipping and delivery information for Reet Foods & Giftings premium dry fruits, corporate gift boxes and luxury hampers across India.",
};

const faqs = [
  {
    question: "Do you offer PAN India delivery for corporate gift hampers?",
    answer: "Yes, we deliver premium dry fruits, corporate hampers, and custom gift boxes across all Indian states and over 19,000 pin codes, from Pune to Mumbai, Delhi, Bangalore, and beyond."
  },
  {
    question: "What is the typical delivery timeline for bulk corporate gifting orders?",
    answer: "Standard delivery for corporate gifting orders takes 3 to 5 business days after dispatch. Delivery timelines are confirmed during order approval, depending on destination."
  },
  {
    question: "Is there additional handling time for customized corporate gift boxes?",
    answer: "Yes, custom logo-branded corporate gift boxes and luxury hampers require 5 to 14 additional business days for production before dispatch from our Pune facility."
  },
  {
    question: "How do you ship perishable chocolates and temperature-sensitive gifts?",
    answer: "Our artisanal chocolates and temperature-sensitive hampers are shipped in insulated cold-chain packaging with ice gel packs, ensuring they arrive fresh at any Indian destination."
  },
  {
    question: "Can you manage individual employee deliveries for corporate gifting PAN India?",
    answer: "Yes. Our multi-address dispatch service handles individual door-to-door deliveries for all employees across India. You simply provide an Excel sheet of addresses."
  },
  {
    question: "What courier partners do you use for corporate gift deliveries?",
    answer: "We partner with premium logistics companies including Blue Dart, Delhivery, and FedEx to ensure safe, on-time delivery of corporate dry fruit boxes and hampers."
  },
  {
    question: "Do you provide tracking for bulk gifting shipments?",
    answer: "Yes, all corporate gifting shipments include end-to-end tracking. For multi-address dispatches, we provide a master tracking sheet covering every individual recipient."
  },
  {
    question: "Is shipping cost included in the bulk corporate gifting quote?",
    answer: "Shipping costs depend on order volume, destination, and packaging type. For large bulk orders (100+ units), we offer highly competitive and often complimentary shipping."
  },
  {
    question: "Do you deliver to remote or Tier 2 and Tier 3 cities?",
    answer: "Yes, we deliver corporate dry fruit boxes and premium gift hampers to Tier 2 and Tier 3 cities across India. Delivery timelines may vary for remote locations."
  },
  {
    question: "What happens if a gift box is damaged during transit?",
    answer: "All our corporate gifting shipments are insured. If any box is damaged during transit, please contact us with photos within 48 hours and we will arrange an immediate replacement."
  }
];

export default function ShippingPolicyPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        <div className="flex items-center gap-3">
          <div className="accent-bar" />
          <h1 className="text-3xl font-serif text-reef-charcoal">Shipping Policy</h1>
        </div>
        <div className="glass p-6 space-y-4 text-sm text-reef-charcoal/80 leading-7">
          <p>
            We arrange shipping based on the destination, product type and order
            quantity. Bulk and customized orders may require additional packing
            and handling time.
          </p>
          <p>
            We support PAN-India and export delivery. Typical delivery takes 3 to
            4 days; the final timeline is confirmed during order confirmation.
          </p>
          <p>
            Please review your contact details carefully so we can ensure smooth
            delivery coordination.
          </p>
        </div>

        <section className="mt-16 rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
          <SectionHeading
            eyebrow="Learn More"
            title="Shipping & Delivery FAQ"
            description="Common questions about our delivery timelines, courier partners, and PAN India shipping."
          />
          <div className="mt-8 space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-reef-gold/15 pb-4 last:border-0 last:pb-0">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-reef-charcoal/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
