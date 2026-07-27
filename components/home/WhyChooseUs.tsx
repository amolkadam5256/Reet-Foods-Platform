"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import {
  LuBadgeCheck,
  LuGift,
  LuBuilding2,
  LuPackage,
  LuTruck,
  LuHeadphones,
} from "react-icons/lu";
import { whyUs } from "@/data/home";

const iconMap: Record<string, React.ElementType> = {
  quality: LuBadgeCheck,
  packaging: LuGift,
  corporate: LuBuilding2,
  bulk: LuPackage,
  delivery: LuTruck,
  support: LuHeadphones,
};

export function WhyChooseUs() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="trust-heading"
    >
      <div className="mb-12 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-reef-gold">
          Why Choose Reet Foods
        </p>
        <h2
          id="trust-heading"
          className="mt-4 font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal sm:text-4xl"
        >
          Quality You Can Trust
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-reef-charcoal/70 sm:text-base">
          Experience our commitment to premium dry fruits, elegant packaging,
          and reliable corporate gifting solutions tailored for seamless bulk
          orders across India.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {whyUs.map((item, index) => {
          const Icon = iconMap[item.icon] ?? LuBadgeCheck;
          return (
            <div
              key={item.title}
              className="reef-fade-up group relative flex items-start gap-5 border border-reef-gold/15 bg-white p-6 transition duration-300 hover:border-reef-gold/50 hover:bg-reef-cream hover:shadow-[0_8px_30px_rgba(212,175,55,0.10)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Ghost step number */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-3 select-none font-[family-name:var(--font-playfair)] text-[36px] font-bold leading-none text-reef-gold/10 transition duration-300 group-hover:text-reef-gold/20"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#d4af37]/30 bg-[#fdf8ee] transition duration-300 group-hover:border-reef-gold/60 group-hover:bg-[#d4af37]/20">
                <Icon
                  className="h-6 w-6 text-[#c8a84b] transition duration-300 group-hover:text-[#7a0019]"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-reef-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-reef-charcoal/80">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-3.5 text-sm font-bold text-[#1c1c1c] shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-[#b8952b] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2"
        >
          Explore Products <FiArrowRight className="text-base" />
        </Link>
      </div>
    </section>
  );
}

