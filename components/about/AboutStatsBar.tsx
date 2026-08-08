const statistics = [
  { value: "50,000+", label: "Gift Boxes Delivered" },
  { value: "350+", label: "Enterprise Corporate Clients" },
  { value: "100%", label: "FSSAI & Hygiene Compliant" },
  { value: "4.9/5", label: "Client Satisfaction Rating" },
];

export function AboutStatsBar() {
  return (
    <section className="grid gap-6 rounded-2xl border border-reef-gold/20 bg-reef-charcoal p-8 text-white sm:grid-cols-2 lg:grid-cols-4">
      {statistics.map((stat, idx) => (
        <div key={idx} className="text-center sm:text-left">
          <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-gold sm:text-4xl">
            {stat.value}
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/75">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}
