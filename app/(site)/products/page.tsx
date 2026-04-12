import Link from "next/link";
import { productCategories } from "../../../data/products";

export const metadata = {
  title: "Products | Reet Foods Pune",
  description:
    "Explore Reet Foods premium range: dry fruits, chocolate gift boxes, cold-pressed juices and curated celebration hampers.",
};

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="accent-bar" />
        <h1 className="text-3xl font-serif text-reef-cream">Our Products</h1>
      </div>
      <p className="text-reef-cream/80 mb-8 text-sm sm:text-base">
        Premium sourcing, controlled roasting, temperature-stable packaging and
        red-gold presentation designed for corporate and festive gifting.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {productCategories.map((cat) => (
          <div key={cat.slug} className="card p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-reef-gold mb-2">
                  Signature
                </p>
                <h2 className="text-xl font-serif text-reef-cream">{cat.name}</h2>
              </div>
              <Link
                href={`/products/${cat.slug}`}
                className="text-sm font-semibold text-reef-gold hover:text-reef-cream"
              >
                View
              </Link>
            </div>
            <p className="text-sm text-reef-cream/80">{cat.intro}</p>
            <ul className="grid grid-cols-2 gap-2 text-xs text-reef-cream/70">
              {cat.highlights.map((h) => (
                <li key={h} className="glass px-3 py-2 rounded-md">
                  {h}
                </li>
              ))}
            </ul>
            <Link
              href={`/products/${cat.slug}`}
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-reef-gold hover:text-reef-cream"
            >
              Explore details <span aria-hidden>→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
