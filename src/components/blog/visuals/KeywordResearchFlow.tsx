import React from 'react';

interface VisualProps {
  caption?: string;
  alt?: string;
}

export function KeywordResearchFlow({ caption, alt }: VisualProps) {
  return (
    <figure className="my-10" aria-label={alt || 'Strategic Keyword Intent and Customer Acquisition Workflow'}>
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
        <svg
          viewBox="0 0 960 450"
          className="w-full h-auto text-slate-100"
          role="img"
          aria-labelledby="kw-flow-title kw-flow-desc"
        >
          <title id="kw-flow-title">Customer-Centric Keyword Strategy Architecture</title>
          <desc id="kw-flow-desc">
            Visual workflow showing how raw search phrases are filtered by intent, prioritized by business value, and mapped to targeted landing pages.
          </desc>

          <defs>
            <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.05" />
            </linearGradient>
            <marker id="kwArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#8b5cf6" />
            </marker>
          </defs>

          {/* 4 Pillars in sequence */}
          {/* Pillar 1: Customer Discovery */}
          <g transform="translate(50, 60)">
            <rect width="190" height="300" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <rect x="20" y="24" width="34" height="34" rx="8" fill="#1e293b" stroke="#a78bfa" />
            <text x="37" y="46" fill="#c4b5fd" fontSize="13" textAnchor="middle" fontFamily="monospace" fontWeight="bold">01</text>
            <text x="20" y="80" fill="#f8fafc" fontSize="14" fontWeight="bold" fontFamily="system-ui">Customer Problems</text>
            <text x="20" y="98" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Unfiltered client queries</text>

            <g transform="translate(16, 120)">
              <rect width="158" height="36" rx="6" fill="#1e293b" />
              <text x="12" y="23" fill="#e2e8f0" fontSize="11" fontFamily="monospace">Sales Call FAQs</text>
            </g>
            <g transform="translate(16, 166)">
              <rect width="158" height="36" rx="6" fill="#1e293b" />
              <text x="12" y="23" fill="#e2e8f0" fontSize="11" fontFamily="monospace">Search Console Queries</text>
            </g>
            <g transform="translate(16, 212)">
              <rect width="158" height="36" rx="6" fill="#1e293b" />
              <text x="12" y="23" fill="#e2e8f0" fontSize="11" fontFamily="monospace">Competitor Gaps</text>
            </g>
          </g>

          {/* Arrow 1 -> 2 */}
          <line x1="240" y1="210" x2="275" y2="210" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#kwArrow)" />

          {/* Pillar 2: Intent Classification */}
          <g transform="translate(275, 60)">
            <rect width="190" height="300" rx="14" fill="#0f172a" stroke="#6d28d9" strokeWidth="1.5" />
            <rect width="190" height="300" rx="14" fill="url(#purpleGlow)" />
            <rect x="20" y="24" width="34" height="34" rx="8" fill="#1e293b" stroke="#8b5cf6" />
            <text x="37" y="46" fill="#c4b5fd" fontSize="13" textAnchor="middle" fontFamily="monospace" fontWeight="bold">02</text>
            <text x="20" y="80" fill="#f8fafc" fontSize="14" fontWeight="bold" fontFamily="system-ui">Intent Filtering</text>
            <text x="20" y="98" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Sort by commercial intent</text>

            <g transform="translate(16, 120)">
              <rect width="158" height="36" rx="6" fill="#1e293b" stroke="#475569" />
              <text x="12" y="23" fill="#cbd5e1" fontSize="11" fontFamily="monospace">Informational (Top)</text>
            </g>
            <g transform="translate(16, 166)">
              <rect width="158" height="36" rx="6" fill="#2e1065" stroke="#7c3aed" />
              <text x="12" y="23" fill="#ddd6fe" fontSize="11" fontFamily="monospace">Commercial (Mid)</text>
            </g>
            <g transform="translate(16, 212)">
              <rect width="158" height="36" rx="6" fill="#4c1d95" stroke="#a78bfa" />
              <text x="12" y="23" fill="#f5f3ff" fontSize="11" fontFamily="monospace">Transactional (Ready)</text>
            </g>
          </g>

          {/* Arrow 2 -> 3 */}
          <line x1="465" y1="210" x2="500" y2="210" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#kwArrow)" />

          {/* Pillar 3: Prioritization Matrix */}
          <g transform="translate(500, 60)">
            <rect width="190" height="300" rx="14" fill="#0f172a" stroke="#4338ca" strokeWidth="1.5" />
            <rect x="20" y="24" width="34" height="34" rx="8" fill="#1e293b" stroke="#6366f1" />
            <text x="37" y="46" fill="#a5b4fc" fontSize="13" textAnchor="middle" fontFamily="monospace" fontWeight="bold">03</text>
            <text x="20" y="80" fill="#f8fafc" fontSize="14" fontWeight="bold" fontFamily="system-ui">Value Matrix</text>
            <text x="20" y="98" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Intent vs competition</text>

            <g transform="translate(16, 120)">
              <rect width="158" height="36" rx="6" fill="#1e293b" />
              <text x="12" y="23" fill="#e2e8f0" fontSize="11" fontFamily="monospace">High Intent / Low KD</text>
            </g>
            <g transform="translate(16, 166)">
              <rect width="158" height="36" rx="6" fill="#1e293b" />
              <text x="12" y="23" fill="#e2e8f0" fontSize="11" fontFamily="monospace">Revenue Potential</text>
            </g>
            <g transform="translate(16, 212)">
              <rect width="158" height="36" rx="6" fill="#1e293b" />
              <text x="12" y="23" fill="#e2e8f0" fontSize="11" fontFamily="monospace">Topic Clustering</text>
            </g>
          </g>

          {/* Arrow 3 -> 4 */}
          <line x1="690" y1="210" x2="725" y2="210" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#kwArrow)" />

          {/* Pillar 4: Page Architecture Mapping */}
          <g transform="translate(725, 60)">
            <rect width="185" height="300" rx="14" fill="#0f172a" stroke="#059669" strokeWidth="1.5" />
            <rect x="20" y="24" width="34" height="34" rx="8" fill="#1e293b" stroke="#10b981" />
            <text x="37" y="46" fill="#6ee7b7" fontSize="13" textAnchor="middle" fontFamily="monospace" fontWeight="bold">04</text>
            <text x="20" y="80" fill="#f8fafc" fontSize="14" fontWeight="bold" fontFamily="system-ui">Asset Mapping</text>
            <text x="20" y="98" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Matching destination URL</text>

            <g transform="translate(16, 120)">
              <rect width="153" height="36" rx="6" fill="#1e293b" />
              <text x="10" y="23" fill="#34d399" fontSize="11" fontFamily="monospace">Dedicated Service Page</text>
            </g>
            <g transform="translate(16, 166)">
              <rect width="153" height="36" rx="6" fill="#1e293b" />
              <text x="10" y="23" fill="#34d399" fontSize="11" fontFamily="monospace">In-Depth Case Study</text>
            </g>
            <g transform="translate(16, 212)">
              <rect width="153" height="36" rx="6" fill="#1e293b" />
              <text x="10" y="23" fill="#34d399" fontSize="11" fontFamily="monospace">Direct Project CTA</text>
            </g>
          </g>

          {/* Bottom Callout */}
          <g transform="translate(50, 385)">
            <rect width="860" height="36" rx="8" fill="#020617" stroke="#1e293b" />
            <text x="430" y="23" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="monospace">
              CORE TRUTH: 100 VISITORS WITH HIGH COMMERCIAL INTENT BEAT 10,000 ACCIDENTAL VISITORS EVERY TIME
            </text>
          </g>
        </svg>
      </div>
      {caption && (
        <figcaption className="text-center text-xs text-slate-500 font-mono mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
export default KeywordResearchFlow;
