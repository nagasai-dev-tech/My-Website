import React from 'react';

interface VisualProps {
  caption?: string;
  alt?: string;
}

export function WebsiteArchitecture({ caption, alt }: VisualProps) {
  return (
    <figure className="my-10" aria-label={alt || 'Decoupled Modern Web Application Architecture'}>
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
        <svg
          viewBox="0 0 960 480"
          className="w-full h-auto text-slate-100"
          role="img"
          aria-labelledby="web-arch-title web-arch-desc"
        >
          <title id="web-arch-title">Decoupled Full-Stack Web Architecture</title>
          <desc id="web-arch-desc">
            Visual diagram showing user client connecting through CDN and API Gateway to application server, database, cache, and external business integrations.
          </desc>

          <defs>
            <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="indigoGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#4338ca" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.05" />
            </linearGradient>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#64748b" />
            </marker>
            <marker id="arrowBlue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#3b82f6" />
            </marker>
          </defs>

          {/* Grid lines background */}
          <g stroke="#1e293b" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.6">
            <line x1="40" y1="80" x2="920" y2="80" />
            <line x1="40" y1="200" x2="920" y2="200" />
            <line x1="40" y1="320" x2="920" y2="320" />
            <line x1="40" y1="440" x2="920" y2="440" />
            <line x1="180" y1="40" x2="180" y2="460" />
            <line x1="480" y1="40" x2="480" y2="460" />
            <line x1="780" y1="40" x2="780" y2="460" />
          </g>

          {/* 1. Client Layer */}
          <g transform="translate(60, 110)">
            <rect width="180" height="260" rx="16" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <rect width="180" height="260" rx="16" fill="url(#blueGlow)" />
            <rect x="20" y="24" width="36" height="36" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="38" y="47" fill="#60a5fa" fontSize="16" textAnchor="middle" fontFamily="monospace" fontWeight="bold">UI</text>
            <text x="68" y="46" fill="#f8fafc" fontSize="15" fontWeight="bold" fontFamily="system-ui">Client Tier</text>
            <text x="20" y="85" fill="#94a3b8" fontSize="11" fontFamily="system-ui">User Experience Layer</text>

            <g transform="translate(18, 105)">
              <rect width="144" height="34" rx="6" fill="#1e293b" stroke="#334155" />
              <text x="14" y="22" fill="#e2e8f0" fontSize="12" fontFamily="monospace">React / Next SPA</text>
            </g>
            <g transform="translate(18, 150)">
              <rect width="144" height="34" rx="6" fill="#1e293b" stroke="#334155" />
              <text x="14" y="22" fill="#e2e8f0" fontSize="12" fontFamily="monospace">Edge CDN Cache</text>
            </g>
            <g transform="translate(18, 195)">
              <rect width="144" height="34" rx="6" fill="#1e293b" stroke="#334155" />
              <text x="14" y="22" fill="#e2e8f0" fontSize="12" fontFamily="monospace">PWA &amp; Mobile Web</text>
            </g>
          </g>

          {/* Connection Line 1 -> 2 */}
          <path d="M 240 240 L 370 240" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" strokeDasharray="6 3" />
          <text x="305" y="230" fill="#60a5fa" fontSize="11" textAnchor="middle" fontFamily="monospace">HTTPS / JWT</text>

          {/* 2. API Gateway & Backend Tier */}
          <g transform="translate(380, 70)">
            <rect width="220" height="340" rx="16" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
            <rect width="220" height="340" rx="16" fill="url(#indigoGlow)" />
            <rect x="20" y="24" width="36" height="36" rx="8" fill="#1e293b" stroke="#6366f1" strokeWidth="1.5" />
            <text x="38" y="47" fill="#818cf8" fontSize="16" textAnchor="middle" fontFamily="monospace" fontWeight="bold">API</text>
            <text x="68" y="46" fill="#f8fafc" fontSize="15" fontWeight="bold" fontFamily="system-ui">Application Core</text>
            <text x="20" y="85" fill="#94a3b8" fontSize="11" fontFamily="system-ui">Routing, Logic &amp; Security</text>

            <g transform="translate(18, 105)">
              <rect width="184" height="36" rx="6" fill="#1e293b" stroke="#4338ca" />
              <text x="14" y="23" fill="#c7d2fe" fontSize="12" fontFamily="monospace">API Gateway / Auth</text>
            </g>
            <g transform="translate(18, 155)">
              <rect width="184" height="36" rx="6" fill="#1e293b" stroke="#334155" />
              <text x="14" y="23" fill="#e2e8f0" fontSize="12" fontFamily="monospace">Serverless Endpoints</text>
            </g>
            <g transform="translate(18, 205)">
              <rect width="184" height="36" rx="6" fill="#1e293b" stroke="#334155" />
              <text x="14" y="23" fill="#e2e8f0" fontSize="12" fontFamily="monospace">Business Logic Engine</text>
            </g>
            <g transform="translate(18, 255)">
              <rect width="184" height="36" rx="6" fill="#1e293b" stroke="#334155" />
              <text x="14" y="23" fill="#e2e8f0" fontSize="12" fontFamily="monospace">Async Worker / Queues</text>
            </g>
          </g>

          {/* Connection Line 2 -> 3 */}
          <path d="M 600 180 L 710 180" fill="none" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowBlue)" />
          <text x="655" y="170" fill="#a5b4fc" fontSize="11" textAnchor="middle" fontFamily="monospace">SQL / ORM</text>

          <path d="M 600 300 L 710 300" fill="none" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" strokeDasharray="4 4" />
          <text x="655" y="292" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="monospace">Webhooks</text>

          {/* 3. Data & Ecosystem Tier */}
          <g transform="translate(720, 70)">
            {/* Top: Persistence Box */}
            <rect width="180" height="150" rx="14" fill="#0f172a" stroke="#0891b2" strokeWidth="1.5" />
            <rect width="180" height="150" rx="14" fill="url(#cyanGlow)" />
            <text x="20" y="32" fill="#38bdf8" fontSize="13" fontWeight="bold" fontFamily="monospace">DATA PERSISTENCE</text>
            <g transform="translate(16, 48)">
              <rect width="148" height="36" rx="6" fill="#164e63" stroke="#0891b2" />
              <text x="14" y="23" fill="#a5f3fc" fontSize="12" fontFamily="monospace">PostgreSQL DB</text>
            </g>
            <g transform="translate(16, 94)">
              <rect width="148" height="36" rx="6" fill="#1e293b" stroke="#334155" />
              <text x="14" y="23" fill="#e2e8f0" fontSize="12" fontFamily="monospace">Redis Cache</text>
            </g>

            {/* Bottom: Integrations Box */}
            <g transform="translate(0, 180)">
              <rect width="180" height="160" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
              <text x="20" y="30" fill="#94a3b8" fontSize="12" fontWeight="bold" fontFamily="monospace">ECOSYSTEM SYNC</text>
              <g transform="translate(16, 42)">
                <rect width="148" height="30" rx="5" fill="#1e293b" stroke="#334155" />
                <text x="10" y="19" fill="#e2e8f0" fontSize="11" fontFamily="system-ui">Stripe Payments</text>
              </g>
              <g transform="translate(16, 78)">
                <rect width="148" height="30" rx="5" fill="#1e293b" stroke="#334155" />
                <text x="10" y="19" fill="#e2e8f0" fontSize="11" fontFamily="system-ui">HubSpot / CRM</text>
              </g>
              <g transform="translate(16, 114)">
                <rect width="148" height="30" rx="5" fill="#1e293b" stroke="#334155" />
                <text x="10" y="19" fill="#e2e8f0" fontSize="11" fontFamily="system-ui">Analytics Telemetry</text>
              </g>
            </g>
          </g>

          {/* Bottom security/reliability badge */}
          <g transform="translate(60, 420)">
            <rect width="840" height="34" rx="8" fill="#0f172a" stroke="#1e293b" />
            <circle cx="20" cy="17" r="4" fill="#10b981" />
            <text x="34" y="22" fill="#94a3b8" fontSize="11" fontFamily="monospace">
              ZERO-TRUST ARCHITECTURE: TLS 1.3 · AUTOMATED BACKUPS · RATE LIMITING · CORS CONTROL · HEALTH TELEMETRY
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
export default WebsiteArchitecture;
