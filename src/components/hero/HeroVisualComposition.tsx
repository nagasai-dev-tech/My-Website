import { useState } from 'react';
import { HeroFloatingCard } from './HeroFloatingCard';
import { Terminal, Shield, Sparkles, Layers, Compass, Code2 } from 'lucide-react';

export function HeroVisualComposition() {
  const [imgSrc, setImgSrc] = useState('/images/profile.png');
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full max-w-[500px] mx-auto lg:max-w-none flex items-center justify-center py-6 sm:py-10">
      
      {/* Visual Anchor Box */}
      <div className="relative w-full max-w-[420px] sm:max-w-[460px]">
        
        {/* Layer 0: Ambient Gradient Aura */}
        <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-blue-100/60 via-indigo-50/50 to-slate-100/80 rounded-[2.5rem] blur-2xl -z-20 opacity-80" />

        {/* Layer 1: SVG Geometric Vector Offset Blueprint Frame */}
        <div className="absolute -top-4 -left-4 w-full h-full border border-blue-400/30 rounded-3xl -z-10 rotate-1 hidden sm:block pointer-events-none" />
        <div className="absolute -bottom-4 -right-4 w-full h-full border border-slate-300/60 rounded-3xl -z-10 -rotate-1 hidden sm:block pointer-events-none" />

        {/* Layer 2: Main Architectural Card Frame */}
        <div className="relative bg-white rounded-3xl p-3 sm:p-4 border border-slate-200/90 shadow-premium overflow-visible">
          
          {/* Top Technical Header Strip */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-3 bg-slate-50/60 rounded-xl">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-300" />
              <span className="w-2 h-2 rounded-full bg-slate-300" />
              <span className="w-2 h-2 rounded-full bg-slate-300" />
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
              <span>NAGASAI // DIGITAL SOLUTIONS</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest hidden sm:inline">
              LIVE
            </span>
          </div>

          {/* Central Hybrid Portrait Area (Asymmetrical Editorial Shape) */}
          <div className="relative aspect-[4/4.7] sm:aspect-[4/4.9] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-blue-50/30 border border-slate-200/80 group">
            
            {/* SVG Silhouette / Vector Outline Behind Image */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <svg viewBox="0 0 200 240" className="w-full h-full text-blue-600 fill-current">
                <path d="M100 20 C120 20 135 35 135 55 C135 75 120 90 100 90 C80 90 65 75 65 55 C65 35 80 20 100 20 Z M40 210 C40 150 70 120 100 120 C130 120 160 150 160 210 Z" />
              </svg>
            </div>

            {/* Geometric Grid Overlay inside the image container */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {!imgError ? (
              <img
                src={imgSrc}
                onError={() => {
                  if (imgSrc === '/images/profile.png') {
                    setImgSrc('/images/profile.webp');
                  } else if (imgSrc === '/images/profile.webp') {
                    setImgSrc('/my-image.webp');
                  } else {
                    setImgError(true);
                  }
                }}
                alt="Nagasai — Full-Stack Developer, SEO & Data Analytics Consultant"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="eager"
              />
            ) : (
              /* High-End Technical Silhouette / Monogram Fallback */
              <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white text-center">
                <div className="w-24 h-24 rounded-3xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-bold text-4xl text-blue-400 mb-4 shadow-glow">
                  N
                </div>
                <div className="text-xl font-bold tracking-tight text-white mb-1">Nagasai</div>
                <div className="text-xs text-blue-300 font-mono tracking-wider uppercase mb-4">
                  Full-Stack • SEO • Data
                </div>
                <p className="text-xs text-slate-400 max-w-[220px] leading-relaxed">
                  Personal portrait slot ready at <code className="text-blue-300 font-mono">public/images/profile.png</code>
                </p>
              </div>
            )}

            {/* Bottom Gradient Fade for depth */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Embedded Identity Tag */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-3.5 py-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="font-bold tracking-tight text-white">Nagasai</span>
              </div>
              <span className="text-[10px] font-mono text-blue-300">
                Full-Stack • SEO • Data
              </span>
            </div>

          </div>

          {/* Bottom Card Footer Details */}
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 px-1">
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-blue-600" />
              <span>FULL-STACK · SEO · DATA</span>
            </span>
            <span className="text-slate-400">
              LOC: HYD // GLOBAL
            </span>
          </div>

        </div>

        {/* THREE INTEGRATED FLOATING MICRO-CARDS (Subtle Floating Animations) */}
        
        {/* 1. Top-Right: SEO & Organic Search Growth */}
        <div className="absolute -top-6 -right-4 sm:-right-8 z-20 w-[200px] sm:w-[230px] animate-hero-float-slow">
          <HeroFloatingCard type="seo" />
        </div>

        {/* 2. Middle-Left: Full-Stack Web Architecture */}
        <div className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 z-20 w-[200px] sm:w-[220px] animate-hero-float-rev">
          <HeroFloatingCard type="dev" />
        </div>

        {/* 3. Bottom-Right: Business Intelligence & Telemetry */}
        <div className="absolute -bottom-8 -right-3 sm:-right-6 z-20 w-[190px] sm:w-[220px] animate-hero-float-slow">
          <HeroFloatingCard type="data" />
        </div>

      </div>

    </div>
  );
}
