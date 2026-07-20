import { testimonials } from "../../data/home";
import { Card, CardContent } from "../ui/card";

export function Testimonials() {
  return (
    <section className="section" aria-labelledby="testimonials-heading">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-reef-burgundy">
            Social proof
          </p>
          <h2 id="testimonials-heading" className="text-3xl font-bold text-gray-900">
            Loved by clients
          </h2>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="border-gray-200 shadow-sm">
            <CardContent className="p-6 flex flex-col gap-4 h-full">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 italic flex-1">{t.quote}</p>
              <p className="text-sm font-semibold text-gray-900 mt-2">- {t.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
