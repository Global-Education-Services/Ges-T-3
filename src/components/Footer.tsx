'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUI } from './UIContext';
import { GES_DATA } from '@/data/gesData';
import { ArrowUpRight, FileDown, Phone, Mail, MapPin, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Footer() {
  const { openMeetingModal } = useUI();

  return (
    <footer className="w-full bg-[#0b1026] text-white border-t border-white/10 relative overflow-hidden">
      {/* Top Architectural Statement Band */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12 py-12 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238]">
              <span className="w-2 h-2 bg-[#e53238]" />
              <span>GES QUALITY EDUCATION • BEYOND THE CLASSROOM</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-white leading-tight">
              Pioneering educational excellence, character, and global leadership in Oman.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <button
              onClick={() => openMeetingModal('Footer Leadership Consultation')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#e53238] hover:bg-[#cf2228] text-white font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
            >
              <span>Schedule Executive Meeting</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="/assets/downloads/GES Corporate Broucher.pdf"
              download
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors border border-white/20"
            >
              <FileDown className="w-4 h-4 text-[#e53238]" />
              <span>Download Brochure (PDF)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Structural Matrix Grid */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-12">
          
          {/* Col 1: Identity & Official Registration */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative w-52 h-14 bg-white p-2 border border-white/20">
              <Image
                src="/assets/img/banner/ges-logo.png"
                alt="Global Education Services Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Global Education Services L.L.C. (GES) operates premier international schools and early childhood education centers in the Sultanate of Oman, combining British and Reggio Emilia curricula with Omani cultural values.
            </p>
            <div className="pt-2 font-mono text-[11px] text-white/50 space-y-1">
              <div>CR No. 1152431 • Ministry of Commerce &amp; Industry</div>
              <div>Licensed by Ministry of Education &amp; Ministry of Social Development</div>
            </div>
          </div>

          {/* Col 2: Navigation Architecture */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-semibold border-b border-white/10 pb-2">
              Architecture
            </h4>
            <ul className="space-y-2.5 text-sm font-display">
              <li>
                <Link href="/" className="text-white/70 hover:text-white hover:underline transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white hover:underline transition-colors">
                  About GES &amp; Leadership
                </Link>
              </li>
              <li>
                <Link href="/schools" className="text-white/70 hover:text-white hover:underline transition-colors">
                  Our Schools Network
                </Link>
              </li>
              <li>
                <Link href="/operational" className="text-white/70 hover:text-white hover:underline transition-colors">
                  Educational Services
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-white/70 hover:text-white hover:underline transition-colors">
                  Partnership &amp; PPP
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 hover:text-white hover:underline transition-colors">
                  Careers &amp; Recruitment
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/70 hover:text-white hover:underline transition-colors">
                  News &amp; Media Folio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white hover:underline transition-colors">
                  Contact HQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutions Network */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#3365b0] font-semibold border-b border-white/10 pb-2">
              Institutions Network
            </h4>
            <div className="space-y-4 text-xs">
              <div>
                <a
                  href="http://alshomoukh.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-semibold text-white hover:text-[#e53238] transition-colors flex items-center gap-1 group"
                >
                  <span>Al Shomoukh International Private School</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <p className="text-white/50 text-[11px] mt-0.5">
                  Hay Al Hail, Muscat • British &amp; Bilingual Stream (K-12)
                </p>
              </div>

              <div>
                <a
                  href="https://www.shomoukh.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-semibold text-white hover:text-[#e53238] transition-colors flex items-center gap-1 group"
                >
                  <span>Shomoukh ECE – Al Qurum Campus</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <p className="text-white/50 text-[11px] mt-0.5">
                  Al Saruj St., Shatti Al Qurum • Reggio Emilia Inspired (1–4 Yrs)
                </p>
              </div>

              <div>
                <a
                  href="https://www.shomoukh.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-semibold text-white hover:text-[#e53238] transition-colors flex items-center gap-1 group"
                >
                  <span>Shomoukh ECE – Al Mouj Campus</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <p className="text-white/50 text-[11px] mt-0.5">
                  The Walk, Al Mouj • Sustainable Innovation Early Nursery
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/schools"
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-[#e53238] hover:underline"
                >
                  <span>View All Institution Profiles</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Col 4: Verified Contact & Corporate HQ */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-semibold border-b border-white/10 pb-2">
              Corporate Headquarters
            </h4>
            <div className="space-y-3 text-xs text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e53238] shrink-0 mt-0.5" />
                <span>
                  Airport Heights, P.O. Box 1756, Postal Code 111, Muscat, Sultanate of Oman
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#3365b0] shrink-0" />
                <a href="tel:+96824554422" className="hover:text-white transition-colors">
                  +968 24554422
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@ges.om" className="hover:text-white transition-colors">
                  info@ges.om
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                <span className="text-[11px]">
                  Sunday – Thursday: 7:30 AM – 3:30 PM (GST)<br />
                  Closed Friday &amp; Saturday
                </span>
              </div>
            </div>

            {/* Official Accreditations */}
            <div className="pt-3 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/90 font-mono text-[10px] tracking-wider uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cognia • ECIS • MoE • MoSD Certified</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Coordinates & Legal Bar */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12 py-6 border-t border-white/10 font-mono text-[11px] text-white/40 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Global Education Services L.L.C. All Rights Reserved.
        </div>
        <div className="flex items-center gap-6">
          <span>LAT: 23.6302° N | LNG: 58.1937° E</span>
          <span className="hidden sm:inline">•</span>
          <Link href="/contact" className="hover:text-white transition-colors">
            Privacy &amp; Terms
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link href="/contact" className="hover:text-white transition-colors">
            Enquiry Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}
