import React from 'react';
import { Code2, Search, BarChart3, TrendingUp, CheckCircle, Terminal } from 'lucide-react';

export interface FloatingCardProps {
  type: 'dev' | 'seo' | 'data';
  className?: string;
}

export function HeroFloatingCard({ type, className = '' }: FloatingCardProps) {
  if (type === 'dev') {
    return (
      <div
        className={`bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-elevated transition-all hover:scale-[1.02] ${className}`}
      >
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600">
            <Code2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 leading-none">
              Engineering // 01
            </div>
            <div className="text-xs font-bold text-slate-900 mt-0.5">
              Full-Stack Architecture
            </div>
          </div>
        </div>

        {/* Code Snippet Pill */}
        <div className="bg-slate-900 text-slate-200 font-mono text-[11px] px-2.5 py-1.5 rounded-lg flex items-center justify-between gap-3 border border-slate-800">
          <span className="text-blue-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            &lt;App.Deploy /&gt;
          </span>
          <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
            200 OK
          </span>
        </div>
      </div>
    );
  }

  if (type === 'seo') {
    return (
      <div
        className={`bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-elevated transition-all hover:scale-[1.02] ${className}`}
      >
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-200/60 flex items-center justify-center text-indigo-600">
              <Search className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 leading-none">
                Organic Search // 02
              </div>
              <div className="text-xs font-bold text-slate-900 mt-0.5">
                Technical SEO Engine
              </div>
            </div>
          </div>
          <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            #1 Rank
          </span>
        </div>

        {/* Micro Keyword Graph */}
        <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1 border-t border-slate-100 font-mono">
          <span className="text-slate-500 truncate max-w-[130px]">SERP Indexation</span>
          <span className="font-bold text-slate-800">100% Crawled</span>
        </div>
      </div>
    );
  }

  // Data Analytics Card
  return (
    <div
      className={`bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-elevated transition-all hover:scale-[1.02] ${className}`}
    >
      <div className="flex items-center justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-200/60 flex items-center justify-center text-cyan-700">
            <BarChart3 className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 leading-none">
              Intelligence // 03
            </div>
            <div className="text-xs font-bold text-slate-900 mt-0.5">
              Power BI & Analytics
            </div>
          </div>
        </div>
        <span className="text-[10px] font-mono font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
          Live Telemetry
        </span>
      </div>

      {/* Mini SVG Sparkline / Bar Visualization */}
      <div className="flex items-end gap-1.5 h-7 pt-1 px-1 bg-slate-50/80 rounded-lg border border-slate-100">
        <div className="w-full bg-blue-200 rounded-sm h-[40%]" />
        <div className="w-full bg-blue-300 rounded-sm h-[65%]" />
        <div className="w-full bg-blue-400 rounded-sm h-[50%]" />
        <div className="w-full bg-blue-500 rounded-sm h-[85%]" />
        <div className="w-full bg-blue-600 rounded-sm h-[100%]" />
        <div className="w-full bg-indigo-600 rounded-sm h-[90%]" />
      </div>
    </div>
  );
}
