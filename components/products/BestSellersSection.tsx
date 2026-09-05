"use client";

import Image from "next/image";
import Link from "next/link";
import { FiShare2 } from "react-icons/fi";
import { productCategories } from "@/data/products";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

type SortOption = "featured" | "price-asc" | "price-desc" | "name";

const bestSellers = [
  { title: "Royal Pistachio & Cashew Gold Tin", category: "Dry Fruits", price: "Rs.1,499 / Box", image: productCategories[0].image, badge: "Best Seller", desc: "Handpicked Iranian pistachios and Jumbo W240 cashews in a food-grade airtight metallic gold tin." },

  { title: "Artisanal Truffle Assortment", category: "Chocolates", price: "Rs.1,299 / Box", image: productCategories[1].image, badge: "Most Loved", desc: "12 pieces of hand-poured dark chocolates with nut pralines in a magnetic rigid box." },
  { title: "Grande Corporate Executive Hamper", category: "Celebration Hampers", price: "Rs.3,499 / Box", image: productCategories[2].image, badge: "Corporate Choice", desc: "Dry fruit quartet, artisanal chocolate bark, cold-pressed elixir, and custom laser-engraved wooden box." },
  { title: "Kashmiri Saffron & Date Luxe Box", category: "Dry Fruits", price: "Rs.2,199 / Box", image: productCategories[0].image, badge: "Festive Exclusive", desc: "Organic Medjool dates stuffed with roasted almonds and organic Kashmiri saffron strands." },
];

function parsePrice(price: string) {
  const match = price.match(/[\d,]+/);
  return match ? parseInt(match[0].replace(/,/g, ""), 10) : 0;
}

interface BestSellersSectionProps {
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  animVisible: boolean;
}

export function BestSellersSection({ sortBy, setSortBy, animVisible }: BestSellersSectionProps) {
  const sorted = [...bestSellers].sort((a, b) => {
    if (sortBy === "price-asc") return parsePrice(a.price) - parsePrice(b.price);
    if (sortBy === "price-desc") return parsePrice(b.price) - parsePrice(a.price);
    if (sortBy === "name") return a.title.localeCompare(b.title);
    return 0;
  });

  const handleWhatsAppShare = (product: string) => {
    const text = `Hi Reet Foods, I'm interested in "${product}" for gifting. Can you share details and pricing?`;
    window.open(generateWhatsAppUrl({ type: "product", data: { productName: product, requirement: text } }), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-label="Best sellers"
    >
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">Customer Favorites</p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
            Best Sellers Collection
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="border border-reef-gold/20 bg-white px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-reef-charcoal outline-none transition hover:border-[#d4af37]"
            aria-label="Sort best sellers"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
          <Link
            href="/contact#quote"
            className="border border-[#d4af37] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#7a0019] transition hover:bg-[#7a0019] hover:text-white"
          >
            Download Price List
          </Link>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sorted.map((item, idx) => (
          <div
            key={item.title}
            className={`group border border-reef-gold/20 bg-white p-5 transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_16px_48px_rgba(18,12,8,0.12)] ${animVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="relative h-56 overflow-hidden bg-[#f8f5f0]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 bg-[#7a0019] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                {item.badge}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  type="button"
                  onClick={() => handleWhatsAppShare(item.title)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25d366] text-white shadow-md transition hover:bg-[#20ba57]"
                  aria-label={`Share ${item.title} on WhatsApp`}
                >
                  <FiShare2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d4af37]">{item.category}</p>
              <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">{item.title}</h3>
              <p className="mt-2 text-xs leading-5 text-reef-charcoal/70">{item.desc}</p>
              <div className="mt-4 flex items-center justify-between border-t border-reef-gold/15 pt-3">
                <span className="text-sm font-bold text-[#7a0019]">{item.price}</span>
                <Link
                  href="/contact#quote"
                  className="bg-[#d4af37] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1c1c1c] transition duration-200 hover:bg-[#7a0019] hover:text-white"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
