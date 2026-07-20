import Link from "next/link";
import { productCategories } from "../../../../../data/products";
import { SiteShell } from "@/components/common/SiteShell";

const category = productCategories.find((c) => c.slug === "dry-fruits");

export default function DryFruitsCategoryPage() {
  if (!category) return null;
  return (
    <SiteShell
      eyebrow="Dry Fruits"
      title={category.name}
      description={category.intro}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: category.name }]}
      sidePanelTitle="Collection focus"
      sidePanelBody="This page is styled to match the reference category panels, with strong visual hierarchy and quick quote access."
      sideLinks={[{ label: "Get quote", href: "/contact#quote" }, { label: "View gift boxes", href: "/products/categories/chocolate-gift-box" }]}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {category.items.map((item) => (
          <div key={item.name} className="border border-reef-gold/15 bg-white p-5">
            <p className="text-lg font-semibold text-reef-charcoal">{item.name}</p>
            <p className="mt-2 text-sm leading-7 text-reef-charcoal/72">{item.detail}</p>
            <Link href="/contact#quote" className="mt-4 inline-flex text-sm font-semibold text-reef-burgundy">
              Get Quote
            </Link>
          </div>
        ))}
      </div>
    </SiteShell>
  );
}
