import React, { useState, useEffect } from 'react';
import { List, ChevronDown, ChevronUp } from 'lucide-react';
import { ArticleSection, ContentBlock } from '../../data/blog/types';

export interface TocHeadingItem {
  id: string;
  heading: string;
  level?: 2 | 3;
}

interface TableOfContentsProps {
  sections?: ArticleSection[];
  blocks?: ContentBlock[];
}

export function TableOfContents({ sections, blocks }: TableOfContentsProps) {
  // Extract headings from blocks if provided, otherwise from legacy sections
  const items: TocHeadingItem[] = React.useMemo(() => {
    if (blocks && blocks.length > 0) {
      return blocks
        .filter((b) => (b.type === 'h2' || b.type === 'h3') && b.id && b.text)
        .map((b) => ({
          id: b.id!,
          heading: b.text!,
          level: (b.type === 'h2' ? 2 : 3) as 2 | 3,
        }));
    }
    if (sections && sections.length > 0) {
      return sections.map((s) => ({
        id: s.id,
        heading: s.heading,
        level: 2 as const,
      }));
    }
    return [];
  }, [sections, blocks]);

  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');
  const [mobileExpanded, setMobileExpanded] = useState<boolean>(false);

  useEffect(() => {
    if (items.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = items.length - 1; i >= 0; i--) {
        const element = document.getElementById(items[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
      setMobileExpanded(false);
    }
  };

  if (items.length === 0) return null;

  return (
    <nav className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 shadow-2xs" aria-label="Table of Contents">
      {/* Header / Mobile Toggle */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
          <List className="w-3.5 h-3.5 text-blue-600" />
          <span>Table of Contents</span>
        </div>
        <button
          type="button"
          onClick={() => setMobileExpanded(!mobileExpanded)}
          className="lg:hidden text-xs text-blue-600 font-semibold flex items-center gap-1"
          aria-expanded={mobileExpanded}
        >
          <span>{mobileExpanded ? 'Hide' : 'Show'}</span>
          {mobileExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Sections List */}
      <div className={`mt-3 space-y-1.5 ${mobileExpanded ? 'block' : 'hidden lg:block'}`}>
        {items.map((item, idx) => {
          const isActive = activeId === item.id;
          const isH3 = item.level === 3;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left rounded-lg text-xs transition-all duration-150 flex items-center justify-between group ${
                isH3 ? 'pl-6 pr-3 py-1.5' : 'px-3 py-2'
              } ${
                isActive
                  ? 'bg-blue-50 text-blue-700 font-bold border-l-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-white'
              }`}
            >
              <span className="truncate pr-2">{item.heading}</span>
              {!isH3 && (
                <span className={`text-[10px] font-mono shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                  0{idx + 1}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default TableOfContents;
