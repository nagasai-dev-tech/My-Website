import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { ArrowRight, Code2, SearchCheck, BarChart3, Check } from 'lucide-react';

export function ServicesOverview() {
  const iconMap: Record<string, any> = {
    Code2,
    SearchCheck,
    BarChart3,
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-600 uppercase mb-3">
              <span>// SERVICES</span>
              <span className="w-8 h-px bg-blue-600/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              What I Can Help You Build
            </h2>
          </div>
          <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-base leading-relaxed">
            Three interconnected disciplines engineered to deliver high-converting web products, sustained search traffic, and clear business intelligence.
          </p>
        </div>

        {/* 3 Core Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-500/50 hover:shadow-premium p-8 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Badge & Number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-mono font-bold text-slate-200 group-hover:text-blue-200 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-blue-600/90 font-semibold uppercase tracking-wider mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="pt-4 border-t border-slate-100 mb-6">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Core Offerings:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {service.techStack.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.techStack.length > 5 && (
                      <span className="px-1.5 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-500">
                        +{service.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={service.ctaLink}
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl text-sm font-semibold text-slate-900 bg-slate-50 hover:bg-blue-600 hover:text-white border border-slate-200/90 hover:border-transparent transition-all duration-200 group/btn"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Detailed Link */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            <span>View deep-dive capabilities and breakdown</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
