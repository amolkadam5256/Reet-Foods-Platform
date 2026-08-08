import { FiCheck, FiMapPin } from "react-icons/fi";

const qualityStandards = [
  "Carefully selected premium-grade ingredients and gift-ready products.",
  "Freshness-conscious packing suited to the product and delivery route.",
  "A final presentation check before every order leaves our facility.",
  "Clear coordination for branding, recipient lists, and delivery timelines.",
];

export function AboutManufacturing() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-reef-gold/20 bg-reef-charcoal p-8 text-white shadow-md">
        <div className="flex items-center gap-3 text-reef-gold">
          <FiMapPin className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-widest">
            Pune Facility
          </span>
        </div>
        <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-bold text-white sm:text-3xl">
          Prepared Locally. Planned Around You.
        </h2>
        <p className="mt-4 text-xs leading-relaxed text-white/75 sm:text-sm">
          Our Pune studio coordinates curation, quality grading, box
          customization, and dispatch from Shop F14, Streets of Europe Mall,
          Hinjewadi Phase I. We manage everything under one roof.
        </p>
        <div className="mt-6 rounded-lg border-l-2 border-reef-gold bg-white/5 p-4 text-xs font-medium text-reef-gold">
          Dedicated account concierge for product selection, branding details,
          and delivery follow-through.
        </div>
      </div>

      <div className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm">
        <span className="text-xs font-semibold uppercase tracking-widest text-reef-burgundy">
          Quality Assurance
        </span>
        <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl font-bold text-reef-charcoal sm:text-3xl">
          A Thoughtful Check at Every Stage.
        </h2>
        <ul className="mt-6 space-y-3 text-xs text-reef-charcoal/80">
          {qualityStandards.map((std, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-reef-burgundy" />
              <span>{std}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
