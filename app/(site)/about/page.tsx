import { SiteShell } from "@/components/common/SiteShell";

export const metadata = {
  title: "About Reet Foods | Pune",
  description:
    "Reet Foods is a Pune-based premium gifting and gourmet house crafting dry fruits, chocolates, juices and hampers with concierge service.",
};

const values = [
  { title: "Sourcing", detail: "Origin-specific nuts, Belgian couverture, and fresh cold-pressed ingredients." },
  { title: "Presentation", detail: "Red and gold packaging, rigid boxes, embossed seals, and ribbons." },
  { title: "Service", detail: "Concierge coordination, delivery routing, and GST-compliant billing." },
];

export default function AboutPage() {
  return (
    <SiteShell
      eyebrow="About Us"
      title="Premium ingredients deserve a premium presentation."
      description="Reet Foods was founded in Pune to make gifting feel polished, reliable, and memorable for corporate, festive, and wedding buyers."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }]}
      sidePanelTitle="Our promise"
      sidePanelBody="We help you plan everything from product selection to packaging, labels, and delivery timelines."
      sideLinks={[{ label: "Explore products", href: "/products" }, { label: "Ask for a quote", href: "/contact#quote" }]}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {values.map((item) => (
          <div key={item.title} className="border border-reef-gold/15 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-burgundy">
              {item.title}
            </p>
            <p className="mt-3 text-sm leading-7 text-reef-charcoal/72">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border border-reef-gold/15 bg-white p-6">
          <h2 className="text-2xl font-semibold text-reef-charcoal">What we manage for you</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-reef-charcoal/72">
            <li>Concept to delivery gifting for corporate offsites, Diwali, and weddings</li>
            <li>Custom logo sleeves, ribbons, note cards, and concierge drop-offs</li>
            <li>Shelf-life and temperature-safe packing for city and pan-India transport</li>
          </ul>
        </div>
        <div className="border border-reef-gold/15 bg-[#111111] p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-gold">Why people choose us</p>
          <p className="mt-4 text-sm leading-7 text-white/72">
            We focus on the parts buyers care about most: consistency, presentation, speed of response, and customization support.
          </p>
        </div>
      </div>
    </SiteShell>
  );
}
