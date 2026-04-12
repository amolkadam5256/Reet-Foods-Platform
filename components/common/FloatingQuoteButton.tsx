import Link from "next/link";

export function FloatingQuoteButton() {
  return (
    <Link
      href="/contact#quote"
      className="fixed bottom-20 right-4 md:right-8 z-50 inline-flex items-center gap-2 bg-reef-gold text-reef-charcoal px-4 py-3 rounded-full shadow-2xl hover:-translate-y-0.5 transition"
    >
      Get Best Quote →
    </Link>
  );
}
