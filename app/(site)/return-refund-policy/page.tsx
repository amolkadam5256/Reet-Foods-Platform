import { FAQSchema } from "@/components/seo/FAQSchema";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata = {
  title: "Return & Refund Policy | Reet Foods & Giftings Pune",
  description: "Return and refund policy for Reet Foods & Giftings premium dry fruits, corporate gift boxes, and luxury hampers.",
};

const faqs = [
  {
    question: "Can I return a corporate gift box after it has been dispatched?",
    answer: "Because our corporate gift boxes, premium dry fruits, and custom hampers are edible and often custom-branded, we operate a strict no-returns policy once production or dispatch begins."
  },
  {
    question: "What should I do if I receive a damaged corporate hamper?",
    answer: "If you receive a damaged dry fruit gift box or luxury hamper, contact us within 48 hours with clear photographs and your order number. We will review and arrange a replacement."
  },
  {
    question: "Do you offer refunds if an incorrect product is delivered?",
    answer: "Yes. If an incorrect product is delivered as part of a corporate gifting order, we will prioritize an immediate replacement or partial refund after verification."
  },
  {
    question: "What is the process for raising a return or refund request?",
    answer: "Contact our Pune team by calling +91 9890609611 or emailing reetfoodspune@gmail.com with your order ID, photos of the issue, and a description of the problem."
  },
  {
    question: "Are customized corporate gift boxes returnable?",
    answer: "No. Custom logo-branded gift boxes, foil-stamped corporate hampers, and personalized name-card gifts are made-to-order and are entirely non-returnable."
  },
  {
    question: "How long does the refund process take?",
    answer: "Approved refunds for bulk corporate gifting orders are processed within 5 to 7 business days to your original payment method or bank account via NEFT."
  },
  {
    question: "Are premium dry fruits eligible for a return if found stale?",
    answer: "Our nitrogen-packed premium dry fruits are guaranteed fresh at the time of dispatch. If you find an issue upon receipt, contact us within 24 hours with proof for review."
  },
  {
    question: "Can I cancel an order before production starts?",
    answer: "Yes, bulk corporate gifting order cancellations requested within 24 hours of confirmation may be accepted. Once production of custom hampers begins, cancellation is not possible."
  },
  {
    question: "Is the shipping charge refunded on eligible returns?",
    answer: "Shipping charges are non-refundable. Only the product value is considered for eligible refund cases, subject to our refund policy review."
  },
  {
    question: "What if my Diwali corporate gift boxes arrive after the event?",
    answer: "We guarantee dispatch within the agreed timelines. However, courier delays beyond our control are not eligible for refunds. We recommend placing Diwali gifting orders at least 3 weeks in advance."
  }
];

export default function ReturnRefundPolicyPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        <div className="flex items-center gap-3">
          <div className="accent-bar" />
          <h1 className="text-3xl font-serif text-reef-charcoal">Return & Refund Policy</h1>
        </div>
        <div className="glass p-6 space-y-4 text-sm text-reef-charcoal/80 leading-7">
          <p>
            Reet Foods has a no-returns policy. Because many products are edible
            and customised, returns are not accepted once production or dispatch begins.
          </p>
          <p>
            If you receive an incorrect or damaged order, contact us promptly with
            photos and order details so we can review the issue.
          </p>
          <p>
            Approved refunds or replacements are handled case by case depending on
            product condition and order status.
          </p>
        </div>

        <section className="mt-16 rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
          <SectionHeading
            eyebrow="Learn More"
            title="Returns & Refunds FAQ"
            description="Common questions about our return policy, refund process, and order cancellations."
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
