import React from 'react';
import { ArticleVisual } from '../../data/blog/types';
import { ArrowRight, CheckCircle2, AlertCircle, Info, Sparkles, Layers } from 'lucide-react';

interface ArticleVisualRendererProps {
  visual?: ArticleVisual;
}

export function ArticleVisualRenderer({ visual }: ArticleVisualRendererProps) {
  if (!visual) return null;

  // Process / Step Flow
  if (visual.type === 'flow' && visual.steps) {
    return (
      <div className="my-8 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs">
        {visual.title && (
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            {visual.title}
          </h4>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {visual.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-400 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 mb-2 block">
                  {step.step}
                </span>
                <div className="font-bold text-slate-900 text-sm mb-1.5 leading-snug">
                  {step.label}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        {visual.caption && (
          <p className="text-[11px] text-slate-500 font-mono mt-4 pt-3 border-t border-slate-200 text-center">
            {visual.caption}
          </p>
        )}
      </div>
    );
  }

  // Comparison Table
  if (visual.type === 'table' && visual.table) {
    return (
      <div className="my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-xs bg-white">
        {visual.title && (
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 font-bold text-sm text-slate-900 uppercase tracking-wider">
            {visual.title}
          </div>
        )}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 text-slate-900 font-semibold text-xs border-b border-slate-200">
              <tr>
                {visual.table.headers.map((h, i) => (
                  <th key={i} className="px-5 py-3.5 whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {visual.table.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-slate-50/70 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className={`px-5 py-3.5 ${cIdx === 0 ? 'font-semibold text-slate-900' : ''}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Checklist / Metric Cards
  if (visual.type === 'checklist' && visual.metrics) {
    return (
      <div className="my-8 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl">
        {visual.title && (
          <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-6">
            // {visual.title}
          </h4>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visual.metrics.map((m, idx) => (
            <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="text-[11px] font-mono text-slate-400 uppercase truncate mb-1">
                {m.label}
              </div>
              <div className="text-lg font-bold text-white mb-1.5 text-blue-400">
                {m.value}
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Architecture Nodes
  if (visual.type === 'architecture' && visual.nodes) {
    return (
      <div className="my-8 p-6 sm:p-8 rounded-2xl bg-blue-50/40 border border-blue-200/80 shadow-xs">
        {visual.title && (
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            {visual.title}
          </h4>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visual.nodes.map((node, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-xs font-mono text-slate-400 mb-1">NODE 0{idx + 1}</div>
              <div className="text-sm font-bold text-slate-900 mb-1.5">{node.label}</div>
              <p className="text-xs text-slate-600 leading-relaxed">{node.sub}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
