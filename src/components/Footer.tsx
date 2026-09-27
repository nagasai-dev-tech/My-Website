import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Code2, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  N
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-tight">Nagasai</span>
                  <span className="text-xs text-slate-400 font-mono">Freelance Technology Studio</span>
                </div>
              </Link>
              
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                Full-Stack Developer • SEO & Digital Marketing • Data Analytics & Business Intelligence. Helping startups and modern businesses turn ideas and data into growth engines.
              </p>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for select freelance projects & consulting</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-400 hover:text-white border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="Send direct message"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/work" className="text-slate-400 hover:text-white transition-colors">Work & Projects</Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-slate-400 hover:text-white transition-colors">Use Cases</Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors">Insights</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Core Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services#development" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-blue-500" />
                  Full-Stack Web Apps
                </Link>
              </li>
              <li>
                <Link to="/services#development" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-blue-500" />
                  Custom Business Websites
                </Link>
              </li>
              <li>
                <Link to="/services#seo" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-indigo-500" />
                  Technical SEO Audits
                </Link>
              </li>
              <li>
                <Link to="/services#seo" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-indigo-500" />
                  Search Console Architecture
                </Link>
              </li>
              <li>
                <Link to="/services#data" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-cyan-500" />
                  Power BI & SQL Dashboards
                </Link>
              </li>
              <li>
                <Link to="/services#data" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-cyan-500" />
                  Automated ETL Pipelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Teaser (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
                Inquiries
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Have a project specification or immediate requirement?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Send a message</span>
                <span>→</span>
              </Link>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-900">
              <button
                onClick={scrollToTop}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-400 hover:text-white border border-slate-800 transition-colors"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Tech Stack Badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-mono">
          <div>
            © {new Date().getFullYear()} Nagasai. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React 19, TypeScript & Tailwind</span>
            <span>•</span>
            <span>Zero Fake Reviews</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
