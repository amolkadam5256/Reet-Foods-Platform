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
    <div className="relative inline-block text-left w-full sm:w-auto z-40 mb-6">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-reef-charcoal/70 uppercase tracking-widest">
          Quick Switch:
        </span>
        <button
          type="button"
          className="inline-flex justify-between items-center w-full sm:w-64 rounded-xl border border-reef-gold/30 shadow-sm px-4 py-2 bg-white text-sm font-medium text-reef-charcoal hover:bg-reef-gold/5 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-reef-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {currentCategory?.name || "Select Category"}
          <svg className="-mr-1 ml-2 h-5 w-5 text-reef-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 sm:left-[115px] mt-2 w-full sm:w-64 rounded-xl shadow-xl bg-white border border-reef-gold/20 ring-1 ring-black ring-opacity-5 divide-y divide-reef-gold/10 overflow-hidden">
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => {
                setIsOpen(false);
                router.push(`/products/${c.slug}`);
              }}
              className={`block w-full text-left px-4 py-3 text-sm ${
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
