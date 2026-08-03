import { SiteShell } from "@/components/common/SiteShell";
import { Images } from "@/assets/images";
import { business } from "@/data/business";
import { ContactEnquiryForm } from "@/components/common/ContactEnquiryForm";

export const metadata = {
  title: "Contact Reet Foods | Get Best Quote",
  description:
    "Contact Reet Foods, Pune for premium dry fruits, custom corporate gifts, festive hampers and bulk gifting.",
};

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
    </SiteShell>
  );
}
