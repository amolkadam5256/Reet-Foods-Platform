import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { productCategories } from "../../../../data/products";
import CategoryDropdown from "@/components/common/CategoryDropdown";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

  const categoryOptions = productCategories.map(c => ({ slug: c.slug, name: c.name }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">

      <CategoryDropdown currentSlug={slug} categories={categoryOptions} />

      <div className="flex flex-col lg:flex-row items-start gap-10">

        {/* Left image column */}
        <div className="w-full lg:w-5/12">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <h1 className="absolute bottom-6 left-6 text-3xl font-bold text-white drop-shadow-md">
              {category.name}
            </h1>
          </div>
        </div>

        {/* Right Details Column */}
        <div className="w-full lg:w-7/12">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed bg-gray-50 p-4 border-l-4 border-reef-burgundy rounded-r-lg">
            {category.intro}
          </p>

          <Card className="mb-10 bg-gray-50 border-gray-200">
            <CardContent className="p-5 flex items-center gap-4">
              <span className="h-10 w-10 shrink-0 rounded-full bg-reef-burgundy text-white flex items-center justify-center font-bold text-lg shadow-sm">
                RF
              </span>
              <p className="text-sm md:text-base text-gray-700 font-medium flex-1">
                Talk to our gifting concierge for volume pricing, logo printing and delivery schedules.
              </p>
              <Link
                href="/contact#quote"
                tabIndex={-1}
              >
                <Button variant="primary" className="whitespace-nowrap">
                  Get Best Quote →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {category.items.map((item) => (
              <Card key={item.name} className="flex flex-col group relative overflow-hidden border-gray-200 transition-shadow duration-300 hover:shadow-lg">
                {item.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                <CardContent className="p-6 flex flex-col gap-3 flex-1 relative">
                  {item.badge && (
                    <span className="absolute top-4 right-4 bg-reef-burgundy text-[10px] uppercase tracking-wider font-bold text-white px-3 py-1 rounded-full shadow-sm z-10">
                      {item.badge}
                    </span>
                  )}
                  <p className="text-xl font-bold text-gray-900 transition-colors">{item.name}</p>
                  <p className="text-sm text-gray-600 mb-2 leading-relaxed">{item.detail}</p>
                  <Link
                    href="/contact#quote"
                    className="mt-auto inline-block text-xs uppercase tracking-widest font-bold text-reef-burgundy hover:text-reef-burgundy/80 transition"
                  >
                    Ask for quote →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-gray-50 text-sm md:text-base">
            <p className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-reef-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Included Standard Services:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-reef-burgundy/50" /> Custom note cards and brand ribboning</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-reef-burgundy/50" /> Temperature-safe transport within Pune city</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-reef-burgundy/50" /> GST billing and corporate invoices</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-reef-burgundy/50" /> Priority fulfillment & tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
