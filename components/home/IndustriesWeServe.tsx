"use client";

import { industries } from "@/data/home";

const iconPaths: Record<string, string> = {
  building:
    "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  hotel:
    "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  utensils:
    "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  heart:
    "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  store:
    "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
  truck:
    "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.61L23 6H6",
  globe:
    "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  gift:
    "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
};

export function IndustriesWeServe() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="industries-heading"
    >
      <div className="mb-10 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-reef-gold">
          Industry Reach
        </p>
        <h2
          id="industries-heading"
          className="mt-4 font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal sm:text-4xl"
        >
          Trusted Across Industries
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-reef-charcoal/70">
          From large corporate teams to growing businesses, our gifting solutions
          are designed to scale across different requirements.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {industries.map((item) => (
          <div
            key={item.label}
            className="group flex flex-col items-center gap-3 border border-reef-gold/15 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-reef-gold/45 hover:bg-reef-cream hover:shadow-[0_12px_24px_rgba(18,12,8,0.06)]"
          >
            <div className="flex h-10 w-10 items-center justify-center border border-reef-gold/20 text-reef-charcoal/60 transition duration-300 group-hover:border-reef-gold/40 group-hover:text-reef-burgundy group-hover:scale-105">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.6}
                  d={iconPaths[item.icon] ?? iconPaths.gift}
                />
              </svg>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-reef-charcoal/70 transition duration-300 group-hover:text-reef-charcoal">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
