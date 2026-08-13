"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export function FinalCTA() {
  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <div className="relative overflow-hidden bg-[#111111] px-8 py-16 text-center sm:px-14 sm:py-24">
        {/* Decorative background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, #d4af37 0%, transparent 60%), radial-gradient(circle at 75% 50%, #7a0019 0%, transparent 60%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-reef-gold/40 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-reef-gold/40 to-transparent"
          aria-hidden
        />

        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-reef-gold">
            Start Your Journey
          </p>
          <h2
            id="cta-heading"
            className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-playfair)] text-3xl text-white sm:text-5xl"
          >
            Ready to Elevate Your Gifting?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/65">
            Connect with our gifting experts today to design the perfect hampers
            for your next corporate event, wedding, or festive celebration.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 text-sm font-bold text-[#1c1c1c] shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#1c1c1c]"
            >
              Get a Quote <FiArrowRight />
            </Link>
            <Link
              href="/contact#catalog"
              style={{ color: "#7a0019" }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white px-8 py-4 text-sm font-bold shadow-md transition duration-200 hover:-translate-y-0.5 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1c1c1c]"
            >
              Request Catalogue
            </Link>
            <a
              href="https://wa.me/919890609611?text=Hi%20Reet%20Foods%2C%20I%20need%20a%20quote"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#25d366] bg-[#25d366] px-8 py-4 text-sm font-bold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-[#20ba57] hover:border-[#20ba57]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919890609611"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/90  px-8 py-4 text-sm font-bold text-reef-gold shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-reef-gold bg-reef-gold/90 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Call: +91 98906 09611</span>
            </a>
          </div>

          {/* Address */}
          <p className="mt-8 flex items-center justify-center gap-2 text-xs text-white/40">
            <svg
              className="h-4 w-4 text-reef-gold/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.6}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.6}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Shop F14, Streets of Europe Mall, Maan Road near Infosys Circle,
            Hinjewadi Phase I, Pune 411057
          </p>
        </div>
      </div>
    </section>
  );
}
