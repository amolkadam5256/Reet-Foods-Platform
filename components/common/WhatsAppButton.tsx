import Link from "next/link";

export function WhatsAppButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-4 md:right-8 z-50 inline-flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-2xl hover:-translate-y-0.5 transition"
    >
      {label}
    </Link>
  );
}
