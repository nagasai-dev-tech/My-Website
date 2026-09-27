export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  type: 'Client Project' | 'Concept Project' | 'Personal Project';
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  imagePlaceholder: {
    gradient: string;
    icon: string;
    mockupType: 'dashboard' | 'code' | 'analytics' | 'web';
    previewMetrics: { label: string; value: string }[];
  };
  liveDemoUrl?: string;
  githubUrl?: string;
  architectureNotes: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'business-intelligence-dashboard',
    title: 'Enterprise Business Intelligence & KPI Dashboard',
    category: 'Data Analytics & BI',
    type: 'Concept Project',
    shortDescription: 'Interactive executive reporting interface unifying multi-channel sales, gross margins, and regional cohort metrics.',
    fullDescription: 'Designed as a comprehensive solution for mid-market leadership teams seeking real-time clarity. Consolidates multi-source transactional data into high-density interactive visual cards, custom DAX metrics, and drill-down filters.',
    technologies: ['Power BI', 'SQL', 'Python', 'DAX', 'Data Modeling', 'Excel Power Query'],
    features: [
      'Multi-currency revenue reconciliation & dynamic date filtering',
      'Cohort retention analysis with heat-mapped churn indicators',
      'Regional sales representative quota tracking and performance rankings',
      'Executive snapshot mode optimized for mobile & tablet presentation'
    ],
    imagePlaceholder: {
      gradient: 'from-blue-950 via-slate-900 to-indigo-950',
      icon: 'BarChart3',
      mockupType: 'dashboard',
      previewMetrics: [
        { label: 'Pipeline Velocity', value: 'Real-time' },
        { label: 'Data Sources', value: '4 Consolidated' },
        { label: 'Reporting Model', value: 'Star Schema' }
      ]
    },
    architectureNotes: 'Built around a Kimball star schema with clean dimension tables, pre-aggregated fact tables, and optimized DAX calculations to maintain sub-second visual refresh times.'
  },
  {
    id: 'seo-performance-engine',
    title: 'SEO Rank & Technical Audit Intelligence Platform',
    category: 'SEO & Growth',
    type: 'Personal Project',
    shortDescription: 'Technical crawler and rank tracking cockpit monitoring indexation status, canonical health, and keyword volatility.',
    fullDescription: 'A custom-built diagnostic tool that scrapes search result pages, evaluates Core Web Vitals across thousands of URLs, and alerts operators to critical indexing anomalies before traffic is impacted.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Search APIs', 'PostgreSQL', 'Node.js'],
    features: [
      'Automated daily rank tracking across target regional search markets',
      'Site-wide crawl audit detecting redirect loops and canonical mismatches',
      'SERP feature detection for featured snippets and local knowledge panels',
      'Automated email notification triggers upon sudden position drops'
    ],
    imagePlaceholder: {
      gradient: 'from-slate-900 via-blue-950 to-cyan-950',
      icon: 'SearchCheck',
      mockupType: 'analytics',
      previewMetrics: [
        { label: 'Audit Scope', value: 'Full URL Tree' },
        { label: 'Alert Latency', value: 'Automated Daily' },
        { label: 'Schema Engine', value: 'JSON-LD Validator' }
      ]
    },
    architectureNotes: 'Decoupled architecture using a background Node.js worker pool for asynchronous page crawling, caching results in PostgreSQL and rendering analytics via React Query.'
  },
  {
    id: 'saas-analytics-platform',
    title: 'Modern SaaS Subscription & Usage Analytics Portal',
    category: 'Full-Stack Development',
    type: 'Concept Project',
    shortDescription: 'End-to-end web application tracking monthly recurring revenue, active seat utilization, and API throughput.',
    fullDescription: 'A production-grade web application built to monitor product usage telemetry, subscription tier migrations, and API consumption with sub-second responsive UI states.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'REST APIs', 'JWT Auth'],
    features: [
      'Interactive time-series charting with customizable range buckets',
      'Role-based permissions with scoped administrative controls',
      'API rate limit monitoring and real-time error log streaming',
      'Exportable CSV and PDF compliance audit reports'
    ],
    imagePlaceholder: {
      gradient: 'from-indigo-950 via-slate-900 to-slate-950',
      icon: 'Activity',
      mockupType: 'dashboard',
      previewMetrics: [
        { label: 'UI Architecture', value: 'Modular React 19' },
        { label: 'Telemetry', value: 'Sub-second' },
        { label: 'Access Control', value: 'Role-Based RBAC' }
      ]
    },
    architectureNotes: 'Frontend architected with TypeScript and memoized state stores to ensure zero dropped frames during heavy data visualization updates.'
  },
  {
    id: 'modern-corporate-web-portal',
    title: 'Corporate Digital Identity & Lead Conversion Portal',
    category: 'Full-Stack Development',
    type: 'Client Project',
    shortDescription: 'Bespoke corporate website engineered for rapid load performance, brand credibility, and high-intent inquiry capture.',
    fullDescription: 'Developed for a boutique consulting practice requiring a high-credibility digital presence. Combines editorial typography, responsive layouts, interactive service calculators, and direct CRM form dispatching.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'SEO Optimization', 'Webhook APIs'],
    features: [
      'Lighthouse 98+ score across Performance, Accessibility, and SEO',
      'Custom interactive project scope and estimation questionnaire',
      'Automated email notification and CRM lead pipeline dispatching',
      'Full responsive tuning across desktop, tablet, and mobile breakpoints'
    ],
    imagePlaceholder: {
      gradient: 'from-slate-900 via-sky-950 to-slate-900',
      icon: 'Globe',
      mockupType: 'web',
      previewMetrics: [
        { label: 'Lighthouse Score', value: '98+ Global' },
        { label: 'Mobile Optimized', value: '100% Fluid' },
        { label: 'Form Dispatch', value: 'Encrypted Webhook' }
      ]
    },
    architectureNotes: 'Static-optimized asset bundling with responsive WebP image pipelines, deferred script execution, and strict CSP headers.'
  },
  {
    id: 'workflow-automation-tool',
    title: 'Custom Internal Operations & Asset Approval Web App',
    category: 'Full-Stack Development',
    type: 'Personal Project',
    shortDescription: 'Dedicated operational management tool replacing fragmented email attachments with staged workflow approvals.',
    fullDescription: 'A streamlined web application built to organize internal project milestones, file asset handoffs, and feedback loops between technical contractors and client stakeholders.',
    technologies: ['PHP', 'MySQL', 'React', 'Tailwind CSS', 'REST API'],
    features: [
      'Kanban milestone visual board with drag-and-drop state updates',
      'Asset versioning history with timestamped feedback annotations',
      'Client guest review links requiring no cumbersome account creation',
      'Automated milestone completion summaries and audit logs'
    ],
    imagePlaceholder: {
      gradient: 'from-blue-900 via-indigo-950 to-slate-900',
      icon: 'CheckSquare',
      mockupType: 'code',
      previewMetrics: [
        { label: 'Workflow Engine', value: 'Kanban & State' },
        { label: 'Storage Layer', value: 'Relational MySQL' },
        { label: 'Guest Access', value: 'Signed Magic Links' }
      ]
    },
    architectureNotes: 'Clean separation between PHP REST API endpoints and a React frontend, allowing independent horizontal scaling and easy schema migrations.'
  },
  {
    id: 'multi-channel-ecommerce-analytics',
    title: 'E-Commerce Marketing Attribution & Margin Engine',
    category: 'Data Analytics & BI',
    type: 'Concept Project',
    shortDescription: 'Analytical pipeline reconciling ad spend against actual order profitability to identify true blended return on investment.',
    fullDescription: 'Connects marketing ad platform figures directly with product cost-of-goods-sold (COGS) and shipping fees to reveal true net profit per acquired customer.',
    technologies: ['Python', 'Pandas', 'SQL', 'Power BI', 'Google Analytics 4'],
    features: [
      'True net profit calculation deducting product unit costs & shipping',
      'Blended ROAS vs channel-specific attribution comparative views',
      'Customer lifetime value progression curves over 30 to 180 days',
      'Scheduled weekly executive briefing exports'
    ],
    imagePlaceholder: {
      gradient: 'from-cyan-950 via-slate-900 to-blue-950',
      icon: 'TrendingUp',
      mockupType: 'analytics',
      previewMetrics: [
        { label: 'Attribution Logic', value: 'Blended + First-Touch' },
        { label: 'Profit Metric', value: 'Net Margin Post-COGS' },
        { label: 'Engine', value: 'Python ETL' }
      ]
    },
    architectureNotes: 'Automated Python extraction scripts normalize raw currency conversions, clean duplicate order IDs, and pipe verified records into an analytical relational datastore.'
  }
];
