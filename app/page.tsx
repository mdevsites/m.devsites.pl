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
      <Hero />
      <USPSection />
      <ProcessTimeline />
      <Testimonials />
      <CTASection />
    </>
  );
}
