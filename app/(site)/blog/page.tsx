import { constructMetadata } from "@/components/seo/Metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Newsletter } from "@/components/common/Newsletter";
import { CTA } from "@/components/common/CTA";
import { blogPosts } from "@/data/blog";
import { Images } from "@/assets/images";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiClock, FiTag } from "react-icons/fi";

export const metadata = constructMetadata({
  title: "Gifting Insights & Corporate Trends Blog | Reet Foods Pune",
  description: "Read premium advice on corporate gifting compliance, custom chocolate packaging, festival hamper design, and healthy snacking trends from Reet Foods.",
  canonical: "/blog",
});

const faqs = [
  {
    question: "What topics are covered in the Reet Foods corporate gifting blog?",
    answer: "Our blog covers corporate gifting trends, premium dry fruit health benefits, employee appreciation ideas, and insights into the luxury gifting industry in Pune."
  },
  {
    question: "How often do you publish new articles about corporate gifting?",
    answer: "We publish new articles monthly, sharing the latest trends in custom logo branding, Diwali hampers, and enterprise gifting strategies."
  },
  {
    question: "Can we submit a guest post for your corporate gifting blog?",
    answer: "Yes, we welcome industry experts, HR professionals, and nutritionists to contribute insights on corporate culture, gifting, and healthy snacking."
  },
  {
    question: "Do your articles feature tips on selecting the right premium dry fruits?",
    answer: "Yes, we provide detailed guides on grading almonds, sourcing Iranian pistachios, and identifying the highest quality dry fruits for corporate gift boxes."
  },
  {
    question: "Where can I find ideas for corporate Diwali gifts?",
    answer: "Our blog features dedicated Diwali gifting guides, showcasing the best corporate hampers, traditional sweet boxes, and custom branded gifts."
  },
  {
    question: "Do you share case studies of your B2B corporate gifting projects?",
    answer: "Yes, we frequently highlight successful corporate gifting campaigns we've executed for top IT and tech firms in Hinjewadi and Magarpatta, Pune."
  },
  {
    question: "Are there articles explaining FSSAI compliance in food gifting?",
    answer: "Absolutely. We emphasize food safety and share educational content on ISO standards, FSSAI compliance, and hygienic packaging for corporate food gifts."
  },
  {
    question: "How do I subscribe to the Reet Foods gifting newsletter?",
    answer: "You can subscribe using the newsletter form at the bottom of our blog page to receive exclusive corporate gifting catalogs and industry insights directly in your inbox."
  },
  {
    question: "Can I share these blog articles with my corporate HR team?",
    answer: "Yes, our articles are designed to help HR managers and procurement teams make informed decisions about bulk corporate gifting. Feel free to share them!"
  },
  {
    question: "Do you provide insights on sustainable and eco-friendly packaging?",
    answer: "Yes, we regularly discuss the importance of eco-friendly packaging, featuring our reusable wooden chests and recyclable cardboard gift boxes."
  }
];

export default function BlogIndexPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <PageHero
        eyebrow="Gifting Editorial"
        title="Insights, Trends & Purchasing Guides"
        description="Your go-to source for understanding corporate gifting compliance, custom luxury packaging, and food hygiene standards in Pune."
        breadcrumbs={[
          { label: "Blog" },
        ]}
        image={Images.topViewDeskNuts}
        imageAlt="Gifting blog insights"
        primaryCta={{ label: "View Our Products", href: "/products" }}
        secondaryCta={{ label: "Subscribe to Catalog", href: "#newsletter" }}
        sideBadge="Retail Blog"
      />

      {/* Featured Article */}
      {featuredPost && (
        <section className="rounded-2xl border border-reef-gold/20 bg-white overflow-hidden shadow-sm hover:shadow-md transition duration-300">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div className="relative min-h-[240px] md:min-h-[320px] lg:min-h-[380px] w-full bg-reef-cream">
              <Image
                src={featuredPost.image || Images.woodenBoxNuts}
                alt={featuredPost.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-reef-burgundy font-semibold uppercase tracking-wider">
                <span>Featured Article</span>
                <span className="h-1 w-1 rounded-full bg-reef-gold" />
                <span>{featuredPost.category}</span>
              </div>

              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-reef-charcoal sm:text-3xl">
                <Link href={`/blog/${featuredPost.slug}`} className="hover:text-reef-burgundy transition">
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-xs leading-relaxed text-reef-charcoal/75 sm:text-sm">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-reef-charcoal/60 pt-2">
                <span className="flex items-center gap-1">
                  <FiClock className="h-3.5 w-3.5" />
                  <span>{featuredPost.readTime}</span>
                </span>
                <span>•</span>
                <span>{featuredPost.datePublished}</span>
              </div>

              <div className="pt-4">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-reef-gold px-6 py-3 text-xs font-semibold text-reef-charcoal shadow-sm hover:bg-reef-burgundy hover:text-white transition"
                >
                  <span>Read Article</span>
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest Posts Grid */}
      <section>
        <SectionHeading
          eyebrow="Latest Articles"
          title="More Gifting & Packaging Insights"
          description="Refining the corporate unboxing experience, client engagement guides, and food storage protocols."
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {remainingPosts.map((post) => (
            <article key={post.slug} className="flex flex-col rounded-xl border border-reef-gold/20 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative aspect-[16/10] w-full bg-reef-cream">
                <Image
                  src={post.image || Images.rigidBoxGold}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-reef-burgundy">
                  {post.category}
                </span>

                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal hover:text-reef-burgundy leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="line-clamp-3 text-xs text-reef-charcoal/70 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 flex items-center justify-between border-t border-reef-gold/15 text-[11px] text-reef-charcoal/60">
                  <span className="flex items-center gap-1">
                    <FiClock className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </span>
                  <Link href={`/blog/${post.slug}`} className="font-semibold text-reef-burgundy hover:text-reef-charcoal">
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="rounded-2xl border border-reef-gold/20 bg-white p-8 shadow-sm sm:p-10 mt-12">
        <SectionHeading
          eyebrow="Learn More"
          title="Blog & Insights FAQ"
          description="Common questions about our corporate gifting blog and content."
        />
        <div className="mt-8 space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-reef-gold/15 pb-4 last:border-0 last:pb-0">
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">{faq.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-reef-charcoal/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter">
        <Newsletter />
      </section>

      <CTA />
    </div>
  );
}
