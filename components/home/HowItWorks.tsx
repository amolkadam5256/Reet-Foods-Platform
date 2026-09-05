import React from "react";
import { FiFileText, FiList, FiEdit3, FiCheckSquare, FiTruck } from "react-icons/fi";
import { getCampaignYear } from "@/lib/site";

export function HowItWorks() {
  const year = getCampaignYear();

  const steps = [
    {
      num: "01",
      title: "Share Requirement",
      desc: "Tell us your quantity, target budget per gift, delivery location, and required delivery date in Pune or PAN India.",
      icon: <FiFileText className="h-5 w-5 text-reef-gold" />,
    },
    {
      num: "02",
      title: "Receive Options",
      desc: "Get curated digital catalogue options and transparent landed pricing tailored to your exact budget band.",
      icon: <FiList className="h-5 w-5 text-reef-gold" />,
    },
    {
      num: "03",
      title: "Customize",
      desc: "Select packaging materials, box colors, metallic logo foil placement, and custom greeting message cards.",
      icon: <FiEdit3 className="h-5 w-5 text-reef-gold" />,
    },
    {
      num: "04",
      title: "Approve & Order",
      desc: "Review a physical or digital pre-production sample, finalize the order, and receive a proforma GST invoice.",
      icon: <FiCheckSquare className="h-5 w-5 text-reef-gold" />,
    },
    {
      num: "05",
      title: "Preparation & Delivery",
      desc: "Reet Foods freshly packs, quality-checks, and dispatches consignments with professional order coordination.",
      icon: <FiTruck className="h-5 w-5 text-reef-gold" />,
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 border-t border-reef-gold/15" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-reef-burgundy">
            Transparent 5-Step Fulfillment
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl font-bold text-reef-charcoal">
            How Corporate Diwali {year} Gifting Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-reef-charcoal/75 leading-relaxed">
            From initial consultation to doorstep delivery, our structured B2B process ensures zero friction and complete peace of mind.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-reef-gold/20 bg-[#faf8f3] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-reef-gold hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-reef-gold">
                    {step.num}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs text-reef-charcoal/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-reef-gold/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-reef-burgundy">
                  Step {idx + 1} of 5
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
