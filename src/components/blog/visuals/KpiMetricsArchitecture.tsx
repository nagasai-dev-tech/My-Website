import React from 'react';

interface VisualProps {
  caption?: string;
  alt?: string;
}

export function KpiMetricsArchitecture({ caption, alt }: VisualProps) {
  return (
    <figure className="my-10" aria-label={alt || '3-Tier Business KPI Telemetry Architecture'}>
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
        <svg
          viewBox="0 0 960 450"
          className="w-full h-auto text-slate-100"
          role="img"
          aria-labelledby="kpi-arch-title kpi-arch-desc"
        >
          <title id="kpi-arch-title">3-Tier Business KPI Telemetry Architecture</title>
          <desc id="kpi-arch-desc">
            Visual hierarchy diagram organizing metrics from executive north-star outcomes to operational drivers and tactical leading indicators.
          </desc>

          {/* Tier 1: North Star (Top) */}
          <g transform="translate(180, 40)">
            <rect width="600" height="90" rx="14" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <rect x="20" y="16" width="30" height="30" rx="6" fill="#1e293b" stroke="#10b981" />
            <text x="35" y="36" fill="#34d399" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">L1</text>
            <text x="62" y="36" fill="#f8fafc" fontSize="14" fontWeight="bold" fontFamily="system-ui">
              TIER 1: EXECUTIVE NORTH-STAR OUTCOMES
            </text>
            <text x="62" y="54" fill="#94a3b8" fontSize="11" fontFamily="system-ui">
              Lagging financial health metrics monitored by founders and board
            </text>

            <g transform="translate(20, 58)">
              <text x="0" y="18" fill="#6ee7b7" fontSize="11" fontFamily="monospace">
                Net Operating Margin · Customer Lifetime Value (LTV) · Customer Acquisition Cost (CAC)
              </text>
            </g>
          </g>

          {/* Connecting Lines */}
          <path d="M 480 130 L 480 160" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />

          {/* Tier 2: Operational Drivers (Middle) */}
          <g transform="translate(100, 160)">
            <rect width="760" height="100" rx="14" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="20" y="18" width="30" height="30" rx="6" fill="#1e293b" stroke="#3b82f6" />
            <text x="35" y="38" fill="#60a5fa" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">L2</text>
            <text x="62" y="38" fill="#f8fafc" fontSize="14" fontWeight="bold" fontFamily="system-ui">
              TIER 2: OPERATIONAL DRIVERS &amp; REVENUE ENGINE
            </text>
            <text x="62" y="56" fill="#94a3b8" fontSize="11" fontFamily="system-ui">
              Departmental efficiency metrics tracked weekly by department leads
            </text>

            <g transform="translate(20, 68)">
              <text x="0" y="16" fill="#93c5fd" fontSize="11" fontFamily="monospace">
                Sales Pipeline Velocity · Monthly Retention Rate · Gross Margin · Average Deal Size
              </text>
            </g>
          </g>

          {/* Connecting Lines */}
          <path d="M 480 260 L 480 290" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />

          {/* Tier 3: Tactical Leading Indicators (Bottom) */}
          <g transform="translate(40, 290)">
            <rect width="880" height="110" rx="14" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />
            <rect x="20" y="18" width="30" height="30" rx="6" fill="#1e293b" stroke="#6366f1" />
            <text x="35" y="38" fill="#818cf8" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">L3</text>
            <text x="62" y="38" fill="#f8fafc" fontSize="14" fontWeight="bold" fontFamily="system-ui">
              TIER 3: TACTICAL LEADING INDICATORS &amp; DAILY TELEMETRY
            </text>
            <text x="62" y="56" fill="#94a3b8" fontSize="11" fontFamily="system-ui">
              Predictive inputs monitored daily to fix problems before they hit financial results
            </text>

            <g transform="translate(20, 68)">
              <text x="0" y="18" fill="#c7d2fe" fontSize="11" fontFamily="monospace">
                Website Conversion Rate (%) · Qualified Inquiries Dispatched · Mobile INP (&lt;200ms) · Lead Response Time (&lt;15m)
              </text>
            </g>
          </g>

          {/* Bottom Summary Bar */}
          <g transform="translate(40, 415)">
            <text x="480" y="16" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="monospace">
              LEADERSHIP PRINCIPLE: MANAGE TIER 3 LEADING SIGNALS TO GUARANTEE TIER 1 FINANCIAL OUTCOMES
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
export default KpiMetricsArchitecture;
