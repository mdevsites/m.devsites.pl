'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTASectionProps {
    title?: string;
    description?: string;
    buttonText?: string;
}

export default function CTASection({
    title = "Gotowy na nową stronę internetową?",
    description = "Skontaktuj się już dziś i otrzymaj bezpłatną wycenę. Wspólnie stworzymy coś wyjątkowego dla Twojego biznesu.",
    buttonText = "Wyślij zapytanie"
}: CTASectionProps) {
    return (
        <section className="section-spacing relative overflow-hidden !pt-12">
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
                        className="btn-glass text-lg px-10 py-5 inline-block hover:scale-105 transition-transform duration-300"
                    >
                        {buttonText}
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
