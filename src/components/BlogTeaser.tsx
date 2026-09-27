import { Link } from 'react-router-dom';
import { blogPostsData } from '../data/blogPosts';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';

export function BlogTeaser() {
  const categoryColor: Record<string, string> = {
    'Development': 'bg-blue-50 text-blue-700 border-blue-200',
    'SEO & Growth': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Data & BI': 'bg-indigo-50 text-indigo-700 border-indigo-200',
    'AI & Technology': 'bg-purple-50 text-purple-700 border-purple-200',
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-600 uppercase mb-3">
              <span>// ARTICLES & THINKING</span>
              <span className="w-8 h-px bg-blue-600/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Latest Insights
            </h2>
          </div>
          <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-base">
            Technical guides, architectural patterns, and business perspectives on web development, SEO, and data analysis.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.slice(0, 3).map((post) => {
            const badgeClass = categoryColor[post.category] || 'bg-slate-100 text-slate-700 border-slate-200';
            return (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-premium transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-7">
                  {/* Category and Reading Time */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border ${badgeClass}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-600 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Summary */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {post.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-100"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-7 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-mono flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Articles Link */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors hover:underline"
          >
            <span>Explore all insights across Development, SEO, Data & AI</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
