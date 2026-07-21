"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import HeaderTopBar from "@/components/common/HeaderTopBar";
import HeaderNavBar from "@/components/common/HeaderNavBar";

type MenuGroup = {
  title: string;
  links: Array<{ label: string; href: string }>;
  image?: string;
};

type NavItem = {
  label: string;
  href: string;
  kind: "home" | "shop" | "simple" | "pages";
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", kind: "home" },
  { label: "Shop", href: "/products", kind: "shop" },
  { label: "Blog", href: "/blog", kind: "simple" },
  { label: "Pages", href: "/about", kind: "pages" },
  { label: "About Us", href: "/about", kind: "simple" },
  { label: "Contact", href: "/contact", kind: "simple" },
];

const menuGroups: Record<string, MenuGroup[]> = {
  home: [
    {
      title: "Home layouts",
      links: [
        { label: "Home One", href: "/" },
        { label: "Home Two", href: "/" },
        { label: "Home Three", href: "/" },
      ],
    },
  ],
  shop: [
    {
      title: "Shop page layout",
      links: [
        { label: "Grid Fullwidth", href: "/products" },
        { label: "Left Sidebar", href: "/products" },
        { label: "Right Sidebar", href: "/products" },
        { label: "List Fullwidth", href: "/products" },
        { label: "List Left Sidebar", href: "/products" },
        { label: "List Right Sidebar", href: "/products" },
      ],
    },
    {
      title: "Signature categories",
      links: [
        { label: "Dry Fruits", href: "/products/categories/dry-fruits" },
        { label: "Chocolates", href: "/products/categories/chocolates" },
        { label: "Gift Boxes", href: "/products/categories/chocolate-gift-box" },
        { label: "Juices", href: "/products/categories/juice" },
      ],
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Single product types",
      links: [
        { label: "Single Product", href: "/products/dry-fruits" },
        { label: "Single Product Sale", href: "/products/chocolate-gift-box" },
        { label: "Single Product Variable", href: "/products/juice" },
        { label: "Single Product Slider", href: "/products" },
      ],
    },
  ],
  pages: [
    {
      title: "Utility pages",
      links: [
        { label: "My Account", href: "/about" },
        { label: "Wishlist", href: "/products" },
        { label: "Cart", href: "/contact" },
        { label: "Checkout", href: "/contact" },
        { label: "FAQ", href: "/faq" },
        { label: "Coming Soon", href: "/" },
      ],
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
    },
  ],
};

const searchScopes = ["All", "Products", "Categories", "Pages"] as const;
const searchEntries = [
  { label: "Dry Fruits", href: "/products/categories/dry-fruits", scope: "Products" },
  { label: "Chocolates", href: "/products/categories/chocolates", scope: "Products" },
  { label: "Gift Boxes", href: "/products/categories/chocolate-gift-box", scope: "Products" },
  { label: "Juices", href: "/products/categories/juice", scope: "Products" },
  { label: "Products Page", href: "/products", scope: "Pages" },
  { label: "About Us", href: "/about", scope: "Pages" },
  { label: "Contact", href: "/contact", scope: "Pages" },
  { label: "FAQ", href: "/faq", scope: "Pages" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchScope, setSearchScope] = useState<(typeof searchScopes)[number]>("All");
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const currentGroups = useMemo(() => {
    if (!openMenu) return [];
    return menuGroups[openMenu] ?? [];
  }, [openMenu]);

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

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return searchEntries.filter((item) => {
      const matchesScope = searchScope === "All" || item.scope === searchScope;
      const matchesQuery = !q || item.label.toLowerCase().includes(q);
      return matchesScope && matchesQuery;
    });
  }, [searchQuery, searchScope]);

  return (
    <header className="relative z-50 border-b border-reef-gold/15 bg-white/95 backdrop-blur">
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

      {isScrolled ? <div className="h-[54px]" aria-hidden /> : null}

      {mobileOpen ? (
        <div className="fixed inset-0 z-[70] bg-black/45 lg:hidden">
          <button type="button" className="absolute inset-0" aria-label="Close menu overlay" onClick={() => setMobileOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-[88vw] max-w-sm bg-white p-5">
            <div className="mb-6 flex items-center justify-between">
              <Image src="/images/logo.png" alt="Reet Foods" width={120} height={44} priority />
              <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close navigation" className="text-reef-charcoal">
                ×
              </button>
            </div>
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between border border-reef-gold/10 px-4 py-3 text-sm font-medium text-reef-charcoal transition duration-200 ease-out hover:border-reef-gold hover:text-reef-burgundy"
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
        <div className="fixed inset-0 z-[80] bg-black/55 px-4 py-6 backdrop-blur-sm pt-20">
          <div className="mx-auto max-w-4xl">
            <div className="border border-reef-gold/20 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.2)]">
              <div className="flex items-center justify-between border-b border-reef-gold/10 px-5 py-4 sm:px-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-reef-burgundy">Search</p>
                  <h2 className="mt-1 text-lg font-semibold text-reef-charcoal">Find products, categories, and pages</h2>
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
              <div className="space-y-5 p-5 sm:p-6">
                <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                  <label className="flex items-center gap-3 border border-reef-gold/15 bg-[#faf8f3] px-4 py-3">
                    <span aria-hidden>⌕</span>
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
                      onChange={(event) => setSearchScope(event.target.value as (typeof searchScopes)[number])}
                      className="bg-transparent outline-none"
                    >
                      {searchScopes.map((scope) => (
                        <option key={scope} value={scope}>
                          {scope}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="flex flex-wrap gap-2">
                  {searchScopes.map((scope) => (
                    <button
                      key={scope}
                      type="button"
                      onClick={() => setSearchScope(scope)}
                      className={[
                        "border px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition duration-200 ease-out",
                        searchScope === scope ? "border-reef-gold bg-reef-gold text-white" : "border-reef-gold/15 bg-white text-reef-charcoal hover:border-reef-gold hover:text-reef-burgundy",
                      ].join(" ")}
                    >
                      {scope}
                    </button>
                  ))}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {searchResults.length ? (
                    searchResults.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setSearchOpen(false)}
                        className="border border-reef-gold/15 px-4 py-4 transition duration-200 ease-out hover:border-reef-gold hover:bg-reef-cream"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-reef-gold">{item.scope}</p>
                        <p className="mt-2 text-sm font-semibold text-reef-charcoal">{item.label}</p>
                      </Link>
                    ))
                  ) : (
                    <div className="border border-dashed border-reef-gold/20 px-4 py-6 text-sm text-reef-charcoal/65 sm:col-span-2">
                      No results found. Try a different keyword or switch the filter to All.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
