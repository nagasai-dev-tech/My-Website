import { useState } from 'react';
import { skillsData } from '../data/skills';
import { Code2, BarChart3, Search, CheckCircle2 } from 'lucide-react';

export function SkillsGrid() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'development', label: 'Development' },
    { id: 'data', label: 'Data & BI' },
    { id: 'seo', label: 'SEO & Search' },
  ];

  const filteredCategories = activeTab === 'all'
    ? skillsData
    : skillsData.filter((cat) => cat.id === activeTab);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-600 uppercase mb-3">
              <span>// TECH RADAR</span>
              <span className="w-8 h-px bg-blue-600/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Tools & Technologies
            </h2>
          </div>
          <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-base">
            Curated tools chosen for real-world production reliability, performance, and long-term maintainability.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Category Blocks */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="border border-slate-200 rounded-2xl p-6 sm:p-8 bg-slate-50/50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{category.description}</p>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-white border border-slate-200 text-blue-600 self-start sm:self-auto">
                  {category.badge}
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-white rounded-xl p-4 border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </div>
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {skill.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {skill.purpose}
                    </p>
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 font-mono">Proficiency</span>
                      <span className="font-semibold text-slate-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-blue-600" />
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
