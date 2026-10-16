'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUI } from '@/components/UIContext';
import { GES_DATA, CareerStep } from '@/data/gesData';
import { ArrowUpRight, CheckCircle2, Upload, Briefcase, Mail, Phone, User, Award, ShieldCheck, ChevronRight } from 'lucide-react';

export default function CareersPage() {
  const { openMeetingModal } = useUI();
  const { careerSteps, contact } = GES_DATA;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'British Curriculum Teacher (Primary / Secondary)',
    campus: 'Al Shomoukh International Private School (SIPS)',
    experience: '3 - 5 Years',
    coverNote: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="w-full bg-white">
      {/* 1. Careers Hero */}
      <section className="w-full bg-[#f6f8fb] border-b border-[#1f265a]/15 py-16 xl:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                <span>GES TALENT ACQUISITION</span>
                <span>/</span>
                <span>CAREERS</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#1f265a] tracking-tight leading-tight">
                Careers at Global Education Services
              </h1>
              <p className="text-lg sm:text-xl text-[#1f265a]/80 max-w-2xl font-normal leading-relaxed">
                Join a world-class team of over 700 educators, school leaders, and specialists shaping the future of education in the Sultanate of Oman.
              </p>
            </div>
            <div className="lg:col-span-4 font-mono text-xs text-[#1f265a]/60 space-y-1 pb-2">
              <div>700+ FACULTY &amp; STAFF</div>
              <div>COMPETITIVE TAX-FREE EXPAT PACKAGES</div>
              <div>CONTINUOUS CPD &amp; LEADERSHIP PATHS</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Working at GES & Recruitment Information */}
      <section className="w-full py-16 xl:py-24 border-b border-[#1f265a]/15">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3365b0] font-bold">
                CULTURE &amp; EXCELLENCE
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1f265a] leading-tight">
                Empowering Educators to Excel, Innovate, and Inspire.
              </h2>
              <div className="space-y-4 text-base text-[#1f265a]/80 leading-relaxed font-normal">
                <p>
                  At GES, we recognize that great schools are built by passionate, dedicated educators. Our diverse learning community welcomes educators from around the globe who share our relentless commitment to student growth, pedagogical inquiry, and character development.
                </p>
                <p>
                  We offer a collaborative, supportive work environment across our 4 campuses in Muscat. Educators at GES benefit from modern educational technologies, state-of-the-art laboratory and athletic infrastructure, and structured professional development pathways endorsed by Cognia and ECIS.
                </p>
                <p>
                  Whether you are an experienced British Curriculum teacher, a Reggio Emilia specialist, or an operational leader, GES provides the platform to make a meaningful difference.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 font-mono text-xs">
                <div className="p-4 bg-[#f6f8fb] border border-[#1f265a]/10">
                  <div className="font-bold text-[#e53238]">PROFESSIONAL GROWTH</div>
                  <div className="text-[#1f265a] font-semibold mt-1">Cognia &amp; ECIS CPD</div>
                  <div className="text-[11px] text-[#1f265a]/60 mt-0.5">Annual symposiums and workshops</div>
                </div>

                <div className="p-4 bg-[#f6f8fb] border border-[#1f265a]/10">
                  <div className="font-bold text-[#3365b0]">GLOBAL COMMUNITY</div>
                  <div className="text-[#1f265a] font-semibold mt-1">Multi-National Faculty</div>
                  <div className="text-[11px] text-[#1f265a]/60 mt-0.5">Representing over 25 countries</div>
                </div>

                <div className="p-4 bg-[#f6f8fb] border border-[#1f265a]/10">
                  <div className="font-bold text-[#1f265a]">BENEFITS</div>
                  <div className="text-[#1f265a] font-semibold mt-1">Competitive Package</div>
                  <div className="text-[11px] text-[#1f265a]/60 mt-0.5">Housing, medical &amp; flight allowances</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full border border-[#1f265a]/20 bg-[#f6f8fb] overflow-hidden shadow-sm">
                <Image
                  src="/assets/img/emp.png"
                  alt="GES faculty educators collaborating in Muscat"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#1f265a] text-white px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
                  FACULTY COMMUNITY
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Six-Stage Application Process: Clean Responsive Timeline */}
      <section className="w-full bg-[#f6f8fb] py-16 xl:py-24 border-b border-[#1f265a]/15">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#1f265a]/20 gap-4 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                RECRUITMENT ROADMAP
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1f265a] mt-1">
                The Six-Stage Recruitment Process
              </h2>
            </div>
            <span className="font-mono text-xs text-[#1f265a]/60">
              Clear, transparent evaluation protocol from application to onboarding
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {careerSteps.map((step) => (
              <div 
                key={step.step}
                className="p-6 bg-white border border-[#1f265a]/15 flex flex-col justify-between group hover:border-[#1f265a]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-2xl font-extrabold text-[#e53238]">
                      0{step.step}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#1f265a]/40">
                      STAGE
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-[#1f265a] group-hover:text-[#3365b0] transition-colors mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#1f265a]/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#1f265a]/10 font-mono text-[10px] text-[#1f265a]/40">
                  STEP 0{step.step} / 06
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Application Form */}
      <section id="apply" className="w-full py-16 xl:py-24 border-b border-[#1f265a]/15">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
              STAGE 01 OF 06
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1f265a]">
              Submit Your Online Candidate Dossier
            </h2>
            <p className="text-sm text-[#1f265a]/70">
              Complete the formal application below and attach your CV. Our talent acquisition committee reviews submissions on a rolling basis.
            </p>
          </div>

          <div className="bg-[#f6f8fb] border border-[#1f265a]/15 p-8 sm:p-12 shadow-sm">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 bg-white p-8 border border-green-200">
                <div className="w-14 h-14 mx-auto bg-green-50 text-green-600 flex items-center justify-center border border-green-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1f265a]">
                  Candidate Application Successfully Logged
                </h3>
                <p className="text-sm text-[#1f265a]/70 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#1f265a]">{formData.name}</span>. Your dossier for <span className="font-semibold text-[#1f265a]">{formData.position}</span> at {formData.campus} has entered Stage 02: Resume Review.
                </p>
                <div className="font-mono text-xs text-[#1f265a]/50 bg-[#f6f8fb] py-2 px-4 inline-block border border-[#1f265a]/10">
                  APP-ID-{Math.floor(100000 + Math.random() * 900000)} • HR COMMITTEE REVIEW
                </div>
                <div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setCvFile(null);
                    }}
                    className="mt-4 px-6 py-2.5 bg-[#1f265a] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#e53238] transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1.5">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Candidate Name"
                      className="w-full px-4 py-2.5 bg-white border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="educator@domain.com"
                      className="w-full px-4 py-2.5 bg-white border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+968 9XXXXXXX"
                      className="w-full px-4 py-2.5 bg-white border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1.5">
                      Position of Interest *
                    </label>
                    <select
                      value={formData.position}
                      onChange={e => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                    >
                      <option value="British Curriculum Teacher (Primary / Secondary)">British Curriculum Teacher (Primary / Secondary)</option>
                      <option value="Early Childhood Educator (Reggio Emilia)">Early Childhood Educator (Reggio Emilia)</option>
                      <option value="Science / STEM Specialist">Science / STEM Specialist</option>
                      <option value="Mathematics & Computing Educator">Mathematics &amp; Computing Educator</option>
                      <option value="Bilingual Arabic / Islamic Studies Teacher">Bilingual Arabic / Islamic Studies Teacher</option>
                      <option value="School Administrative & Admissions Officer">School Administrative &amp; Admissions Officer</option>
                      <option value="Athletics / Physical Education Coach">Athletics / Physical Education Coach</option>
                      <option value="Executive Academic Leadership">Executive Academic Leadership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1.5">
                      Years of Experience *
                    </label>
                    <select
                      value={formData.experience}
                      onChange={e => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                    >
                      <option value="1 - 2 Years">1 - 2 Years</option>
                      <option value="3 - 5 Years">3 - 5 Years</option>
                      <option value="6 - 10 Years">6 - 10 Years</option>
                      <option value="10+ Years">10+ Years Senior Specialist</option>
                    </select>
                  </div>
                </div>

                {/* CV File Upload Section */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1.5">
                    Attach Curriculum Vitae / Resume (PDF, DOCX) *
                  </label>
                  <div className="border-2 border-dashed border-[#1f265a]/20 p-6 text-center bg-white hover:border-[#1f265a] transition-colors relative">
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={e => {
                        if (e.target.files && e.target.files[0]) {
                          setCvFile(e.target.files[0]);
                        }
                      }}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <Upload className="w-8 h-8 text-[#1f265a]/40 mx-auto mb-2" />
                    {cvFile ? (
                      <div className="font-mono text-xs text-[#e53238] font-bold">
                        Attached: {cvFile.name} ({(cvFile.size / 1024).toFixed(1)} KB)
                      </div>
                    ) : (
                      <>
                        <div className="font-display text-sm font-semibold text-[#1f265a]">
                          Click or drag and drop your CV file here
                        </div>
                        <div className="font-mono text-[11px] text-[#1f265a]/50 mt-1">
                          Supported formats: PDF, DOCX • Maximum file size: 10MB
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1.5">
                    Professional Summary / Cover Note
                  </label>
                  <textarea
                    rows={4}
                    value={formData.coverNote}
                    onChange={e => setFormData({ ...formData, coverNote: e.target.value })}
                    placeholder="Briefly describe your educational qualifications, certifications, teaching philosophy, or motivation to join GES..."
                    className="w-full p-4 bg-white border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="font-mono text-[11px] text-[#1f265a]/60 text-center sm:text-left">
                    All applications treated with strict professional confidentiality
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#1f265a] hover:bg-[#e53238] text-white font-mono text-xs uppercase tracking-widest transition-colors shadow-sm"
                  >
                    Submit Application Dossier →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 6. Career Contact Information */}
      <section className="w-full bg-[#f6f8fb] py-12 border-b border-[#1f265a]/15">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-[#1f265a]/70">
          <div>
            <span className="font-bold text-[#1f265a]">TALENT ACQUISITION DESK:</span> Airport Heights, Muscat, Oman
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:info@ges.om" className="hover:text-[#e53238]">info@ges.om</a>
            <span>•</span>
            <a href="tel:+96824554422" className="hover:text-[#e53238]">+968 24554422</a>
          </div>
        </div>
      </section>
    </main>
  );
}
