import { useCallback, useRef, useState } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { TRANSFORMATIONS } from '../data/salonData';
import { LuxuryImage } from './LuxuryImage';

export function BeforeAfterSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sliderPercent, setSliderPercent] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = TRANSFORMATIONS[selectedIndex];

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(4, Math.min(96, raw));
    setSliderPercent(clamped);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPercent((p) => Math.max(4, p - 4));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPercent((p) => Math.min(96, p + 4));
    }
  };

  return (
    <section id="transformations" className="py-16 sm:py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Narrative & Example Selector */}
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.18em] text-[#652B3A] font-medium mb-3">
              Interactive Comparison
            </p>
            <h2
              className="font-editorial text-4xl sm:text-5xl text-[#242020] leading-[1.08]"
              style={{ textWrap: 'balance' }}
            >
              See the <em className="italic font-normal text-[#652B3A]">Transformation</em>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#242020]/75">
              Drag the divider horizontally across the portrait to inspect hair smoothing, dimensional colouring, and occasion makeup artistry.
            </p>

            {/* Example Switcher */}
            <div className="mt-7 space-y-2.5">
              {TRANSFORMATIONS.map((item, idx) => {
                const active = idx === selectedIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedIndex(idx);
                      setSliderPercent(50);
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#652B3A] ${
                      active
                        ? 'bg-[#F7F1E8] border-[#652B3A]/35 shadow-sm'
                        : 'bg-transparent border-[#242020]/10 hover:border-[#C6A36A]/50'
                    }`}
                  >
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#652B3A]">
                      {item.category}
                    </p>
                    <p className="font-editorial text-2xl text-[#242020] mt-0.5">
                      {item.title}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Clear Disclosure Notice */}
            <div className="mt-6 p-4 rounded-2xl bg-[#F7F1E8]/80 border border-[#C6A36A]/30 text-xs leading-relaxed text-[#242020]/75">
              <strong className="font-semibold text-[#242020]">
                Illustrative AI Visual Notice:
              </strong>{' '}
              {current.note}
            </div>
          </div>

          {/* Right Draggable Before & After Slider */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              role="slider"
              tabIndex={0}
              aria-label={`Before and after comparison for ${current.title}. Use left and right arrow keys or drag to compare.`}
              aria-valuemin={4}
              aria-valuemax={96}
              aria-valuenow={Math.round(sliderPercent)}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onKeyDown={handleKeyDown}
              className="relative w-full aspect-[4/3] rounded-[1.75rem] overflow-hidden border border-[#C6A36A]/35 shadow-[0_28px_56px_-24px_rgba(36,32,32,0.22)] select-none touch-none cursor-ew-resize focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#652B3A]"
            >
              {/* After Image (Full Right Layer) */}
              <LuxuryImage
                src={current.afterImage}
                alt={current.afterAlt}
                loading="eager"
                className="w-full h-full object-cover object-center pointer-events-none"
              />

              {/* Before Image (Clipped Left Layer) */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  clipPath: `inset(0 ${100 - sliderPercent}% 0 0)`,
                }}
              >
                <LuxuryImage
                  src={current.beforeImage}
                  alt={current.beforeAlt}
                  loading="eager"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Labels */}
              <span className="pointer-events-none absolute top-4 left-4 px-3 py-1 rounded-md bg-[#242020]/75 backdrop-blur-md text-[11px] font-semibold tracking-[0.18em] text-[#FFFDF9] uppercase">
                Before
              </span>
              <span className="pointer-events-none absolute top-4 right-4 px-3 py-1 rounded-md bg-[#652B3A]/85 backdrop-blur-md text-[11px] font-semibold tracking-[0.18em] text-[#FFFDF9] uppercase">
                After
              </span>

              {/* Vertical Divider & Animated Handle */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 bottom-0 w-[2px] bg-[#FFFDF9] shadow-[0_0_16px_rgba(0,0,0,0.45)]"
                style={{ left: `${sliderPercent}%` }}
              >
                <div
                  className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full liquid-glass-strong flex items-center justify-center text-[#652B3A] shadow-lg transition-transform duration-150 ${
                    isDragging ? 'scale-110' : 'scale-100'
                  }`}
                >
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-[#242020]/60 px-1">
              <span>Slide left or right to compare</span>
              <span className="tabular-nums">
                Split: {Math.round(sliderPercent)}% Before / {Math.round(100 - sliderPercent)}% After
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
