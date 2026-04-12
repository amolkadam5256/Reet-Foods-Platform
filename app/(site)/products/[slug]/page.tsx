import Link from "next/link";
import { notFound } from "next/navigation";
import { productCategories } from "../../../data/products";

export async function generateStaticParams() {
  return productCategories.map((cat) => ({ slug: cat.slug }));
}

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props) {
  const category = productCategories.find((c) => c.slug === params.slug);
  return {
    title: category
      ? `${category.name} | Reet Foods Pune`
      : "Products | Reet Foods Pune",
    description: category
      ? category.intro
      : "Premium dry fruits, chocolates and juices from Reet Foods.",
  };
}

export default function ProductDetail({ params }: Props) {
  const { slug } = params;
  const category = productCategories.find((c) => c.slug === slug);
  if (!category) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex items-center gap-3 mb-4">
        <div className="accent-bar" />
        <h1 className="text-3xl font-serif text-reef-cream">{category.name}</h1>
      </div>
      <p className="text-sm text-reef-cream/80 mb-6">{category.intro}</p>

      <div className="glass p-4 inline-flex items-center gap-3 mb-8">
        <span className="h-8 w-8 rounded-full bg-reef-gold text-reef-ink flex items-center justify-center font-semibold">
          RF
        </span>
        <p className="text-sm text-reef-cream/80">
          Talk to our gifting concierge for volume pricing, logo printing and delivery schedules.
        </p>
        <Link
          href="/contact#quote"
          className="ml-auto text-sm font-semibold text-reef-gold hover:text-reef-cream"
        >
          Get Best Quote →
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {category.items.map((item) => (
          <div key={item.name} className="card p-5 flex flex-col gap-3">
            <p className="text-lg font-serif text-reef-cream">{item.name}</p>
            <p className="text-sm text-reef-cream/70">{item.detail}</p>
            <Link
              href="/contact#quote"
              className="text-sm font-semibold text-reef-gold hover:text-reef-cream"
            >
              Ask for quote →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-10 text-sm text-reef-cream/70 space-y-2">
        <p>Included services:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Custom note cards and brand ribboning</li>
          <li>Temperature-safe transport within Pune city</li>
          <li>GST billing and corporate compliant invoices</li>
        </ul>
      </div>
    </div>
  );
}
