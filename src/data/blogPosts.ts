import { BlogPost } from './blog/types';
import { technologyArticles } from './blog/technologyArticles';
import { seoArticles } from './blog/seoArticles';
import { dataArticles } from './blog/dataArticles';

export * from './blog/types';

// Harmonize legacy fields for backward compatibility while providing full publication fields
const normalizeArticles = (articles: BlogPost[]): BlogPost[] => {
  return articles.map((art) => {
    // If article already has structured content blocks, keep them; otherwise synthesize from legacy sections
    const legacyParagraphs = art.sections ? art.sections.flatMap((s) => s.paragraphs) : [];
    return {
      ...art,
      date: art.publishedAt,
      readTime: art.readingTime,
      content_legacy: legacyParagraphs,
    };
  });
};

export const blogPostsData: BlogPost[] = normalizeArticles([
  ...technologyArticles,
  ...seoArticles,
  ...dataArticles,
]);

export function getArticleBySlug(slug: string): BlogPost | undefined {
  return blogPostsData.find((p) => p.slug === slug);
}

export function getRelatedArticles(currentSlug: string, count = 3): BlogPost[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return blogPostsData.slice(0, count);

  return blogPostsData
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === current.category && b.category !== current.category) return -1;
      if (b.category === current.category && a.category !== current.category) return 1;
      // Prioritize shared tags
      const aShared = a.tags.filter((t) => current.tags.includes(t)).length;
      const bShared = b.tags.filter((t) => current.tags.includes(t)).length;
      return bShared - aShared;
    })
    .slice(0, count);
}

export function getFeaturedArticle(): BlogPost {
  const featured = blogPostsData.find((p) => p.featured);
  return featured || blogPostsData[0];
}

export default blogPostsData;
