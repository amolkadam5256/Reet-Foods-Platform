"use client";

import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

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

type HeaderNavBarProps = {
  navItems: NavItem[];
  currentGroups: MenuGroup[];
  openMenu: string | null;
  setOpenMenu: (value: string | null) => void;
  isScrolled: boolean;
  isActive: (href: string) => boolean;
};

export default function HeaderNavBar({
  navItems,
  currentGroups,
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
            <div key={item.label} className="group relative" onMouseEnter={() => setOpenMenu(item.kind === "simple" ? null : item.kind)} onMouseLeave={() => setOpenMenu(null)}>
              <Link
                href={item.href}
                className={[
                  "flex h-[54px] items-center gap-1 px-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition duration-200 ease-out sm:px-5",
                  isActive(item.href) ? "bg-white/10" : "hover:bg-white/10",
                ].join(" ")}
              >
                {item.label}
                {item.kind !== "simple" ? <FiChevronDown className="h-4 w-4" /> : null}
              </Link>
              {item.kind !== "simple" && openMenu === item.kind ? (
                <div className="absolute left-0 top-full w-[900px] border border-reef-gold/15 bg-white p-6 text-reef-charcoal shadow-[0_20px_50px_rgba(18,16,15,0.15)]">
                  <div className="grid gap-6 lg:grid-cols-[1.2fr_1.2fr_0.8fr]">
                    {currentGroups.map((group) => (
                      <div key={group.title}>
                        <h3 className="mb-4 text-[15px] font-semibold uppercase tracking-[0.12em] text-reef-charcoal">
                          {group.title}
                        </h3>
                        <div className="space-y-3 text-[15px] text-reef-charcoal/75">
                          {group.links.map((link) => (
                            <Link key={link.label} href={link.href} className="block transition duration-200 ease-out hover:text-reef-burgundy">
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="overflow-hidden border border-reef-gold/15 bg-reef-cream">
                      <Image
                        src={currentGroups.find((group) => group.image)?.image ?? "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80"}
                        alt="Featured product"
                        width={300}
                        height={360}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="ml-auto hidden items-stretch md:flex">
          {[
            { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
            { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
            { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
            { label: "X", href: "https://x.com", icon: FaXTwitter },
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
