import Link from "next/link";
import type { ReactNode } from "react";
import Header from "@/components/common/Header";

export default function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-full flex flex-col">
      <Header />

      <main className="flex-1">{children}</main>

      <footer className="border-t border-reef-gold/20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-lg font-serif text-reef-burgundy">
              Crafted Gifting, Pune
            </p>
            <p className="text-sm text-reef-charcoal/80">
              Reet Foods curates premium dry fruits, chocolates, juices and gift
              hampers for corporate, festive and wedding occasions.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-reef-burgundy mb-2">
              Explore
            </p>
            <div className="flex gap-4 text-sm text-reef-charcoal/80">
              <div className="space-y-1">
                <Link href="/" className="block hover:text-reef-gold">
                  Home
                </Link>
                <Link href="/products" className="block hover:text-reef-gold">
                  Products
                </Link>
                <Link href="/about" className="block hover:text-reef-gold">
                  About
                </Link>
              </div>
              <div className="space-y-1">
                <Link href="/gallery" className="block hover:text-reef-gold">
                  Gallery
                </Link>
                <Link href="/contact" className="block hover:text-reef-gold">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <p className="text-reef-burgundy font-semibold">Visit</p>
            <p className="text-reef-charcoal/80">
              Reet Foods, Pune
              <br />
              Maharashtra, India
            </p>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-reef-gold/40 px-4 py-2 hover:bg-reef-gold hover:text-reef-charcoal transition"
              href="https://wa.me/919999999999?text=Hi%20Reet%20Foods%2C%20I%20would%20like%20a%20quote"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-reef-cream/50 pb-6">
          © {new Date().getFullYear()} Reet Foods. Crafted in Pune.
        </p>
      </footer>
    </div>
  );
}



