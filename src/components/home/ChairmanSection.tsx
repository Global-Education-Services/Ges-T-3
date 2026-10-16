'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUI } from '../UIContext';
import { ArrowUpRight, Quote } from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

export default function ChairmanSection() {
  const { openMeetingModal } = useUI();
  const { chairman } = GES_DATA;

  return (
    <section className="w-full bg-[#0b1026] text-white border-b border-white/10 py-20 xl:py-32 relative overflow-hidden">
      {/* Background Architectural Subtle Line Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full border-r border-l border-white max-w-[1600px] mx-auto" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-semibold mb-10">
          <span>SECTION 06</span>
          <span className="text-white/30">/</span>
          <span>CHAIRMAN&apos;S ADDRESS &amp; PHILOSOPHY</span>
        </div>

        {/* 12-Column Portrait-Led Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start">
          
          {/* Left Column: Portrait Feature (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[3/4] w-full border border-white/20 bg-[#13193a] overflow-hidden shadow-2xl">
              <Image
                src={chairman.image}
                alt={chairman.name}
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1026] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#e53238] font-bold block mb-1">
                  OFFICE OF THE CHAIRMAN
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {chairman.name}
                </h3>
                <p className="font-mono text-xs text-white/70 mt-0.5">
                  Chairman of the Board • Global Education Services
                </p>
              </div>
            </div>

            {/* Leadership metadata plate */}
            <div className="p-5 bg-white/5 border border-white/10 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-white/50 text-[11px]">
                <span>GOVERNANCE PROTOCOL</span>
                <span className="text-[#e53238]">CHAIR-DIR-01</span>
              </div>
              <div className="text-white/80">
                Guiding institutional growth, academic integrity, and cultural harmony across all GES campuses in Oman.
              </div>
            </div>
          </div>

          {/* Right Column: Full Complete Original Message & Quote (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Featured Quote in Architectural Typography */}
            <div className="space-y-4">
              <Quote className="w-10 h-10 text-[#e53238] opacity-80" />
              <blockquote className="font-display text-2xl sm:text-3xl xl:text-4xl font-bold text-white leading-snug tracking-tight">
                &ldquo;{chairman.titleQuote}&rdquo;
              </blockquote>
            </div>

            <div className="w-20 h-0.5 bg-[#e53238]" />

            {/* Complete 4 Original Paragraphs Preserved 100% */}
            <div className="space-y-5 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              {chairman.message.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Sign-off & Actions */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
              <div>
                <div className="font-display text-base font-bold text-white">
                  {chairman.name}
                </div>
                <div className="font-mono text-xs text-[#e53238]">
                  Chairman, Global Education Services L.L.C.
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3 bg-white text-[#1f265a] hover:bg-[#e53238] hover:text-white font-mono text-xs uppercase tracking-widest transition-colors font-semibold"
                >
                  <span>Meet Leadership Team</span>
                </Link>
                <button
                  onClick={() => openMeetingModal('Chairman Office Meeting Request')}
                  className="px-6 py-3 border border-white/30 hover:border-white text-white font-mono text-xs uppercase tracking-widest transition-colors"
                >
                  <span>Executive Engagement</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
