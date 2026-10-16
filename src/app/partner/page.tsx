'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUI } from '@/components/UIContext';
import { GES_DATA } from '@/data/gesData';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Handshake, Building, Award, ExternalLink } from 'lucide-react';

export default function PartnerPage() {
  const { openMeetingModal } = useUI();
  const { partners, operationalModels } = GES_DATA;

  return (
    <main className="w-full bg-white">
      {/* 1. Hero */}
      <section className="w-full bg-[#f6f8fb] border-b border-[#1f265a]/15 py-16 xl:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                <span>GES INSTITUTIONAL RELATIONS</span>
                <span>/</span>
                <span>PARTNERSHIPS</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#1f265a] tracking-tight leading-tight">
                Be a Partner with GES
              </h1>
              <p className="text-lg sm:text-xl text-[#1f265a]/80 max-w-2xl font-normal leading-relaxed">
                Empowering investors, government ministries, and school owners through strategic educational partnerships, licensed models, and public-private collaboration.
              </p>
            </div>
            <div className="lg:col-span-4 font-mono text-xs text-[#1f265a]/60 space-y-1 pb-2">
              <div>PPP ACCREDITATION IN OMAN</div>
              <div>COGNIA &amp; ECIS CERTIFICATION</div>
              <div>VISION 2040 STRATEGIC ALIGNMENT</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Partnership Introduction */}
      <section className="w-full py-16 xl:py-24 border-b border-[#1f265a]/15">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3365b0] font-bold">
                STRATEGIC COOPERATION
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1f265a] leading-tight">
                Unlocking Educational Investment and Institutional Distinction
              </h2>
              <div className="space-y-4 text-base text-[#1f265a]/80 leading-relaxed font-normal">
                <p>
                  Global Education Services Company (GES) partners with visionary institutional investors, real estate developers, and governmental agencies to establish, optimize, and scale leading academic institutions across Oman.
                </p>
                <p>
                  With more than a decade of proven leadership, GES brings turnkey operational blueprints, computerized quality control systems, international accreditation credentials, and a deep understanding of the regulatory landscape governing private education in the Sultanate.
                </p>
                <p>
                  Our collaborative approach ensures risk mitigation, robust financial sustainability, and the highest standards of student achievement and community respect.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openMeetingModal('Partnership Strategic Discussion')}
                  className="px-7 py-3.5 bg-[#1f265a] hover:bg-[#e53238] text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-colors"
                >
                  <span>Initiate Partnership Discussion</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href="/assets/downloads/awards.pdf"
                  download
                  className="px-6 py-3.5 border border-[#1f265a]/25 text-[#1f265a] font-mono text-xs uppercase tracking-widest hover:bg-[#f6f8fb] transition-all flex items-center gap-2"
                >
                  <span>Download Awards Folio (PDF)</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 bg-[#f6f8fb] border border-[#1f265a]/15 space-y-5">
                <div className="font-mono text-xs text-[#e53238] uppercase font-bold">
                  PARTNERSHIP VALUES
                </div>
                <h3 className="font-display text-xl font-bold text-[#1f265a]">
                  Why Partner With GES?
                </h3>
                <ul className="space-y-3 text-sm text-[#1f265a]/80">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                    <span>Established brand equity with over 5,000 active students and high parent trust.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                    <span>Turnkey curriculum frameworks: British National Curriculum &amp; Reggio Emilia early years.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                    <span>Comprehensive administrative, financial, recruitment, and legal compliance support.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                    <span>Direct alignment with Oman Vision 2040 and national educational priorities.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Management and Partnership Models */}
      <section className="w-full bg-[#f6f8fb] py-16 xl:py-24 border-b border-[#1f265a]/15">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#1f265a]/20 gap-4 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                COLLABORATION VEHICLES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1f265a] mt-1">
                Management &amp; Partnership Models
              </h2>
            </div>
            <span className="font-mono text-xs text-[#1f265a]/60">
              Structured to match investor risk profiles and institutional objectives
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalModels.map((m, idx) => (
              <div 
                key={m.id}
                className="p-6 bg-white border border-[#1f265a]/15 hover:border-[#1f265a]/40 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-[#e53238] mb-2">
                    MODEL 0{idx + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#1f265a] group-hover:text-[#3365b0] transition-colors mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-[#1f265a]/75 line-clamp-4 leading-relaxed">
                    {m.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#1f265a]/10">
                  <button
                    onClick={() => openMeetingModal(`Partnership Model: ${m.title}`)}
                    className="font-mono text-xs text-[#1f265a] group-hover:text-[#e53238] font-bold flex items-center justify-between w-full"
                  >
                    <span>Inquire for Partnership</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 & 5. Brands, Partners & Accreditations */}
      <section className="w-full py-16 xl:py-24 border-b border-[#1f265a]/15">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#1f265a]/20 gap-4 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#3365b0] font-bold">
                INSTITUTIONAL ECOSYSTEM
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1f265a] mt-1">
                Accreditations, Ministries &amp; Alliances
              </h2>
            </div>
            <span className="font-mono text-xs text-[#1f265a]/60">
              Verified partners and regulatory bodies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, pIdx) => (
              <div 
                key={pIdx}
                className="p-6 bg-[#f6f8fb] border border-[#1f265a]/15 hover:border-[#1f265a]/40 transition-colors flex items-start gap-4"
              >
                <div className="relative w-16 h-16 bg-white border border-[#1f265a]/15 p-1 shrink-0">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#e53238] font-bold">
                    {partner.type}
                  </span>
                  <h4 className="font-display text-sm font-bold text-[#1f265a]">
                    {partner.name}
                  </h4>
                  {partner.description && (
                    <p className="text-xs text-[#1f265a]/70 line-clamp-2">
                      {partner.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Closing Action */}
      <section className="w-full bg-[#1f265a] text-white py-16 xl:py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12 text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
            PARTNERSHIP APPLICATION
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold max-w-3xl mx-auto tracking-tight">
            Initiate a Collaborative Venture With GES
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Our corporate relations division will schedule an executive conference to evaluate your school site, curriculum license, or investment portfolio.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openMeetingModal('Partnership Proposal Direct Request')}
              className="px-8 py-3.5 bg-[#e53238] hover:bg-[#cf2228] text-white font-mono text-xs uppercase tracking-widest transition-colors"
            >
              Request Partnership Proposal →
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
