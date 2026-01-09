'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

interface CTASectionProps {
    title?: string;
    description?: string;
    buttonText?: string;
}

export default function CTASection({
    title = "Gotowy na nową stronę internetową?",
    description = "Skontaktuj się już dziś i otrzymaj bezpłatną wycenę. Stworzę dla Ciebie coś wyjątkowego.",
    buttonText = "Wyślij zapytanie"
}: CTASectionProps) {
    return (
        <section className="section-spacing relative overflow-hidden !pt-12 z-10">
            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center drop-shadow-lg">
                        {title}
                    </h2>
                    <p className="text-xl text-white !mb-16 leading-relaxed max-w-4xl mx-auto drop-shadow-md font-medium text-center">
                        {description}
                    </p>

                    <Link
                        href="/contact"
                        className="group inline-flex flex-col items-center justify-center rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                    >
                        <div className="h-5" />
                        <div className="flex items-center">
                            <div className="w-12" />
                            <span className="text-white text-sm md:text-base font-medium tracking-widest uppercase">{buttonText}</span>
                            <div className="w-4" />
                            <ArrowRightIcon className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
                            <div className="w-12" />
                        </div>
                        <div className="h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
