import { constructMetadata } from "@/components/seo/Metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CTA } from "@/components/common/CTA";
import { videos } from "@/data/gallery";
import { Images } from "@/assets/images";
import { FiPlay, FiExternalLink } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa6";

export const metadata = constructMetadata({
  title: "Video Gallery | Gift Box Unboxing & Corporate Hamper Reels Pune",
  description: "Watch Reet Foods & Gifting video showcases: unboxing luxury gift boxes, artisan chocolate crafting, and corporate gifting reels on YouTube.",
  canonical: "/gallery/videos",
});

export default function VideoGalleryPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
          { name: "Videos", url: "/gallery/videos" },
        ]}
      />

      <PageHero
        eyebrow="Visual Stories"
        title="Video Showcase & Hamper Reels"
        description="Experience the texture, craftsmanship, magnetic box closures, and luxury unboxing of Reet Foods corporate gift assortments in HD video."
        breadcrumbs={[
          { label: "Gallery", href: "/gallery" },
          { label: "Videos" },
        ]}
        image={Images.rigidBoxGold}
        imageAlt="Reet Foods Video Showcase"
        primaryCta={{ label: "View Photo Gallery", href: "/gallery/photos" }}
        secondaryCta={{ label: "Subscribe on YouTube", href: "https://www.youtube.com/@ReetFoodsGiftings" }}
        sideBadge="HD Reels"
      />

      {/* Featured Video Player */}
      <section className="rounded-3xl border border-reef-gold/25 bg-[#111111] p-6 sm:p-10 text-white shadow-xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
          <div className="relative aspect-[9/16] max-h-[520px] mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border border-reef-gold/30 bg-black shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/qq9QHUmzlIw?rel=0&modestbranding=1"
              title="Reet Foods Luxury Corporate Hamper Showcase"
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-600/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-400">
              <FaYoutube className="text-red-500 text-sm" /> Official Reel
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white">
              Reet Foods Corporate Gifting & Hamper Unboxing
            </h2>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              Take a closer look at our signature dry fruit hampers, handcrafted luxury caskets, and bespoke corporate branding finishes designed and fulfilled in Pune.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="https://youtube.com/shorts/qq9QHUmzlIw?feature=share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff0000] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow transition hover:bg-[#cc0000]"
              >
                <FaYoutube className="text-base" /> Watch on YouTube Shorts
              </a>
              <a
                href="https://www.youtube.com/@ReetFoodsGiftings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/20"
              >
                Visit Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of video reels */}
      <section>
        <SectionHeading
          eyebrow="Packaging & Product Reels"
          title="Explore More Gifting Showcases"
          description="Watch our latest video reels directly on YouTube or subscribe to our official channel @ReetFoodsGiftings."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, idx) => (
            <a
              key={idx}
              href={video.watchUrl || video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-reef-gold/20 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-reef-gold hover:shadow-lg"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-reef-burgundy">YouTube Reel</span>
                <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-xl font-bold text-reef-charcoal group-hover:text-reef-burgundy">
                  {video.title}
                </h3>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-reef-gold/15 pt-4">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-reef-burgundy">
                  <span>Watch on YouTube</span>
                  <FiExternalLink className="h-3.5 w-3.5" />
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-reef-cream text-reef-burgundy shadow-sm transition group-hover:bg-reef-burgundy group-hover:text-white">
                  <FiPlay className="h-4 w-4 ml-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
