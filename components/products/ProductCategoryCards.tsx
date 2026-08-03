"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { productCategories } from "@/data/products";

interface ProductCategoryCardsProps {
  activeTab: string;
  animVisible: boolean;
}

function getFilteredCategories(activeTab: string) {
  if (activeTab === "all") return productCategories;
  if (activeTab === "dry-fruits") return productCategories.filter((c) => c.slug === "premium-dry-fruits");
  if (activeTab === "chocolates") return productCategories.filter((c) => c.slug === "artisanal-chocolates");
  if (activeTab === "hampers") return productCategories.filter((c) => c.slug === "celebration-hampers");
  return productCategories;
}

export function ProductCategoryCards({ activeTab, animVisible }: ProductCategoryCardsProps) {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-label="Product category cards"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
        {getFilteredCategories(activeTab).map((cat, idx) => (
          <article
            key={cat.slug}
            className={`group border border-reef-gold/20 bg-white transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_20px_60px_rgba(18,12,8,0.1)] ${animVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${idx * 120}ms` }}
          >
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative min-h-[260px] overflow-hidden bg-[#f8f5f0]">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute left-3 top-3 bg-[#7a0019] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                  Signature Line
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-reef-charcoal">
                    {cat.name}
                  </h2>
                  <p className="mt-3 text-xs leading-6 text-reef-charcoal/75">{cat.intro}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cat.highlights.map((h) => (
                      <span
                        key={h}
                        className="border border-reef-gold/20 bg-[#fcfbf8] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-reef-charcoal/70"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 border-t border-reef-gold/15 pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-reef-charcoal/50">
                    Contains {cat.items.length} Products
                  </p>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="mt-3 inline-flex w-full items-center justify-between border border-[#d4af37] bg-[#d4af37] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#1c1c1c] transition duration-200 hover:bg-[#7a0019] hover:border-[#7a0019] hover:text-white"
                  >
                    <span>Explore Collection</span> <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
