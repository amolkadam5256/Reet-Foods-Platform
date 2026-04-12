import Link from "next/link";
import { productCategories } from "../../../../../data/products";

const category = productCategories.find((c) => c.slug === "juice");

export default function JuicePage() {
  if (!category) return null;
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-6">
      <h1 className="text-3xl font-serif text-reef-burgundy">
        Cold-Pressed Juices
      </h1>
      <p className="text-sm text-reef-charcoal/80">{category.intro}</p>
      <ul className="grid gap-4 md:grid-cols-3">
        {category.items.map((item) => (
          <li key={item.name} className="card p-4 space-y-2">
            <p className="text-lg font-serif text-reef-charcoal">{item.name}</p>
            <p className="text-sm text-reef-charcoal/70">{item.detail}</p>
            <Link
              href="/contact#quote"
              className="text-sm font-semibold text-reef-burgundy hover:text-reef-gold"
            >
              Get Quote →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
