'use client';

import Hero from '@/components/home/Hero';
import USPSection from '@/components/home/USPSection';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import dynamic from 'next/dynamic';

const BackgroundEffects = dynamic(() => import('@/components/ui/BackgroundEffects'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      {/* Hero Section - with tlo6.png background */}
      <div className="gradient-hero">
        <Hero />
      </div>

      {/* Other Sections - with dark abstract background */}
      <div className="dark-abstract-bg">
        <USPSection />
        <ProcessTimeline />
        <Testimonials />
        <CTASection />
      </div>
    </>
  );
}
