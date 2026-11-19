import { MapPin, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';
import { SALON_IMAGES, SALON_INFO } from '../data/salonData';
import { LuxuryImage } from './LuxuryImage';

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Luxury Interior Photograph */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex"
          >
            <div className="relative w-full rounded-[1.75rem] overflow-hidden border border-[#C6A36A]/25 shadow-[0_24px_50px_-24px_rgba(36,32,32,0.18)] aspect-[16/10] lg:aspect-auto lg:min-h-[440px]">
              <LuxuryImage
                src={SALON_IMAGES.salonInterior}
                alt="Luxury interior of Rupantar Beauty Salon and Aesthetic Centre in Bankashi, Bhadrak"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Brand Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[#652B3A] font-medium mb-3">
              About Rupantar · Bhadrak
            </p>
            <h2
              className="font-editorial text-4xl sm:text-5xl text-[#242020] leading-[1.08]"
              style={{ textWrap: 'balance' }}
            >
              Where Beauty Meets <em className="italic font-normal text-[#652B3A]">Elegance</em>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#242020]/75">
              Situated in the heart of Bankashi,{' '}
              <span className="font-medium text-[#242020]">{SALON_INFO.brandFull}</span> is a dedicated ladies&apos; beauty parlour and aesthetic sanctuary created for unhurried personal care. From everyday hair styling and soothing facials to wedding-day bridal artistry, every ritual is approached with calm attentiveness and modern hygiene.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#242020]/75">
              Trusted across Bhadrak with{' '}
              <span className="font-medium text-[#242020]">
                {SALON_INFO.reviews.totalReviews} customer reviews
              </span>{' '}
              — including{' '}
              <span className="font-medium text-[#652B3A]">
                {SALON_INFO.reviews.fiveStarRatings} five-star ratings
              </span>{' '}
              — our studio welcomes women seeking natural skin glow, healthy hair care, and graceful occasion looks.
            </p>

            {/* Clean Architectural Location & Contact Blocks */}
            <div className="mt-8 pt-6 border-t border-[#242020]/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#652B3A] font-semibold mb-2">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Bankashi Address</span>
                </div>
                <p className="text-sm text-[#242020]/80 leading-relaxed">
                  {SALON_INFO.addressLine1}, {SALON_INFO.addressLine2}, {SALON_INFO.cityStatePin}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#652B3A] font-semibold mb-2">
                  <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Appointment Desk</span>
                </div>
                <p className="text-sm text-[#242020]/80 leading-relaxed tabular-nums">
                  {SALON_INFO.phoneDisplay}
                </p>
                <p className="text-xs text-[#242020]/60 mt-1">
                  {SALON_INFO.editableHours}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
