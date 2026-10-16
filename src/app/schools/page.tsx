'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUI } from '@/components/UIContext';
import { GES_DATA, School } from '@/data/gesData';
import { ArrowUpRight, MapPin, ExternalLink, Calendar, GraduationCap, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function SchoolsPage() {
  const { openMeetingModal } = useUI();
  const { schools } = GES_DATA;

  const [activeImage, setActiveImage] = useState<{ [schoolId: string]: string }>({
    sips: schools[0].gallery[0],
    'shomoukh-qurum': schools[1].gallery[0],
    'shomoukh-mouj': schools[2].gallery[0],
  });

  return (
    <main className="w-full bg-white">
      {/* 1. Schools Hero */}
      <section className="w-full bg-[#f6f8fb] border-b border-[#1f265a]/15 py-16 xl:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                <span>GES NETWORK CAMPUSES</span>
                <span>/</span>
                <span>INSTITUTION DIRECTORY</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#1f265a] tracking-tight leading-tight">
                Our Schools &amp; Early Centers
              </h1>
              <p className="text-lg sm:text-xl text-[#1f265a]/80 max-w-2xl font-normal leading-relaxed">
                Discover world-class educational environments designed to foster creativity, critical inquiry, and academic distinction across the Muscat Governorate.
              </p>
            </div>
            <div className="lg:col-span-4 font-mono text-xs text-[#1f265a]/60 space-y-1 pb-2">
              <div>4 ACCREDITED CAMPUSES</div>
              <div>BRITISH &amp; REGGIO EMILIA APPROACH</div>
              <div>OVER 5,000 ACTIVE LEARNERS</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Institution Index Navigator Bar */}
      <section className="sticky top-[80px] z-30 w-full bg-white/95 backdrop-blur-md border-b border-[#1f265a]/15 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12 py-3 flex items-center justify-between overflow-x-auto gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold shrink-0">
            QUICK INDEX:
          </span>
          <div className="flex items-center gap-3 shrink-0">
            {schools.map((s, idx) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3.5 py-1.5 bg-[#f6f8fb] hover:bg-[#1f265a] hover:text-white border border-[#1f265a]/15 text-xs font-display font-medium text-[#1f265a] transition-colors"
              >
                0{idx + 1}. {s.shortName}
              </a>
            ))}
          </div>
          <button
            onClick={() => openMeetingModal('Admissions & Enrollment Consultation')}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-[#1f265a] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#e53238] transition-colors shrink-0"
          >
            <span>Inquire for Admission</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 3, 4, 5. In-Depth Institution Editorial Chapters */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12 py-16 xl:py-24 space-y-24">
        {schools.map((school, index) => {
          const isReversed = index % 2 === 1;
          const currentImg = activeImage[school.id] || school.gallery[0];

          return (
            <article
              key={school.id}
              id={school.id}
              className="scroll-mt-36 p-8 sm:p-12 xl:p-16 border border-[#1f265a]/20 bg-[#f6f8fb] relative shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
                
                {/* Left: Content & Specifications */}
                <div className={`lg:col-span-7 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  {/* Identity Header */}
                  <div className="flex items-center gap-4 pb-4 border-b border-[#1f265a]/15">
                    <div className="relative w-16 h-16 bg-white border border-[#1f265a]/15 p-1 shrink-0">
                      <Image
                        src={school.logo}
                        alt={`${school.name} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                        <span>INSTITUTION 0{index + 1}</span>
                        <span>•</span>
                        <span>{school.established ? `FOUNDED ${school.established}` : 'EARLY YEARS BENCHMARK'}</span>
                      </div>
                      <h2 className="font-display text-2xl sm:text-3xl xl:text-4xl font-bold text-[#1f265a] mt-1">
                        {school.name}
                      </h2>
                    </div>
                  </div>

                  {/* Tagline */}
                  <div className="font-display text-lg sm:text-xl font-semibold text-[#3365b0]">
                    &ldquo;{school.tagline}&rdquo;
                  </div>

                  {/* 100% Original Complete Description */}
                  <p className="text-base text-[#1f265a]/80 leading-relaxed font-normal">
                    {school.description}
                  </p>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#1f265a]/15 font-mono text-xs">
                    <div className="p-4 bg-white border border-[#1f265a]/10 space-y-1">
                      <div className="flex items-center gap-1.5 text-[#e53238] uppercase font-bold text-[10px]">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Campus Location</span>
                      </div>
                      <div className="text-[#1f265a] font-medium">
                        {school.location}
                      </div>
                    </div>

                    <div className="p-4 bg-white border border-[#1f265a]/10 space-y-1">
                      <div className="flex items-center gap-1.5 text-[#3365b0] uppercase font-bold text-[10px]">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>Curriculum Framework</span>
                      </div>
                      <div className="text-[#1f265a] font-medium">
                        {school.curriculum} {school.ages ? `• ${school.ages}` : ''}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <a
                      href={school.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-3.5 bg-[#1f265a] hover:bg-[#e53238] text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-colors shadow-sm"
                    >
                      <span>Visit {school.websiteLabel}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => openMeetingModal(`Campus Admissions: ${school.shortName}`)}
                      className="px-6 py-3.5 border border-[#1f265a]/25 hover:border-[#1f265a] text-[#1f265a] font-mono text-xs uppercase tracking-widest hover:bg-white transition-all"
                    >
                      <span>Inquire With Admissions</span>
                    </button>
                  </div>

                </div>

                {/* Right: Interactive Gallery System */}
                <div className={`lg:col-span-5 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  {/* Primary View */}
                  <div className="relative aspect-[4/3] w-full border border-[#1f265a]/25 overflow-hidden bg-white shadow-md">
                    <Image
                      src={currentImg}
                      alt={`${school.name} Campus Facility`}
                      fill
                      className="object-cover transition-opacity duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#0b1026]/90 text-white px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider">
                      CAMPUS ARCHIVE PHOTO
                    </div>
                  </div>

                  {/* Thumbnail Selector */}
                  <div className="grid grid-cols-4 gap-2">
                    {school.gallery.map((thumb, tIdx) => {
                      const isSel = currentImg === thumb;
                      return (
                        <button
                          key={tIdx}
                          onClick={() => setActiveImage(prev => ({ ...prev, [school.id]: thumb }))}
                          className={`relative aspect-square border overflow-hidden transition-all ${
                            isSel
                              ? 'border-[#e53238] ring-2 ring-[#e53238]/30'
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

                  <div className="font-mono text-[11px] text-[#1f265a]/50 text-right">
                    Click thumbnails to switch campus perspective
                  </div>

                </div>

              </div>
            </article>
          );
        })}
      </div>

      {/* Closing CTA */}
      <section className="w-full bg-[#1f265a] text-white py-16 xl:py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12 text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
            CAMPUS TOURS &amp; ADMISSIONS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold max-w-3xl mx-auto tracking-tight">
            Schedule a Personalized Campus Tour
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Experience our classrooms, science labs, Reggio Emilia ateliers, and athletic facilities in person. Contact our admissions team today.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openMeetingModal('Schools Tour Request')}
              className="px-8 py-3.5 bg-[#e53238] hover:bg-[#cf2228] text-white font-mono text-xs uppercase tracking-widest transition-colors"
            >
              Book Campus Tour →
            </button>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-white/30 hover:border-white text-white font-mono text-xs uppercase tracking-widest transition-colors"
            >
              Corporate Office Coordinates
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
