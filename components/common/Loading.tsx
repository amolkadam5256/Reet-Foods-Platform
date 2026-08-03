import React from "react";

export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dimensions = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={`animate-spin rounded-full border-reef-gold/30 border-t-reef-burgundy ${dimensions[size]}`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-reef-gold/15 bg-white p-4">
      <div className="h-48 w-full rounded-lg bg-reef-cream/80" />
      <div className="mt-4 h-4 w-2/3 rounded bg-reef-cream" />
      <div className="mt-2 h-3 w-1/3 rounded bg-reef-cream" />
      <div className="mt-4 flex justify-between">
        <div className="h-5 w-16 rounded bg-reef-cream" />
        <div className="h-5 w-12 rounded bg-reef-cream" />
      </div>
    </div>
  );
}
