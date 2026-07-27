import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productCategories } from "@/data/products";
import { SiteShell } from "@/components/common/SiteShell";

export function CategoryCollectionPage({ slug }: { slug: string }) {
  const category = productCategories.find((entry) => entry.slug === slug);
  if (!category) notFound();
  return <SiteShell eyebrow="Collection" title={category.name} description={category.intro} image={category.image} imageAlt={category.name} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: category.name }]} sidePanelTitle="Made for thoughtful gifting" sidePanelBody="Choose a signature assortment, then let us tailor the packaging, card, and delivery plan." sideLinks={[{ label: "Request a quote", href: "/contact#quote" }, { label: "Browse all products", href: "/products" }]}><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{category.items.map((item) => <article key={item.name} className="group overflow-hidden border border-reef-gold/15 bg-white">{item.image ? <div className="relative h-52 overflow-hidden"><Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" /></div> : null}<div className="p-5">{item.badge ? <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-reef-burgundy">{item.badge}</p> : null}<h2 className="mt-1 text-xl font-semibold text-reef-charcoal">{item.name}</h2><p className="mt-2 text-sm leading-7 text-reef-charcoal/72">{item.detail}</p><Link href="/contact#quote" className="mt-4 inline-flex text-sm font-semibold text-reef-burgundy hover:text-reef-gold">Request a quote</Link></div></article>)}</div></SiteShell>;
}
