import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { REVIEW_PLACEHOLDERS, SALON_INFO } from '../data/salonData';

function useCountUp(target: number, start: boolean) {
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!start) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setValue(target);
      return;
    }

    let frame = 0;
    const totalFrames = 28;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(1, frame / totalFrames);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (frame >= totalFrames) {
        window.clearInterval(timer);
      }
    }, 24);

    return () => window.clearInterval(timer);
  }, [target, start]);

  return value;
}

export function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const totalCount = useCountUp(SALON_INFO.reviews.totalReviews, hasEntered);
  const fiveStarCount = useCountUp(SALON_INFO.reviews.fiveStarRatings, hasEntered);

  return (
    <section ref={sectionRef} id="reviews" className="py-16 sm:py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Verified Trust Figures */}
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.18em] text-[#652B3A] font-medium mb-3">
              Client Appreciation
            </p>
            <h2
              className="font-editorial text-4xl sm:text-5xl text-[#242020] leading-[1.08]"
              style={{ textWrap: 'balance' }}
            >
              Loved Across <em className="italic font-normal text-[#652B3A]">Bhadrak</em>
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#242020]/75">
              Our Bankashi studio is built on attentive hygiene, calm hospitality, and consistent care for every client who visits us.
            </p>

            {/* Verified Review Counters */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="liquid-glass rounded-2xl p-5 border border-[#C6A36A]/25">
                <p className="font-editorial text-4xl sm:text-5xl text-[#242020] tabular-nums">
                  {totalCount}
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#242020]/65 mt-2">
                  Total Customer Reviews
                </p>
              </div>

              <div className="liquid-glass rounded-2xl p-5 border border-[#C6A36A]/25">
                <p className="font-editorial text-4xl sm:text-5xl text-[#652B3A] tabular-nums">
                  {fiveStarCount}
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#242020]/65 mt-2">
                  Five-Star Ratings
                </p>
              </div>
            </div>
          </div>

          {/* Right Editable Verified Review Placeholders */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {REVIEW_PLACEHOLDERS.map((slot) => (
              <div
                key={slot.id}
                className="rounded-2xl p-6 bg-[#F7F1E8]/65 border border-[#C6A36A]/25"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs text-[#242020]/65">
                    <span className="font-medium text-[#652B3A]">{slot.slotLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{slot.serviceTag}</span>
                  </div>

                  <div
                    className="flex items-center gap-0.5 text-[#C6A36A]"
                    aria-label={`${slot.verifiedStars} out of 5 stars`}
                  >
                    {Array.from({ length: slot.verifiedStars }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-3.5 h-3.5 fill-[#C6A36A]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                <p className="font-editorial text-xl italic text-[#242020]/85 leading-relaxed">
                  &ldquo;{slot.placeholderNote}&rdquo;
                </p>

                <p className="mt-3 text-xs text-[#242020]/55">
                  Editable placeholder — add verified client name &amp; feedback in{' '}
                  <code className="text-[#652B3A]">salonData.ts</code>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
