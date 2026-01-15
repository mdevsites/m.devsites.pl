import React from 'react';
import { Metadata } from 'next';
import HeroComparison from '@/components/oferta/HeroComparison';
import ProblemsSection from '@/components/oferta/ProblemsSection';
import TechStackSection from '@/components/oferta/TechStackSection';
import CTASection from '@/components/oferta/CTASection';
import BackgroundWrapper from '@/components/oferta/BackgroundWrapper';

export const metadata: Metadata = {
    title: 'Jak Pracuję - Tworzenie Stron WWW | m.dev',
    description: 'Profesjonalne strony internetowe kodowane od zera. Bez szablonów, bez WordPressa. Sprawdź moją ofertę.',
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen text-white font-sans overflow-x-hidden relative selection:bg-purple-500/30">
            <BackgroundWrapper />

            <div className="relative z-10 text-white">
                {/* Spacer for Navbar */}

                <HeroComparison />
                <ProblemsSection />
                <TechStackSection />
                <CTASection />
            </div>
        </main>
    );
}
