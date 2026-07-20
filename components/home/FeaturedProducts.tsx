import Image from "next/image";
import Link from "next/link";
import { featuredProducts } from "../../data/home";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export function FeaturedProducts() {
  return (
    <section className="section" aria-labelledby="featured-heading">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-reef-burgundy">
            Curated products
          </p>
          <h2 id="featured-heading" className="text-3xl font-bold text-gray-900">
            Featured for gifting
          </h2>
        </div>
        <p className="hidden md:block text-sm text-gray-500 max-w-md text-right">
          Products chosen to sell the premium feel first, then the ingredients.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {featuredProducts.map((item) => (
          <Card key={item.name} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardContent className="p-5 flex gap-4 items-center h-full">
              <div className="relative h-24 w-24 shrink-0 rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 justify-center">
                <Badge variant="secondary" className="w-fit mb-2">
                  {item.badge}
                </Badge>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {item.info}
                </p>
                <Link
                  href="/contact#quote"
                  className="mt-3 text-sm font-semibold text-reef-burgundy hover:text-reef-burgundy/80 transition-colors inline-flex items-center gap-1"
                >
                  Get Quote <span aria-hidden>→</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
