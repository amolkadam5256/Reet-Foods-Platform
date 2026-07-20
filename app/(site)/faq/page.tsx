import { SiteShell } from "@/components/common/SiteShell";

const faqs = [
  { q: "What is your minimum order quantity?", a: "MOQ depends on the product and customization level. We support both small premium runs and large bulk orders." },
  { q: "Do you offer customized gift boxes?", a: "Yes. We can customize boxes, sleeves, inserts, ribbons, and note cards for campaigns, events, and festivals." },
  { q: "Can you print company logos?", a: "Yes. Logo printing and branded packaging are available for corporate gifting and private label requirements." },
  { q: "Do you provide PAN India delivery?", a: "Yes. We support delivery across India for corporate, retail, and festive gifting orders." },
  { q: "Do you offer OEM and private label services?", a: "Yes. OEM manufacturing and private label services are part of our offering." },
  { q: "How can I request a catalogue?", a: "Use the contact form or WhatsApp to receive the latest product range." },
];

export const metadata = {
  title: "FAQ | Reet Foods",
  description: "Common customer questions about orders, customization, delivery and OEM services.",
};

export default function FaqPage() {
  return (
    <SiteShell
      eyebrow="Support"
      title="Frequently asked questions for buyers, planners, and gifting teams."
      description="A quick reference for custom boxes, delivery, branding, and order support."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      sidePanelTitle="Need something specific?"
      sidePanelBody="If your question is about a custom order, we’re usually faster if you share the order size and timeline."
      sideLinks={[{ label: "Contact us", href: "/contact#quote" }, { label: "Browse products", href: "/products" }]}
    >
      <div className="space-y-3">
        {faqs.map((item) => (
          <details key={item.q} className="border border-reef-gold/15 bg-white p-5">
            <summary className="cursor-pointer list-none text-sm font-semibold text-reef-charcoal">
              {item.q}
            </summary>
            <p className="mt-3 text-sm leading-7 text-reef-charcoal/72">{item.a}</p>
          </details>
        ))}
      </div>
    </SiteShell>
  );
}
