'use client';

import React from 'react';
import { useUI } from './UIContext';
import { X, Play, ExternalLink } from 'lucide-react';

export default function StoryVideoModal() {
  const { activeStory, closeStoryModal } = useUI();

  if (!activeStory) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1026]/90 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#0b1026] border border-white/20 shadow-2xl p-4 sm:p-6 text-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="story-modal-title"
      >
        <div className="flex items-start justify-between pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-widest uppercase bg-[#e53238] px-2 py-0.5 text-white">
                {activeStory.category}
              </span>
              <span className="font-mono text-xs text-white/50">
                Inside GES Archive
              </span>
            </div>
            <h3 id="story-modal-title" className="font-display text-xl sm:text-2xl font-bold mt-1 text-white">
              {activeStory.title}
            </h3>
            <p className="text-xs text-white/70 mt-0.5">
              {activeStory.subtitle}
            </p>
          </div>
          <button
            onClick={closeStoryModal}
            className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close video story"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 16:9 Video Embed Container */}
        <div className="mt-4 relative aspect-video w-full bg-black border border-white/10 overflow-hidden">
          <iframe
            src={`${activeStory.embedUrl}?autoplay=1&rel=0`}
            title={activeStory.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="mt-4 flex items-center justify-between font-mono text-xs text-white/50 pt-2 border-t border-white/10">
          <span>Official GES Quality Education Video Folio</span>
          <a
            href={activeStory.embedUrl.replace('embed/', 'watch?v=')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/80 hover:text-[#e53238] transition-colors"
          >
            <span>Watch on YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
