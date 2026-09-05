"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiShield,
  FiCheckCircle,
  FiPackage,
  FiTruck,
  FiMapPin,
} from "react-icons/fi";
import { storeFrontImg, mallLocationImg } from "@/assets/images";


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
              FSSAI-Licensed Operations
            </p>
            <h2
              id="manufacturing-heading"
              className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl"
            >
              Hygienic Packing &amp; Quality Preparation
            </h2>
            <p className="mt-4 text-sm leading-7 text-reef-charcoal/80 sm:text-base">
              Reet Foods prepares premium dry fruit boxes, festive hampers and
              custom corporate gifts at its FSSAI-licensed Pune facility. Every
              order is checked for product quality, packaging integrity and custom branding
              before dispatch.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 border border-reef-gold/15 bg-[#fcfbf8] p-4">
                <FiShield className="h-5 w-5 shrink-0 text-[#7a0019]" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-reef-charcoal">
                    Freshness Assured
                  </h3>
                  <p className="mt-1 text-[11px] leading-4 text-reef-charcoal/70">
                    Premium handpicked dry fruits sealed in food-grade packaging.
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
                    Custom company logo embossing, sleeve printing &amp; gift cards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border border-reef-gold/15 bg-[#fcfbf8] p-4">
                <FiCheckCircle className="h-5 w-5 shrink-0 text-[#7a0019]" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-reef-charcoal">
                    Hygienic Handling
                  </h3>
                  <p className="mt-1 text-[11px] leading-4 text-reef-charcoal/70">
                    Strict hygiene standards and meticulous quality checks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border border-reef-gold/15 bg-[#fcfbf8] p-4">
                <FiTruck className="h-5 w-5 shrink-0 text-[#7a0019]" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-reef-charcoal">
                    Pan-India Delivery
                  </h3>
                  <p className="mt-1 text-[11px] leading-4 text-reef-charcoal/70">
                    Carefully packed consignments delivered across Indian cities.
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
                Request Corporate Quote
              </Link>
            </div>
          </div>

          {/* Right: Real Store & Facility Showcase */}
          <div className="relative min-h-[420px] overflow-hidden lg:min-h-[540px]">
            <Image
              src={storeFrontImg}
              alt="Reet Foods local shop storefront in Streets of Europe Mall Hinjewadi Pune"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

            {/* Top Store Badge */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-reef-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-reef-charcoal shadow">
                <FiMapPin className="h-3 w-3" /> Retail Shop &amp; Showroom
              </span>
              <span className="rounded-full bg-[#7a0019] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow">
                FSSAI Lic. #21525083009881
              </span>

            </div>

            {/* Bottom Card: Inset Mall Photo & Address */}
            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/75 p-4 backdrop-blur-md text-white">
              <div className="flex items-center gap-3">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-white/30">
                  <Image
                    src={mallLocationImg}
                    alt="Streets of Europe Mall Hinjewadi Phase 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d4af37]">
                    Streets of Europe Mall • Hinjewadi
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-white truncate">
                    Shop F-14, Ground Floor, Maan Road
                  </p>
                  <p className="text-[11px] text-white/70">
                    Near Infosys Circle, Hinjewadi Phase 1, Pune
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
