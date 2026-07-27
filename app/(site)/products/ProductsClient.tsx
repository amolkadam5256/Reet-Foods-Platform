"use client";

import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiPlus,
  FiMinus,
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
} from "react-icons/fi";
import {
  productCategories,
} from "../../../data/products";
import { Images } from "@/assets/images";

export function ProductsClient() {
  const [activeTab, setActiveTab] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  // Filter products by selected tab
  const getFilteredCategories = () => {
    if (activeTab === "all") return productCategories;
    if (activeTab === "dry-fruits")
      return productCategories.filter((c) => c.slug === "premium-dry-fruits");
    if (activeTab === "chocolates")
      return productCategories.filter((c) => c.slug === "artisanal-chocolates");
    if (activeTab === "juices")
      return productCategories.filter((c) => c.slug === "cold-pressed-juices");
    if (activeTab === "hampers")
      return productCategories.filter((c) => c.slug === "celebration-hampers");
    return productCategories;
  };

  // Best sellers list
  const bestSellers: Array<{
    title: string;
    category: string;
    price: string;
    image: StaticImageData;
    badge: string;
    desc: string;
  }> = [
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
      image: productCategories[3].image,
      badge: "Corporate Choice",
      desc: "Dry fruit quartet, artisanal chocolate bark, cold-pressed elixir, and custom laser-engraved wooden box.",
    },
    {
      title: "Kashmiri Saffron & Date Luxe Box",
      category: "Dry Fruits",
      price: "₹2,199 / Box",
      image: productCategories[2].image,
      badge: "Festive Exclusive",
      desc: "Organic Medjool dates stuffed with roasted almonds and organic Kashmiri saffron strands.",
    },
  ];

  // New arrivals list
  const newArrivals = [
    {
      title: "Gold-Embossed Laser Cut Wooden Box",
      category: "Luxury Packaging",
      image: Images.woodenBoxNuts,
      desc: "Handcrafted pine wooden box with custom logo engraving, gold brass latch, and velvet lining.",
    },
    {
      title: "Cold-Pressed Fruit Elixir Wellness Set",
      category: "Cold-Pressed Juices",
      image: Images.topViewDriedFruits,
      desc: "Pack of 6 glass-bottled wellness juices with zero refined sugar and 100% natural fruit pulp.",
    },
    {
      title: "Roasted Nut Trio & Dark Chocolate Bark",
      category: "Gourmet Hampers",
      image: Images.topViewDiffNuts,
      desc: "Slow-roasted salted almonds, smoked cashews, and sea-salt dark chocolate slabs.",
    },
  ];

  // Shop by Occasion items
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

  // Shop by Recipient items
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

  // Packaging options
  const packagingStyles = [
    {
      title: "Metallic Gold Tin",
      desc: "Air-tight nitrogen sealed metal tins for maximum shelf life.",
      tag: "Airtight",
    },
    {
      title: "Handcrafted Wooden Box",
      desc: "Sustainable pine wood with brass latch and custom laser engraving.",
      tag: "Eco Luxury",
    },
    {
      title: "Rigid Magnetic Box",
      desc: "High-density rigid cardboard with magnetic flap and velvet insert.",
      tag: "Premium",
    },
    {
      title: "Satin Ribbon Gift Box",
      desc: "Classic rigid box finished with hand-tied satin ribbons and cards.",
      tag: "Festive",
    },
    {
      title: "Custom Sleeve Packaging",
      desc: "Full-bleed printed corporate sleeves matching your brand guidelines.",
      tag: "B2B Branded",
    },
  ];

  // Custom Branding Features
  const brandingFeatures = [
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
  ];

  // Comparison Matrix Data
  const comparisonData = [
    {
      feature: "Primary Focus",
      dryFruits: "Health & Tradition",
      chocolates: "Indulgence & Craft",
      giftBoxes: "Elegance & Variety",
      hampers: "Grand Celebration",
    },
    {
      feature: "Shelf Life",
      dryFruits: "12 Months (Sealed)",
      chocolates: "6 Months (Chilled)",
      giftBoxes: "9 Months",
      hampers: "6 to 9 Months",
    },
    {
      feature: "Packaging Type",
      dryFruits: "Nitrogen Tin / Box",
      chocolates: "Magnetic Rigid Box",
      giftBoxes: "Wooden / Metal Box",
      hampers: "Tiered Luxury Basket",
    },
    {
      feature: "Custom Branding",
      dryFruits: "Tin Sticker / Band",
      chocolates: "Wrapper & Lid Foil",
      giftBoxes: "Laser Engraved Lid",
      hampers: "Branded Card & Ribbon",
    },
    {
      feature: "Min Order (MOQ)",
      dryFruits: "10 Units",
      chocolates: "25 Units",
      giftBoxes: "15 Units",
      hampers: "5 Units",
    },
  ];

  // Product FAQs
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
      a: "Absoluty. Corporate clients and event planners can request sample boxes delivered directly to their office address. Contact our sales team via WhatsApp or the quote form to request your sample.",
    },
    {
      q: "What is the typical shelf life of Reet Foods gifting items?",
      a: "Our nitrogen-sealed dry fruit tins remain fresh for up to 12 months. Artisanal chocolates have a shelf life of 6 months when stored in cool conditions.",
    },
  ];

  return (
    <div className="bg-[#fbf7f1] text-[#1c1c1c]">
      {/* ── CREATIVE LUXURY HERO SECTION ─────────────────────────────── */}
      <section className="relative bg-[#111111] text-white overflow-hidden border-b border-[#d4af37]/30">
        {/* Subtle background radial glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, #d4af37 0%, transparent 50%), radial-gradient(circle at 80% 60%, #7a0019 0%, transparent 50%)",
          }}
        />

        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left Column: Heading & CTAs */}
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
                <span className="h-px w-8 bg-[#d4af37]" />
                Curated Luxury Gifting Hub
              </p>

              <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-5xl">
                Premium Dry Fruits, Chocolates & Luxury Gift Boxes
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/85 sm:text-base">
                Discover our complete collection of handpicked origin dry
                fruits, artisanal Belgian chocolates, and bespoke corporate gift
                hampers. Packed in our FSSAI-certified facility in Pune with
                nitrogen preservation, custom laser logo engraving, and insured
                Pan-India delivery.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 border-2 border-[#d4af37] bg-[#d4af37] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#1c1c1c] shadow-md transition duration-200 hover:bg-white hover:border-white hover:text-[#1c1c1c]"
                >
                  Request Bulk Quote <FiArrowRight className="text-sm" />
                </Link>
                <Link
                  href="/contact#catalog"
                  style={{ color: "#1c1c1c" }}
                  className="inline-flex items-center gap-2 border-2 border-white bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#1c1c1c] shadow-md transition duration-200 hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-[#1c1c1c]"
                >
                  Download Catalogue
                </Link>
                <a
                  href="https://wa.me/919890609611?text=Hi%20Reet%20Foods%2C%20I%20need%20product%20gifting%20help"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#25d366] bg-[#25d366] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-md transition duration-200 hover:bg-[#20ba57] hover:border-[#20ba57]"
                >
                  Talk to Specialist
                </a>
              </div>

              {/* Stats Bar */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/15 pt-6 sm:grid-cols-4">
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#d4af37]">
                    500K+
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
                    Boxes Delivered
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#d4af37]">
                    FSSAI
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
                    Certified Grade
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#d4af37]">
                    24 Hours
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
                    Quote Turnaround
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#d4af37]">
                    100%
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
                    Pan-India Shipping
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="relative min-h-[360px] overflow-hidden border border-white/20 bg-[#1c1c1c] sm:min-h-[460px]">
              <Image
                src={Images.nutsSetTable}
                alt="Reet Foods luxury dry fruits and chocolate gifting collection"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-4 left-4 bg-[#7a0019] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-md">
                Handcrafted In Pune
              </div>

              <div className="absolute bottom-6 left-6 right-6 border border-white/20 bg-black/60 p-4 backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d4af37]">
                  Featured Heritage Curation
                </p>
                <p className="mt-1 font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
                  Signature Origin Nut Quartet & Truffle Set
                </p>
                <p className="mt-1 text-xs text-white/80 line-clamp-1">
                  Nitrogen-flushed almond tin, cashew box, pistachio tin &
                  Belgian dark truffles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Interactive Filter Tabs & Search Bar ─────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border border-reef-gold/20 bg-white p-4">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Collections" },
              { id: "dry-fruits", label: "Dry Fruits & Nuts" },
              { id: "chocolates", label: "Artisanal Chocolates" },
              { id: "hampers", label: "Celebration Hampers" },
              { id: "juices", label: "Cold-Pressed Juices" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={[
                  "px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition duration-200",
                  activeTab === tab.id
                    ? "bg-[#7a0019] text-white shadow-sm"
                    : "border border-reef-gold/20 bg-[#fcfbf8] text-reef-charcoal hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1c1c1c]",
                ].join(" ")}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <Link
            href="/contact#quote"
            className="inline-flex items-center gap-2 bg-[#d4af37] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#1c1c1c] transition hover:bg-[#7a0019] hover:text-white"
          >
            Bulk Quote Inquiry <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* ── SECTION 3: Main Product Categories Grid ────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {getFilteredCategories().map((cat) => (
            <article
              key={cat.slug}
              className="group border border-reef-gold/20 bg-white transition duration-300 hover:border-[#d4af37]"
            >
              <div className="grid gap-0 md:grid-cols-2">
                <div className="relative min-h-[260px] overflow-hidden bg-[#f8f5f0]">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 bg-[#7a0019] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    Signature Line
                  </div>
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
                      className="mt-3 inline-flex w-full items-center justify-between border border-[#d4af37] bg-[#d4af37] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#1c1c1c] transition hover:bg-[#7a0019] hover:border-[#7a0019] hover:text-white"
                    >
                      <span>Explore Collection</span>
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: Shop by Occasion ⭐ ────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="border border-reef-gold/20 bg-white p-8 sm:p-12">
          <div className="mb-10 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
              Tailored Selection
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
              Shop by Occasion
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-reef-charcoal/70">
              Select the ideal gift curation designed specifically for corporate
              milestones, weddings, and festive celebrations.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {occasions.map((item) => {
              const IconComp = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col justify-between border border-reef-gold/20 bg-[#fcfbf8] p-6 transition duration-300 hover:border-[#d4af37] hover:bg-white"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#7a0019]">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-xl font-bold text-reef-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-reef-charcoal/70">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7a0019] transition-all duration-300 group-hover:gap-3 group-hover:text-[#d4af37]">
                    <span>View Occasion Catalog</span>
                    <FiArrowRight />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Shop by Recipient ⭐ ────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
            Targeted Gifting
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
            Shop by Recipient
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-reef-charcoal/70">
            Find thoughtfully balanced hampers curated specifically for team
            members, valued corporate clients, or family members.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {recipients.map((r) => (
            <div
              key={r.name}
              className="border border-reef-gold/20 bg-white p-7 transition duration-300 hover:border-[#d4af37]"
            >
              <div className="flex items-center justify-between">
                <span className="bg-[#7a0019]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7a0019]">
                  {r.count}
                </span>
                <FiStar className="text-[#d4af37]" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-xl font-bold text-reef-charcoal">
                {r.name}
              </h3>
              <p className="mt-2 text-xs leading-6 text-reef-charcoal/75">
                {r.desc}
              </p>
              <Link
                href="/contact#quote"
                className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7a0019] hover:text-[#d4af37]"
              >
                Inquire For Recipient Set <FiArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: Featured Signature Collection ⭐ ────────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-[#111111] p-8 text-white sm:p-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="bg-[#d4af37] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1c1c1c]">
                Featured Collection
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-5xl">
                The Luxury Signature Heritage Box
              </h2>
              <p className="mt-5 text-sm leading-8 text-white/80 sm:text-base">
                Our flagship curation combining 4 origin dry fruit tins (Mammra
                Almonds, Jumbo Cashews, Pistachios & Persian Figs), 12
                handcrafted Belgian truffles, and a custom gold-foil embossed
                greeting card.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact#quote"
                  className="bg-[#d4af37] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#1c1c1c] transition hover:bg-white hover:text-[#1c1c1c]"
                >
                  Request Sample Box <FiArrowRight className="inline ml-1" />
                </Link>
                <Link
                  href="/products/categories/celebration-hampers"
                  className="border-2 border-white bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#7a0019] transition hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-[#1c1c1c]"
                >
                  View Full Specs
                </Link>
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden border border-white/20">
              <Image
                src={Images.nutsSetTable}
                alt="Luxury Signature Heritage Box by Reet Foods"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Best Sellers Spotlight ⭐ ───────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
              Customer Favorites
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
              Best Sellers Collection
            </h2>
          </div>
          <Link
            href="/contact#quote"
            className="border border-[#d4af37] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#7a0019] transition hover:bg-[#7a0019] hover:text-white"
          >
            Download Price List
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((item) => (
            <div
              key={item.title}
              className="group border border-reef-gold/20 bg-white p-5 transition duration-300 hover:border-[#d4af37]"
            >
              <div className="relative h-56 overflow-hidden bg-[#f8f5f0]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 bg-[#7a0019] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                  {item.badge}
                </span>
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
                    className="bg-[#d4af37] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1c1c1c] transition hover:bg-[#7a0019] hover:text-white"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 8: New Arrivals ⭐ ──────────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="border border-reef-gold/20 bg-white p-8 sm:p-12">
          <div className="mb-10 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
              Fresh Curations
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
              New Arrivals
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-reef-charcoal/70">
              Explore our latest packaging releases, organic nut collections,
              and cold-pressed beverage sets.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {newArrivals.map((item) => (
              <div
                key={item.title}
                className="border border-reef-gold/20 bg-[#fcfbf8] p-6 transition duration-300 hover:border-[#d4af37] hover:bg-white"
              >
                <div className="relative h-48 overflow-hidden bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute right-3 top-3 bg-[#d4af37] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#1c1c1c]">
                    New Launch
                  </span>
                </div>
                <div className="mt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7a0019]">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-reef-charcoal/75">
                    {item.desc}
                  </p>
                  <Link
                    href="/contact#quote"
                    className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7a0019] hover:text-[#d4af37]"
                  >
                    Inquire New Release <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: Why Buy From Reet Foods ⭐ ───────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
            Quality Assurance
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
            Why Choose Reet Foods?
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Origin Sourced Ingredients",
              desc: "Almonds & pistachios directly imported from certified single-origin orchards in Iran & California.",
              icon: FiCheckCircle,
            },
            {
              title: "Nitrogen Sealed Freshness",
              desc: "Every nut tin is nitrogen-flushed to preserve crisp crunch, aroma, and essential oils for 12+ months.",
              icon: FiShield,
            },
            {
              title: "Luxury Gift Presentation",
              desc: "Rigid magnetic boxes, velvet linings, gold-foil hot stamping, and hand-tied satin ribbons.",
              icon: FiPackage,
            },
            {
              title: "Tiered Bulk Discounts",
              desc: "Transparent volume pricing for corporate orders ranging from 25 to 50,000+ units.",
              icon: FiBriefcase,
            },
            {
              title: "Custom Corporate Branding",
              desc: "Complete laser logo embossing, printed chocolate wrappers, and custom sleeve design.",
              icon: FiAward,
            },
            {
              title: "Insured PAN-India Delivery",
              desc: "Temperature-controlled cold-chain transportation with guaranteed zero-melting delivery.",
              icon: FiTruck,
            },
          ].map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="border border-reef-gold/20 bg-white p-7 transition duration-300 hover:border-[#d4af37]"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#7a0019]">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-reef-charcoal/75">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── SECTION 10: Packaging Options Showcase ⭐ ───────────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
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
            {packagingStyles.map((p) => (
              <div
                key={p.title}
                className="border border-reef-gold/20 bg-[#fcfbf8] p-6 text-center transition duration-300 hover:border-[#d4af37] hover:bg-white"
              >
                <span className="bg-[#7a0019] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white">
                  {p.tag}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-reef-charcoal/70">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: B2B Custom Branding Options ⭐ ──────────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
            Corporate Personalization
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
            Custom Branding Services
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-reef-charcoal/70">
            Integrate your company identity seamlessly across every gift box
            with our in-house laser and printing lab.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {brandingFeatures.map((b) => (
            <div
              key={b.title}
              className="border border-reef-gold/20 bg-white p-6 transition duration-300 hover:border-[#d4af37]"
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
      </section>

      {/* ── SECTION 12: Corporate Bulk Orders CTA ⭐ ───────────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="bg-[#111111] p-8 text-center text-white sm:p-14 border border-reef-gold/30">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
            Bulk Orders & Corporate Concierge
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl">
            Need 50+ Custom Gift Boxes?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80">
            Get direct factory pricing, dedicated account management, custom
            logo mockups, and doorstep Pan-India dispatch.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact#quote"
              className="bg-[#d4af37] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#1c1c1c] transition hover:bg-white hover:text-[#1c1c1c]"
            >
              Get Bulk Quote
            </Link>
            <Link
              href="/contact#catalog"
              className="border-2 border-white bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#7a0019] transition hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-[#1c1c1c]"
            >
              Download Corporate Catalogue
            </Link>
            <a
              href="https://wa.me/919890609611?text=Hi%20Reet%20Foods%2C%20I%20need%20a%20bulk%20quote"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-[#25d366] bg-[#25d366] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#20ba57]"
            >
              Talk to Sales on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 13: Product Comparison Table ⭐ ─────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="border border-reef-gold/20 bg-white p-8 sm:p-12">
          <div className="mb-10 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
              Product Matrix
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
              Compare Gifting Categories
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-reef-gold/20 bg-[#fcfbf8]">
                <tr>
                  <th className="p-4 font-bold uppercase tracking-[0.12em] text-reef-charcoal">
                    Feature
                  </th>
                  <th className="p-4 font-bold uppercase tracking-[0.12em] text-[#7a0019]">
                    Dry Fruits
                  </th>
                  <th className="p-4 font-bold uppercase tracking-[0.12em] text-[#7a0019]">
                    Chocolates
                  </th>
                  <th className="p-4 font-bold uppercase tracking-[0.12em] text-[#7a0019]">
                    Gift Boxes
                  </th>
                  <th className="p-4 font-bold uppercase tracking-[0.12em] text-[#7a0019]">
                    Hampers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-reef-gold/15">
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="hover:bg-[#fcfbf8]">
                    <td className="p-4 font-bold text-reef-charcoal">
                      {row.feature}
                    </td>
                    <td className="p-4 text-reef-charcoal/80">
                      {row.dryFruits}
                    </td>
                    <td className="p-4 text-reef-charcoal/80">
                      {row.chocolates}
                    </td>
                    <td className="p-4 text-reef-charcoal/80">
                      {row.giftBoxes}
                    </td>
                    <td className="p-4 text-reef-charcoal/80">{row.hampers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 14: Health Benefits & Sourcing Guide ⭐ ─────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center border border-reef-gold/20 bg-white p-8 sm:p-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
              Nourishment & Sourcing Integrity
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
              Why Choose Handpicked Origin Dry Fruits?
            </h2>
            <p className="mt-4 text-sm leading-7 text-reef-charcoal/80">
              Unlike generic commercial grades, Reet Foods sources directly from
              verified origin orchards in Iran, Afghanistan, and California. Our
              dry fruits are rich in natural antioxidants, healthy omega fats,
              and dietary fiber, providing sustained physical energy and immune
              strength.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-xs font-semibold text-reef-charcoal">
                <FiCheckCircle className="text-[#7a0019]" />
                <span>Unsalted, unbleached, 100% natural origin harvest.</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-reef-charcoal">
                <FiCheckCircle className="text-[#7a0019]" />
                <span>
                  Automated nitrogen flushing protects natural essential oils.
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-reef-charcoal">
                <FiCheckCircle className="text-[#7a0019]" />
                <span>
                  Climate-controlled cold storage prevents rancidity and
                  moisture loss.
                </span>
              </div>
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden bg-[#f8f5f0] border border-reef-gold/20">
            <Image
              src={Images.topViewDiffNuts}
              alt="Handpicked origin dry fruits sourcing guide by Reet Foods"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 15: Industries We Serve ⭐ ──────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
            Trusted Industry Partners
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
            Industries We Serve
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {[
            {
              title: "IT & Corporate Tech",
              desc: "Employee onboarding & festive rewards.",
            },
            {
              title: "Hotels & Hospitality",
              desc: "In-room welcome favours & VIP suites.",
            },
            {
              title: "Luxury Weddings",
              desc: "Custom royal invitation gift boxes.",
            },
            {
              title: "Real Estate & Banking",
              desc: "High-ticket client closing hampers.",
            },
            {
              title: "Global Export",
              desc: "Compliant international packaging sets.",
            },
          ].map((ind) => (
            <div
              key={ind.title}
              className="border border-reef-gold/20 bg-white p-6 text-center transition duration-300 hover:border-[#d4af37]"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal">
                {ind.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-reef-charcoal/70">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 16: Product FAQ Accordion ⭐ ────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
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
      </section>

      {/* ── SECTION 17: Final CTA ⭐ ─────────────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
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
        </div>
      </section>
    </div>
  );
}
