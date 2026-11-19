import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeaderProps {
  onBookClick: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Packages', href: '#packages' },
  { label: 'Location', href: '#location' },
];

export function Header({ onBookClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'liquid-glass-nav py-2.5'
          : 'bg-[#FFFDF9]/55 backdrop-blur-md border-b border-[#C6A36A]/15 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#top"
          className="font-editorial text-2xl sm:text-[1.7rem] font-semibold tracking-tight text-[#242020] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#652B3A]"
        >
          {SALON_INFO.brandShort}
        </a>

        {/* Zone 2: 5 clean single-line text nav links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#242020]/80"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#652B3A] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#652B3A] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#652B3A]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu button */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 min-h-[40px] rounded-full bg-[#652B3A] text-[#FFFDF9] text-xs font-medium tracking-wide whitespace-nowrap shrink-0 transition-all duration-200 hover:bg-[#51202D] hover:shadow-md active:scale-[0.99] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#652B3A]"
          >
            Book Appointment
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#C6A36A]/35 bg-[#FFFDF9]/80 text-[#242020] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#652B3A]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#C6A36A]/20 bg-[#FFFDF9]/95 backdrop-blur-xl px-5 py-5 space-y-2 shadow-xl">
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="py-3 px-2 text-base font-medium text-[#242020] border-b border-[#242020]/5 hover:text-[#652B3A] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onBookClick();
              }}
              className="w-full py-3.5 px-6 rounded-full bg-[#652B3A] text-[#FFFDF9] text-sm font-medium tracking-wide cursor-pointer"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
