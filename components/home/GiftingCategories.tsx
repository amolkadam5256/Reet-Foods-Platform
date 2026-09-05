import React from "react";
import Link from "next/link";
import { FiArrowRight, FiUsers, FiBriefcase, FiStar } from "react-icons/fi";
import { getCampaignYear } from "@/lib/site";

export function GiftingCategories() {
  const year = getCampaignYear();

  const categories = [
    {
      num: "01",
      title: "Employee Gifting",
      icon: <FiUsers className="h-6 w-6 text-reef-gold" />,
      forText: "For large teams and staff.",
      highlights: [
        "Budget-friendly options from ₹400",
        "Uniform premium packaging",
        "Individual name tags & greeting cards",
        "Bulk corporate delivery coordination",
      ],
      ctaText: "EXPLORE EMPLOYEE GIFTS",
      href: "/corporate-gifting#employee",
      badge: "Large Teams & Staff",
    },
    {
      num: "02",
      title: "Client & Business Partner Gifting",
      icon: <FiBriefcase className="h-6 w-6 text-reef-gold" />,
      forText: "For clients, vendors and business associates.",
      highlights: [
        "Custom metallic foil company logo",
        "Exquisite dry fruits & chocolate curation",
        "Curated gourmet assortments",
        "PAN India multi-address dispatch",
      ],
      ctaText: "EXPLORE CLIENT GIFTS",
      href: "/corporate-gifting#client",
      badge: "Clients & Associates",
    },
    {
      num: "03",
      title: "Premium Corporate Gifting",
      icon: <FiStar className="h-6 w-6 text-reef-gold" />,
      forText: "For senior executives and key relationships.",
      highlights: [
        "Handcrafted wooden & luxury rigid boxes",
        "Graded jumbo nuts & artisanal treats",
        "Custom branded executive message",
        "Careful packaging & dependable dispatch coordination",
      ],
      ctaText: "VIEW PREMIUM GIFTS",
      href: "/corporate-gifting#premium",
      badge: "Senior Executives & VIPs",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 border-t border-reef-gold/15" id="corporate-categories">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-reef-burgundy">
            Diwali {year} Solutions
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl font-bold text-reef-charcoal">
            Corporate Gifting Categories
          </h2>
          <p className="mt-3 text-sm sm:text-base text-reef-charcoal/75 leading-relaxed">
            Tailored gifting programs designed specifically for corporate procurement, HR managers, and leadership teams.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-reef-gold/20 bg-[#faf8f3] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-reef-gold hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-reef-gold">
                    {cat.num}
                  </span>
                  <span className="rounded-full bg-reef-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-reef-burgundy">
                    {cat.badge}
                  </span>
                </div>

                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm mb-4">
                  {cat.icon}
                </div>

                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-reef-charcoal">
                  {cat.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-reef-charcoal/70 leading-relaxed min-h-[44px]">
                  <strong>Ideal For:</strong> {cat.forText}
                </p>

                <div className="mt-5 border-t border-reef-gold/15 pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-reef-burgundy mb-2">
                    Key Features:
                  </p>
                  <ul className="space-y-1.5 text-xs text-reef-charcoal/80">
                    {cat.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-reef-gold font-bold">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-reef-gold/15">
                <Link
                  href={cat.href}
                  className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#1c1c1c] shadow-sm transition-all duration-300 hover:bg-[#7a0019] hover:text-white hover:shadow-md hover:-translate-y-0.5"
                >
                  <span>{cat.ctaText}</span>
                  <FiArrowRight className="text-sm transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
