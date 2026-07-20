"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Category = { slug: string; name: string };

export default function CategoryDropdown({ 
  currentSlug, 
  categories 
}: { 
  currentSlug: string; 
  categories: Category[] 
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const currentCategory = categories.find(c => c.slug === currentSlug);

  return (
    <div
      className="relative inline-block text-left w-full sm:w-auto z-40 mb-6"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-reef-charcoal/70 uppercase tracking-widest">
          Quick Switch:
        </span>
        <button
          type="button"
          className="inline-flex justify-between items-center w-full sm:w-36 rounded-xl border border-reef-gold/30 shadow-sm px-3 py-1.5 bg-white text-xs font-medium text-reef-charcoal hover:bg-reef-gold/5 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-reef-gold"
          onClick={() => setIsOpen(s => !s)}
        >
          {currentCategory?.name || "Select Category"}
          <svg className="-mr-1 ml-2 h-4 w-4 text-reef-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 sm:left-[115px] mt-2 rounded-xl shadow-xl bg-white border border-reef-gold/20 ring-1 ring-black ring-opacity-5 divide-y divide-reef-gold/10 overflow-hidden min-w-[120px] max-w-[220px]">
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => {
                setIsOpen(false);
                router.push(`/products/${c.slug}`);
              }}
              className={`block w-full text-left px-3 py-2 text-xs ${
                currentSlug === c.slug 
                  ? 'bg-reef-gold/10 font-bold text-reef-burgundy' 
                  : 'text-reef-charcoal hover:bg-reef-gold/5'
              } transition`}
            >
              {c.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
