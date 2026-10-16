'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUI } from '@/components/UIContext';
import { GES_DATA, NewsItem, StoryVideo } from '@/data/gesData';
import { ArrowUpRight, Calendar, User, Play, ChevronRight, Filter, ExternalLink, X } from 'lucide-react';

export default function NewsPage() {
  const { openStoryModal } = useUI();
  const { news, stories } = GES_DATA;

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const categories = ['All', 'National Heritage', 'Community & Culture', 'Athletics & Wellness', 'Literacy & Learning', 'Civic Awareness', 'Academics & Values', 'Cultural Heritage', 'Pedagogy'];

  const filteredNews = selectedCategory === 'All'
    ? news
    : news.filter(n => n.category === selectedCategory);

  return (
    <main className="w-full bg-white">
      {/* 1. Editorial News Hero */}
      <section className="w-full bg-[#f6f8fb] border-b border-[#1f265a]/15 py-16 xl:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                <span>GES MEDIA DESK</span>
                <span>/</span>
                <span>NEWS &amp; FOLIO</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#1f265a] tracking-tight leading-tight">
                Dispatches, Events &amp; Inside GES Stories
              </h1>
              <p className="text-lg sm:text-xl text-[#1f265a]/80 max-w-2xl font-normal leading-relaxed">
                Documenting academic achievements, cultural traditions, sports championships, and graduation milestones across the GES educational network in Oman.
              </p>
            </div>
            <div className="lg:col-span-4 font-mono text-xs text-[#1f265a]/60 space-y-1 pb-2">
              <div>8 VERIFIED ARCHIVED DISPATCHES</div>
              <div>6 OFFICIAL CEREMONY RECORDINGS</div>
              <div>AL SHOMOUKH INTERNATIONAL NETWORK</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Video Stories Bar */}
      <section className="w-full py-12 border-b border-[#1f265a]/15 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                MEDIA FOLIO
              </span>
              <h2 className="font-display text-2xl font-bold text-[#1f265a] mt-1">
                Official Video Ceremonies &amp; Student Stories
              </h2>
            </div>
            <span className="font-mono text-xs text-[#1f265a]/60 hidden sm:inline">
              Click to launch ceremony recording
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <div
                key={story.id}
                onClick={() => openStoryModal(story)}
                className="bg-[#f6f8fb] border border-[#1f265a]/15 hover:border-[#1f265a]/40 transition-all cursor-pointer group flex flex-col justify-between overflow-hidden shadow-sm"
              >
                <div className="relative aspect-video w-full bg-[#0b1026] overflow-hidden">
                  <Image
                    src={story.thumb}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#e53238] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-[#0b1026]/90 text-white px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase">
                    {story.category}
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <h3 className="font-display text-sm font-bold text-[#1f265a] group-hover:text-[#3365b0] transition-colors line-clamp-1">
                    {story.title}
                  </h3>
                  <p className="text-xs text-[#1f265a]/70 line-clamp-1">
                    {story.subtitle}
                  </p>
                  <div className="pt-2 flex items-center justify-between font-mono text-[11px] text-[#e53238]">
                    <span>Watch Folio Stream</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Category Filter & Archive */}
      <section className="w-full py-16 xl:py-24 border-b border-[#1f265a]/15 bg-[#f6f8fb]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
          
          {/* Header & Filter bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-[#1f265a]/20 gap-4 mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#3365b0] font-bold">
                DOCUMENTED ARTICLES
              </span>
              <h2 className="font-display text-3xl font-bold text-[#1f265a] mt-1">
                News &amp; Event Archive
              </h2>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="text-[#1f265a]/50 text-[11px] mr-1 hidden sm:inline">FILTER:</span>
              {categories.slice(0, 5).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 border transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#1f265a] text-white border-[#1f265a]'
                      : 'bg-white text-[#1f265a] border-[#1f265a]/20 hover:border-[#1f265a]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <div 
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-white border border-[#1f265a]/15 hover:border-[#1f265a]/40 transition-all cursor-pointer flex flex-col justify-between group overflow-hidden shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full border-b border-[#1f265a]/10 overflow-hidden bg-[#f6f8fb]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#1f265a] text-white px-2.5 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 font-mono text-xs text-[#1f265a]/60">
                      <Calendar className="w-3.5 h-3.5 text-[#e53238]" />
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.author}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-[#1f265a] group-hover:text-[#3365b0] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-[#1f265a]/75 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#1f265a]/10 mt-4 flex items-center justify-between font-mono text-xs text-[#1f265a] group-hover:text-[#e53238] font-bold">
                  <span>Read Article Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Article Detail Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1026]/80 backdrop-blur-sm animate-fade-in">
          <div 
            className="relative w-full max-w-3xl bg-white border border-[#1f265a]/20 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-start justify-between pb-4 border-b border-[#1f265a]/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                  {selectedArticle.category} • {selectedArticle.date}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1f265a] mt-1">
                  {selectedArticle.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-[#1f265a]/60 hover:text-[#1f265a] hover:bg-[#f6f8fb] transition-colors"
                aria-label="Close article"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-6 relative aspect-video w-full border border-[#1f265a]/15 overflow-hidden bg-[#f6f8fb]">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#1f265a]/80 leading-relaxed font-normal">
              <p className="font-medium text-[#1f265a]">
                {selectedArticle.excerpt}
              </p>
              <p>
                As part of the continuous pedagogical mission of Global Education Services (GES), our school community actively engages in curricular, athletic, and cultural initiatives that reinforce character, civic responsibility, and academic rigor.
              </p>
              <p>
                From experiential visits to national cultural institutions to school-wide literary symposiums, GES students participate in diverse learning environments that extend far beyond classroom walls.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1f265a]/10 flex items-center justify-between font-mono text-xs text-[#1f265a]/60">
              <span>Author: {selectedArticle.author} • GES Media Desk</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-[#1f265a] text-white hover:bg-[#e53238] transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
