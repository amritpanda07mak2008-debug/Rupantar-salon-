import { Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export function LocationContactSection() {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappDigits}?text=${encodeURIComponent(
    'Hello Rupantar Beauty Salon! I would like directions or salon timing details.'
  )}`;

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Contact & Address Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#652B3A] font-medium mb-3">
                Visit Our Studio
              </p>
              <h2
                className="font-editorial text-4xl sm:text-5xl text-[#242020] leading-[1.08]"
                style={{ textWrap: 'balance' }}
              >
                Location &amp; <em className="italic font-normal text-[#652B3A]">Contact</em>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#242020]/75">
                Conveniently situated in Bankashi, Bhadrak near well-known local landmarks for effortless arrival.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-3.5">
                  <MapPin
                    className="w-5 h-5 text-[#652B3A] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-[#242020]/55 font-medium">
                      Salon Address
                    </p>
                    <p className="text-sm sm:text-base text-[#242020] leading-relaxed mt-1">
                      {SALON_INFO.brandFull}
                      <br />
                      {SALON_INFO.addressLine1}
                      <br />
                      {SALON_INFO.addressLine2}
                      <br />
                      {SALON_INFO.cityStatePin}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone
                    className="w-5 h-5 text-[#652B3A] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-[#242020]/55 font-medium">
                      Phone &amp; WhatsApp
                    </p>
                    <a
                      href={SALON_INFO.phoneHref}
                      className="text-lg font-medium text-[#242020] hover:text-[#652B3A] tabular-nums mt-1 inline-block"
                    >
                      {SALON_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock
                    className="w-5 h-5 text-[#652B3A] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-[#242020]/55 font-medium">
                      Salon Hours (Editable)
                    </p>
                    <p className="text-sm text-[#242020]/80 mt-1">
                      {SALON_INFO.editableHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[#242020]/10 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-full bg-[#652B3A] text-[#FFFDF9] text-xs font-medium tracking-wide hover:bg-[#51202D] transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp Salon</span>
              </a>

              <a
                href={SALON_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-full border border-[#652B3A]/30 bg-[#F7F1E8] text-[#652B3A] text-xs font-medium tracking-wide hover:bg-[#652B3A] hover:text-[#FFFDF9] transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call Now</span>
              </a>

              <a
                href={SALON_INFO.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-full border border-[#242020]/15 bg-[#FFFDF9] text-[#242020] text-xs font-medium tracking-wide hover:border-[#652B3A] hover:text-[#652B3A] transition-colors whitespace-nowrap"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Google Maps Embed */}
          <div className="lg:col-span-7 flex">
            <div className="w-full min-h-[360px] lg:min-h-[440px] rounded-[1.75rem] overflow-hidden border border-[#C6A36A]/30 bg-[#F7F1E8] shadow-sm relative">
              <iframe
                title="Google Map location of Rupantar Beauty Salon and Aesthetic Centre in Bankashi, Bhadrak"
                src={SALON_INFO.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[360px] lg:min-h-[440px] border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
