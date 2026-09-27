import React from 'react';

interface VisualProps {
  caption?: string;
  alt?: string;
}

export function DataAnalyticsPipeline({ caption, alt }: VisualProps) {
  return (
    <figure className="my-10" aria-label={alt || 'End-to-End Modern Business Intelligence & Analytics Pipeline'}>
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
        <svg
          viewBox="0 0 960 460"
          className="w-full h-auto text-slate-100"
          role="img"
          aria-labelledby="data-pipeline-title data-pipeline-desc"
        >
          <title id="data-pipeline-title">Modern End-to-End Business Intelligence Pipeline</title>
          <desc id="data-pipeline-desc">
            Visual data architecture showing raw operational data sources ingested, transformed with dbt and SQL, served through a semantic layer, and visualized in Power BI for executive decisions.
          </desc>

          <defs>
            <marker id="dataArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#06b6d4" />
            </marker>
          </defs>

          {/* 5 Stages */}
          {/* Stage 1: Raw Sources */}
          <g transform="translate(40, 70)">
            <rect width="150" height="280" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#1e293b" stroke="#06b6d4" />
            <text x="28" y="33" fill="#38bdf8" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">01</text>
            <text x="16" y="74" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Raw Sources</text>
            <text x="16" y="94" fill="#94a3b8" fontSize="10" fontFamily="system-ui">Operational Silos</text>

            <g transform="translate(14, 115)">
              <rect width="122" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Postgres / MySQL</text>
            </g>
            <g transform="translate(14, 160)">
              <rect width="122" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Stripe &amp; Banking</text>
            </g>
            <g transform="translate(14, 205)">
              <rect width="122" height="42" rx="6" fill="#1e293b" stroke="#0891b2" />
              <text x="10" y="19" fill="#38bdf8" fontSize="10" fontFamily="monospace">CRM &amp; Marketing</text>
              <text x="10" y="33" fill="#94a3b8" fontSize="9" fontFamily="system-ui">GA4, HubSpot, Ads</text>
            </g>
          </g>

          <line x1="190" y1="210" x2="220" y2="210" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#dataArrow)" />

          {/* Stage 2: Ingestion & Cleaning */}
          <g transform="translate(220, 70)">
            <rect width="150" height="280" rx="14" fill="#0f172a" stroke="#0e7490" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#1e293b" stroke="#0891b2" />
            <text x="28" y="33" fill="#38bdf8" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">02</text>
            <text x="16" y="74" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Ingest &amp; Clean</text>
            <text x="16" y="94" fill="#94a3b8" fontSize="10" fontFamily="system-ui">Deduplication &amp; Type Check</text>

            <g transform="translate(14, 115)">
              <rect width="122" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Automated Sync</text>
            </g>
            <g transform="translate(14, 160)">
              <rect width="122" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Schema Validation</text>
            </g>
            <g transform="translate(14, 205)">
              <rect width="122" height="42" rx="6" fill="#1e293b" stroke="#06b6d4" />
              <text x="10" y="19" fill="#67e8f9" fontSize="10" fontFamily="monospace">Data Hygiene</text>
              <text x="10" y="33" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Eliminate null errors</text>
            </g>
          </g>

          <line x1="370" y1="210" x2="400" y2="210" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#dataArrow)" />

          {/* Stage 3: Transformation & Modeling */}
          <g transform="translate(400, 70)">
            <rect width="150" height="280" rx="14" fill="#0f172a" stroke="#2563eb" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#1e293b" stroke="#3b82f6" />
            <text x="28" y="33" fill="#60a5fa" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">03</text>
            <text x="16" y="74" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Transformation</text>
            <text x="16" y="94" fill="#94a3b8" fontSize="10" fontFamily="system-ui">dbt / SQL Business Logic</text>

            <g transform="translate(14, 115)">
              <rect width="122" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Star Schema Marts</text>
            </g>
            <g transform="translate(14, 160)">
              <rect width="122" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Fact &amp; Dim Tables</text>
            </g>
            <g transform="translate(14, 205)">
              <rect width="122" height="42" rx="6" fill="#1e293b" stroke="#3b82f6" />
              <text x="10" y="19" fill="#93c5fd" fontSize="10" fontFamily="monospace">Version-Controlled</text>
              <text x="10" y="33" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Git audited metrics</text>
            </g>
          </g>

          <line x1="550" y1="210" x2="580" y2="210" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#dataArrow)" />

          {/* Stage 4: Semantic Layer & Dashboards */}
          <g transform="translate(580, 70)">
            <rect width="150" height="280" rx="14" fill="#0f172a" stroke="#4f46e5" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#1e293b" stroke="#6366f1" />
            <text x="28" y="33" fill="#a5b4fc" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">04</text>
            <text x="16" y="74" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Semantic BI</text>
            <text x="16" y="94" fill="#94a3b8" fontSize="10" fontFamily="system-ui">Power BI &amp; DAX Measures</text>

            <g transform="translate(14, 115)">
              <rect width="122" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Unified KPI Logic</text>
            </g>
            <g transform="translate(14, 160)">
              <rect width="122" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Interactive Slicers</text>
            </g>
            <g transform="translate(14, 205)">
              <rect width="122" height="42" rx="6" fill="#1e293b" stroke="#6366f1" />
              <text x="10" y="19" fill="#c7d2fe" fontSize="10" fontFamily="monospace">Auto-Refresh</text>
              <text x="10" y="33" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Scheduled telemetry</text>
            </g>
          </g>

          <line x1="730" y1="210" x2="760" y2="210" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#dataArrow)" />

          {/* Stage 5: Business Decisions */}
          <g transform="translate(760, 70)">
            <rect width="160" height="280" rx="14" fill="#0f172a" stroke="#059669" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#1e293b" stroke="#10b981" />
            <text x="28" y="33" fill="#34d399" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="bold">05</text>
            <text x="16" y="74" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="system-ui">Clear Decision</text>
            <text x="16" y="94" fill="#94a3b8" fontSize="10" fontFamily="system-ui">Confident Executive Action</text>

            <g transform="translate(14, 115)">
              <rect width="132" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Channel Profitability</text>
            </g>
            <g transform="translate(14, 160)">
              <rect width="132" height="34" rx="6" fill="#1e293b" />
              <text x="10" y="21" fill="#e2e8f0" fontSize="10" fontFamily="monospace">Customer Churn Alert</text>
            </g>
            <g transform="translate(14, 205)">
              <rect width="132" height="42" rx="6" fill="#1e293b" stroke="#10b981" />
              <text x="10" y="19" fill="#6ee7b7" fontSize="10" fontFamily="monospace">Growth Steering</text>
              <text x="10" y="33" fill="#94a3b8" fontSize="9" fontFamily="system-ui">Zero gut-feeling risk</text>
            </g>
          </g>

          {/* Bottom Bar */}
          <g transform="translate(40, 390)">
            <rect width="880" height="40" rx="8" fill="#020617" stroke="#1e293b" />
            <text x="440" y="25" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="monospace">
              DATA INTEGRITY GOAL: ONE SINGLE DEFINITION FOR REVENUE, CAC &amp; RETENTION ACROSS THE ENTIRE ORGANIZATION
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
export default DataAnalyticsPipeline;
