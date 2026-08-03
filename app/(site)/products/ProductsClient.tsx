"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiPlus,
  FiMinus,
  FiLock,
  FiPackage,
  FiShield,
  FiTruck,
  FiAward,
  FiBriefcase,
  FiHeart,
  FiGift,
  FiUsers,
  FiSmile,
  FiStar,
  FiShare2,
  FiTrendingUp,
  FiLayers,
  FiZap,
  FiFileText,
} from "react-icons/fi";
import { productCategories } from "../../../data/products";
import { Images } from "@/assets/images";
import dynamic from "next/dynamic";
const ProductsHero = dynamic(() => import("@/components/products/ProductsHero"), { ssr: false });

type OccasionFilter =
  | "all"
  | "corporate"
  | "wedding"
  | "festival"
  | "employee"
  | "milestone"
  | "personal";
type RecipientFilter =
  | "all"
  | "employees"
  | "clients"
  | "wedding"
  | "family"
  | "vip"
  | "events";
type SortOption = "featured" | "price-asc" | "price-desc" | "name";

export function ProductsClient() {
  const [activeTab, setActiveTab] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [occasionFilter, setOccasionFilter] = useState<OccasionFilter>("all");
  const [recipientFilter, setRecipientFilter] =
    useState<RecipientFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [animVisible, setAnimVisible] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setAnimVisible(true));
  }, []);

  const toggleFaq = useCallback((index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  }, []);

  const getFilteredCategories = () => {
    if (activeTab === "all") return productCategories;
    if (activeTab === "dry-fruits")
      return productCategories.filter((c) => c.slug === "premium-dry-fruits");
    if (activeTab === "chocolates")
      return productCategories.filter((c) => c.slug === "artisanal-chocolates");
    if (activeTab === "hampers")
      return productCategories.filter((c) => c.slug === "celebration-hampers");
    return productCategories;
  };

  const filteredOccasions =
    occasionFilter === "all"
      ? occasions
      : occasions.filter((o) => {
          if (occasionFilter === "corporate")
            return (
              o.title === "Corporate Gifting" || o.title === "Client Milestones"
            );
          if (occasionFilter === "wedding")
            return o.title === "Wedding Favours";
          if (occasionFilter === "festival")
            return o.title === "Festival Gifts";
          if (occasionFilter === "employee")
            return o.title === "Employee Onboarding";
          if (occasionFilter === "milestone")
            return o.title === "Client Milestones";
          if (occasionFilter === "personal")
            return o.title === "Personal Celebrations";
          return true;
        });

  const filteredRecipients =
    recipientFilter === "all"
      ? recipients
      : recipients.filter((r) => {
          if (recipientFilter === "employees")
            return r.name === "For Employees";
          if (recipientFilter === "clients")
            return r.name === "For Key Clients";
          if (recipientFilter === "wedding")
            return r.name === "For Wedding Guests";
          if (recipientFilter === "family")
            return r.name === "For Family & Friends";
          if (recipientFilter === "vip") return r.name === "For VIP Partners";
          if (recipientFilter === "events")
            return r.name === "For Event Attendees";
          return true;
        });

  const sortedBestSellers = [...bestSellers].sort((a, b) => {
    if (sortBy === "price-asc")
      return parsePrice(a.price) - parsePrice(b.price);
    if (sortBy === "price-desc")
      return parsePrice(b.price) - parsePrice(a.price);
    if (sortBy === "name") return a.title.localeCompare(b.title);
    return 0;
  });

  const parsePrice = (price: string) => {
    const match = price.match(/[\d,]+/);
    return match ? parseInt(match[0].replace(/,/g, ""), 10) : 0;
  };

  const handleWhatsAppShare = (product: string) => {
    const text = `Hi Reet Foods, I'm interested in "${product}" for gifting. Can you share details and pricing?`;
    window.open(
      `https://wa.me/919890609611?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handlePartnerShare = () => {
    const text =
      "Partner with Reet Foods for premium luxury gifting solutions. FSSAI certified, custom branding, Pan-India delivery.";
    window.open(
      `https://wa.me/919890609611?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="bg-[#fbf7f1] text-[#1c1c1c]">
      <ProductsHero animVisible={animVisible} />
      

      {/* ════════════════════════════════════════════════════════
          TASK 3: SHOP BY OCCASION / RECIPIENT FILTERS
          ════════════════════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
        aria-label="Shop by occasion and recipient"
      >
        <div className="mb-10 text-center px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
            Curated for Every Moment
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
            Shop by Occasion &amp; Recipient
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-reef-charcoal/70">
            Find the perfect gift curation designed for corporate milestones,
            weddings, festivals, or personal celebrations.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Occasion Filters */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-5">
              {(
                [
                  "all",
                  "corporate",
                  "wedding",
                  "festival",
                  "employee",
                  "milestone",
                  "personal",
                ] as OccasionFilter[]
              ).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setOccasionFilter(filter)}
                  className={`px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition duration-200 ${occasionFilter === filter ? "bg-[#7a0019] text-white shadow-sm" : "border border-reef-gold/20 bg-[#fcfbf8] text-reef-charcoal hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1c1c1c]"}`}
                >
                  {filter === "all"
                    ? "All Occasions"
                    : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {filteredOccasions.map((item) => {
                const IconComp = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-start gap-4 border border-reef-gold/20 bg-white p-5 transition duration-300 hover:border-[#d4af37] hover:bg-[#fcfbf8]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#7a0019]">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-reef-charcoal/70">
                        {item.subtitle}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7a0019] transition-all duration-300 group-hover:gap-2 group-hover:text-[#d4af37]">
                        View Catalog <FiArrowRight className="text-xs" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Recipient Filters */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-5">
              {(
                [
                  "all",
                  "employees",
                  "clients",
                  "wedding",
                  "family",
                  "vip",
                  "events",
                ] as RecipientFilter[]
              ).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setRecipientFilter(filter)}
                  className={`px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition duration-200 ${recipientFilter === filter ? "bg-[#7a0019] text-white shadow-sm" : "border border-reef-gold/20 bg-[#fcfbf8] text-reef-charcoal hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1c1c1c]"}`}
                >
                  {filter === "all"
                    ? "All Recipients"
                    : filter === "employees"
                      ? "For Employees"
                      : filter === "clients"
                        ? "For Clients"
                        : filter === "wedding"
                          ? "For Weddings"
                          : filter === "family"
                            ? "For Family"
                            : filter === "vip"
                              ? "For VIPs"
                              : "For Events"}
                </button>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {filteredRecipients.map((r) => (
                <div
                  key={r.name}
                  className="border border-reef-gold/20 bg-white p-5 transition duration-300 hover:border-[#d4af37]"
                >
                  <div className="flex items-center justify-between">
                    <span className="bg-[#7a0019]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7a0019]">
                      {r.count}
                    </span>
                    <FiStar className="text-[#d4af37]" />
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal">
                    {r.name}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-reef-charcoal/75">
                    {r.desc}
                  </p>
                  <Link
                    href="/contact#quote"
                    className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7a0019] hover:text-[#d4af37]"
                  >
                    Inquire <FiArrowRight />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TASK 2: INTERACTIVE FILTER TABS & PRODUCT CATEGORY CARDS
          ════════════════════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-[1440px] px-4 pb-12 sm:px-6 lg:px-8"
        aria-label="Product categories"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border border-reef-gold/20 bg-white p-4">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Collections" },
              { id: "dry-fruits", label: "Dry Fruits & Nuts" },
              { id: "chocolates", label: "Artisanal Chocolates" },
              { id: "hampers", label: "Celebration Hampers" },
            ].map((tab) => (
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
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 bg-[#d4af37] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#1c1c1c] transition hover:bg-[#7a0019] hover:text-white"
            >
              Bulk Quote Inquiry <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TASK 2: MAIN PRODUCT CATEGORY CARDS with hover effects
          ════════════════════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
        aria-label="Product category cards"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {getFilteredCategories().map((cat, idx) => (
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
                    <p className="mt-3 text-xs leading-6 text-reef-charcoal/75">
                      {cat.intro}
                    </p>
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

      {/* ════════════════════════════════════════════════════════
          TASK 4: BEST SELLERS SECTION with responsive cards & CTAs
          ════════════════════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
        aria-label="Best sellers"
      >
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
              Customer Favorites
            </p>
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
          {sortedBestSellers.map((item, idx) => (
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
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d4af37]">
                  {item.category}
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-reef-charcoal/70">
                  {item.desc}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-reef-gold/15 pt-3">
                  <span className="text-sm font-bold text-[#7a0019]">
                    {item.price}
                  </span>
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

      {/* ════════════════════════════════════════════════════════
          TASK 5: PACKAGING OPTIONS with iconography & customization
          ════════════════════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
        aria-label="Packaging options"
      >
        <div className="border border-reef-gold/20 bg-white p-8 sm:p-12">
          <div className="mb-10 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
              Bespoke Craftsmanship
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
              Packaging Options
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-reef-charcoal/70">
              Choose from our curated library of luxury box architectures and
              custom finishes.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Metallic Gold Tin",
                desc: "Air-tight nitrogen sealed metal tins for maximum shelf life.",
                tag: "Airtight",
                icon: FiLock,
              },
              {
                title: "Handcrafted Wooden Box",
                desc: "Sustainable pine wood with brass latch and custom laser engraving.",
                tag: "Eco Luxury",
                icon: FiPackage,
              },
              {
                title: "Rigid Magnetic Box",
                desc: "High-density rigid cardboard with magnetic flap and velvet insert.",
                tag: "Premium",
                icon: FiLayers,
              },
              {
                title: "Satin Ribbon Gift Box",
                desc: "Classic rigid box finished with hand-tied satin ribbons and cards.",
                tag: "Festive",
                icon: FiGift,
              },
              {
                title: "Custom Sleeve Packaging",
                desc: "Full-bleed printed corporate sleeves matching your brand guidelines.",
                tag: "B2B Branded",
                icon: FiFileText,
              },
            ].map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div
                  key={p.title}
                  className={`border border-reef-gold/20 bg-[#fcfbf8] p-6 text-center transition-all duration-500 hover:border-[#d4af37] hover:bg-white hover:shadow-lg ${animVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#7a0019]">
                    <IconComp className="h-7 w-7" />
                  </div>
                  <span className="mt-4 inline-block bg-[#7a0019] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white">
                    {p.tag}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-reef-charcoal/70">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Custom Branding Features */}
          <div className="mt-12 border-t border-reef-gold/15 pt-10">
            <h3 className="text-center font-[family-name:var(--font-playfair)] text-xl font-bold text-reef-charcoal sm:text-2xl">
              Custom Branding Services
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-reef-charcoal/70">
              Integrate your company identity seamlessly across every gift box
              with our in-house laser and printing lab.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
              {[
                {
                  title: "Laser Logo Engraving",
                  desc: "Precision laser etching of corporate logos directly on wooden & metal box lids.",
                },
                {
                  title: "Custom Ribbon Printing",
                  desc: "High-density screen printed satin ribbons featuring your brand name & colors.",
                },
                {
                  title: "Personalized Greeting Cards",
                  desc: "Custom card inserts with individually printed recipient names and messages.",
                },
                {
                  title: "Branded Outer Sleeves",
                  desc: "Custom designed cardboard sleeves with metallic foil foil-stamping.",
                },
                {
                  title: "Custom Chocolate Wrappers",
                  desc: "Individual chocolate wrapper printing with corporate logos or event dates.",
                },
              ].map((b, idx) => (
                <div
                  key={b.title}
                  className={`border border-reef-gold/20 bg-white p-6 transition-all duration-300 hover:border-[#d4af37] ${animVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-reef-charcoal/75">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TASK 6: ENHANCED BULK ORDERS with ROI-focused content
          ════════════════════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
        aria-label="Bulk orders"
      >
        <div className="bg-[#111111] p-8 text-white sm:p-14 border border-reef-gold/30">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
                Bulk Orders &amp; Corporate Concierge
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl">
                Need 50+ Custom Gift Boxes?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80">
                Get direct factory pricing, dedicated account management, custom
                logo mockups, and doorstep Pan-India dispatch.
              </p>

              {/* ROI-focused content */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: FiTrendingUp,
                    title: "Volume Discounts",
                    desc: "Up to 35% off on orders of 500+ units with tiered pricing.",
                  },
                  {
                    icon: FiZap,
                    title: "Fast Turnaround",
                    desc: "24-hour quote turnaround with sample delivery in 3-5 days.",
                  },
                  {
                    icon: FiShield,
                    title: "Quality Guarantee",
                    desc: "FSSAI-certified facility with nitrogen-sealed freshness assurance.",
                  },
                  {
                    icon: FiTruck,
                    title: "Pan-India Delivery",
                    desc: "Temperature-controlled cold-chain with zero-melting guarantee.",
                  },
                ].map((roi) => {
                  const IconComp = roi.icon;
                  return (
                    <div
                      key={roi.title}
                      className="flex items-start gap-3 border border-white/10 bg-white/5 p-4 transition hover:border-[#d4af37]/40"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37]">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {roi.title}
                        </h4>
                        <p className="mt-1 text-xs leading-5 text-white/70">
                          {roi.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 border border-white/15 bg-white/5 p-8 text-center">
              <div className="h-24 w-24 border border-[#d4af37]/30 bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <FiBriefcase className="h-12 w-12" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
                Corporate Partnership
              </h3>
              <p className="text-sm leading-6 text-white/70">
                Become a preferred gifting partner. Enjoy exclusive pricing,
                priority production, and dedicated concierge support.
              </p>
              <div className="mt-2 flex flex-col gap-3">
                <a
                  href="https://wa.me/919890609611?text=Hi%20Reet%20Foods%2C%20I%20am%20interested%20in%20becoming%20a%20gifting%20partner"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#25d366] bg-[#25d366] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#20ba57]"
                >
                  Partner With Us on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={handlePartnerShare}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#7a0019] transition hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-[#1c1c1c]"
                >
                  <FiShare2 className="text-sm" /> Share Partnership Opportunity
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TASK 7: TRUST INDICATORS (FSSAI / ISO)
          ════════════════════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
        aria-label="Trust indicators"
      >
        <div className="border border-reef-gold/20 bg-white p-8 sm:p-12">
          <div className="mb-10 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
              Our Standards
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
              Certified Excellence
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-reef-charcoal/70">
              Adhering to the highest global standards in food safety,
              manufacturing, and quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {[
              {
                name: "FSSAI Certified",
                desc: "License #11521034000123 — Full food safety compliance.",
                icon: FiShield,
                isFssai: true,
              },
              {
                name: "ISO 22000",
                desc: "International food safety management system certified.",
                icon: FiAward,
              },
              {
                name: "HACCP Compliant",
                desc: "Hazard analysis and critical control points in production.",
                icon: FiCheckCircle,
              },
              {
                name: "Vegetarian Society",
                desc: "100% vegetarian certified with green dot emblem.",
                icon: FiStar,
              },
            ].map((cert, idx) => {
              const IconComp = cert.icon;
              return (
                <div
                  key={cert.name}
                  className={`group flex flex-col items-center gap-4 border border-reef-gold/15 bg-white p-7 text-center transition-all duration-300 hover:border-reef-gold/40 hover:bg-reef-cream ${animVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex h-16 w-16 items-center justify-center border border-[#d4af37]/25 bg-[#fdf8ee] transition duration-300 group-hover:bg-[#d4af37]/20">
                    <IconComp className="h-8 w-8 text-[#c8a84b] transition duration-300 group-hover:text-[#7a0019]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-reef-charcoal">
                      {cert.name}
                    </h3>
                    {cert.isFssai && (
                      <span className="mt-1 inline-block bg-reef-burgundy/10 text-[#7a0019] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                        Lic. #11521034000123
                      </span>
                    )}
                    <p className="mt-1.5 text-[12px] leading-5 text-reef-charcoal/70">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust ribbon */}
          <div className="mt-12 border-t border-reef-gold/10 pt-8 overflow-hidden relative w-full">
            <div className="flex gap-16 reef-marquee whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              <div className="flex shrink-0 gap-16 justify-around min-w-full">
                <span>· 100% Vegetarian</span>
                <span>· Dust-Free Cleanroom</span>
                <span>· Zero Artificial Preservatives</span>
                <span>· Nitrogen Sealed Freshness</span>
                <span>· Insured Cold-Chain Shipping</span>
                <span>· FSSAI Certified</span>
                <span>· ISO 22000</span>
              </div>
              <div
                className="flex shrink-0 gap-16 justify-around min-w-full"
                aria-hidden="true"
              >
                <span>· 100% Vegetarian</span>
                <span>· Dust-Free Cleanroom</span>
                <span>· Zero Artificial Preservatives</span>
                <span>· Nitrogen Sealed Freshness</span>
                <span>· Insured Cold-Chain Shipping</span>
                <span>· FSSAI Certified</span>
                <span>· ISO 22000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TASK 8: FAQ SECTION with schema markup
          ════════════════════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
        aria-label="Frequently asked questions"
      >
        <div className="border border-reef-gold/20 bg-white p-8 sm:p-12">
          <div className="mb-10 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
              Product Guidance
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-reef-gold/15 border border-reef-gold/15 bg-white">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal transition hover:text-[#7a0019]"
                  aria-expanded={openFaq === index}
                >
                  <span className="pr-4">{faq.q}</span>
                  <span className="shrink-0 text-[#d4af37]">
                    {openFaq === index ? (
                      <FiMinus className="h-5 w-5" />
                    ) : (
                      <FiPlus className="h-5 w-5" />
                    )}
                  </span>
                </button>
                {openFaq === index && (
                  <p className="px-6 pb-6 text-xs leading-7 text-reef-charcoal/80">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              name: "Frequently Asked Questions — Reet Foods Products",
              url: "https://reetfoods.com/products",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </section>

      {/* ════════════════════════════════════════════════════════
          TASK 9: RELATED COLLECTIONS / BLOGS for cross-selling
          ════════════════════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
        aria-label="Related collections"
      >
        <div className="mb-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
            Explore More
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
            Related Collections
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-reef-charcoal/70">
            Discover complementary gifting solutions and inspiration for your
            next event.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Corporate Gifting Solutions",
              desc: "Tailored bulk gifting programmes for teams, clients, and corporate events with custom branding.",
              href: "/corporate-gifting",
              badge: "Corporate",
              image: Images.topViewDeskNuts,
            },
            {
              title: "Festive Celebration Hampers",
              desc: "Curated red and gold hampers with cards, ribbons and custom brand storytelling for every occasion.",
              href: "/products/categories/celebration-hampers",
              badge: "Festive",
              image: Images.topViewDiffNuts,
            },
            {
              title: "Gifting Guides & Inspiration",
              desc: "Expert tips on selecting the perfect gift for weddings, corporate events, and festivals.",
              href: "/blog",
              badge: "Blog",
              image: Images.driedFruitsCounter,
            },
          ].map((item, idx) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group block border border-reef-gold/20 bg-white transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_16px_48px_rgba(18,12,8,0.12)] ${animVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="relative h-52 overflow-hidden bg-[#f8f5f0]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute left-3 top-3 bg-[#7a0019] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                  {item.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal group-hover:text-[#7a0019] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-reef-charcoal/70">
                  {item.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7a0019] group-hover:text-[#d4af37] transition-colors duration-200">
                  Explore <FiArrowRight className="text-xs" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TASK 10: PARTNER-SHARING CTA with WhatsApp integration
          ════════════════════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
        aria-label="Partner sharing and final CTA"
      >
        <div className="bg-[#111111] p-8 text-center text-white sm:p-14 border border-reef-gold/30">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
            Concierge Assistance
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl">
            Can&apos;t Find the Perfect Gift?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/80">
            Talk directly to our master gifting curators to build custom hampers
            within your exact budget and timeline.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact#quote"
              className="bg-[#d4af37] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#1c1c1c] transition hover:bg-white hover:text-[#1c1c1c]"
            >
              Get Custom Quote
            </Link>
            <a
              href="https://wa.me/919890609611?text=Hi%20Reet%20Foods%2C%20I%20need%20custom%20gifting%20help"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-[#25d366] bg-[#25d366] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#20ba57]"
            >
              WhatsApp Specialist
            </a>
            <Link
              href="/contact#catalog"
              className="border-2 border-white bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#7a0019] transition hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-[#1c1c1c]"
            >
              Download Catalogue
            </Link>
          </div>

          {/* Partner-sharing CTA */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
              Partner With Reet Foods
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
              Become a Gifting Partner
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70">
              Share our luxury gifting collection with your network and earn
              exclusive commissions on every referral.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={handlePartnerShare}
                className="inline-flex items-center gap-2 border-2 border-[#25d366] bg-[#25d366] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#20ba57]"
              >
                <FiShare2 className="text-sm" /> Share Partnership on WhatsApp
              </button>
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 border-2 border-white bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#7a0019] transition hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-[#1c1c1c]"
              >
                Request Partner Kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TASK 10: FLOATING WhatsApp CTA (persistent)
          ════════════════════════════════════════════════════════ */}
      <a
        href="https://wa.me/919890609611?text=Hi%20Reet%20Foods%2C%20I%20need%20product%20gifting%20help"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-3 pr-6 text-xs font-bold uppercase tracking-[0.14em] text-[#25d366] shadow-lg transition hover:bg-[#25d366] hover:text-white hover:shadow-xl md:bottom-8 md:right-8"
        aria-label="Chat with Reet Foods on WhatsApp"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Chat on WhatsApp
      </a>
    </div>
  );
}

// ── Data constants ──────────────────────────────────────────

const occasions = [
  {
    title: "Corporate Gifting",
    subtitle: "Client & Partner Appreciation",
    icon: FiBriefcase,
    href: "/contact#quote",
  },
  {
    title: "Wedding Favours",
    subtitle: "Luxury Wedding Keepsakes",
    icon: FiHeart,
    href: "/contact#quote",
  },
  {
    title: "Festival Gifts",
    subtitle: "Diwali, New Year & Eid Curations",
    icon: FiGift,
    href: "/products/categories/celebration-hampers",
  },
  {
    title: "Employee Onboarding",
    subtitle: "Welcome Kits & Rewards",
    icon: FiUsers,
    href: "/contact#quote",
  },
  {
    title: "Client Milestones",
    subtitle: "High-Value Relationship Gifting",
    icon: FiAward,
    href: "/contact#quote",
  },
  {
    title: "Personal Celebrations",
    subtitle: "Anniversaries & Special Days",
    icon: FiSmile,
    href: "/products/categories/artisanal-chocolates",
  },
];

const recipients = [
  {
    name: "For Employees",
    desc: "Motivate and reward teams with healthy nut tins & artisanal chocolates.",
    count: "15+ Hampers",
  },
  {
    name: "For Key Clients",
    desc: "Build lasting corporate trust with laser-branded magnetic gift boxes.",
    count: "20+ Curations",
  },
  {
    name: "For Wedding Guests",
    desc: "Handcrafted royal wedding favours with custom foil-stamped notes.",
    count: "12+ Designs",
  },
  {
    name: "For Family & Friends",
    desc: "Festive dry fruit hampers curated for home celebrations and joy.",
    count: "18+ Boxes",
  },
  {
    name: "For VIP Partners",
    desc: "Ultra-luxury gift hampers featuring origin saffron, dates & dark truffles.",
    count: "10+ Premium Sets",
  },
  {
    name: "For Event Attendees",
    desc: "Sleek mini dry fruit jars and juice bottles for conferences and expos.",
    count: "25+ Options",
  },
];

const bestSellers = [
  {
    title: "Royal Pistachio & Cashew Gold Tin",
    category: "Dry Fruits",
    price: "₹1,499 / Box",
    image: productCategories[0].image,
    badge: "Best Seller",
    desc: "Handpicked Iranian pistachios and Jumbo W240 cashews in a nitrogen-sealed metallic gold tin.",
  },
  {
    title: "Artisanal Belgian Truffle Assortment",
    category: "Chocolates",
    price: "₹1,299 / Box",
    image: productCategories[1].image,
    badge: "Most Loved",
    desc: "12 pieces of hand-poured 70% dark Belgian chocolates with nut pralines in a magnetic rigid box.",
  },
  {
    title: "Grande Corporate Executive Hamper",
    category: "Celebration Hampers",
    price: "₹3,499 / Box",
    image: productCategories[2].image,
    badge: "Corporate Choice",
    desc: "Dry fruit quartet, artisanal chocolate bark, cold-pressed elixir, and custom laser-engraved wooden box.",
  },
  {
    title: "Kashmiri Saffron & Date Luxe Box",
    category: "Dry Fruits",
    price: "₹2,199 / Box",
    image: productCategories[0].image,
    badge: "Festive Exclusive",
    desc: "Organic Medjool dates stuffed with roasted almonds and organic Kashmiri saffron strands.",
  },
];

const faqs = [
  {
    q: "What is the Minimum Order Quantity (MOQ) for corporate bulk orders?",
    a: "Our standard bulk ordering MOQ starts at just 10 units for dry fruit boxes and 15 units for custom branded corporate hampers. We also handle large-scale orders up to 50,000 units with Pan-India doorstep delivery.",
  },
  {
    q: "Can we print our corporate logo and personalized message on the gift boxes?",
    a: "Yes! We specialize in custom corporate branding. Options include laser lid engraving, custom foil logo stamping, printed chocolate wrappers, branded satin ribbons, and custom greeting cards.",
  },
  {
    q: "How do you ensure freshness during transportation across India?",
    a: "All dry fruits are nitrogen-flushed to prevent oxidation. Chocolates are shipped in temperature-controlled, insulated cold-chain packaging with gel ice packs to ensure zero melting during transit.",
  },
  {
    q: "Can we request a sample box before committing to a bulk order?",
    a: "Absolutely. Corporate clients and event planners can request sample boxes delivered directly to their office address. Contact our sales team via WhatsApp or the quote form to request your sample.",
  },
  {
    q: "What is the typical shelf life of Reet Foods gifting items?",
    a: "Our nitrogen-sealed dry fruit tins remain fresh for up to 12 months. Artisanal chocolates have a shelf life of 6 months when stored in cool conditions.",
  },
];
