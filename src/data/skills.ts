export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. 'Advanced', 'Proficient', 'Production-Tested'
    purpose: string;
    tag: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'development',
    title: 'Full-Stack Development',
    badge: 'Code & Architecture',
    description: 'Modern component-driven engineering, clean modular code, responsive interfaces, and scalable API integrations.',
    skills: [
      { name: 'React', level: 'Production-Tested', purpose: 'Component-based UI architectures, hooks, state machines & routing', tag: 'Frontend' },
      { name: 'JavaScript / TypeScript', level: 'Advanced', purpose: 'Type-safe client logic, async workflows, and modern ESNext standards', tag: 'Core' },
      { name: 'HTML5 & CSS3', level: 'Advanced', purpose: 'Semantic accessibility, responsive grid/flexbox layouts & modern CSS variables', tag: 'Styling' },
      { name: 'Tailwind CSS', level: 'Advanced', purpose: 'Rapid, maintainable utility-first styling with zero runtime overhead', tag: 'Styling' },
      { name: 'PHP', level: 'Production-Tested', purpose: 'Backend server logic, CMS integrations, custom templating & REST controllers', tag: 'Backend' },
      { name: 'WordPress', level: 'Proficient', purpose: 'Custom theme development, headless CMS integrations & performant plugins', tag: 'CMS' },
      { name: 'REST APIs', level: 'Advanced', purpose: 'Robust endpoint design, webhooks, JSON schemas & secure client authentication', tag: 'Integration' }
    ]
  },
  {
    id: 'data',
    title: 'Data Analytics & Business Intelligence',
    badge: 'Insights & Modeling',
    description: 'Transforming messy, disparate business spreadsheets into reliable analytical models and executive visual dashboards.',
    skills: [
      { name: 'SQL', level: 'Advanced', purpose: 'Complex queries, window functions, relational joins & schema architecture', tag: 'Database' },
      { name: 'Power BI', level: 'Advanced', purpose: 'Interactive executive reporting, star schemas, dynamic filters & drill-downs', tag: 'BI Tool' },
      { name: 'DAX', level: 'Proficient', purpose: 'Time-intelligence calculations, custom KPIs & dynamic measure modeling', tag: 'Measures' },
      { name: 'Python', level: 'Production-Tested', purpose: 'Data automation pipelines, web scraping, statistical parsing & custom ETL', tag: 'Data Science' },
      { name: 'Pandas & NumPy', level: 'Proficient', purpose: 'Data cleansing, dataframe normalization, matrix math & automated restructuring', tag: 'Libraries' },
      { name: 'Excel & Power Query', level: 'Advanced', purpose: 'M-language automation, complex spreadsheet formulas & rapid financial prototypes', tag: 'Spreadsheets' }
    ]
  },
  {
    id: 'seo',
    title: 'SEO & Search Strategy',
    badge: 'Visibility & Crawling',
    description: 'Engineering websites that search engines can easily crawl, understand, and prioritize for high-intent queries.',
    skills: [
      { name: 'Technical SEO', level: 'Advanced', purpose: 'Crawl budget optimization, canonical tags, redirects & Core Web Vitals', tag: 'Architecture' },
      { name: 'On-Page SEO', level: 'Advanced', purpose: 'Semantic heading hierarchy, content intent mapping & internal link structuring', tag: 'Content' },
      { name: 'Keyword Research', level: 'Proficient', purpose: 'Search volume analysis, commercial intent clustering & competitor gap audits', tag: 'Strategy' },
      { name: 'Google Search Console', level: 'Advanced', purpose: 'Indexation monitoring, coverage diagnostics, sitemap verification & crawl alerts', tag: 'Diagnostics' },
      { name: 'Google Analytics 4', level: 'Proficient', purpose: 'Custom conversion events, user journey tracking & attribution models', tag: 'Analytics' },
      { name: 'Schema & Structured Data', level: 'Advanced', purpose: 'JSON-LD rich snippets (Person, LocalBusiness, FAQ, Product, Article)', tag: 'Semantics' }
    ]
  }
];
