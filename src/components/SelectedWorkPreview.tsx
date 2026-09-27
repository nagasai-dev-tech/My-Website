import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData, ProjectItem } from '../data/projects';
import { ArrowRight, ExternalLink, Code2, BarChart3, SearchCheck, Globe, Activity, CheckSquare, Layers, X, Check } from 'lucide-react';

export function SelectedWorkPreview() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const iconMap: Record<string, any> = {
    BarChart3,
    SearchCheck,
    Activity,
    Globe,
    CheckSquare,
    Layers
  };

  const typeColorMap: Record<string, string> = {
    'Client Project': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Concept Project': 'bg-blue-50 text-blue-700 border-blue-200',
    'Personal Project': 'bg-purple-50 text-purple-700 border-purple-200',
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-600 uppercase mb-3">
              <span>// PORTFOLIO</span>
              <span className="w-8 h-px bg-blue-600/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-base leading-relaxed">
            Real implementations, production-ready architecture, and concept prototypes across engineering, search, and business intelligence.
          </p>
        </div>

        {/* Project Cards Grid (Preview of first 4, with link to /work) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.slice(0, 4).map((project) => {
            const Icon = iconMap[project.imagePlaceholder.icon] || BarChart3;
            const badgeClass = typeColorMap[project.type] || 'bg-slate-100 text-slate-700 border-slate-200';

            return (
              <div
                key={project.id}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-slate-400/80 hover:shadow-premium overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Header / Mockup Banner */}
                <div className={`relative h-56 bg-gradient-to-br ${project.imagePlaceholder.gradient} p-6 flex flex-col justify-between overflow-hidden`}>
                  {/* Subtle decorative grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px]" />
                  
                  {/* Top Bar: Type badge & category */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border backdrop-blur-md ${badgeClass}`}>
                      {project.type}
                    </span>
                    <span className="text-xs font-medium text-slate-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Center Mockup Info Cards */}
                  <div className="relative z-10 grid grid-cols-3 gap-2.5 py-2">
                    {project.imagePlaceholder.previewMetrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-lg p-2.5 text-center"
                      >
                        <div className="text-[10px] text-slate-400 font-mono uppercase truncate">{metric.label}</div>
                        <div className="text-xs sm:text-sm font-bold text-white mt-0.5 truncate">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom bar indicator */}
                  <div className="relative z-10 flex items-center justify-between text-slate-400 text-xs">
                    <span className="font-mono text-[11px] flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-blue-400" />
                      {project.imagePlaceholder.mockupType.toUpperCase()} SYSTEM
                    </span>
                    <span className="text-[11px] text-slate-400">Architecture Verified</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {project.shortDescription}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-slate-600 font-mono">
                      Ref: {project.id.slice(0, 10)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Full Work Page */}
        <div className="mt-14 text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 shadow-xs transition-colors"
          >
            <span>Explore All Projects & Architecture Notes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
              <div>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  {selectedProject.type}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Overview</h4>
                <p className="text-slate-700 text-sm leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Architectural Highlights</h4>
                <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200 font-mono leading-relaxed">
                  {selectedProject.architectureNotes}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Core Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between rounded-b-2xl">
              <Link
                to={`/contact?project=${selectedProject.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <span>Discuss a Similar Build</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
