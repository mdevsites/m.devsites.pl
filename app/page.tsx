'use client';

import Hero from '@/components/home/Hero';
import USPSection from '@/components/home/USPSection';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import dynamic from 'next/dynamic';

import Image from 'next/image';

const BackgroundEffects = dynamic(() => import('@/components/ui/BackgroundEffects'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      {/* Hero Section - with optimized background image */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/tlo6.png"
            alt="Hero Background"
            fill
            priority
            quality={100}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10">
          <Hero />
        </div>
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
