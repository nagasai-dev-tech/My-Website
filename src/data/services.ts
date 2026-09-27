export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  highlights: string[];
  capabilities: {
    category: string;
    items: string[];
  }[];
  techStack: string[];
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'full-stack-development',
    number: '01',
    title: 'Full-Stack Development',
    subtitle: 'High-performance web apps, clean APIs, and modern responsive interfaces.',
    tagline: 'Modern engineering that scales with your business',
    description: 'I design and build end-to-end web applications and high-conversion business websites with clean code, robust architectures, and lightning-fast loading speeds.',
    ctaText: 'Build Your Product →',
    ctaLink: '/contact?service=development',
    highlights: [
      'Business Websites',
      'Web Applications',
      'React Applications',
      'PHP Development',
      'API Integration',
      'Database Integration',
      'Custom Dashboards',
      'WordPress Development',
      'Responsive UI Development',
      'Website Optimization'
    ],
    capabilities: [
      {
        category: 'Frontend Engineering',
        items: ['Component-driven React/TypeScript', 'Modern state architecture', 'Accessible, mobile-first design', 'Core Web Vitals & speed optimization']
      },
      {
        category: 'Backend & Data Layers',
        items: ['RESTful & GraphQL API integration', 'PHP & Node server logic', 'Relational SQL & NoSQL data schemas', 'Secure auth & session handling']
      },
      {
        category: 'CMS & Custom Workflows',
        items: ['Custom WordPress themes & headless CMS', 'Admin dashboards & operational tooling', 'Third-party SaaS & payment webhooks', 'Automated CI/CD build scripts']
      }
    ],
    techStack: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'PHP', 'WordPress', 'REST APIs', 'Node.js', 'PostgreSQL', 'MySQL'],
    icon: 'Code2'
  },
  {
    id: 'seo-digital-marketing',
    number: '02',
    title: 'SEO & Digital Marketing',
    subtitle: 'Technical SEO, search engine architecture, and sustainable organic traffic.',
    tagline: 'Visibility built on technical excellence, not guesswork',
    description: 'I ensure your digital platform is discoverable, correctly indexed, and optimized to capture high-intent organic search traffic that converts into paying clients.',
    ctaText: 'Improve Your Visibility →',
    ctaLink: '/contact?service=seo',
    highlights: [
      'Technical SEO',
      'On-Page SEO',
      'Keyword Research',
      'Content Optimization',
      'Website SEO Audits',
      'Search Performance Analysis',
      'SEO Reporting',
      'Organic Growth Strategy',
      'Digital Marketing Analytics'
    ],
    capabilities: [
      {
        category: 'Technical Architecture',
        items: ['Crawlability & indexing health', 'Schema.org JSON-LD structured data', 'XML sitemaps & robots.txt directives', 'Canonicalization & duplicate resolution']
      },
      {
        category: 'On-Page & Keyword Strategy',
        items: ['Search intent & keyword clustering', 'Semantic heading hierarchy (H1-H4)', 'Meta titles & high-CTR descriptions', 'Internal linking graph architecture']
      },
      {
        category: 'Measurement & Reporting',
        items: ['Google Search Console auditing', 'Core Web Vitals diagnostic fixes', 'Conversion event tracking setup', 'Transparent monthly organic reports']
      }
    ],
    techStack: ['Google Search Console', 'Screaming Frog', 'Ahrefs / SEMrush', 'Schema.org', 'Google Analytics 4', 'Lighthouse', 'PageSpeed Insights'],
    icon: 'SearchCheck'
  },
  {
    id: 'data-analytics',
    number: '03',
    title: 'Data Analytics & BI',
    subtitle: 'Centralized dashboards, SQL analysis, and operational business intelligence.',
    tagline: 'Transforming scattered spreadsheets into strategic clarity',
    description: 'I bridge the gap between raw data and executive decision-making, setting up automated pipelines, clean data models, and interactive visual dashboards.',
    ctaText: 'Turn Data Into Insights →',
    ctaLink: '/contact?service=data',
    highlights: [
      'Data Cleaning',
      'SQL Analysis',
      'Excel Analytics',
      'Power BI Dashboards',
      'Data Visualization',
      'Business Intelligence',
      'KPI Reporting',
      'Marketing Analytics',
      'Sales Analytics',
      'Automated Reports'
    ],
    capabilities: [
      {
        category: 'Data Modeling & ETL',
        items: ['Multi-source spreadsheet consolidation', 'SQL queries, joins & aggregations', 'Data cleaning & normalization with Python/Pandas', 'Automated recurring refresh pipelines']
      },
      {
        category: 'Interactive Dashboards',
        items: ['Custom Power BI executive reports', 'DAX measures & calculated columns', 'Cohort, churn & retention visualizations', 'Real-time sales & marketing KPI tracking']
      },
      {
        category: 'Actionable Intelligence',
        items: ['Customer lifetime value (LTV) models', 'Traffic-to-revenue funnel analysis', 'Inventory & operations forecasting', 'Exportable executive summary decks']
      }
    ],
    techStack: ['SQL', 'Power BI', 'Python', 'Pandas', 'NumPy', 'Excel / Power Query', 'DAX', 'PostgreSQL'],
    icon: 'BarChart3'
  }
];
