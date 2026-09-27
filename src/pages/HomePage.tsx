import { SeoMeta } from '../components/SeoMeta';
import { Hero } from '../components/Hero';
import { CapabilityStrip } from '../components/CapabilityStrip';
import { ServicesOverview } from '../components/ServicesOverview';
import { WhatIBuild } from '../components/WhatIBuild';
import { SelectedWorkPreview } from '../components/SelectedWorkPreview';
import { AboutTeaser } from '../components/AboutTeaser';
import { SkillsGrid } from '../components/SkillsGrid';
import { ProcessSection } from '../components/ProcessSection';
import { WhyWorkWithMe } from '../components/WhyWorkWithMe';
import { BlogTeaser } from '../components/BlogTeaser';
import { CtaSection } from '../components/CtaSection';

export function HomePage() {
  return (
    <>
      <SeoMeta
        title="Full-Stack Developer, SEO & Data Analytics"
        description="I help businesses build digital products, improve their online visibility, and turn their data into useful insights."
      />
      <main>
        <Hero />
        <CapabilityStrip />
        <ServicesOverview />
        <WhatIBuild />
        <SelectedWorkPreview />
        <AboutTeaser />
        <SkillsGrid />
        <ProcessSection />
        <WhyWorkWithMe />
        <BlogTeaser />
        <CtaSection />
      </main>
    </>
  );
}
