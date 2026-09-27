import React from 'react';

export function HeroSvgArtwork() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* Precision ambient background glow */}
      <div className="absolute top-1/3 -right-24 w-[480px] h-[480px] bg-gradient-to-br from-blue-100/50 via-indigo-50/40 to-transparent rounded-full blur-3xl opacity-70 animate-pulse-glow" />
      <div className="absolute -bottom-10 left-1/4 w-[360px] h-[360px] bg-sky-50/60 rounded-full blur-2xl opacity-60" />

      {/* SVG Circuit & Technical Lines Layer */}
      <svg
        className="w-full h-full opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <defs>
          <linearGradient id="heroBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.1" />
          </linearGradient>
          <pattern id="heroFineGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.75" strokeOpacity="0.4" />
          </pattern>
        </defs>

        {/* Subtle grid patch on the right */}
        <rect x="52%" y="10%" width="46%" height="80%" fill="url(#heroFineGrid)" className="hidden lg:block" />

        {/* Architectural Guide Lines */}
        <g stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3">
          <line x1="55%" y1="18%" x2="95%" y2="18%" />
          <line x1="60%" y1="84%" x2="98%" y2="84%" />
          <line x1="92%" y1="12%" x2="92%" y2="88%" />
        </g>

        {/* Dynamic Curved Conduit Vector (Animated Dash) */}
        <path
          d="M 480 320 C 580 260, 680 380, 820 290 S 960 410, 1080 360"
          stroke="url(#heroBlueGrad)"
          strokeWidth="1.5"
          fill="none"
          className="animate-circuit-dash hidden lg:block"
        />

        {/* Geometric Corner Crosshair Marks */}
        <g stroke="#64748b" strokeWidth="1.5">
          <path d="M 680 80 L 696 80 M 688 72 L 688 88" opacity="0.6" />
          <path d="M 1120 180 L 1136 180 M 1128 172 L 1128 188" opacity="0.6" />
          <path d="M 640 520 L 656 520 M 648 512 L 648 528" opacity="0.6" />
        </g>

        {/* Coordinate Reference Notations */}
        <text x="680" y="65" fill="#94a3b8" fontSize="9" fontFamily="monospace" letterSpacing="0.1em">
          SYS.FRAME_REF // [X: 420.8 Y: 118.4]
        </text>
        <text x="960" y="560" fill="#94a3b8" fontSize="9" fontFamily="monospace" letterSpacing="0.1em" className="hidden xl:block">
          STATUS: PRODUCTION_READY
        </text>

        {/* Decorative Orbit Concentric Rings */}
        <circle cx="820" cy="340" r="180" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 8" opacity="0.6" className="hidden lg:block" />
        <circle cx="820" cy="340" r="230" stroke="#f1f5f9" strokeWidth="1" opacity="0.8" className="hidden lg:block" />
      </svg>
    </div>
  );
}
