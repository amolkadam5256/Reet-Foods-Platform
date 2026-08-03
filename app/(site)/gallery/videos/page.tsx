import { constructMetadata } from "@/components/seo/Metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CTA } from "@/components/common/CTA";
import { videos } from "@/data/gallery";
import { Images } from "@/assets/images";
import { FiPlay, FiExternalLink } from "react-icons/fi";

export const metadata = constructMetadata({
  title: "Video Gallery | Gift Box Unboxing & Product Showcases Pune",
  description: "Watch Reet Foods & Gifting video showcases: unboxing luxury gift boxes, artisan chocolate crafting, and corporate gifting reels.",
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
        title="Video Showcase & Unboxing Reels"
        description="Experience the texture, craftsmanship, magnetic box closures, and luxury unboxing of Reet Foods gift assortments in HD video."
        breadcrumbs={[
          { label: "Gallery", href: "/gallery" },
          { label: "Videos" },
        ]}
        image={Images.rigidBoxGold}
        imageAlt="Reet Foods Video Showcase"
        primaryCta={{ label: "View Photo Gallery", href: "/gallery/photos" }}
        secondaryCta={{ label: "Corporate Catalog", href: "/contact#quote" }}
        sideBadge="HD Reels"
      />

      <section>
        <SectionHeading
          eyebrow="Unboxing & Craft"
          title="Featured Packaging & Product Reels"
          description="Click any reel to watch on YouTube or view our packaging craftsmanship."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <a
              key={video.title}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-reef-gold/20 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-reef-gold hover:shadow-lg"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-reef-burgundy">Video Reel</span>
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
