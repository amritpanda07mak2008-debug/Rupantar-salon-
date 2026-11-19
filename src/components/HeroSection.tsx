import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { SALON_IMAGES, SALON_INFO } from '../data/salonData';
import { LuxuryImage } from './LuxuryImage';

interface HeroSectionProps {
  onBookClick: () => void;
}

export function HeroSection({ onBookClick }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Subtle Ambient Champagne & Dusty Rose Liquid Light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] w-[520px] h-[520px] rounded-full opacity-45 blur-3xl animate-ambient"
        style={{
          background:
            'radial-gradient(circle, rgba(215, 169, 166, 0.55) 0%, rgba(198, 163, 106, 0.2) 52%, transparent 75%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-12%] w-[440px] h-[440px] rounded-full opacity-35 blur-3xl animate-ambient"
        style={{
          background:
            'radial-gradient(circle, rgba(198, 163, 106, 0.35) 0%, rgba(247, 241, 232, 0.1) 65%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Editorial Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Copy Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center py-2 lg:py-6"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-[13px] tracking-[0.14em] uppercase text-[#652B3A] mb-5">
              <span>{SALON_INFO.category}</span>
              <span aria-hidden="true">·</span>
              <span>Bankashi, Bhadrak</span>
            </div>

            <h1
              className="font-editorial text-[clamp(2.65rem,5.2vw,4.6rem)] leading-[1.03] tracking-tight text-[#242020] max-w-2xl"
              style={{ textWrap: 'balance' }}
            >
              Your <em className="italic font-normal text-[#652B3A]">Beauty.</em>{' '}
              Your <em className="italic font-normal text-[#652B3A]">Confidence.</em>{' '}
              Your Transformation.
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#242020]/75 max-w-xl">
              Experience the art of beauty, elegance and self-care at{' '}
              <span className="text-[#242020] font-medium">
                {SALON_INFO.brandFull}
              </span>
              . Thoughtful hair artistry, calming skin rituals, and bespoke bridal styling in the heart of Bhadrak.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-full bg-[#652B3A] text-[#FFFDF9] text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#51202D] hover:-translate-y-0.5 hover:shadow-lg cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#652B3A]"
              >
                <span>Book Your Appointment</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href="#services"
                className="liquid-glass inline-flex items-center justify-center px-7 py-3.5 min-h-[48px] rounded-full text-sm font-medium text-[#242020] transition-all duration-200 hover:border-[#652B3A]/40 hover:text-[#652B3A] hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#652B3A]"
              >
                Explore Our Services
              </a>
            </div>

            {/* Quiet Location Anchor */}
            <div className="mt-8 pt-6 border-t border-[#242020]/10 flex items-start gap-2.5 text-sm text-[#242020]/70 max-w-lg">
              <MapPin
                className="w-4 h-4 text-[#652B3A] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>
                Hotel Blue, Vine Street, Near Salandi Guest House, In Front of SBI ATM, Bankashi, Bhadrak
              </span>
            </div>
          </motion.div>

          {/* Right Editorial Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex"
          >
            <div className="relative w-full rounded-[2rem] overflow-hidden border border-[#C6A36A]/35 bg-[#FFFDF9] shadow-[0_28px_60px_-24px_rgba(101,43,58,0.22)] aspect-[3/4] lg:aspect-auto lg:min-h-[540px]">
              <LuxuryImage
                src={SALON_IMAGES.heroEditorial}
                alt="Luminous bridal and beauty editorial portrait at Rupantar Beauty Salon Bhadrak"
                loading="eager"
                className="w-full h-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#242020]/65 via-transparent to-transparent"
              />

              {/* Frosted Glass Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 liquid-glass rounded-2xl p-4 sm:p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#652B3A] font-semibold">
                  Curated Beauty Studio
                </p>
                <p className="font-editorial text-xl sm:text-2xl text-[#242020] mt-0.5">
                  Hair, Skin, Bridal &amp; Aesthetic Care
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Summary Strip Below Hero Split */}
        <div className="mt-10 sm:mt-14 liquid-glass rounded-2xl p-5 sm:p-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#242020]/10">
            <div className="pt-2 lg:pt-0">
              <p className="text-xs uppercase tracking-[0.14em] text-[#242020]/55">
                Customer Feedback
              </p>
              <p className="font-editorial text-3xl sm:text-4xl text-[#242020] tabular-nums mt-1">
                {SALON_INFO.reviews.totalReviews}
              </p>
              <p className="text-xs text-[#242020]/70 mt-0.5">Total client reviews</p>
            </div>

            <div className="pt-2 lg:pt-0 lg:pl-8">
              <p className="text-xs uppercase tracking-[0.14em] text-[#242020]/55">
                Five-Star Appreciation
              </p>
              <p className="font-editorial text-3xl sm:text-4xl text-[#652B3A] tabular-nums mt-1">
                {SALON_INFO.reviews.fiveStarRatings}
              </p>
              <p className="text-xs text-[#242020]/70 mt-0.5">Customers gave 5-star ratings</p>
            </div>

            <div className="pt-4 lg:pt-0 lg:pl-8">
              <p className="text-xs uppercase tracking-[0.14em] text-[#242020]/55">
                Indicative Menu
              </p>
              <p className="font-editorial text-3xl sm:text-4xl text-[#242020] tabular-nums mt-1">
                ₹199<span className="text-xl text-[#652B3A]">+</span>
              </p>
              <p className="text-xs text-[#242020]/70 mt-0.5">Starting haircut pricing</p>
            </div>

            <div className="pt-4 lg:pt-0 lg:pl-8">
              <p className="text-xs uppercase tracking-[0.14em] text-[#242020]/55">
                Direct Booking Desk
              </p>
              <p className="font-editorial text-2xl sm:text-3xl text-[#242020] tabular-nums mt-1.5">
                {SALON_INFO.phoneDisplay}
              </p>
              <p className="text-xs text-[#242020]/70 mt-1">WhatsApp &amp; phone inquiries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
