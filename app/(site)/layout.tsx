"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import HeaderTopBar from "@/components/common/HeaderTopBar";
import HeaderNavBar from "@/components/common/HeaderNavBar";
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
  kind: "home" | "shop" | "simple" | "pages";
};

type SearchScope = "All" | "Products" | "Categories" | "Pages";

type SearchEntry = {
  label: string;
  href: string;
  scope: SearchScope;
  description: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", kind: "home" },
  { label: "Products", href: "/products", kind: "shop" },
  { label: "Corporate Gifting", href: "/contact", kind: "simple" },
  { label: "About", href: "/about", kind: "simple" },
  { label: "Gallery", href: "/gallery", kind: "simple" },
  { label: "Blog", href: "/blog", kind: "simple" },
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
      title: "Products",
      links: [
        { label: "Dry Fruits", href: "/products/categories/dry-fruits" },
        { label: "Chocolates", href: "/products/categories/chocolates" },
        { label: "Gift Boxes", href: "/products/categories/chocolate-gift-box" },
        { label: "Corporate Hampers", href: "/products/dry-fruit-box" },
        { label: "View All Products", href: "/products" },
      ],
    },
  ],
};

const searchEntries: SearchEntry[] = [
  { label: "Home", href: "/", scope: "Pages", description: "Return to the homepage" },
  { label: "Shop", href: "/products", scope: "Pages", description: "Browse all product categories" },
  { label: "Blog", href: "/blog", scope: "Pages", description: "Read gifting and brand stories" },
  { label: "About Us", href: "/about", scope: "Pages", description: "Learn about Reet Foods" },
  { label: "Contact", href: "/contact", scope: "Pages", description: "Get in touch with our team" },
  { label: "FAQ", href: "/faq", scope: "Pages", description: "Find quick answers" },
  { label: "Dry Fruits", href: "/products/dry-fruits", scope: "Categories", description: "Premium nuts and festive gifting" },
  { label: "Chocolate Gift Boxes", href: "/products/chocolate-gift-box", scope: "Categories", description: "Luxury chocolates and curated boxes" },
  { label: "Cold-Pressed Juices", href: "/products/juice", scope: "Categories", description: "Fresh juice gifting options" },
  { label: "Celebration Hampers", href: "/products/dry-fruit-box", scope: "Categories", description: "Corporate and festive hampers" },
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

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

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
      {isScrolled ? <div className="h-[54px]" aria-hidden /> : null}

      <main className="flex-1">{children}</main>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[70] bg-black/45 lg:hidden">
          <button type="button" className="absolute inset-0" aria-label="Close menu overlay" onClick={() => setMobileOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-[88vw] max-w-sm bg-white p-5">
            <div className="mb-6 flex items-center justify-between">
              <img src="/images/logo.png" alt="Reet Foods" width={120} height={44} />
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
        <div className="fixed inset-0 z-[80] bg-black/55 px-4 pt-12 pb-6 backdrop-blur-sm sm:px-6 sm:pt-16">
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
              <div className="space-y-5 px-5 pb-6 pt-6 sm:px-6 sm:pb-7 sm:pt-7">
                <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                  <label className="flex items-center gap-3 border border-reef-gold/15 bg-[#faf8f3] px-4 py-3">
                    <span aria-hidden className="text-reef-gold">⌕</span>
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
                      onChange={(event) => setSearchScope(event.target.value as "All" | "Products" | "Categories" | "Pages")}
                      className="bg-transparent outline-none"
                    >
                      {["All", "Products", "Categories", "Pages"].map((scope) => (
                        <option key={scope} value={scope}>
                          {scope}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["All", "Products", "Categories", "Pages"].map((scope) => (
                    <button
                      key={scope}
                      type="button"
                      onClick={() => setSearchScope(scope as "All" | "Products" | "Categories" | "Pages")}
                      className={[
                        "border px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition duration-200 ease-out",
                        searchScope === scope ? "border-reef-gold bg-reef-gold text-white" : "border-reef-gold/15 bg-white text-reef-charcoal hover:border-reef-gold hover:text-reef-burgundy",
                      ].join(" ")}
                    >
                      {scope}
                    </button>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-reef-gold">Suggestions</p>
                    <p className="text-xs text-reef-charcoal/45">{searchResults.length} results</p>
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
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-reef-gold">{item.scope}</p>
                          <p className="mt-2 text-sm font-semibold text-reef-charcoal">{item.label}</p>
                          <p className="mt-1 text-xs leading-5 text-reef-charcoal/60">{item.description}</p>
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
        </div>
      ) : null}

      <footer className="border-t border-reef-gold/15 bg-[#111111] text-white">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div className="space-y-4">
            <p className="text-2xl font-[family-name:var(--font-playfair)] text-reef-gold">
              Reet Foods
            </p>
            <p className="max-w-md text-sm leading-7 text-white/72">
              Premium dry fruits, chocolates, juices and gift hampers crafted for
              corporate, festive, wedding and private label gifting.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-reef-gold">
              Explore
            </p>
            <div className="space-y-2 text-sm text-white/75">
              <Link href="/" className="block transition hover:text-reef-gold">
                Home
              </Link>
              <Link href="/products" className="block transition hover:text-reef-gold">
                Products
              </Link>
              <Link href="/about" className="block transition hover:text-reef-gold">
                About
              </Link>
              <Link href="/blog" className="block transition hover:text-reef-gold">
                Blog
              </Link>
              <Link href="/contact" className="block transition hover:text-reef-gold">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-reef-gold">
              Visit
            </p>
            <p className="text-sm leading-7 text-white/72">
              Reet Foods, Pune
              <br />
              Maharashtra, India
              <br />
              +91 99999 99999
            </p>
          </div>
        </div>
        <p className="border-t border-white/10 py-4 text-center text-xs text-white/45">
          © {new Date().getFullYear()} Reet Foods. Crafted in Pune.
        </p>
      </footer>
    </div>
  );
}
