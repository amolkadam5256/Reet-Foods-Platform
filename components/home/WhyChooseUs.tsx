import { whyUs } from "../../data/home";

export function WhyChooseUs() {
  return (
    <section className="section">
      <div className="flex items-center gap-3 mb-6">
        <div className="accent-bar" />
        <h2 className="text-2xl font-serif text-reef-burgundy">
          Why Choose Reet Foods
        </h2>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {whyUs.map((item) => (
          <div
            key={item}
            className="glass p-4 text-sm font-semibold text-reef-charcoal flex items-center gap-2"
          >
            <span className="text-reef-burgundy">✔</span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
