import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_ITEMS, GalleryPhoto } from '../data/salonData';
import { LuxuryImage } from './LuxuryImage';

const GALLERY_FILTERS = [
  'All',
  'Bridal & Occasion',
  'Hair Artistry',
  'Skin & Spa',
  'Studio & Nails',
] as const;

export function GallerySection() {
  const [filter, setFilter] = useState<(typeof GALLERY_FILTERS)[number]>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visiblePhotos = useMemo(() => {
    if (filter === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === filter);
  }, [filter]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % visiblePhotos.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + visiblePhotos.length) % visiblePhotos.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, visiblePhotos.length]);

  const activePhoto: GalleryPhoto | null =
    lightboxIndex !== null ? visiblePhotos[lightboxIndex] ?? null : null;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#F7F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#652B3A] font-medium mb-3">
              Editorial Portfolio
            </p>
            <h2
              className="font-editorial text-4xl sm:text-5xl text-[#242020] leading-[1.08]"
              style={{ textWrap: 'balance' }}
            >
              The Rupantar <em className="italic font-normal text-[#652B3A]">Gallery</em>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#242020]/70 max-w-xl">
              Explore AI-generated beauty lookbooks spanning bridal elegance, glossy hair treatments, skincare rituals, and our serene studio atmosphere.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter gallery images"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#FFFDF9]/80 border border-[#C6A36A]/25 self-start lg:self-auto"
          >
            {GALLERY_FILTERS.map((tab) => {
              const active = filter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setFilter(tab);
                    setLightboxIndex(null);
                  }}
                  className={`px-3.5 py-2 min-h-[38px] rounded-xl text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#652B3A] ${
                    active
                      ? 'bg-[#652B3A] text-[#FFFDF9]'
                      : 'text-[#242020]/75 hover:text-[#652B3A]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry Column Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {visiblePhotos.map((photo, index) => (
            <figure
              key={photo.id}
              className="break-inside-avoid group relative rounded-[1.5rem] overflow-hidden bg-[#FFFDF9] border border-[#C6A36A]/20 shadow-sm"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`View ${photo.title} in fullscreen lightbox`}
                className={`relative block w-full overflow-hidden cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#652B3A] ${photo.aspectClass}`}
              >
                <LuxuryImage
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#242020]/75 via-[#242020]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#F7F1E8]/85">
                      {photo.category}
                    </p>
                    <p className="font-editorial text-xl text-[#FFFDF9]">
                      {photo.title}
                    </p>
                  </div>
                  <span className="w-9 h-9 rounded-full liquid-glass flex items-center justify-center text-[#242020] shrink-0">
                    <Expand className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </figure>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activePhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          className="fixed inset-0 z-50 bg-[#242020]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close fullscreen gallery"
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-[#FFFDF9]/15 text-[#FFFDF9] hover:bg-[#FFFDF9]/25 flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full max-h-[76vh] rounded-2xl overflow-hidden border border-[#C6A36A]/30 bg-[#1B1818] flex items-center justify-center">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                referrerPolicy="no-referrer"
                className="max-h-[76vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="mt-4 w-full flex items-center justify-between gap-4 text-[#FFFDF9]">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#D7A9A6]">
                  {activePhoto.category}
                </p>
                <p className="font-editorial text-2xl">{activePhoto.title}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + visiblePhotos.length) % visiblePhotos.length
                    )
                  }
                  aria-label="Previous gallery image"
                  className="w-10 h-10 rounded-full bg-[#FFFDF9]/15 hover:bg-[#FFFDF9]/25 flex items-center justify-center cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((lightboxIndex + 1) % visiblePhotos.length)
                  }
                  aria-label="Next gallery image"
                  className="w-10 h-10 rounded-full bg-[#FFFDF9]/15 hover:bg-[#FFFDF9]/25 flex items-center justify-center cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
