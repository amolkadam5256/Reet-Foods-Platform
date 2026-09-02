import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { getCampaignYear } from "@/lib/site";

export function CustomizationSection() {
  const year = getCampaignYear();

  const steps = [
    {
      num: "1",
      title: "Company Logo",
      desc: "High-resolution gold, silver, or metallic foil logo stamping on boxes, sleeves & ribbons.",
    },
    {
      num: "2",
      title: "Custom Box & Finish",
      desc: "Select rigid matte boxes, velvet-lined trays, wooden caskets, or eco-friendly kraft boxes.",
    },
    {
      num: "3",
      title: "Personalized Message",
      desc: "Custom-printed festive Diwali greeting cards with leadership messages or recipient names.",
    },
    {
      num: "4",
      title: "Selected Products",
      desc: "Curate your mix of vacuum-sealed California dry fruits, Belgian-recipe chocolates & sweets.",
    },
    {
      num: "5",
      title: "Bespoke Hamper",
      desc: "Beautifully assembled, quality-checked, and safely packed for doorstep corporate dispatch.",
    },
  ];

  const features = [
    "Metallic Gold & Silver Logo Foil Stamping",
    "Custom Branded Sleeves & Butter Paper",
    "Personalized CEO / Founder Message Cards",
    "Custom Product Combinations & Weights",
    "FSSAI Certified Nitrogen Fresh Packing",
    "Customizable for Quantities from 25 to 5,000+",
  ];

  return (
    <section className="bg-white py-16 sm:py-20 border-t border-reef-gold/15" id="customization">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-reef-burgundy">
            Bespoke Branding Program
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl font-bold text-reef-charcoal">
            Your Company. Your Budget. Your Brand.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-reef-charcoal/75 leading-relaxed">
            Every corporate Diwali hamper can be transformed into a memorable brand ambassador with seamless customization and premium packaging.
          </p>
        </div>

        {/* 5-Step Visual Flow */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-14">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-2xl border border-reef-gold/20 bg-[#faf8f3] p-6 shadow-sm text-center hover:border-reef-gold transition duration-200"
            >
              <div>
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-reef-gold text-sm font-bold text-[#1c1c1c]">
                  {step.num}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-reef-charcoal/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-reef-gold font-bold">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features + CTA Box */}
        <div className="rounded-3xl border border-reef-gold/25 bg-gradient-to-br from-[#1a0a0a] to-[#2a1410] p-8 sm:p-12 text-white shadow-xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-reef-gold">
                Tailored Corporate Packaging
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white">
                Turn Every Diwali {year} Gift into a Brand Experience
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/75 leading-relaxed">
                Whether you need elegant logo sleeves for 100 employee hampers or handcrafted premium boxes for 50 VIP clients, our Pune studio handles complete design mockups and fabrication.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/919225130732?text=${encodeURIComponent(
                    `Hi Reet Foods, I would like to discuss custom branding & packaging for Corporate Diwali ${year} hampers.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#25D366] bg-[#25D366] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-[#1da851] hover:border-[#1da851] hover:shadow-lg hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="text-base" /> DISCUSS YOUR CUSTOM HAMPER
                </a>
                <a
                  href="/#corporate-quotation"
                  className="inline-flex items-center gap-2 rounded-full bg-reef-gold px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1c1c1c] shadow-md transition-all duration-200 hover:bg-white hover:text-reef-charcoal hover:shadow-lg hover:-translate-y-0.5"
                >
                  REQUEST PROPOSAL <FiArrowRight />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-gold mb-4">
                Customization Checklist Included:
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-white/85">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-reef-gold/20 text-reef-gold">
                      <FiCheck className="h-3 w-3" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
