"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import HeaderTopBar from "@/components/common/HeaderTopBar";
import HeaderNavBar from "@/components/common/HeaderNavBar";
import SeasonalOfferPopup from "@/components/common/SeasonalOfferPopup";
import { categories } from "@/data/categories";
import { productCategories } from "@/data/products";

type MenuGroup = {
  title: string;
  links: Array<{ label: string; href: string }>;
  image?: string;
};

type NavItem = {
  label: string;
  href: string;
  kind: "shop" | "simple";
};

type SearchScope = "All" | "Products" | "Categories" | "Pages";

type SearchEntry = {
  label: string;
  href: string;
  scope: SearchScope;
  description: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", kind: "simple" },
  { label: "Products", href: "/products", kind: "shop" },
  { label: "Corporate Gifting", href: "/corporate-gifting", kind: "simple" },
  { label: "About", href: "/about", kind: "simple" },
  { label: "Gallery", href: "/gallery", kind: "simple" },
  { label: "Blog", href: "/blog", kind: "simple" },
  { label: "Contact", href: "/contact", kind: "simple" },
];

const menuGroups: Record<string, MenuGroup[]> = {
  shop: [
    {
      title: "Products",
      links: [
        { label: "Premium Dry Fruits", href: "/products/premium-dry-fruits" },
        {
          label: "Artisanal Chocolates",
          href: "/products/artisanal-chocolates",
        },
        { label: "Celebration Hampers", href: "/products/celebration-hampers" },
        { label: "Cold-Pressed Juices", href: "/products/cold-pressed-juices" },
        { label: "Build Your Box", href: "/contact" },
      ],
    },
  ],
};

const searchEntries: SearchEntry[] = [
  {
    label: "Home",
    href: "/",
    scope: "Pages",
    description: "Return to the homepage",
  },
  {
    label: "Products",
    href: "/products",
    scope: "Pages",
    description: "Browse all product categories",
  },
  {
    label: "Corporate Gifting",
    href: "/corporate-gifting",
    scope: "Pages",
    description: "Plan branded and bulk gifting programmes",
  },
  {
    label: "Blog",
    href: "/blog",
    scope: "Pages",
    description: "Read gifting and brand stories",
  },
  {
    label: "About Us",
    href: "/about",
    scope: "Pages",
    description: "Learn about Reet Foods",
  },
  {
    label: "Contact",
    href: "/contact",
    scope: "Pages",
    description: "Get in touch with our team",
  },
  {
    label: "FAQ",
    href: "/faq",
    scope: "Pages",
    description: "Find quick answers",
  },
  {
    label: "Premium Dry Fruits",
    href: "/products/premium-dry-fruits",
    scope: "Categories",
    description:
      "Premium origin almonds, pistachios, cashews, figs and raisins.",
  },
  {
    label: "Artisanal Chocolates",
    href: "/products/artisanal-chocolates",
    scope: "Categories",
    description: "Hand-poured Belgian chocolates and pralines.",
  },
  {
    label: "Cold-Pressed Juices",
    href: "/products/cold-pressed-juices",
    scope: "Categories",
    description: "Fresh, no-concentrate juices.",
  },
  {
    label: "Celebration Hampers",
    href: "/products/celebration-hampers",
    scope: "Categories",
    description: "Curated red and gold hampers for every occasion.",
  },
  ...categories.map((category) => ({
    label: category.title,
    href: category.href,
    scope: "Categories" as const,
    description: category.copy,
  })),
  ...productCategories.flatMap((category) => [
    {
      label: category.name,
      href: `/products/${category.slug}`,
      scope: "Products" as const,
      description: category.intro,
    },
    ...category.items.map((item) => ({
      label: item.name,
      href: `/products/${category.slug}`,
      scope: "Products" as const,
      description: item.detail,
    })),
  ]),
];

export default function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchScope, setSearchScope] = useState<SearchScope>("All");
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const currentGroups = useMemo(() => {
    if (!openMenu) return [];
    return menuGroups[openMenu] ?? [];
  }, [openMenu]);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return searchEntries.filter((entry) => {
      const matchesScope = searchScope === "All" || entry.scope === searchScope;
      const haystack = `${entry.label} ${entry.description}`.toLowerCase();
      const matchesQuery = !q || haystack.includes(q);
      return matchesScope && matchesQuery;
    });
  }, [searchQuery, searchScope]);

  const suggestedResults = useMemo(() => {
    if (searchQuery.trim()) return searchResults.slice(0, 6);
    return searchEntries.slice(0, 6);
  }, [searchQuery, searchResults]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-full flex flex-col bg-[#fbf7f1] text-reef-charcoal">
      <HeaderTopBar
        isScrolled={isScrolled}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenMobile={() => setMobileOpen(true)}
      />
      <HeaderNavBar
        isActive={isActive}
        isScrolled={isScrolled}
        navItems={navItems}
        currentGroups={currentGroups}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      {isScrolled ? (
        <div className="h-[54px] lg:block hidden" aria-hidden />
      ) : null}

      <main className="flex-1">{children}</main>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[70] bg-black/45 lg:hidden">
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Close menu overlay"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-[88vw] max-w-sm bg-white p-5">
            <div className="mb-6 flex items-center justify-between">
              <Image
                src="/images/logo.png"
                alt="Reet Foods"
                width={120}
                height={44}
                priority
              />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation"
                className="text-reef-charcoal"
              >
                ×
              </button>
            </div>
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between border border-reef-gold/10 px-4 py-3 font-[family-name:var(--font-playfair)] text-sm font-semibold tracking-wide text-reef-charcoal transition duration-200 ease-out hover:border-reef-gold hover:text-reef-burgundy"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.label}</span>
                  <span aria-hidden>⌄</span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      ) : null}

      {searchOpen ? (
        <div className="fixed inset-0 z-[80] bg-black/55 px-4 pt-12 pb-6 backdrop-blur-sm sm:px-6 sm:pt-16">
          <div className="mx-auto max-w-4xl">
            <div className="border border-reef-gold/20 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.2)]">
              <div className="flex items-center justify-between border-b border-reef-gold/10 px-5 py-4 sm:px-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-reef-burgundy">
                    Search
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-reef-charcoal">
                    Find products, categories, and pages
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center border border-reef-gold/15 text-reef-charcoal transition duration-200 ease-out hover:border-reef-gold hover:text-reef-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reef-gold focus-visible:ring-offset-2"
                  aria-label="Close search"
                >
                  ×
                </button>
              </div>
              <div className="space-y-5 px-5 pb-6 pt-6 sm:px-6 sm:pb-7 sm:pt-7">
                <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                  <label className="flex items-center gap-3 border border-reef-gold/15 bg-[#faf8f3] px-4 py-3">
                    <span aria-hidden className="text-reef-gold">
                      ⌕
                    </span>
                    <input
                      autoFocus
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      type="search"
                      placeholder="Search dry fruits, chocolate boxes, pages..."
                      className="w-full bg-transparent text-sm outline-none placeholder:text-reef-charcoal/35"
                    />
                  </label>
                  <label className="flex items-center gap-2 border border-reef-gold/15 bg-white px-4 py-3 text-sm text-reef-charcoal/70">
                    <span>Filter</span>
                    <select
                      value={searchScope}
                      onChange={(event) =>
                        setSearchScope(
                          event.target.value as
                            | "All"
                            | "Products"
                            | "Categories"
                            | "Pages",
                        )
                      }
                      className="bg-transparent outline-none"
                    >
                      {["All", "Products", "Categories", "Pages"].map(
                        (scope) => (
                          <option key={scope} value={scope}>
                            {scope}
                          </option>
                        ),
                      )}
                    </select>
                  </label>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["All", "Products", "Categories", "Pages"].map((scope) => (
                    <button
                      key={scope}
                      type="button"
                      onClick={() =>
                        setSearchScope(
                          scope as "All" | "Products" | "Categories" | "Pages",
                        )
                      }
                      className={[
                        "border px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition duration-200 ease-out",
                        searchScope === scope
                          ? "border-reef-gold bg-reef-gold text-white"
                          : "border-reef-gold/15 bg-white text-reef-charcoal hover:border-reef-gold hover:text-reef-burgundy",
                      ].join(" ")}
                    >
                      {scope}
                    </button>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-reef-gold">
                      Suggestions
                    </p>
                    <p className="text-xs text-reef-charcoal/45">
                      {searchResults.length} results
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {suggestedResults.length ? (
                      suggestedResults.map((item) => (
                        <Link
                          key={`${item.scope}-${item.href}-${item.label}`}
                          href={item.href}
                          onClick={() => setSearchOpen(false)}
                          className="border border-reef-gold/15 px-4 py-4 transition duration-200 ease-out hover:border-reef-gold hover:bg-reef-cream"
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-reef-gold">
                            {item.scope}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-reef-charcoal">
                            {item.label}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-reef-charcoal/60">
                            {item.description}
                          </p>
                        </Link>
                      ))
                    ) : (
                      <div className="border border-dashed border-reef-gold/20 px-4 py-6 text-sm text-reef-charcoal/65 sm:col-span-2">
                        No results found. Try a different keyword or switch the
                        filter to All.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <SeasonalOfferPopup />

      <footer className="border-t border-reef-gold/15 bg-[#111111] text-white">
        <div className="mx-auto max-w-[1440px] px-4 pt-14 pb-10 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.6fr_0.7fr_0.7fr_0.7fr_0.7fr_0.9fr]">
            {/* Brand */}
            <div className="space-y-5">
              <p className="text-2xl font-[family-name:var(--font-playfair)] text-reef-gold">
                Reet Foods & Gifting
              </p>
              <p className="max-w-xs text-sm leading-7 text-white/60">
                Premium dry fruits, artisanal chocolates, and bespoke gift
                hampers. Trusted by India&apos;s leading corporations, wedding
                planners, and gift buyers.
              </p>
              <div className="flex flex-wrap gap-3 pt-1 text-xs text-white/35">
                <span>FSSAI Licensed</span>
                <span>·</span>
                <span>ISO Certified</span>
                <span>·</span>
                <span>PAN India</span>
              </div>
              {/* Social */}
              <div className="flex gap-3 pt-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/50 transition hover:border-reef-gold/50 hover:text-reef-gold"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                    />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/50 transition hover:border-reef-gold/50 hover:text-reef-gold"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                    />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.5"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/50 transition hover:border-reef-gold/50 hover:text-reef-gold"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    />
                    <circle
                      cx="4"
                      cy="4"
                      r="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                    />
                  </svg>
                </a>
                <a
                  href="https://wa.me/919890609611"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/50 transition hover:border-[#25d366]/50 hover:text-[#25d366]"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Shop */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-reef-gold">
                Shop
              </p>
              <div className="space-y-3 text-sm text-white/65">
                <Link
                  href="/products/premium-dry-fruits"
                  className="block transition hover:text-reef-gold"
                >
                  Premium Dry Fruits
                </Link>
                <Link
                  href="/products/artisanal-chocolates"
                  className="block transition hover:text-reef-gold"
                >
                  Artisanal Chocolates
                </Link>
                <Link
                  href="/products/celebration-hampers"
                  className="block transition hover:text-reef-gold"
                >
                  Celebration Hampers
                </Link>
                <Link
                  href="/products/cold-pressed-juices"
                  className="block transition hover:text-reef-gold"
                >
                  Cold-Pressed Juices
                </Link>
                <Link
                  href="/contact"
                  className="block transition hover:text-reef-gold"
                >
                  Build Your Box
                </Link>
              </div>
            </div>

            {/* Corporate */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-reef-gold">
                Corporate
              </p>
              <div className="space-y-3 text-sm text-white/65">
                <Link
                  href="/corporate-gifting"
                  className="block transition hover:text-reef-gold"
                >
                  Corporate Gifting
                </Link>
                <Link
                  href="/contact#bulk"
                  className="block transition hover:text-reef-gold"
                >
                  Bulk Orders
                </Link>
                <Link
                  href="/contact#catalog"
                  className="block transition hover:text-reef-gold"
                >
                  Request Catalogue
                </Link>
                <Link
                  href="/contact#quote"
                  className="block transition hover:text-reef-gold"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-reef-gold">
                Company
              </p>
              <div className="space-y-3 text-sm text-white/65">
                <Link
                  href="/about"
                  className="block transition hover:text-reef-gold"
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  className="block transition hover:text-reef-gold"
                >
                  Blog
                </Link>
                <Link
                  href="/gallery"
                  className="block transition hover:text-reef-gold"
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="block transition hover:text-reef-gold"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-reef-gold">
                Legal
              </p>
              <div className="space-y-3 text-sm text-white/65">
                <Link
                  href="/privacy-policy"
                  className="block transition hover:text-reef-gold"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-conditions"
                  className="block transition hover:text-reef-gold"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/shipping-policy"
                  className="block transition hover:text-reef-gold"
                >
                  Shipping & Returns
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-reef-gold">
                Contact
              </p>
              <div className="space-y-3 text-sm text-white/65">
                <a
                  href="tel:+919890609611"
                  className="flex items-start gap-2 transition hover:text-reef-gold"
                >
                  <svg
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-reef-gold/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +91 98906 09611
                </a>
                <a
                  href="tel:+918007518088"
                  className="flex items-start gap-2 transition hover:text-reef-gold"
                >
                  <svg
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-reef-gold/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +91 80075 18088
                </a>
                <a
                  href="mailto:reetfoodspune@gmail.com"
                  className="flex items-start gap-2 transition hover:text-reef-gold"
                >
                  <svg
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-reef-gold/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  reetfoodspune@gmail.com
                </a>
                <a
                  href="https://wa.me/919890609611"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2 transition hover:text-[#25d366]"
                >
                  <svg
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-reef-gold/60"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Chat
                </a>
                <p className="flex items-start gap-2 text-white/45">
                  <svg
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-reef-gold/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    Shop F14, Streets of Europe Mall, Hinjewadi Phase I, Pune
                    411057
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
            <p className="text-xs text-white/35">
              © {new Date().getFullYear()} Reet Foods & Gifting. All rights
              reserved. Crafted in Pune, India.
            </p>
            <p className="text-xs text-white/25">
              Premium Dry Fruits · Artisanal Chocolates · Corporate Gifting ·
              PAN India Delivery
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
