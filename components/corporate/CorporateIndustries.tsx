import { SectionHeading } from "@/components/common/SectionHeading";

const industries = [
  {
    title: "IT & Tech Firms",
    desc: "Welcome kits, hackathon rewards, and annual festival boxes for Hinjewadi & Magarpatta tech parks.",
  },
  {
    title: "Financial & Consulting",
    desc: "Premium velvet chests and luxury dry fruit assortments for VIP client relationship management.",
  },
  {
    title: "Real Estate & Automobile",
    desc: "Possession day hampers and vehicle delivery luxury boxes for high-value buyer delight.",
  },
  {
    title: "Pharma & Healthcare",
    desc: "Hygienic, zero-sugar healthy nut boxes and wellness juice kits for doctor appreciation.",
  },
];

export function CorporateIndustries() {
  return (
    <section>
      <SectionHeading
        eyebrow="Sector Solutions"
        title="Tailored Corporate Gifting Across Industries"
        description="We customize product assortments and box designs to match specific corporate use-cases."
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-reef-gold/20 bg-white p-6 shadow-sm transition hover:-translate-y-1"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">
              {ind.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-reef-charcoal/75">
              {ind.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
