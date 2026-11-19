import { useState } from 'react';
import { ArrowUpRight, Pencil, RotateCcw } from 'lucide-react';
import { PriceMenuCategory } from '../data/salonData';

interface PriceMenuSectionProps {
  categories: PriceMenuCategory[];
  onBookItem: (serviceName: string) => void;
  onUpdateItemPrice: (itemId: string, nextPrice: number) => void;
  onResetPrices: () => void;
  hasCustomPrices: boolean;
}

export function PriceMenuSection({
  categories,
  onBookItem,
  onUpdateItemPrice,
  onResetPrices,
  hasCustomPrices,
}: PriceMenuSectionProps) {
  const [activeTab, setActiveTab] = useState<PriceMenuCategory['id']>('Hair');
  const [ownerEditMode, setOwnerEditMode] = useState(false);

  const activeCategory =
    categories.find((cat) => cat.id === activeTab) ?? categories[0];

  return (
    <section id="price-menu" className="py-16 sm:py-24 bg-[#F7F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#652B3A] font-medium mb-3">
              Indicative Rate Card
            </p>
            <h2
              className="font-editorial text-4xl sm:text-5xl text-[#242020] leading-[1.08]"
              style={{ textWrap: 'balance' }}
            >
              The Salon <em className="italic font-normal text-[#652B3A]">Price Menu</em>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#242020]/70 max-w-2xl">
              Indicative starting prices in INR. Final charges depend on hair length, skin profile, or bridal styling preferences confirmed at the salon.
            </p>
          </div>

          {/* Owner Quick-Edit Controls */}
          <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-auto">
            {hasCustomPrices && (
              <button
                type="button"
                onClick={onResetPrices}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[38px] rounded-full border border-[#242020]/15 bg-[#FFFDF9] text-xs font-medium text-[#242020]/80 hover:text-[#652B3A] cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Reset Defaults</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setOwnerEditMode((prev) => !prev)}
              aria-pressed={ownerEditMode}
              className={`inline-flex items-center gap-1.5 px-4 py-2 min-h-[38px] rounded-full border text-xs font-medium transition-colors cursor-pointer ${
                ownerEditMode
                  ? 'bg-[#652B3A] text-[#FFFDF9] border-[#652B3A]'
                  : 'bg-[#FFFDF9]/80 text-[#242020]/80 border-[#C6A36A]/35 hover:text-[#652B3A]'
              }`}
            >
              <Pencil className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{ownerEditMode ? 'Done Editing Prices' : 'Edit Indicative Prices'}</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div
          role="tablist"
          aria-label="Price menu categories"
          className="flex flex-wrap items-center gap-2 mb-8"
        >
          {categories.map((cat) => {
            const active = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 min-h-[42px] rounded-full text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#652B3A] ${
                  active
                    ? 'bg-[#652B3A] text-[#FFFDF9] shadow-md'
                    : 'liquid-glass text-[#242020]/80 hover:text-[#652B3A]'
                }`}
              >
                {cat.id}
              </button>
            );
          })}
        </div>

        {/* Liquid Glass Price Card */}
        <div className="liquid-glass-strong rounded-[2rem] p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 border-b border-[#242020]/10">
            <div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#242020]">
                {activeCategory.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#242020]/65 mt-1">
                {activeCategory.subtitle}
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.14em] text-[#652B3A] font-medium">
              Indicative Starting Rates
            </p>
          </div>

          <div className="divide-y divide-[#242020]/10">
            {activeCategory.items.map((item) => (
              <div
                key={item.id}
                className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="max-w-xl">
                  <p className="font-editorial text-2xl text-[#242020]">
                    {item.name}
                  </p>
                  <p className="text-sm text-[#242020]/70 mt-0.5">{item.detail}</p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0">
                  {ownerEditMode ? (
                    <label className="flex items-center gap-1.5 text-sm text-[#242020]">
                      <span className="text-xs text-[#652B3A] font-medium">₹</span>
                      <input
                        type="number"
                        min={50}
                        step={50}
                        aria-label={`Indicative price for ${item.name}`}
                        value={item.indicativePrice}
                        onChange={(e) => {
                          const parsed = Number(e.target.value);
                          if (!Number.isNaN(parsed) && parsed >= 0) {
                            onUpdateItemPrice(item.id, parsed);
                          }
                        }}
                        className="w-24 px-2.5 py-1.5 rounded-lg border border-[#652B3A]/40 bg-[#FFFDF9] text-right font-medium tabular-nums text-[#242020] focus:outline-2 focus:outline-[#652B3A]"
                      />
                    </label>
                  ) : (
                    <div className="text-left sm:text-right">
                      <p className="font-editorial text-2xl sm:text-3xl font-semibold text-[#652B3A] tabular-nums">
                        ₹{item.indicativePrice.toLocaleString('en-IN')}
                        <span className="text-sm font-normal text-[#242020]/60 ml-1">
                          onwards
                        </span>
                      </p>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => onBookItem(item.name)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-full bg-[#FFFDF9] border border-[#652B3A]/25 text-xs font-medium text-[#652B3A] whitespace-nowrap shrink-0 hover:bg-[#652B3A] hover:text-[#FFFDF9] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#652B3A]"
                  >
                    <span>Book Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {ownerEditMode && (
            <p className="mt-4 pt-4 border-t border-[#242020]/10 text-xs text-[#652B3A]">
              Owner Editor active: Price changes save automatically in this browser. Update{' '}
              <code>src/data/salonData.ts</code> to publish permanent defaults for all visitors.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
