'use client';

import React from 'react';
import Image from 'next/image';
import { GES_DATA } from '@/data/gesData';

export default function VisionMissionValues() {
  const { elevate } = GES_DATA;

  return (
    <section className="w-full bg-white border-b border-[#1f265a]/15 py-20 xl:py-28">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-semibold mb-12">
          <span>SECTION 07</span>
          <span className="text-[#1f265a]/30">/</span>
          <span>STRATEGIC FOUNDATIONS</span>
        </div>

        {/* Vision Statement: Large Monumental Composition */}
        <div className="p-8 sm:p-12 xl:p-16 bg-[#f6f8fb] border border-[#1f265a]/15 relative mb-16">
          <div className="max-w-4xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#e53238] font-bold">
              THE GES VISION
            </span>
            <h2 className="font-display text-2xl sm:text-4xl xl:text-5xl font-bold text-[#1f265a] leading-tight tracking-tight">
              To be the leading and most trusted education group in the Sultanate of Oman, celebrated for academic rigor, ethical character, and innovative pedagogy.
            </h2>
            <p className="text-base sm:text-lg text-[#1f265a]/70 leading-relaxed pt-2">
              Empowering learners to lead locally and thrive globally in direct harmony with the sustainable national ambitions of Oman Vision 2040.
            </p>
          </div>
          <div className="absolute top-6 right-6 hidden sm:block font-mono text-xs text-[#1f265a]/40">
            VISION • 2040 ALIGNED
          </div>
        </div>

        {/* Mission: Editorial Image-and-Text Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#3365b0] font-bold">
              THE GES MISSION
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#1f265a] leading-snug">
              Delivering learner-centric environments that bridge international standards with Omani heritage.
            </h3>
            <p className="text-base text-[#1f265a]/80 leading-relaxed">
              We cultivate inquisitive, resilient, and socially conscious learners through personalized British National Curriculum and Reggio Emilia frameworks, empowering every child to realize their full human potential within a safe, collaborative community.
            </p>
            <div className="pt-2 font-mono text-xs text-[#1f265a]/60 flex items-center gap-4">
              <span>HOLISTIC PEDAGOGY</span>
              <span>•</span>
              <span>GLOBAL CITIZENSHIP</span>
              <span>•</span>
              <span>INCLUSIVE EQUITY</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full border border-[#1f265a]/20 overflow-hidden bg-[#f6f8fb]">
              <Image
                src="/assets/img/video-thumb-7.jpg"
                alt="Student creative expression and pedagogical learning at GES"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#0b1026]/90 text-white px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                COMMUNITY &amp; PEDAGOGICAL MISSION
              </div>
            </div>
          </div>
        </div>

        {/* Values: Geometric Typographic Framework (ELEVATE) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#1f265a]/20 mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                CORE VALUES FRAMEWORK
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1f265a] mt-1">
                E • L • E • V • A • T • E
              </h3>
            </div>
            <span className="font-mono text-xs text-[#1f265a]/60">
              The 7 Guiding Principles of Global Education Services
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 divide-y sm:divide-y-0 sm:divide-x divide-[#1f265a]/15 border border-[#1f265a]/15 bg-white">
            {elevate.map((val, idx) => (
              <div 
                key={idx}
                className="p-6 flex flex-col justify-between hover:bg-[#1f265a] hover:text-white transition-colors duration-300 group"
              >
                <div>
                  <div className="font-display text-4xl xl:text-5xl font-extrabold text-[#e53238] group-hover:text-white transition-colors mb-4">
                    {val.letter}
                  </div>
                  <h4 className="font-display text-sm font-bold text-[#1f265a] group-hover:text-white transition-colors uppercase tracking-wider mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#1f265a]/70 group-hover:text-white/80 leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="mt-6 pt-2 font-mono text-[10px] text-[#1f265a]/40 group-hover:text-white/40 border-t border-[#1f265a]/10 group-hover:border-white/20">
                  VAL-0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
