'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GES_DATA, School } from '@/data/gesData';
import { ArrowUpRight, MapPin, ExternalLink, Calendar, GraduationCap, ChevronRight } from 'lucide-react';

export default function InstitutionsSection() {
  const { schools } = GES_DATA;
  const [activeImageIndices, setActiveImageIndices] = useState<{ [key: string]: number }>({
    sips: 0,
    'shomoukh-qurum': 0,
    'shomoukh-mouj': 0,
  });

  const handleSelectImage = (schoolId: string, idx: number) => {
    setActiveImageIndices(prev => ({ ...prev, [schoolId]: idx }));
  };

  return (
    <section className="w-full bg-white border-b border-[#1f265a]/15 py-20 xl:py-32">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#1f265a]/20 gap-4 mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-semibold">
              <span>SECTION 09</span>
              <span className="text-[#1f265a]/30">/</span>
              <span>NETWORK PORTFOLIO</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-bold text-[#1f265a] mt-2 tracking-tight">
              Our Institutions
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-[#1f265a]/70">
            Full-width editorial chapters presenting our owned and operated schools and early childhood campuses across the Sultanate of Oman.
          </p>
        </div>

        {/* Full-Width Editorial Chapters with Alternating Compositions */}
        <div className="space-y-24 xl:space-y-32">
          {schools.map((school, index) => {
            const isReversed = index % 2 === 1;
            const activeImg = school.gallery[activeImageIndices[school.id] || 0];

            return (
              <div 
                key={school.id} 
                id={school.id}
                className="scroll-mt-28 border border-[#1f265a]/20 bg-[#f6f8fb] p-6 sm:p-10 xl:p-14"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
                  
                  {/* Left Column: Information & Description (7 cols) */}
                  <div className={`lg:col-span-7 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Header bar with official logo & metadata */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#1f265a]/15">
                      <div className="flex items-center gap-3">
                        <div className="relative w-14 h-14 bg-white border border-[#1f265a]/15 p-1 shrink-0">
                          <Image
                            src={school.logo}
                            alt={`${school.name} Logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-[#e53238] font-bold">
                            CHAPTER 0{index + 1} • {school.established ? `EST. ${school.established}` : 'EARLY YEARS'}
                          </span>
                          <h3 className="font-display text-xl sm:text-2xl xl:text-3xl font-bold text-[#1f265a]">
                            {school.name}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Tagline quote */}
                    <div className="font-display text-lg sm:text-xl font-semibold text-[#3365b0]">
                      &ldquo;{school.tagline}&rdquo;
                    </div>

                    {/* Complete Original Body Text Preserved 100% */}
                    <p className="text-sm sm:text-base text-[#1f265a]/80 leading-relaxed font-normal">
                      {school.description}
                    </p>

                    {/* Metadata Specification Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#1f265a]/15 font-mono text-xs">
                      <div className="p-3 bg-white border border-[#1f265a]/10">
                        <div className="flex items-center gap-1.5 text-[#e53238] uppercase text-[10px] font-bold">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Campus Location</span>
                        </div>
                        <div className="text-[#1f265a] font-medium mt-1">
                          {school.location}
                        </div>
                      </div>

                      <div className="p-3 bg-white border border-[#1f265a]/10">
                        <div className="flex items-center gap-1.5 text-[#3365b0] uppercase text-[10px] font-bold">
                          <GraduationCap className="w-3.5 h-3.5" />
                          <span>Curriculum &amp; Ages</span>
                        </div>
                        <div className="text-[#1f265a] font-medium mt-1">
                          {school.curriculum} {school.ages ? `(${school.ages})` : ''}
                        </div>
                      </div>
                    </div>

                    {/* External & Internal CTAs */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <a
                        href={school.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 bg-[#1f265a] hover:bg-[#e53238] text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-colors shadow-sm"
                      >
                        <span>Visit Official School Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <Link
                        href={`/schools#${school.id}`}
                        className="px-5 py-3.5 border border-[#1f265a]/25 hover:border-[#1f265a] text-[#1f265a] font-mono text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center gap-1.5"
                      >
                        <span>Inspect Full Profile</span>
                        <ChevronRight className="w-4 h-4 text-[#e53238]" />
                      </Link>
                    </div>

                  </div>

                  {/* Right Column: Campus Gallery & Interactive Viewer (5 cols) */}
                  <div className={`lg:col-span-5 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Featured Large View */}
                    <div className="relative aspect-[4/3] w-full border border-[#1f265a]/25 overflow-hidden bg-white shadow-md">
                      <Image
                        src={activeImg}
                        alt={`${school.name} Campus Photo`}
                        fill
                        className="object-cover transition-opacity duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-[#0b1026]/90 text-white px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider">
                        GALLERY FRAME 0{activeImageIndices[school.id] + 1}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-white/90 px-2 py-0.5 font-mono text-[10px] text-[#1f265a] border border-[#1f265a]/20">
                        OFFICIAL ASSET
                      </div>
                    </div>

                    {/* Thumbnail Selector Strip */}
                    <div className="grid grid-cols-4 gap-2">
                      {school.gallery.map((thumb, tIdx) => {
                        const isCurrent = activeImageIndices[school.id] === tIdx;
                        return (
                          <button
                            key={tIdx}
                            onClick={() => handleSelectImage(school.id, tIdx)}
                            className={`relative aspect-square border overflow-hidden transition-all ${
                              isCurrent
                                ? 'border-[#e53238] ring-2 ring-[#e53238]/30 scale-102'
                                : 'border-[#1f265a]/20 opacity-70 hover:opacity-100'
                            }`}
                            aria-label={`View photo ${tIdx + 1} for ${school.name}`}
                          >
                            <Image
                              src={thumb}
                              alt=""
                              fill
                              className="object-cover"
                            />
                          </button>
                        );
                      })}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
