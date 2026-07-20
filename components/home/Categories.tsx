import Image from "next/image";
import Link from "next/link";
import { categories } from "../../data/categories";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export function Categories() {
  return (
    <section className="section" id="categories" aria-labelledby="categories-heading">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-reef-burgundy">
            Shop by category
          </p>
          <h2 id="categories-heading" className="text-3xl font-bold text-gray-900">
            Core gifting categories
          </h2>
        </div>
        <p className="hidden md:block text-sm text-gray-500 max-w-md text-right">
          Clear entry points for B2B buyers, retail customers, and bulk order
          enquiries.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <Link key={cat.title} href={cat.href} className="block group">
            <Card className="h-full overflow-hidden transition-all hover:shadow-md border-gray-200">
              <CardContent className="p-0">
                <div className="relative h-48 w-full overflow-hidden border-b border-gray-100">
                  <Image
                    src={cat.img}
                    alt={cat.title}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Badge
                    variant="outline"
                    className="mb-3 text-xs tracking-wider uppercase"
                  >
                    {cat.tag}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{cat.copy}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-reef-burgundy group-hover:text-reef-burgundy/80 transition-colors">
                    View details <span aria-hidden>→</span>
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
