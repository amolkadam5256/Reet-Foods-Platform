"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiArrowRight,
  FiSliders,
  FiUsers,
  FiAward,
  FiPackage,
  FiBriefcase,
  FiFileText,
  FiHeadphones,
} from "react-icons/fi";

const reasons = [
  {
    icon: FiSliders,
    title: "Customized Hampers",
    desc: "Thoughtfully curated combinations tailored to your specific budget, dietary preferences, and gifting objective.",
  },
  {
    icon: FiUsers,
    title: "Employee, Client & Partner Gifting",
    desc: "Targeted assortments designed for large employee teams, valued clients, vendors, and business associates.",
  },
  {
    icon: FiAward,
    title: "Company Logo & Branding",
    desc: "Custom metallic gold or silver logo foil stamping, branded gift sleeves, and personalized message cards.",
  },
  {
    icon: FiPackage,
    title: "Multiple Packaging Styles",
    desc: "Rigid magnetic keepsake boxes, handcrafted wooden trunks, embossed festive tins, and elegant tray platters.",
  },
  {
    icon: FiBriefcase,
    title: "Bulk Corporate Orders",
    desc: "Bulk corporate orders welcome with tiered quantity-based pricing, batch consistency, and disciplined fulfillment.",
  },
  {
    icon: FiFileText,
    title: "GST Invoicing Available",
    desc: "GST invoicing available for corporate orders and business accounting.",
  },
  {
    icon: FiHeadphones,
    title: "Personalized Support",
    desc: "Prompt quotation and requirement support with professional order coordination from sampling to final delivery.",
  },
];

export function Testimonials() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="why-choose-diwali-heading"
      id="why-choose-diwali"
    >
      <div className="border border-reef-gold/20 bg-white p-8 sm:p-12 lg:p-14 shadow-sm">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-reef-burgundy">
            Corporate Gifting Advantage
          </p>
          <h2
            id="why-choose-diwali-heading"
            className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl"
          >
            Why Choose Reet Foods for Corporate Diwali Gifting?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-reef-charcoal/75 sm:text-base">
            Designed for Corporate HR, Admin &amp; Procurement Requirements — delivering thoughtfully curated hampers with dependable service, transparent pricing, and prompt fulfillment.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group flex flex-col justify-between border border-reef-gold/15 bg-[#fcfbf8] p-6 transition duration-300 hover:border-reef-gold hover:bg-white hover:shadow-md ${
                  idx === 6 ? "sm:col-span-2 lg:col-span-3 xl:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7efe1] text-[#7a0019] transition duration-300 group-hover:bg-reef-gold group-hover:text-[#1c1c1c] mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal group-hover:text-reef-burgundy transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-reef-charcoal/70">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-reef-gold/10 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-reef-gold">
                  <span>Pillar {idx + 1}</span>
                  <span className="text-reef-charcoal/40">Reet Foods</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#111111] p-6 text-white sm:flex-row sm:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-reef-gold">
              Plan Corporate Diwali Gifting 2026
            </p>
            <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold">
              Ready to explore tailored hamper options?
            </h3>
            <p className="mt-1 text-xs text-white/70">
              Bulk corporate orders welcome. Quantity-based pricing &amp; prompt quotation available.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/#corporate-quotation"
              className="inline-flex items-center gap-2 rounded-full bg-reef-gold px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#1c1c1c] shadow-md transition hover:bg-white hover:text-reef-charcoal"
            >
              Get Diwali Quotation <FiArrowRight />
            </Link>
            <a
              href="https://wa.me/919225130732?text=Hi%20Reet%20Foods%2C%20I%20am%20interested%20in%20Corporate%20Diwali%20Gifting%202026.%20Please%20share%20suitable%20hamper%20options."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#25D366] bg-[#25D366] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#1da851]"
            >
              <FaWhatsapp className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
