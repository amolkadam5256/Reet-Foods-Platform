import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { categories } from "@/data/categories";

export function CategoryCards() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal sm:text-4xl">
          Crafted For Every Occasion
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-reef-charcoal/70 sm:text-base">
          Discover premium dry fruits, gift boxes and custom hampers. Curated
          for corporate teams, festive celebrations, events and personal gifting.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="group overflow-hidden border border-reef-gold/15 bg-white"
          >
            <div className="relative h-52">
              <Image
                src={category.img}
                alt={category.title}
                fill
                sizes="(max-width: 1280px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-reef-gold">
                {category.tag}
              </p>
              <h3 className="mt-2 text-2xl font-[family-name:var(--font-playfair)] text-reef-charcoal">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-reef-charcoal/70">
                {category.copy}
              </p>
              <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-reef-burgundy transition-all duration-300 group-hover:gap-3 group-hover:text-reef-gold">
                <span>{category.cta}</span>
                <FiArrowRight className="text-sm" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
