"use client";

import React from "react";
import Link from "next/link";
import { FiPhoneCall, FiMessageSquare } from "react-icons/fi";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export function StickyCTA() {
  const quickQuoteUrl = generateWhatsAppUrl({
    type: "generic",
    data: { requirement: "I want a quick gifting quote." },
  });

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full border border-reef-gold/40 bg-reef-charcoal/95 px-5 py-2.5 shadow-2xl backdrop-blur-md transition-all sm:hidden">
      <Link
        href="/contact#quote"
        className="flex items-center gap-1.5 text-xs font-semibold text-reef-gold hover:text-white"
      >
        <FiPhoneCall className="h-3.5 w-3.5" />
        <span>Get Quote</span>
      </Link>
      <div className="h-4 w-px bg-reef-gold/30" />
      <a
        href={quickQuoteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
      >
        <FiMessageSquare className="h-3.5 w-3.5" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}
