import type { Metadata } from 'next';
import './globals.css';
import { UIProvider } from '@/components/UIContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MeetingRequestModal from '@/components/MeetingRequestModal';
import StoryVideoModal from '@/components/StoryVideoModal';
import SearchCommandModal from '@/components/SearchCommandModal';

export const metadata: Metadata = {
  title: 'GES Quality Education | Beyond the Classroom',
  description: 'Global Education Services (GES) is a premier private education group in the Sultanate of Oman operating world-class schools and early childhood centers.',
  icons: {
    icon: '/assets/img/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans bg-white text-[#1f265a] selection:bg-[#1f265a] selection:text-white">
        <UIProvider>
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />

          {/* Interactive Modals */}
          <MeetingRequestModal />
          <StoryVideoModal />
          <SearchCommandModal />
        </UIProvider>
      </body>
    </html>
  );
}
