import Link from "next/link";
import type { ReactNode } from "react";

export default function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-full flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-reef-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-reef-gold to-reef-burgundy flex items-center justify-center text-reef-charcoal font-semibold">
              RF
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-reef-burgundy font-semibold">
                Reet Foods
              </p>
              <p className="text-xs text-reef-charcoal/70">Pune, India</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link className="hover:text-reef-gold transition" href="/products">
              Products
            </Link>
            <Link className="hover:text-reef-gold transition" href="/about">
              About
            </Link>
            <Link className="hover:text-reef-gold transition" href="/gallery">
              Gallery
            </Link>
            <Link className="hover:text-reef-gold transition" href="/contact">
              Contact
            </Link>
          </nav>
          <Link
            href="/contact#quote"
            className="inline-flex items-center gap-2 rounded-full bg-reef-gold text-reef-charcoal px-4 py-2 text-sm font-semibold shadow-lg shadow-reef-burgundy/15 hover:-translate-y-0.5 transition"
          >
            Get Best Quote
          </Link>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-reef-gold/20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-8 md:grid-cols-3">
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



