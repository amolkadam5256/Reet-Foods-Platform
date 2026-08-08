import { FiHeart, FiPackage, FiUsers } from "react-icons/fi";
import { SectionHeading } from "@/components/common/SectionHeading";

const values = [
  {
    icon: FiHeart,
    title: "Quality Worth Giving",
    detail:
      "We select products and ingredients with the care you would use when choosing a gift for someone close to you.",
  },
  {
    icon: FiPackage,
    title: "Presentation with Purpose",
    detail:
      "Every box is assembled to look polished, protect its contents, and make the unboxing feel truly special.",
  },
  {
    icon: FiUsers,
    title: "People-First Service",
    detail:
      "You get a responsive team to help with assortment, personalization, quantities, and delivery planning.",
  },
];

export function AboutCoreValues() {
  return (
    <section>
      <SectionHeading
        eyebrow="What Guides Us"
        title="The Core Principles Behind Every Gift"
        description="We take pride in rigorous quality inspection, aesthetic presentation, and reliable delivery."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {values.map(({ icon: Icon, title, detail }) => (
          <div
            key={title}
            className="rounded-xl border border-reef-gold/20 bg-white p-6 shadow-sm transition hover:-translate-y-1"
          >
            <span className="inline-flex rounded-lg bg-reef-cream p-3 text-reef-burgundy">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-xl font-bold text-reef-charcoal">
              {title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-reef-charcoal/75">
              {detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
