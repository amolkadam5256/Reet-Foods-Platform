 "use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { featuredProducts, highlightBar, heroGallery, testimonials } from "../../data/home";
import { categories } from "../../data/categories";

type HeroCategory = {
  label: string;
  href?: string;
  children?: Array<{ label: string; href: string }>;
};

const centerSlides = [
  {
    title: "Phantom4 Pro+ Obsidian",
    subtitle: "-10% Off This Week",
    price: "£809.00",
    image: heroGallery[0],
  },
  {
    title: "Work Desk Surface Studio 2022",
    subtitle: "Black Friday This Week",
    price: "£1599.00",
    image: heroGallery[1],
  },
  {
    title: "Premium Gifting Edit",
    subtitle: "Seasonal collection",
    price: "Starting at ₹1599.00",
    image: heroGallery[2],
  },
];

export default function Home() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const slide = centerSlides[0];
  const heroCategories: HeroCategory[] = [
    {
      label: "Hand Harness",
      children: [
        { label: "Gold Hand Harness", href: "/products/dry-fruits" },
        { label: "Festival Hand Harness", href: "/products/dry-fruits" },
      ],
    },
    {
      label: "Maang Tika",
      children: [
        { label: "Stone Maang Tika", href: "/products/dry-fruits" },
        { label: "Bridal Maang Tika", href: "/products/dry-fruits" },
      ],
    },
    {
      label: "Toe Rings",
      children: [
        { label: "Silver Toe Rings", href: "/products/dry-fruits" },
        { label: "Bridal Toe Rings", href: "/products/dry-fruits" },
      ],
    },
    { label: "Traditional Earrings", href: "/products/chocolate-gift-box" },
    { label: "Kada Cum Bracelet", href: "/products/chocolate-gift-box" },
    { label: "Exquisite Rings", href: "/products/chocolate-gift-box" },
    { label: "Necklaces", href: "/products/juice" },
    { label: "Foot Harness", href: "/products/juice" },
    { label: "Braid Jewels", href: "/products/juice" },
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
                aria-label={categoriesOpen ? "Collapse category list" : "Expand category list"}
              >
                <span className="flex items-center gap-2 text-[15px] font-semibold uppercase tracking-[0.08em]">
                  <FiMenu className="h-5 w-5" />
                  Shop by Categories
                </span>
                <span className="inline-flex h-6 w-6 items-center justify-center text-white">
                  <FiChevronDown className={["h-4 w-4 transition duration-200 ease-out", categoriesOpen ? "rotate-180" : ""].join(" ")} />
                </span>
              </button>
            </div>
            <div className={["overflow-hidden transition-all duration-300", categoriesOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"].join(" ")}>
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
                        onClick={() => setOpenCategory((value) => (value === item.label ? null : item.label))}
                        className="flex w-full items-center justify-between px-4 py-4 text-left text-sm text-reef-charcoal/80 transition duration-200 ease-out hover:bg-reef-cream hover:text-reef-burgundy"
                        aria-expanded={isOpen}
                      >
                        <span>{item.label}</span>
                        <FiChevronDown className={["text-reef-charcoal/55 transition", isOpen ? "rotate-180" : ""].join(" ")} />
                      </button>
                      <div className={["overflow-hidden border-t border-reef-gold/10 bg-[#fcfbf8] transition-all duration-300", isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"].join(" ")}>
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
                <div className="px-4 py-4 text-sm text-reef-burgundy">More Categories</div>
              </div>
            </div>
          </aside>

          <div className="relative overflow-hidden border border-white bg-[#dce8ee]">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 60vw"
              className="object-cover opacity-95"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.82),rgba(255,255,255,0.08))]" />
            <div className="relative z-10 flex h-full items-center px-6 py-10 sm:px-10">
              <div className="max-w-xl">
                <p className="text-[14px] text-reef-gold">{slide.subtitle}</p>
                <h1 className="mt-3 max-w-md font-[family-name:var(--font-playfair)] text-5xl leading-tight text-reef-charcoal sm:text-6xl">
                  {slide.title}
                </h1>
                <p className="mt-4 text-2xl font-semibold text-reef-charcoal">
                  Starting at <span className="text-reef-gold">{slide.price}</span>
                </p>
                <Link
                  href="/products"
                  className="mt-8 inline-flex items-center gap-2 bg-reef-gold px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
                >
                  Shopping Now
                </Link>
                <div className="mt-10 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full border border-white bg-white" />
                  <span className="h-3 w-3 rounded-full border border-white/80 bg-white/80" />
                  <span className="h-3 w-3 rounded-full border border-white/80 bg-white/80" />
                </div>
              </div>
            </div>
          </div>

          <aside className="border border-reef-gold/20 bg-white p-5 text-center">
            <p className="text-[14px] font-medium text-reef-charcoal/65">Best Product</p>
            <h3 className="mt-1 text-[22px] font-semibold text-reef-charcoal">Off The Month</h3>
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

      <section className="mx-auto max-w-[1440px] px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.title} href={category.href} className="group overflow-hidden border border-reef-gold/15 bg-white">
              <div className="relative h-52">
                <Image src={category.img} alt={category.title} fill sizes="(max-width: 1280px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-reef-gold">{category.tag}</p>
                <h2 className="mt-2 text-2xl font-semibold text-reef-charcoal">{category.title}</h2>
                <p className="mt-2 text-sm leading-6 text-reef-charcoal/70">{category.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="border border-reef-gold/15 bg-white p-6">
              <p className="text-sm leading-7 text-reef-charcoal/72">{testimonial.quote}</p>
              <p className="mt-4 text-sm font-semibold text-reef-burgundy">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
