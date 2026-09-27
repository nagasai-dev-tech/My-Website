import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MessageSquare, Sparkles } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-950 text-white p-8 sm:p-14 lg:p-16 overflow-hidden border border-slate-800 shadow-2xl">
          
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Freelance Collaboration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Ready to Build Something Exceptional for Your Business?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl">
              Whether you need a full-stack web application, a technical SEO overhaul, or an automated business intelligence dashboard, I am ready to help you plan and execute it.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-slate-950 bg-white hover:bg-slate-100 shadow-md transition-all group"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/use-cases"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors"
              >
                <span>Browse Practical Solutions</span>
              </Link>
            </div>

            {/* Micro reassurance notes */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                No Agency Middlemen
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Transparent Milestones
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Direct Communication
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
