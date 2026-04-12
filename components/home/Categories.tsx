import Image from "next/image";
import Link from "next/link";
import { categories } from "../../data/categories";

export function Categories() {
  return (
    <section className="section" id="categories">
      <div className="flex items-center gap-3 mb-6">
        <div className="accent-bar" />
        <h2 className="text-2xl font-serif text-reef-burgundy">
          Featured Categories
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            href={cat.href}
            className="card p-6 block group overflow-hidden"
          >
            <div className="relative h-40 mb-4 rounded-xl overflow-hidden border border-reef-gold/30">
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-reef-burgundy mb-2">
              {cat.tag}
            </p>
            <h3 className="text-xl font-serif text-reef-charcoal mb-2">
              {cat.title}
            </h3>
            <p className="text-sm text-reef-charcoal/80 mb-4">{cat.copy}</p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-reef-burgundy">
              View details <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
