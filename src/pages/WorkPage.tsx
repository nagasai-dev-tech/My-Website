import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { projectsData, ProjectItem } from '../data/projects';
import { ArrowRight, BarChart3, SearchCheck, Activity, Globe, CheckSquare, Layers, X, Check, Filter } from 'lucide-react';

export function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Full-Stack Development', 'SEO & Growth', 'Data Analytics & BI'];
  const projectTypes = ['All', 'Client Project', 'Concept Project', 'Personal Project'];

  const iconMap: Record<string, any> = {
    BarChart3,
    SearchCheck,
    Activity,
    Globe,
    CheckSquare,
    Layers,
  };

  const typeColorMap: Record<string, string> = {
    'Client Project': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Concept Project': 'bg-blue-50 text-blue-700 border-blue-200',
    'Personal Project': 'bg-purple-50 text-purple-700 border-purple-200',
  };

  const filteredProjects = projectsData.filter((project) => {
    const matchesCat = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesType = selectedType === 'All' || project.type === selectedType;
    return matchesCat && matchesType;
  });

  return (
    <>
      <SeoMeta
        title="Selected Work & Projects — Full-Stack, SEO & Data Architecture"
        description="Explore production builds, concept architectures, and client projects across React, Power BI, SQL, and Technical SEO."
      />

      <main className="pt-32 pb-24 bg-white">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-600 uppercase mb-3">
              <span>// PORTFOLIO & REPOSITORY</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight mb-6">
              Selected Work & Technical Builds
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              A curated catalog of client deliveries, architectural concepts, and personal engineering tools. Every project demonstrates clean code and pragmatic system design.
            </p>
          </div>

          {/* Filtering Controls */}
          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Type Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-500 mr-1">Project Type:</span>
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedType === type
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const Icon = iconMap[project.imagePlaceholder.icon] || BarChart3;
              const badgeClass = typeColorMap[project.type] || 'bg-slate-100 text-slate-700 border-slate-200';

              return (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-slate-400 hover:shadow-premium overflow-hidden transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Card Visual Header */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.imagePlaceholder.gradient} p-5 flex flex-col justify-between overflow-hidden`}>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px]" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border backdrop-blur-md ${badgeClass}`}>
                        {project.type}
                      </span>
                      <span className="text-[11px] font-medium text-slate-300">
                        {project.category}
                      </span>
                    </div>

                    {/* Central metric preview */}
                    <div className="relative z-10 grid grid-cols-3 gap-2">
                      {project.imagePlaceholder.previewMetrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-md p-1.5 text-center"
                        >
                          <div className="text-[9px] text-slate-400 font-mono uppercase truncate">{metric.label}</div>
                          <div className="text-[11px] font-bold text-white mt-0.5 truncate">{metric.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-slate-400 text-[10px] font-mono">
                      <span className="flex items-center gap-1">
                        <Icon className="w-3 h-3 text-blue-400" />
                        {project.imagePlaceholder.mockupType.toUpperCase()}
                      </span>
                      <span>Verified Architecture</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 tracking-tight">
                        {project.title}
                      </h2>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {project.shortDescription}
                      </p>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-[11px] font-mono bg-slate-100 text-slate-700 rounded border border-slate-200/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Trigger */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <span>View Project Breakdown</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {project.id.slice(0, 8)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200">
              <p className="text-slate-600 text-base mb-4">No projects match the selected filter combination.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedType('All');
                }}
                className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* Modal Window */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
              
              <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
                <div>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    {activeModalProject.type}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2">
                    {activeModalProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Scope & Overview</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">{activeModalProject.fullDescription}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Architectural Blueprint</h4>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 leading-relaxed">
                    {activeModalProject.architectureNotes}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Engineered Features</h4>
                  <ul className="space-y-2">
                    {activeModalProject.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.technologies.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between rounded-b-3xl">
                <Link
                  to={`/contact?project=${activeModalProject.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  <span>Inquire About Similar Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </main>
    </>
  );
}
