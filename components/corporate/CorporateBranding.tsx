const brandingOptions = [
  {
    title: "Gold & Silver Foil Stamping",
    desc: "High-shine metallic foil of your brand logo on magnetic hardtop lids.",
  },
  {
    title: "Laser Engraved Wooden Lid",
    desc: "Crisp permanent logo engraving on handcrafted teak and pine wooden chests.",
  },
  {
    title: "Custom Sleeve & Ribbon Wrap",
    desc: "Full-color printed outer box sleeves matching your corporate brand color palette.",
  },
  {
    title: "Personalized Message Insert",
    desc: "Warmly crafted greeting cards signed by your CEO or leadership team.",
  },
];

export function CorporateBranding() {
  return (
    <section className="rounded-2xl border border-reef-gold/20 bg-reef-charcoal p-8 text-white shadow-xl sm:p-10">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-reef-gold">
          Brand Identity Integration
        </span>
        <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white">
          Custom Logo Branding Options
        </h2>
        <p className="mt-2 text-xs text-white/75 sm:text-sm">
          We seamlessly embed your corporate logo, corporate colors, and custom
          greeting messages on every gift box.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {brandingOptions.map((opt, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          >
            <span className="text-xs font-bold text-reef-gold">
              0{idx + 1}
            </span>
            <h3 className="mt-2 text-base font-bold text-white">{opt.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-white/70">
              {opt.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
