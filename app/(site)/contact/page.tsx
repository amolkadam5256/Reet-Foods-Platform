import { SiteShell } from "@/components/common/SiteShell";
import { Images } from "@/assets/images";
import { ContactEnquiryForm } from "@/components/common/ContactEnquiryForm";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactWhatToInclude } from "@/components/contact/ContactWhatToInclude";
import { PuneLocalShopSection } from "@/components/common/PuneLocalShopSection";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FAQList } from "@/components/common/FAQList";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

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
      "Our Hinjewadi Phase I corporate desk provides prompt quotation and requirement support during business hours. For urgent bulk orders, please reach out directly on WhatsApp or phone.",
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
      "Yes, you can reach our corporate gifting team directly via WhatsApp at +91 9225130732 for quick catalogs, quotes, and customization options.",
  },
  {
    question: "Can I request a sample gift box before placing a bulk order?",
    answer:
      "Yes, we can arrange sample boxes for corporate clients upon request so your team can evaluate quality and finish.",
  },
  {
    question: "Do you offer consultations for custom wedding return gifts?",
    answer:
      "Yes, our team provides personalized consultations for custom gifting hampers. You can schedule a visit to our Hinjewadi studio.",
  },
  {
    question: "How can I track my bulk corporate gifting order?",
    answer:
      "Once dispatched, we coordinate delivery updates and provide dispatch information for your corporate consignments.",
  },
  {
    question: "What are your business hours for the Pune office?",
    answer:
      "Our Hinjewadi, Pune office is open Monday to Saturday from 9:30 AM to 8:00 PM. We are closed on Sundays and major public holidays.",
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
        { label: "Call +91 9225130732", href: "tel:+919225130732" },
        {
          label: "WhatsApp us",
          href: generateWhatsAppUrl({ type: "generic", data: { requirement: "Hi Reet Foods, I need a corporate gifting quote." } }),
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

      {/* Local Shop in Hinjewadi, Pune */}
      <PuneLocalShopSection className="mt-12" />

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
