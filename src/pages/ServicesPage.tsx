import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { servicesData } from '../data/services';
import { Code2, SearchCheck, BarChart3, Check, ArrowRight, Layers, Cpu, ShieldCheck, ChevronDown } from 'lucide-react';

export function ServicesPage() {
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const faqs = [
    {
      q: 'Do you work with existing codebases or only build from scratch?',
      a: 'I work with both. Whether you need a ground-up web application, a performance and SEO overhaul of an existing React/PHP platform, or custom SQL data pipelines connected to existing database tables, I can audit the existing setup and execute targeted improvements.'
    },
    {
      q: 'How do you handle project communication and milestones?',
      a: 'Communication is structured and transparent. We align on a milestone roadmap before beginning, communicate via Slack, email, or scheduled async Loom/video syncs, and you receive functional staging URLs to test features in real-time as they are completed.'
    },
    {
      q: 'Can you provide ongoing support, hosting maintenance, or SEO retainer work?',
      a: 'Yes. For clients requiring ongoing technical stewardship, monthly SEO rank monitoring, or continuous Power BI updates, I offer focused retainer agreements tailored to your operating cadence.'
    },
    {
      q: 'What is your typical turnaround time for a project?',
      a: 'Timelines vary based on scope: a high-converting business website typically takes 2-3 weeks, an in-depth technical SEO audit & remediation plan takes 1-2 weeks, and a full-stack web app or complex Power BI analytics model takes 3-6 weeks.'
    }
  ];

  return (
    <>
      <SeoMeta
        title="Services — Full-Stack Development, SEO & Data Analytics"
        description="Explore detailed service offerings in Full-Stack Web Development, Technical SEO & Digital Marketing, and Data Analytics & BI."
      />

      <main className="pt-32 pb-24 bg-white">
        {/* Page Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-600 uppercase mb-3">
              <span>// SERVICES & CAPABILITIES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight mb-6">
              Engineering, Search & Analytics Solutions
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Every business requires a strong digital foundation: software that functions reliably, search architecture that attracts high-intent visitors, and analytics that guide commercial decisions.
            </p>
          </div>

          {/* Quick jump navigation */}
          <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-slate-200">
            <a
              href="#full-stack-development"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              01. Full-Stack Development
            </a>
            <a
              href="#seo-digital-marketing"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              02. SEO & Digital Marketing
            </a>
            <a
              href="#data-analytics"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              03. Data Analytics & BI
            </a>
          </div>
        </section>

        {/* Detailed Service Sections */}
        <div className="space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {servicesData.map((service, index) => {
            const isAlt = index % 2 === 1;
            return (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-32 p-8 sm:p-12 rounded-3xl bg-slate-50/70 border border-slate-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  
                  {/* Left Column: Overview & CTAs */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl font-mono font-bold text-blue-600">
                          {service.number}
                        </span>
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                          {service.tagline}
                        </span>
                      </div>

                      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
                        {service.title}
                      </h2>

                      <p className="text-slate-700 text-base leading-relaxed mb-6">
                        {service.subtitle}
                      </p>

                      <p className="text-slate-600 text-sm leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {/* Tech stack badges */}
                      <div className="mb-8">
                        <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                          Technologies Used:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {service.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 text-xs font-mono bg-white text-slate-800 border border-slate-200 rounded-md font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <Link
                        to={service.ctaLink}
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all group"
                      >
                        <span>{service.ctaText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Capabilities Breakdown Grid */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-blue-600" />
                        Comprehensive Capability Breakdown
                      </h3>

                      <div className="space-y-6">
                        {service.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="pb-5 border-b border-slate-100 last:border-0 last:pb-0">
                            <h4 className="text-sm font-bold text-slate-900 mb-3">
                              {cap.category}
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                              {cap.items.map((item, iIdx) => (
                                <li key={iIdx} className="flex items-center gap-2">
                                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specific Deliverables List */}
                    <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                      <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-2">
                        Common Project Deliverables:
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs text-slate-700">
                        {service.highlights.map((h, hIdx) => (
                          <span key={hIdx} className="bg-white px-2.5 py-1 rounded-md border border-blue-200/60 font-medium">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </section>
            );
          })}
        </div>

        {/* FAQs Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Clear answers regarding engagements, workflows, and collaboration.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                      openFaq === fIdx ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {openFaq === fIdx && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="mt-16 text-center">
            <p className="text-slate-600 text-sm mb-4">
              Have a question not listed here?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 transition-colors"
            >
              <span>Ask a Specific Question</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
