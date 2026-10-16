'use client';

import React, { useState } from 'react';
import { useUI } from '../UIContext';
import { GES_DATA } from '@/data/gesData';
import { ArrowUpRight, CheckCircle2, Phone, Mail, MapPin, Clock, Calendar, Send } from 'lucide-react';

export default function ContactEnquirySection() {
  const { openMeetingModal } = useUI();
  const { contact } = GES_DATA;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Partnership / School Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="w-full bg-white border-b border-[#1f265a]/15 py-20 xl:py-28">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#1f265a]/20 gap-4 mb-14">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-semibold">
              <span>SECTION 11</span>
              <span className="text-[#1f265a]/30">/</span>
              <span>COMMUNICATIONS &amp; ENGAGEMENT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-bold text-[#1f265a] mt-2 tracking-tight">
              Contact &amp; Enquiry Portal
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-[#1f265a]/70">
            Connect with our executive headquarters in Airport Heights, Muscat for institutional partnerships, admissions, or administrative support.
          </p>
        </div>

        {/* 12-Column Grid: Corporate Contact Info (5 cols) + Interactive Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* Left: Verified Corporate Coordinates & Direct Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#f6f8fb] border border-[#1f265a]/15 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold block">
                HEADQUARTERS DIRECTORY
              </span>

              <div className="space-y-4 text-sm text-[#1f265a]/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#e53238] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-display font-bold text-[#1f265a]">Location &amp; Postal</div>
                    <div>{contact.address}</div>
                    <div className="text-xs text-[#1f265a]/60 font-mono mt-0.5">{contact.poBox}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#3365b0] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-display font-bold text-[#1f265a]">Telephone Lines</div>
                    <a href={`tel:${contact.phoneClean}`} className="hover:text-[#e53238] font-mono transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-display font-bold text-[#1f265a]">Electronic Mail</div>
                    <a href={`mailto:${contact.email}`} className="hover:text-[#e53238] font-mono transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1f265a]/50 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-display font-bold text-[#1f265a]">Working Hours</div>
                    <div className="text-xs font-mono">{contact.workingHours}</div>
                  </div>
                </div>
              </div>

              {/* Instant Meeting Action */}
              <div className="pt-4 border-t border-[#1f265a]/15">
                <button
                  onClick={() => openMeetingModal('Section 11 Direct Meeting Booking')}
                  className="w-full py-3 bg-[#1f265a] hover:bg-[#e53238] text-white font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Executive Consultation</span>
                </button>
              </div>
            </div>

            {/* Support guarantee badge */}
            <div className="p-4 border border-[#1f265a]/15 flex items-center justify-between font-mono text-xs text-[#1f265a]/70">
              <span>SUPPORT PROTOCOL: 24-HOUR GUARANTEE</span>
              <span className="text-[#e53238] font-bold">ACTIVE</span>
            </div>
          </div>

          {/* Right: Functional Interactive Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#f6f8fb] border border-[#1f265a]/15 p-8 sm:p-10">
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3365b0] font-bold">
                DIRECT ENQUIRY
              </span>
              <h3 className="font-display text-2xl font-bold text-[#1f265a] mt-1">
                Send an Official Message
              </h3>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 bg-white p-6 border border-[#1f265a]/10">
                <div className="w-12 h-12 mx-auto bg-green-50 text-green-600 flex items-center justify-center border border-green-200">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-display text-xl font-bold text-[#1f265a]">
                  Enquiry Dispatched Successfully
                </h4>
                <p className="text-sm text-[#1f265a]/70 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#1f265a]">{formData.name}</span>. Your correspondence regarding &ldquo;{formData.subject}&rdquo; has been routed to the relevant GES department in Airport Heights, Muscat.
                </p>
                <div className="font-mono text-xs text-[#1f265a]/50">
                  REF-ENQ-{Math.floor(100000 + Math.random() * 900000)} • LOGGED
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-[#1f265a] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#e53238] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Sheikh / Dr. / Mr. / Ms."
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="address@domain.om"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+968 9XXXXXXX"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1">
                      Area of Inquiry *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                    >
                      <option value="General Partnership / School Inquiry">General Partnership / School Inquiry</option>
                      <option value="Al Shomoukh SIPS Admissions">Al Shomoukh SIPS Admissions</option>
                      <option value="Shomoukh ECE Qurum Campus">Shomoukh ECE Qurum Campus</option>
                      <option value="Shomoukh ECE Al Mouj Campus">Shomoukh ECE Al Mouj Campus</option>
                      <option value="Public-Private Partnership (PPP)">Public-Private Partnership (PPP)</option>
                      <option value="School Operational Licensing">School Operational Licensing</option>
                      <option value="Careers & Academic Opportunities">Careers &amp; Academic Opportunities</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1">
                    Message / Proposal *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Details regarding your student, institution, or partnership inquiry..."
                    className="w-full p-3.5 bg-white border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#1f265a]/60">
                    Encrypted &amp; routed directly to Muscat HQ
                  </span>
                  <button
                    type="submit"
                    className="px-7 py-3 bg-[#1f265a] hover:bg-[#e53238] text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
