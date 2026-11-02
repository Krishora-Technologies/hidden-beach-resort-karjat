'use client';

import CurtainPreloader from '@/components/CurtainPreloader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import SelectedWork from '@/components/SelectedWork';
import SkillsSection from '@/components/SkillsSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <div id="resort-overview">
      <CurtainPreloader />
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <SelectedWork />
      <SkillsSection />
      <WhoWeAreSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
