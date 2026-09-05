"use client";

import { useEffect, useCallback, useState } from "react";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { GalleryPhotoGrid } from "@/components/gallery/GalleryPhotoGrid";
import { GalleryVideoGrid } from "@/components/gallery/GalleryVideoGrid";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { GalleryVideoModal } from "@/components/gallery/GalleryVideoModal";
import { photos, featuredPhotos } from "@/data/gallery";




type GalleryVideo = { title: string; link: string };


export function GalleryClient({ videos }: { videos: GalleryVideo[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<GalleryVideo | null>(null);
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(15);

  const filters = ["All", ...Array.from(new Set(photos.map((photo) => photo.type ?? "Collection")))];
  const filteredPhotos = activeFilter === "All" ? photos : photos.filter((photo) => (photo.type ?? "Collection") === activeFilter);
  const visiblePhotos = filteredPhotos.slice(0, visibleCount);
  const activePhoto = activeIndex === null ? null : visiblePhotos[activeIndex];

  const close = () => setActiveIndex(null);
  const showPrevious = useCallback(() => setActiveIndex((index) => index === null ? null : (index - 1 + visiblePhotos.length) % visiblePhotos.length), [visiblePhotos.length]);
  const showNext = useCallback(() => setActiveIndex((index) => index === null ? null : (index + 1) % visiblePhotos.length), [visiblePhotos.length]);

  const toggleLike = (index: number) => setLiked((current) => {
    const next = new Set(current);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    return next;
  });

  useEffect(() => {
    if (activeIndex === null && activeVideo === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        setActiveVideo(null);
      }
      if (event.key === "ArrowLeft" && activeIndex !== null) showPrevious();
      if (event.key === "ArrowRight" && activeIndex !== null) showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, activeVideo, showPrevious, showNext]);

  return (
    <main className="bg-[#fbf7f1] py-12 sm:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <GalleryHero
          photoCount={photos.length}
          videoCount={videos.length}
          featuredPhotos={featuredPhotos}
        />

        <GalleryPhotoGrid
          visiblePhotos={visiblePhotos}
          filteredPhotosCount={filteredPhotos.length}
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          setActiveIndex={setActiveIndex}
          visibleCount={visibleCount}
          setVisibleCount={setVisibleCount}
        />

        <GalleryVideoGrid videos={videos} setActiveVideo={setActiveVideo} />
      </div>

      {activePhoto && activeIndex !== null ? (
        <GalleryLightbox
          activePhoto={activePhoto}
          activeIndex={activeIndex}
          totalPhotos={filteredPhotos.length}
          liked={liked}
          close={close}
          showPrevious={showPrevious}
          showNext={showNext}
          toggleLike={toggleLike}
        />
      ) : null}

      {activeVideo ? (
        <GalleryVideoModal
          video={activeVideo}
          close={() => setActiveVideo(null)}
        />
      ) : null}
    </main>
  );
}
