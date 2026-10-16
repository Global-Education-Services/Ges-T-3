'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUI } from '@/components/UIContext';
import { GES_DATA } from '@/data/gesData';
import { ArrowUpRight, Phone, Mail, MapPin, Clock, CheckCircle2, Calendar, Send, ExternalLink, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const { openMeetingModal } = useUI();
  const { contact } = GES_DATA;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Institutional Inquiry',
    department: 'Executive Administration',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="w-full bg-white">
      {/* 1. Contact Hero */}
      <section className="w-full bg-[#f6f8fb] border-b border-[#1f265a]/15 py-16 xl:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                <span>GES EXECUTIVE HEADQUARTERS</span>
                <span>/</span>
                <span>CONTACT DIRECTORY</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#1f265a] tracking-tight leading-tight">
                Connect with Global Education Services
              </h1>
              <p className="text-lg sm:text-xl text-[#1f265a]/80 max-w-2xl font-normal leading-relaxed">
                Contact our executive administration in Airport Heights, Muscat for institutional inquiries, school admissions, curriculum licensing, or executive meetings.
              </p>
            </div>
            <div className="lg:col-span-4 font-mono text-xs text-[#1f265a]/60 space-y-1 pb-2">
              <div>OFFICIAL HQ: AIRPORT HEIGHTS, MUSCAT</div>
              <div>HOTLINE: +968 24554422</div>
              <div>24-HOUR EFFECTIVE SUPPORT DESK</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Corporate Contact Info & Functional Enquiry Form */}
      <section className="w-full py-16 xl:py-24 border-b border-[#1f265a]/15">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
            
            {/* Left: Complete Corporate Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 bg-[#f6f8fb] border border-[#1f265a]/15 space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                    CORPORATE HEADQUARTERS
                  </span>
                  <h2 className="font-display text-2xl font-bold text-[#1f265a] mt-1">
                    {contact.organization}
                  </h2>
                </div>

                <div className="space-y-4 text-sm text-[#1f265a]/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#e53238] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-display font-bold text-[#1f265a]">Office Address</div>
                      <div>{contact.address}</div>
                      <div className="font-mono text-xs text-[#1f265a]/60 mt-0.5">{contact.poBox}</div>
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

                <div className="pt-4 border-t border-[#1f265a]/15">
                  <button
                    onClick={() => openMeetingModal('Contact Page Executive Consultation')}
                    className="w-full py-3.5 bg-[#1f265a] hover:bg-[#e53238] text-white font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request Executive Meeting</span>
                  </button>
                </div>
              </div>

              {/* Geographic Coordinates Card */}
              <div className="p-6 border border-[#1f265a]/15 bg-white font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-[#e53238] font-bold">
                  <span>GEOGRAPHIC COORDINATES</span>
                  <span>MUSCAT HQ</span>
                </div>
                <div className="text-[#1f265a]">
                  Latitude: {contact.geo.lat}° N • Longitude: {contact.geo.lng}° E
                </div>
                <div className="text-[#1f265a]/50 text-[11px]">
                  Proximity: Muscat International Airport (10 mins) • Airport Heights Commercial District
                </div>
              </div>
            </div>

            {/* Right: Functional Interactive Enquiry Form */}
            <div className="lg:col-span-7 bg-[#f6f8fb] border border-[#1f265a]/15 p-8 sm:p-12">
              <div className="mb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-[#3365b0] font-bold">
                  OFFICIAL ENQUIRY DESK
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1f265a] mt-1">
                  Send an Official Dispatch
                </h2>
                <p className="text-xs text-[#1f265a]/70 mt-1">
                  Fill in your details and message. Your communication is routed directly to executive leadership.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 bg-white p-8 border border-green-200">
                  <div className="w-14 h-14 mx-auto bg-green-50 text-green-600 flex items-center justify-center border border-green-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#1f265a]">
                    Official Communication Logged
                  </h3>
                  <p className="text-sm text-[#1f265a]/70 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-[#1f265a]">{formData.name}</span>. Your enquiry for <span className="font-semibold text-[#1f265a]">{formData.department}</span> has been assigned an internal tracking reference and our team will respond within 24 business hours.
                  </p>
                  <div className="font-mono text-xs text-[#1f265a]/50 bg-[#f6f8fb] py-2 px-4 inline-block border border-[#1f265a]/10">
                    DISPATCH-REF-{Math.floor(100000 + Math.random() * 900000)} • LOGGED
                  </div>
                  <div>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-2.5 bg-[#1f265a] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#e53238] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
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
                        placeholder="contact@domain.com"
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
                        Department Destination *
                      </label>
                      <select
                        value={formData.department}
                        onChange={e => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                      >
                        <option value="Executive Administration">Executive Administration</option>
                        <option value="School Admissions (SIPS & ECE)">School Admissions (SIPS &amp; ECE)</option>
                        <option value="Public-Private Partnerships (PPP)">Public-Private Partnerships (PPP)</option>
                        <option value="Curriculum & Academic Audit">Curriculum &amp; Academic Audit</option>
                        <option value="Financial & Investor Relations">Financial &amp; Investor Relations</option>
                        <option value="Careers & HR Recruitment">Careers &amp; HR Recruitment</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1">
                      Subject Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Brief topic of your communication"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1">
                      Detailed Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide specifics regarding your inquiry..."
                      className="w-full p-3.5 bg-white border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#1f265a]/60">
                      24-Hour Effective Support Protocol
                    </span>
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-[#1f265a] hover:bg-[#e53238] text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-colors shadow-sm"
                    >
                      <span>Submit Dispatch</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Interactive Location & Map Section */}
      <section className="w-full bg-[#f6f8fb] py-16 xl:py-24 border-b border-[#1f265a]/15">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#1f265a]/20 gap-4 mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                GEOGRAPHIC LOCATION
              </span>
              <h2 className="font-display text-3xl font-bold text-[#1f265a] mt-1">
                Muscat Corporate Headquarters &amp; Map Coordinates
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=23.6302,58.1937"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#1f265a] hover:text-[#e53238] font-bold flex items-center gap-1.5"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="border border-[#1f265a]/20 bg-white p-4">
            <div className="relative aspect-[21/9] w-full min-h-[300px] bg-[#eef2f7] overflow-hidden flex items-center justify-center">
              <iframe
                title="GES Corporate Headquarters Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14624.966398606456!2d58.1937!3d23.6302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8dfef3a1b32d1d%3A0x6b7724128f1e29e9!2sAirport%20Heights%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2som!4v1650000000000!5m2!1sen!2som"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
