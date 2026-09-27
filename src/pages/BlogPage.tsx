import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';
import { blogPostsData, getFeaturedArticle } from '../data/blogPosts';
import { BlogCategory } from '../data/blog/types';
import { ArticleFeatureBanner } from '../components/blog/ArticleFeatureBanner';
import { Search, Clock, Calendar, ArrowRight, Tag, BookOpen, Filter, Sparkles } from 'lucide-react';

export function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const categories: string[] = ['All', 'Technology', 'SEO & Digital Marketing', 'Data Analytics'];

  const categoryColor: Record<string, string> = {
    'Technology': 'bg-blue-50 text-blue-700 border-blue-200',
    'SEO & Digital Marketing': 'bg-indigo-50 text-indigo-700 border-indigo-200',
    'Data Analytics': 'bg-cyan-50 text-cyan-800 border-cyan-200',
  };

  const featuredPost = getFeaturedArticle();

  // Filtered post catalog
  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCat = activeCategory === 'All' || post.category === activeCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      !searchTerm ||
      post.title.toLowerCase().includes(searchLower) ||
      post.summary.toLowerCase().includes(searchLower) ||
      post.tags.some((t) => t.toLowerCase().includes(searchLower));
    return matchesCat && matchesTag && matchesSearch;
  });

  return (
    <>
      <SeoMeta
        title="Insights & Articles — Technology, SEO & Data Analytics"
        description="Practical ideas about technology, SEO, and business data — explained simply and built around real business problems. By Nagasai."
      />

      <main className="pt-32 pb-24 bg-white">
        {/* EDITORIAL PUBLICATION HERO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-600 uppercase mb-3">
              <span>// PUBLICATION & KNOWLEDGE BASE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight mb-4">
              Insights
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Practical ideas about technology, SEO and data — explained simply and built around real business problems.
            </p>
          </div>

          {/* FEATURED ARTICLE SPOTLIGHT */}
          {activeCategory === 'All' && !searchTerm && !selectedTag && featuredPost && (
            <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual Banner on Left (6 cols) */}
                <div className="lg:col-span-6">
                  <Link to={`/blog/${featuredPost.slug}`}>
                    <ArticleFeatureBanner
                      category={featuredPost.category}
                      headline={featuredPost.featuredImage.headline}
                      subheadline={featuredPost.featuredImage.subheadline}
                      gradient={featuredPost.featuredImage.gradient}
                      iconName={featuredPost.featuredImage.icon}
                      altText={featuredPost.featuredImage.altText}
                      trending={featuredPost.trending}
                      imageSrc={featuredPost.featuredImage.imageSrc}
                    />
                  </Link>
                </div>

                {/* Content Details on Right (6 cols) */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-600 text-white">
                        FEATURED ESSAY
                      </span>
                      <span className="text-xs text-slate-600 font-mono flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredPost.readingTime}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3 hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {featuredPost.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono bg-white text-slate-700 rounded-md border border-slate-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-950 hover:bg-slate-900 transition-all group"
                    >
                      <span>Read Full Essay</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* SEARCH & CATEGORY FILTERING BAR */}
          <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search across 30 technical articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-600 transition-colors"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Pillar:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSelectedTag(null);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* Active Tag Filter Pill Indicator */}
          {selectedTag && (
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xs text-slate-500 font-mono">Filtering by tag:</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-mono text-xs font-semibold border border-blue-200">
                #{selectedTag}
                <button
                  onClick={() => setSelectedTag(null)}
                  className="hover:text-blue-900 ml-1 text-xs font-bold"
                  aria-label="Remove tag filter"
                >
                  ×
                </button>
              </span>
            </div>
          )}
        </section>

        {/* ARTICLES CATALOG GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const badgeClass = categoryColor[post.category] || 'bg-slate-100 text-slate-700 border-slate-200';
              return (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-slate-400 hover:shadow-premium transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* 16:9 Feature Banner Preview */}
                  <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
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
                  </Link>

                  {/* Card Content Area */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta header row */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded border ${badgeClass}`}>
                          {post.category}
                        </span>
                        <span className="text-xs text-slate-600 flex items-center gap-1 font-mono">
                          <Clock className="w-3 h-3" />
                          {post.readingTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5 leading-snug tracking-tight">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                        {post.summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {post.tags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-600 border border-slate-100 transition-colors"
                          >
                            #{tag}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Footer Row */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-mono flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishedAt}
                      </span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-800 transition-colors"
                      >
                        <span>Read article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200">
              <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">No articles found</h3>
              <p className="text-slate-600 text-sm mb-4">
                No essays match your current search and filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                  setSelectedTag(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>

      </main>
    </>
  );
}

export default BlogPage;
