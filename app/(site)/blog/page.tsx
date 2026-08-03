import { constructMetadata } from "@/components/seo/Metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
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

      {/* Newsletter */}
      <section id="newsletter">
        <Newsletter />
      </section>

      <CTA />
    </div>
  );
}
