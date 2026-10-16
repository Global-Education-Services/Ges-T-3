'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { GES_DATA, StoryVideo } from '@/data/gesData';

interface UIContextType {
  isMeetingModalOpen: boolean;
  openMeetingModal: (defaultSubject?: string) => void;
  closeMeetingModal: () => void;
  meetingSubject: string;

  activeStory: StoryVideo | null;
  openStoryModal: (story: StoryVideo) => void;
  closeStoryModal: () => void;

  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;

  isMobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;

  isRtl: boolean;
  toggleRtl: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [meetingSubject, setMeetingSubject] = useState('');
  const [activeStory, setActiveStory] = useState<StoryVideo | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const openMeetingModal = (subject: string = 'General Academic Partnership') => {
    setMeetingSubject(subject);
    setIsMeetingModalOpen(true);
  };

  const closeMeetingModal = () => {
    setIsMeetingModalOpen(false);
  };

  const openStoryModal = (story: StoryVideo) => {
    setActiveStory(story);
  };

  const closeStoryModal = () => {
    setActiveStory(null);
  };

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const toggleRtl = () => {
    setIsRtl(prev => !prev);
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
      document.documentElement.lang = isRtl ? 'ar' : 'en';
    }
  }, [isRtl]);

  // Close modals on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMeetingModal();
        closeStoryModal();
        closeSearch();
        setMobileNavOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <UIContext.Provider
      value={{
        isMeetingModalOpen,
        openMeetingModal,
        closeMeetingModal,
        meetingSubject,
        activeStory,
        openStoryModal,
        closeStoryModal,
        isSearchOpen,
        openSearch,
        closeSearch,
        isMobileNavOpen,
        setMobileNavOpen,
        isRtl,
        toggleRtl
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}
