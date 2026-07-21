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
import { featuredProducts, heroGallery, testimonials } from "../../data/home";
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
    title: "Gifting, made memorable.",
    subtitle: "The Reet Foods signature collection",
    price: "₹8,999.00",
    image: heroGallery[0],
    description:
      "Premium dry fruits, elegant chocolates and curated hampers for every thoughtful occasion.",
    cta: "Explore gift boxes",
  },
  {
    title: "A better way to say thank you.",
    subtitle: "Corporate & bulk gifting",
    price: "₹16,999.00",
    image: heroGallery[1],
    description:
      "Make your next client, team or event gifting moment feel distinctly considered.",
    cta: "Plan a bulk order",
  },
  {
    title: "Celebrate the season beautifully.",
    subtitle: "Festive favourites, freshly packed",
    price: "Starting at ₹1599.00",
    image: heroGallery[2],
    description:
      "Beautifully presented flavours for festivals, weddings and every celebration in between.",
    cta: "View festive collection",
  },
];

const promotionalCards = [
  {
    offer: "10% off on gift boxes",
    title: "Premium Dry Fruits",
    code: "REET10",
    image: woodenBoxNuts,
    href: "/products/categories/dry-fruits",
  },
  {
    offer: "Curated for every occasion",
    title: "Chocolate Gifting",
    code: "SWEET10",
    image: topViewDriedFruits,
    href: "/products/categories/chocolates",
  },
  {
    offer: "Custom orders welcome",
    title: "Corporate Hampers",
    code: "BULK10",
    image: sweetiesDesk,
    href: "/contact#quote",
  },
];

export default function Home() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slide = centerSlides[activeSlide];

  const selectSlide = (index: number) =>
    setActiveSlide((index + centerSlides.length) % centerSlides.length);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => selectSlide(activeSlide + 1), 6000);
    return () => window.clearInterval(timer);
  }, [activeSlide, isPaused]);
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
        href="https://wa.me/919999999999?text=Hi%20Reet%20Foods%2C%20I%20need%20a%20quote"
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
                        className="flex items-center justify-between px-4 py-4 text-sm text-reef-charcoal/80 transition duration-200 ease-out hover:bg-reef-cream hover:text-reef-burgundy"
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
                        className="flex w-full items-center justify-between px-4 py-4 text-left text-sm text-reef-charcoal/80 transition duration-200 ease-out hover:bg-reef-cream hover:text-reef-burgundy"
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
                <h1 className="mt-5 max-w-lg font-[family-name:var(--font-playfair)] text-4xl leading-[1.04] text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="mt-5 max-w-md text-sm leading-6 text-white/82 sm:text-base">
                  {slide.description}
                </p>
                <p className="mt-6 text-lg font-semibold text-reef-gold sm:text-xl">
                  {slide.price}
                </p>
                <Link
                  href={activeSlide === 1 ? "/contact#quote" : "/products"}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-reef-gold px-6 py-3.5 text-sm font-bold text-reef-charcoal shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2a1c15]"
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
                        ? "w-9 bg-reef-gold"
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

          <aside className="border border-reef-gold/20 bg-white p-5 text-center">
            <p className="text-[14px] font-medium text-reef-charcoal/65">
              Best Product
            </p>
            <h3 className="mt-1 text-[22px] font-semibold text-reef-charcoal">
              Off The Month
            </h3>
            <div className="mt-6 relative h-[320px] overflow-hidden border border-reef-gold/10 bg-[#f8f7f4]">
              <Image
                src={featuredProducts[0].img}
                alt={featuredProducts[0].name}
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pb-12 sm:px-6 lg:px-8" aria-label="Featured gifting offers">
        <div className="grid gap-5 md:grid-cols-3">
          {promotionalCards.map((card, index) => (
            <Link key={card.title} href={card.href} aria-label={`Shop ${card.title}`} className="group relative h-44 overflow-hidden border border-reef-gold/20 bg-[#f4f5f6] sm:h-48">
              <div className="absolute inset-y-0 left-0 z-10 flex w-[53%] flex-col justify-center bg-[#f4f5f6] px-6 py-5 sm:px-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-reef-charcoal/65">{card.offer}</p>
                <h2 className="mt-1 font-[family-name:var(--font-playfair)] text-2xl leading-tight text-reef-charcoal sm:text-3xl">{card.title}</h2>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-reef-gold">Code: {card.code}</p>
                <span className="mt-2 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-reef-burgundy transition group-hover:gap-3">Shop now <FiArrowRight /></span>
              </div>
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={[
                  "object-cover object-right transition duration-700 ease-out group-hover:scale-110",
                  index === 1 ? "animate-[reef-image-drift_12s_ease-in-out_infinite_alternate]" : "",
                ].join(" ")}
              />
              <div aria-hidden className="pointer-events-none absolute inset-y-0 left-[53%] z-20 w-px bg-reef-gold" />
              <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 z-20 h-px bg-reef-gold/80 transition duration-500 group-hover:bg-reef-burgundy" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pb-12 sm:px-6 lg:px-8">
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
                <h2 className="mt-2 text-2xl font-semibold text-reef-charcoal">
                  {category.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-reef-charcoal/70">
                  {category.copy}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="border border-reef-gold/15 bg-white p-6"
            >
              <p className="text-sm leading-7 text-reef-charcoal/72">
                {testimonial.quote}
              </p>
              <p className="mt-4 text-sm font-semibold text-reef-burgundy">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
