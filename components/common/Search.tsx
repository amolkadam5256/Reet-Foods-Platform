"use client";

import React, { ChangeEvent } from "react";
import { FiSearch, FiX } from "react-icons/fi";

export interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function Search({
  value,
  onChange,
  placeholder = "Search dry fruits, gift boxes, chocolates...",
  className = "",
}: SearchProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange("");
  };

  return (
    <div className={`relative flex items-center ${className}`}>
      <FiSearch className="absolute left-3.5 h-4 w-4 text-reef-charcoal/50 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded-full border border-reef-gold/30 bg-white py-2.5 pl-10 pr-9 text-xs text-reef-charcoal placeholder-reef-charcoal/40 shadow-sm transition-all focus:border-reef-burgundy focus:outline-none focus:ring-2 focus:ring-reef-gold/30"
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search query"
          className="absolute right-3 rounded-full p-1 text-reef-charcoal/50 hover:bg-reef-cream hover:text-reef-burgundy focus-visible:outline-none"
        >
          <FiX className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
