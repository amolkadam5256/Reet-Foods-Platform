"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { stats } from "@/data/home";

export function AboutBrand() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="bg-[#111111] px-8 py-14 sm:px-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left: Copy */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-reef-gold">
              Our Story
            </p>
            <h2
              id="about-heading"
              className="mt-4 font-[family-name:var(--font-playfair)] text-3xl text-white sm:text-4xl"
            >
              The Art of Premium Gifting
            </h2>
            <p className="mt-6 text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              Founded with a singular vision — to redefine luxury gifting in
              India — Reet Foods merges artisanal craftsmanship with
              unparalleled concierge service. From handpicked dry fruits to
              bespoke chocolate boxes, every product carries a story of care.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              We partner with India&apos;s leading corporations, wedding
              planners, and retail buyers to create memorable gifting moments
              that elevate brands and celebrate relationships.
            </p>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-6 py-3.5 text-sm font-bold text-[#1c1c1c] shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#1c1c1c]"
            >
              Read Our Story <FiArrowRight />
            </Link>
          </div>

          {/* Right: Stats */}
          <div ref={containerRef} className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`border border-white/20 bg-white/5 p-7 transition duration-300 hover:border-reef-gold/40 hover:bg-white/10 ${
                  inView ? "reef-count-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#d4af37]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.18em] text-white/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
