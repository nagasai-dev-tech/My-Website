import { Search, Compass, Cpu, Gauge, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Understand',
    tagline: 'Discovery & Business Context',
    desc: 'We start by unpacking your exact commercial goals, technical bottlenecks, target audience expectations, and operational requirements before writing a single line of code.',
    icon: Search,
    iconBg: 'bg-blue-500',
    iconGlow: 'shadow-blue-500/40',
    tagColor: 'text-blue-400',
    tagBorder: 'border-blue-500/20 bg-blue-500/10',
    hoverBorder: 'hover:border-blue-500/50',
    numColor: 'text-blue-500/10',
    barColor: 'bg-blue-500',
  },
  {
    num: '02',
    title: 'Plan',
    tagline: 'Architecture & Wireframes',
    desc: 'Formulating clear component hierarchies, database schemas, API contracts, and milestone deliverables to eliminate ambiguity and scope creep.',
    icon: Compass,
    iconBg: 'bg-indigo-500',
    iconGlow: 'shadow-indigo-500/40',
    tagColor: 'text-indigo-400',
    tagBorder: 'border-indigo-500/20 bg-indigo-500/10',
    hoverBorder: 'hover:border-indigo-500/50',
    numColor: 'text-indigo-500/10',
    barColor: 'bg-indigo-500',
  },
  {
    num: '03',
    title: 'Build',
    tagline: 'Clean, Modular Engineering',
    desc: 'Iterative development following modern standards: type safety, responsive layout construction, fast rendering cycles, and secure data handling.',
    icon: Cpu,
    iconBg: 'bg-violet-500',
    iconGlow: 'shadow-violet-500/40',
    tagColor: 'text-violet-400',
    tagBorder: 'border-violet-500/20 bg-violet-500/10',
    hoverBorder: 'hover:border-violet-500/50',
    numColor: 'text-violet-500/10',
    barColor: 'bg-violet-500',
  },
  {
    num: '04',
    title: 'Optimize',
    tagline: 'Performance, SEO & Polish',
    desc: 'Rigorous testing for Core Web Vitals, mobile responsiveness, structured Schema.org markup, accessibility compliance, and browser compatibility.',
    icon: Gauge,
    iconBg: 'bg-purple-500',
    iconGlow: 'shadow-purple-500/40',
    tagColor: 'text-purple-400',
    tagBorder: 'border-purple-500/20 bg-purple-500/10',
    hoverBorder: 'hover:border-purple-500/50',
    numColor: 'text-purple-500/10',
    barColor: 'bg-purple-500',
  },
  {
    num: '05',
    title: 'Launch',
    tagline: 'Production & Documentation',
    desc: 'Flawless serverless or server deployment, Search Console index verification, analytics event triggers, and complete client handoff documentation.',
    icon: Rocket,
    iconBg: 'bg-cyan-500',
    iconGlow: 'shadow-cyan-500/40',
    tagColor: 'text-cyan-400',
    tagBorder: 'border-cyan-500/20 bg-cyan-500/10',
    hoverBorder: 'hover:border-cyan-500/50',
    numColor: 'text-cyan-500/10',
    barColor: 'bg-cyan-500',
  },
];

export function ProcessSection() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">

      {/* Subtle dot-grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      {/* Top edge glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      {/* Bottom edge glow */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Ambient blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-[11px] font-mono font-bold tracking-[0.2em] uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            METHODOLOGY
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
            How I{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Work
              </span>
              {/* Underline accent */}
              <span className="absolute left-0 -bottom-1 w-full h-[3px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 opacity-60" />
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A disciplined 5-stage development cycle that keeps projects predictable, transparent, and built to the highest standards.
          </p>
        </div>

        {/* ── Pipeline connector line (desktop only) ── */}
        <div className="relative hidden lg:block mb-8">
          <div className="absolute top-1/2 left-[9%] right-[9%] h-[2px] -translate-y-1/2 bg-gradient-to-r from-blue-500/30 via-violet-500/40 to-cyan-500/30 rounded-full" />
        </div>

        {/* ── Step Icon Nodes (desktop) ── */}
        <div className="hidden lg:grid grid-cols-5 mb-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-3">
                {/* Icon badge */}
                <div
                  className={`w-14 h-14 rounded-2xl ${step.iconBg} shadow-xl ${step.iconGlow} flex items-center justify-center group hover:scale-110 transition-transform duration-300 cursor-default`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                {/* Step number pill */}
                <span className={`text-[10px] font-mono font-bold ${step.tagColor} tracking-widest`}>
                  PHASE {step.num}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── Step Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className={`relative group rounded-2xl bg-white/[0.03] border border-white/10 ${step.hoverBorder} hover:bg-white/[0.06] transition-all duration-300 overflow-hidden flex flex-col`}
              >
                {/* Giant decorative number */}
                <span
                  className={`absolute -bottom-4 -right-2 text-[7rem] font-black leading-none select-none pointer-events-none ${step.numColor} transition-all duration-300 group-hover:opacity-100`}
                >
                  {step.num}
                </span>

                {/* Top color bar */}
                <div className={`h-[3px] w-full ${step.barColor} opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div className="p-6 flex flex-col gap-4 flex-1 relative z-10">

                  {/* Mobile: icon visible in card */}
                  <div className="flex items-center justify-between lg:hidden">
                    <div className={`w-10 h-10 rounded-xl ${step.iconBg} shadow-lg flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold ${step.tagColor} tracking-widest`}>
                      {step.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-white transition-colors">
                    {step.title}
                  </h3>

                  {/* Tagline pill */}
                  <span className={`inline-flex self-start text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border ${step.tagBorder} ${step.tagColor} tracking-wide`}>
                    {step.tagline}
                  </span>

                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed flex-1">
                    {step.desc}
                  </p>

                  {/* Footer */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-600">
                      Phase {step.num} / 05
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${step.barColor} opacity-40 group-hover:opacity-100 transition-opacity`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom summary strip ── */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${step.barColor}`} />
              <span className="text-[11px] font-mono text-slate-500 tracking-wider">
                {step.title}
              </span>
              {i < steps.length - 1 && (
                <span className="text-slate-700 ml-2 hidden sm:inline">→</span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
