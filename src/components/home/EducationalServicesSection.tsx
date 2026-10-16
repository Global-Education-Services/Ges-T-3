'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUI } from '../UIContext';
import { ArrowUpRight, Check, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

export default function EducationalServicesSection() {
  const { openMeetingModal } = useUI();

  return (
    <section className="w-full bg-[#f6f8fb] border-b border-[#1f265a]/15 py-20 xl:py-28">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#1f265a]/20 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-semibold">
              <span>SECTION 05</span>
              <span className="text-[#1f265a]/30">/</span>
              <span>OPERATIONAL FRAMEWORKS &amp; SERVICES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-bold text-[#1f265a] mt-2 tracking-tight">
              Educational Services &amp; Operational Models
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-[#1f265a]/70">
            A comprehensive institutional ecosystem spanning turnkey private school governance, PPP initiatives, school licensing, and master franchise networks.
          </p>
        </div>

        {/* Vertical Editorial Service Index with Alternating Compositions */}
        <div className="divide-y divide-[#1f265a]/20 border-b border-[#1f265a]/20">
          {GES_DATA.operationalModels.map((model, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div 
                key={model.id}
                className="py-16 xl:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center group"
              >
                {/* Visual Image Plate */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[16/10] w-full border border-[#1f265a]/25 overflow-hidden bg-white shadow-sm">
                    <Image
                      src={model.image}
                      alt={model.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#1f265a] text-white px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                      SERVICE 0{idx + 1}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/95 px-3 py-1 font-mono text-[11px] text-[#1f265a] border border-[#1f265a]/20">
                      GES ACCREDITED
                    </div>
                  </div>
                </div>

                {/* Editorial Content */}
                <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#e53238]">
                      0{idx + 1} / MODEL
                    </span>
                    <span className="h-px w-12 bg-[#1f265a]/20" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/60">
                      TURNKEY GOVERNANCE
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl xl:text-4xl font-bold text-[#1f265a] group-hover:text-[#3365b0] transition-colors">
                    {model.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#1f265a]/80 leading-relaxed max-w-2xl">
                    {model.description}
                  </p>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => openMeetingModal(`Inquiry: ${model.title}`)}
                      className="px-6 py-3 bg-[#1f265a] hover:bg-[#e53238] text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-colors"
                    >
                      <span>Inquire About {model.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <Link
                      href="/operational"
                      className="px-5 py-3 border border-[#1f265a]/25 hover:border-[#1f265a] text-[#1f265a] font-mono text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center gap-1.5"
                    >
                      <span>Detailed Specifications</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 10 Operational Management Modules Ticker */}
        <div className="mt-20 pt-10 border-t border-[#1f265a]/20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                SYSTEMIC CAPABILITIES
              </span>
              <h3 className="font-display text-2xl font-bold text-[#1f265a] mt-1">
                The 10 Management &amp; Academic Modules
              </h3>
            </div>
            <Link
              href="/operational"
              className="hidden sm:flex items-center gap-1.5 font-mono text-xs uppercase text-[#1f265a] hover:text-[#e53238] font-bold"
            >
              <span>Explore All 10 Modules</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {GES_DATA.managementModules.map((mod, i) => (
              <div 
                key={i} 
                className="p-5 bg-white border border-[#1f265a]/15 hover:border-[#1f265a]/40 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#1f265a]/50 mb-3">
                    <span>MOD-{String(i + 1).padStart(2, '0')}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-[#1f265a] group-hover:text-[#3365b0] transition-colors">
                    {mod.title}
                  </h4>
                  <p className="text-xs text-[#1f265a]/70 mt-1 line-clamp-3 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
