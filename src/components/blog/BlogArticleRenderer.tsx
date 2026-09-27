import React, { useState } from 'react';
import { ContentBlock } from '../../data/blog/types';
import { BlogVisual } from './visuals/VisualRegistry';
import {
  Info,
  Lightbulb,
  AlertTriangle,
  Sparkles,
  Target,
  Copy,
  Check,
  CheckCircle2,
  Quote as QuoteIcon
} from 'lucide-react';

interface BlogArticleRendererProps {
  blocks?: ContentBlock[];
}

export function BlogArticleRenderer({ blocks }: BlogArticleRendererProps) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div className="space-y-8 text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
      {blocks.map((block, idx) => (
        <RenderBlock key={block.id || idx} block={block} index={idx} />
      ))}
    </div>
  );
}

function RenderBlock({ block, index }: { block: ContentBlock; index: number }) {
  switch (block.type) {
    case 'p':
      return (
        <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
          {block.text}
        </p>
      );

    case 'h2':
      return (
        <div id={block.id} className="scroll-mt-32 pt-6 first:pt-0">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
            {block.text}
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3 mb-2" />
        </div>
      );

    case 'h3':
      return (
        <h3 id={block.id} className="scroll-mt-32 text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-6 mb-2">
          {block.text}
        </h3>
      );

    case 'ul':
      return (
        <ul className="space-y-2.5 my-4 pl-2">
          {block.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 text-base sm:text-lg">
              <span className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'ol':
      return (
        <ol className="space-y-2.5 my-4 pl-2 counter-reset-item">
          {block.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 text-base sm:text-lg">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-blue-700 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-slate-300">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );

    case 'table':
      return (
        <div className="my-8 overflow-hidden rounded-2xl border border-slate-200/90 shadow-2xs bg-white">
          {block.tableCaption && (
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
              {block.tableCaption}
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              {block.tableHeaders && (
                <thead className="bg-slate-100/80 text-slate-900 font-semibold text-xs border-b border-slate-200">
                  <tr>
                    {block.tableHeaders.map((head, i) => (
                      <th key={i} className="px-5 py-3.5 whitespace-nowrap">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {block.tableRows?.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/70 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={`px-5 py-3.5 ${
                          cIdx === 0 ? 'font-semibold text-slate-950 bg-slate-50/40' : ''
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'callout': {
      const variant = block.calloutVariant || 'insight';
      const styles = {
        info: {
          bg: 'bg-blue-50/70',
          border: 'border-blue-200',
          title: 'text-blue-900',
          body: 'text-blue-950',
          icon: <Info className="w-5 h-5 text-blue-600 shrink-0" />,
        },
        tip: {
          bg: 'bg-emerald-50/70',
          border: 'border-emerald-200',
          title: 'text-emerald-900',
          body: 'text-emerald-950',
          icon: <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0" />,
        },
        warning: {
          bg: 'bg-amber-50/70',
          border: 'border-amber-200',
          title: 'text-amber-900',
          body: 'text-amber-950',
          icon: <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />,
        },
        insight: {
          bg: 'bg-indigo-50/70',
          border: 'border-indigo-200',
          title: 'text-indigo-900',
          body: 'text-indigo-950',
          icon: <Sparkles className="w-5 h-5 text-indigo-600 shrink-0" />,
        },
        strategy: {
          bg: 'bg-slate-900 text-white',
          border: 'border-slate-800',
          title: 'text-blue-400',
          body: 'text-slate-200',
          icon: <Target className="w-5 h-5 text-blue-400 shrink-0" />,
        },
      }[variant];

      return (
        <div className={`my-8 p-6 rounded-2xl border ${styles.bg} ${styles.border} shadow-2xs`}>
          <div className="flex items-start gap-3.5">
            {styles.icon}
            <div>
              {block.calloutTitle && (
                <div className={`font-bold text-sm sm:text-base mb-1 ${styles.title}`}>
                  {block.calloutTitle}
                </div>
              )}
              <div className={`text-xs sm:text-sm leading-relaxed ${styles.body}`}>
                {block.calloutBody || block.text}
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'svg':
      return (
        <BlogVisual
          name={block.svgComponent || ''}
          caption={block.svgCaption}
          alt={block.svgAlt}
        />
      );

    case 'checklist':
      return (
        <div className="my-8 p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
          {block.text && (
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{block.text}</span>
            </div>
          )}
          <div className="space-y-3">
            {block.items?.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-800 bg-white p-3 rounded-xl border border-slate-200/80">
                <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case 'quote':
      return (
        <blockquote className="my-8 pl-6 border-l-4 border-blue-600 italic text-lg sm:text-xl text-slate-900 bg-slate-50/50 py-3 rounded-r-xl">
          <QuoteIcon className="w-6 h-6 text-blue-400/40 mb-2 inline-block" />
          <p>{block.text}</p>
        </blockquote>
      );

    case 'code':
      return <CodeBlock code={block.code || ''} language={block.language || 'text'} />;

    case 'divider':
      return <hr className="my-10 border-t border-slate-200" />;

    default:
      return null;
  }
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl text-xs sm:text-sm font-mono">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-slate-400 text-xs">
        <span className="uppercase font-semibold tracking-wider">{language}</span>
        <button
          onClick={copyCode}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors text-xs"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="p-4 sm:p-5 overflow-x-auto text-slate-200 leading-relaxed font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default BlogArticleRenderer;
