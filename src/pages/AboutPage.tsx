import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { Code2, Search, BarChart3, Briefcase, ArrowRight, ShieldCheck, Terminal, Compass, CheckCircle2 } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      title: 'Commercial Intent Over Syntax Hype',
      desc: 'Code is a tool, not an art gallery. I choose frameworks and architectures that minimize maintenance overhead and directly support your business bottom line.'
    },
    {
      title: 'Performance & Discoverability by Default',
      desc: 'Speed, mobile responsiveness, semantic HTML, and technical SEO are treated as non-negotiable foundations, not optional post-launch afterthoughts.'
    },
    {
      title: 'Zero Fabricated Vanity Metrics',
      desc: 'I believe in radical professional honesty. I do not invent fake client logos, artificial reviews, or inflated statistics. My code and architecture speak for themselves.'
    },
    {
      title: 'Decoupled, Modular Thinking',
      desc: 'Whether building a React frontend, writing a Python ETL script, or modeling DAX measures in Power BI, I maintain clean separation of concerns.'
    }
  ];

  return (
    <>
      <SeoMeta
        title="About Nagasai — Full-Stack Developer, SEO Strategist & Data Analyst"
        description="Learn about Nagasai's multidisciplinary engineering background, connecting web development, search visibility, and business intelligence."
      />

      <main className="pt-32 pb-24 bg-white">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-600 uppercase mb-3">
              <span>// ABOUT & PHILOSOPHY</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight mb-6">
              A Developer Who Understands More Than Code
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              I operate at the intersection of modern full-stack software development, search engine architecture, and business data analytics.
            </p>
          </div>
        </section>

        {/* Narrative & Image Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual presentation block */}
            <div className="lg:col-span-5">
              <div className="relative bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">nagasai.manifesto</span>
                </div>

                <div className="space-y-4 font-mono text-xs text-slate-300 leading-relaxed">
                  <p className="text-blue-400">// Primary Principle:</p>
                  <p className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-200">
                    "Websites should not simply exist; they must load instantly, index cleanly, and provide unambiguous data on how customers interact."
                  </p>

                  <div className="pt-2 text-slate-400">
                    <span className="text-white font-bold">Focus:</span> Full-Stack Web Apps, Technical SEO Audits, Power BI Reporting, SQL Data Modeling.
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                    <span>STATUS: ACTIVE FREELANCE</span>
                    <span>REMOTE / GLOBAL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative copy */}
            <div className="lg:col-span-7 space-y-6 text-slate-700 text-base leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                Bridging the Gap Between Engineering, Traffic & Data
              </h2>

              <p>
                In many technology companies, departments operate in separate silos. The frontend developer writes React components without considering crawl budgets or canonical tags. The SEO consultant produces keyword spreadsheets without understanding DOM rendering or API constraints. And management makes crucial budget decisions relying on conflicting Excel workbooks.
              </p>

              <p>
                My practice was formed specifically to eliminate this disconnect. When I build a web application, I engineer it from day one with the technical SEO architecture needed to achieve discoverability, the performance optimization required for high mobile retention, and the telemetry needed to capture meaningful user conversion events.
              </p>

              <p>
                Whether assisting an early-stage startup with their initial product launch, helping an agency execute specialized client deliverables, or building an executive Power BI reporting system for a growing company, I deliver clean, documented, and resilient solutions.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <span>Work With Me</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/use-cases"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <span>View Problem Breakdowns</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* 4 Pillars Flow */}
        <section className="bg-slate-50 py-20 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                How the Disciplines Connect
              </h2>
              <p className="text-sm text-slate-600">
                A connected loop where each technical domain reinforces the next.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">1. Development</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Building lightning-fast, accessible, and resilient code using React, TypeScript, and robust backend APIs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">2. Search Visibility</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Structuring URLs, schemas, and semantic content so target searchers find the product organically.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">3. Data & Analytics</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tracking conversion actions, analyzing user paths, and centralizing data in SQL and Power BI dashboards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">4. Business Value</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transforming technical effort directly into saved operational hours, customer acquisitions, and margin clarity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Working Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Guiding Engineering Values
            </h2>
            <p className="text-sm text-slate-600">
              The professional standards I uphold on every client engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase mb-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    Principle 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
