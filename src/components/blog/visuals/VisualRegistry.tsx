import React from 'react';
import { WebsiteArchitecture } from './WebsiteArchitecture';
import { WordPressVsCustom } from './WordPressVsCustom';
import { BusinessSystemFlow } from './BusinessSystemFlow';
import { DevelopmentProcessFlow } from './DevelopmentProcessFlow';
import { SeoWorkflowDiagram } from './SeoWorkflowDiagram';
import { KeywordResearchFlow } from './KeywordResearchFlow';
import { TechnicalSeoAuditFlow } from './TechnicalSeoAuditFlow';
import { DataAnalyticsPipeline } from './DataAnalyticsPipeline';
import { DashboardVsExcel } from './DashboardVsExcel';
import { KpiMetricsArchitecture } from './KpiMetricsArchitecture';

export interface VisualComponentProps {
  caption?: string;
  alt?: string;
}

export const VISUAL_REGISTRY: Record<string, React.ComponentType<VisualComponentProps>> = {
  // Technology visuals
  WebsiteArchitecture,
  WordPressVsCustom,
  BusinessSystemFlow,
  DevelopmentProcessFlow,

  // SEO visuals
  SeoWorkflowDiagram,
  KeywordResearchFlow,
  TechnicalSeoAuditFlow,

  // Data visuals
  DataAnalyticsPipeline,
  DashboardVsExcel,
  KpiMetricsArchitecture,
};

// Aliases for flexibility
VISUAL_REGISTRY['SeoWorkflow'] = SeoWorkflowDiagram;
VISUAL_REGISTRY['Architecture'] = WebsiteArchitecture;
VISUAL_REGISTRY['DevelopmentProcess'] = DevelopmentProcessFlow;
VISUAL_REGISTRY['DataPipeline'] = DataAnalyticsPipeline;
VISUAL_REGISTRY['ExcelVsPowerBI'] = DashboardVsExcel;
VISUAL_REGISTRY['KpiFramework'] = KpiMetricsArchitecture;
VISUAL_REGISTRY['TechnicalAudit'] = TechnicalSeoAuditFlow;

interface BlogVisualProps {
  name: string;
  caption?: string;
  alt?: string;
}

export function BlogVisual({ name, caption, alt }: BlogVisualProps) {
  const Component = VISUAL_REGISTRY[name];

  if (!Component) {
    // Graceful fallback if a visual key isn't mapped
    return (
      <div className="my-8 p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
        <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">Diagram Architecture</div>
        <p className="text-sm font-semibold text-slate-200">{caption || name}</p>
      </div>
    );
  }

  return <Component caption={caption} alt={alt} />;
}

export default BlogVisual;
