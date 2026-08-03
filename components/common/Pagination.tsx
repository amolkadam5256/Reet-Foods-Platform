import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="my-8 flex items-center justify-center gap-1.5">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-reef-gold/30 bg-white text-reef-charcoal transition hover:border-reef-burgundy hover:text-reef-burgundy disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reef-gold"
      >
        <FiChevronLeft className="h-4 w-4" />
      </button>

      {pages.map((p) => {
        const isActive = p === currentPage;
        return (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            aria-current={isActive ? "page" : undefined}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold transition ${
              isActive
                ? "bg-reef-gold text-reef-charcoal shadow-sm"
                : "border border-reef-gold/20 bg-white text-reef-charcoal hover:border-reef-burgundy hover:text-reef-burgundy"
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reef-gold`}
          >
            {p}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-reef-gold/30 bg-white text-reef-charcoal transition hover:border-reef-burgundy hover:text-reef-burgundy disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reef-gold"
      >
        <FiChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
