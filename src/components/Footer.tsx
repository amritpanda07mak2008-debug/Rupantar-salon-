import { Instagram, MessageCircle, Phone } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappDigits}`;

  return (
    <footer className="bg-[#242020] text-[#F7F1E8] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FFFDF9]/12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="#top" className="font-editorial text-3xl sm:text-4xl text-[#FFFDF9]">
              {SALON_INFO.brandShort}
            </a>
            <p className="text-xs uppercase tracking-[0.16em] text-[#D7A9A6] mt-1.5">
              Beauty Salon &amp; Aesthetic Centre
            </p>
            <p className="mt-4 text-sm text-[#F7F1E8]/75 leading-relaxed max-w-sm">
              A serene ladies&apos; beauty parlour in Bankashi, Bhadrak offering hair styling, hair spa, facials, bridal makeup, manicure, pedicure, and saree draping.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.16em] text-[#C6A36A] font-medium mb-4">
              Explore
            </p>
            <ul className="space-y-2.5 text-sm text-[#F7F1E8]/80">
              <li>
                <a href="#about" className="hover:text-[#D7A9A6] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D7A9A6] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-[#D7A9A6] transition-colors">
                  Transformations
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D7A9A6] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#price-menu" className="hover:text-[#D7A9A6] transition-colors">
                  Price Menu
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#D7A9A6] transition-colors">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.16em] text-[#C6A36A] font-medium mb-4">
              Services
            </p>
            <ul className="space-y-2.5 text-sm text-[#F7F1E8]/80">
              <li>Haircut, Spa &amp; Colouring</li>
              <li>Bridal &amp; Party Makeup</li>
              <li>Facial, Cleanup &amp; Detan</li>
              <li>Manicure, Pedicure &amp; Nails</li>
              <li>Waxing, Threading &amp; Saree Draping</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.16em] text-[#C6A36A] font-medium mb-4">
              Contact &amp; Address
            </p>
            <p className="text-sm text-[#F7F1E8]/80 leading-relaxed">
              {SALON_INFO.addressLine1}, {SALON_INFO.addressLine2}, {SALON_INFO.cityStatePin}
            </p>

            <div className="mt-4 space-y-2.5 text-sm">
              <a
                href={SALON_INFO.phoneHref}
                className="flex items-center gap-2 text-[#FFFDF9] hover:text-[#D7A9A6] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#C6A36A]" aria-hidden="true" />
                <span>{SALON_INFO.phoneDisplay}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#FFFDF9] hover:text-[#D7A9A6] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A36A]" aria-hidden="true" />
                <span>WhatsApp Appointment Desk</span>
              </a>

              <a
                href={SALON_INFO.instagramPlaceholderUrl}
                className="flex items-center gap-2 text-[#F7F1E8]/75 hover:text-[#D7A9A6] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C6A36A]" aria-hidden="true" />
                <span>{SALON_INFO.instagramHandleLabel}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F1E8]/60">
          <p>
            &copy; {currentYear} {SALON_INFO.brandFull}. All rights reserved.
          </p>
          <p>
            Indicative starting prices shown · Gallery &amp; sliders feature illustrative AI visuals.
          </p>
        </div>
      </div>
    </footer>
  );
}
