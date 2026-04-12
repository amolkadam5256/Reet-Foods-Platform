import { testimonials } from "../../data/home";

export function Testimonials() {
  return (
    <section className="section">
      <div className="flex items-center gap-3 mb-6">
        <div className="accent-bar" />
        <h2 className="text-2xl font-serif text-reef-burgundy">Loved by Clients</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="card p-5 flex flex-col gap-3">
            <p className="text-sm text-reef-charcoal/80">“{t.quote}”</p>
            <p className="text-sm font-semibold text-reef-burgundy">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
