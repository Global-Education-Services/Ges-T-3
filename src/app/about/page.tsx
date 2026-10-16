'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUI } from '@/components/UIContext';
import { GES_DATA } from '@/data/gesData';
import { ArrowUpRight, Award, Compass, Users2, Calendar, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  const { openMeetingModal } = useUI();
  const { chairman, leadership, schools, impact } = GES_DATA;

  const journeyMilestones = [
    {
      year: '2012',
      title: 'Inception of Global Education Services',
      description: 'Founded in Muscat with a mission to bring world-class international education to the Sultanate of Oman, combining academic excellence with cultural heritage.',
      highlight: 'Corporate Foundation'
    },
    {
      year: '2015',
      title: 'Al Shomoukh International Private School (SIPS) Inauguration',
      description: 'Opened purpose-built campus in Hay Al Hail delivering the British National Curriculum alongside a bilingual stream for K-12 students.',
      highlight: 'Flagship K-12 Campus'
    },
    {
      year: '2018',
      title: 'Shomoukh Early Childhood Education Center – Al Qurum',
      description: 'Established dedicated early learning campus in Shatti Al Qurum implementing the child-centered Reggio Emilia Approach for children aged 1 to 4.',
      highlight: 'Early Childhood Center'
    },
    {
      year: '2021',
      title: 'Shomoukh ECE Center – Al Mouj Campus Expansion',
      description: 'Expanded network to The Walk, Al Mouj, introducing sustainable innovation in early learning and setting a MENA benchmark for preschool excellence.',
      highlight: 'Sustainable Innovation Hub'
    },
    {
      year: '2024+',
      title: 'Network Maturation & Oman Vision 2040 Alignment',
      description: 'Surpassing 5,000 enrolled students and 700 educators across 4 campuses, with Cognia global accreditation and leading university placements worldwide.',
      highlight: '5,000+ Enrolled Learners'
    }
  ];

  return (
    <main className="w-full bg-white">
      {/* 1. Editorial Hero */}
      <section className="w-full bg-[#f6f8fb] border-b border-[#1f265a]/15 py-16 xl:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                <span>GES INSTITUTIONAL FOLIO</span>
                <span>/</span>
                <span>ABOUT US</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#1f265a] tracking-tight leading-tight">
                About Global Education Services
              </h1>
              <p className="text-lg sm:text-xl text-[#1f265a]/80 max-w-2xl font-normal leading-relaxed">
                Pioneering quality education, operational integrity, and human potential across the Sultanate of Oman since 2012.
              </p>
            </div>
            <div className="lg:col-span-4 font-mono text-xs text-[#1f265a]/60 space-y-1 pb-2">
              <div>CR: 1152431 • MUSCAT HQ</div>
              <div>BRITISH &amp; REGGIO EMILIA FRAMEWORKS</div>
              <div>COGNIA &amp; ECIS ACCREDITATION</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Corporate Introduction */}
      <section className="w-full py-16 xl:py-24 border-b border-[#1f265a]/15">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3365b0] font-bold">
                CORPORATE INTRODUCTION
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1f265a] leading-tight">
                Transforming the educational landscape of Oman through innovation and integrity.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#1f265a]/80 leading-relaxed">
                <p>
                  Global Education Services Company (GES Quality Education) is an Omani education management organization established to design, operate, and govern high-performing private schools and early learning institutes.
                </p>
                <p>
                  Under the patronage of Honorable Sheikh Salim Hamood Al Hashmi and an executive board of seasoned educational practitioners, GES manages over 5,000 students and 700 staff across 4 purpose-built campuses in the Muscat Governorate.
                </p>
                <p>
                  Our institutional network emphasizes individualized learning pathways, bilingual and English British curricula, computerized academic assessments, and continuous faculty development to ensure that every graduate is equipped to lead with moral purpose and intellectual courage.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-3 bg-[#f6f8fb] border border-[#1f265a]/10">
                  <div className="font-display text-2xl font-bold text-[#1f265a]">5,000+</div>
                  <div className="text-[10px] text-[#1f265a]/60 mt-0.5">Students</div>
                </div>
                <div className="p-3 bg-[#f6f8fb] border border-[#1f265a]/10">
                  <div className="font-display text-2xl font-bold text-[#1f265a]">700+</div>
                  <div className="text-[10px] text-[#1f265a]/60 mt-0.5">Staff</div>
                </div>
                <div className="p-3 bg-[#f6f8fb] border border-[#1f265a]/10">
                  <div className="font-display text-2xl font-bold text-[#e53238]">4</div>
                  <div className="text-[10px] text-[#1f265a]/60 mt-0.5">Campuses</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full border border-[#1f265a]/20 bg-[#f6f8fb] overflow-hidden">
                <Image
                  src="/assets/img/project-1.jpg"
                  alt="Al Shomoukh International Private School Academic Campus"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#1f265a] text-white px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
                  HEADQUARTERS &amp; FLAGSHIP CAMPUS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Journey: Architectural Timeline */}
      <section className="w-full bg-[#f6f8fb] py-16 xl:py-24 border-b border-[#1f265a]/15">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#1f265a]/20 gap-4 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                HISTORICAL MILESTONES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1f265a] mt-1">
                Our Journey (2012 — Present)
              </h2>
            </div>
            <span className="font-mono text-xs text-[#1f265a]/60">
              Documented institutional development in the Sultanate of Oman
            </span>
          </div>

          <div className="space-y-6">
            {journeyMilestones.map((m, idx) => (
              <div 
                key={m.year}
                className="p-6 sm:p-8 bg-white border border-[#1f265a]/15 hover:border-[#1f265a]/40 transition-colors grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-2">
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#e53238]">
                    {m.year}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#3365b0] font-semibold mt-1">
                    {m.highlight}
                  </div>
                </div>

                <div className="md:col-span-8">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#1f265a]">
                    {m.title}
                  </h3>
                  <p className="text-sm text-[#1f265a]/75 mt-1 leading-relaxed">
                    {m.description}
                  </p>
                </div>

                <div className="md:col-span-2 font-mono text-[11px] text-[#1f265a]/40 text-right hidden md:block">
                  PHASE 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Management Team: Leadership Profiles in Elegant Portrait Grid */}
      <section className="w-full py-16 xl:py-24 border-b border-[#1f265a]/15">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#1f265a]/20 gap-4 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                EXECUTIVE GOVERNANCE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1f265a] mt-1">
                Executive Leadership Team
              </h2>
            </div>
            <span className="font-mono text-xs text-[#1f265a]/60">
              Steering academic quality, fiscal discipline, and pedagogical vision
            </span>
          </div>

          {/* Chairman Spotlight */}
          <div className="mb-12 p-8 bg-[#0b1026] text-white border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3">
              <div className="relative aspect-[3/4] w-full border border-white/20 bg-[#13193a] overflow-hidden">
                <Image
                  src={chairman.image}
                  alt={chairman.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:col-span-9 space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                CHAIRMAN OF THE BOARD
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {chairman.name}
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-3xl">
                &ldquo;{chairman.titleQuote}&rdquo;
              </p>
              <div className="pt-2">
                <button
                  onClick={() => openMeetingModal('Meeting with Office of Chairman')}
                  className="px-5 py-2.5 bg-[#e53238] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#cf2228] transition-colors"
                >
                  Contact Chairman&apos;s Office
                </button>
              </div>
            </div>
          </div>

          {/* 6 Executive Board Profiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((member, i) => (
              <div 
                key={member.name}
                className="p-6 bg-[#f6f8fb] border border-[#1f265a]/15 hover:border-[#1f265a]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-[10px] text-[#e53238] uppercase font-bold mb-2">
                    DIR-0{i + 1} • EXECUTIVE
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#1f265a]">
                    {member.name}
                  </h4>
                  <div className="font-mono text-xs text-[#3365b0] font-semibold mt-0.5">
                    {member.role}
                  </div>
                  <p className="text-xs text-[#1f265a]/70 mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#1f265a]/10 font-mono text-[10px] text-[#1f265a]/40">
                  GES HEADQUARTERS • MUSCAT
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. We Are Always Open to Learners */}
      <section className="w-full bg-[#f6f8fb] py-16 xl:py-24 border-b border-[#1f265a]/15">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                ADMISSIONS &amp; INCLUSIVITY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1f265a] leading-tight">
                &ldquo;We Are Always Open to Learners&rdquo;
              </h2>
              <p className="text-base text-[#1f265a]/80 leading-relaxed">
                At GES, we believe every child brings unique potential to the classroom. Our admissions policies and educational environments welcome students of diverse cultural and national backgrounds, providing inclusive support, diagnostic assessment, and continuous encouragement.
              </p>
              <p className="text-base text-[#1f265a]/80 leading-relaxed">
                Whether enrolling in our early childhood nursery suites or joining the rigorous IGCSE and A-Level collegiate pathways at Al Shomoukh International Private School, families find an open, nurturing second home.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#1f265a] hover:bg-[#e53238] text-white font-mono text-xs uppercase tracking-widest transition-colors"
                >
                  Inquire for Admissions
                </Link>
                <Link
                  href="/schools"
                  className="px-5 py-3 border border-[#1f265a]/25 text-[#1f265a] font-mono text-xs uppercase tracking-widest hover:bg-white transition-all"
                >
                  Explore Campuses
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-square w-full border border-[#1f265a]/20 bg-white overflow-hidden shadow-sm">
                <Image
                  src="/assets/img/student.png"
                  alt="GES student learners thriving in inclusive campus environment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Institutions Overview */}
      <section className="w-full py-16 xl:py-24 border-b border-[#1f265a]/15">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#1f265a]/20 gap-4 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#3365b0] font-bold">
                CAMPUS PORTFOLIO
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1f265a] mt-1">
                Our Institutions
              </h2>
            </div>
            <Link
              href="/schools"
              className="font-mono text-xs text-[#e53238] hover:underline font-bold flex items-center gap-1"
            >
              <span>View In-Depth Schools Folio</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schools.map((school) => (
              <div 
                key={school.id}
                className="p-6 bg-[#f6f8fb] border border-[#1f265a]/15 flex flex-col justify-between group hover:border-[#1f265a]/40 transition-colors"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full border border-[#1f265a]/10 overflow-hidden mb-4 bg-white">
                    <Image
                      src={school.gallery[0]}
                      alt={school.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#1f265a]">
                    {school.name}
                  </h3>
                  <p className="font-mono text-xs text-[#e53238] mt-0.5">
                    {school.curriculum}
                  </p>
                  <p className="text-xs text-[#1f265a]/70 mt-2 line-clamp-3">
                    {school.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1f265a]/10 flex items-center justify-between">
                  <a
                    href={school.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#1f265a] hover:text-[#e53238] font-bold flex items-center gap-1"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <Link
                    href={`/schools#${school.id}`}
                    className="font-mono text-xs text-[#3365b0] hover:underline font-medium"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Closing CTA */}
      <section className="w-full bg-[#1f265a] text-white py-16 xl:py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12 text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
            PARTNER WITH GES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold max-w-3xl mx-auto tracking-tight">
            Ready to experience educational leadership that transforms lives?
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Schedule a confidential meeting with GES executive leadership to discuss school operational models, public-private partnerships, or admissions inquiries.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openMeetingModal('About Page Closing CTA')}
              className="px-8 py-3.5 bg-[#e53238] hover:bg-[#cf2228] text-white font-mono text-xs uppercase tracking-widest transition-colors"
            >
              Request Leadership Meeting →
            </button>
            <a
              href="/assets/downloads/GES Corporate Broucher.pdf"
              download
              className="px-8 py-3.5 border border-white/30 hover:border-white text-white font-mono text-xs uppercase tracking-widest transition-colors"
            >
              Download Corporate Brochure
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
