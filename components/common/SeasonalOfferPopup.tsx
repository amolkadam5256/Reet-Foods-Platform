"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiCheck, FiX } from "react-icons/fi";

const DISMISS_KEY = "reet-foods-seasonal-offer-dismissed";

export default function SeasonalOfferPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closePopup = () => {
    sessionStorage.setItem(DISMISS_KEY, "true");
    setIsOpen(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;

    const timer = window.setTimeout(() => setIsOpen(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Submission failed");
      setIsSubscribed(true);
    } catch {
      setSubmitError("We could not submit your request. Please try again or contact us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#17110d]/70 px-4 py-5 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="seasonal-offer-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePopup();
      }}
    >
      <section className="relative grid w-full max-w-4xl overflow-hidden bg-[#fffaf3] shadow-[0_30px_100px_rgba(0,0,0,0.45)] md:grid-cols-[1.05fr_0.95fr]">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={closePopup}
          aria-label="Close offer"
          className="absolute right-0 top-0 z-10 inline-flex h-11 w-11 items-center justify-center bg-white/90 text-reef-charcoal shadow-sm transition hover:bg-reef-burgundy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reef-gold focus-visible:ring-offset-2"
        >
          <FiX className="text-xl" />
        </button>

        <div className="order-2 px-6 py-9 sm:px-10 sm:py-11 md:order-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-reef-burgundy">
            A little welcome gift
          </p>
          <h2
            id="seasonal-offer-title"
            className="mt-3 font-[family-name:var(--font-playfair)] text-4xl leading-[1.05] text-reef-charcoal sm:text-5xl"
          >
            Enjoy 10% off your first order
          </h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-reef-charcoal/70 sm:text-base">
            Join the Reet Foods circle for thoughtful gifting ideas, seasonal
            launches, and a welcome offer for your first premium hamper.
          </p>

          {isSubscribed ? (
            <div className="mt-7 border border-reef-gold/30 bg-white px-4 py-4 text-sm text-reef-charcoal">
              <FiCheck className="mr-2 inline text-reef-burgundy" />
              Thank you! Your welcome offer is on its way.
            </div>
          ) : (
            <form className="mt-7" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="396d5fbe-478d-410f-ba07-fc23570be37c" />
              <input type="hidden" name="subject" value="New Reet Foods seasonal offer signup" />
              <input type="hidden" name="from_name" value="Reet Foods Website" />
              <label className="sr-only" htmlFor="seasonal-offer-email">
                Email address
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id="seasonal-offer-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  className="min-h-12 flex-1 border border-reef-gold/25 bg-white px-5 text-sm outline-none transition placeholder:text-reef-charcoal/40 focus:border-reef-gold focus:ring-2 focus:ring-reef-gold/20"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-reef-burgundy px-5 text-sm font-semibold text-white transition hover:bg-[#5d0013] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reef-gold focus-visible:ring-offset-2"
                >
                  {isSubmitting ? "Submitting…" : "Claim my offer"} <FiArrowRight />
                </button>
              </div>
              <p className="mt-3 text-xs leading-5 text-reef-charcoal/50">
                No spam, just beautiful gifting inspiration. You can unsubscribe
                anytime.
              </p>
              {submitError ? <p className="mt-3 text-xs text-reef-burgundy">{submitError}</p> : null}
            </form>
          )}

          <div className="mt-6 flex items-center gap-4 text-sm">
            <Link
              href="/products"
              onClick={closePopup}
              className="font-semibold text-reef-burgundy transition hover:text-reef-charcoal"
            >
              Explore our gift boxes
            </Link>
            <button
              type="button"
              onClick={closePopup}
              className="text-reef-charcoal/60 underline-offset-4 transition hover:text-reef-charcoal hover:underline"
            >
              Maybe later
            </button>
          </div>
        </div>

        <div className="relative order-1 min-h-52 overflow-hidden bg-[#2a1710] md:order-2 md:min-h-full">
          <Image
            src="/images/category_dry_fruits.png"
            alt="A premium Reet Foods dry fruit gift selection"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b0d08]/75 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 border border-white/25 bg-black/20 px-4 py-3 text-white backdrop-blur-sm">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-reef-gold">
              Handpicked for gifting
            </p>
            <p className="mt-1 font-[family-name:var(--font-playfair)] text-xl">
              Premium flavours, beautifully packed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
