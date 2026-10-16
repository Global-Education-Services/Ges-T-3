import React from 'react';
import EditorialHero from '@/components/home/EditorialHero';
import GesImpact from '@/components/home/GesImpact';
import AboutSection from '@/components/home/AboutSection';
import EducationalServicesSection from '@/components/home/EducationalServicesSection';
import ChairmanSection from '@/components/home/ChairmanSection';
import VisionMissionValues from '@/components/home/VisionMissionValues';
import InnovationResearch from '@/components/home/InnovationResearch';
import InstitutionsSection from '@/components/home/InstitutionsSection';
import InsideGesSection from '@/components/home/InsideGesSection';
import ContactEnquirySection from '@/components/home/ContactEnquirySection';

export const metadata = {
  title: 'GES Quality Education | Beyond the Classroom — Premier Education Group in Oman',
  description: 'Global Education Services (GES) operates leading private schools and early childhood education centers in the Sultanate of Oman, including Al Shomoukh International Private School.',
};

export default function HomePage() {
  return (
    <main className="w-full bg-white flex flex-col">
      {/* Section 2: Signature Editorial Hero */}
      <EditorialHero />

      {/* Section 3: GES Impact */}
      <GesImpact />

      {/* Section 4: About GES */}
      <AboutSection />

      {/* Section 5: Educational Services */}
      <EducationalServicesSection />

      {/* Section 6: Chairman's Message */}
      <ChairmanSection />

      {/* Section 7: Vision, Mission, Values */}
      <VisionMissionValues />

      {/* Section 8: Innovation and Research */}
      <InnovationResearch />

      {/* Section 9: Our Institutions */}
      <InstitutionsSection />

      {/* Section 10: Inside GES */}
      <InsideGesSection />

      {/* Section 11: Contact and Enquiry */}
      <ContactEnquirySection />
    </main>
  );
}
