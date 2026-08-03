import { FiLock, FiPackage, FiLayers, FiGift, FiFileText } from "react-icons/fi";

interface PackagingOptionsProps {
  animVisible: boolean;
}

export function PackagingOptions({ animVisible }: PackagingOptionsProps) {
  const packagingTypes = [
    { title: "Metallic Gold Tin", desc: "Air-tight nitrogen sealed metal tins for maximum shelf life.", tag: "Airtight", icon: FiLock },
    { title: "Handcrafted Wooden Box", desc: "Sustainable pine wood with brass latch and custom laser engraving.", tag: "Eco Luxury", icon: FiPackage },
    { title: "Rigid Magnetic Box", desc: "High-density rigid cardboard with magnetic flap and velvet insert.", tag: "Premium", icon: FiLayers },
    { title: "Satin Ribbon Gift Box", desc: "Classic rigid box finished with hand-tied satin ribbons and cards.", tag: "Festive", icon: FiGift },
    { title: "Custom Sleeve Packaging", desc: "Full-bleed printed corporate sleeves matching your brand guidelines.", tag: "B2B Branded", icon: FiFileText },
  ];

  const brandingServices = [
    { title: "Laser Logo Engraving", desc: "Precision laser etching of corporate logos directly on wooden & metal box lids." },
    { title: "Custom Ribbon Printing", desc: "High-density screen printed satin ribbons featuring your brand name & colors." },
    { title: "Personalized Greeting Cards", desc: "Custom card inserts with individually printed recipient names and messages." },
    { title: "Branded Outer Sleeves", desc: "Custom designed cardboard sleeves with metallic foil foil-stamping." },
    { title: "Custom Chocolate Wrappers", desc: "Individual chocolate wrapper printing with corporate logos or event dates." },
  ];

  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-label="Packaging options"
    >
      <div className="border border-reef-gold/20 bg-white p-8 sm:p-12">
        <div className="mb-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">Bespoke Craftsmanship</p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
            Packaging Options
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-reef-charcoal/70">
            Choose from our curated library of luxury box architectures and custom finishes.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {packagingTypes.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={p.title}
                className={`border border-reef-gold/20 bg-[#fcfbf8] p-6 text-center transition-all duration-500 hover:border-[#d4af37] hover:bg-white hover:shadow-lg ${animVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#7a0019]">
                  <IconComp className="h-7 w-7" />
                </div>
                <span className="mt-4 inline-block bg-[#7a0019] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white">
                  {p.tag}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal">{p.title}</h3>
                <p className="mt-2 text-xs leading-5 text-reef-charcoal/70">{p.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 border-t border-reef-gold/15 pt-10">
          <h3 className="text-center font-[family-name:var(--font-playfair)] text-xl font-bold text-reef-charcoal sm:text-2xl">
            Custom Branding Services
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-reef-charcoal/70">
            Integrate your company identity seamlessly across every gift box with our in-house laser and printing lab.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {brandingServices.map((b, idx) => (
              <div
                key={b.title}
                className={`border border-reef-gold/20 bg-white p-6 transition-all duration-300 hover:border-[#d4af37] ${animVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal">{b.title}</h3>
                <p className="mt-2 text-xs leading-5 text-reef-charcoal/75">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
