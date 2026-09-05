import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { getCampaignYear } from "@/lib/site";

export function HampersBudgetBands() {
  const year = getCampaignYear();

  const budgetBands = [
    {
      range: "₹400 – ₹600",
      tier: "Tier 1: Essential Corporate",
      suitableFor: "Large employee teams, staff appreciation & bulk distribution",
      image: "/images/category_dry_fruits.png",
      popularItems: "California Almonds, Roasted Cashews, Festive Packaging, Custom Ribbon",
      orderPolicy: "Bulk corporate orders welcome. Quantity-based pricing available.",
      badge: "Best for Scale",
      waMsg: `Hi Reet Foods, I am interested in Corporate Diwali ${year} hampers in the ₹400–₹600 budget range. Please share suitable options.`,
    },
    {
      range: "₹700 – ₹1,000",
      tier: "Tier 2: Classic Celebration",
      suitableFor: "Mid-level staff, corporate associates & vendor relations",
      image: "/images/category_chocolates.png",
      popularItems: "Dry Fruits Quad Box, Artisanal Chocolates, Metallic Logo Tag, Greeting Card",
      orderPolicy: "Bulk corporate orders welcome. Quantity-based pricing available.",
      badge: "Most Ordered",
      waMsg: `Hi Reet Foods, I am interested in Corporate Diwali ${year} hampers in the ₹700–₹1,000 budget range. Please share suitable options.`,
    },
    {
      range: "₹1,200 – ₹1,500",
      tier: "Tier 3: Executive Heritage",
      suitableFor: "Key clients, senior executives & business partner appreciation",
      image: "/images/category_juices.png",
      popularItems: "Afghani Anjeer, Iranian Pistachios, Premium Truffles, Rigid Branded Box",
      orderPolicy: "Bulk corporate orders welcome. Quantity-based pricing available.",
      badge: "Client Favourite",
      waMsg: `Hi Reet Foods, I am interested in Corporate Diwali ${year} hampers in the ₹1,200–₹1,500 budget range. Please share suitable options.`,
    },
    {
      range: "₹2,000 – ₹3,000+",
      tier: "Tier 4: Royal Connoisseur VIP",
      suitableFor: "CXOs, Board Members, VIP Clients & Premium Relations",
      image: "/images/category_dry_fruits.png",
      popularItems: "Handcrafted Wooden Casket, Jumbo Dry Fruits, Gold-foiled Artisanal Sweets, Bespoke Letter",
      orderPolicy: "Bulk corporate orders welcome. Quantity-based pricing available.",
      badge: "VIP Luxury",
      waMsg: `Hi Reet Foods, I am interested in Corporate Diwali ${year} VIP Luxury hampers in the ₹2,000–₹3,000+ range. Please share suitable options.`,
    },
  ];

  return (
    <section className="bg-[#fbf7f1] py-16 sm:py-20 border-t border-reef-gold/15" id="hampers-budget">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-reef-burgundy">
            Budget-Friendly To Luxury VIP
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl font-bold text-reef-charcoal">
            Corporate Diwali Hampers for Every Budget
          </h2>
          <p className="mt-3 text-sm sm:text-base text-reef-charcoal/75 leading-relaxed">
            Choose from our indicative budget bands. Every hamper is customized with your company branding, preferred products, and packaging styles.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {budgetBands.map((band, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-reef-gold/20 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-reef-gold hover:shadow-xl"
            >
              <div>
                <div className="relative h-48 w-full bg-[#2a1c15] overflow-hidden">
                  <Image
                    src={band.image}
                    alt={band.tier}
                    fill
                    className="object-cover opacity-90 transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-reef-burgundy px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow">
                      {band.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs text-reef-gold font-medium">{band.tier}</p>
                    <p className="text-xl font-bold font-[family-name:var(--font-playfair)]">
                      {band.range}
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold text-reef-charcoal/90">
                    <span className="text-reef-burgundy font-bold">Suitable For: </span>
                    {band.suitableFor}
                  </p>

                  <div className="mt-4 rounded-lg bg-[#faf8f3] p-3 border border-reef-gold/10">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-reef-charcoal/70 mb-1">
                      Example Curation:
                    </p>
                    <p className="text-xs text-reef-charcoal/80 leading-relaxed">
                      {band.popularItems}
                    </p>
                  </div>

                  <p className="mt-3 text-[11px] text-reef-charcoal/75 font-medium">
                    {band.orderPolicy}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-2">
                <Link
                  href="/#corporate-quotation"
                  className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-reef-gold px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#1c1c1c] shadow-sm transition-all duration-200 hover:bg-reef-burgundy hover:text-white hover:shadow-md hover:-translate-y-0.5"
                >
                  <span>REQUEST QUOTE</span>
                  <FiArrowRight className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
                <a
                  href={`https://wa.me/919225130732?text=${encodeURIComponent(band.waMsg)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1da851] shadow-sm transition-all duration-200 hover:bg-[#25D366] hover:text-white hover:shadow-md hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="h-3.5 w-3.5" /> WHATSAPP
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial disclaimer per brief */}
        <div className="mt-8 rounded-xl border border-reef-gold/20 bg-reef-cream/40 p-4 text-center text-xs text-reef-charcoal/80">
          <p>
            ℹ️ <strong>Note for Procurement & HR:</strong> Final contents and pricing depend on quantity, customization and delivery requirements. Actual product mixes, weights, packaging finishes, and landed prices are confirmed during quotation based on your specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
