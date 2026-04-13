import Link from "next/link";
import Image from "next/image";
import { productCategories } from "../../../data/products";

export const metadata = {
  title: "Products | Reet Foods Pune",
  description:
    "Explore Reet Foods premium range: dry fruits, chocolate gift boxes, cold-pressed juices and curated celebration hampers.",
};

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="accent-bar bg-reef-gold w-1.5 h-8 rounded-full" />
        <h1 className="text-4xl font-serif text-reef-burgundy">Our Products</h1>
      </div>
      <p className="text-reef-charcoal/80 mb-12 text-sm sm:text-lg max-w-3xl leading-relaxed">
        Premium sourcing, controlled roasting, temperature-stable packaging and
        red-gold presentation designed for corporate and festive gifting.
      </p>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {productCategories.map((cat) => (
          <div key={cat.slug} className="card flex flex-col overflow-hidden group shadow-lg border border-reef-gold/20 hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-white">
            
            <Link href={`/products/${cat.slug}`} className="relative h-64 w-full block overflow-hidden">
               <Image 
                 src={cat.image} 
                 alt={cat.name} 
                 fill 
                 className="object-cover transition duration-700 group-hover:scale-110" 
                 sizes="(max-w-width: 768px) 100vw, 33vw"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none transition duration-500 opacity-90 group-hover:opacity-100" />
               <div className="absolute bottom-4 left-4 right-4 text-white">
                 <p className="text-xs uppercase tracking-[0.2em] text-reef-gold font-bold mb-1 shadow-black drop-shadow-md">
                   Signature
                 </p>
                 <h2 className="text-2xl font-serif text-white drop-shadow-md">{cat.name}</h2>
               </div>
            </Link>

            <div className="p-6 flex flex-col flex-1 gap-4">
              <p className="text-sm text-reef-charcoal/80">{cat.intro}</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] uppercase tracking-wider font-bold text-reef-charcoal/70 mt-auto">
                {cat.highlights.map((h) => (
                  <li key={h} className="bg-reef-gold/10 px-3 py-2 rounded-md truncate">
                    {h}
                  </li>
                ))}
              </ul>
              
              <Link
                href={`/products/${cat.slug}`}
                className="mt-4 inline-flex items-center justify-center w-full gap-2 text-sm font-bold text-white bg-reef-charcoal hover:bg-reef-burgundy transition rounded-xl py-3 shadow-md"
              >
                Explore Details <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
