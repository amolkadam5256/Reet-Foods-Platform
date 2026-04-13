"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/95 border-b border-reef-gold/25 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 rounded-full overflow-hidden flex items-center justify-center bg-white border border-reef-gold/20 shadow-sm">
             <Image src="/images/logo.png" alt="Reet Foods & Giftings Logo" fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-reef-burgundy font-bold">
              Reet Foods & Giftings
            </p>
            <p className="text-xs text-reef-charcoal/70 font-medium">Pune, India</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-reef-charcoal/90">
          <Link className="hover:text-reef-gold transition duration-200" href="/">
            Home
          </Link>
          <Link className="hover:text-reef-gold transition duration-200" href="/products">
            Products
          </Link>
          <Link className="hover:text-reef-gold transition duration-200" href="/about">
            About
          </Link>
          <Link className="hover:text-reef-gold transition duration-200" href="/gallery">
            Gallery
          </Link>
          <Link className="hover:text-reef-gold transition duration-200" href="/contact">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact#quote"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-reef-gold text-white px-5 py-2.5 text-sm font-bold shadow-lg shadow-reef-gold/30 hover:-translate-y-0.5 hover:shadow-xl transition duration-300"
          >
            Get Best Quote
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-reef-charcoal hover:bg-black/5 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isOpen ? (
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
            ) : (
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-reef-gold/25 shadow-xl py-4 px-4 flex flex-col gap-4">
          <Link className="block px-4 py-2 hover:bg-reef-gold/10 rounded-lg text-sm font-semibold text-reef-charcoal transition" href="/">
            Home
          </Link>
          <Link className="block px-4 py-2 hover:bg-reef-gold/10 rounded-lg text-sm font-semibold text-reef-charcoal transition" href="/products">
            Products
          </Link>
          <Link className="block px-4 py-2 hover:bg-reef-gold/10 rounded-lg text-sm font-semibold text-reef-charcoal transition" href="/about">
            About
          </Link>
          <Link className="block px-4 py-2 hover:bg-reef-gold/10 rounded-lg text-sm font-semibold text-reef-charcoal transition" href="/gallery">
            Gallery
          </Link>
          <Link className="block px-4 py-2 hover:bg-reef-gold/10 rounded-lg text-sm font-semibold text-reef-charcoal transition" href="/contact">
            Contact
          </Link>
          <Link
            href="/contact#quote"
            className="mt-2 inline-flex justify-center items-center gap-2 rounded-xl bg-reef-gold text-white px-5 py-3 text-sm font-bold shadow-md w-full"
          >
            Get Best Quote
          </Link>
        </div>
      )}
    </header>
  );
}
