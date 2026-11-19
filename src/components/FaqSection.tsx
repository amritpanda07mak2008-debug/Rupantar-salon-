import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/salonData';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F7F1E8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs uppercase tracking-[0.18em] text-[#652B3A] font-medium mb-3">
            Good to Know
          </p>
          <h2
            className="font-editorial text-4xl sm:text-5xl text-[#242020] leading-[1.08]"
            style={{ textWrap: 'balance' }}
          >
            Frequently Asked <em className="italic font-normal text-[#652B3A]">Questions</em>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#FFFDF9] border border-[#C6A36A]/25 overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#652B3A]"
                >
                  <span className="font-editorial text-xl sm:text-2xl text-[#242020]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#652B3A] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base leading-relaxed text-[#242020]/75 border-t border-[#242020]/5">
                    <p className="pt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
