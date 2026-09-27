import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { useCasesData, UseCaseItem } from '../data/useCases';
import { ArrowRight, AlertCircle, Compass, CheckCircle2, Cpu, TrendingUp, Layers, Filter } from 'lucide-react';

export function UseCasesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'SEO & Growth', 'Business Analytics', 'Web Applications'];

  const filteredUseCases = activeCategory === 'All'
    ? useCasesData
    : useCasesData.filter((item) => item.category === activeCategory);

  return (
    <>
      <SeoMeta
        title="Use Cases — Real Problems, Practical Digital Solutions"
        description="Explore detailed problem breakdowns, architectural approaches, and practical business solutions in Web Development, SEO, and Business Intelligence."
      />

      <main className="pt-32 pb-24 bg-white">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-600 uppercase mb-3">
              <span>// PRACTICAL ARCHITECTURE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight mb-6">
              Real Problems. Practical Digital Solutions.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Before choosing a tech stack or writing code, engineering starts with understanding the business friction. Here is how I analyze real-world bottlenecks and deliver dependable systems.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-slate-200">
            <span className="text-xs font-mono text-slate-600 flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5" /> Filter by Focus:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Use Cases Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredUseCases.map((useCase) => (
            <div
              key={useCase.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-premium p-6 sm:p-10 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-mono font-bold text-lg">
                    {useCase.number}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {useCase.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
                      {useCase.title}
                    </h2>
                  </div>
                </div>
                <span className="text-xs text-slate-600 font-mono self-start sm:self-auto">
                  Scenario {useCase.number}
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-base text-slate-700 font-medium mb-8">
                {useCase.subtitle}
              </p>

              {/* 3 Pillars: Problem, Approach, Solution */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Problem */}
                <div className="bg-red-50/40 rounded-2xl p-6 border border-red-100/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase tracking-wider mb-3">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      The Problem
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {useCase.problem}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-red-100 text-[11px] text-red-600/80 font-mono">
                    Identified Bottleneck
                  </div>
                </div>

                {/* Approach */}
                <div className="bg-blue-50/40 rounded-2xl p-6 border border-blue-100/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">
                      <Compass className="w-4 h-4 text-blue-600" />
                      The Engineering Approach
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {useCase.approach}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-blue-100 text-[11px] text-blue-600/80 font-mono">
                    System Design
                  </div>
                </div>

                {/* Solution */}
                <div className="bg-emerald-50/40 rounded-2xl p-6 border border-emerald-100/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      The Delivered Solution
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {useCase.solution}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-emerald-100 text-[11px] text-emerald-600/80 font-mono">
                    Production Asset
                  </div>
                </div>
              </div>

              {/* Technologies & Expected Business Value */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 border-t border-slate-100 items-center">
                
                {/* Technologies */}
                <div className="lg:col-span-4">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-blue-600" />
                    Technologies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {useCase.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200/80 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expected Business Value */}
                <div className="lg:col-span-5">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    Expected Business Value:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {useCase.expectedBusinessValue.map((val, vIdx) => (
                      <li key={vIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{val}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct CTA */}
                <div className="lg:col-span-3 flex justify-start lg:justify-end">
                  <Link
                    to={useCase.ctaLink}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 transition-colors w-full sm:w-auto justify-center"
                  >
                    <span>{useCase.ctaText}</span>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </section>

        {/* Bottom Contact Callout */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Facing a different operational or digital challenge?
            </h3>
            <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6">
              Every company has specific edge-cases. Describe your workflow, data sources, or growth goals, and we can discuss a pragmatic architecture.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <span>Schedule a Technical Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
