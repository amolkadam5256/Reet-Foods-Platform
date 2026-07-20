import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-600 transition hover:border-emerald-300 hover:text-emerald-700 md:right-8"
      aria-label={label}
    >
      <FaWhatsapp className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
    </Link>
  );
}
