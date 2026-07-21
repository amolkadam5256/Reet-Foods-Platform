"use client";

import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiSearch } from "react-icons/fi";

type HeaderTopBarProps = {
  isScrolled: boolean;
  onOpenSearch: () => void;
  onOpenMobile: () => void;
};

export default function HeaderTopBar({ isScrolled, onOpenSearch, onOpenMobile }: HeaderTopBarProps) {
  return (
    <div className={["sticky top-0 z-50 lg:relative lg:z-auto border-b border-reef-gold/10 bg-white", isScrolled ? "shadow-[0_4px_16px_rgba(0,0,0,0.04)]" : ""].join(" ")}>
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <Link href="/" className="shrink-0">
          <Image src="/images/logo.png" alt="Reet Foods" width={72} height={72} priority />
        </Link>
        <div className="ml-auto flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenSearch}
            className="inline-flex h-11 w-11 items-center justify-center border border-reef-gold/20 bg-white text-reef-charcoal shadow-sm transition duration-200 ease-out hover:border-reef-gold hover:text-reef-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reef-gold focus-visible:ring-offset-2"
            aria-label="Open search"
          >
            <FiSearch className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-reef-gold/20 text-reef-charcoal transition duration-200 ease-out hover:border-reef-gold hover:text-reef-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reef-gold focus-visible:ring-offset-2 md:hidden"
            onClick={onOpenMobile}
            aria-label="Open navigation"
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
