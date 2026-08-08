"use client";

import { FiArrowRight } from "react-icons/fi";

type SortOption = "featured" | "price-asc" | "price-desc" | "name";

interface ProductFilterBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
}

export default function ProductFilterBar({ activeTab, setActiveTab, sortBy, setSortBy }: ProductFilterBarProps) {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-12 sm:px-6 lg:px-8"
      aria-label="Product categories"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border border-reef-gold/20 bg-white p-4">
        <div className="flex flex-wrap items-center gap-2">
          {[{ id: "all", label: "All Collections" }, { id: "dry-fruits", label: "Dry Fruits & Nuts" }, { id: "chocolates", label: "Artisanal Chocolates" }, { id: "hampers", label: "Celebration Hampers" }].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition duration-200 ${activeTab === tab.id ? "bg-[#7a0019] text-white shadow-sm" : "border border-reef-gold/20 bg-[#fcfbf8] text-reef-charcoal hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1c1c1c]"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="border border-reef-gold/20 bg-[#fcfbf8] px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-reef-charcoal outline-none transition hover:border-[#d4af37]"
            aria-label="Sort products"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
          <a
            href="/contact#quote"
            className="inline-flex items-center gap-2 bg-[#d4af37] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#1c1c0c] transition hover:bg-[#7a0019] hover:text-white"
          >
            Bulk Quote Inquiry <FiArrowRight className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
}
