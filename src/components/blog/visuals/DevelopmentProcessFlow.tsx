import React from 'react';

interface VisualProps {
  caption?: string;
  alt?: string;
}

export function DevelopmentProcessFlow({ caption, alt }: VisualProps) {
  return (
    <figure className="my-10" aria-label={alt || '6-Stage Professional Web Application Engineering Lifecycle'}>
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
        <svg
          viewBox="0 0 960 440"
          className="w-full h-auto text-slate-100"
          role="img"
          aria-labelledby="dev-flow-title dev-flow-desc"
        >
          <title id="dev-flow-title">Web Application Engineering Lifecycle</title>
          <desc id="dev-flow-desc">
            Visual flowchart of the professional software delivery process from initial PRD scoping to CI/CD automated deployment and telemetry.
          </desc>

          <defs>
            <marker id="devArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#3b82f6" />
            </marker>
          </defs>

          {/* Row 1: Stages 1 to 3 */}
          {/* Stage 1 */}
          <g transform="translate(60, 50)">
            <rect width="250" height="130" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <circle cx="30" cy="30" r="14" fill="#1e293b" stroke="#3b82f6" />
            <text x="30" y="35" fill="#60a5fa" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">01</text>
            <text x="56" y="34" fill="#f8fafc" fontSize="14" fontWeight="bold" fontFamily="system-ui">Discovery &amp; PRD</text>
            <text x="24" y="68" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Clarify business goals &amp; user journeys</text>
            <g transform="translate(24, 84)">
              <rect width="202" height="26" rx="4" fill="#1e293b" />
              <text x="10" y="17" fill="#60a5fa" fontSize="10" fontFamily="monospace">Scope, milestones &amp; KPIs</text>
            </g>
          </g>

          {/* Arrow 1 -> 2 */}
          <line x1="310" y1="115" x2="355" y2="115" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#devArrow)" />

          {/* Stage 2 */}
          <g transform="translate(355, 50)">
            <rect width="250" height="130" rx="12" fill="#0f172a" stroke="#4338ca" strokeWidth="1.5" />
            <circle cx="30" cy="30" r="14" fill="#1e293b" stroke="#6366f1" />
            <text x="30" y="35" fill="#818cf8" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">02</text>
            <text x="56" y="34" fill="#f8fafc" fontSize="14" fontWeight="bold" fontFamily="system-ui">Architecture &amp; Schema</text>
            <text x="24" y="68" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Data models, API contracts &amp; caching</text>
            <g transform="translate(24, 84)">
              <rect width="202" height="26" rx="4" fill="#1e293b" />
              <text x="10" y="17" fill="#818cf8" fontSize="10" fontFamily="monospace">PostgreSQL &amp; Auth security</text>
            </g>
          </g>

          {/* Arrow 2 -> 3 */}
          <line x1="605" y1="115" x2="650" y2="115" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#devArrow)" />

          {/* Stage 3 */}
          <g transform="translate(650, 50)">
            <rect width="250" height="130" rx="12" fill="#0f172a" stroke="#0891b2" strokeWidth="1.5" />
            <circle cx="30" cy="30" r="14" fill="#1e293b" stroke="#06b6d4" />
            <text x="30" y="35" fill="#38bdf8" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">03</text>
            <text x="56" y="34" fill="#f8fafc" fontSize="14" fontWeight="bold" fontFamily="system-ui">UX &amp; Design Tokens</text>
            <text x="24" y="68" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Interactive prototyping &amp; tokens</text>
            <g transform="translate(24, 84)">
              <rect width="202" height="26" rx="4" fill="#1e293b" />
              <text x="10" y="17" fill="#38bdf8" fontSize="10" fontFamily="monospace">Accessible responsive design</text>
            </g>
          </g>

          {/* Down-turn from Stage 3 to Stage 4 */}
          <path d="M 775 180 L 775 220 L 775 240" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#devArrow)" />

          {/* Row 2: Stages 4, 5, 6 (Right to Left flow) */}
          {/* Stage 4 */}
          <g transform="translate(650, 240)">
            <rect width="250" height="130" rx="12" fill="#0f172a" stroke="#059669" strokeWidth="1.5" />
            <circle cx="30" cy="30" r="14" fill="#1e293b" stroke="#10b981" />
            <text x="30" y="35" fill="#34d399" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">04</text>
            <text x="56" y="34" fill="#f8fafc" fontSize="14" fontWeight="bold" fontFamily="system-ui">Full-Stack Code</text>
            <text x="24" y="68" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Clean component architecture</text>
            <g transform="translate(24, 84)">
              <rect width="202" height="26" rx="4" fill="#1e293b" />
              <text x="10" y="17" fill="#34d399" fontSize="10" fontFamily="monospace">React, Vite, Node / Python</text>
            </g>
          </g>

          {/* Arrow 4 -> 5 (Going Left) */}
          <line x1="650" y1="305" x2="605" y2="305" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#devArrow)" />

          {/* Stage 5 */}
          <g transform="translate(355, 240)">
            <rect width="250" height="130" rx="12" fill="#0f172a" stroke="#d97706" strokeWidth="1.5" />
            <circle cx="30" cy="30" r="14" fill="#1e293b" stroke="#f59e0b" />
            <text x="30" y="35" fill="#fbbf24" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">05</text>
            <text x="56" y="34" fill="#f8fafc" fontSize="14" fontWeight="bold" fontFamily="system-ui">QA &amp; Optimization</text>
            <text x="24" y="68" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Speed audits &amp; integration tests</text>
            <g transform="translate(24, 84)">
              <rect width="202" height="26" rx="4" fill="#1e293b" />
              <text x="10" y="17" fill="#fbbf24" fontSize="10" fontFamily="monospace">Core Web Vitals &gt; 95+</text>
            </g>
          </g>

          {/* Arrow 5 -> 6 (Going Left) */}
          <line x1="355" y1="305" x2="310" y2="305" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#devArrow)" />

          {/* Stage 6 */}
          <g transform="translate(60, 240)">
            <rect width="250" height="130" rx="12" fill="#0f172a" stroke="#2563eb" strokeWidth="1.5" />
            <circle cx="30" cy="30" r="14" fill="#1e293b" stroke="#3b82f6" />
            <text x="30" y="35" fill="#60a5fa" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">06</text>
            <text x="56" y="34" fill="#f8fafc" fontSize="14" fontWeight="bold" fontFamily="system-ui">Deploy &amp; Telemetry</text>
            <text x="24" y="68" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Zero-downtime CI/CD &amp; logs</text>
            <g transform="translate(24, 84)">
              <rect width="202" height="26" rx="4" fill="#1e293b" />
              <text x="10" y="17" fill="#60a5fa" fontSize="10" fontFamily="monospace">Production live &amp; monitored</text>
            </g>
          </g>

          {/* Bottom Banner */}
          <g transform="translate(60, 395)">
            <rect width="840" height="30" rx="6" fill="#020617" stroke="#1e293b" />
            <text x="420" y="19" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="monospace">
              STANDARD: ZERO GUESSWORK · MODULAR REUSABLE CODEBASE · COMPLETE DOCUMENTATION HANDOVER
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
export default DevelopmentProcessFlow;
