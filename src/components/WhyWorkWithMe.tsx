import { CheckCircle2, ShieldCheck, Cpu, Smartphone, BarChart3, Search, MessageSquareCode, Layers, RefreshCw } from 'lucide-react';

export function WhyWorkWithMe() {
  const principles = [
    {
      title: 'Business-Focused Solutions',
      description: 'Code serves commercial outcomes. Every technical choice is evaluated by whether it saves operational time, increases conversion, or aids growth.',
      icon: ShieldCheck
    },
    {
      title: 'Clean & Maintainable Code',
      description: 'Readable, well-structured components with zero unnecessary spaghetti. Built so any competent developer can easily inspect and extend it in the future.',
      icon: Cpu
    },
    {
      title: 'Flawless Responsive Design',
      description: 'Tested across modern viewport sizes from ultra-wide 1920px monitors down to 375px mobile screens, ensuring flawless usability everywhere.',
      icon: Smartphone
    },
    {
      title: 'Data-Driven Thinking',
      description: 'Decisions backed by metrics, not subjective opinions. Analytics event tracking, telemetry, and structured data baked into the product core.',
      icon: BarChart3
    },
    {
      title: 'SEO-Aware Development',
      description: 'Semantic HTML5 structure, Core Web Vitals optimization, JSON-LD schemas, and clean canonical hierarchies implemented from day one.',
      icon: Search
    },
    {
      title: 'Clear & Transparent Communication',
      description: 'Regular asynchronous updates, milestone walkthroughs, realistic timelines, and zero confusing technical jargon.',
      icon: MessageSquareCode
    },
    {
      title: 'Scalable Architecture',
      description: 'Decoupled systems and modular codebases that grow smoothly alongside your company without requiring costly ground-up rewrites.',
      icon: Layers
    },
    {
      title: 'Continuous Improvement',
      description: 'Committed to ongoing performance benchmarks, modern security hygiene, and staying ahead of evolving web and data standards.',
      icon: RefreshCw
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-600 uppercase mb-3">
              <span>// CORE PRINCIPLES</span>
              <span className="w-8 h-px bg-blue-600/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Why Work With Me
            </h2>
          </div>
          <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-base">
            No manufactured vanity metrics or exaggerated claims. Just honest working principles that guarantee high-standard delivery.
          </p>
        </div>

        {/* 8 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Standard Practice</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
