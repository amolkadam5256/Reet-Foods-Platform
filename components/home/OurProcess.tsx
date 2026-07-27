"use client";

import Link from "next/link";
import {
  FiMessageSquare,
  FiGrid,
  FiSliders,
  FiPackage,
  FiAward,
  FiTruck,
  FiChevronRight,
  FiArrowRight,
} from "react-icons/fi";
import { processSteps } from "@/data/home";

const stepIcons: Record<string, React.ElementType> = {
  "01": FiMessageSquare,
  "02": FiGrid,
  "03": FiSliders,
  "04": FiPackage,
  "05": FiAward,
  "06": FiTruck,
};

export function OurProcess() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="process-heading"
    >
      <div className="mb-12 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-reef-gold">
          How It Works
        </p>
        <h2
          id="process-heading"
          className="mt-4 font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal sm:text-4xl"
        >
          Seamless From Concept to Delivery
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-reef-charcoal/70">
          A structured, effortless process designed for bulk procurement, bespoke wedding orders,
          and everything in between.
        </p>
      </div>

      {/* Desktop: horizontal, Mobile: vertical */}
      <div className="grid gap-0 border border-reef-gold/15 bg-white md:grid-cols-3 lg:grid-cols-6">
        {processSteps.map((step, index) => {
          const Icon = stepIcons[step.step] ?? FiMessageSquare;
          return (
            <div
              key={step.step}
              className={[
                "relative border-[#d4af37]/20 p-7 group transition duration-300 hover:bg-reef-cream/30",
                index < processSteps.length - 1
                  ? "border-b md:border-b-0 md:border-r lg:border-r"
                  : "",
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#d4af37]">
                  {step.step}
                </span>
                <span className="text-reef-burgundy/60 transition duration-300 group-hover:text-reef-burgundy group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
              </div>
              <h3 className="mt-4 text-sm font-bold text-reef-charcoal group-hover:text-reef-burgundy transition-colors duration-200">
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-5 text-reef-charcoal/80">
                {step.desc}
              </p>

              {/* Connecting Desktop Arrow */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 bg-white border border-reef-gold/20 rounded-full p-1 shadow-sm text-reef-gold group-hover:border-reef-gold transition-colors duration-200">
                  <FiChevronRight className="h-3 w-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-9 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-3.5 text-sm font-bold text-[#1c1c1c] shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-[#b8952b] hover:text-white"
        >
          Start Your Order <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}

