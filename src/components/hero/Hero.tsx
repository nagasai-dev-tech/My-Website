import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroVisualComposition } from './HeroVisualComposition';
import { HeroSvgArtwork } from './HeroSvgArtwork';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white bg-grid-pattern">
      {/* Background Technical SVG Artwork & Precision Glow */}
      <HeroSvgArtwork />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Positioning Statement, Brand Label & Action CTAs (7 cols) */}
          <div className="lg:col-span-7">
            <HeroContent />
          </div>

          {/* RIGHT: Custom Hybrid Portrait + SVG Technical Composition (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroVisualComposition />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
