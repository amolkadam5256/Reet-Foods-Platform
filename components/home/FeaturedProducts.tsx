"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { featuredProducts } from "@/data/home";

const badgeStyles: Record<string, string> = {
  "Best Seller": "bg-reef-burgundy text-white",
  "Premium": "bg-reef-charcoal text-white",
  "Wellness": "bg-[#2d7a3a] text-white",
  "Corporate": "bg-reef-gold text-reef-charcoal",
};

export function FeaturedProducts() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="featured-heading"
    >
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-reef-gold">
            Signature Collections
          </p>
          <h2
            id="featured-heading"
            className="mt-3 font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal sm:text-4xl"
          >
            Trusted by Connoisseurs
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-reef-charcoal/70">
            Explore our most sought-after curations — from premium origin dry fruits to artisanal chocolate gift boxes, trusted by India&apos;s leading enterprises.
          </p>
        </div>
        <Link
          href="/products"
          className="inline-flex shrink-0 items-center gap-2 border border-reef-gold/30 px-6 py-3 text-sm font-semibold text-reef-charcoal transition duration-200 hover:border-reef-gold hover:text-reef-burgundy"
        >
          View All Products <FiArrowRight />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((item, index) => (
          <Link
            key={item.name}
            href="/contact#quote"
            className={[
              "group overflow-hidden bg-white transition duration-300 hover:shadow-[0_12px_40px_rgba(212,175,55,0.22)]",
              index === 0
                ? "border-2 border-reef-gold shadow-sm"
                : "border border-reef-gold/15 hover:border-reef-gold/40",
            ].join(" ")}
          >
            <div className="relative h-56 overflow-hidden bg-[#f8f5f0]">
              <Image
                src={item.img}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              {item.badge ? (
                <span className={`absolute left-3 top-3 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] shadow-sm ${
                  badgeStyles[item.badge] ?? "bg-reef-burgundy text-white"
                }`}>
                  {item.badge}
                </span>
              ) : null}
            </div>
            <div className="p-5 flex flex-col justify-between h-[200px]">
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-reef-charcoal group-hover:text-reef-burgundy transition-colors duration-200">
                  {item.name}
                </h3>
                <p className="mt-2 text-[13px] leading-5 text-reef-charcoal/75 line-clamp-2">
                  {item.info}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-reef-gold/10 pt-4 mt-auto">
                <span className="text-[10px] font-bold uppercase tracking-wider text-reef-charcoal/50">
                  Price on Request
                </span>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-reef-burgundy transition-all duration-300 group-hover:gap-3 group-hover:text-reef-gold">
                  <span>Inquire</span>
                  <FiArrowRight className="text-sm" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

