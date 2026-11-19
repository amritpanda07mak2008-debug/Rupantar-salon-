import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ServiceItem } from '../data/salonData';
import { LuxuryImage } from './LuxuryImage';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectService: (serviceName: string) => void;
}

const CATEGORIES = ['All', 'Hair', 'Skin', 'Makeup', 'Nails & Finishing'] as const;

export function ServicesSection({ services, onSelectService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>('All');

  const filteredServices = useMemo(() => {
    if (activeCategory === 'All') return services;
    return services.filter((s) => s.category === activeCategory);
  }, [services, activeCategory]);

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F7F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-[#652B3A] font-medium mb-3">
              Curated Services
            </p>
            <h2
              className="font-editorial text-4xl sm:text-5xl text-[#242020] leading-[1.08]"
              style={{ textWrap: 'balance' }}
            >
              Signature Rituals for{' '}
              <em className="italic font-normal text-[#652B3A]">Hair, Skin &amp; Bridal</em>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#242020]/70">
              All rates displayed below are indicative starting prices in INR. Final service pricing is confirmed after in-salon hair or skin consultation.
            </p>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div
            role="tablist"
            aria-label="Filter beauty services by category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#FFFDF9]/80 border border-[#C6A36A]/25 self-start lg:self-auto"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 min-h-[38px] rounded-xl text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#652B3A] ${
                    isActive
                      ? 'bg-[#652B3A] text-[#FFFDF9] shadow-sm'
                      : 'text-[#242020]/75 hover:text-[#652B3A] hover:bg-[#F7F1E8]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: Math.min(idx * 0.04, 0.2) }}
              className="group flex flex-col rounded-[1.5rem] bg-[#FFFDF9] border border-[#C6A36A]/20 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(101,43,58,0.2)]"
            >
              {/* Service Photography */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE7DB]">
                <LuxuryImage
                  src={service.image}
                  alt={service.imageAlt}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                    service.imagePosition ?? 'object-center'
                  }`}
                />
              </div>

              {/* Card Content */}
              <div className="flex-1 flex flex-col p-6">
                {/* Unboxed Editorial Metadata */}
                <div className="flex items-center gap-2 text-xs text-[#242020]/60 mb-2">
                  <span className="tabular-nums font-medium text-[#652B3A]">
                    {service.index}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{service.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{service.duration}</span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-[1.65rem] text-[#242020] leading-snug">
                  {service.name}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#242020]/75 flex-1">
                  {service.description}
                </p>

                {/* Indicative Price & Book Action */}
                <div className="mt-6 pt-4 border-t border-[#242020]/10 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.12em] text-[#242020]/55">
                      Indicative Starting Price
                    </p>
                    <p className="font-editorial text-2xl font-semibold text-[#652B3A] tabular-nums mt-0.5">
                      ₹{service.indicativePrice.toLocaleString('en-IN')}
                      <span className="text-sm font-normal text-[#242020]/60 ml-1">
                        onwards
                      </span>
                    </p>
                    {service.priceUnit && (
                      <p className="text-[11px] text-[#242020]/65 mt-0.5 tabular-nums">
                        {service.priceUnit}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectService(service.name)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[40px] rounded-full bg-[#F7F1E8] border border-[#652B3A]/20 text-xs font-medium text-[#652B3A] whitespace-nowrap shrink-0 transition-all duration-200 hover:bg-[#652B3A] hover:text-[#FFFDF9] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#652B3A]"
                  >
                    <span>Book Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
