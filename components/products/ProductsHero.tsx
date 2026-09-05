"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Images } from "@/assets/images";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

interface ProductsHeroProps {
  animVisible: boolean;
}

export default function ProductsHero({ animVisible }: ProductsHeroProps) {
  return (
    <section
      className="relative bg-[#111111] text-white overflow-hidden border-b border-[#d4af37]/30"
      aria-label="Hero"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 40%, #d4af37 0%, transparent 50%), radial-gradient(circle at 80% 60%, #7a0019 0%, transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div
            className={`transition-all duration-1000 ${animVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
              <span className="h-px w-8 bg-[#d4af37]" />
              Curated Luxury Gifting Hub
            </p>

            <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-[3.4rem]">
              Premium Dry Fruits, Chocolates &amp; Luxury Gift Boxes
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/85 sm:text-base">
              Discover our complete collection of handpicked origin dry fruits,
              artisanal chocolates, and bespoke corporate gift hampers.
              Packed by our FSSAI-licensed team in Pune with food-grade
              freshness packing, custom logo branding, and reliable Pan-India
              delivery.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 border-2 border-[#d4af37] bg-[#d4af37] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#1c1c0c] shadow-md transition duration-200 hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-[#1c1c0c]"
              >
                Request Bulk Quote <FiArrowRight className="text-sm" />
              </Link>
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2  bg-[#d4af37] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#1c1c0c] shadow-md transition duration-200 hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-[#1c1c0c]"
              >
                Request Catalogue
              </Link>
              <a
                href={generateWhatsAppUrl({ type: "generic", data: { requirement: "Hi Reet Foods, I need product gifting help." } })}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#25d366] bg-[#25d366] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-md transition duration-200 hover:bg-[#20ba57] hover:border-[#20ba57]"
              >
                Talk to Specialist
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/15 pt-6 sm:grid-cols-4">
              {[
                { value: "FSSAI", label: "No. 21525083009881" },
                { value: "GST", label: "Compliant Invoicing" },
                { value: "Bulk", label: "Corporate Orders" },
                { value: "PAN", label: "India Delivery" },
              ].map((stat) => (
                <div key={stat.label} className="reef-fade-up">
                  <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#d4af37]">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative min-h-[360px] overflow-hidden border border-white/20 bg-[#1c1c1c] sm:min-h-[460px] transition-all duration-1000 ${animVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <Image
              src={Images.nutsSetTable}
              alt="Reet Foods luxury dry fruits and chocolate gifting collection"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4 bg-[#7a0019] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-md">
              Handcrafted In Pune
            </div>
            <div className="absolute bottom-6 left-6 right-6 border border-white/20 bg-black/60 p-4 backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d4af37]">
                Featured Heritage Curation
              </p>
              <p className="mt-1 font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
                Signature Origin Nut Quartet &amp; Truffle Set
              </p>
              <p className="mt-1 text-xs text-white/80 line-clamp-1">
                Airtight sealed almond tin, cashew box, pistachio tin &amp;
                premium dark truffles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
