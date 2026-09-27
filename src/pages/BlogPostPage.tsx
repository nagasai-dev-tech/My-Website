import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { getArticleBySlug, getRelatedArticles } from '../data/blogPosts';
import { ArticleFeatureBanner } from '../components/blog/ArticleFeatureBanner';
import { ArticleVisualRenderer } from '../components/blog/ArticleVisualRenderer';
import { BlogArticleRenderer } from '../components/blog/BlogArticleRenderer';
import { BlogFaqAccordion } from '../components/blog/BlogFaqAccordion';
import { BlogCtaCard } from '../components/blog/BlogCtaCard';
import { ArticleSocialShare } from '../components/blog/ArticleSocialShare';
import { TableOfContents } from '../components/blog/TableOfContents';
import {
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  BookOpen
} from 'lucide-react';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  const post = slug ? getArticleBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedArticles(post.slug, 3);

  // Dynamic JSON-LD Structured Data for Article & Breadcrumbs
  useEffect(() => {
    const scriptId = 'article-schema-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `https://nagasai.dev/blog/${post.slug}#article`,
          "headline": post.title,
          "description": post.summary,
          "image": post.featuredImage.imageSrc
            ? `https://nagasai.dev${post.featuredImage.imageSrc}`
            : `https://nagasai.dev/images/og-preview.png`,
          "author": {
            "@type": "Person",
            "name": "Nagasai",
            "jobTitle": "Full-Stack Developer, SEO & Data Analytics Consultant",
            "url": "https://nagasai.dev/about"
          },
          "publisher": {
            "@type": "Person",
            "name": "Nagasai",
            "url": "https://nagasai.dev"
          },
          "datePublished": post.publishedAt,
          "dateModified": post.updatedAt,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://nagasai.dev/blog/${post.slug}`
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `https://nagasai.dev/blog/${post.slug}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://nagasai.dev"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Insights",
              "item": "https://nagasai.dev/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": post.category,
              "item": `https://nagasai.dev/blog?category=${encodeURIComponent(post.category)}`
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": post.title
            }
          ]
        }
      ]
    };

    script.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [post]);

  const categoryColor: Record<string, string> = {
    'Technology': 'bg-blue-50 text-blue-700 border-blue-200',
    'SEO & Digital Marketing': 'bg-indigo-50 text-indigo-700 border-indigo-200',
    'Data Analytics': 'bg-cyan-50 text-cyan-800 border-cyan-200',
  };

  const badgeClass = categoryColor[post.category] || 'bg-slate-100 text-slate-700 border-slate-200';

  return (
    <>
      <SeoMeta
        title={`${post.title} — Nagasai`}
        description={post.summary}
      />

      <main className="pt-32 pb-24 bg-white">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* BREADCRUMB NAVIGATION */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumbs">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link to="/blog" className="hover:text-blue-600 transition-colors">Insights</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-700 font-semibold">{post.category}</span>
          </nav>

          {/* ARTICLE HEADER */}
          <header className="max-w-4xl mb-10">
            {/* Category badge & trending pill */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md border ${badgeClass}`}>
                {post.category}
              </span>
              {post.trending && (
                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-blue-600 text-white">
                  <Sparkles className="w-3 h-3 text-cyan-300" />
                  TRENDING
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-5">
              {post.title}
            </h1>

            {/* Subtitle / Excerpt */}
            <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed mb-6">
              {post.summary}
            </p>

            {/* Author, Date & Reading Time Row */}
            <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold text-xs">
                  N
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Nagasai</span>
                  <span className="text-slate-500 text-[11px]">Full-Stack · SEO · Data</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Published: {post.publishedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {post.readingTime}
                </span>
              </div>
            </div>
          </header>

          {/* 16:9 EDITORIAL FEATURE BANNER */}
          <div className="mb-14 max-w-5xl">
            <ArticleFeatureBanner
              category={post.category}
              headline={post.featuredImage.headline}
              subheadline={post.featuredImage.subheadline}
              gradient={post.featuredImage.gradient}
              iconName={post.featuredImage.icon}
              altText={post.featuredImage.altText}
              trending={post.trending}
              imageSrc={post.featuredImage.imageSrc}
            />
          </div>

          {/* TWO-COLUMN LAYOUT: Content (Left 8 cols) + Sticky Sidebar (Right 4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: Main Editorial Content */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* KEY TAKEAWAYS BOX */}
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Key Executive Takeaways
                  </div>
                  <ul className="space-y-3">
                    {post.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* RICH EDITORIAL CONTENT */}
              {post.content && post.content.length > 0 ? (
                <BlogArticleRenderer blocks={post.content} />
              ) : post.sections && post.sections.length > 0 ? (
                /* Legacy Sections fallback */
                <div className="space-y-12">
                  {post.sections.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-32">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-4">
                        {section.heading}
                      </h2>
                      
                      <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                        {section.paragraphs.map((p, pIdx) => (
                          <p key={pIdx}>
                            {p}
                          </p>
                        ))}
                      </div>

                      {section.visual && (
                        <ArticleVisualRenderer visual={section.visual} />
                      )}
                    </section>
                  ))}
                </div>
              ) : null}

              {/* CONTEXTUAL INTERNAL LINKING CALLOUT */}
              {post.internalLink && (
                <div className="my-10 p-6 rounded-2xl bg-blue-50/60 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest mb-1">
                      Related Implementation Service
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {post.internalLink.contextText}
                    </p>
                  </div>
                  <Link
                    to={post.internalLink.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shrink-0 transition-colors shadow-xs"
                  >
                    <span>{post.internalLink.label}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

              {/* FAQ ACCORDION */}
              {post.faq && post.faq.length > 0 && (
                <BlogFaqAccordion items={post.faq} />
              )}

              {/* ARTICLE CTA CARD */}
              {post.cta && (
                <BlogCtaCard cta={post.cta} />
              )}

              {/* TAGS ROW */}
              <div className="pt-6 border-t border-slate-200">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Article Topics:
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog?tag=${tag}`}
                      className="px-3 py-1 text-xs font-mono bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 rounded-md border border-slate-200 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* SOCIAL SHARING SECTION */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Share this publication:
                </div>
                <ArticleSocialShare
                  url={`/blog/${post.slug}`}
                  title={post.title}
                  summary={post.socialSummary}
                />
              </div>

              {/* AUTHOR BOX */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-md">
                  N
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="text-xs font-mono text-blue-400 font-semibold mb-1">
                    WRITTEN BY
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Nagasai</h3>
                  <div className="text-xs font-mono text-slate-400 mb-3">
                    Full-Stack Developer · SEO · Data Analytics
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    I build digital solutions that help businesses build, grow, and understand their operations. Operating at the intersection of modern React engineering, technical search visibility, and business intelligence.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Discuss a project with Nagasai</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Sticky Sidebar (TOC + Action Card) */}
            <aside className="lg:col-span-4 sticky top-28 space-y-6">
              
              {/* TABLE OF CONTENTS */}
              <TableOfContents sections={post.sections} blocks={post.content} />

              {/* DIRECT START A PROJECT CARD */}
              <div className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-800 shadow-xl">
                <span className="text-[11px] font-mono text-blue-400 uppercase tracking-widest block mb-2">
                  DIRECT CONSULTATION
                </span>
                <h4 className="text-base font-bold text-white mb-2">
                  Need a similar system engineered for your business?
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  Let's discuss your web architecture, technical SEO audit, or custom Power BI dashboards.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 transition-colors"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* ARTICLE SUMMARY QUICK CARD */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  <span>Publication Metadata</span>
                </div>
                <div className="text-xs text-slate-600 space-y-1.5 font-mono">
                  <div>Updated: {post.updatedAt}</div>
                  <div>Length: {post.readingTime}</div>
                  <div>Format: Editorial Analysis &amp; Diagrams</div>
                </div>
              </div>

            </aside>

          </div>

          {/* RELATED ARTICLES FOOTER (Continue Reading) */}
          {relatedPosts.length > 0 && (
            <div className="mt-24 pt-14 border-t border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-1">
                    RECOMMENDED READING
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                    Continue Reading
                  </h3>
                </div>
                <Link
                  to="/blog"
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 font-mono hidden sm:inline"
                >
                  View all 30 articles →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/blog/${rel.slug}`}
                    className="p-6 rounded-2xl border border-slate-200 hover:border-slate-400 hover:shadow-xs transition-all bg-white flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                        <span className="text-blue-600 font-semibold uppercase">{rel.category}</span>
                        <span className="text-slate-400">{rel.readingTime}</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {rel.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-mono">
                      <span>{rel.publishedAt}</span>
                      <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </article>
      </main>
    </>
  );
}

export default BlogPostPage;
