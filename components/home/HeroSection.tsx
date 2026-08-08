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
import { featuredProducts, heroGallery } from "@/data/home";

type HeroCategory = {
  label: string;
  href?: string;
  children?: Array<{ label: string; href: string }>;
};

const centerSlides = [
  {
    title: "Premium Dry Fruits & Custom Corporate Gift Hampers",
    subtitle: "Premium Dry Fruits • Corporate Gifting • PAN India",
    price: "",
    image: heroGallery[0],
    description:
      "Premium dry fruits and custom gift hampers for corporate gifting, festive celebrations and events. Choose packaging, logo branding and message cards to fit your budget.",
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

const heroCategories: HeroCategory[] = [
  {
    label: "Dry Fruits & Nuts",
    children: [
      { label: "Gift Boxes", href: "/products/dry-fruits" },
      { label: "Bulk Tins", href: "/products/dry-fruits" },
    ],
  },
  {
    label: "Dry Fruit Gift Boxes",
    children: [
      { label: "Corporate Gift Boxes", href: "/products/categories/dry-fruit-box" },
      { label: "Festive Gift Boxes", href: "/products/categories/dry-fruit-box" },
    ],
  },
  {
    label: "Custom Corporate Gifts",
    children: [
      { label: "Logo Branding", href: "/contact#quote" },
      { label: "Bulk Orders", href: "/contact#quote" },
    ],
  },
  { label: "Celebration Hampers", href: "/products/dry-fruit-box" },
  { label: "Corporate Gifting", href: "/contact#quote" },
  { label: "Wedding Favours", href: "/contact#quote" },
];

export function HeroSection() {
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

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)_280px]">
        {/* Category Sidebar */}
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

        {/* Carousel */}
        <div
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
              priority={index === 0}
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
        </div>

        {/* Best Product Aside */}
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
  );
}
