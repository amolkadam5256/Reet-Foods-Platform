import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { getCampaignYear } from "@/lib/site";

export function PreviousDesigns() {
  const year = getCampaignYear();

  const designs = [
    {
      title: "Royal Crimson Dry Fruit Box",
      theme: "Classic 4-Partition Satin Lined Box",
      desc: "Custom foiled logo with California almonds, cashews, raisins, and walnut kernels.",
      image: "/images/category_dry_fruits.png",
      tag: "Employee Favorite",
    },
    {
      title: "Gold Embellished Chocolate Trunk",
      theme: "Handcrafted Rigid Box with Magnet Lock",
      desc: "Assorted dark & milk artisanal truffles with custom printed festive sleeve.",
      image: "/images/category_chocolates.png",
      tag: "Client Gifting",
    },
    {
      title: "Wellness & Gourmet Celebration Hamper",
      theme: "Cold-Pressed Juices + Nuts Fusion",
      desc: "Healthy non-sugar wellness combination with custom founder message card.",
      image: "/images/category_juices.png",
      tag: "Executive Tier",
    },
  ];

  return (
    <section className="bg-[#fbf7f1] py-16 sm:py-20 border-t border-reef-gold/15" id="previous-designs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-reef-burgundy">
            Visual Proof & Portfolio
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl font-bold text-reef-charcoal">
            Previous Diwali Designs
          </h2>
          <div className="mt-3 inline-block rounded-xl border border-reef-gold/30 bg-reef-cream/70 px-4 py-2 text-xs font-semibold text-reef-burgundy">
            Illustrative curation — final contents subject to availability and quotation. 2026 hamper designs, packaging and branding can be customized according to requirement.
          </div>
          <p className="mt-3 text-xs sm:text-sm text-reef-charcoal/70 leading-relaxed max-w-2xl mx-auto">
            Explore concepts crafted for corporate clients across Pune. All {year} collections feature refreshed packaging styles, gourmet combinations, and custom company branding options.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {designs.map((design, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl border border-reef-gold/20 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-reef-gold hover:shadow-lg"
            >
              <div className="relative h-56 w-full bg-[#2a1c15] overflow-hidden">
                <Image
                  src={design.image}
                  alt={design.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3 rounded-full bg-reef-burgundy px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow">
                  {design.tag}
                </div>
              </div>

              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-reef-gold mb-1">
                  {design.theme}
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">
                  {design.title}
                </h3>
                <p className="mt-2 text-xs text-reef-charcoal/70 leading-relaxed">
                  {design.desc}
                </p>

                <div className="mt-5 pt-4 border-t border-reef-gold/10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-reef-burgundy">
                    Customizable for {year}
                  </span>
                  <Link
                    href="/#corporate-quotation"
                    className="inline-flex items-center gap-1 text-xs font-bold text-reef-charcoal hover:text-reef-gold transition"
                  >
                    Customize This <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
