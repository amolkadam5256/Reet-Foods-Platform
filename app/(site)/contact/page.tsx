import { SiteShell } from "@/components/common/SiteShell";

export const metadata = {
  title: "Contact Reet Foods | Get Best Quote",
  description:
    "Contact Reet Foods, Pune for premium dry fruits, chocolate gift boxes, juices and corporate hampers. Get the best quote within 24 hours.",
};

export default function ContactPage() {
  return (
    <SiteShell
      eyebrow="Contact"
      title="Tell us what you need and we’ll shape the right gifting option."
      description="Share quantity, occasion, budget range, and delivery date. We’ll respond with product suggestions, packaging options, and pricing."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      sidePanelTitle="Fast response"
      sidePanelBody="For the quickest reply, include the product category, order size, and preferred delivery window."
      sideLinks={[
        { label: "Call +91 99999 99999", href: "tel:+919999999999" },
        { label: "WhatsApp us", href: "https://wa.me/919999999999?text=Hi%20Reet%20Foods%2C%20I%20need%20a%20quote" },
      ]}
    >
      <div id="quote" className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="border border-reef-gold/15 bg-white p-6">
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-reef-charcoal/75">
                Full name
                <input className="w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 outline-none" type="text" placeholder="Your name" required />
              </label>
              <label className="space-y-2 text-sm text-reef-charcoal/75">
                Company / Event
                <input className="w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 outline-none" type="text" placeholder="Company / Event" />
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-reef-charcoal/75">
                Email
                <input className="w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 outline-none" type="email" placeholder="you@example.com" required />
              </label>
              <label className="space-y-2 text-sm text-reef-charcoal/75">
                Phone
                <input className="w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 outline-none" type="tel" placeholder="+91..." required />
              </label>
            </div>
            <label className="space-y-2 text-sm text-reef-charcoal/75">
              Requirement
              <textarea className="h-32 w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 outline-none" placeholder="Quantity, product, delivery date, customization..." required />
            </label>
            <button type="submit" className="inline-flex items-center gap-2 bg-reef-gold px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95">
              Send Inquiry
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <div className="border border-reef-gold/15 bg-[#111111] p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-gold">Contact details</p>
            <div className="mt-4 space-y-3 text-sm text-white/72">
              <p>+91 99999 99999</p>
              <p>hello@reetfoods.in</p>
              <p>Pune, Maharashtra, India</p>
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
