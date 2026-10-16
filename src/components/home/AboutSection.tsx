'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUI } from '../UIContext';
import { ArrowUpRight, Award, Compass, Users } from 'lucide-react';

export default function AboutSection() {
  const { openMeetingModal } = useUI();

  return (
    <section className="w-full bg-white border-b border-[#1f265a]/15 py-20 xl:py-28">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-semibold mb-6">
          <span>SECTION 04</span>
          <span className="text-[#1f265a]/30">/</span>
          <span>CORPORATE OVERVIEW &amp; PHILOSOPHY</span>
        </div>

        {/* 12-Column Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* Left: Large Authentic Campus Image with Architectural Coordinates (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full border border-[#1f265a]/20 overflow-hidden bg-[#f6f8fb]">
              <Image
                src="/assets/img/project-1.jpg"
                alt="GES Learning Environment and Campus Life"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#1f265a] text-white px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                HQ &amp; NETWORK HUB
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 border border-[#1f265a]/15 text-[#1f265a]">
                <div className="font-mono text-[10px] text-[#e53238] uppercase tracking-wider">
                  FOUNDED 2012 • MUSCAT, OMAN
                </div>
                <div className="font-display text-sm font-bold mt-1">
                  Global Education Services L.L.C.
                </div>
                <div className="text-xs text-[#1f265a]/70 mt-0.5">
                  Shaping generations of curious, resilient, and ethical leaders.
                </div>
              </div>
            </div>

            {/* Corner architectural coordinates badge */}
            <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-[#1f265a]/50">
              <span>LAT: 23.6302° N</span>
              <span>•</span>
              <span>LONG: 58.1937° E</span>
              <span>•</span>
              <span>AIRPORT HEIGHTS</span>
            </div>
          </div>

          {/* Right: Strong Typographic Heading & Complete Body Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-bold text-[#1f265a] leading-[1.15] tracking-tight">
              An enduring commitment to educational excellence, intellectual rigor, and cultural integrity.
            </h2>

            <div className="w-16 h-1 bg-[#e53238]" />

            <div className="space-y-4 text-base sm:text-lg text-[#1f265a]/80 leading-relaxed font-normal">
              <p>
                Global Education Services Company (GES Quality Education) is a premier educational group in the Sultanate of Oman. Established in 2012, GES operates and manages world-class private schools and specialized early childhood learning centers that redefine modern pedagogical standards.
              </p>
              <p>
                Our institutions combine internationally accredited curricula—including the British National Curriculum (Cambridge &amp; Pearson Edexcel) and the child-centered Reggio Emilia Approach—with deep alignment to Omani heritage and the strategic aspirations of Oman Vision 2040.
              </p>
              <p>
                From foundational early learning at Shomoukh Early Childhood Centers to K-12 matriculation at Al Shomoukh International Private School, GES empowers more than 5,000 learners to achieve academic mastery, ethical conviction, and the global agility needed to lead in an evolving world.
              </p>
            </div>

            {/* Pillar highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#1f265a]/15">
              <div className="p-4 bg-[#f6f8fb] border border-[#1f265a]/10">
                <div className="font-mono text-xs font-bold text-[#e53238] mb-1">01 / DUAL STREAM</div>
                <div className="font-display text-sm font-bold text-[#1f265a]">British &amp; Bilingual</div>
                <p className="text-xs text-[#1f265a]/70 mt-1">
                  Flexible academic pathways ensuring university readiness worldwide.
                </p>
              </div>

              <div className="p-4 bg-[#f6f8fb] border border-[#1f265a]/10">
                <div className="font-mono text-xs font-bold text-[#3365b0] mb-1">02 / GOVERNANCE</div>
                <div className="font-display text-sm font-bold text-[#1f265a]">Full Quality Audit</div>
                <p className="text-xs text-[#1f265a]/70 mt-1">
                  Rigorous institutional, fiscal, and pedagogical compliance frameworks.
                </p>
              </div>

              <div className="p-4 bg-[#f6f8fb] border border-[#1f265a]/10">
                <div className="font-mono text-xs font-bold text-[#1f265a] mb-1">03 / ALLIANCES</div>
                <div className="font-display text-sm font-bold text-[#1f265a]">Cognia &amp; ECIS</div>
                <p className="text-xs text-[#1f265a]/70 mt-1">
                  International benchmarking and continuous teacher professional development.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="px-7 py-3.5 bg-[#1f265a] hover:bg-[#e53238] text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-colors"
              >
                <span>Read Full Company Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => openMeetingModal('About Section Inquiry')}
                className="px-6 py-3.5 border border-[#1f265a]/25 hover:border-[#1f265a] text-[#1f265a] font-mono text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#f6f8fb] transition-all"
              >
                <span>Request Executive Briefing</span>
                <ArrowUpRight className="w-4 h-4 text-[#e53238]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
