import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BlogCTA } from '../../data/blog/types';

interface BlogCtaCardProps {
  cta?: BlogCTA;
}

export function BlogCtaCard({ cta }: BlogCtaCardProps) {
  if (!cta) return null;

  return (
    <div className="my-14 p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-900/50 border border-blue-700/60 text-blue-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Direct Freelance Collaboration</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-4">
          {cta.headline}
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
          {cta.body}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            to={cta.buttonHref}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-white hover:bg-slate-100 transition-colors shadow-lg text-sm"
          >
            <span>{cta.buttonLabel}</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors text-sm"
          >
            <span>View Client Work &amp; Case Studies</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCtaCard;
