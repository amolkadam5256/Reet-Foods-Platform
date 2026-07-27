"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiMenu,
  FiPause,
  FiPlay,
} from "react-icons/fi";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CorporateGifting } from "@/components/home/CorporateGifting";
import { AboutBrand } from "@/components/home/AboutBrand";
import { OurProcess } from "@/components/home/OurProcess";
import { IndustriesWeServe } from "@/components/home/IndustriesWeServe";
import { Testimonials } from "@/components/home/Testimonials";
import { Certifications } from "@/components/home/Certifications";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { LatestBlogs } from "@/components/home/LatestBlogs";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ManufacturingPreview } from "@/components/home/ManufacturingPreview";
import { featuredProducts, heroGallery } from "../../data/home";
import { categories } from "../../data/categories";
import sweetiesDesk from "@/assets/front-view-desk-with-sweeties-dried-fruits-marmalades-sweets-wooden-desk-sweet-confectionery-color-composition.jpg";
import topViewDriedFruits from "@/assets/top-view-dried-fruits-different-nuts-dark-surface.jpg";
import woodenBoxNuts from "@/assets/various-nuts-wooden-box.jpg";

type HeroCategory = {
  label: string;
  href?: string;
  children?: Array<{ label: string; href: string }>;
};

const centerSlides = [
  {
    title: "Premium Dry Fruits & Luxury Chocolate Hampers",
    subtitle: "Premium Dry Fruits • Corporate Gifting • PAN India",
    price: "",
    image: heroGallery[0],
    description:
      "Curated artisanal chocolates and premium dry fruits for corporate gifting, weddings, and festive celebrations. Elevate your brand with custom packaging and seamless bulk orders.",
    cta: "Explore Premium Hampers",
  },
  {
    title: "Seamless Corporate & Bulk Gifting",
    subtitle: "Dedicated Bulk Support • Custom Branded Boxes",
    price: "",
    image: heroGallery[1],
    description:
      "Make your next client, team, or event gifting moment feel distinctly considered with our premium corporate curation.",
    cta: "Request Corporate Quote",
  },
  {
    title: "Celebrate The Season Beautifully",
    subtitle: "Premium Grade Quality • PAN India Delivery",
    price: "",
    image: heroGallery[2],
    description:
      "Beautifully presented flavours for festivals, weddings and every celebration in between. Nitrogen-packed freshness in every box.",
    cta: "Shop The Collection",
  },
];

const promotionalCards = [
  {
    tagline: "Hand-Selected Origin Nuts",
    title: "Premium Dry Fruits",
    image: woodenBoxNuts,
    href: "/products/premium-dry-fruits",
    cta: "Shop Dry Fruits",
  },
  {
    tagline: "Artisanal Belgian Chocolates",
    title: "Chocolate Gift Boxes",
    image: topViewDriedFruits,
    href: "/products/artisanal-chocolates",
    cta: "Shop Chocolates",
  },
  {
    tagline: "Seamless Bulk Gifting",
    title: "Corporate Hampers",
    image: sweetiesDesk,
    href: "/contact#quote",
    cta: "Plan Bulk Order",
  },
];

export default function Home() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [bestProductIndex, setBestProductIndex] = useState(0);
  const slide = centerSlides[activeSlide];

  const selectSlide = (index: number) =>
    setActiveSlide((index + centerSlides.length) % centerSlides.length);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => selectSlide(activeSlide + 1), 6000);
    return () => window.clearInterval(timer);
  }, [activeSlide, isPaused]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setBestProductIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);
  const heroCategories: HeroCategory[] = [
    {
      label: "Dry Fruits & Nuts",
      children: [
        { label: "Gift Boxes", href: "/products/dry-fruits" },
        { label: "Bulk Tins", href: "/products/dry-fruits" },
      ],
    },
    {
      label: "Chocolate Gift Boxes",
      children: [
        { label: "Corporate Boxes", href: "/products/chocolate-gift-box" },
        { label: "Premium Assortments", href: "/products/chocolate-gift-box" },
      ],
    },
    {
      label: "Cold-Pressed Juices",
      children: [
        { label: "Gift Hampers", href: "/products/juice" },
        { label: "Corporate Orders", href: "/products/juice" },
      ],
    },
    { label: "Celebration Hampers", href: "/products/dry-fruit-box" },
    { label: "Corporate Gifting", href: "/contact#quote" },
    { label: "Wedding Favours", href: "/contact#quote" },
  ];

  return (
    <div className="bg-[#fbf7f1]">
      <WhatsAppButton
        href="https://wa.me/919890609611?text=Hi%20Reet%20Foods%2C%20I%20need%20a%20quote"
        label="WhatsApp Us"
      />

      <section className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)_280px]">
          <aside className="border border-reef-gold/20 bg-white">
            <div className="bg-reef-gold px-4 py-4 text-white">
              <button
                type="button"
                onClick={() => setCategoriesOpen((value) => !value)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={categoriesOpen}
                aria-label={
                  categoriesOpen
                    ? "Collapse category list"
                    : "Expand category list"
                }
              >
                <span className="flex items-center gap-2 text-[15px] font-semibold uppercase tracking-[0.08em]">
                  <FiMenu className="h-5 w-5" />
                  Shop by Categories
                </span>
                <span className="inline-flex h-6 w-6 items-center justify-center text-white">
                  <FiChevronDown
                    className={[
                      "h-4 w-4 transition duration-200 ease-out",
                      categoriesOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </span>
              </button>
            </div>
            <div
              className={[
                "overflow-hidden transition-all duration-300",
                categoriesOpen
                  ? "max-h-[900px] opacity-100"
                  : "max-h-0 opacity-0",
              ].join(" ")}
            >
              <div className="divide-y divide-reef-gold/10">
                {heroCategories.map((item) => {
                  const isOpen = openCategory === item.label;
                  if (!item.children?.length && item.href) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center justify-between px-4 py-4 font-[family-name:var(--font-playfair)] text-sm text-reef-charcoal/80 transition duration-200 ease-out hover:bg-reef-cream hover:text-reef-burgundy"
                      >
                        <span>{item.label}</span>
                      </Link>
                    );
                  }

                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenCategory((value) =>
                            value === item.label ? null : item.label,
                          )
                        }
                        className="flex w-full items-center justify-between px-4 py-4 text-left font-[family-name:var(--font-playfair)] text-sm text-reef-charcoal/80 transition duration-200 ease-out hover:bg-reef-cream hover:text-reef-burgundy"
                        aria-expanded={isOpen}
                      >
                        <span>{item.label}</span>
                        <FiChevronDown
                          className={[
                            "text-reef-charcoal/55 transition",
                            isOpen ? "rotate-180" : "",
                          ].join(" ")}
                        />
                      </button>
                      <div
                        className={[
                          "overflow-hidden border-t border-reef-gold/10 bg-[#fcfbf8] transition-all duration-300",
                          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
                        ].join(" ")}
                      >
                        <div className="space-y-2 px-4 py-3">
                          {item.children?.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-reef-charcoal/70 transition duration-200 ease-out hover:bg-white hover:text-reef-burgundy"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="px-4 py-4 text-sm text-reef-burgundy">
                  More Categories
                </div>
              </div>
            </div>
          </aside>

          <section
            className="group relative min-h-[480px] overflow-hidden bg-[#2a1c15] shadow-[0_20px_50px_rgba(38,20,10,0.16)] sm:min-h-[560px]"
            aria-roledescription="carousel"
            aria-label="Featured Reet Foods collections"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {centerSlides.map((item, index) => (
              <Image
                key={item.title}
                src={item.image}
                alt=""
                fill
                preload={index === 0}
                sizes="(max-width: 1280px) 100vw, 60vw"
                className={[
                  "object-cover transition-[opacity,transform] duration-[1400ms] ease-out",
                  activeSlide === index
                    ? "scale-100 opacity-100"
                    : "scale-110 opacity-0",
                ].join(" ")}
              />
            ))}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,12,8,0.82)_0%,rgba(18,12,8,0.54)_43%,rgba(18,12,8,0.08)_80%)]" />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/35 to-transparent" />

            <div className="relative z-10 flex min-h-[480px] items-center px-6 py-14 sm:min-h-[560px] sm:px-10 lg:px-12">
              <div
                key={slide.title}
                className="max-w-xl animate-[reef-hero-content-in_700ms_ease-out_both]"
              >
                <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-reef-gold">
                  <span className="h-px w-8 bg-reef-gold" />
                  {slide.subtitle}
                </p>
                <h1 className="mt-5 max-w-lg font-[family-name:var(--font-playfair)] text-2xl leading-[1.1] text-white drop-shadow-sm sm:text-3xl lg:text-3xl">
                  {slide.title}
                </h1>
                <p className="mt-5 max-w-md text-sm leading-6 text-white/82 sm:text-base">
                  {slide.description}
                </p>
                {slide.price && (
                  <p className="mt-6 text-lg font-semibold text-reef-gold sm:text-xl">
                    {slide.price}
                  </p>
                )}
                <Link
                  href={activeSlide === 1 ? "/contact#quote" : "/products"}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-6 py-3.5 text-sm font-bold text-[#1c1c1c] shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#1c1c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2a1c15]"
                >
                  {slide.cta} <FiArrowRight className="text-base" />
                </Link>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 sm:bottom-8 sm:left-10 lg:left-12">
              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Choose featured collection"
              >
                {centerSlides.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    role="tab"
                    aria-selected={activeSlide === index}
                    aria-label={`Show slide ${index + 1}: ${item.title}`}
                    onClick={() => selectSlide(index)}
                    className={[
                      "h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                      activeSlide === index
                        ? "w-9 bg-[#d4af37]"
                        : "w-2.5 bg-white/70 hover:bg-white",
                    ].join(" ")}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setIsPaused((value) => !value)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/35 text-white/90 transition hover:border-white hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={isPaused ? "Play carousel" : "Pause carousel"}
              >
                {isPaused ? <FiPlay /> : <FiPause />}
              </button>
            </div>
            <div className="absolute bottom-6 right-6 z-20 hidden items-center gap-2 sm:bottom-8 sm:right-8 sm:flex">
              <button
                type="button"
                onClick={() => selectSlide(activeSlide - 1)}
                aria-label="Previous slide"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-reef-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FiChevronLeft className="text-xl" />
              </button>
              <button
                type="button"
                onClick={() => selectSlide(activeSlide + 1)}
                aria-label="Next slide"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-reef-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FiChevronRight className="text-xl" />
              </button>
            </div>
          </section>

          <aside className="border border-reef-gold/20 bg-white p-5 text-center shadow-sm">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              Best Product
            </p>
            <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-[22px] font-bold text-reef-charcoal">
              Of The Month
            </h3>

            <div className="mt-4 relative h-[300px] overflow-hidden border border-reef-gold/15 bg-[#f8f7f4]">
              {featuredProducts.map((item, index) => (
                <Image
                  key={item.name}
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="280px"
                  className={[
                    "object-cover transition-opacity duration-1000 ease-in-out",
                    bestProductIndex === index ? "opacity-100 z-10" : "opacity-0 z-0",
                  ].join(" ")}
                />
              ))}
              <div className="absolute left-3 top-3 z-20 rounded-full bg-[#7a0019] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white shadow-sm">
                Best Seller
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <p className="font-[family-name:var(--font-playfair)] text-sm font-bold text-reef-charcoal line-clamp-1">
                Royal Pistachio Gold Tin
              </p>

              <Link
                href="/contact#quote"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d4af37] py-2.5 text-xs font-bold text-[#1c1c1c] shadow-sm transition duration-200 hover:bg-[#7a0019] hover:text-white"
              >
                Get Quote <FiArrowRight className="text-sm" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* ── TRUST BAR MARQUEE ────────────────────────────────────────────── */}
      <div className="overflow-hidden border-y border-reef-gold/15 bg-white py-3" aria-hidden="true">
        <div className="reef-marquee flex items-center gap-0 whitespace-nowrap">
          {[
            "✦ FSSAI Certified Facility",
            "✦ Nitrogen-Sealed Freshness",
            "✦ PAN India Cold-Chain Delivery",
            "✦ Bulk Orders from 25 Units",
            "✦ Custom Branding & Logo Printing",
            "✦ 24-Hour Quote Response",
            "✦ ISO Quality Standards",
            "✦ 500+ Corporate Clients",
            "✦ Wedding & Festive Hampers",
            "✦ Temperature-Controlled Logistics",
            // Duplicate for seamless loop
            "✦ FSSAI Certified Facility",
            "✦ Nitrogen-Sealed Freshness",
            "✦ PAN India Cold-Chain Delivery",
            "✦ Bulk Orders from 25 Units",
            "✦ Custom Branding & Logo Printing",
            "✦ 24-Hour Quote Response",
            "✦ ISO Quality Standards",
            "✦ 500+ Corporate Clients",
            "✦ Wedding & Festive Hampers",
            "✦ Temperature-Controlled Logistics",
          ].map((text, i) => (
            <span
              key={i}
              className="mx-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-reef-charcoal/65"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ── CONTACT STRIP ───────────────────────────────────────────────── */}
      <div className="border-b border-reef-gold/10 bg-[#fdf9f5]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-reef-charcoal/65 sm:justify-start">
            <a
              href="tel:+919890609611"
              className="flex items-center gap-2 font-semibold transition hover:text-reef-burgundy"
            >
              <svg className="h-4 w-4 text-reef-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 98906 09611
            </a>
            <a
              href="tel:+918007518088"
              className="flex items-center gap-2 font-semibold transition hover:text-reef-burgundy"
            >
              <svg className="h-4 w-4 text-reef-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 80075 18088
            </a>
            <a
              href="mailto:reetfoodspune@gmail.com"
              className="flex items-center gap-2 transition hover:text-reef-burgundy"
            >
              <svg className="h-4 w-4 text-reef-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              reetfoodspune@gmail.com
            </a>
          </div>
          <p className="flex items-center gap-2 text-[11px] text-reef-charcoal/45">
            <svg className="h-3.5 w-3.5 text-reef-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Shop F14, Streets of Europe Mall, Hinjewadi Phase I, Pune 411057
          </p>
        </div>
      </div>
      {/* ── SECTION 1: Category Cards (3 promo cards) ─────────────────── */}
      <section
        className="mx-auto max-w-[1440px] px-4 pb-12 sm:px-6 lg:px-8"
        aria-label="Featured gifting offers"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {promotionalCards.map((card, index) => (
            <Link
              key={card.title}
              href={card.href}
              aria-label={`Shop ${card.title}`}
              className="group relative h-[200px] overflow-hidden border border-reef-gold/20 bg-white sm:h-[220px]"
            >
              <div className="absolute inset-y-0 left-0 z-10 flex w-[56%] flex-col justify-center bg-white px-5 sm:px-8">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-reef-charcoal/50">
                  {card.tagline}
                </p>
                <h2 className="mt-2.5 font-[family-name:var(--font-playfair)] text-2xl leading-[1.15] text-reef-charcoal sm:text-[26px]">
                  {card.title}
                </h2>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-reef-burgundy transition-all duration-300 group-hover:gap-3 group-hover:text-reef-gold">
                  <span>{card.cta}</span>
                  <FiArrowRight className="text-sm" />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 w-[44%] overflow-hidden">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={[
                    "object-cover object-center transition duration-700 ease-out group-hover:scale-105",
                    index === 1
                      ? "animate-[reef-image-drift_12s_ease-in-out_infinite_alternate]"
                      : "",
                  ].join(" ")}
                />
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-[56%] z-20 w-px bg-reef-gold/30 transition duration-500 group-hover:bg-reef-gold"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* ── SECTION 2: Shop by Categories ──────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal sm:text-4xl">
            Crafted For Every Occasion
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-reef-charcoal/70 sm:text-base">
            Discover our signature collection of artisanal chocolates and
            premium dry fruits. Curated thoughtfully for personal celebrations,
            luxury weddings, and distinguished corporate gift boxes.
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

      {/* ── SECTION 3: Why Reet Foods ───────────────────────────────────── */}
      <WhyChooseUs />

      {/* ── SECTION 4: Featured Products ────────────────────────────────── */}
      <FeaturedProducts />

      {/* ── SECTION 5: Corporate Gifting ────────────────────────────────── */}
      <CorporateGifting />

      {/* ── SECTION 6: About Brand ──────────────────────────────────────── */}
      <AboutBrand />

      {/* ── SECTION 7: Our Process ──────────────────────────────────────── */}
      <OurProcess />

      {/* ── SECTION 7.5: Manufacturing Preview ──────────────────────────── */}
      <ManufacturingPreview />

      {/* ── SECTION 8: Industries We Serve ──────────────────────────────── */}
      <IndustriesWeServe />

      {/* ── SECTION 9: Testimonials ─────────────────────────────────────── */}
      <Testimonials />

      {/* ── SECTION 10: Certifications ──────────────────────────────────── */}
      <Certifications />

      {/* ── SECTION 11: Gallery Preview ─────────────────────────────────── */}
      <GalleryPreview />

      {/* ── SECTION 12: Latest Blogs ────────────────────────────────────── */}
      <LatestBlogs />

      {/* ── SECTION 13: FAQ ─────────────────────────────────────────────── */}
      <FAQSection />

      {/* ── SECTION 14: Final CTA ───────────────────────────────────────── */}
      <FinalCTA />

      {/* ── SEO JSON-LD Structured Data Schemas ────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness", "FoodEstablishment"],
              "name": "Reet Foods & Gifting",
              "url": "https://reetfoods.com",
              "logo": "https://reetfoods.com/logo.png",
              "image": "https://reetfoods.com/images/hero.jpg",
              "description": "Pune's premier manufacturer of premium dry fruits, artisanal chocolates, and bespoke corporate gifting hampers. FSSAI certified, ISO quality standards, PAN India delivery.",
              "priceRange": "₹₹–₹₹₹",
              "servesCuisine": "Gifting, Dry Fruits, Artisanal Chocolates",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop no F14 Ground floor, Streets of Europe Mall, Maan Road near Infosys Circle, Hinjewadi Phase I",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411057",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.5900",
                "longitude": "73.7380"
              },
              "email": "reetfoodspune@gmail.com",
              "telephone": ["+91-9890609611", "+91-8007518088"],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-9890609611",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["en", "hi"],
                  "contactOption": "TollFree"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-8007518088",
                  "contactType": "sales",
                  "areaServed": "IN",
                  "availableLanguage": ["en", "hi", "mr"]
                }
              ],
              "sameAs": [
                "https://wa.me/919890609611",
                "https://facebook.com/reetfoods",
                "https://instagram.com/reetfoods",
                "https://linkedin.com/company/reetfoods"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "09:00",
                  "closes": "19:00"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What products does Reet Foods offer for corporate gifting?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Reet Foods offers premium dry fruit boxes, hand-finished Belgian chocolate gift hampers, cold-pressed fruit juices, and custom-branded corporate gift boxes with laser logo printing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you deliver corporate gifting hampers pan-India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide insured temperature-controlled cold-chain delivery across all major cities and states in India."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the minimum order quantity for corporate gifting?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our minimum order quantity for corporate gifting starts at 25 units. For smaller bespoke orders, please contact us directly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you customise the packaging with a company logo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We offer full custom branding including logo printing, ribbon personalisation, branded note cards, and custom tissue paper. A proof is provided before production."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I contact Reet Foods for a bulk order quote?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can reach us at +91 9890609611, +91 8007518088, email reetfoodspune@gmail.com, or WhatsApp us at https://wa.me/919890609611. Our team responds within 24 hours."
                  }
                }
              ]
            }
          ])
        }}
      />
    </div>
  );
}
