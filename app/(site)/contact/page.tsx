import { SiteShell } from "@/components/common/SiteShell";
import { Images } from "@/assets/images";
import { business } from "@/data/business";
import { ContactEnquiryForm } from "@/components/common/ContactEnquiryForm";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata = {
  title: "Contact Reet Foods | Get Best Quote",
  description:
    "Contact Reet Foods, Pune for premium dry fruits, custom corporate gifts, festive hampers and bulk gifting.",
};

const faqs = [
  {
    question: "How quickly do you respond to corporate gifting inquiries in Pune?",
    answer: "Our Hinjewadi Phase I corporate desk responds to all gifting inquiries within 2 hours during business hours. For urgent bulk orders, please call us directly."
  },
  {
    question: "What information should I include in my contact inquiry?",
    answer: "Please include the product category (dry fruits, chocolates, etc.), estimated quantity, budget per unit, delivery city, and your preferred delivery deadline."
  },
  {
    question: "Where is your Pune corporate gifting office located?",
    answer: "Our office and showroom is located at Shop F14, Ground Floor, Streets of Europe Mall, Maan Road near Infosys Circle, Hinjewadi Phase I, Pune, 411057."
  },
  {
    question: "Do you have a dedicated WhatsApp number for corporate orders?",
    answer: "Yes, you can reach our corporate gifting team directly via WhatsApp at +91 9890609611 for quick catalogs, quotes, and sample requests."
  },
  {
    question: "Can I request a sample gift box before placing a bulk order?",
    answer: "Yes, we encourage corporate clients to request sample boxes. We can dispatch samples to your Pune office on the same day for evaluation."
  },
  {
    question: "Do you offer consultations for custom wedding return gifts?",
    answer: "Yes, our gifting concierges provide free consultations for wedding return gifts and trousseau packing. You can schedule a visit to our Hinjewadi studio."
  },
  {
    question: "How can I track my bulk corporate gifting order?",
    answer: "Once dispatched, you will receive a master tracking sheet. For multi-address PAN India deliveries, we provide live status updates for every single recipient."
  },
  {
    question: "What are your business hours for the Pune office?",
    answer: "Our Hinjewadi, Pune office is open Monday to Saturday from 9:00 AM to 7:00 PM. We are closed on Sundays and major public holidays."
  },
  {
    question: "Do you entertain walk-in customers at your Hinjewadi store?",
    answer: "While we specialize in bulk corporate gifting, walk-in customers are welcome to purchase premium dry fruits and ready-made hampers at our store."
  },
  {
    question: "Is there an email address dedicated for vendor and B2B partnerships?",
    answer: "Yes, for vendor inquiries, partnerships, or B2B supply, please email us directly at reetfoodspune@gmail.com with your proposal."
  }
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
        { label: "WhatsApp us", href: "https://wa.me/919890609611?text=Hi%20Reet%20Foods%2C%20I%20need%20a%20quote" },
      ]}
      image={Images.sweetiesDesk}
      imageAlt="Gourmet sweets and dry fruits for gifting"
    >
      <FAQSchema faqs={faqs} />
      <div id="quote" className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="border border-reef-gold/15 bg-white p-6">
          <ContactEnquiryForm />
          {/* <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
            <input type="hidden" name="access_key" value="396d5fbe-478d-410f-ba07-fc23570be37c" />
            <input type="hidden" name="subject" value="New Reet Foods website enquiry" />
            <input type="hidden" name="from_name" value="Reet Foods Website" />
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-reef-charcoal/75">
                Full name
                <input name="name" className="w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 outline-none" type="text" placeholder="Your name" required />
              </label>
              <label className="space-y-2 text-sm text-reef-charcoal/75">
                Company / Event
                <input name="company_or_event" className="w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 outline-none" type="text" placeholder="Company / Event" />
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-reef-charcoal/75">
                Email
                <input name="email" className="w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 outline-none" type="email" placeholder="you@example.com" required />
              </label>
              <label className="space-y-2 text-sm text-reef-charcoal/75">
                Phone
                <input name="phone" className="w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 outline-none" type="tel" placeholder="+91..." required />
              </label>
            </div>
            <label className="space-y-2 text-sm text-reef-charcoal/75">
              Requirement
              <textarea name="message" className="h-32 w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 outline-none" placeholder="Quantity, product, delivery date, customization..." required />
            </label>
            <button type="submit" className="inline-flex items-center gap-2 bg-reef-gold px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95">
              Send Inquiry
            </button>
          </form> */}
        </div>

        <div className="space-y-4">
          <div className="border border-reef-gold/15 bg-[#111111] p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-gold">Contact details</p>
            <div className="mt-4 space-y-3 text-sm text-white/72">
              <p className="flex items-center gap-2 font-medium text-white">
                <span>Phone:</span>
                <a href="tel:+919890609611" className="hover:text-reef-gold transition">+91 9890609611</a> / <a href="tel:+918007518088" className="hover:text-reef-gold transition">+91 8007518088</a>
              </p>
              <p className="flex items-center gap-2">
                <span>Email:</span>
                <a href="mailto:reetfoodspune@gmail.com" className="hover:text-reef-gold transition">reetfoodspune@gmail.com</a>
              </p>
              <div className="mt-2 pt-2 border-t border-white/10 leading-relaxed">
                <strong className="block text-white mb-1">Store &amp; Office Address:</strong>
                {business.officeAddress}
              </div>
              <div className="mt-2 pt-2 border-t border-white/10 leading-relaxed">
                <strong className="block text-white mb-1">Factory Address:</strong>
                {business.factoryAddress}
              </div>
              <p>FSSAI Licence No. {business.fssaiLicense}</p>
              <p>GSTIN: {business.gstNumber}</p>
            </div>
          </div>
          <div className="border border-reef-gold/15 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-burgundy">What to include</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-reef-charcoal/72">
              <li>Product type and quantity</li>
              <li>Budget and gifting occasion</li>
              <li>Delivery city and deadline</li>
              <li>Branding or customization requests</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <section className="mt-12 rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
        <SectionHeading
          eyebrow="Support"
          title="Contact & Order FAQs"
          description="Common questions about reaching us and placing an order."
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
    </SiteShell>
  );
}
