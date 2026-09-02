import Link from "next/link";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingQuoteButton() {
  return (
    <Link
      href={generateWhatsAppUrl({
        type: "generic",
        data: { requirement: "I want a quick gifting quote." },
      })}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-20 right-4 md:right-8 z-50 inline-flex items-center gap-2 rounded-full bg-reef-gold px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#1c1c1c] shadow-2xl transition-all duration-200 hover:-translate-y-1 hover:bg-reef-burgundy hover:text-white hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)]"
    >
      WhatsApp Quote
    </Link>
  );
}
