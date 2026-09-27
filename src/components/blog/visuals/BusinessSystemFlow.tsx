import React from 'react';

interface VisualProps {
  caption?: string;
  alt?: string;
}

export function BusinessSystemFlow({ caption, alt }: VisualProps) {
  return (
    <figure className="my-10" aria-label={alt || 'Complete Automated Business System Architecture'}>
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
        <svg
          viewBox="0 0 960 460"
          className="w-full h-auto text-slate-100"
          role="img"
          aria-labelledby="sys-flow-title sys-flow-desc"
        >
          <title id="sys-flow-title">Website as a Complete Business Operating System</title>
          <desc id="sys-flow-desc">
            Visual flow tracing how visitors convert through structured intake, automated lead scoring, CRM integration, invoice processing, and business intelligence.
          </desc>

          <defs>
            <marker id="flowArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#3b82f6" />
            </marker>
          </defs>

          {/* Background Grid */}
          <g stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3">
            <line x1="40" y1="230" x2="920" y2="230" />
          </g>

          {/* 5 Stages in Horizontal Sequence */}
          {/* Stage 1 */}
          <g transform="translate(40, 80)">
            <rect width="150" height="270" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <rect x="16" y="20" width="32" height="32" rx="6" fill="#1e293b" stroke="#60a5fa" />
            <text x="32" y="42" fill="#60a5fa" fontSize="14" textAnchor="middle" fontFamily="monospace">01</text>
            <text x="16" y="78" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Inbound Traffic</text>
            <text x="16" y="98" fill="#94a3b8" fontSize="10" fontFamily="system-ui">Search, Ads &amp; Referrals</text>

            <g transform="translate(14, 120)">
              <rect width="122" height="32" rx="6" fill="#1e293b" />
              <text x="10" y="20" fill="#e2e8f0" fontSize="10" fontFamily="monospace">High-Intent Visit</text>
            </g>
            <g transform="translate(14, 160)">
              <rect width="122" height="32" rx="6" fill="#1e293b" />
              <text x="10" y="20" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Sub-Second LCP</text>
            </g>
            <g transform="translate(14, 200)">
              <rect width="122" height="42" rx="6" fill="#1e293b" stroke="#3b82f6" />
              <text x="10" y="18" fill="#60a5fa" fontSize="10" fontFamily="monospace">Conversion Hook</text>
              <text x="10" y="32" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Value proposition</text>
            </g>
          </g>

          {/* Arrow 1 -> 2 */}
          <line x1="190" y1="215" x2="220" y2="215" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#flowArrow)" />

          {/* Stage 2 */}
          <g transform="translate(220, 80)">
            <rect width="150" height="270" rx="12" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="16" y="20" width="32" height="32" rx="6" fill="#1e293b" stroke="#3b82f6" />
            <text x="32" y="42" fill="#60a5fa" fontSize="14" textAnchor="middle" fontFamily="monospace">02</text>
            <text x="16" y="78" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Intelligent Intake</text>
            <text x="16" y="98" fill="#94a3b8" fontSize="10" fontFamily="system-ui">Dynamic Form Engine</text>

            <g transform="translate(14, 120)">
              <rect width="122" height="32" rx="6" fill="#1e293b" />
              <text x="10" y="20" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Scope &amp; Budget Filter</text>
            </g>
            <g transform="translate(14, 160)">
              <rect width="122" height="32" rx="6" fill="#1e293b" />
              <text x="10" y="20" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Validation / Spam Trap</text>
            </g>
            <g transform="translate(14, 200)">
              <rect width="122" height="42" rx="6" fill="#1e293b" stroke="#6366f1" />
              <text x="10" y="18" fill="#818cf8" fontSize="10" fontFamily="monospace">Zero Lost Leads</text>
              <text x="10" y="32" fill="#94a3b8" fontSize="9" fontFamily="system-ui">No messy inboxes</text>
            </g>
          </g>

          {/* Arrow 2 -> 3 */}
          <line x1="370" y1="215" x2="400" y2="215" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#flowArrow)" />

          {/* Stage 3 */}
          <g transform="translate(400, 80)">
            <rect width="150" height="270" rx="12" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />
            <rect x="16" y="20" width="32" height="32" rx="6" fill="#1e293b" stroke="#818cf8" />
            <text x="32" y="42" fill="#818cf8" fontSize="14" textAnchor="middle" fontFamily="monospace">03</text>
            <text x="16" y="78" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Async Routing</text>
            <text x="16" y="98" fill="#94a3b8" fontSize="10" fontFamily="system-ui">Automated Pipeline</text>

            <g transform="translate(14, 120)">
              <rect width="122" height="32" rx="6" fill="#1e293b" />
              <text x="10" y="20" fill="#e2e8f0" fontSize="10" fontFamily="monospace">HubSpot / CRM Sync</text>
            </g>
            <g transform="translate(14, 160)">
              <rect width="122" height="32" rx="6" fill="#1e293b" />
              <text x="10" y="20" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Slack / Email Alert</text>
            </g>
            <g transform="translate(14, 200)">
              <rect width="122" height="42" rx="6" fill="#1e293b" stroke="#818cf8" />
              <text x="10" y="18" fill="#a5b4fc" fontSize="10" fontFamily="monospace">&lt; 60s Notification</text>
              <text x="10" y="32" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Instant response speed</text>
            </g>
          </g>

          {/* Arrow 3 -> 4 */}
          <line x1="550" y1="215" x2="580" y2="215" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#flowArrow)" />

          {/* Stage 4 */}
          <g transform="translate(580, 80)">
            <rect width="150" height="270" rx="12" fill="#0f172a" stroke="#0891b2" strokeWidth="1.5" />
            <rect x="16" y="20" width="32" height="32" rx="6" fill="#1e293b" stroke="#38bdf8" />
            <text x="32" y="42" fill="#38bdf8" fontSize="14" textAnchor="middle" fontFamily="monospace">04</text>
            <text x="16" y="78" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Transaction Engine</text>
            <text x="16" y="98" fill="#94a3b8" fontSize="10" fontFamily="system-ui">Contract &amp; Stripe</text>

            <g transform="translate(14, 120)">
              <rect width="122" height="32" rx="6" fill="#1e293b" />
              <text x="10" y="20" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Auto-Invoice Dispatch</text>
            </g>
            <g transform="translate(14, 160)">
              <rect width="122" height="32" rx="6" fill="#1e293b" />
              <text x="10" y="20" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Escrow / Webhook</text>
            </g>
            <g transform="translate(14, 200)">
              <rect width="122" height="42" rx="6" fill="#1e293b" stroke="#0891b2" />
              <text x="10" y="18" fill="#38bdf8" fontSize="10" fontFamily="monospace">Instant Settlement</text>
              <text x="10" y="32" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Automated receipting</text>
            </g>
          </g>

          {/* Arrow 4 -> 5 */}
          <line x1="730" y1="215" x2="760" y2="215" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#flowArrow)" />

          {/* Stage 5 */}
          <g transform="translate(760, 80)">
            <rect width="160" height="270" rx="12" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <rect x="16" y="20" width="32" height="32" rx="6" fill="#1e293b" stroke="#34d399" />
            <text x="32" y="42" fill="#34d399" fontSize="14" textAnchor="middle" fontFamily="monospace">05</text>
            <text x="16" y="78" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Business Telemetry</text>
            <text x="16" y="98" fill="#94a3b8" fontSize="10" fontFamily="system-ui">Executive Dashboard</text>

            <g transform="translate(14, 120)">
              <rect width="132" height="32" rx="6" fill="#1e293b" />
              <text x="10" y="20" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Power BI / Warehouse</text>
            </g>
            <g transform="translate(14, 160)">
              <rect width="132" height="32" rx="6" fill="#1e293b" />
              <text x="10" y="20" fill="#e2e8f0" fontSize="10" fontFamily="monospace">CAC &amp; LTV Tracking</text>
            </g>
            <g transform="translate(14, 200)">
              <rect width="132" height="42" rx="6" fill="#1e293b" stroke="#10b981" />
              <text x="10" y="18" fill="#34d399" fontSize="10" fontFamily="monospace">Single Truth Source</text>
              <text x="10" y="32" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Data-driven steering</text>
            </g>
          </g>

          {/* Bottom Banner */}
          <g transform="translate(40, 390)">
            <rect width="880" height="40" rx="8" fill="#020617" stroke="#1e293b" />
            <text x="440" y="25" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="monospace">
              OPERATIONAL OUTCOME: 100% LEAD CAPTURE INTEGRITY · 0 MINUTES MANUAL DATA ENTRY · REAL-TIME REVENUE VISIBILITY
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
export default BusinessSystemFlow;
