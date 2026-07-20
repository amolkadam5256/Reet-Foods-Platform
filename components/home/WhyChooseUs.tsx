import { whyUs } from "../../data/home";
import { Card, CardContent } from "../ui/card";

export function WhyChooseUs() {
  return (
    <section className="section" aria-labelledby="trust-heading">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-reef-burgundy">
            Trust and operations
          </p>
          <h2 id="trust-heading" className="text-3xl font-bold text-gray-900">
            Why buyers choose Reet Foods
          </h2>
        </div>
        <p className="hidden md:block text-sm text-gray-500 max-w-md text-right">
          Built for premium perception, bulk enquiry handling, and repeat orders.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {whyUs.map((item) => (
          <Card key={item} className="bg-gray-50 border-gray-100">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-reef-burgundy/10 text-reef-burgundy">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-900">{item}</span>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card className="border-gray-200">
          <CardContent className="p-5">
            <p className="text-3xl font-bold text-gray-900">Pan-India</p>
            <p className="text-sm text-gray-600 mt-1">Shipping support for corporate and gifting orders.</p>
          </CardContent>
        </Card>
        <Card className="border-gray-200">
          <CardContent className="p-5">
            <p className="text-3xl font-bold text-gray-900">Bulk ready</p>
            <p className="text-sm text-gray-600 mt-1">Structured for procurement, HR, retail, and event buyers.</p>
          </CardContent>
        </Card>
        <Card className="border-gray-200">
          <CardContent className="p-5">
            <p className="text-3xl font-bold text-gray-900">Private label</p>
            <p className="text-sm text-gray-600 mt-1">OEM and custom branding opportunities for partners.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
