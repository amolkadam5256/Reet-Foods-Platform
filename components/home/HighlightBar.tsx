import { highlightBar } from "../../data/home";

export function HighlightBar() {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {highlightBar.map((item) => (
          <div
            key={item}
            className="glass p-3 text-center text-sm font-semibold text-reef-burgundy"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
