import React from 'react';

interface VisualProps {
  caption?: string;
  alt?: string;
}

export function DashboardVsExcel({ caption, alt }: VisualProps) {
  return (
    <figure className="my-10" aria-label={alt || 'Architectural Comparison: Manual Excel Worksheets vs Centralized Automated Dashboard'}>
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
        <svg
          viewBox="0 0 960 480"
          className="w-full h-auto text-slate-100"
          role="img"
          aria-labelledby="dsh-vs-xl-title dsh-vs-xl-desc"
        >
          <title id="dsh-vs-xl-title">Manual Excel Reports vs Centralized BI Dashboards</title>
          <desc id="dsh-vs-xl-desc">
            Visual comparison illustrating the operational breakdown of manual disconnected spreadsheets versus automated single-truth dashboards.
          </desc>

          <defs>
            <linearGradient id="excelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="biGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0e7490" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Left Column: Manual Excel Reports */}
          <g transform="translate(60, 40)">
            <rect width="400" height="380" rx="16" fill="#0f172a" stroke="#b45309" strokeWidth="1.5" />
            <rect width="400" height="380" rx="16" fill="url(#excelGrad)" />

            <rect x="24" y="24" width="352" height="42" rx="8" fill="#1e293b" stroke="#d97706" strokeWidth="1" />
            <text x="40" y="51" fill="#fde68a" fontSize="14" fontWeight="bold" fontFamily="monospace">MANUAL SPREADSHEETS</text>
            <text x="350" y="51" fill="#f59e0b" fontSize="12" textAnchor="end" fontFamily="monospace">Excel / CSV</text>

            <g transform="translate(24, 82)">
              <rect width="352" height="60" rx="8" fill="#1e293b" stroke="#475569" />
              <text x="16" y="24" fill="#fbbf24" fontSize="12" fontWeight="bold" fontFamily="system-ui">Manual Copy-Paste Errors</text>
              <text x="16" y="44" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Human typos, broken VLOOKUPs, formula overwrites</text>
            </g>

            <g transform="translate(24, 154)">
              <rect width="352" height="60" rx="8" fill="#1e293b" stroke="#475569" />
              <text x="16" y="24" fill="#fb923c" fontSize="12" fontWeight="bold" fontFamily="system-ui">Version Drift &amp; Email Attachments</text>
              <text x="16" y="44" fill="#94a3b8" fontSize="11" fontFamily="system-ui">finance_report_v3_final_final.xlsx with competing numbers</text>
            </g>

            <g transform="translate(24, 226)">
              <rect width="352" height="60" rx="8" fill="#1e293b" stroke="#475569" />
              <text x="16" y="24" fill="#f87171" fontSize="12" fontWeight="bold" fontFamily="system-ui">Stale &amp; Reactive Telemetry</text>
              <text x="16" y="44" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Reports take 3 days to prepare; decisions based on old data</text>
            </g>

            <g transform="translate(24, 298)">
              <rect width="352" height="58" rx="8" fill="#1e293b" stroke="#334155" />
              <text x="16" y="24" fill="#fbbf24" fontSize="11" fontFamily="monospace">TIME SPENT ON COMPILATION: 80%</text>
              <text x="16" y="44" fill="#e2e8f0" fontSize="11" fontFamily="system-ui">Analysts spend days cleaning files instead of finding insights</text>
            </g>
          </g>

          {/* Right Column: Centralized Power BI Dashboard */}
          <g transform="translate(500, 40)">
            <rect width="400" height="380" rx="16" fill="#0f172a" stroke="#0891b2" strokeWidth="1.5" />
            <rect width="400" height="380" rx="16" fill="url(#biGrad)" />

            <rect x="24" y="24" width="352" height="42" rx="8" fill="#1e293b" stroke="#06b6d4" strokeWidth="1" />
            <text x="40" y="51" fill="#a5f3fc" fontSize="14" fontWeight="bold" fontFamily="monospace">AUTOMATED DASHBOARD</text>
            <text x="350" y="51" fill="#38bdf8" fontSize="12" textAnchor="end" fontFamily="monospace">Power BI</text>

            <g transform="translate(24, 82)">
              <rect width="352" height="60" rx="8" fill="#1e293b" stroke="#475569" />
              <text x="16" y="24" fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="system-ui">Single Source of Truth</text>
              <text x="16" y="44" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Direct database connector ensures one authoritative metric</text>
            </g>

            <g transform="translate(24, 154)">
              <rect width="352" height="60" rx="8" fill="#1e293b" stroke="#475569" />
              <text x="16" y="24" fill="#34d399" fontSize="12" fontWeight="bold" fontFamily="system-ui">Scheduled Auto-Refresh</text>
              <text x="16" y="44" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Dashboards update automatically overnight or near real-time</text>
            </g>

            <g transform="translate(24, 226)">
              <rect width="352" height="60" rx="8" fill="#1e293b" stroke="#475569" />
              <text x="16" y="24" fill="#818cf8" fontSize="12" fontWeight="bold" fontFamily="system-ui">Interactive Cross-Filtering</text>
              <text x="16" y="44" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Click any customer cohort to see instant drilldown insights</text>
            </g>

            <g transform="translate(24, 298)">
              <rect width="352" height="58" rx="8" fill="#1e293b" stroke="#334155" />
              <text x="16" y="24" fill="#34d399" fontSize="11" fontFamily="monospace">TIME SPENT ON STRATEGY: 95%</text>
              <text x="16" y="44" fill="#e2e8f0" fontSize="11" fontFamily="system-ui">Zero manual data preparation; leaders focus directly on action</text>
            </g>
          </g>

          {/* Central VS Pill */}
          <circle cx="480" cy="230" r="28" fill="#020617" stroke="#06b6d4" strokeWidth="2" />
          <text x="480" y="236" fill="#38bdf8" fontSize="14" textAnchor="middle" fontWeight="bold" fontFamily="monospace">VS</text>

          {/* Bottom Bar */}
          <g transform="translate(60, 435)">
            <text x="420" y="22" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="system-ui">
              Verdict: Keep Excel for quick scratchpad calculations; deploy Power BI for company-wide reporting and operational decisions.
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
export default DashboardVsExcel;
