"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FiAlertOctagon, FiRefreshCw, FiHome } from "react-icons/fi";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route level error caught:", error);
  }, [error]);

  return (
    <div className="mx-auto my-16 max-w-xl px-4 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-reef-burgundy shadow-sm">
        <FiAlertOctagon className="h-8 w-8" />
      </div>
      <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-reef-charcoal sm:text-4xl">
        Something went wrong!
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-reef-charcoal/70 sm:text-base">
        We encountered an error loading this section. Please try refreshing or return home.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => {
            try {
              reset();
            } catch {
              // fallback
            }
            if (typeof window !== "undefined") {
              window.location.reload();
            }
          }}
          className="inline-flex items-center gap-2 rounded-full bg-reef-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#1c1c1c] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-reef-burgundy hover:text-white hover:shadow-lg"
        >
          <FiRefreshCw className="h-4 w-4" />
          <span>Try Again</span>
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border-2 border-reef-gold/40 bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-reef-charcoal shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-reef-burgundy hover:bg-reef-burgundy hover:text-white hover:shadow-md"
        >
          <FiHome className="h-4 w-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
