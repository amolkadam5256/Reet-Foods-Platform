"use client";

import Link from "next/link";
import { FiShare2 } from "react-icons/fi";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export function ProductsFinalCTA() {
  const handlePartnerShare = () => {
    const text =
      "Partner with Reet Foods for premium luxury gifting solutions. FSSAI licensed, custom branding, PAN India delivery.";
    window.open(
      generateWhatsAppUrl({ type: "partner", data: { requirement: text } }),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-label="Partner sharing and final CTA"
    >
      <div className="border border-reef-gold/30 bg-[#111111] p-8 text-center text-white sm:p-14">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
          Concierge Assistance
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl">
          Can&apos;t Find the Perfect Gift?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/80">
          Talk directly to our master gifting curators to build custom hampers
          within your exact budget and timeline.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact#quote"
            className="inline-flex min-h-12 items-center justify-center border border-[#d4af37] bg-[#d4af37] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#1c1c1c] transition hover:bg-white hover:text-[#7a0019]"
          >
            Get Custom Quote
          </Link>
          <a
            href={generateWhatsAppUrl({ type: "generic", data: { requirement: "Hi Reet Foods, I need custom gifting help." } })}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center border-2 border-[#25d366] bg-[#25d366] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#20ba57] hover:text-white"
          >
            WhatsApp Specialist
          </a>
          <Link
            href="/contact#quote"
            className="inline-flex min-h-12 items-center justify-center border-2 border-white bg-[#111111] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1c1c1c]"
          >
            Request Catalogue
          </Link>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#d4af37]">
            Partner With Reet Foods
          </p>
          <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
            Become a Gifting Partner
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70">
            Share our luxury gifting collection with your network and earn
            exclusive commissions on every referral.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handlePartnerShare}
              className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-[#25d366] bg-[#25d366] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#20ba57] hover:text-white"
            >
              <FiShare2 className="text-sm" /> Share Partnership on WhatsApp
            </button>
            <Link
              href="/contact#quote"
              className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-white bg-[#111111] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1c1c1c]"
            >
              Request Partner Kit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
