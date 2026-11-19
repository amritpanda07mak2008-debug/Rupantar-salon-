import { ArrowUpRight, Check } from 'lucide-react';
import { BeautyPackage } from '../data/salonData';

interface PackagesSectionProps {
  packages: BeautyPackage[];
  onBookPackage: (packageName: string) => void;
}

export function PackagesSection({ packages, onBookPackage }: PackagesSectionProps) {
  return (
    <section id="packages" className="py-16 sm:py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-[0.18em] text-[#652B3A] font-medium mb-3">
            Special Packages
          </p>
          <h2
            className="font-editorial text-4xl sm:text-5xl text-[#242020] leading-[1.08]"
            style={{ textWrap: 'balance' }}
          >
            Curated <em className="italic font-normal text-[#652B3A]">Beauty Packages</em>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#242020]/70">
            Thoughtfully bundled rituals combining our most requested treatments. Package rates are indicative starting prices and remain fully customizable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {packages.map((pkg) => {
            const isFeatured = Boolean(pkg.featured);
            return (
              <article
                key={pkg.id}
                className={`flex flex-col rounded-[1.75rem] p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1 ${
                  isFeatured
                    ? 'bg-[#652B3A] text-[#FFFDF9] border-[#652B3A] shadow-[0_24px_48px_-20px_rgba(101,43,58,0.45)]'
                    : 'bg-[#F7F1E8]/70 text-[#242020] border-[#C6A36A]/30 hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span
                    className={
                      isFeatured ? 'text-[#D7A9A6]' : 'text-[#652B3A] font-medium'
                    }
                  >
                    {pkg.tagline}
                  </span>
                  <span className="opacity-70">{pkg.duration}</span>
                </div>

                <h3 className="font-editorial text-3xl mt-3 leading-tight">
                  {pkg.name}
                </h3>

                <div className="mt-5 pb-5 border-b border-current/15">
                  <p className="text-[11px] uppercase tracking-[0.14em] opacity-75">
                    Indicative Starting Price
                  </p>
                  <p className="font-editorial text-4xl font-semibold tabular-nums mt-1">
                    ₹{pkg.indicativePrice.toLocaleString('en-IN')}
                    <span className="text-sm font-normal opacity-75 ml-1">+</span>
                  </p>
                </div>

                <ul className="mt-5 space-y-3 flex-1 text-sm">
                  {pkg.inclusions.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isFeatured ? 'text-[#D7A9A6]' : 'text-[#652B3A]'
                        }`}
                        aria-hidden="true"
                      />
                      <span className="opacity-90 leading-snug">{inc}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => onBookPackage(pkg.name)}
                  className={`mt-7 w-full inline-flex items-center justify-center gap-2 py-3 px-5 min-h-[44px] rounded-full text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    isFeatured
                      ? 'bg-[#FFFDF9] text-[#652B3A] hover:bg-[#F7F1E8] focus-visible:outline-[#FFFDF9]'
                      : 'bg-[#652B3A] text-[#FFFDF9] hover:bg-[#51202D] focus-visible:outline-[#652B3A]'
                  }`}
                >
                  <span>Request Package</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
