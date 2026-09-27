import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Search, BarChart3, CheckCircle2 } from 'lucide-react';

export function HeroContent() {
  return (
    <div className="flex flex-col items-start text-left">
      
      {/* Personal Identity & Professional Descriptor */}
      <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-800 text-xs font-mono mb-6 shadow-xs">
        <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
        <span className="font-bold text-slate-950 uppercase tracking-wider">NAGASAI</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-600 font-medium">Full-Stack Developer · SEO · Data Analytics</span>
      </div>

      {/* Customer-First Positioning Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12] mb-6">
        <span>Build It.</span>{' '}
        <span className="text-blue-600">Grow It.</span>{' '}
        <span className="relative inline-block whitespace-nowrap">
          <span className="relative z-10 text-slate-950">Understand It.</span>
          {/* Subtle architectural SVG underline beneath 'Understand It.' */}
          <svg
            className="absolute left-0 -bottom-1.5 w-full h-3 text-blue-500/40 -z-10 overflow-visible"
            viewBox="0 0 100 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 8 Q 50 1, 100 8"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h1>

      {/* Customer Value Proposition */}
      <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
        I build digital solutions that help businesses create better web experiences, improve their online visibility, and turn data into useful decisions.
      </p>

      {/* Primary & Secondary Action CTAs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-slate-950 hover:bg-slate-900 active:scale-[0.98] shadow-md hover:shadow-lg transition-all duration-200 group"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
        <Link
          to="/work"
          className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-xs active:scale-[0.98] transition-all duration-200"
        >
          <span>Explore My Work</span>
        </Link>
      </div>

      {/* "Available for projects" subtle indicator */}
      <div className="flex items-center gap-2 text-xs font-mono text-slate-600 mb-8 pl-1">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-medium text-slate-700">Available for freelance projects & custom digital builds</span>
      </div>

      {/* Three Pillars: BUILD -> GROW -> UNDERSTAND (Customer Perspective) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-slate-200/80 w-full max-w-xl">
        {/* BUILD */}
        <div className="bg-slate-50/90 border border-slate-200/70 rounded-xl p-3.5 hover:border-blue-300 transition-colors">
          <div className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest mb-1 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-blue-600" />
            BUILD
          </div>
          <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">Full-Stack Dev</div>
          <p className="text-[11px] text-slate-500 mt-1 leading-normal">
            Business websites, web applications & clean APIs.
          </p>
        </div>

        {/* GROW */}
        <div className="bg-slate-50/90 border border-slate-200/70 rounded-xl p-3.5 hover:border-indigo-300 transition-colors">
          <div className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest mb-1 flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5 text-indigo-600" />
            GROW
          </div>
          <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">SEO & Search</div>
          <p className="text-[11px] text-slate-500 mt-1 leading-normal">
            Technical audits, rank indexing & organic traffic.
          </p>
        </div>

        {/* UNDERSTAND */}
        <div className="bg-slate-50/90 border border-slate-200/70 rounded-xl p-3.5 hover:border-cyan-400 transition-colors">
          <div className="text-[10px] font-mono font-bold text-cyan-700 uppercase tracking-widest mb-1 flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5 text-cyan-700" />
            UNDERSTAND
          </div>
          <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">Data Analytics</div>
          <p className="text-[11px] text-slate-500 mt-1 leading-normal">
            Power BI dashboards, SQL pipelines & business clarity.
          </p>
        </div>
      </div>

    </div>
  );
}

export default HeroContent;
