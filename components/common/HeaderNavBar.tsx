"use client";

import Link from "next/link";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Images } from "@/assets/images";
import type { StaticImageData } from "next/image";

type MenuGroup = {
  title: string;
  links: Array<{ label: string; href: string; desc?: string; image?: StaticImageData; badge?: string }>;
  image?: string;
};

type NavItem = {
  label: string;
  href: string;
  kind: "shop" | "simple";
};

type HeaderNavBarProps = {
  navItems: NavItem[];
  currentGroups: MenuGroup[];
  openMenu: string | null;
  setOpenMenu: (value: string | null) => void;
  isScrolled: boolean;
  isActive: (href: string) => boolean;
};

const productDropdownItems = [
  {
    label: "Premium Dry Fruits",
    href: "/products/categories/dry-fruits",
    desc: "Premium dry fruits selected for retail, festive and corporate gifting.",
    image: Images.topViewPistachios,
    badge: "Best Seller",
  },
  {
    label: "Dry Fruit Gift Boxes",
    href: "/products/categories/dry-fruit-box",
    desc: "Gift-ready dry fruit boxes tailored to your quantity and budget.",
    image: Images.sweetiesDesk,
    badge: "Gift Ready",
  },
  {
    label: "Festive Hampers",
    href: "/products/celebration-hampers",
    desc: "Custom hampers for Diwali, client gifts, employee kits and events.",
    image: Images.nutsSetTable,
    badge: "Festive",
  },
  {
    label: "Custom Corporate Gifts",
    href: "/contact#quote",
    desc: "Branded gifting solutions with custom packaging and message cards.",
    image: Images.topViewDriedFruits,
    badge: "Corporate",
  },
  {
    label: "Build Your Gift Box",
    href: "/contact#quote",
    desc: "Choose products, packaging and branding for your gifting brief.",
    image: Images.woodenBoxNuts,
    badge: "Custom",
  },
];

export default function HeaderNavBar({
  navItems,
  openMenu,
  setOpenMenu,
  isScrolled,
  isActive,
}: HeaderNavBarProps) {
  return (
    <div
      className={[
        "bg-[#d1a64d] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-200 ease-out",
        isScrolled ? "fixed left-0 right-0 top-0 z-[999]" : "relative z-40",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1440px] items-stretch px-4 sm:px-6 lg:px-8">
        <nav className="hidden flex-1 items-stretch lg:flex">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="group relative"
              onMouseEnter={() => setOpenMenu(item.kind === "simple" ? null : item.kind)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className={[
                  "flex h-[54px] items-center gap-1 px-4 font-[family-name:var(--font-playfair)] text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition duration-200 ease-out sm:px-5",
                  isActive(item.href) ? "bg-white/10" : "hover:bg-white/10",
                ].join(" ")}
              >
                {item.label}
                {item.kind !== "simple" ? <FiChevronDown className="h-4 w-4" /> : null}
              </Link>

              {item.kind !== "simple" && openMenu === item.kind ? (
                <div className="absolute left-0 top-full w-[940px] border border-reef-gold/20 bg-white p-6 text-reef-charcoal shadow-[0_20px_50px_rgba(18,16,15,0.18)]">
                  <div className="mb-4 flex items-center justify-between border-b border-reef-gold/15 pb-3">
                    <p className="font-[family-name:var(--font-playfair)] text-sm font-bold uppercase tracking-[0.12em] text-[#7a0019]">
                      Product Collections
                    </p>
                    <Link
                      href="/products"
                      className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#d4af37] hover:text-[#7a0019]"
                    >
                      View All Products &rarr;
                    </Link>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">
                    {/* Categories grid without small images */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      {productDropdownItems.map((p) => (
                        <Link
                          key={p.label}
                          href={p.href}
                          className="group/item flex flex-col justify-between border border-reef-gold/15 bg-[#fcfbf8] p-4 transition duration-200 hover:border-[#d4af37] hover:bg-white hover:shadow-sm"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-[family-name:var(--font-playfair)] text-sm font-bold text-reef-charcoal group-hover/item:text-[#7a0019]">
                                {p.label}
                              </span>
                              {p.badge && (
                                <span className="bg-[#7a0019] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
                                  {p.badge}
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-[11px] leading-relaxed text-reef-charcoal/70">
                              {p.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Featured Megamenu Banner */}
                    <div className="relative flex flex-col justify-between border border-reef-gold/20 bg-[#111111] p-5">
                      <div>
                        <span
                          style={{ color: "#1c1c1c", backgroundColor: "#d4af37" }}
                          className="inline-block px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em]"
                        >
                          B2B Corporate Gifting
                        </span>
                        <h4
                          style={{ color: "#ffffff" }}
                          className="mt-3 font-[family-name:var(--font-playfair)] text-lg font-bold"
                        >
                          Corporate Gifting, Made to Fit
                        </h4>
                        <p style={{ color: "rgba(255,255,255,0.75)" }} className="mt-1.5 text-xs leading-relaxed">
                          Premium dry fruit hampers with logo branding, custom message cards and packaging that fits your budget.
                        </p>
                      </div>
                      <Link
                        href="/contact#quote"
                        className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-reef-gold px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#1c1c1c] shadow-sm transition-all duration-200 hover:bg-reef-burgundy hover:text-white hover:shadow hover:-translate-y-0.5"
                      >
                        Request Quote <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="ml-auto hidden items-stretch lg:flex">
          {[
            { label: "Facebook", href: "https://facebook.com/reetfoodsgifting", icon: FaFacebookF },
            { label: "Instagram", href: "https://instagram.com/reetfoodsgifting", icon: FaInstagram },
            { label: "YouTube", href: "https://www.youtube.com/@ReetFoodsGiftings", icon: FaYoutube },
            { label: "LinkedIn", href: "https://www.linkedin.com/company/reet-foods-pune/?viewAsMember=true", icon: FaLinkedinIn },
            { label: "X", href: "https://x.com/reetfoods", icon: FaXTwitter },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={`sticky-${item.label}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[54px] w-[54px] items-center justify-center border-l border-white/20 text-white transition duration-200 ease-out hover:bg-white/10"
                aria-label={item.label}
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
