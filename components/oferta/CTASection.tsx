'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const CTASection = () => {
    return (
        <section className="section-spacing relative w-full overflow-hidden">
            {/* Local glow removed to use global AuroraBackground */}

            <div className="container-custom relative z-10 text-center">

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                    Zobacz, jak mogłaby wyglądać Twoja strona
                </h2>

                <div className="h-10 md:h-12" />

                <p className="text-xl text-neutral-300 font-light max-w-5xl mx-auto">
                    Jeśli chcesz zobaczyć, jak mogłaby wyglądać strona zaprojektowana pod Twoją branżę — napisz kilka słów o swoim projekcie.
                </p>

                <div className="h-12 md:h-16" />

                <div>
                    <Link
                        href="/contact"
                        className="inline-flex flex-col items-center justify-center rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group"
                    >
                        <div className="h-5" />
                        <div className="flex items-center">
                            <div className="w-12" />
                            <span className="text-white text-sm md:text-base font-medium tracking-widest uppercase">Zobacz koncepcję strony</span>
                            <div className="w-4" />
                            <ArrowRightIcon className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
                            <div className="w-12" />
                        </div>
                        <div className="h-5" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default CTASection;
