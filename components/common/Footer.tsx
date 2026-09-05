"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiYoutube,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import { isValidEmail, sendWhatsAppInquiry } from "@/lib/whatsapp";

/* ─── Data ────────────────────────────────────────────────────────── */

const productLinks = [
  { label: "Premium Dry Fruits", href: "/products/categories/dry-fruits" },
  { label: "Dry Fruit Gift Boxes", href: "/products/categories/dry-fruit-box" },
  { label: "Artisan Chocolates", href: "/products/categories/chocolates" },
  {
    label: "Luxury Chocolate Boxes",
    href: "/products/categories/chocolate-box",
  },
  { label: "Cold Pressed Juices", href: "/products/categories/juices" },
  { label: "Celebration Hampers", href: "/products/categories/hampers" },
  { label: "Corporate Gifting", href: "/products/categories/corporate-gifts" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Corporate Gifting", href: "/corporate-gifting" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "/faq" },
];

/* ─── Sub-components ──────────────────────────────────────────────── */

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-2 text-[13px] text-white/60 transition-all duration-200 hover:text-reef-gold"
      >
        <FiArrowRight className="h-3 w-3 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
        <span className="transition-all duration-200 group-hover:translate-x-1">
          {children}
        </span>
      </Link>
    </li>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px w-5 bg-reef-gold/60" />
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-reef-gold">
        {children}
      </p>
    </div>
  );
}

/* ─── Newsletter inline ───────────────────────────────────────────── */
function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    setError("");

    try {
      sendWhatsAppInquiry({
        type: "catalog",
        data: { email },
        sourcePage: "/",
        formType: "footer_newsletter",
      });
      setSubmitted(true);
    } catch {
      setError("Unable to open WhatsApp. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return submitted ? (
    <div className="flex items-center gap-2 rounded-sm border border-reef-gold/30 bg-reef-gold/10 px-4 py-3 text-xs text-reef-gold">
      <FiCheckCircle className="h-4 w-4 shrink-0" />
      <span>You&apos;re in! Check your inbox for gifting inspiration.</span>
    </div>
  ) : (
    <div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 border border-white/15 bg-white/5 px-4 py-2.5 text-xs text-white placeholder:text-white/30 outline-none transition focus:border-reef-gold/60 focus:bg-white/8"
        />
        <button
          type="submit"
          disabled={submitting}
          className="border border-reef-gold bg-reef-gold px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-[#1c1c1c] transition-all duration-200 hover:bg-white hover:border-white hover:text-reef-charcoal hover:-translate-y-0.5 disabled:opacity-50"
        >
          {submitting ? "..." : "WhatsApp"}
        </button>
      </form>
      {error ? <p className="mt-1 text-[11px] text-red-400">{error}</p> : null}
    </div>
  );
}

/* ─── Main Footer ─────────────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0e0e0e] text-white">
      {/* Decorative gold gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-reef-gold to-transparent opacity-60" />

      {/* Background texture dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d4af37 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft glow top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-reef-gold/5 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-0 sm:px-6 lg:px-8">
        {/* ── Top strip: brand + newsletter ──────────────────────── */}
        <div className="mb-10 flex flex-col items-start justify-between gap-8 border-b border-white/8 pb-6 lg:flex-row lg:items-center">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border border-reef-gold/30 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <Image
                src="/images/logo.png"
                alt="Reet Foods Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-white">
                Reet Foods
              </p>
              <p className="text-sm tracking-widest text-reef-gold/80">
                Corporate Diwali Gifting | Pune
              </p>
              <p className="mt-1 text-xs font-semibold text-reef-gold/60 tracking-wide">
                Shraddha Kharate &amp; Harshad Kharate
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-md">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-reef-gold">
              Gifting Inspiration in Your Inbox
            </p>
            <p className="mb-3 text-xs text-white/45">
              Festive hampers, new arrivals &amp; exclusive offers — curated for
              you.
            </p>
            <NewsletterInline />
          </div>
        </div>

        {/* ── Main grid ─────────────────────────────────────────── */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Col */}
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <p className="mb-6 text-[13px] leading-7 text-white/55">
              Pune&apos;s premier partner for artisan dry fruits,
              custom corporate hampers, and festive celebration gifts with bespoke company branding.
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              {[
                {
                  href: "https://instagram.com/reetfoodsgifting",
                  label: "Instagram",
                  icon: <FiInstagram className="h-4 w-4" />,
                },
                {
                  href: "https://facebook.com/reetfoodsgifting",
                  label: "Facebook",
                  icon: <FiFacebook className="h-4 w-4" />,
                },
                {
                  href: "https://www.youtube.com/@ReetFoodsGiftings",
                  label: "YouTube",
                  icon: <FiYoutube className="h-4 w-4" />,
                },
                {
                  href: "https://www.linkedin.com/company/reet-foods-pune/?viewAsMember=true",
                  label: "LinkedIn",
                  icon: <FiLinkedin className="h-4 w-4" />,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/50 transition-all duration-200 hover:border-reef-gold/60 hover:text-reef-gold hover:shadow-[0_0_12px_rgba(212,175,55,0.25)]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <SectionLabel>Products</SectionLabel>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <NavLink key={l.href} href={l.href}>
                  {l.label}
                </NavLink>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <SectionLabel>Quick Links</SectionLabel>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <NavLink key={l.href} href={l.href}>
                  {l.label}
                </NavLink>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <SectionLabel>Corporate Office &amp; Studio</SectionLabel>
            <ul className="space-y-3.5 text-[13px] text-white/70">
              <li className="font-semibold text-reef-gold">
                Shraddha Kharate &amp; Harshad Kharate
              </li>
              <li>
                <a
                  href="tel:+919225130732"
                  className="flex items-center gap-3 transition hover:text-reef-gold"
                >
                  <FiPhone className="h-4 w-4 shrink-0 text-reef-gold/70" />
                  +91 9225130732
                </a>
              </li>
              <li>
                <a
                  href="mailto:reetfoodspune@gmail.com"
                  className="flex items-center gap-3 transition hover:text-reef-gold"
                >
                  <FiMail className="h-4 w-4 shrink-0 text-reef-gold/70" />
                  reetfoodspune@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.reetfoodsngiftiings.com"
                  className="flex items-center gap-3 transition hover:text-reef-gold"
                >
                  <span className="text-xs text-reef-gold/70">🌐</span>
                  www.reetfoodsngiftiings.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/55 transition hover:text-reef-gold"
                >
                  <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-reef-gold/70" />
                  <span className="leading-5 text-xs">
                    Shop F14, Streets of Europe Mall,
                    <br />
                    Maan Road, near Infosys Circle, Hinjewadi Phase I, Pune 411057
                  </span>
                </a>
              </li>
              <li className="text-xs text-reef-gold/90 font-medium">
                GST: 27FHIPK0363N1ZX
              </li>
              <li className="text-[11px] text-white/45">
                FSSAI No. 21525083009881
              </li>

            </ul>

            {/* Quality badge */}
            <div className="mt-6 rounded-sm border border-reef-gold/20 bg-white/3 p-4 backdrop-blur-sm">
              <div className="mb-1.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-reef-gold">
                <FiCheckCircle className="h-3.5 w-3.5" />
                FSSAI-Licensed Operations
              </div>
              <p className="text-[11px] leading-5 text-white/45">
                Food-grade packaging · Prompt corporate quotation &amp; fulfillment
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────────── */}
        {/* Corporate Quotation CTA */}
        <div className="mt-8 flex justify-center border-t border-white/8 pt-8 pb-4">
          <Link
            href="/#corporate-quotation"
            className="inline-flex items-center gap-2 rounded-full bg-reef-gold px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#1c1c1c] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-reef-charcoal hover:shadow-lg"
          >
            <FiArrowRight className="h-4 w-4" />
            GET CORPORATE QUOTATION
          </Link>
        </div>
        <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-white/8 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] text-white/30">
            © {new Date().getFullYear()} Reet Foods &amp; Gifting. All rights
            reserved.
          </p>
          <p className="text-[11px] text-white/20">
            Crafted in Pune, India • Developed by{" "}
            <a
              href="https://www.growthikmedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-reef-gold/70 transition-colors hover:text-reef-gold"
              aria-label="Growthik Media - Digital Marketing & Web Development"
            >
              Growthik Media
            </a>
          </p>
          <div className="flex gap-4 text-[11px] text-white/30">
            <Link
              href="/privacy-policy"
              className="hover:text-reef-gold/70 transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms-conditions"
              className="hover:text-reef-gold/70 transition"
            >
              Terms
            </Link>
            <Link
              href="/shipping-policy"
              className="hover:text-reef-gold/70 transition"
            >
              Shipping
            </Link>
            <Link
              href="/return-refund-policy"
              className="hover:text-reef-gold/70 transition"
            >
              Returns
            </Link>
            <Link
              href="/sitemap.xml"
              className="hover:text-reef-gold/70 transition"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-reef-gold/60 to-transparent" />
    </footer>
  );
}
