import { useEffect, useState } from 'react';
import { ArrowUp, Calendar, MessageCircle } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FloatingActionsProps {
  onBookClick: () => void;
}

export function FloatingActions({ onBookClick }: FloatingActionsProps) {
  const [showTop, setShowTop] = useState(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 520);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (prefersReduced || !isFinePointer) return;

    const onMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const whatsappDirectUrl = `https://wa.me/${SALON_INFO.whatsappDigits}?text=${encodeURIComponent(
    'Hello Rupantar Beauty Salon! I would like to enquire about an appointment.'
  )}`;

  return (
    <>
      {/* Subtle Desktop Ambient Cursor Glow */}
      {cursorPos && (
        <div
          aria-hidden="true"
          className="hidden lg:block fixed pointer-events-none z-10 w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 transition-transform duration-150"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            background:
              'radial-gradient(circle, rgba(215, 169, 166, 0.28) 0%, rgba(198, 163, 106, 0.09) 45%, transparent 72%)',
          }}
        />
      )}

      {/* Compact Floating Glass Controls (respects 15% mobile sticky height cap) */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center gap-2.5">
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="liquid-glass-strong w-11 h-11 rounded-full flex items-center justify-center text-[#242020] hover:text-[#652B3A] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#652B3A]"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <button
          type="button"
          onClick={onBookClick}
          className="hidden sm:inline-flex items-center gap-2 liquid-glass-strong px-4 h-11 rounded-full text-xs font-medium text-[#242020] hover:text-[#652B3A] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#652B3A]"
        >
          <Calendar className="w-3.5 h-3.5 text-[#652B3A]" aria-hidden="true" />
          <span>Book Slot</span>
        </button>

        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Rupantar Beauty Salon"
          className="liquid-glass-burgundy inline-flex items-center gap-2 px-4 sm:px-5 h-11 rounded-full text-xs font-medium text-[#FFFDF9] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#652B3A]"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
