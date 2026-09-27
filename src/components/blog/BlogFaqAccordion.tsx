import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../../data/blog/types';

interface BlogFaqAccordionProps {
  items?: FAQItem[];
}

export function BlogFaqAccordion({ items }: BlogFaqAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  if (!items || items.length === 0) return null;

  const toggleItem = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="my-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs" id="faq-section">
      <div className="flex items-center gap-2.5 mb-6 text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
        <HelpCircle className="w-4 h-4" />
        <span>Frequently Asked Questions</span>
      </div>

      <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight mb-6">
        Practical Answers to Common Decisions
      </h3>

      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 bg-white ${
                isOpen ? 'border-blue-300 shadow-xs' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg leading-snug">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogFaqAccordion;
