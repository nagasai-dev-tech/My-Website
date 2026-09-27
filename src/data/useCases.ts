export interface UseCaseItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'SEO & Growth' | 'Business Analytics' | 'Web Applications' | 'Automation';
  problem: string;
  approach: string;
  solution: string;
  technologies: string[];
  expectedBusinessValue: string[];
  ctaText: string;
  ctaLink: string;
}

export const useCasesData: UseCaseItem[] = [
  {
    id: 'seo-rank-tracking-dashboard',
    number: '01',
    title: 'SEO Rank Tracking & Search Intelligence Dashboard',
    subtitle: 'Automated monitoring of target keyword positions across competitive market segments.',
    category: 'SEO & Growth',
    problem: 'Marketing teams and agency leads spend hours manually typing target queries into search engines, recording positions in disconnected spreadsheets, and missing sudden drop-offs caused by algorithmic changes or competitor moves.',
    approach: 'Design an automated ingestion pipeline connected to search position APIs, schedule daily ranking scrapes across target geographic locations, and store time-series ranking history in a normalized database with custom alerting triggers.',
    solution: 'An interactive React-based dashboard visualizing daily keyword positions, volatility alerts, search intent tags, and SERP feature captures (snippets, local packs). Includes automated weekly executive PDF exports.',
    technologies: ['React', 'TypeScript', 'Search APIs', 'PostgreSQL', 'Tailwind CSS', 'Node.js', 'Cron Tasks'],
    expectedBusinessValue: [
      'Elimination of manual weekly rank logging hours',
      'Immediate notifications when target queries lose position',
      'Clear visibility into organic traffic correlation with keyword shifts',
      'Accurate historical data records to guide content creation'
    ],
    ctaText: 'Build an SEO System Like This →',
    ctaLink: '/contact?service=seo&case=rank-tracker'
  },
  {
    id: 'business-sales-analytics-dashboard',
    number: '02',
    title: 'Centralized Business Sales & Revenue Analytics Dashboard',
    subtitle: 'Consolidating fragmented spreadsheet data into real-time executive decision tools.',
    category: 'Business Analytics',
    problem: 'Company sales data resides across disconnected systems — Stripe exports, Shopify logs, manual Excel workbooks, and CRM lead sheets. Leadership cannot easily answer core questions about customer churn, average order value, or regional profitability without days of spreadsheet wrangling.',
    approach: 'Build an automated ETL (Extract, Transform, Load) workflow with Python and SQL to clean messy records, standardize date formats and customer IDs, and construct an analytical star-schema data model in Power BI.',
    solution: 'A unified interactive Power BI dashboard featuring drill-down filters by region, sales representative, product category, and customer cohort. Custom DAX measures calculate rolling revenue, gross margin, customer acquisition trends, and inventory velocity.',
    technologies: ['Power BI', 'SQL', 'Python', 'Pandas', 'Excel / Power Query', 'DAX Measures'],
    expectedBusinessValue: [
      'Single source of truth for revenue, eliminating discrepancy disputes',
      'Fast executive drill-downs during weekly leadership meetings',
      'Early detection of declining product categories and customer churn',
      'Time saved by replacing manual weekend report consolidation'
    ],
    ctaText: 'Streamline Your Business Data →',
    ctaLink: '/contact?service=data&case=sales-dashboard'
  },
  {
    id: 'lead-generation-website-system',
    number: '03',
    title: 'High-Converting B2B Lead Generation Website System',
    subtitle: 'Engineering websites that transform casual browser traffic into qualified inquiries.',
    category: 'Web Applications',
    problem: 'A business invests heavily in marketing campaigns and search visibility, yet its existing website suffers from slow load times, confusing layout, cluttered navigation, and generic contact forms, causing bounce rates over 70% and minimal form completions.',
    approach: 'Audit user journey drop-offs, rewrite the site structure around clear value propositions, implement lightning-fast serverless hosting with sub-second page loads, and construct interactive multi-step qualifying lead capture forms.',
    solution: 'A custom, clean responsive website built with React and Tailwind CSS. Features friction-free quotation selectors, instant input validation, webhook delivery to email and CRM, and semantic markup for maximum SEO discoverability.',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Form Validation', 'Webhook Integrations', 'Core Web Vitals'],
    expectedBusinessValue: [
      'Significant reduction in initial bounce rate and page load latency',
      'Higher form completion rates through guided multi-step interaction',
      'Seamless automated routing of leads directly into team inbox/CRM',
      'Strong brand credibility through modern, polished visual presentation'
    ],
    ctaText: 'Upgrade Your Conversion Engine →',
    ctaLink: '/contact?service=development&case=lead-gen'
  },
  {
    id: 'custom-business-operations-app',
    number: '04',
    title: 'Internal Operations & Workflow Automation Web Application',
    subtitle: 'Replacing messy email chains and manual paperwork with dedicated digital software.',
    category: 'Web Applications',
    problem: 'A growing business manages internal client intake, job progress tracking, and asset approvals entirely through cluttered email threads and shared drive folders, causing missed deadlines, lost files, and customer confusion.',
    approach: 'Map out the exact operational lifecycle from client onboarding to delivery. Engineer a bespoke role-based web app where both team members and clients can view status, upload assets, and trigger approval milestones.',
    solution: 'A custom web application with client authentication, role-based dashboards, Kanban order tracking, automated email alerts upon status changes, and exportable audit logs.',
    technologies: ['React', 'Node.js / PHP', 'PostgreSQL', 'Tailwind CSS', 'REST API', 'Role Auth'],
    expectedBusinessValue: [
      'Elimination of lost emails and duplicate client communication',
      'Total clarity on project stages across operational staff',
      'Professional client onboarding portal that impresses enterprise buyers',
      'Full administrative ownership of internal business workflow software'
    ],
    ctaText: 'Build Your Custom Web App →',
    ctaLink: '/contact?service=development&case=operations-app'
  },
  {
    id: 'marketing-attribution-roi-model',
    number: '05',
    title: 'Multi-Channel Marketing Attribution & ROI Analytics Model',
    subtitle: 'Connecting ad spend, organic clicks, and closed revenue into one transparent pipeline.',
    category: 'Business Analytics',
    problem: 'Marketing budgets are split across Google Ads, Meta campaigns, and organic SEO, but the business cannot reliably tell which channel drove high-ticket customer contracts versus cheap non-converting clicks.',
    approach: 'Harmonize campaign UTM data with backend CRM deal closures using Python and SQL to build a first-touch and multi-touch attribution model, factoring in customer conversion lag time.',
    solution: 'An executive analytics portal breaking down customer acquisition cost (CAC), return on ad spend (ROAS), and organic channel contribution over 30, 60, and 90-day purchase cycles.',
    technologies: ['SQL', 'Python', 'Power BI', 'Google Analytics 4', 'Excel Modeling'],
    expectedBusinessValue: [
      'Identification of underperforming ad spend for immediate reallocation',
      'Proof of organic SEO return on investment for long-term planning',
      'Confidence in scaling marketing budget without blind risk'
    ],
    ctaText: 'Quantify Your Marketing Returns →',
    ctaLink: '/contact?service=data&case=attribution-model'
  },
  {
    id: 'ecommerce-catalog-migration-engine',
    number: '06',
    title: 'E-Commerce Catalog Migration & Technical SEO Preservation',
    subtitle: 'Replatforming complex store structures while strictly safeguarding search equity.',
    category: 'SEO & Growth',
    problem: 'Migrating an established product catalog to a modern architecture often results in 404 broken links, destroyed Google indexing, and catastrophic loss of organic revenue.',
    approach: 'Conduct comprehensive pre-migration crawl audits, design automated 301 redirect map scripts, verify canonical tag hierarchies, and preserve URL structure wherever possible.',
    solution: 'A fully validated replatforming deployment with automated redirect testing, zero-downtime DNS transition, Schema product metadata integration, and post-launch crawl monitoring.',
    technologies: ['Technical SEO', 'Python Crawlers', 'Apache / Nginx Rewrites', 'JSON-LD', 'Search Console'],
    expectedBusinessValue: [
      'Zero loss of historical organic rankings and search authority',
      'Smooth customer transition without broken bookmarked links',
      'Improved crawl efficiency through streamlined taxonomy'
    ],
    ctaText: 'Protect Your Organic Search Equity →',
    ctaLink: '/contact?service=seo&case=migration'
  }
];
