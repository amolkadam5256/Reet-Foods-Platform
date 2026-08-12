import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiClock } from "react-icons/fi";
import { Images } from "@/assets/images";
import type { BlogPost } from "@/data/blog";

export function BlogFeaturedPost({ post }: { post: BlogPost }) {
  if (!post) return null;

  return (
    <section className="rounded-2xl border border-reef-gold/20 bg-white overflow-hidden shadow-sm hover:shadow-md transition duration-300">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[240px] md:min-h-[320px] lg:min-h-[380px] w-full bg-reef-cream">
          <Image
            src={post.image || Images.woodenBoxNuts}
            alt={post.title}
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
            <span>{post.category}</span>
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold leading-tight text-reef-charcoal sm:text-3xl">
            <Link
              href={`/blog/${post.slug}`}
              className="hover:text-reef-burgundy transition"
            >
              {post.title}
            </Link>
          </h2>

          <p className="text-xs leading-relaxed text-reef-charcoal/75 sm:text-sm">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-xs text-reef-charcoal/60 pt-2">
            <span className="flex items-center gap-1">
              <FiClock className="h-3.5 w-3.5" />
              <span>{post.readTime}</span>
            </span>
            <span aria-hidden="true">|</span>
            <span>{post.datePublished}</span>
          </div>

          <div className="pt-4">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-reef-gold px-6 py-3 text-xs font-semibold text-reef-charcoal shadow-sm hover:bg-reef-burgundy hover:text-white transition"
            >
              <span>Read Article</span>
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
