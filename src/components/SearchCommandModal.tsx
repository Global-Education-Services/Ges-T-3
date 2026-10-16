'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useUI } from './UIContext';
import { Search, X, School, BookOpen, FileText, ArrowRight, Phone, Users } from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

export default function SearchCommandModal() {
  const { isSearchOpen, closeSearch, openMeetingModal } = useUI();
  const [query, setQuery] = useState('');

  const searchableItems = useMemo(() => {
    const list: Array<{
      title: string;
      category: string;
      href: string;
      icon: any;
      description?: string;
    }> = [
      {
        title: 'Al Shomoukh International Private School (SIPS)',
        category: 'Institution',
        href: '/schools#sips',
        icon: School,
        description: 'British National Curriculum & Bilingual Stream (K-12)'
      },
      {
        title: 'Shomoukh Early Childhood Education – Al Qurum Campus',
        category: 'Institution',
        href: '/schools#shomoukh-qurum',
        icon: School,
        description: 'Reggio Emilia Inspired Early Years (Ages 1–4)'
      },
      {
        title: 'Shomoukh Early Childhood Education – Al Mouj Campus',
        category: 'Institution',
        href: '/schools#shomoukh-mouj',
        icon: School,
        description: 'Sustainable early learning in The Walk, Al Mouj'
      },
      {
        title: 'Public-Private Partnerships (PPP)',
        category: 'Educational Service',
        href: '/operational#ppp',
        icon: BookOpen,
        description: 'Oman PPP Framework educational development'
      },
      {
        title: 'Private Schools Management',
        category: 'Educational Service',
        href: '/operational#private-schools',
        icon: BookOpen,
        description: 'Complete institutional operation & quality benchmarks'
      },
      {
        title: 'Licensed Schools Intellectual Property',
        category: 'Educational Service',
        href: '/operational#licensed-schools',
        icon: BookOpen,
        description: 'Operating model integration under distinct identity'
      },
      {
        title: 'Master Franchise Operations',
        category: 'Educational Service',
        href: '/operational#master-franchise',
        icon: BookOpen,
        description: 'Territory licensing and strategic brand expansion'
      },
      {
        title: 'About GES Leadership & Journey',
        category: 'About',
        href: '/about',
        icon: Users,
        description: 'Sheikh Salim Hamood Al Hashmi and executive board'
      },
      {
        title: 'Partner with GES & Accreditations',
        category: 'Partnership',
        href: '/partner',
        icon: BookOpen,
        description: 'Cognia, ECIS, Ministry of Education, Oman Vision 2040'
      },
      {
        title: 'Careers & 6-Stage Application Process',
        category: 'Careers',
        href: '/careers',
        icon: FileText,
        description: 'World-class academic recruitment and online CV application'
      },
      {
        title: 'Download GES Corporate Brochure',
        category: 'Document',
        href: '/assets/downloads/GES Corporate Broucher.pdf',
        icon: FileText,
        description: 'Official comprehensive PDF presentation'
      },
      {
        title: 'Corporate HQ & Contact Coordinates',
        category: 'Contact',
        href: '/contact',
        icon: Phone,
        description: 'Airport Heights, Muscat • +968 24554422'
      }
    ];

    // Add news items
    GES_DATA.news.forEach(n => {
      list.push({
        title: n.title,
        category: `News (${n.category})`,
        href: `/news?id=${n.id}`,
        icon: FileText,
        description: `${n.date} — ${n.excerpt.substring(0, 80)}...`
      });
    });

    return list;
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return searchableItems.slice(0, 8);
    const q = query.toLowerCase();
    return searchableItems.filter(
      item =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q))
    );
  }, [query, searchableItems]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-[#0b1026]/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white border border-[#1f265a]/20 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#1f265a]/10 bg-[#f6f8fb]">
          <Search className="w-5 h-5 text-[#1f265a]/60 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search institutions, services, leadership, news, or documents..."
            className="w-full bg-transparent border-0 text-sm text-[#1f265a] placeholder-[#1f265a]/50 focus:outline-none"
          />
          <button
            onClick={closeSearch}
            className="p-1 text-[#1f265a]/50 hover:text-[#1f265a] transition-colors shrink-0"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto divide-y divide-[#1f265a]/5 p-2">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-[#1f265a]/60">
              No matching entries found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={closeSearch}
                  className="flex items-start justify-between p-3 hover:bg-[#f6f8fb] transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#1f265a]/5 text-[#1f265a] group-hover:bg-[#1f265a] group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#e53238] font-medium">
                          {item.category}
                        </span>
                      </div>
                      <h4 className="font-display text-sm font-semibold text-[#1f265a] group-hover:text-[#3365b0] transition-colors">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="text-xs text-[#1f265a]/60 mt-0.5 line-clamp-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#1f265a]/30 group-hover:text-[#1f265a] group-hover:translate-x-0.5 transition-all mt-1 shrink-0" />
                </Link>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#f6f8fb] border-t border-[#1f265a]/10 flex items-center justify-between font-mono text-[11px] text-[#1f265a]/60">
          <span>Press ESC to dismiss</span>
          <button
            onClick={() => {
              closeSearch();
              openMeetingModal('Direct Partnership Search Query');
            }}
            className="text-[#e53238] hover:underline font-semibold"
          >
            Schedule Meeting Directly →
          </button>
        </div>
      </div>
    </div>
  );
}
