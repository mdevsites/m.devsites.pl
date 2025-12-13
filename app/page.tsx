import Hero from '@/components/home/Hero';
import USPSection from '@/components/home/USPSection';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import BackgroundEffects from '@/components/ui/BackgroundEffects';

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
