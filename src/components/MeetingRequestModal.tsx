'use client';

import React, { useState } from 'react';
import { useUI } from './UIContext';
import { X, Calendar, Clock, CheckCircle2, Building, Mail, Phone, User } from 'lucide-react';

export default function MeetingRequestModal() {
  const { isMeetingModalOpen, closeMeetingModal, meetingSubject } = useUI();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    topic: meetingSubject || 'Public-Private Partnership (PPP)',
    preferredDate: '',
    notes: ''
  });

  if (!isMeetingModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    closeMeetingModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1026]/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-white border border-[#1f265a]/20 shadow-2xl p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="meeting-modal-title"
      >
        {/* Header bar */}
        <div className="flex items-start justify-between pb-4 border-b border-[#1f265a]/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-semibold">
              GES Executive Engagement
            </span>
            <h2 id="meeting-modal-title" className="font-display text-2xl font-bold text-[#1f265a] mt-1">
              Request a Leadership Meeting
            </h2>
          </div>
          <button
            onClick={closeMeetingModal}
            className="p-1.5 text-[#1f265a]/60 hover:text-[#1f265a] hover:bg-[#f6f8fb] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 mx-auto bg-green-50 text-green-600 flex items-center justify-center border border-green-200">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#1f265a]">
              Meeting Request Received
            </h3>
            <p className="text-sm text-[#1f265a]/70 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-[#1f265a]">{formData.name || 'Partner'}</span>. 
              Our executive office at Airport Heights, Muscat will review your agenda on 
              <span className="font-semibold text-[#1f265a]"> {formData.topic}</span> and confirm meeting coordinates within 24 business hours.
            </p>
            <div className="font-mono text-xs text-[#1f265a]/50 bg-[#f6f8fb] py-2 px-3 inline-block border border-[#1f265a]/10">
              REF-MTG-{Math.floor(100000 + Math.random() * 900000)} • MUSCAT HQ
            </div>
            <div>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-[#1f265a] text-white text-xs font-mono tracking-wider uppercase hover:bg-[#e53238] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-[#1f265a]/40" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Sheikh / Dr. / Mr. / Ms."
                    className="w-full pl-9 pr-3 py-2 border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1">
                  Organization / School *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 w-4 h-4 text-[#1f265a]/40" />
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={e => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Institutional Entity"
                    className="w-full pl-9 pr-3 py-2 border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-[#1f265a]/40" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="colleague@domain.com"
                    className="w-full pl-9 pr-3 py-2 border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1">
                  Phone (WhatsApp / Mobile) *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-[#1f265a]/40" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+968 9XXXXXXX"
                    className="w-full pl-9 pr-3 py-2 border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1">
                  Agenda Topic *
                </label>
                <select
                  value={formData.topic}
                  onChange={e => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3 py-2 border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none bg-white"
                >
                  <option value="Public-Private Partnership (PPP)">Public-Private Partnership (PPP)</option>
                  <option value="Licensed Schools Model">Licensed Schools Model</option>
                  <option value="Master Franchise Inquiries">Master Franchise Inquiries</option>
                  <option value="Curriculum & Academic Audit">Curriculum & Academic Audit</option>
                  <option value="School Admissions & Enrollment">School Admissions & Enrollment</option>
                  <option value="General Leadership Engagement">General Leadership Engagement</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-[#1f265a]/40" />
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1f265a]/70 mb-1">
                Agenda Summary / Note
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Specific institutional focus, number of delegates, or inquiry scope..."
                className="w-full p-3 border border-[#1f265a]/20 text-sm text-[#1f265a] focus:border-[#1f265a] focus:outline-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#1f265a]/60">
                24-Hour Effective Support Protocol
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#1f265a] text-white text-xs font-mono uppercase tracking-widest hover:bg-[#e53238] transition-colors"
              >
                Submit Meeting Request →
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
