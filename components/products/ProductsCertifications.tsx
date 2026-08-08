"use client";

import { FiAward, FiCheckCircle, FiShield, FiStar } from "react-icons/fi";

interface ProductsCertificationsProps {
  animVisible: boolean;
}

const certifications = [
  {
    name: "FSSAI Certified",
    desc: "License #11521034000123 - Full food safety compliance.",
    icon: FiShield,
    isFssai: true,
  },
  {
    name: "ISO 22000",
    desc: "International food safety management system certified.",
    icon: FiAward,
  },
  {
    name: "HACCP Compliant",
    desc: "Hazard analysis and critical control points in production.",
    icon: FiCheckCircle,
  },
  {
    name: "Vegetarian Society",
    desc: "100% vegetarian certified with green dot emblem.",
    icon: FiStar,
  },
];

const trustItems = [
  "100% Vegetarian",
  "Dust-Free Cleanroom",
  "Zero Artificial Preservatives",
  "Nitrogen Sealed Freshness",
  "Insured Cold-Chain Shipping",
  "FSSAI Certified",
  "ISO 22000",
];

export function ProductsCertifications({
  animVisible,
}: ProductsCertificationsProps) {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-label="Trust indicators"
    >
      <div className="border border-reef-gold/20 bg-white p-8 sm:p-12">
        <div className="mb-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
            Our Standards
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
            Certified Excellence
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-reef-charcoal/70">
            Adhering to the highest global standards in food safety,
            manufacturing, and quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.name}
                className={`group flex flex-col items-center gap-4 border border-reef-gold/15 bg-white p-7 text-center transition-all duration-300 hover:border-reef-gold/40 hover:bg-reef-cream ${animVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex h-16 w-16 items-center justify-center border border-[#d4af37]/25 bg-[#fdf8ee] transition duration-300 group-hover:bg-[#d4af37]/20">
                  <Icon className="h-8 w-8 text-[#c8a84b] transition duration-300 group-hover:text-[#7a0019]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-reef-charcoal">
                    {cert.name}
                  </h3>
                  {cert.isFssai && (
                    <span className="mt-1 inline-block rounded bg-reef-burgundy/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#7a0019]">
                      Lic. #11521034000123
                    </span>
                  )}
                  <p className="mt-1.5 text-[12px] leading-5 text-reef-charcoal/70">
                    {cert.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mt-12 w-full overflow-hidden border-t border-reef-gold/10 pt-8">
          <div className="reef-marquee flex gap-16 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex min-w-full shrink-0 justify-around gap-16"
                aria-hidden={copy === 1}
              >
                {trustItems.map((item) => (
                  <span key={item}>- {item}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
