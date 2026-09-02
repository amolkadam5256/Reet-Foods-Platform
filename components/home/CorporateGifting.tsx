"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { reetFoodImages } from "@/assets/reetFoodImages";

const topViewPistachios = reetFoodImages[4];

const highlights = [
  "Employee & Client Gifts",
  "Festival & Diwali Hampers",
  "Wedding Guest Favours",
  "Custom Branding & Logo Printing",
  "Seamless Bulk Orders from 25 units",
  "Tiered Pricing for Volume Buyers",
];

export function CorporateGifting() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="corporate-heading"
    >
      <div className="grid gap-8 overflow-hidden border border-reef-gold/15 bg-white lg:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-[320px] overflow-hidden lg:min-h-[480px]">
          <Image
            src={topViewPistachios}
            alt="Premium corporate gifting hampers with branded packaging by Reet Foods"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:bg-gradient-to-t lg:from-black/40 lg:to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block border border-reef-gold/60 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-reef-gold backdrop-blur-sm">
              Corporate Gifting Division
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 lg:p-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-reef-gold">
            For Businesses & Brands
          </p>
          <div className="mt-4 flex items-center gap-3">
            <h2
              id="corporate-heading"
              className="font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal sm:text-4xl"
            >
              Elevate Your Corporate Gifting
            </h2>
            <span className="shrink-0 rounded-full border border-reef-gold/30 bg-reef-cream px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-reef-burgundy">
              Min 25 Units
            </span>
          </div>
          <p className="mt-5 text-sm leading-7 text-reef-charcoal/70">
            Leave a lasting impression on clients and employees with
            custom-branded luxury hampers. From concept to doorstep — managed
            with precision and elegance.
          </p>

          <ul className="mt-7 space-y-3">
            {highlights.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-sm font-medium text-[#1c1c1c]/90"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/20 text-[#7a0019]">
                  <FiCheck className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 rounded-full bg-reef-gold px-6 py-3.5 text-sm font-bold text-[#1c1c1c] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-reef-burgundy hover:text-white"
            >
              Request Catalogue <FiArrowRight />
            </Link>
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 rounded-full border-2 border-reef-burgundy bg-transparent px-6 py-3.5 text-sm font-bold text-reef-burgundy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-reef-burgundy hover:text-white"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+919225130732"
              className="inline-flex items-center gap-2 rounded-full border border-reef-charcoal/15 bg-white px-6 py-3.5 text-sm font-bold text-reef-charcoal shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-reef-gold hover:text-reef-burgundy"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call: +91 98906 09611
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
