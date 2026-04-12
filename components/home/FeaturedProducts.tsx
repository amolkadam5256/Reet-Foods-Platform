import Image from "next/image";
import Link from "next/link";
import { featuredProducts } from "../../data/home";

export function FeaturedProducts() {
  return (
    <section className="section">
      <div className="flex items-center gap-3 mb-6">
        <div className="accent-bar" />
        <h2 className="text-2xl font-serif text-reef-burgundy">
          Featured For Gifting
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {featuredProducts.map((item) => (
          <div key={item.name} className="card p-5 flex gap-4 items-center">
            <div className="relative h-20 w-20 rounded-lg overflow-hidden border border-reef-gold/40">
              <Image
                src={item.img}
                alt={item.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="badge">{item.badge}</div>
              <p className="text-lg font-serif text-reef-charcoal mt-2">
                {item.name}
              </p>
              <p className="text-sm text-reef-charcoal/70">{item.info}</p>
            </div>
            <Link
              href="/contact#quote"
              className="self-start text-sm font-semibold text-reef-burgundy hover:text-reef-gold"
            >
              Get Quote →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
