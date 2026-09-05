"use client";

import { useState } from "react";
import { faqs } from "@/data/home";
import { FiPlus, FiMinus } from "react-icons/fi";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="faq-heading"
    >
      <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:items-start">
        {/* Sticky aside */}
        <div className="lg:sticky lg:top-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-reef-gold">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-4 font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-sm leading-7 text-reef-charcoal/70">
            Everything you need to know about our products, ordering process,
            and delivery. Can&apos;t find an answer?
          </p>
          <a
            href={generateWhatsAppUrl({ type: "generic", data: { requirement: "Hi, I have a question about Reet Foods products." } })}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[#25d366] bg-[#25d366]/10 px-5 py-3 text-sm font-bold text-[#25d366] shadow-sm transition duration-200 hover:bg-[#25d366] hover:text-white"
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

          {/* Contact details */}
          <div className="mt-6 space-y-3 border-t border-reef-gold/10 pt-6">
            <a
              href="tel:+919225130732"
              className="flex items-center gap-2 text-sm text-reef-charcoal/70 transition hover:text-reef-burgundy"
            >
              <svg
                className="h-4 w-4 shrink-0 text-reef-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 92251 30732
            </a>
            <a
              href="mailto:reetfoodspune@gmail.com"
              className="flex items-center gap-2 text-sm text-reef-charcoal/70 transition hover:text-reef-burgundy"
            >
              <svg
                className="h-4 w-4 shrink-0 text-reef-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              reetfoodspune@gmail.com
            </a>
            <p className="flex items-start gap-2 text-xs text-reef-charcoal/45">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-reef-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Shop F14, Streets of Europe Mall, Hinjewadi Phase I, Pune 411057
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-reef-gold/15 border border-reef-gold/15 bg-white">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={open === index}
                className="flex w-full items-center justify-between px-6 py-5 text-left font-[family-name:var(--font-playfair)] text-base font-semibold text-reef-charcoal transition duration-200 hover:text-[#7a0019]"
              >
                <span className="pr-4">{faq.q}</span>
                <span className="shrink-0 text-[#d4af37]">
                  {open === index ? (
                    <FiMinus className="h-5 w-5" />
                  ) : (
                    <FiPlus className="h-5 w-5" />
                  )}
                </span>
              </button>
              <div
                className={[
                  "overflow-hidden transition-all duration-300",
                  open === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0",
                ].join(" ")}
              >
                <p className="px-6 pb-6 text-sm leading-7 text-reef-charcoal/80">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
