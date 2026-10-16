'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUI } from '../UIContext';
import { ArrowUpRight, ShieldCheck, Compass, Users2, Headphones, Sparkles, Building2 } from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

export default function EditorialHero() {
  const { openMeetingModal } = useUI();

  const heroFeatures = [
    {
      num: '01',
      title: 'Quest for Excellence',
      desc: 'Rigorous British & Reggio Emilia curriculum frameworks aligned with national standards.',
      icon: Sparkles,
      href: '/operational',
      cta: 'Explore Quality Model',
    },
    {
      num: '02',
      title: 'Meeting Request',
      desc: 'Direct consultation with executive leadership on school partnerships and governance.',
      icon: Building2,
      action: () => openMeetingModal('Hero Feature Direct Request'),
      cta: 'Book Leadership Session',
    },
    {
      num: '03',
      title: 'Inside GES Community',
      desc: 'Active student stories, international accreditations, and annual milestones across Oman.',
      icon: Users2,
      href: '/news',
      cta: 'Browse Stories & Media',
    },
    {
      num: '04',
      title: '24-Hour Effective Support',
      desc: 'Continuous operational, pedagogical, and administrative advisory for network schools.',
      icon: Headphones,
      href: '/contact',
      cta: 'Access Support Desk',
    },
  ];

  return (
    <section className="relative w-full bg-white border-b border-[#1f265a]/15 overflow-hidden">
      {/* Editorial Structural Grid */}
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(90vh-80px)] border-l border-r border-[#1f265a]/15">
          
          {/* Left Column: Bold Architectural Typographic Headline (7 cols on large desktop) */}
          <div className="lg:col-span-7 p-6 sm:p-10 xl:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1f265a]/15 bg-white relative">
            
            {/* Top metadata tags */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-[#1f265a]/70">
                <span className="px-2 py-0.5 bg-[#e53238] text-white font-semibold">
                  CONCEPT V2
                </span>
                <span>GLOBAL EDUCATION SERVICES • OMAN</span>
                <span className="text-[#1f265a]/30">•</span>
                <span>EST. 2012</span>
              </div>
              <div className="w-12 h-0.5 bg-[#e53238]" />
            </div>

            {/* Asymmetrical Editorial Headline */}
            <div className="my-8 sm:my-12">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3365b0] block mb-3 font-semibold">
                AN ARCHITECTURAL EDITORIAL REDESIGN
              </span>
              <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#1f265a] leading-[1.05]">
                Beyond the<br />
                <span className="text-[#e53238]">Classroom.</span>
              </h1>
              
              <div className="mt-6 max-w-xl">
                <p className="text-base sm:text-lg text-[#1f265a]/80 font-normal leading-relaxed">
                  Pioneering high-caliber private school networks, licensed educational models, and purpose-built early childhood centers across the Sultanate of Oman.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openMeetingModal('Hero Main CTA Consultation')}
                  className="px-7 py-3.5 bg-[#1f265a] hover:bg-[#e53238] text-white font-mono text-xs uppercase tracking-widest flex items-center gap-3 transition-colors shadow-sm"
                >
                  <span>Request Leadership Meeting</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <Link
                  href="/schools"
                  className="px-6 py-3.5 border border-[#1f265a]/25 hover:border-[#1f265a] text-[#1f265a] font-mono text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#f6f8fb] transition-all"
                >
                  <span>Explore 4 Campuses</span>
                  <ArrowUpRight className="w-4 h-4 text-[#e53238]" />
                </Link>
              </div>
            </div>

            {/* Bottom Key Metric Ticker */}
            <div className="pt-6 border-t border-[#1f265a]/10 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
              <div>
                <div className="text-2xl font-display font-bold text-[#1f265a]">5,000+</div>
                <div className="text-[10px] uppercase text-[#1f265a]/60 tracking-wider">Students</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-[#1f265a]">700+</div>
                <div className="text-[10px] uppercase text-[#1f265a]/60 tracking-wider">Educators</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-[#1f265a]">100+</div>
                <div className="text-[10px] uppercase text-[#1f265a]/60 tracking-wider">Alumni</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-[#e53238]">K-12</div>
                <div className="text-[10px] uppercase text-[#1f265a]/60 tracking-wider">British &amp; Reggio</div>
              </div>
            </div>

          </div>

          {/* Right Column: Immersive Real Photography & Framing (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col justify-between bg-[#f6f8fb] p-6 sm:p-8 xl:p-10">
            {/* Architectural Framing Container */}
            <div className="relative w-full flex-1 min-h-[380px] sm:min-h-[460px] border border-[#1f265a]/20 overflow-hidden group">
              <Image
                src="/assets/img/project-1.jpg"
                alt="Al Shomoukh International Private School Campus Architecture"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Architectural Overlay Ticks & Labels */}
              <div className="absolute top-4 left-4 z-10 bg-[#0b1026]/85 backdrop-blur-sm text-white px-3 py-1 font-mono text-[10px] tracking-widest uppercase border border-white/20">
                SIPS MAIN CAMPUS • MUSCAT
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 bg-[#0b1026]/90 backdrop-blur-sm text-white p-4 border border-white/20">
                <div className="flex items-center justify-between font-mono text-[10px] text-[#e53238] uppercase tracking-wider mb-1">
                  <span>FACILITY PROFILE</span>
                  <span>23.6302° N 58.1937° E</span>
                </div>
                <h3 className="font-display text-sm sm:text-base font-bold text-white">
                  Al Shomoukh International Private School (SIPS)
                </h3>
                <p className="text-xs text-white/70 line-clamp-2 mt-1">
                  Purpose-built modern academic infrastructure featuring science laboratories, athletic complexes, performing arts halls, and digital learning suites.
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono pt-2 border-t border-white/10">
                  <span className="text-white/60">Hay Al Hail South</span>
                  <Link href="/schools#sips" className="text-[#e53238] hover:underline flex items-center gap-1">
                    <span>Inspect Campus Folio</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Accreditation Badge Strip */}
            <div className="mt-6 pt-4 border-t border-[#1f265a]/10 flex items-center justify-between font-mono text-[11px] text-[#1f265a]/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3365b0]" />
                <span>COGNIA &amp; ECIS QUALITY CERTIFIED</span>
              </div>
              <span className="text-[10px] text-[#e53238] font-bold">100% AUDITED</span>
            </div>

          </div>

        </div>

        {/* Section 2 Feature Navigation: The 4 Core GES Themes */}
        <div className="border-t border-l border-r border-[#1f265a]/15 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#1f265a]/15">
            {heroFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={feat.num} 
                  className="p-6 xl:p-8 flex flex-col justify-between hover:bg-[#f6f8fb] transition-colors group relative"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#e53238]">
                        {feat.num} /
                      </span>
                      <div className="p-2 bg-[#1f265a]/5 text-[#1f265a] group-hover:bg-[#1f265a] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#1f265a] group-hover:text-[#3365b0] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-[#1f265a]/70 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#1f265a]/10">
                    {feat.action ? (
                      <button
                        onClick={feat.action}
                        className="text-xs font-mono font-bold text-[#1f265a] group-hover:text-[#e53238] flex items-center gap-1.5 transition-colors"
                      >
                        <span>{feat.cta}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    ) : (
                      <Link
                        href={feat.href || '/'}
                        className="text-xs font-mono font-bold text-[#1f265a] group-hover:text-[#e53238] flex items-center gap-1.5 transition-colors"
                      >
                        <span>{feat.cta}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
