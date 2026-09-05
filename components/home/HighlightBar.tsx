"use client";

import {
  LuTruck,
  LuLeaf,
  LuShieldCheck,
  LuAward,
} from "react-icons/lu";

const highlights = [
  {
    icon: LuTruck,
    title: "PAN India Delivery",
    desc: "Reliable corporate dispatch",
  },
  {
    icon: LuLeaf,
    title: "Handpicked Quality",
    desc: "Origin-sourced, sealed fresh",
  },
  {
    icon: LuShieldCheck,
    title: "FSSAI Licensed",
    desc: "Food-grade hygiene standards",
  },
  {
    icon: LuAward,
    title: "Premium Grade",
    desc: "Luxury gift-ready finish",
  },
];

export function HighlightBar() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-14 sm:px-6 lg:px-8"
      aria-label="Brand highlights"
    >
      <div className="grid grid-cols-2 gap-px border border-reef-gold/15 bg-reef-gold/15 md:grid-cols-4">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group flex flex-col items-center gap-3 bg-white px-6 py-8 text-center transition duration-300 hover:bg-reef-cream"
            >
              <Icon
                className="h-10 w-10 text-[#c8a84b] transition duration-300 group-hover:text-[#7a0019]"
                strokeWidth={1.25}
              />
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-[13px] font-bold text-reef-charcoal">
                  {item.title}
                </p>
                <p className="mt-1 text-[11px] text-reef-charcoal/60">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
