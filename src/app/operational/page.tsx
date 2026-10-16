'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUI } from '@/components/UIContext';
import { GES_DATA } from '@/data/gesData';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Building, Sparkles, Layers, BookOpen } from 'lucide-react';

export default function OperationalPage() {
  const { openMeetingModal } = useUI();
  const { operationalModels, managementModules } = GES_DATA;

  return (
    <main className="w-full bg-white">
      {/* 1. Services Hero & Quest for Excellence */}
      <section className="w-full bg-[#f6f8fb] border-b border-[#1f265a]/15 py-16 xl:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                <span>GES OPERATIONAL FOLIO</span>
                <span>/</span>
                <span>SERVICES &amp; GOVERNANCE</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#1f265a] tracking-tight leading-tight">
                Quest for Excellence: Educational Services
              </h1>
              <p className="text-lg sm:text-xl text-[#1f265a]/80 max-w-2xl font-normal leading-relaxed">
                Turnkey school operations, public-private partnership execution, curriculum licensing, and institutional advisory designed to set regional benchmarks.
              </p>
            </div>
            <div className="lg:col-span-4 font-mono text-xs text-[#1f265a]/60 space-y-1 pb-2">
              <div>4 CORE OPERATIONAL MODELS</div>
              <div>10 INTEGRATED MANAGEMENT MODULES</div>
              <div>PUBLIC-PRIVATE PARTNERSHIP LEADER</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Complete Management (The 10 Operational Modules) */}
      <section className="w-full py-16 xl:py-24 border-b border-[#1f265a]/15">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#1f265a]/20 gap-4 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#3365b0] font-bold">
                TURNKEY MANAGEMENT CAPABILITIES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1f265a] mt-1">
                The 10 Integrated Management Modules
              </h2>
            </div>
            <p className="max-w-md font-mono text-xs text-[#1f265a]/60">
              Every school operating under the GES banner benefits from our proven centralized architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {managementModules.map((mod, i) => (
              <div 
                key={i} 
                className="p-6 bg-[#f6f8fb] border border-[#1f265a]/15 hover:border-[#1f265a]/40 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#1f265a]/50 mb-3">
                    <span>MODULE 0{i + 1}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#1f265a] group-hover:text-[#3365b0] transition-colors mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-[#1f265a]/75 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#1f265a]/10 font-mono text-[10px] text-[#1f265a]/40">
                  STANDARD OPERATING PROCEDURE
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3, 4, 5, 6. The 4 Operational Models */}
      <section className="w-full bg-[#f6f8fb] py-16 xl:py-24 border-b border-[#1f265a]/15">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12 space-y-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#1f265a]/20 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                OPERATIONAL FRAMEWORKS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1f265a] mt-1">
                The Four Educational Models
              </h2>
            </div>
            <span className="font-mono text-xs text-[#1f265a]/60">
              Customized frameworks for investors, ministries, and school owners
            </span>
          </div>

          {operationalModels.map((model, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div 
                key={model.id}
                id={model.id}
                className="scroll-mt-32 p-8 sm:p-12 xl:p-14 bg-white border border-[#1f265a]/15 grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center group"
              >
                {/* Image */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[16/10] w-full border border-[#1f265a]/20 overflow-hidden bg-[#f6f8fb]">
                    <Image
                      src={model.image}
                      alt={model.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#1f265a] text-white px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                      MODEL 0{idx + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#e53238]">
                      OPERATIONAL MODEL 0{idx + 1}
                    </span>
                    <span className="h-px w-10 bg-[#1f265a]/20" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#1f265a]/60">
                      GES ACCREDITED
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1f265a]">
                    {model.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#1f265a]/80 leading-relaxed font-normal">
                    {model.description}
                  </p>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => openMeetingModal(`Inquire: ${model.title}`)}
                      className="px-6 py-3 bg-[#1f265a] hover:bg-[#e53238] text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-colors"
                    >
                      <span>Inquire About {model.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <Link
                      href="/partner"
                      className="px-5 py-3 border border-[#1f265a]/25 text-[#1f265a] font-mono text-xs uppercase tracking-widest hover:bg-[#f6f8fb] transition-all"
                    >
                      <span>Partnership Guidelines</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Closing CTA */}
      <section className="w-full bg-[#1f265a] text-white py-16 xl:py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12 text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
            EDUCATIONAL GOVERNANCE &amp; PPP
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold max-w-3xl mx-auto tracking-tight">
            Collaborate With Oman&apos;s Leading Educational Operator
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Contact our strategic operations team to evaluate potential school acquisitions, licensing opportunities, or master franchise rights.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openMeetingModal('Operational Services Inquiry')}
              className="px-8 py-3.5 bg-[#e53238] hover:bg-[#cf2228] text-white font-mono text-xs uppercase tracking-widest transition-colors"
            >
              Request Operational Proposal →
            </button>
            <a
              href="/assets/downloads/GES Corporate Broucher.pdf"
              download
              className="px-8 py-3.5 border border-white/30 hover:border-white text-white font-mono text-xs uppercase tracking-widest transition-colors"
            >
              Download Corporate Folio
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
