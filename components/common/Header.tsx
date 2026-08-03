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
  kind: "shop" | "simple";
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", kind: "simple" },
  { label: "Products", href: "/products", kind: "shop" },
  { label: "Corporate Gifting", href: "/corporate-gifting", kind: "simple" },
  { label: "Blog", href: "/blog", kind: "simple" },
  { label: "About", href: "/about", kind: "simple" },
  { label: "Gallery", href: "/gallery", kind: "simple" },
  { label: "Contact", href: "/contact", kind: "simple" },
];

const menuGroups: Record<string, MenuGroup[]> = {
  shop: [
    {
      title: "Products",
      links: [
        { label: "Premium Dry Fruits", href: "/products/categories/dry-fruits" },
        { label: "Artisanal Chocolates", href: "/products/categories/chocolates" },
        { label: "Celebration Hampers", href: "/products/categories/celebration-hampers" },
        { label: "Cold-Pressed Juices", href: "/products/categories/juice" },
        { label: "Build Your Box", href: "/contact#quote" },
      ],
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
    }
  ],
};

const searchScopes = ["All", "Products", "Categories", "Pages"] as const;
const searchEntries = [
  { label: "Premium Dry Fruits", href: "/products/premium-dry-fruits", scope: "Products" },
  { label: "Artisanal Chocolates", href: "/products/artisanal-chocolates", scope: "Products" },
  { label: "Celebration Hampers", href: "/products/celebration-hampers", scope: "Products" },
  { label: "Cold-Pressed Juices", href: "/products/cold-pressed-juices", scope: "Products" },
  { label: "Products Page", href: "/products", scope: "Pages" },
  { label: "About Us", href: "/about", scope: "Pages" },
  { label: "Contact", href: "/contact", scope: "Pages" },
  { label: "FAQ", href: "/faq", scope: "Pages" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenItem, setMobileOpenItem] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchScope, setSearchScope] = useState<(typeof searchScopes)[number]>("All");
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : (pathname ? pathname.startsWith(href) : false));

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
              <Image src="/images/logo.png" alt="Reet Foods" width={140} height={44} className="h-10 w-auto object-contain" priority />
              <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close navigation" className="text-reef-charcoal">
                ×
              </button>
            </div>
            <div className="space-y-2">
              {navItems.map((item) => {
                const hasSubMenu = item.kind !== "simple" && menuGroups[item.kind];
                const isExpanded = mobileOpenItem === item.label;

                return (
                  <div key={item.label}>
                    {hasSubMenu ? (
                      <div className="flex w-full flex-col">
                        <div className="flex w-full items-stretch border border-reef-gold/10 transition duration-200 ease-out focus-within:border-reef-gold hover:border-reef-gold">
                          <Link
                            href={item.href}
                            className="flex-1 px-4 py-3 text-left font-[family-name:var(--font-playfair)] text-sm font-semibold tracking-wide text-reef-charcoal transition hover:text-reef-burgundy"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setMobileOpenItem(isExpanded ? null : item.label)}
                            className="flex w-12 items-center justify-center border-l border-reef-gold/10 text-lg text-reef-charcoal transition hover:bg-reef-gold/5 hover:text-reef-burgundy"
                            aria-label={`Toggle ${item.label} submenu`}
                          >
                            <span aria-hidden className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : "translate-y-[-2px]"}`}>
                              ⌄
                            </span>
                          </button>
                        </div>
                        {isExpanded ? (
                          <div className="mt-1 flex flex-col space-y-1 pl-4 pr-1">
                            {menuGroups[item.kind].map((group) => (
                              <div key={group.title} className="py-2">
                                <ul className="space-y-1">
                                  {group.links.map((link) => (
                                    <li key={link.label}>
                                      <Link
                                        href={link.href}
                                        className="block border-l-2 border-transparent py-2 pl-3 font-[family-name:var(--font-playfair)] text-sm text-reef-charcoal/80 transition hover:border-reef-gold hover:text-reef-burgundy"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex w-full items-center justify-between border border-reef-gold/10 px-4 py-3 font-[family-name:var(--font-playfair)] text-sm font-semibold tracking-wide text-reef-charcoal transition duration-200 ease-out hover:border-reef-gold hover:text-reef-burgundy"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </div>
                );
              })}
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
