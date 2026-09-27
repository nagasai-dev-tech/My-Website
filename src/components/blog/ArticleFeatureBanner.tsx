import React from 'react';
import {
  Code2, Search, BarChart3, Layout, Cpu, Shield, Sparkles, Activity,
  Database, Layers, Terminal, Globe, Zap, TrendingUp, LineChart,
  Network, Bot, FlaskConical, BarChart2, PieChart, FileSearch,
  BrainCircuit, Gauge, CloudCog, GitBranch, Filter, Target,
  CheckSquare, Settings2, ChartArea,
} from 'lucide-react';

interface ArticleFeatureBannerProps {
  category: string;
  headline: string;
  subheadline: string;
  gradient?: string;
  iconName?: string;
  altText: string;
  trending?: boolean;
  /** Optional real image path (e.g. /images/blog/tech-01.jpg) */
  imageSrc?: string;
}

// ─────────────────────────────────────────────
// Icon registry
// ─────────────────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
  Code2, Search, BarChart3, Layout, Cpu, Shield, Sparkles, Activity,
  Database, Layers, Terminal, Globe, Zap, TrendingUp, LineChart,
  Network, Bot, FlaskConical, BarChart2, PieChart, FileSearch,
  BrainCircuit, Gauge, CloudCog, GitBranch, Filter, Target,
  CheckSquare, Settings2, ChartArea,
};

// ─────────────────────────────────────────────
// TECHNOLOGY — Deep Navy / Electric Blue
// ─────────────────────────────────────────────
function TechBanner({ headline, subheadline, iconName, trending }: {
  headline: string; subheadline: string; iconName: string; trending?: boolean;
}) {
  const Icon = iconMap[iconName] || Code2;
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-3xl select-none group bg-[#060b18]">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2e] via-[#0d1a4a] to-[#0a0f2e]" />
      {/* Animated radial glow */}
      <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-blue-600/20 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-indigo-700/15 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'linear-gradient(to right,#60a5fa 1px,transparent 1px),linear-gradient(to bottom,#60a5fa 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Decorative circuit traces SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        <line x1="80%" y1="0" x2="80%" y2="40%" stroke="#60a5fa" strokeWidth="1" />
        <line x1="80%" y1="40%" x2="90%" y2="40%" stroke="#60a5fa" strokeWidth="1" />
        <circle cx="90%" cy="40%" r="3" fill="#60a5fa" />
        <line x1="20%" y1="100%" x2="20%" y2="65%" stroke="#818cf8" strokeWidth="1" />
        <line x1="20%" y1="65%" x2="10%" y2="65%" stroke="#818cf8" strokeWidth="1" />
        <circle cx="10%" cy="65%" r="3" fill="#818cf8" />
        <line x1="50%" y1="0" x2="50%" y2="15%" stroke="#38bdf8" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="0" y1="50%" x2="12%" y2="50%" stroke="#38bdf8" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>

      {/* Floating decorative code tokens */}
      <span className="absolute top-[18%] right-[8%] text-blue-400/20 font-mono text-xs pointer-events-none">{'</>'}</span>
      <span className="absolute bottom-[22%] right-[14%] text-blue-400/15 font-mono text-[10px] pointer-events-none">{'{ }'}</span>
      <span className="absolute top-[55%] right-[6%] text-indigo-400/15 font-mono text-[10px] pointer-events-none">fn()</span>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-8 md:p-10">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-blue-500/20 border border-blue-400/30 text-blue-300 uppercase tracking-widest">
            Technology
          </span>
          {trending && (
            <span className="flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-600/80 text-white border border-blue-400/30">
              <Sparkles className="w-2.5 h-2.5 text-cyan-300" /> TRENDING
            </span>
          )}
        </div>

        {/* Center */}
        <div className="my-auto">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-blue-600/20 border border-blue-400/30 text-blue-400 flex items-center justify-center mb-3">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight mb-1.5">
            {headline}
          </h2>
          <p className="text-xs sm:text-sm text-blue-200/70 font-medium leading-relaxed max-w-[80%]">
            {subheadline}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-blue-400/60">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            NAGASAI // EDITORIAL
          </span>
          <span className="text-blue-300/50">VERIFIED PUBLICATION</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// SEO & DIGITAL MARKETING — Deep Purple / Indigo
// ─────────────────────────────────────────────
function SeoBanner({ headline, subheadline, iconName, trending }: {
  headline: string; subheadline: string; iconName: string; trending?: boolean;
}) {
  const Icon = iconMap[iconName] || Search;
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-3xl select-none group bg-[#0c0618]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#160a2e] via-[#1a0d3d] to-[#0f0620]" />
      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-full bg-purple-700/25 blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full bg-indigo-800/20 blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'linear-gradient(to right,#a78bfa 1px,transparent 1px),linear-gradient(to bottom,#a78bfa 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

      {/* Decorative search-engine SVG motifs */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        {/* Magnifier circle */}
        <circle cx="85%" cy="30%" r="10%" fill="none" stroke="#a78bfa" strokeWidth="1.5" />
        <line x1="91%" y1="38%" x2="95%" y2="44%" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
        {/* Wavy rank lines */}
        <path d="M5% 70% Q 15% 65%, 25% 70% T 45% 70%" stroke="#818cf8" strokeWidth="1" fill="none" />
        <path d="M5% 75% Q 15% 70%, 25% 75% T 45% 75%" stroke="#818cf8" strokeWidth="0.5" fill="none" />
        <path d="M5% 80% Q 12% 78%, 22% 80% T 38% 80%" stroke="#818cf8" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Floating keywords */}
      <span className="absolute top-[16%] right-[6%] text-purple-300/15 font-mono text-[10px] pointer-events-none">#SEO</span>
      <span className="absolute bottom-[25%] right-[10%] text-indigo-300/12 font-mono text-[9px] pointer-events-none">rank #1</span>
      <span className="absolute top-[60%] right-[5%] text-violet-300/12 font-mono text-[9px] pointer-events-none">CTR↑</span>

      <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-8 md:p-10">
        <div className="flex items-center justify-between">
          <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-purple-500/20 border border-purple-400/30 text-purple-300 uppercase tracking-widest">
            SEO & Marketing
          </span>
          {trending && (
            <span className="flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-purple-600/80 text-white border border-purple-400/30">
              <Sparkles className="w-2.5 h-2.5 text-pink-300" /> TRENDING
            </span>
          )}
        </div>

        <div className="my-auto">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-purple-600/20 border border-purple-400/30 text-purple-400 flex items-center justify-center mb-3">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight mb-1.5">
            {headline}
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/70 font-medium leading-relaxed max-w-[80%]">
            {subheadline}
          </p>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-purple-400/60">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            NAGASAI // EDITORIAL
          </span>
          <span className="text-purple-300/50">VERIFIED PUBLICATION</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// DATA ANALYTICS — Deep Teal / Cyan
// ─────────────────────────────────────────────
function DataBanner({ headline, subheadline, iconName, trending }: {
  headline: string; subheadline: string; iconName: string; trending?: boolean;
}) {
  const Icon = iconMap[iconName] || BarChart3;
  // Random-looking but deterministic bar heights for mini chart decoration
  const bars = [40, 65, 45, 80, 55, 90, 60, 75, 50, 85, 70];
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-3xl select-none group bg-[#030e14]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#041520] via-[#061e2a] to-[#031018]" />
      {/* Glow orbs */}
      <div className="absolute -top-1/4 right-0 w-2/3 h-2/3 rounded-full bg-cyan-700/20 blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 rounded-full bg-teal-800/15 blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'linear-gradient(to right,#22d3ee 1px,transparent 1px),linear-gradient(to bottom,#22d3ee 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

      {/* Decorative mini bar chart in the background */}
      <svg className="absolute bottom-0 right-0 w-1/2 h-2/3 opacity-[0.08]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 100" preserveAspectRatio="xMaxYMax meet">
        {bars.map((h, i) => (
          <rect key={i} x={i * 20 + 5} y={100 - h} width="12" height={h} fill="#22d3ee" rx="2" />
        ))}
        {/* trend line */}
        <polyline
          points={bars.map((h, i) => `${i * 20 + 11},${100 - h}`).join(' ')}
          fill="none" stroke="#06b6d4" strokeWidth="1.5"
        />
      </svg>

      {/* Floating data labels */}
      <span className="absolute top-[18%] right-[6%] text-cyan-300/15 font-mono text-[10px] pointer-events-none">+12.4%</span>
      <span className="absolute bottom-[28%] right-[10%] text-teal-300/12 font-mono text-[9px] pointer-events-none">KPI ✓</span>
      <span className="absolute top-[58%] right-[5%] text-cyan-300/12 font-mono text-[9px] pointer-events-none">ROI↑</span>

      <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-8 md:p-10">
        <div className="flex items-center justify-between">
          <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 uppercase tracking-widest">
            Data Analytics
          </span>
          {trending && (
            <span className="flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-cyan-600/80 text-white border border-cyan-400/30">
              <Sparkles className="w-2.5 h-2.5 text-teal-300" /> TRENDING
            </span>
          )}
        </div>

        <div className="my-auto">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-cyan-600/20 border border-cyan-400/30 text-cyan-400 flex items-center justify-center mb-3">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight mb-1.5">
            {headline}
          </h2>
          <p className="text-xs sm:text-sm text-cyan-200/70 font-medium leading-relaxed max-w-[80%]">
            {subheadline}
          </p>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-cyan-400/60">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            NAGASAI // EDITORIAL
          </span>
          <span className="text-cyan-300/50">VERIFIED PUBLICATION</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Export — Routes to the right variant
// ─────────────────────────────────────────────
export function ArticleFeatureBanner({
  category,
  headline,
  subheadline,
  iconName = 'Code2',
  altText,
  trending = false,
  imageSrc,
}: ArticleFeatureBannerProps) {
  // If a real image is provided, render it with an overlay
  if (imageSrc) {
    return (
      <div
        className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-3xl select-none group"
        role="img"
        aria-label={altText}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {/* Subtle dark overlay for text legibility on any image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        {/* Category badge */}
        <div className="absolute bottom-4 left-4">
          <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-sm border border-white/20 text-white uppercase tracking-widest">
            {category}
          </span>
        </div>
        {trending && (
          <div className="absolute top-4 right-4">
            <span className="flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-600/90 text-white">
              <Sparkles className="w-2.5 h-2.5 text-cyan-300" /> TRENDING
            </span>
          </div>
        )}
      </div>
    );
  }

  // CSS+SVG variants by category
  if (category === 'SEO & Digital Marketing') {
    return (
      <div role="img" aria-label={altText}>
        <SeoBanner headline={headline} subheadline={subheadline} iconName={iconName} trending={trending} />
      </div>
    );
  }

  if (category === 'Data Analytics') {
    return (
      <div role="img" aria-label={altText}>
        <DataBanner headline={headline} subheadline={subheadline} iconName={iconName} trending={trending} />
      </div>
    );
  }

  // Default: Technology
  return (
    <div role="img" aria-label={altText}>
      <TechBanner headline={headline} subheadline={subheadline} iconName={iconName} trending={trending} />
    </div>
  );
}

export default ArticleFeatureBanner;
