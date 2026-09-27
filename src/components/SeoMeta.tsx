import { useEffect } from 'react';

interface SeoMetaProps {
  title: string;
  description: string;
}

export function SeoMeta({ title, description }: SeoMetaProps) {
  useEffect(() => {
    document.title = `${title} | Nagasai`;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // OpenGraph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `${title} | Nagasai`);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description]);

  return null;
}
