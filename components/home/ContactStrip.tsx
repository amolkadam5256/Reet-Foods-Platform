export function ContactStrip() {
  return (
    <div className="border-b border-reef-gold/10 bg-[#fdf9f5]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-reef-charcoal/65 sm:justify-start">
          <a
            href="tel:+919225130732"
            className="flex items-center gap-2 font-semibold transition hover:text-reef-burgundy"
          >
            <svg className="h-4 w-4 text-reef-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 92251 30732
          </a>
          <a
            href="mailto:reetfoodspune@gmail.com"
            className="flex items-center gap-2 transition hover:text-reef-burgundy"
          >
            <svg className="h-4 w-4 text-reef-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            reetfoodspune@gmail.com
          </a>
        </div>
        <p className="flex items-center gap-2 text-[11px] text-reef-charcoal/45">
          <svg className="h-3.5 w-3.5 text-reef-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Shop F14, Streets of Europe Mall, Hinjewadi Phase I, Pune 411057
        </p>
      </div>
    </div>
  );
}
