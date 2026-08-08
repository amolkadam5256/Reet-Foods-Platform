import { SiteShell } from "@/components/common/SiteShell";
import { Images } from "@/assets/images";
import { ContactEnquiryForm } from "@/components/common/ContactEnquiryForm";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactWhatToInclude } from "@/components/contact/ContactWhatToInclude";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FAQList } from "@/components/common/FAQList";

export const metadata = {
  title: "Contact Reet Foods | Get Best Quote",
  description:
    "Contact Reet Foods, Pune for premium dry fruits, custom corporate gifts, festive hampers and bulk gifting.",
};

const faqs = [
  {
    question:
      "How quickly do you respond to corporate gifting inquiries in Pune?",
    answer:
      "Our Hinjewadi Phase I corporate desk responds to all gifting inquiries within 2 hours during business hours. For urgent bulk orders, please call us directly.",
  },
  {
    question: "What information should I include in my contact inquiry?",
    answer:
      "Please include the product category (dry fruits, chocolates, etc.), estimated quantity, budget per unit, delivery city, and your preferred delivery deadline.",
  },
  {
    question: "Where is your Pune corporate gifting office located?",
    answer:
      "Our office and showroom is located at Shop F14, Ground Floor, Streets of Europe Mall, Maan Road near Infosys Circle, Hinjewadi Phase I, Pune, 411057.",
  },
  {
    question: "Do you have a dedicated WhatsApp number for corporate orders?",
    answer:
      "Yes, you can reach our corporate gifting team directly via WhatsApp at +91 9890609611 for quick catalogs, quotes, and sample requests.",
  },
  {
    question: "Can I request a sample gift box before placing a bulk order?",
    answer:
      "Yes, we encourage corporate clients to request sample boxes. We can dispatch samples to your Pune office on the same day for evaluation.",
  },
  {
    question: "Do you offer consultations for custom wedding return gifts?",
    answer:
      "Yes, our gifting concierges provide free consultations for wedding return gifts and trousseau packing. You can schedule a visit to our Hinjewadi studio.",
  },
  {
    question: "How can I track my bulk corporate gifting order?",
    answer:
      "Once dispatched, you will receive a master tracking sheet. For multi-address PAN India deliveries, we provide live status updates for every single recipient.",
  },
  {
    question: "What are your business hours for the Pune office?",
    answer:
      "Our Hinjewadi, Pune office is open Monday to Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays and major public holidays.",
  },
  {
    question: "Do you entertain walk-in customers at your Hinjewadi store?",
    answer:
      "While we specialize in bulk corporate gifting, walk-in customers are welcome to purchase premium dry fruits and ready-made hampers at our store.",
  },
  {
    question:
      "Is there an email address dedicated for vendor and B2B partnerships?",
    answer:
      "Yes, for vendor inquiries, partnerships, or B2B supply, please email us directly at reetfoodspune@gmail.com with your proposal.",
  },
];

export default function ContactPage() {
  return (
    <SiteShell
      eyebrow="Contact"
      title="Tell us your gifting brief and we’ll shape the right option."
      description="Share your quantity, occasion, budget range and delivery date. We customise dry fruit boxes and gift hampers with packaging, logo branding and message cards."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      sidePanelTitle="Plan your order"
      sidePanelBody="For the quickest reply, include the product category, order size, and preferred delivery window."
      sideLinks={[
        { label: "Call +91 9890609611", href: "tel:+919890609611" },
        { label: "Call +91 8007518088", href: "tel:+918007518088" },
        {
          label: "WhatsApp us",
          href: "https://wa.me/919890609611?text=Hi%20Reet%20Foods%2C%20I%20need%20a%20quote",
        },
      ]}
      image={Images.sweetiesDesk}
      imageAlt="Gourmet sweets and dry fruits for gifting"
    >
      <FAQSchema faqs={faqs} />
      <div id="quote" className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="border border-reef-gold/15 bg-white p-6">
          <ContactEnquiryForm />
        </div>

        <div className="space-y-4">
          <ContactDetails />
          <ContactWhatToInclude />
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-12 rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading
          eyebrow="Support"
          title="Contact & Order FAQs"
          description="Common questions about reaching us and placing an order."
        />
        <FAQList faqs={faqs} />
      </section>
    </SiteShell>
  );
}
