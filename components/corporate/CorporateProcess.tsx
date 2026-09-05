import { SectionHeading } from "@/components/common/SectionHeading";

const steps = [
  [
    "1. Brief & Requirements",
    "Share target quantity, budget, and desired dispatch date.",
  ],
  [
    "2. Digital Mock-up",
    "We share 3D renderings of your branded gift box for approval.",
  ],
  [
    "3. Production & Packing",
    "Hygienic packing and food-grade sealing at our FSSAI-licensed Pune facility.",
  ],
  [
    "4. Dispatch & Tracking",
    "Express shipment to office hubs or individual employee homes.",
  ],
];

export function CorporateProcess() {
  return (
    <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
      <SectionHeading
        eyebrow="Workflow"
        title="Simple 4-Step Corporate Ordering Process"
        description="How we turn your gifting vision into delivered perfection."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(([title, desc], idx) => (
          <div
            key={idx}
            className="rounded-xl border border-reef-gold/15 bg-reef-cream/40 p-5"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal">
              {title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-reef-charcoal/70">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
