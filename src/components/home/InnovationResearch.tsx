'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Cpu, Microscope, Lightbulb, GraduationCap } from 'lucide-react';

export default function InnovationResearch() {
  const pillars = [
    {
      num: '01',
      title: 'Pedagogical Quality Systems',
      desc: 'Computerized quality control and continuous benchmark evaluations monitoring learning progress across all grade cohorts.',
      icon: Cpu
    },
    {
      num: '02',
      title: 'Active Educational R&D',
      desc: 'Research-backed curriculum refinement integrating cognitive science, Reggio Emilia principles, and British academic standards.',
      icon: Microscope
    },
    {
      num: '03',
      title: 'Sustainability & STEAM',
      desc: 'Award-winning sustainable campus initiatives, robotics labs, and experiential inquiry programs nurturing future innovators.',
      icon: Lightbulb
    },
    {
      num: '04',
      title: 'Regional Symposium Leadership',
      desc: 'Active faculty participation in international early childhood summits and curriculum conferences across MENA.',
      icon: GraduationCap
    }
  ];

  return (
    <section className="w-full bg-[#f6f8fb] border-b border-[#1f265a]/15 py-20 xl:py-28">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#1f265a]/20 gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-semibold">
              <span>SECTION 08</span>
              <span className="text-[#1f265a]/30">/</span>
              <span>PEDAGOGICAL INNOVATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-bold text-[#1f265a] mt-2 tracking-tight">
              Innovation &amp; Educational Research
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-[#1f265a]/70">
            Applying cutting-edge educational research and digital systems to optimize instructional delivery and learner outcomes across Oman.
          </p>
        </div>

        {/* Narrative Layout with Large Section Numbering and Authentic Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl xl:text-4xl font-bold text-[#1f265a] leading-tight">
              Evidence-based pedagogical models designed for measurable academic progress.
            </h3>
            <p className="text-base text-[#1f265a]/80 leading-relaxed">
              At GES, education is not static. Our dedicated academic department engages in continuous research, collaborating with international bodies like Cognia and ECIS to develop concept-focused, highly structured learning modules.
            </p>
            <p className="text-base text-[#1f265a]/80 leading-relaxed">
              We deploy advanced learning management software, computerized diagnostic tools, and state-of-the-art classroom tech that empower educators to personalize instruction for each student’s unique learning pathway.
            </p>
            <div className="pt-2">
              <Link
                href="/operational"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#1f265a] hover:text-[#e53238] transition-colors"
              >
                <span>Review Academic Management Modules</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full border border-[#1f265a]/20 bg-white overflow-hidden shadow-sm">
              <Image
                src="/assets/img/video-thumb-6.jpg"
                alt="GES Research and student inquiry in state-of-the-art facilities"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#1f265a] text-white px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                RESEARCH ARCHIVE • SIPS
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars with Large Section Numbering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.num}
                className="p-8 bg-white border border-[#1f265a]/15 hover:border-[#1f265a]/40 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-3xl font-extrabold text-[#e53238]">
                      {item.num}
                    </span>
                    <Icon className="w-5 h-5 text-[#3365b0] group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#1f265a] group-hover:text-[#3365b0] transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#1f265a]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#1f265a]/10 font-mono text-[10px] text-[#1f265a]/40">
                  STANDARD BENCHMARK
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
