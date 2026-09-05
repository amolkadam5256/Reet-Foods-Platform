"use client";

import {
  LuShieldCheck,
  LuClipboardCheck,
  LuDroplets,
  LuStar,
} from "react-icons/lu";
import { certifications } from "@/data/home";

const certIcons: React.ElementType[] = [
  LuShieldCheck,
  LuClipboardCheck,
  LuDroplets,
  LuStar,
];

export function Certifications() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="certifications-heading"
    >
      <div className="border border-reef-gold/15 bg-white px-8 py-12">
        <div className="mb-10 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-reef-gold">
            Our Standards
          </p>
          <h2
            id="certifications-heading"
            className="mt-4 font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal sm:text-4xl"
          >
            Certified Excellence
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-reef-charcoal/70">
            Adhering to high standards in food hygiene, packaging integrity, and quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {certifications.map((cert, i) => {
            const Icon = certIcons[i] ?? LuShieldCheck;
            const isFssai = cert.name.includes("FSSAI");
            return (
              <div
                key={cert.name}
                className="group flex flex-col items-center gap-4 border border-reef-gold/15 bg-white p-7 text-center transition duration-300 hover:border-reef-gold/40 hover:bg-reef-cream"
              >
                <div className="flex h-16 w-16 items-center justify-center border border-[#d4af37]/25 bg-[#fdf8ee] transition duration-300 group-hover:bg-[#d4af37]/20">
                  <Icon
                    className="h-8 w-8 text-[#c8a84b] transition duration-300 group-hover:text-[#7a0019]"
                    strokeWidth={1.25}
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-reef-charcoal">{cert.name}</h3>
                  {isFssai && (
                    <span className="mt-1 inline-block bg-reef-burgundy/10 text-[#7a0019] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      FSSAI No. 21525083009881
                    </span>

                  )}
                  <p className="mt-1.5 text-[12px] leading-5 text-reef-charcoal/70">{cert.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sliding Ribbon */}
        <div className="mt-12 border-t border-reef-gold/10 pt-8 overflow-hidden relative w-full">
          <div className="flex gap-16 reef-marquee whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
            <div className="flex shrink-0 gap-16 justify-around min-w-full">
              <span>· 100% Vegetarian</span>
              <span>· FSSAI Licensed</span>
              <span>· Zero Artificial Preservatives</span>
              <span>· Food-Grade Packaging</span>
              <span>· PAN-India Corporate Delivery</span>
            </div>
            <div className="flex shrink-0 gap-16 justify-around min-w-full" aria-hidden="true">
              <span>· 100% Vegetarian</span>
              <span>· FSSAI Licensed</span>
              <span>· Zero Artificial Preservatives</span>
              <span>· Food-Grade Packaging</span>
              <span>· PAN-India Corporate Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

