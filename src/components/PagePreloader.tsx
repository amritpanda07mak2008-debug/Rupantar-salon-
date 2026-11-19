import { useEffect, useState } from 'react';

export function PagePreloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(false);
      return;
    }

    const fadeTimer = window.setTimeout(() => setFading(true), 420);
    const hideTimer = window.setTimeout(() => setVisible(false), 820);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F7F1E8] transition-opacity duration-500 pointer-events-none ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center px-6">
        <p className="text-xs tracking-[0.32em] uppercase text-[#652B3A]/75 mb-2">
          Bankashi · Bhadrak
        </p>
        <p className="font-editorial text-4xl sm:text-5xl text-[#242020] tracking-wide">
          Rupantar
        </p>
        <div className="mt-4 h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-[#C6A36A] to-transparent" />
      </div>
    </div>
  );
}
