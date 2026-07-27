"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/data/home";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-4.5 w-4.5 text-[#d4af37]"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(next, 5000);
    return () => window.clearInterval(timer);
  }, [active, paused]);

  return (
    <section
      className="mx-auto max-w-[1440px] px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="testimonials-heading"
    >
      <div className="mb-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-reef-gold">
            Client Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal sm:text-4xl"
          >
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-reef-charcoal/70 sm:mx-0">
            Hear from the HR leaders, event planners, and retail partners who trust us for
            premium gifting across India.
          </p>
        </div>
        {/* Aggregate score badge */}
        <div className="flex shrink-0 flex-col items-center gap-1 border border-reef-gold/20 bg-white px-6 py-4">
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map((s) => (
              <svg key={s} className={`h-4 w-4 ${s <= 4 ? "text-[#d4af37]" : "text-[#d4af37]"}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-reef-charcoal">4.9 / 5</p>
          <p className="text-[11px] text-reef-charcoal/55">From 500+ Client Reviews</p>
        </div>
      </div>

      {/* Large featured card + 2 mini cards */}
      <div
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Featured */}
        <div className="col-span-1 flex flex-col justify-between border border-reef-gold/20 bg-[#111111] p-8 text-white md:col-span-2 lg:col-span-2">
          <div>
            {/* Decorative opening quote */}
            <span aria-hidden="true" className="block font-[family-name:var(--font-playfair)] text-6xl leading-none text-reef-gold/30 select-none">&ldquo;</span>
            <div className="mt-2">
              <StarRating count={testimonials[active].rating} />
            </div>
            <blockquote className="mt-6 font-[family-name:var(--font-playfair)] text-xl leading-8 text-white/90">
              &ldquo;{testimonials[active].quote}&rdquo;
            </blockquote>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-[#d4af37]">{testimonials[active].name}</p>
              <p className="mt-1 text-sm font-medium text-white/80">
                {testimonials[active].role} · {testimonials[active].company}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1c1c1c]"
              >
                <FiChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1c1c1c]"
              >
                <FiChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Side cards */}
        <div className="flex flex-col gap-5">
          {testimonials
            .filter((_, i) => i !== active)
            .slice(0, 2)
            .map((t) => (
              <div
                key={t.name}
                className="flex flex-1 flex-col justify-between border border-reef-gold/15 bg-white p-6"
              >
                <div>
                  <StarRating count={t.rating} />
                  <p className="mt-4 text-[13px] leading-6 text-reef-charcoal/70 line-clamp-3">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-5">
                  <p className="text-sm font-semibold text-reef-charcoal">{t.name}</p>
                  <p className="mt-0.5 text-xs text-reef-charcoal/50">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
