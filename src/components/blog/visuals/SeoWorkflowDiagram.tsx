import React from 'react';

interface VisualProps {
  caption?: string;
  alt?: string;
}

export function SeoWorkflowDiagram({ caption, alt }: VisualProps) {
  return (
    <figure className="my-10" aria-label={alt || 'Search Engine Discovery and Conversion Pipeline'}>
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
        <svg
          viewBox="0 0 960 460"
          className="w-full h-auto text-slate-100"
          role="img"
          aria-labelledby="seo-flow-title seo-flow-desc"
        >
          <title id="seo-flow-title">Search Engine Discovery and Conversion Pipeline</title>
          <desc id="seo-flow-desc">
            Visual pipeline illustrating how search engine bots crawl, render, index, score, and rank web pages for high-intent search queries.
          </desc>

          <defs>
            <marker id="seoArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#6366f1" />
            </marker>
          </defs>

          {/* Background Grid */}
          <g stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3">
            <line x1="40" y1="230" x2="920" y2="230" />
          </g>

          {/* 5 Stages in Pipeline */}
          {/* Stage 1: Crawl & Discovery */}
          <g transform="translate(40, 70)">
            <rect width="150" height="280" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#1e293b" stroke="#3b82f6" />
            <text x="28" y="33" fill="#60a5fa" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">01</text>
            <text x="16" y="74" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Crawl &amp; Discovery</text>
            <text x="16" y="94" fill="#94a3b8" fontSize="10" fontFamily="system-ui">Bot Accessibility</text>

            <g transform="translate(14, 115)">
              <rect width="122" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">robots.txt Directives</text>
            </g>
            <g transform="translate(14, 160)">
              <rect width="122" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">XML Sitemap Feed</text>
            </g>
            <g transform="translate(14, 205)">
              <rect width="122" height="42" rx="6" fill="#1e293b" stroke="#3b82f6" />
              <text x="10" y="19" fill="#60a5fa" fontSize="10" fontFamily="monospace">Crawl Budget</text>
              <text x="10" y="33" fill="#94a3b8" fontSize="9" fontFamily="system-ui">No orphan URLs</text>
            </g>
          </g>

          {/* Arrow 1 -> 2 */}
          <line x1="190" y1="210" x2="220" y2="210" stroke="#6366f1" strokeWidth="2" markerEnd="url(#seoArrow)" />

          {/* Stage 2: Render & Parse */}
          <g transform="translate(220, 70)">
            <rect width="150" height="280" rx="14" fill="#0f172a" stroke="#4338ca" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#1e293b" stroke="#6366f1" />
            <text x="28" y="33" fill="#818cf8" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">02</text>
            <text x="16" y="74" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Render &amp; Parse</text>
            <text x="16" y="94" fill="#94a3b8" fontSize="10" fontFamily="system-ui">DOM &amp; Schema Extraction</text>

            <g transform="translate(14, 115)">
              <rect width="122" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Server / Edge HTML</text>
            </g>
            <g transform="translate(14, 160)">
              <rect width="122" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">JSON-LD Entities</text>
            </g>
            <g transform="translate(14, 205)">
              <rect width="122" height="42" rx="6" fill="#1e293b" stroke="#6366f1" />
              <text x="10" y="19" fill="#818cf8" fontSize="10" fontFamily="monospace">Canonical URL</text>
              <text x="10" y="33" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Avoid split signals</text>
            </g>
          </g>

          {/* Arrow 2 -> 3 */}
          <line x1="370" y1="210" x2="400" y2="210" stroke="#6366f1" strokeWidth="2" markerEnd="url(#seoArrow)" />

          {/* Stage 3: Indexation & Intent Match */}
          <g transform="translate(400, 70)">
            <rect width="150" height="280" rx="14" fill="#0f172a" stroke="#4f46e5" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#1e293b" stroke="#818cf8" />
            <text x="28" y="33" fill="#a5b4fc" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">03</text>
            <text x="16" y="74" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Indexation</text>
            <text x="16" y="94" fill="#94a3b8" fontSize="10" fontFamily="system-ui">Search Intent Scoring</text>

            <g transform="translate(14, 115)">
              <rect width="122" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Google Index Add</text>
            </g>
            <g transform="translate(14, 160)">
              <rect width="122" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Information Gain</text>
            </g>
            <g transform="translate(14, 205)">
              <rect width="122" height="42" rx="6" fill="#1e293b" stroke="#818cf8" />
              <text x="10" y="19" fill="#c7d2fe" fontSize="10" fontFamily="monospace">Search Intent Match</text>
              <text x="10" y="33" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Direct query answer</text>
            </g>
          </g>

          {/* Arrow 3 -> 4 */}
          <line x1="550" y1="210" x2="580" y2="210" stroke="#6366f1" strokeWidth="2" markerEnd="url(#seoArrow)" />

          {/* Stage 4: Algorithmic Quality & Core Web Vitals */}
          <g transform="translate(580, 70)">
            <rect width="150" height="280" rx="14" fill="#0f172a" stroke="#0891b2" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#1e293b" stroke="#06b6d4" />
            <text x="28" y="33" fill="#38bdf8" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">04</text>
            <text x="16" y="74" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Quality Ranking</text>
            <text x="16" y="94" fill="#94a3b8" fontSize="10" fontFamily="system-ui">Experience &amp; Authority</text>

            <g transform="translate(14, 115)">
              <rect width="122" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Core Web Vitals</text>
            </g>
            <g transform="translate(14, 160)">
              <rect width="122" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">E-E-A-T Signals</text>
            </g>
            <g transform="translate(14, 205)">
              <rect width="122" height="42" rx="6" fill="#1e293b" stroke="#06b6d4" />
              <text x="10" y="19" fill="#38bdf8" fontSize="10" fontFamily="monospace">Top 3 Placement</text>
              <text x="10" y="33" fill="#94a3b8" fontSize="9" fontFamily="system-ui">High CTR capture</text>
            </g>
          </g>

          {/* Arrow 4 -> 5 */}
          <line x1="730" y1="210" x2="760" y2="210" stroke="#6366f1" strokeWidth="2" markerEnd="url(#seoArrow)" />

          {/* Stage 5: Conversion & Commercial Value */}
          <g transform="translate(760, 70)">
            <rect width="160" height="280" rx="14" fill="#0f172a" stroke="#059669" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#1e293b" stroke="#10b981" />
            <text x="28" y="33" fill="#34d399" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">05</text>
            <text x="16" y="74" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Conversion Value</text>
            <text x="16" y="94" fill="#94a3b8" fontSize="10" fontFamily="system-ui">Commercial Revenue</text>

            <g transform="translate(14, 115)">
              <rect width="132" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Zero Ad Cost / Click</text>
            </g>
            <g transform="translate(14, 160)">
              <rect width="132" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">High Conversion CTR</text>
            </g>
            <g transform="translate(14, 205)">
              <rect width="132" height="42" rx="6" fill="#1e293b" stroke="#10b981" />
              <text x="10" y="19" fill="#34d399" fontSize="10" fontFamily="monospace">Compounding Asset</text>
              <text x="10" y="33" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Continuous inbound</text>
            </g>
          </g>

          {/* Bottom Diagnostic Bar */}
          <g transform="translate(40, 390)">
            <rect width="880" height="40" rx="8" fill="#020617" stroke="#1e293b" />
            <text x="440" y="25" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="monospace">
              DIAGNOSTIC PRINCIPLE: IF STAGE 01 OR 02 FAILS, STAGES 03–05 NEVER OCCUR · TECHNICAL FOUNDATIONS PRECEED RANKINGS
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
export default SeoWorkflowDiagram;
