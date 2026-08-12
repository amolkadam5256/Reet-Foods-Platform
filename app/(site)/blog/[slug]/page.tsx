import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/components/seo/Metadata";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CTA } from "@/components/common/CTA";
import { blogPosts } from "@/data/blog";
import { Images } from "@/assets/images";
import { FiClock, FiCalendar, FiUser, FiArrowLeft } from "react-icons/fi";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    canonical: `/blog/${slug}`,
    keywords: post.keywords || post.tags,
  });
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
        authorName={post.author}
      />
      {post.faqs ? <FAQSchema faqs={post.faqs} /> : null}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />

      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-reef-burgundy transition hover:text-reef-charcoal mb-6"
        >
          <FiArrowLeft className="h-4 w-4" />
          <span>Back to Gifting Blog</span>
        </Link>

        {/* Post Meta */}
        <div className="space-y-4">
          <div className="inline-block rounded-full bg-reef-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-reef-burgundy">
            {post.category}
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight text-reef-charcoal sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-reef-charcoal/60 border-y border-reef-gold/15 py-3.5">
            <span className="flex items-center gap-1">
              <FiUser className="h-3.5 w-3.5 text-reef-gold" />
              <span>{post.author}</span>
            </span>
            <span aria-hidden="true">|</span>
            <span className="flex items-center gap-1">
              <FiCalendar className="h-3.5 w-3.5 text-reef-gold" />
              <span>{post.datePublished}</span>
            </span>
            <span aria-hidden="true">|</span>
            <span className="flex items-center gap-1">
              <FiClock className="h-3.5 w-3.5 text-reef-gold" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-reef-cream shadow-md">
          <Image
            src={post.image || Images.woodenBoxNuts}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        {/* Post Content */}
        <article className="prose prose-sm prose-reef max-w-none mt-8 text-reef-charcoal/90 leading-relaxed space-y-6">
          <div
            className="text-sm md:text-base space-y-4"
            dangerouslySetInnerHTML={{
              __html: post.content
                .trim()
                .split("\n\n")
                .map((paragraph) => {
                  if (paragraph.startsWith("###")) {
                    return `<h3 class="font-[family-name:var(--font-playfair)] text-xl font-semibold text-reef-burgundy pt-2 mt-4">${paragraph.replace("###", "").trim()}</h3>`;
                  }
                  if (paragraph.startsWith("##")) {
                    return `<h2 class="font-[family-name:var(--font-playfair)] text-2xl font-bold text-reef-charcoal pt-4 mt-6 border-b border-reef-gold/10 pb-2">${paragraph.replace("##", "").trim()}</h2>`;
                  }
                  if (paragraph.startsWith("*")) {
                    const items = paragraph.split("\n").map(li => `<li class="ml-4 list-disc">${li.replace("*", "").trim()}</li>`).join("");
                    return `<ul class="my-4 space-y-1.5">${items}</ul>`;
                  }
                  return `<p>${paragraph}</p>`;
                })
                .join(""),
            }}
          />
        </article>

        {/* Tags */}
        <div className="mt-8 border-t border-reef-gold/15 pt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-reef-cream px-3 py-1 text-[11px] font-medium text-reef-charcoal/80 border border-reef-gold/10">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Posts */}
      <section className="border-t border-reef-gold/15 pt-12 max-w-4xl mx-auto">
        <SectionHeading eyebrow="Read Next" title="Related Gifting Articles" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {relatedPosts.map((rPost) => (
            <div key={rPost.slug} className="rounded-xl border border-reef-gold/20 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative aspect-[16/10] w-full bg-reef-cream">
                <Image
                  src={rPost.image || Images.rigidBoxGold}
                  alt={rPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-reef-burgundy">{rPost.category}</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-reef-charcoal hover:text-reef-burgundy">
                  <Link href={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                </h3>
                <p className="line-clamp-2 text-xs text-reef-charcoal/70 leading-relaxed">{rPost.excerpt}</p>
                <div className="pt-2 flex justify-between items-center text-[10px] text-reef-charcoal/50">
                  <span>{rPost.datePublished}</span>
                  <Link href={`/blog/${rPost.slug}`} className="font-semibold text-reef-burgundy">Read more</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
