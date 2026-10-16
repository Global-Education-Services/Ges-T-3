'use client';

import React from 'react';
import { GES_DATA } from '@/data/gesData';

export default function GesImpact() {
  const stats = [
    {
      num: GES_DATA.impact.students,
      label: 'Students Enrolled',
      sublabel: GES_DATA.impact.labels.students,
      code: 'METRIC-01',
      benchmark: 'National & Expatriate Cohort'
    },
    {
      num: GES_DATA.impact.employees,
      label: 'Academic Specialists',
      sublabel: GES_DATA.impact.labels.employees,
      code: 'METRIC-02',
      benchmark: 'UK & International Faculty'
    },
    {
      num: GES_DATA.impact.alumni,
      label: 'Distinguished Alumni',
      sublabel: GES_DATA.impact.labels.alumni,
      code: 'METRIC-03',
      benchmark: 'Global University Progression'
    },
    {
      num: GES_DATA.impact.campuses,
      label: 'Network Campuses',
      sublabel: GES_DATA.impact.labels.campuses,
      code: 'METRIC-04',
      benchmark: 'K-12 & Early Years Facilities'
    },
    {
      num: GES_DATA.impact.years,
      label: 'Years of Leadership',
      sublabel: GES_DATA.impact.labels.years,
      code: 'METRIC-05',
      benchmark: 'Continuous Excellence Since 2012'
    }
  ];

  return (
    <section className="w-full bg-[#f6f8fb] border-b border-[#1f265a]/15 py-16 xl:py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
        
        {/* Section Header with Architectural Section Number */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#1f265a]/20 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-semibold">
              <span>SECTION 03</span>
              <span className="text-[#1f265a]/30">/</span>
              <span>VERIFIED INSTITUTIONAL BENCHMARKS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-bold text-[#1f265a] mt-2 tracking-tight">
              GES Impact &amp; Footprint
            </h2>
          </div>
          <div className="max-w-md font-mono text-xs text-[#1f265a]/70">
            Official figures reported across the Global Education Services educational network in the Sultanate of Oman.
          </div>
        </div>

        {/* Architectural Impact Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#1f265a]/20 border-b border-[#1f265a]/20 bg-white">
          {stats.map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 flex flex-col justify-between group hover:bg-[#1f265a] hover:text-white transition-colors duration-300 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-[10px] text-[#1f265a]/50 group-hover:text-white/60">
                  <span>{item.code}</span>
                  <span className="text-[#e53238] font-bold">+</span>
                </div>
                
                {/* Large architectural typography */}
                <div className="font-display text-5xl xl:text-6xl font-extrabold tracking-tighter text-[#1f265a] group-hover:text-white transition-colors">
                  {item.num}
                </div>

                <div>
                  <h3 className="font-display text-base font-bold text-[#1f265a] group-hover:text-white transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs text-[#1f265a]/70 group-hover:text-white/80 mt-1 line-clamp-2">
                    {item.sublabel}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1f265a]/10 group-hover:border-white/20 font-mono text-[10px] text-[#3365b0] group-hover:text-emerald-300 uppercase tracking-wider">
                {item.benchmark}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative footnote */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-[#1f265a]/60 gap-2">
          <span>DATA SOURCE: GES CORPORATE AUDIT &amp; REGISTRY ARCHIVE</span>
          <span>CAMPUS HUBS: AL HAIL • AL QURUM • AL MOUJ • AIRPORT HEIGHTS</span>
        </div>

      </div>
    </section>
  );
}
