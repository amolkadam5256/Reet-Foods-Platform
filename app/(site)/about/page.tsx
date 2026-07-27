import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiHeart, FiMapPin, FiPackage, FiUsers } from "react-icons/fi";
import { SiteShell } from "@/components/common/SiteShell";
import { Images } from "@/assets/images";

export const metadata = {
  title: "About Reet Foods & Gifting | Pune",
  description: "Meet Reet Foods & Gifting, Pune's thoughtful partner for premium dry fruits, chocolates, juices and custom gift hampers.",
};

const values = [
  { icon: FiHeart, title: "Quality worth giving", detail: "We select products and ingredients with the care you would use when choosing a gift for someone close to you." },
  { icon: FiPackage, title: "Presentation with purpose", detail: "Every box is assembled to look polished, protect its contents and make the unboxing feel special." },
  { icon: FiUsers, title: "People-first service", detail: "You get a responsive team to help with assortment, personalisation, quantities and delivery planning." },
];

const qualityStandards = [
  "Carefully selected premium-grade ingredients and gift-ready products.",
  "Freshness-conscious packing suited to the product and delivery route.",
  "A final presentation check before every order leaves our facility.",
  "Clear coordination for branding, recipient lists and delivery timelines.",
];

const process = [
  ["01", "Tell us the occasion", "Share your quantity, budget, recipients and delivery date."],
  ["02", "Choose your curation", "We help you select products, packaging and personal touches."],
  ["03", "Approve the details", "Review the final assortment and branding before production begins."],
  ["04", "Receive with confidence", "We prepare, check and coordinate delivery with care."],
];

export default function AboutPage() {
  return (
    <SiteShell
      eyebrow="About Reet Foods & Gifting"
      title="Thoughtful gifting, made easy from Pune."
      description="Reet Foods & Gifting brings together premium dry fruits, chocolates, juices and curated hampers for businesses, celebrations and everyday gestures. We make the details feel simple - from the first idea to the final delivery."
      sidePanelTitle="Your gifting partner"
      sidePanelBody="Whether you need a handful of meaningful gifts or a coordinated bulk order, our team helps you choose, personalise and deliver with confidence."
      sideLinks={[{ label: "Explore our collections", href: "/products" }, { label: "Plan a custom order", href: "/contact#quote" }]}
      image={Images.woodenBoxNuts}
      imageAlt="Premium dry fruits arranged in a Reet Foods gift box"
      flat
    >
      <section className="grid gap-8 overflow-hidden rounded-lg border border-reef-gold/15 bg-white p-6 shadow-[0_18px_50px_rgba(29,22,17,0.06)] sm:p-9 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-burgundy">Our story</p>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl leading-tight text-reef-charcoal sm:text-4xl">Good gifts should feel personal, not complicated.</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-reef-charcoal/75">
            <p>Reet Foods & Gifting was created for people who want to give well - without spending weeks managing products, packaging and delivery. From our Pune base, we curate gift-ready assortments for corporate teams, client relationships, weddings, festivals and family celebrations.</p>
            <p>Our role is simple: bring together quality products, elevated presentation and dependable coordination. You choose the feeling you want to create; we help turn it into a gift people are happy to receive.</p>
          </div>
          <Link href="/products" className="group mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-reef-gold px-6 py-3.5 text-sm font-semibold text-reef-charcoal shadow-[0_10px_22px_rgba(212,175,55,0.28)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-reef-burgundy hover:text-white hover:shadow-[0_16px_30px_rgba(122,0,25,0.25)] focus-visible:-translate-y-1 focus-visible:bg-reef-burgundy focus-visible:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-reef-gold/30">
            <span className="text-[#1c1c1c] transition-colors duration-300 group-hover:text-white">Discover the collections</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-reef-charcoal/10 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110 group-hover:bg-white/20">
              <FiArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-md bg-reef-cream sm:min-h-[340px]">
          <Image src={Images.nutsSetTable} alt="Curated premium dry fruit gifting assortment" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-5 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-burgundy">What guides us</p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal sm:text-4xl">The details behind a memorable gift.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {values.map(({ icon: Icon, title, detail }) => (
            <article key={title} className="rounded-lg border border-reef-gold/15 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(29,22,17,0.08)]">
              <span className="inline-flex rounded-md bg-reef-cream p-3"><Icon className="h-5 w-5 text-reef-burgundy" /></span>
              <h3 className="mt-4 text-xl font-semibold text-reef-charcoal">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-reef-charcoal/72">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-reef-gold/20 bg-[#111111] p-7 text-white shadow-[0_18px_50px_rgba(29,22,17,0.12)] sm:p-9">
          <div className="flex items-start gap-3">
            <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-reef-gold" />
            <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-gold">Pune facility & service</p><h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl">Prepared locally. Planned around you.</h2></div>
          </div>
          <p className="mt-5 text-sm leading-7 text-white/75">Our Pune team coordinates curation, packaging and dispatch from Shop F14, Streets of Europe Mall, Hinjewadi Phase I. For local gifting, we help plan practical delivery windows; for larger requirements, we coordinate a clear dispatch plan for your recipients.</p>
          <p className="mt-5 border-l-2 border-reef-gold pl-4 text-sm font-medium leading-6 text-white">One point of contact for product choices, branding details and delivery follow-through.</p>
        </div>
        <div className="rounded-lg border border-reef-gold/15 bg-white p-7 shadow-[0_18px_50px_rgba(29,22,17,0.06)] sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-burgundy">Our quality approach</p>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal">A thoughtful check at every stage.</h2>
          <ul className="mt-6 space-y-4">{qualityStandards.map((standard) => <li key={standard} className="flex gap-3 text-sm leading-6 text-reef-charcoal/75"><FiCheck className="mt-1 h-4 w-4 shrink-0 text-reef-burgundy" /><span>{standard}</span></li>)}</ul>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-reef-gold/15 bg-white p-7 shadow-[0_18px_50px_rgba(29,22,17,0.06)] sm:p-9">
        <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-burgundy">The concierge promise</p><h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl text-reef-charcoal">Clear guidance from brief to doorstep.</h2><p className="mt-3 text-sm leading-7 text-reef-charcoal/72">No need to coordinate every detail alone. Share the brief and we will help you move through the order with a practical, timely plan.</p></div>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{process.map(([number, title, detail]) => <article key={number} className="rounded-md border border-reef-gold/10 bg-reef-cream p-5"><p className="text-sm font-semibold text-reef-burgundy">{number}</p><h3 className="mt-3 text-lg font-semibold text-reef-charcoal">{title}</h3><p className="mt-2 text-sm leading-6 text-reef-charcoal/70">{detail}</p></article>)}</div>
      </section>

      <section className="relative mt-10 overflow-hidden rounded-lg bg-[#16100f] px-7 py-9 text-white shadow-[0_22px_55px_rgba(29,22,17,0.22)] sm:px-10 sm:py-12">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-reef-gold/20 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-48 w-48 rounded-full bg-reef-burgundy/50 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-reef-gold">Let's create something thoughtful</p>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl leading-tight sm:text-4xl">Ready to plan your next gifting moment?</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">Tell us the occasion, your quantity and the date you have in mind. We will recommend a curation that fits your recipients, budget and timeline.</p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <Link href="/contact#quote" className="group inline-flex items-center gap-3 rounded-full bg-reef-gold px-6 py-3.5 text-sm font-semibold !text-[#1c1c1c] shadow-[0_12px_24px_rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_30px_rgba(255,255,255,0.2)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-reef-gold/35">
              Request a custom quote
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1c1c1c]/10 text-[#1c1c1c] transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 group-hover:bg-reef-gold"><FiArrowRight className="h-3.5 w-3.5" /></span>
            </Link>
            <p className="text-xs text-white/50">A clear recommendation, with no obligation.</p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
