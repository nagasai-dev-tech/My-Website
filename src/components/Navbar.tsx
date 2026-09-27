import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Exact navigation items as specified
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Insights', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-200/80 shadow-soft'
          : 'bg-white/80 backdrop-blur-sm py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LEFT: Custom Minimalist Geometric N Logo + Wordmark */}
          <Link
            to="/"
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="Nagasai Home"
          >
            {/* Custom Geometric N Logo Mark */}
            <div className="relative w-9 h-9 rounded-xl bg-slate-950 flex items-center justify-center shadow-xs group-hover:bg-slate-900 transition-colors">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Geometric N with subtle blue/indigo facet node */}
                <path
                  d="M6 19V5H9.5L14.5 13.5V5H18V19H14.5L9.5 10.5V19H6Z"
                  fill="currentColor"
                />
                <circle cx="18" cy="5" r="2" fill="#2563eb" />
              </svg>
            </div>

            {/* Wordmark + Descriptor */}
            <div className="flex flex-col">
              <span className="font-bold text-slate-950 text-base sm:text-lg tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                NAGASAI
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide mt-1 leading-none">
                Digital Solutions
              </span>
            </div>
          </Link>

          {/* RIGHT: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-150 relative ${
                    active
                      ? 'text-blue-600 bg-blue-50/70 font-semibold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-950 hover:bg-slate-900 active:scale-[0.98] shadow-xs hover:shadow-md transition-all duration-200 group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER / OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-50 md:hidden bg-slate-950/40 backdrop-blur-sm animate-fade-in">
          <div
            ref={mobileMenuRef}
            className="bg-white border-b border-slate-200 shadow-2xl px-5 pt-4 pb-8 max-h-[calc(100vh-65px)] overflow-y-auto"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3.5 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                      active
                        ? 'text-blue-600 bg-blue-50 font-semibold'
                        : 'text-slate-800 hover:bg-slate-50 hover:text-slate-950'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-base font-semibold text-white bg-slate-950 hover:bg-slate-900 shadow-md transition-colors"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
