import { FAQSchema } from "@/components/seo/FAQSchema";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata = {
  title: "Terms & Conditions | Reet Foods & Giftings Pune",
  description: "Terms and conditions for using the Reet Foods & Giftings website and services for corporate gifting, dry fruits, and premium hampers.",
};

const faqs = [
  {
    question: "Are the prices on Reet Foods & Giftings website fixed?",
    answer: "Product pricing for premium dry fruits, corporate hampers, and luxury gift boxes may change without prior notice. Final pricing for bulk orders is always confirmed during order approval."
  },
  {
    question: "When is a corporate gifting order confirmed?",
    answer: "Your bulk corporate gifting order is confirmed only after final product assortment, branding details, payment terms, and production timelines are mutually agreed with our Pune team."
  },
  {
    question: "What happens if I provide incorrect delivery information?",
    answer: "Reet Foods & Giftings is not liable for delivery delays caused by incorrect recipient addresses or contact details provided by the customer for PAN India gifting deliveries."
  },
  {
    question: "Are custom logo-branded boxes eligible for returns?",
    answer: "No. Custom logo-branded corporate gift boxes and personalized hampers are non-returnable once production begins, as they are made-to-order exclusively for your brand."
  },
  {
    question: "What dispute resolution mechanism do you follow?",
    answer: "Any disputes related to corporate gifting orders or premium dry fruit deliveries are subject to the jurisdiction of courts in Pune, Maharashtra, India."
  },
  {
    question: "Is GST applicable on all corporate gifting orders?",
    answer: "Yes, applicable GST is charged on all corporate gifting orders. A full GST-compliant invoice is provided for B2B buyers to claim input tax credit (ITC)."
  },
  {
    question: "Can you cancel a bulk order after confirmation?",
    answer: "Order cancellations for bulk corporate gifts in Pune must be requested within 24 hours of order confirmation. Post-production orders cannot be cancelled."
  },
  {
    question: "Do you offer any guarantees on product quality?",
    answer: "Yes, all our FSSAI-certified premium dry fruits and artisanal chocolates are quality-checked before packing. We guarantee freshness and presentation at the time of dispatch."
  },
  {
    question: "Can Reet Foods & Giftings modify terms without notice?",
    answer: "Yes, we reserve the right to update our terms and conditions. Continued use of our services constitutes your acceptance of the revised terms."
  },
  {
    question: "Are there any minimum commitments for recurring corporate gifting contracts?",
    answer: "Annual corporate gifting contracts and recurring bulk orders are governed by separate B2B agreements. Please contact our Hinjewadi office to discuss retainer terms."
  }
];

export default function TermsConditionsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        <div className="flex items-center gap-3">
          <div className="accent-bar" />
          <h1 className="text-3xl font-serif text-reef-charcoal">Terms & Conditions</h1>
        </div>
        <div className="glass p-6 space-y-4 text-sm text-reef-charcoal/80 leading-7">
          <p>
            By using this website, you agree that product information, pricing
            and availability may change without notice.
          </p>
          <p>
            Orders are confirmed only after final approval, payment terms and
            production timelines are agreed with our team.
          </p>
          <p>
            Reet Foods is not liable for delays caused by incorrect customer
            information, force majeure events or courier issues outside our
            control.
          </p>
        </div>

        <section className="mt-16 rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
          <SectionHeading
            eyebrow="Learn More"
            title="Terms & Conditions FAQ"
            description="Common questions about ordering, payments, and our service agreements."
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
