import Link from "next/link";
import Image from "next/image";
import { productCategories } from "../../../data/products";
import { SiteShell } from "@/components/common/SiteShell";

export const metadata = {
  title: "Products | Reet Foods Pune",
  description:
    "Explore Reet Foods premium range: dry fruits, chocolate gift boxes, cold-pressed juices and curated celebration hampers.",
};

export default function ProductsPage() {
  return (
    <SiteShell
      eyebrow="Shop"
      title="Browse the full gifting assortment by category."
      description="Premium sourcing, controlled roasting, and gold-accent presentation for corporate and festive gifting."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      sidePanelTitle="Popular categories"
      sidePanelBody="Use the category panels below to jump straight into the collection you need."
      sideLinks={[
        { label: "Dry Fruits", href: "/products/categories/dry-fruits" },
        { label: "Chocolates", href: "/products/categories/chocolates" },
        { label: "Gift Boxes", href: "/products/categories/chocolate-gift-box" },
        { label: "Juices", href: "/products/categories/juice" },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {productCategories.map((cat) => (
          <article key={cat.slug} className="group overflow-hidden border border-reef-gold/15 bg-white">
            <Link href={`/products/categories/${cat.slug}`} className="relative block h-64 overflow-hidden">
              <Image src={cat.image} alt={cat.name} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 1280px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-reef-gold">Signature</p>
                <h2 className="mt-2 text-2xl font-semibold">{cat.name}</h2>
              </div>
            </Link>
            <div className="p-5">
              <p className="text-sm leading-7 text-reef-charcoal/72">{cat.intro}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {cat.highlights.map((item) => (
                  <li key={item} className="rounded-lg bg-reef-cream px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-reef-charcoal/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
