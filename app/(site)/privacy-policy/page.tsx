import { FAQSchema } from "@/components/seo/FAQSchema";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata = {
  title: "Privacy Policy | Reet Foods & Giftings Pune",
  description: "Privacy policy for Reet Foods & Giftings website visitors and corporate customers.",
};

const faqs = [
  {
    question: "What personal information does Reet Foods & Giftings collect?",
    answer: "We collect basic contact details, billing information, and delivery addresses (including multi-location corporate employee addresses) necessary to process your premium gifting orders."
  },
  {
    question: "How is my corporate data used for bulk gifting orders?",
    answer: "Your corporate data and recipient addresses are used strictly for order fulfillment, courier dispatch, and GST invoicing for your B2B corporate gifts."
  },
  {
    question: "Does Reet Foods & Giftings share or sell customer data?",
    answer: "No, we strictly do not sell, rent, or trade your personal or corporate data to third parties. Your data privacy is our top priority."
  },
  {
    question: "Is my payment information secure when ordering luxury hampers?",
    answer: "Yes, all payments for our premium dry fruits and corporate hampers are processed through secure, encrypted, and RBI-compliant payment gateways."
  },
  {
    question: "How do you protect recipient data for PAN India corporate deliveries?",
    answer: "Recipient addresses provided for PAN India corporate gifting are securely processed and shared only with our trusted logistics partners for delivery purposes."
  },
  {
    question: "Do you use cookies on the Reet Foods & Giftings website?",
    answer: "Yes, we use basic cookies to enhance your browsing experience, analyze website traffic, and understand how you interact with our luxury gifting catalogs."
  },
  {
    question: "How long do you retain my order information?",
    answer: "We retain order and GST invoicing records as required by Indian tax laws. You can request the deletion of non-essential marketing data at any time."
  },
  {
    question: "Will I receive marketing emails after requesting a quote?",
    answer: "You may receive occasional updates about our new corporate gifting collections or festive hampers (like Diwali). You can opt out of these emails at any time."
  },
  {
    question: "How can I update or delete my personal information?",
    answer: "You can update or request the deletion of your personal data by contacting our privacy team at reetfoodspune@gmail.com or calling our Hinjewadi office."
  },
  {
    question: "Are your privacy practices compliant with Indian laws?",
    answer: "Yes, our privacy policy and data handling practices comply with the Information Technology Act and applicable data protection regulations in India."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        <div className="flex items-center gap-3">
          <div className="accent-bar" />
          <h1 className="text-3xl font-serif text-reef-charcoal">Privacy Policy</h1>
        </div>
        <div className="glass p-6 space-y-4 text-sm text-reef-charcoal/80 leading-7">
          <p>
            Reet Foods collects basic contact details submitted through forms,
            email, WhatsApp or phone so we can respond to enquiries and fulfill
            orders.
          </p>
          <p>
            We use your information only for communication, order processing,
            delivery coordination and customer support. We do not sell personal
            data.
          </p>
          <p>
            If you have questions about data handling, please contact our team
            using the details on the Contact page.
          </p>
        </div>

        <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
          <SectionHeading
            eyebrow="Learn More"
            title="Privacy & Data FAQ"
            description="Common questions about how we handle and protect your information."
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
