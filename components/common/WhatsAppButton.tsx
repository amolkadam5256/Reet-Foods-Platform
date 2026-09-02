import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-4 z-50 flex items-center gap-2 rounded-full border-2 border-[#25D366] bg-[#25D366] px-4 py-3 text-white shadow-xl transition-all duration-200 hover:-translate-y-1 hover:bg-[#1da851] hover:border-[#1da851] hover:shadow-2xl md:right-8"
      aria-label={label}
    >
      <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden text-xs font-bold uppercase tracking-wide sm:inline">WhatsApp</span>
    </Link>
  );
}
