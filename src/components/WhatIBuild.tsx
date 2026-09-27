import { Link } from 'react-router-dom';
import { Layout, Users, LayoutDashboard, Search, Database, Layers, ArrowRight } from 'lucide-react';

export function WhatIBuild() {
  const buildItems = [
    {
      title: 'Business Websites',
      description: 'Modern, responsive websites engineered around measurable business goals, fast load times, and effortless mobile usability.',
      icon: Layout,
      badge: 'Web Architecture',
      problemSolved: 'Replaces slow, outdated websites that fail to convert visitors with responsive, high-converting digital flagships.'
    },
    {
      title: 'Lead Generation Systems',
      description: 'High-intent landing pages, dynamic multi-step capture forms, and automated webhook delivery into team inboxes or CRMs.',
      icon: Users,
      badge: 'Conversion Engine',
      problemSolved: 'Stops traffic leakage by guiding prospective clients through intuitive qualification funnels.'
    },
    {
      title: 'Business Dashboards',
      description: 'Interactive visual dashboards consolidating sales, revenue, marketing spend, and operational metrics into single panes of glass.',
      icon: LayoutDashboard,
      badge: 'Power BI & SQL',
      problemSolved: 'Eliminates reliance on scattered, conflicting spreadsheets by providing live executive clarity.'
    },
    {
      title: 'SEO Growth Systems',
      description: 'Automated keyword rank tracking cockpits, technical crawl diagnostic audits, and structured schema implementation.',
      icon: Search,
      badge: 'Organic Search',
      problemSolved: 'Provides total transparency into search rankings, crawl errors, and organic competitor movements.'
    },
    {
      title: 'Data Intelligence',
      description: 'Automated data pipelines, cleaning and ETL scripts, cohort churn analyses, and customer lifetime value reporting.',
      icon: Database,
      badge: 'Data Modeling',
      problemSolved: 'Transforms messy, raw transactional logs into dependable answers for strategic decision-making.'
    },
    {
      title: 'Custom Web Applications',
      description: 'Internal operations portals, customer-facing authenticated tools, and automated workflow engines tailored to specific processes.',
      icon: Layers,
      badge: 'Full-Stack Apps',
      problemSolved: 'Replaces error-prone manual email chains and paperwork with robust, role-based cloud software.'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-600 uppercase mb-3">
            <span>// PRACTICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            What I Actually Build
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Technology is only valuable when it solves concrete business bottlenecks. Here are the practical digital systems I engineer for clients.
          </p>
        </div>

        {/* Quick Customer Intent Match Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-14 text-center">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold block mb-1">Need a website?</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900">I build responsive business sites.</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold block mb-1">Need a web application?</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900">I engineer custom cloud tools.</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 font-semibold block mb-1">Need search traffic?</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900">I improve technical SEO ranks.</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-700 font-semibold block mb-1">Have business data?</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900">I turn it into live dashboards.</span>
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {buildItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-400 hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-800 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Problem It Solves:
                  </div>
                  <p className="text-xs text-slate-600 italic">
                    "{item.problemSolved}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link to Full Use-Cases Page */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">Want to see in-depth architectural breakdowns?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Explore problem definitions, approach strategies, and expected business value.</p>
          </div>
          <Link
            to="/use-cases"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 transition-colors shrink-0"
          >
            <span>Explore All Use Cases</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
