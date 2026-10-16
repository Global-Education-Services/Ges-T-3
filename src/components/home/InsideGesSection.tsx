'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useUI } from '../UIContext';
import { GES_DATA, NewsItem, StoryVideo } from '@/data/gesData';
import { ArrowUpRight, Play, Calendar, User, Video, ExternalLink, ChevronRight } from 'lucide-react';

export default function InsideGesSection() {
  const { openStoryModal } = useUI();
  const { news, stories } = GES_DATA;
  const [activeTab, setActiveTab] = useState<'all' | 'stories' | 'news'>('all');

  return (
    <section className="w-full bg-[#f6f8fb] border-b border-[#1f265a]/15 py-20 xl:py-28">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#1f265a]/20 gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#e53238] font-semibold">
              <span>SECTION 10</span>
              <span className="text-[#1f265a]/30">/</span>
              <span>MAGAZINE EDITORIAL &amp; COMMUNITY STORIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-bold text-[#1f265a] mt-2 tracking-tight">
              Inside GES: News &amp; Folio
            </h2>
          </div>

          {/* Tab Filter */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 border transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#1f265a] text-white border-[#1f265a]'
                  : 'bg-white text-[#1f265a] border-[#1f265a]/20 hover:border-[#1f265a]'
              }`}
            >
              All Folio ({news.length + stories.length})
            </button>
            <button
              onClick={() => setActiveTab('stories')}
              className={`px-4 py-2 border transition-colors ${
                activeTab === 'stories'
                  ? 'bg-[#1f265a] text-white border-[#1f265a]'
                  : 'bg-white text-[#1f265a] border-[#1f265a]/20 hover:border-[#1f265a]'
              }`}
            >
              Video Stories ({stories.length})
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-4 py-2 border transition-colors ${
                activeTab === 'news'
                  ? 'bg-[#1f265a] text-white border-[#1f265a]'
                  : 'bg-white text-[#1f265a] border-[#1f265a]/20 hover:border-[#1f265a]'
              }`}
            >
              Articles ({news.length})
            </button>
          </div>
        </div>

        {/* Video Stories Showcase (when all or stories tab active) */}
        {(activeTab === 'all' || activeTab === 'stories') && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3365b0] font-bold">
                CAMPUS VIDEO STORIES &amp; CEREMONIES
              </span>
              <span className="font-mono text-xs text-[#1f265a]/60">
                Click any story to stream official ceremony recordings
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story) => (
                <div
                  key={story.id}
                  onClick={() => openStoryModal(story)}
                  className="bg-white border border-[#1f265a]/15 hover:border-[#1f265a]/40 transition-all cursor-pointer group flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md"
                >
                  <div className="relative aspect-video w-full bg-[#0b1026] overflow-hidden">
                    <Image
                      src={story.thumb}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    
                    {/* Play Button Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#e53238] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 bg-[#0b1026]/90 text-white px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase">
                      {story.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-display text-base font-bold text-[#1f265a] group-hover:text-[#3365b0] transition-colors line-clamp-1">
                      {story.title}
                    </h3>
                    <p className="text-xs text-[#1f265a]/70 line-clamp-2">
                      {story.subtitle}
                    </p>
                    <div className="pt-3 border-t border-[#1f265a]/10 flex items-center justify-between font-mono text-[11px] text-[#e53238]">
                      <span>Watch Recording</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Magazine-Style Editorial Grid for Articles (when all or news tab active) */}
        {(activeTab === 'all' || activeTab === 'news') && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#e53238] font-bold">
                COMMUNITY EVENTS &amp; DISPATCHES
              </span>
              <Link
                href="/news"
                className="font-mono text-xs text-[#1f265a] hover:text-[#e53238] font-bold flex items-center gap-1"
              >
                <span>View Complete News Archive</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Asymmetrical Magazine Layout: 1 Lead Feature + Varied Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Lead Feature Article (7 cols) */}
              {news[0] && (
                <div className="lg:col-span-7 bg-white border border-[#1f265a]/15 p-6 sm:p-8 flex flex-col justify-between group hover:border-[#1f265a]/40 transition-colors">
                  <div className="space-y-4">
                    <div className="relative aspect-[16/9] w-full border border-[#1f265a]/10 overflow-hidden bg-[#f6f8fb]">
                      <Image
                        src={news[0].image}
                        alt={news[0].title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-[#e53238] text-white px-2.5 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                        FEATURED DISPATCH
                      </div>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs text-[#1f265a]/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#e53238]" />
                        <span>{news[0].date}</span>
                      </span>
                      <span>•</span>
                      <span>{news[0].category}</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1f265a] group-hover:text-[#3365b0] transition-colors leading-snug">
                      {news[0].title}
                    </h3>

                    <p className="text-sm text-[#1f265a]/80 leading-relaxed">
                      {news[0].excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#1f265a]/10 flex items-center justify-between font-mono text-xs">
                    <span className="text-[#1f265a]/50">Author: {news[0].author}</span>
                    <Link
                      href={`/news?id=${news[0].id}`}
                      className="text-[#1f265a] group-hover:text-[#e53238] font-bold flex items-center gap-1"
                    >
                      <span>Read Full Report</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Secondary Articles Stack (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                {news.slice(1, 4).map((item) => (
                  <div 
                    key={item.id} 
                    className="p-5 bg-white border border-[#1f265a]/15 hover:border-[#1f265a]/40 transition-colors flex gap-4 group"
                  >
                    <div className="relative w-24 sm:w-28 aspect-square shrink-0 border border-[#1f265a]/10 overflow-hidden bg-[#f6f8fb]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center gap-2 font-mono text-[10px] text-[#e53238]">
                          <span>{item.date}</span>
                          <span>•</span>
                          <span>{item.category}</span>
                        </div>
                        <h4 className="font-display text-sm font-bold text-[#1f265a] group-hover:text-[#3365b0] transition-colors line-clamp-2 mt-1">
                          {item.title}
                        </h4>
                      </div>
                      <Link
                        href={`/news?id=${item.id}`}
                        className="font-mono text-[11px] text-[#1f265a] group-hover:text-[#e53238] font-semibold flex items-center gap-1 pt-2"
                      >
                        <span>Examine Story</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Remaining articles in compact architectural grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {news.slice(4).map((item) => (
                <div 
                  key={item.id} 
                  className="p-5 bg-white border border-[#1f265a]/15 hover:border-[#1f265a]/40 transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full border border-[#1f265a]/10 overflow-hidden mb-3">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="font-mono text-[10px] text-[#e53238] mb-1">
                      {item.date} • {item.category}
                    </div>
                    <h4 className="font-display text-xs font-bold text-[#1f265a] group-hover:text-[#3365b0] transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                  <Link
                    href={`/news?id=${item.id}`}
                    className="mt-4 pt-2 border-t border-[#1f265a]/10 font-mono text-[11px] text-[#1f265a] group-hover:text-[#e53238] font-semibold flex items-center justify-between"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
