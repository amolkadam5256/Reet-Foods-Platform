"use client";

import Link from "next/link";
import {
  FiArrowRight,
  FiStar,
  FiBriefcase,
  FiHeart,
  FiGift,
  FiUsers,
  FiAward,
  FiSmile,
} from "react-icons/fi";

type OccasionFilter =
  | "all"
  | "corporate"
  | "wedding"
  | "festival"
  | "employee"
  | "milestone"
  | "personal";
type RecipientFilter =
  | "all"
  | "employees"
  | "clients"
  | "wedding"
  | "family"
  | "vip"
  | "events";

const occasions = [
  {
    title: "Corporate Gifting",
    subtitle: "Client & Partner Appreciation",
    icon: FiBriefcase,
    href: "/contact#quote",
  },
  {
    title: "Wedding Favours",
    subtitle: "Luxury Wedding Keepsakes",
    icon: FiHeart,
    href: "/contact#quote",
  },
  {
    title: "Festival Gifts",
    subtitle: "Diwali, New Year & Eid Curations",
    icon: FiGift,
    href: "/products/categories/hampers",
  },
  {
    title: "Employee Onboarding",
    subtitle: "Welcome Kits & Rewards",
    icon: FiUsers,
    href: "/contact#quote",
  },
  {
    title: "Client Milestones",
    subtitle: "High-Value Relationship Gifting",
    icon: FiAward,
    href: "/contact#quote",
  },
  {
    title: "Personal Celebrations",
    subtitle: "Anniversaries & Special Days",
    icon: FiSmile,
    href: "/products/categories/chocolates",
  },
];

const recipients = [
  {
    name: "For Employees",
    desc: "Motivate and reward teams with healthy nut tins & artisanal chocolates.",
    count: "15+ Hampers",
  },
  {
    name: "For Key Clients",
    desc: "Build lasting corporate trust with laser-branded magnetic gift boxes.",
    count: "20+ Curations",
  },
  {
    name: "For Wedding Guests",
    desc: "Handcrafted royal wedding favours with custom foil-stamped notes.",
    count: "12+ Designs",
  },
  {
    name: "For Family & Friends",
    desc: "Festive dry fruit hampers curated for home celebrations and joy.",
    count: "18+ Boxes",
  },
  {
    name: "For VIP Partners",
    desc: "Ultra-luxury gift hampers featuring origin saffron, dates & dark truffles.",
    count: "10+ Premium Sets",
  },
  {
    name: "For Event Attendees",
    desc: "Sleek mini dry fruit jars and juice bottles for conferences and expos.",
    count: "25+ Options",
  },
];

interface OccasionRecipientFiltersProps {
  occasionFilter: OccasionFilter;
  setOccasionFilter: (f: OccasionFilter) => void;
  recipientFilter: RecipientFilter;
  setRecipientFilter: (f: RecipientFilter) => void;
}

export function OccasionRecipientFilters({
  occasionFilter,
  setOccasionFilter,
  recipientFilter,
  setRecipientFilter,
}: OccasionRecipientFiltersProps) {
  const filteredOccasions =
    occasionFilter === "all"
      ? occasions
      : occasions.filter((o) => {
          if (occasionFilter === "corporate")
            return (
              o.title === "Corporate Gifting" || o.title === "Client Milestones"
            );
          if (occasionFilter === "wedding")
            return o.title === "Wedding Favours";
          if (occasionFilter === "festival")
            return o.title === "Festival Gifts";
          if (occasionFilter === "employee")
            return o.title === "Employee Onboarding";
          if (occasionFilter === "milestone")
            return o.title === "Client Milestones";
          if (occasionFilter === "personal")
            return o.title === "Personal Celebrations";
          return true;
        });

  const filteredRecipients =
    recipientFilter === "all"
      ? recipients
      : recipients.filter((r) => {
          if (recipientFilter === "employees")
            return r.name === "For Employees";
          if (recipientFilter === "clients")
            return r.name === "For Key Clients";
          if (recipientFilter === "wedding")
            return r.name === "For Wedding Guests";
          if (recipientFilter === "family")
            return r.name === "For Family & Friends";
          if (recipientFilter === "vip") return r.name === "For VIP Partners";
          if (recipientFilter === "events")
            return r.name === "For Event Attendees";
          return true;
        });

  return (
    <section
      className="relative my-12 overflow-hidden border-y border-reef-gold/15 bg-gradient-to-b from-[#fdfbf7] via-white to-[#fdfbf7] py-5 sm:py-5"
      aria-label="Shop by occasion and recipient"
    >
      {/* Decorative background blur shapes */}
      <div
        className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-[#7a0019]/5 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14  text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-reef-charcoal sm:text-4xl lg:text-5xl">
            Shop by Occasion &amp; Recipient
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-reef-charcoal/70 sm:text-base">
            Find the perfect gift curation designed for corporate milestones,
            weddings, festivals, or personal celebrations.
          </p>
          <div className="mx-auto mt-6 h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>

        {/* Two-Column Grid: Occasions & Recipients */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Column 1: Occasions */}
          <div className="rounded-3xl border border-reef-gold/20 bg-white/60 p-6 backdrop-blur-md sm:p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-between border-b border-reef-gold/15 pb-4">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-reef-charcoal">
                By Occasion
              </h3>
              <span className="text-xs font-semibold text-[#7a0019]">
                {filteredOccasions.length} Curations
              </span>
            </div>

            {/* Occasion Filter Buttons */}
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {(
                [
                  "all",
                  "corporate",
                  "wedding",
                  "festival",
                  "employee",
                  "milestone",
                  "personal",
                ] as OccasionFilter[]
              ).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setOccasionFilter(filter)}
                  className={`rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
                    occasionFilter === filter
                      ? "bg-[#7a0019] text-white shadow-md ring-2 ring-[#7a0019]/20"
                      : "border border-reef-gold/20 bg-white text-reef-charcoal/80 hover:border-[#d4af37] hover:bg-[#fcf7ec] hover:text-[#7a0019]"
                  }`}
                >
                  {filter === "all"
                    ? "All Occasions"
                    : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>

            {/* Occasions List */}
            <div className="grid gap-4 sm:grid-cols-2">
              {filteredOccasions.map((item) => {
                const IconComp = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group relative flex flex-col justify-between rounded-2xl border border-reef-gold/20 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-lg"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d4af37]/30 bg-gradient-to-br from-[#fcf7ec] to-[#f7eee0] text-[#7a0019] shadow-xs group-hover:border-[#d4af37] group-hover:bg-[#7a0019] group-hover:text-white transition-all duration-300">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal group-hover:text-[#7a0019] transition-colors duration-200">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs text-reef-charcoal/70">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-end border-t border-reef-gold/10 pt-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7a0019] transition-all duration-300 group-hover:gap-2.5 group-hover:text-[#d4af37]">
                        View Catalog{" "}
                        <FiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 2: Recipients */}
          <div className="rounded-3xl border border-reef-gold/20 bg-white/60 p-6 backdrop-blur-md sm:p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-between border-b border-reef-gold/15 pb-4">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-reef-charcoal">
                By Recipient
              </h3>
              <span className="text-xs font-semibold text-[#7a0019]">
                {filteredRecipients.length} Categories
              </span>
            </div>

            {/* Recipient Filter Buttons */}
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {(
                [
                  "all",
                  "employees",
                  "clients",
                  "wedding",
                  "family",
                  "vip",
                  "events",
                ] as RecipientFilter[]
              ).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setRecipientFilter(filter)}
                  className={`rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
                    recipientFilter === filter
                      ? "bg-[#7a0019] text-white shadow-md ring-2 ring-[#7a0019]/20"
                      : "border border-reef-gold/20 bg-white text-reef-charcoal/80 hover:border-[#d4af37] hover:bg-[#fcf7ec] hover:text-[#7a0019]"
                  }`}
                >
                  {filter === "all"
                    ? "All Recipients"
                    : filter === "employees"
                      ? "For Employees"
                      : filter === "clients"
                        ? "For Clients"
                        : filter === "wedding"
                          ? "For Weddings"
                          : filter === "family"
                            ? "For Family"
                            : filter === "vip"
                              ? "For VIPs"
                              : "For Events"}
                </button>
              ))}
            </div>

            {/* Recipients List */}
            <div className="grid gap-4 sm:grid-cols-2">
              {filteredRecipients.map((r) => (
                <div
                  key={r.name}
                  className="group relative flex flex-col justify-between rounded-2xl border border-reef-gold/20 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-[#7a0019]/10 border border-[#7a0019]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7a0019]">
                        {r.count}
                      </span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fcf7ec] text-[#d4af37] border border-[#d4af37]/30">
                        <FiStar className="h-3.5 w-3.5 fill-[#d4af37]" />
                      </div>
                    </div>
                    <h4 className="mt-4 font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal group-hover:text-[#7a0019] transition-colors duration-200">
                      {r.name}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-reef-charcoal/75">
                      {r.desc}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-end border-t border-reef-gold/10 pt-3">
                    <Link
                      href="/contact#quote"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7a0019] transition-all duration-300 group-hover:gap-2.5 group-hover:text-[#d4af37]"
                    >
                      Inquire{" "}
                      <FiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
