export type BlogCategory = 'Technology' | 'SEO & Digital Marketing' | 'Data Analytics';

// ─── Rich Content Block System ───────────────────────────────────────────────

export type ContentBlockType =
  | 'p'         // paragraph
  | 'h2'        // H2 section heading (anchored, shown in TOC)
  | 'h3'        // H3 sub-heading
  | 'ul'        // unordered list
  | 'ol'        // ordered list
  | 'table'     // comparison / data table
  | 'callout'   // highlighted insight / tip / warning / strategy box
  | 'svg'       // embedded SVG diagram (referenced by key)
  | 'code'      // syntax-highlighted code block
  | 'quote'     // pull-quote / blockquote
  | 'checklist' // practical checklist
  | 'divider';  // visual section break

export interface ContentBlock {
  type: ContentBlockType;

  /** Anchor ID — used on h2/h3 for TOC navigation and smooth scrolling */
  id?: string;

  /** Primary text content — used by: p, h2, h3, quote, divider */
  text?: string;

  /** List items — used by: ul, ol, checklist */
  items?: string[];

  // ── Table ──────────────────────────────────────────────────────────────────
  tableCaption?: string;
  tableHeaders?: string[];
  tableRows?: string[][];

  // ── Callout ────────────────────────────────────────────────────────────────
  calloutVariant?: 'info' | 'tip' | 'warning' | 'insight' | 'strategy';
  calloutTitle?: string;
  calloutBody?: string;

  // ── SVG Diagram ────────────────────────────────────────────────────────────
  /** Key into the SVG visual registry (e.g. 'WebsiteArchitecture') */
  svgComponent?: string;
  svgCaption?: string;
  svgAlt?: string;

  // ── Code Block ────────────────────────────────────────────────────────────
  language?: string;
  code?: string;
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FAQItem {
  q: string;
  a: string;
}

// ─── Article CTA ─────────────────────────────────────────────────────────────

export interface BlogCTA {
  headline: string;
  body: string;
  buttonLabel: string;
  buttonHref: string;
}

// ─── Legacy Section & Visual types (kept for backward compatibility) ─────────

export interface ArticleVisualMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ArticleVisualStep {
  step: string;
  label: string;
  desc: string;
}

export interface ArticleVisualTable {
  headers: string[];
  rows: string[][];
}

export interface ArticleVisualNode {
  label: string;
  desc?: string;
  sub?: string;
  color?: string;
}

export interface ArticleVisual {
  type: 'flow' | 'table' | 'checklist' | 'callout' | 'svg' | 'architecture';
  title?: string;
  caption?: string;
  steps?: ArticleVisualStep[];
  table?: ArticleVisualTable;
  metrics?: ArticleVisualMetric[];
  nodes?: ArticleVisualNode[];
  callout?: {
    type: 'warning' | 'info' | 'tip';
    text: string;
  };
}

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  visual?: ArticleVisual;
}

// ─── Main BlogPost Type ───────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: BlogCategory;
  featured?: boolean;
  trending?: boolean;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  author: string;

  /** Short excerpt — shown on cards and as meta description */
  summary: string;

  tags: string[];

  featuredImage: {
    gradient: string;
    icon: string;
    altText: string;
    headline: string;
    subheadline: string;
    /** Real image path if cover exists */
    imageSrc?: string;
  };

  socialSummary: string;

  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical?: string;
  };

  /** Pulled out at top of article in a key-takeaways card */
  keyTakeaways: string[];

  /**
   * Full rich article content as an ordered array of typed blocks.
   * The renderer iterates this array and renders each block.
   * H2/H3 blocks with `id` are automatically extracted for the TOC.
   */
  content?: ContentBlock[];

  /** FAQ accordion shown near the end of the article */
  faq?: FAQItem[];

  /** Article-level CTA shown at the bottom */
  cta?: BlogCTA;

  /** Mid-article contextual internal-link callout */
  internalLink: {
    label: string;
    href: string;
    contextText: string;
  };

  // ── Legacy compat fields ──────────────────────────────────────────────────
  sections?: ArticleSection[];
  date?: string;
  readTime?: string;
  content_legacy?: string[];
}
