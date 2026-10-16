'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useUI } from './UIContext';
import { Search, Menu, X, ArrowUpRight, Globe, ChevronDown, Calendar } from 'lucide-react';
import { GES_DATA } from '@/data/gesData';

export default function Header() {
  const pathname = usePathname();
  const { isMobileNavOpen, setMobileNavOpen, openMeetingModal, openSearch, isRtl, toggleRtl } = useUI();
  const [schoolsDropdown, setSchoolsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileNavOpen(false);
    setSchoolsDropdown(false);
  }, [pathname, setMobileNavOpen]);

  const navLinks = [
    { label: 'Overview', href: '/' },
    { label: 'About GES', href: '/about' },
    { label: 'Our Schools', href: '/schools', hasSubmenu: true },
    { label: 'Services', href: '/operational' },
    { label: 'Partnership', href: '/partner' },
    { label: 'Careers', href: '/careers' },
    { label: 'News & Folio', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#1f265a]/10' 
            : 'bg-white border-b border-[#1f265a]/10'
        }`}
      >
        {/* Top utility ticker / architectural coordinate bar */}
        <div className="hidden lg:flex items-center justify-between px-6 xl:px-12 py-1.5 bg-[#f6f8fb] border-b border-[#1f265a]/10 font-mono text-[11px] text-[#1f265a]/70">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>SULTANATE OF OMAN</span>
            </span>
            <span className="text-[#1f265a]/30">|</span>
            <span>23°37&apos;48&quot;N 58°11&apos;37&quot;E — AIRPORT HEIGHTS, MUSCAT</span>
            <span className="text-[#1f265a]/30">|</span>
            <span>ACCREDITED BY COGNIA &amp; ECIS</span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => openMeetingModal('Executive Consultation')}
              className="text-[#e53238] hover:text-[#1f265a] transition-colors flex items-center gap-1 font-medium"
            >
              <Calendar className="w-3 h-3" />
              <span>REQUEST EXECUTIVE MEETING</span>
            </button>
            <span className="text-[#1f265a]/30">|</span>
            <a 
              href="tel:+96824554422" 
              className="hover:text-[#e53238] transition-colors"
            >
              TEL: +968 24554422
            </a>
            <span className="text-[#1f265a]/30">|</span>
            <button
              onClick={toggleRtl}
              className="flex items-center gap-1 text-[#1f265a] hover:text-[#e53238] font-bold"
              title="Toggle Arabic / RTL preview"
            >
              <Globe className="w-3 h-3" />
              <span>{isRtl ? 'ENGLISH' : 'العربية (RTL)'}</span>
            </button>
          </div>
        </div>

        {/* Main Architectural Navigation Bar */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12 h-20 flex items-center justify-between">
          {/* Original Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group shrink-0 py-2 focus:outline-none"
            aria-label="GES Home - Beyond the Classroom"
          >
            <div className="relative w-44 sm:w-52 h-14">
              <Image
                src="/assets/img/banner/ges-logo.png"
                alt="Global Education Services - GES Quality Education"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
            <div className="hidden sm:block pl-3 border-l border-[#1f265a]/15 text-[10px] font-mono uppercase tracking-widest text-[#1f265a]/60 leading-tight">
              BEYOND THE<br />
              <span className="text-[#e53238] font-bold">CLASSROOM</span>
            </div>
          </Link>

          {/* Desktop Horizontal Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2 font-display text-[13px] tracking-wide font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              
              if (link.hasSubmenu) {
                return (
                  <div 
                    key={link.href} 
                    className="relative group"
                    onMouseEnter={() => setSchoolsDropdown(true)}
                    onMouseLeave={() => setSchoolsDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3 py-2 flex items-center gap-1 transition-colors border-b-2 ${
                        isActive
                          ? 'border-[#e53238] text-[#1f265a] font-bold'
                          : 'border-transparent text-[#1f265a]/80 hover:text-[#1f265a] hover:border-[#1f265a]/20'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-[#1f265a]/40 group-hover:text-[#1f265a]" />
                    </Link>

                    {/* Architectural Dropdown Menu */}
                    <div 
                      className={`absolute top-full left-0 w-80 bg-white border border-[#1f265a]/20 shadow-xl transition-all duration-200 py-2 ${
                        schoolsDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="px-4 py-1.5 border-b border-[#1f265a]/10 font-mono text-[10px] tracking-widest uppercase text-[#e53238]">
                        Verified Institutions Network
                      </div>
                      {GES_DATA.schools.map((school) => (
                        <Link
                          key={school.id}
                          href={`/schools#${school.id}`}
                          className="block px-4 py-2.5 hover:bg-[#f6f8fb] transition-colors group/item"
                        >
                          <div className="font-display text-xs font-bold text-[#1f265a] group-hover/item:text-[#3365b0]">
                            {school.shortName}
                          </div>
                          <div className="font-mono text-[10px] text-[#1f265a]/60 line-clamp-1 mt-0.5">
                            {school.curriculum}
                          </div>
                        </Link>
                      ))}
                      <div className="p-2 border-t border-[#1f265a]/10 bg-[#f6f8fb] mt-1">
                        <Link
                          href="/schools"
                          className="flex items-center justify-between text-[11px] font-mono text-[#1f265a] font-semibold hover:text-[#e53238] px-2 py-1"
                        >
                          <span>Explore All Campuses</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 transition-colors border-b-2 ${
                    isActive
                      ? 'border-[#e53238] text-[#1f265a] font-bold'
                      : 'border-transparent text-[#1f265a]/80 hover:text-[#1f265a] hover:border-[#1f265a]/20'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={openSearch}
              className="flex items-center gap-2 px-3 py-2 text-[#1f265a]/70 hover:text-[#1f265a] border border-[#1f265a]/15 hover:border-[#1f265a]/40 bg-white transition-all text-xs font-mono"
              aria-label="Search site"
            >
              <Search className="w-4 h-4 text-[#1f265a]/60" />
              <span className="hidden xl:inline text-[11px] text-[#1f265a]/50">SEARCH (⌘K)</span>
            </button>

            {/* Primary Executive Meeting CTA */}
            <button
              onClick={() => openMeetingModal('General Academic Consultation')}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-[#1f265a] hover:bg-[#e53238] text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <span>Meeting Request</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              onClick={() => setMobileNavOpen(!isMobileNavOpen)}
              className="xl:hidden p-2 text-[#1f265a] hover:bg-[#f6f8fb] border border-[#1f265a]/15 transition-colors"
              aria-label={isMobileNavOpen ? 'Close navigation' : 'Open navigation'}
            >
              {isMobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Architectural Drawer */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 top-[80px] z-30 lg:hidden bg-white/98 backdrop-blur-md overflow-y-auto border-t border-[#1f265a]/15 animate-fade-in">
          <div className="p-6 space-y-6 max-w-lg mx-auto">
            {/* Quick Actions Bar */}
            <div className="grid grid-cols-2 gap-3 pb-4 border-b border-[#1f265a]/10">
              <button
                onClick={() => {
                  setMobileNavOpen(false);
                  openSearch();
                }}
                className="flex items-center justify-center gap-2 p-3 bg-[#f6f8fb] border border-[#1f265a]/15 text-xs font-mono uppercase tracking-wider text-[#1f265a]"
              >
                <Search className="w-4 h-4 text-[#e53238]" />
                <span>Search</span>
              </button>
              <button
                onClick={toggleRtl}
                className="flex items-center justify-center gap-2 p-3 bg-[#f6f8fb] border border-[#1f265a]/15 text-xs font-mono uppercase tracking-wider text-[#1f265a]"
              >
                <Globe className="w-4 h-4 text-[#3365b0]" />
                <span>{isRtl ? 'English' : 'العربية'}</span>
              </button>
            </div>

            {/* Main Links */}
            <nav className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-3 px-4 text-base font-display font-medium border-l-2 transition-colors ${
                      isActive
                        ? 'border-[#e53238] bg-[#f6f8fb] text-[#1f265a] font-bold'
                        : 'border-transparent text-[#1f265a]/80 hover:text-[#1f265a] hover:bg-[#f6f8fb]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Institution quick links */}
            <div className="pt-4 border-t border-[#1f265a]/10">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#e53238] font-bold mb-3">
                Our Schools &amp; Early Centers
              </div>
              <div className="space-y-2">
                {GES_DATA.schools.map((school) => (
                  <Link
                    key={school.id}
                    href={`/schools#${school.id}`}
                    className="block p-3 bg-[#f6f8fb] border border-[#1f265a]/10 hover:border-[#1f265a]/30 transition-colors"
                  >
                    <div className="font-display text-sm font-semibold text-[#1f265a]">
                      {school.shortName}
                    </div>
                    <div className="font-mono text-[11px] text-[#1f265a]/60 mt-0.5">
                      {school.curriculum}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileNavOpen(false);
                  openMeetingModal('Mobile Executive Consultation');
                }}
                className="w-full py-3.5 bg-[#1f265a] text-white text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#e53238] transition-colors"
              >
                <span>Request Executive Meeting</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Footer contact coordinates */}
            <div className="pt-4 border-t border-[#1f265a]/10 font-mono text-[11px] text-[#1f265a]/60 space-y-1">
              <div>HQ: Airport Heights, Muscat, Oman</div>
              <div>Direct: +968 24554422 • info@ges.om</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
