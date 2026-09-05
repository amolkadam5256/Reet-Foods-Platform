"use client";

import { FiBriefcase, FiShare2, FiShield, FiTrendingUp, FiTruck, FiZap } from "react-icons/fi";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

const benefits = [
  {
    icon: FiTrendingUp,
    title: "Volume Discounts",
    desc: "Attractive quantity-based discounts with tiered corporate pricing.",
  },
  {
    icon: FiZap,
    title: "Prompt Support",
    desc: "Prompt quotation and requirement support with sample options upon request.",
  },
  {
    icon: FiShield,
    title: "Quality Guarantee",
    desc: "FSSAI-licensed operations with food-grade freshness packing.",
  },
  {
    icon: FiTruck,
    title: "Pan-India Delivery",
    desc: "Careful consignment packing and multi-city delivery coordination.",
  },
];

export function BulkOrdersSection() {
  const handlePartnerShare = () => {
    const text =
      "Partner with Reet Foods for premium corporate gifting solutions. FSSAI licensed, custom branding, Pan-India delivery.";
    window.open(
      generateWhatsAppUrl({ type: "partner", data: { requirement: text } }),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-label="Bulk orders"
    >
      <div className="border border-reef-gold/30 bg-[#111111] p-8 text-white sm:p-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
              Bulk Orders &amp; Corporate Desk
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl">
              Planning Bulk Corporate Gifts?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80">
              Bulk corporate orders welcome. Enjoy quantity-based pricing, dedicated order
              coordination, custom company logo branding, and doorstep Pan-India dispatch.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-3 border border-white/10 bg-white/5 p-4 transition hover:border-[#d4af37]/40"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-white/70">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 border border-white/15 bg-white/5 p-8 text-center">
            <div className="flex h-24 w-24 items-center justify-center border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37]">
              <FiBriefcase className="h-12 w-12" />
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
              Corporate Partnership
            </h3>
            <p className="text-sm leading-6 text-white/70">
              Become a preferred gifting partner. Enjoy exclusive pricing,
              priority production, and dedicated order coordination support.
            </p>
            <div className="mt-2 flex flex-col gap-3">
              <a
                href={generateWhatsAppUrl({ type: "partner", data: { requirement: "Hi Reet Foods, I am interested in becoming a gifting partner." } })}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#25d366] bg-[#25d366] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#20ba57]"
              >
                Partner With Us on WhatsApp
              </a>
              <button
                type="button"
                onClick={handlePartnerShare}
                className="inline-flex items-center justify-center gap-2 border-2 border-white bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#7a0019] transition hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1c1c1c]"
              >
                <FiShare2 className="text-sm" /> Share Partnership Opportunity
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
