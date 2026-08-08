import Image from "next/image";
import Link from "next/link";
import { FiClock } from "react-icons/fi";
import { Images } from "@/assets/images";
import { SectionHeading } from "@/components/common/SectionHeading";
import type { BlogPost } from "@/data/blog";

export function BlogPostsGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <section>
      <SectionHeading
        eyebrow="Latest Articles"
        title="More Gifting & Packaging Insights"
        description="Refining the corporate unboxing experience, client engagement guides, and food storage protocols."
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col rounded-xl border border-reef-gold/20 bg-white overflow-hidden shadow-sm hover:shadow-md transition"
          >
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
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-reef-burgundy hover:text-reef-charcoal"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
