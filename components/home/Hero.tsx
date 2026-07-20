import Image from "next/image";
import Link from "next/link";
import { heroGallery } from "../../data/home";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function Hero() {
  return (
    <section className="section pt-12 lg:pt-10" aria-labelledby="hero-heading">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <Badge variant="secondary">
            Premium dry fruits, chocolates, hampers, wholesale, OEM
          </Badge>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
          >
            Premium gifting and dry fruits for corporate and festive buyers
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Reet Foods serves corporate teams, event planners, retailers, and
            premium consumers with gift boxes, bulk hampers, and private label
            food solutions designed to look expensive and convert faster.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact#quote">
              <Button size="lg" variant="primary">
                Request a Quote
              </Button>
            </Link>
            <a
              href="https://wa.me/919999999999?text=Hi%20Reet%20Foods%2C%20I%20need%20a%20quote"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="lg" variant="outline" className="gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                WhatsApp
              </Button>
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-4 grid gap-3 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-bold text-gray-900">24h</p>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Quote response
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">Bulk</p>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Corporate orders
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">OEM</p>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Private label ready
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-reef-cream via-white to-amber-50 blur-2xl" />
          <div className="grid grid-cols-3 gap-3">
            {heroGallery.map((src, idx) => (
              <div
                key={src}
                className={`relative h-32 sm:h-44 rounded-2xl overflow-hidden shadow-md ${
                  idx === 1 ? "translate-y-6" : ""
                }`}
              >
                <Image
                  src={src}
                  alt="Premium gifting and dry fruit presentation"
                  fill
                  sizes="(max-width: 768px) 33vw, 33vw"
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
