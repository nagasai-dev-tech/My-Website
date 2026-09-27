import { Code2, Search, BarChart3, Cpu, LineChart, Globe, Database, Layers } from 'lucide-react';

export function CapabilityStrip() {
  const capabilities = [
    { label: 'WEB DEVELOPMENT', icon: Code2 },
    { label: 'SEO STRATEGY', icon: Search },
    { label: 'DATA ANALYTICS', icon: BarChart3 },
    { label: 'AUTOMATION & WORKFLOWS', icon: Cpu },
    { label: 'BUSINESS INTELLIGENCE', icon: LineChart },
    { label: 'RESPONSIVE WEB APPS', icon: Globe },
    { label: 'SQL & DATA MODELING', icon: Database },
    { label: 'API ARCHITECTURE', icon: Layers },
  ];

  return (
    <div className="w-full bg-slate-950 text-white py-4 sm:py-5 border-y border-slate-800 overflow-hidden relative">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-8 sm:space-x-12 items-center">
        {/* Repeating capability items */}
        {[...capabilities, ...capabilities].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse-subtle" />
              <Icon className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-mono font-semibold tracking-widest whitespace-nowrap">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
