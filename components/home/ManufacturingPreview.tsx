"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiShield,
  FiCheckCircle,
  FiPackage,
  FiTruck,
} from "react-icons/fi";
import { reetFoodImages } from "@/assets/reetFoodImages";

const topViewPistachios = reetFoodImages[4];

export function ManufacturingPreview() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="manufacturing-heading"
    >
      <div className="overflow-hidden border border-reef-gold/15 bg-white">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left: Content */}
          <div className="p-8 sm:p-12 lg:p-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
              FSSAI Certified Manufacturing Facility
            </p>
            <h2
              id="manufacturing-heading"
              className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl"
            >
              State-of-the-Art Production & Cold Storage
            </h2>
            <p className="mt-4 text-sm leading-7 text-reef-charcoal/80 sm:text-base">
              Reet Foods prepares premium dry fruit boxes, festive hampers and
              custom corporate gifts at its FSSAI-licensed Pune facility. Every
              order is checked for product, packaging and branding details
              before dispatch.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 border border-reef-gold/15 bg-[#fcfbf8] p-4">
                <FiShield className="h-5 w-5 shrink-0 text-[#7a0019]" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-reef-charcoal">
                    Nitrogen Sealed
                  </h3>
                  <p className="mt-1 text-[11px] leading-4 text-reef-charcoal/70">
                    Locks in natural crunch & nutrients for 12+ months.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border border-reef-gold/15 bg-[#fcfbf8] p-4">
                <FiPackage className="h-5 w-5 shrink-0 text-[#7a0019]" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-reef-charcoal">
                    Bespoke Branding
                  </h3>
                  <p className="mt-1 text-[11px] leading-4 text-reef-charcoal/70">
                    Custom logo embossing & laser-cut magnetic box finishing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border border-reef-gold/15 bg-[#fcfbf8] p-4">
                <FiCheckCircle className="h-5 w-5 shrink-0 text-[#7a0019]" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-reef-charcoal">
                    Zero Contact Packaging
                  </h3>
                  <p className="mt-1 text-[11px] leading-4 text-reef-charcoal/70">
                    Strict hygiene protocols & automated quality screening.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border border-reef-gold/15 bg-[#fcfbf8] p-4">
                <FiTruck className="h-5 w-5 shrink-0 text-[#7a0019]" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-reef-charcoal">
                    Insured Cold-Chain
                  </h3>
                  <p className="mt-1 text-[11px] leading-4 text-reef-charcoal/70">
                    Temperature-controlled shipping across all states in India.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-6 py-3.5 text-sm font-bold text-[#1c1c1c] shadow-md transition duration-200 hover:-translate-y-0.5 hover:text-white"
              >
                Learn About Our Process <FiArrowRight />
              </Link>
              <Link
                href="/contact#quote"
                style={{ color: "#7a0019" }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#d4af37] bg-white px-6 py-3.5 text-sm font-bold shadow-sm transition duration-200 hover:text-white"
              >
                Request Facility Audit Report
              </Link>
            </div>
          </div>

          {/* Right: Image showcase */}
          <div className="relative min-h-[380px] overflow-hidden lg:min-h-[520px]">
            <Image
              src={topViewPistachios}
              alt="FSSAI certified food manufacturing and nitrogen sealing facility by Reet Foods"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Top Address Overlay */}
            <div className="absolute top-6 left-6 right-6 rounded-xl border border-white/20 bg-black/65 p-4 backdrop-blur-md text-white sm:max-w-[280px] transform hover:scale-[1.02] transition-transform duration-300">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#d4af37]">
                Facility Location
              </p>
              <p className="mt-1.5 text-[11px] leading-relaxed text-white/85 font-medium">
                Shop no F14 Ground floor, Streets of Europe Mall, Maan Road near
                Infosys Circle, Hinjewadi Phase I, Pune 411057
              </p>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/20 bg-black/50 p-4 backdrop-blur-md">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d4af37]">
                  Annual Capacity
                </p>
                <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
                  500,000+ Units / Year
                </p>
              </div>
              <span className="rounded-full bg-[#7a0019] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                FSSAI Lic. #21526079003816
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
