export const metadata = {
  title: "About Reet Foods | Pune",
  description:
    "Reet Foods is a Pune-based premium gifting and gourmet house crafting dry fruits, chocolates, juices and hampers with concierge service.",
};

const values = [
  { title: "Sourcing", detail: "Origin-specific nuts, Belgian couverture, fresh cold-pressed fruits." },
  { title: "Presentation", detail: "Red & gold palette, magnetic boxes, embossed seals and ribbons." },
  { title: "Service", detail: "Concierge coordination, delivery routing, GST-compliant billing." },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-10">
      <div className="flex items-center gap-3">
        <div className="accent-bar" />
        <h1 className="text-3xl font-serif text-reef-cream">About Reet Foods</h1>
      </div>
      <p className="text-lg text-reef-cream/80 leading-relaxed">
        Reet Foods was founded in Pune with a single idea: premium ingredients deserve equally premium
        presentation. From origin-controlled dry fruits to hand-tempered chocolates and fresh cold-pressed
        juices, every box is crafted to delight recipients across corporate, festive and wedding occasions.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="card p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-reef-gold mb-2">{v.title}</p>
            <p className="text-sm text-reef-cream/75">{v.detail}</p>
          </div>
        ))}
      </div>

      <div className="glass p-6 space-y-4">
        <h2 className="text-xl font-serif text-reef-cream">What we manage for you</h2>
        <ul className="list-disc list-inside text-sm text-reef-cream/80 space-y-2">
          <li>Concept to delivery gifting for corporate offsites, Diwali and weddings</li>
          <li>Custom logo sleeves, ribbons, note cards and concierge drop-offs</li>
          <li>Shelf-life and temperature-safe packing for pan-Pune transport</li>
        </ul>
      </div>
    </div>
  );
}
