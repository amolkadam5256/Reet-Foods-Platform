import { SectionHeading } from "@/components/common/SectionHeading";

const steps = [
  [
    "01",
    "Tell us the occasion",
    "Share your quantity, budget, recipients and delivery date.",
  ],
  [
    "02",
    "Choose your curation",
    "We help you select products, packaging and personal touches.",
  ],
  [
    "03",
    "Approve the details",
    "Review the final assortment and branding before production begins.",
  ],
  [
    "04",
    "Receive with confidence",
    "We prepare, check and coordinate delivery with care.",
  ],
];

export function AboutProcessFlow() {
  return (
    <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10">
      <SectionHeading
        eyebrow="Concierge Promise"
        title="Clear Guidance from Brief to Doorstep"
        description="How we work with individuals and organizations to deliver seamless gifts."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(([num, stepTitle, detail]) => (
          <div
            key={num}
            className="rounded-xl border border-reef-gold/15 bg-reef-cream/40 p-5"
          >
            <span className="text-sm font-bold text-reef-burgundy">{num}</span>
            <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">
              {stepTitle}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-reef-charcoal/70">
              {detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
