# 16_Developer_Implementation.md

# Developer Implementation Guide — Reet Foods & Giftings Local SEO

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Vanilla CSS / Tailwind
- **Deployment:** Vercel / Cloudflare
- **CMS:** Headless CMS (or file-based MDX)

---

## TASK 1 — LocalBusiness Schema Component

Create `components/seo/LocalSchema.tsx`:

```tsx
import Script from "next/script";

interface LocalSchemaProps {
  city?: string;
  pageUrl?: string;
  description?: string;
}

export default function LocalSchema({
  city = "Pune",
  pageUrl,
  description,
}: LocalSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": pageUrl ?? "https://reetfoodsngiftings.com/#organization",
    name: "Reet Foods & Giftings",
    url: "https://reetfoodsngiftings.com",
    telephone: ["+91-9225130732", "+91-8007518088"],
    email: "reetfoodspune@gmail.com",
    description:
      description ??
      "Premium corporate gifting company in Pune offering luxury hampers, dry fruit boxes, and custom branded gifts with PAN-India delivery.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop No. F14, Ground Floor, Streets of Europe Mall, Maan Road near Infosys Circle",
      addressLocality: "Hinjewadi Phase I",
      addressRegion: "Pune",
      postalCode: "411057",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5908",
      longitude: "73.7276",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: city },
      { "@type": "AdministrativeArea", name: "Maharashtra" },
      { "@type": "Country", name: "India" },
    ],
    priceRange: "INR 299 – INR 9,999",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, NEFT",
    sameAs: [
      "https://www.facebook.com/reetfoodsngiftings",
      "https://www.instagram.com/reetfoodsngiftings",
      "https://www.linkedin.com/company/reet-foods-giftings",
    ],
  };

  return (
    <Script
      id="local-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

**Usage in city page:**

```tsx
<LocalSchema
  city="Hinjewadi"
  pageUrl="https://reetfoodsngiftings.com/corporate-gifts/hinjewadi/"
/>
```

---

## TASK 2 — City Landing Page Dynamic Route

Create `app/corporate-gifts/[city]/page.tsx`:

```tsx
import { notFound } from "next/navigation";
import cities from "@/data/cities.json";
import LocalSchema from "@/components/seo/LocalSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}) {
  const city = cities.find((c) => c.slug === params.city);
  if (!city) return {};
  return {
    title: `Best Corporate Gifts in ${city.name} – Reet Foods & Giftings`,
    description: `Order premium corporate gift hampers, dry fruit boxes & luxury gifts in ${city.name}. Custom branding, bulk orders & PAN-India delivery. Call +91 9225130732.`,
    alternates: {
      canonical: `https://reetfoodsngiftings.com/corporate-gifts/${city.slug}/`,
    },
    openGraph: {
      title: `Corporate Gifts in ${city.name}`,
      url: `https://reetfoodsngiftings.com/corporate-gifts/${city.slug}/`,
    },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = cities.find((c) => c.slug === params.city);
  if (!city) notFound();

  return (
    <>
      <LocalSchema
        city={city.name}
        pageUrl={`https://reetfoodsngiftings.com/corporate-gifts/${city.slug}/`}
      />
      <FAQSchema faqs={city.faqs} />
      <main>
        <h1>
          Corporate Gifts in {city.name} – Premium Hampers & Custom Gifting
          Solutions
        </h1>
        {/* City content here */}
        <section>
          <p>
            Reet Foods & Giftings delivers premium corporate gift hampers, dry
            fruit boxes, and luxury gifts to businesses in {city.name}. Call us
            at <a href="tel:+919225130732">+91 9225130732</a> or email{" "}
            <a href="mailto:reetfoodspune@gmail.com">reetfoodspune@gmail.com</a>
            .
          </p>
        </section>
        {/* FAQ Section */}
        <section>
          <h2>Frequently Asked Questions</h2>
          {city.faqs.map((faq, i) => (
            <details key={i}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>
        {/* CTA */}
        <a
          href={`/contact/?utm_source=local&utm_medium=cta&utm_campaign=${city.slug}`}
        >
          Get a Quote for {city.name}
        </a>
      </main>
    </>
  );
}
```

---

## TASK 3 — cities.json Data File

Create `data/cities.json`:

```json
[
  {
    "name": "Hinjewadi",
    "slug": "hinjewadi",
    "state": "Maharashtra",
    "faqs": [
      {
        "question": "Do you deliver corporate gifts in Hinjewadi same day?",
        "answer": "Yes, same-day delivery in Hinjewadi for orders placed before 12 PM. Call +91 9225130732."
      },
      {
        "question": "Where is Reet Foods store near Hinjewadi?",
        "answer": "Shop No. F14, Streets of Europe Mall, Maan Road near Infosys Circle, Hinjewadi Phase I, Pune – 411057."
      },
      {
        "question": "Do you provide GST billing for corporate orders?",
        "answer": "Yes, GST invoices available. Our GSTIN: 27FHIPK0363N1ZX."
      }
    ]
  },
  {
    "name": "Pune",
    "slug": "pune",
    "state": "Maharashtra",
    "faqs": [
      {
        "question": "What is the minimum order for corporate gifts in Pune?",
        "answer": "Minimum 50 units for bulk/corporate packages. Email reetfoodspune@gmail.com for a quote."
      }
    ]
  }
]
```

---

## TASK 4 — Sitemap for City Pages

Update `app/sitemap.ts`:

```ts
import cities from "@/data/cities.json";

export default function sitemap() {
  const cityPages = cities.map((city) => ({
    url: `https://reetfoodsngiftings.com/corporate-gifts/${city.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: "https://reetfoodsngiftings.com/", priority: 1.0 },
    { url: "https://reetfoodsngiftings.com/corporate-gifts/", priority: 0.9 },
    { url: "https://reetfoodsngiftings.com/bulk-orders/", priority: 0.9 },
    { url: "https://reetfoodsngiftings.com/contact/", priority: 0.8 },
    ...cityPages,
  ];
}
```

---

## TASK 5 — Footer NAP Component

Update `components/layout/Footer.tsx`:

```tsx
<address style={{ fontStyle: "normal" }}>
  <strong>Reet Foods & Giftings</strong>
  <br />
  Shop No. F14, Ground Floor, Streets of Europe Mall,
  <br />
  Maan Road near Infosys Circle, Hinjewadi Phase I,
  <br />
  Pune – 411057, Maharashtra, India
  <br />
  <a href="tel:+919225130732">+91 9225130732</a> /{" "}
  <a href="tel:+918007518088">+91 8007518088</a>
  <br />
  <a href="mailto:reetfoodspune@gmail.com">reetfoodspune@gmail.com</a>
  <br />
  FSSAI: 21525083009881 | GSTIN: 27FHIPK0363N1ZX
</address>
```

---

## TASK 6 — GBP Map Embed Component

Create `components/local/MapEmbed.tsx`:

```tsx
export default function MapEmbed() {
  return (
    <iframe
      title="Reet Foods & Giftings — Hinjewadi, Pune"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.12!2d73.7276!3d18.5908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sReet+Foods+%26+Giftings!5e0!3m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      aria-label="Map showing Reet Foods & Giftings location in Hinjewadi, Pune"
    />
  );
}
```

---

## TASK 7 — Robots.txt Update

Ensure `public/robots.txt` allows crawling of all city pages:

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Sitemap: https://reetfoodsngiftings.com/sitemap.xml
```

---

## TASK 8 — Deployment Checklist

- [ ] Deploy city page template and verify 10 pilot pages return HTTP 200.
- [ ] Run Google Rich Results Test on each city page schema.
- [ ] Submit sitemap to Google Search Console.
- [ ] Submit sitemap to Bing Webmaster Tools.
- [ ] Verify footer NAP matches canonical NAP.
- [ ] Test Google Maps embed on mobile and desktop.
- [ ] Run Lighthouse (Performance + SEO) on city pages — target 90+.

---

_References: 07_Local_Schema.md, 03_City_Landing_Pages.md, 17_QA_Checklist.md_
