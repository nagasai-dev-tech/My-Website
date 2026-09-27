import React, { useState } from 'react';
import { Copy, Check, Share2 } from 'lucide-react';
import { LinkedinIcon } from '../SocialIcons';

interface ArticleSocialShareProps {
  url: string;
  title: string;
  summary: string;
}

export function ArticleSocialShare({ url, title, summary }: ArticleSocialShareProps) {
  const [copied, setCopied] = useState(false);

  const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : `https://nagasai.dev${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedSummary = encodeURIComponent(summary);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const shareLinks = [
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34M7.85 18.5V10.1H5.06v8.4h2.79z" />
        </svg>
      ),
      bgClass: 'bg-[#0a66c2] hover:bg-[#084e96] text-white',
      label: 'Share on LinkedIn',
    },
    {
      name: 'X (Twitter)',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: (
        <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      bgClass: 'bg-black hover:bg-slate-800 text-white',
      label: 'Share on X',
    },
    {
      name: 'WhatsApp',
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.173 8.173 0 0 1 2.4 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.91 0 1.13.82 2.22.94 2.37.11.15 1.62 2.47 3.92 3.47.55.24.97.38 1.31.49.55.17 1.05.15 1.45.09.44-.07 1.35-.55 1.54-1.08.19-.54.19-1 .13-1.09-.05-.1-.2-.16-.42-.27-.22-.11-1.3-.64-1.5-.72-.2-.07-.35-.11-.5.11-.15.22-.58.73-.71.88-.13.15-.26.17-.48.06-.22-.11-.94-.35-1.79-1.1-.66-.59-1.11-1.32-1.24-1.54-.13-.23-.01-.35.1-.46.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.4-.06-.11-.5-1.21-.69-1.66-.18-.43-.37-.37-.5-.38l-.43-.01z" />
        </svg>
      ),
      bgClass: 'bg-[#25D366] hover:bg-[#1faa53] text-white',
      label: 'Share on WhatsApp',
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {shareLinks.map((share) => (
        <a
          key={share.name}
          href={share.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold shadow-2xs transition-all active:scale-95 ${share.bgClass}`}
          aria-label={share.label}
        >
          {share.icon}
          <span>{share.name}</span>
        </a>
      ))}

      {/* Copy Link Button */}
      <button
        onClick={handleCopyLink}
        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 shadow-2xs transition-all active:scale-95"
        aria-label="Copy link to clipboard"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700">Link Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 text-slate-600" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
