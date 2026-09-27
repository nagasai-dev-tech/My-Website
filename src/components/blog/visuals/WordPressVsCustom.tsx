import React from 'react';

interface VisualProps {
  caption?: string;
  alt?: string;
}

export function WordPressVsCustom({ caption, alt }: VisualProps) {
  return (
    <figure className="my-10" aria-label={alt || 'Architectural Comparison: WordPress Monolith vs Custom Full-Stack Application'}>
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
        <svg
          viewBox="0 0 960 480"
          className="w-full h-auto text-slate-100"
          role="img"
          aria-labelledby="wp-vs-custom-title wp-vs-custom-desc"
        >
          <title id="wp-vs-custom-title">WordPress vs Custom Development Architectural Comparison</title>
          <desc id="wp-vs-custom-desc">
            Visual comparison showing plugin-heavy WordPress monolith with shared database versus decoupled modern web application with edge delivery and dedicated data layer.
          </desc>

          <defs>
            <linearGradient id="wpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#991b1b" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="customGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Left Column: Monolithic WordPress */}
          <g transform="translate(60, 40)">
            <rect width="400" height="380" rx="16" fill="#0f172a" stroke="#7f1d1d" strokeWidth="1.5" />
            <rect width="400" height="380" rx="16" fill="url(#wpGrad)" />

            <rect x="24" y="24" width="352" height="42" rx="8" fill="#1e293b" stroke="#991b1b" strokeWidth="1" />
            <text x="40" y="51" fill="#fca5a5" fontSize="14" fontWeight="bold" fontFamily="monospace">TRADITIONAL CMS MONOLITH</text>
            <text x="350" y="51" fill="#ef4444" fontSize="12" textAnchor="end" fontFamily="monospace">WordPress</text>

            {/* Stack Blocks */}
            <g transform="translate(24, 82)">
              {/* Plugin Layer */}
              <rect width="352" height="60" rx="8" fill="#1e293b" stroke="#475569" />
              <text x="16" y="24" fill="#f87171" fontSize="12" fontWeight="bold" fontFamily="system-ui">Plugin Bloat (25–40 Third-Party Plugins)</text>
              <text x="16" y="44" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Security vulnerabilities, update conflicts, unoptimized JS</text>
            </g>

            <g transform="translate(24, 154)">
              {/* Theme & Page Builder Layer */}
              <rect width="352" height="60" rx="8" fill="#1e293b" stroke="#475569" />
              <text x="16" y="24" fill="#fb923c" fontSize="12" fontWeight="bold" fontFamily="system-ui">Page Builder DOM Overhead</text>
              <text x="16" y="44" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Excessive DIV nesting, heavy CSS bundles, slow LCP/INP</text>
            </g>

            <g transform="translate(24, 226)">
              {/* Monolithic Database */}
              <rect width="352" height="60" rx="8" fill="#1e293b" stroke="#475569" />
              <text x="16" y="24" fill="#fcd34d" fontSize="12" fontWeight="bold" fontFamily="system-ui">Shared wp_options Database</text>
              <text x="16" y="44" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Unindexed queries, post-meta bloat, lockups during traffic peaks</text>
            </g>

            <g transform="translate(24, 298)">
              {/* Tradeoff Footer */}
              <rect width="352" height="58" rx="8" fill="#1e293b" stroke="#334155" />
              <text x="16" y="24" fill="#94a3b8" fontSize="11" fontFamily="monospace">MAINTENANCE BURDEN: HIGH</text>
              <text x="16" y="44" fill="#e2e8f0" fontSize="11" fontFamily="system-ui">Requires weekly patch cycles and constant security monitoring</text>
            </g>
          </g>

          {/* Right Column: Custom Decoupled Architecture */}
          <g transform="translate(500, 40)">
            <rect width="400" height="380" rx="16" fill="#0f172a" stroke="#065f46" strokeWidth="1.5" />
            <rect width="400" height="380" rx="16" fill="url(#customGrad)" />

            <rect x="24" y="24" width="352" height="42" rx="8" fill="#1e293b" stroke="#059669" strokeWidth="1" />
            <text x="40" y="51" fill="#6ee7b7" fontSize="14" fontWeight="bold" fontFamily="monospace">ENGINEERED DIGITAL SYSTEM</text>
            <text x="350" y="51" fill="#10b981" fontSize="12" textAnchor="end" fontFamily="monospace">Custom Stack</text>

            {/* Stack Blocks */}
            <g transform="translate(24, 82)">
              {/* Edge Delivery */}
              <rect width="352" height="60" rx="8" fill="#1e293b" stroke="#475569" />
              <text x="16" y="24" fill="#34d399" fontSize="12" fontWeight="bold" fontFamily="system-ui">Static &amp; Edge UI (React / Next)</text>
              <text x="16" y="44" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Zero third-party bloat, sub-100ms response, perfect Core Web Vitals</text>
            </g>

            <g transform="translate(24, 154)">
              {/* Type-Safe API */}
              <rect width="352" height="60" rx="8" fill="#1e293b" stroke="#475569" />
              <text x="16" y="24" fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="system-ui">Strict Typed API Architecture</text>
              <text x="16" y="44" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Zero unnecessary payload, tailored validation, automated error tracking</text>
            </g>

            <g transform="translate(24, 226)">
              {/* Relational DB & Cache */}
              <rect width="352" height="60" rx="8" fill="#1e293b" stroke="#475569" />
              <text x="16" y="24" fill="#818cf8" fontSize="12" fontWeight="bold" fontFamily="system-ui">PostgreSQL &amp; Redis Cache Tier</text>
              <text x="16" y="44" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Indexed relational queries, ACID guarantees, instant scale capacity</text>
            </g>

            <g transform="translate(24, 298)">
              {/* Tradeoff Footer */}
              <rect width="352" height="58" rx="8" fill="#1e293b" stroke="#334155" />
              <text x="16" y="24" fill="#34d399" fontSize="11" fontFamily="monospace">MAINTENANCE BURDEN: MINIMAL</text>
              <text x="16" y="44" fill="#e2e8f0" fontSize="11" fontFamily="system-ui">Zero plugin breakages; system does exactly what your company needs</text>
            </g>
          </g>

          {/* Bottom VS badge */}
          <circle cx="480" cy="230" r="28" fill="#020617" stroke="#3b82f6" strokeWidth="2" />
          <text x="480" y="236" fill="#60a5fa" fontSize="14" textAnchor="middle" fontWeight="bold" fontFamily="monospace">VS</text>

          {/* Summary bottom bar */}
          <g transform="translate(60, 435)">
            <text x="420" y="22" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="system-ui">
              Verdict: Choose WordPress for low-traffic blogs; choose Custom Engineering when conversion, speed, and business logic matter.
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
export default WordPressVsCustom;
