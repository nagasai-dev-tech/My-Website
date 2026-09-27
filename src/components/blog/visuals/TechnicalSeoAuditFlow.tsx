import React from 'react';

interface VisualProps {
  caption?: string;
  alt?: string;
}

export function TechnicalSeoAuditFlow({ caption, alt }: VisualProps) {
  return (
    <figure className="my-10" aria-label={alt || '6-Step Technical SEO Audit and Remediation Framework'}>
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
        <svg
          viewBox="0 0 960 440"
          className="w-full h-auto text-slate-100"
          role="img"
          aria-labelledby="audit-flow-title audit-flow-desc"
        >
          <title id="audit-flow-title">Technical SEO Audit &amp; Diagnostic Pipeline</title>
          <desc id="audit-flow-desc">
            Visual flowchart of the 6-pillar technical SEO diagnostic check to unblock crawler issues and restore search visibility.
          </desc>

          <defs>
            <marker id="auditArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8" />
            </marker>
          </defs>

          {/* 6 Audit Checkpoints */}
          {/* Box 1 */}
          <g transform="translate(60, 50)">
            <rect width="250" height="130" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#1e293b" stroke="#38bdf8" />
            <text x="28" y="33" fill="#38bdf8" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">01</text>
            <text x="54" y="33" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Crawl &amp; Robots.txt</text>
            <text x="20" y="66" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Inspect disallow rules &amp; headers</text>
            <g transform="translate(20, 84)">
              <rect width="210" height="26" rx="4" fill="#1e293b" />
              <text x="10" y="17" fill="#7dd3fc" fontSize="10" fontFamily="monospace">Verify no accidental 'noindex'</text>
            </g>
          </g>

          <line x1="310" y1="115" x2="355" y2="115" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#auditArrow)" />

          {/* Box 2 */}
          <g transform="translate(355, 50)">
            <rect width="250" height="130" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#1e293b" stroke="#38bdf8" />
            <text x="28" y="33" fill="#38bdf8" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">02</text>
            <text x="54" y="33" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Core Web Vitals</text>
            <text x="20" y="66" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Diagnose real-user field telemetry</text>
            <g transform="translate(20, 84)">
              <rect width="210" height="26" rx="4" fill="#1e293b" />
              <text x="10" y="17" fill="#7dd3fc" fontSize="10" fontFamily="monospace">LCP &lt; 2.5s · INP &lt; 200ms</text>
            </g>
          </g>

          <line x1="605" y1="115" x2="650" y2="115" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#auditArrow)" />

          {/* Box 3 */}
          <g transform="translate(650, 50)">
            <rect width="250" height="130" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#1e293b" stroke="#38bdf8" />
            <text x="28" y="33" fill="#38bdf8" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">03</text>
            <text x="54" y="33" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Canonical &amp; Duplication</text>
            <text x="20" y="66" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Eliminate URL parameter drift</text>
            <g transform="translate(20, 84)">
              <rect width="210" height="26" rx="4" fill="#1e293b" />
              <text x="10" y="17" fill="#7dd3fc" fontSize="10" fontFamily="monospace">Self-referencing canonicals</text>
            </g>
          </g>

          {/* Down-turn from Stage 3 to 4 */}
          <path d="M 775 180 L 775 220 L 775 240" fill="none" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#auditArrow)" />

          {/* Box 4 (Bottom Right) */}
          <g transform="translate(650, 240)">
            <rect width="250" height="130" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#1e293b" stroke="#34d399" />
            <text x="28" y="33" fill="#34d399" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">04</text>
            <text x="54" y="33" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Schema.org Structured Data</text>
            <text x="20" y="66" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Rich snippet eligibility &amp; entities</text>
            <g transform="translate(20, 84)">
              <rect width="210" height="26" rx="4" fill="#1e293b" />
              <text x="10" y="17" fill="#6ee7b7" fontSize="10" fontFamily="monospace">JSON-LD Organization &amp; Article</text>
            </g>
          </g>

          <line x1="650" y1="305" x2="605" y2="305" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#auditArrow)" />

          {/* Box 5 (Bottom Center) */}
          <g transform="translate(355, 240)">
            <rect width="250" height="130" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#1e293b" stroke="#34d399" />
            <text x="28" y="33" fill="#34d399" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">05</text>
            <text x="54" y="33" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Internal Link Hierarchy</text>
            <text x="20" y="66" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Distribute PageRank to money pages</text>
            <g transform="translate(20, 84)">
              <rect width="210" height="26" rx="4" fill="#1e293b" />
              <text x="10" y="17" fill="#6ee7b7" fontSize="10" fontFamily="monospace">No dead ends or broken links</text>
            </g>
          </g>

          <line x1="355" y1="305" x2="310" y2="305" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#auditArrow)" />

          {/* Box 6 (Bottom Left) */}
          <g transform="translate(60, 240)">
            <rect width="250" height="130" rx="12" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#1e293b" stroke="#10b981" />
            <text x="28" y="33" fill="#34d399" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">06</text>
            <text x="54" y="33" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Remediation Action Plan</text>
            <text x="20" y="66" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Prioritize by revenue impact</text>
            <g transform="translate(20, 84)">
              <rect width="210" height="26" rx="4" fill="#1e293b" stroke="#10b981" />
              <text x="10" y="17" fill="#34d399" fontSize="10" fontFamily="monospace">Deploy fixes &amp; validate in GSC</text>
            </g>
          </g>

          {/* Bottom Footer */}
          <g transform="translate(60, 395)">
            <rect width="840" height="30" rx="6" fill="#020617" stroke="#1e293b" />
            <text x="420" y="19" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="monospace">
              OUTCOME: RESTORE CRAWLER TRUST · MAXIMIZE IMPRESSION CTR · ELIMINATE SILENT TRAFFIC LEAKS
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
export default TechnicalSeoAuditFlow;
