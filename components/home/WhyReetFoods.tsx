import React from "react";
import {
  FiSliders,
  FiGift,
  FiAward,
  FiDollarSign,
  FiPackage,
  FiHeadphones,
} from "react-icons/fi";
import { getCampaignYear } from "@/lib/site";

export function WhyReetFoods() {
  const year = getCampaignYear();

  const benefits = [
    {
      icon: <FiSliders className="h-6 w-6 text-reef-gold" />,
      title: "Customized Gifting",
      desc: "Hampers customized according to your exact corporate budget, quantity, and gifting purpose.",
    },
    {
      icon: <FiGift className="h-6 w-6 text-reef-gold" />,
      title: "Wide Product Selection",
      desc: "Premium California almonds, Afghani anjeer, artisanal chocolates, cold-pressed beverages & luxury gift boxes.",
    },
    {
      icon: <FiAward className="h-6 w-6 text-reef-gold" />,
      title: "Corporate Branding",
      desc: "Custom company metallic foil logo branding, personalized gift sleeves, and corporate greetings.",
    },
    {
      icon: <FiDollarSign className="h-6 w-6 text-reef-gold" />,
      title: "Flexible Budgets",
      desc: "Thoughtful corporate gifting options starting from ₹400 per hamper with executive VIP tiers available.",
    },
    {
      icon: <FiPackage className="h-6 w-6 text-reef-gold" />,
      title: "Bulk Orders + GST Invoicing",
      desc: "Built for enterprise volumes (50 to 5,000+ units) with 100% compliant B2B GST ITC tax billing.",
    },
    {
      icon: <FiHeadphones className="h-6 w-6 text-reef-gold" />,
      title: "Personalized Support",
      desc: "Dedicated corporate gifting support in Pune from hamper selection through multi-location delivery.",
    },
  ];

  return (
    <section className="bg-[#fbf7f1] py-16 sm:py-20 border-t border-reef-gold/15" id="why-choose-us">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-reef-burgundy">
            Why Pune Corporates Choose Reet Foods
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl font-bold text-reef-charcoal">
            Corporate Diwali Gifting {year} Made Seamless
          </h2>
          <p className="mt-3 text-sm sm:text-base text-reef-charcoal/75 leading-relaxed">
            Delivering trusted, FSSAI-certified food gifts with end-to-end customization, transparent pricing, and punctual corporate delivery across Pune and PAN India.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-reef-gold/20 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-reef-gold hover:shadow-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-reef-cream mb-5">
                {item.icon}
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-reef-charcoal/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
