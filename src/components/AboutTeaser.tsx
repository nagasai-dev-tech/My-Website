import { Link } from 'react-router-dom';
import { Code2, Search, BarChart3, Briefcase, ArrowRight, ArrowDown } from 'lucide-react';

export function AboutTeaser() {
  const steps = [
    {
      title: 'Development',
      role: 'Clean Code & Engineering',
      desc: 'Robust full-stack code that executes fast, handles edge cases, and scales reliably.',
      icon: Code2,
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      title: 'SEO',
      role: 'Search Architecture',
      desc: 'Discoverable structures ensuring search engines index and rank high-intent content.',
      icon: Search,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    },
    {
      title: 'Data',
      role: 'Analytics & Intelligence',
      desc: 'Connecting user clicks to conversion funnels, revenue metrics, and actionable reports.',
      icon: BarChart3,
      color: 'bg-cyan-50 text-cyan-700 border-cyan-200'
    },
    {
      title: 'Business',
      role: 'Measurable Outcomes',
      desc: 'Aligning technology choices strictly with commercial growth and operational clarity.',
      icon: Briefcase,
      color: 'bg-slate-900 text-white border-slate-900'
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-400 uppercase mb-3">
            <span>// THE MULTIDISCIPLINARY EDGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            A Developer Who Understands More Than Code
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Most digital projects fail not because of syntax bugs, but because development is siloed away from search visibility, business data, and commercial strategy.
          </p>
        </div>

        {/* 4-Step Connection Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-7 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${step.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-3">
                    {step.role}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow indicator between steps (desktop) */}
                {idx < 3 && (
                  <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-slate-800 border border-slate-700 items-center justify-center text-slate-400">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Core Philosophy Banner */}
        <div className="bg-gradient-to-r from-blue-950/60 via-slate-900/80 to-indigo-950/60 rounded-2xl p-8 sm:p-10 border border-blue-900/40 text-center max-w-4xl mx-auto shadow-2xl">
          <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed mb-6">
            "I don't just build websites — I understand how websites, search visibility, data, and business objectives connect into an engine that operates smoothly."
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-colors"
            >
              <span>Read My Full Background & Approach</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <span>Discuss Your Project Needs</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
