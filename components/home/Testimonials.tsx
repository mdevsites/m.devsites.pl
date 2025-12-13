'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play functionality
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const goToPrevious = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
        );
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const currentTestimonial = TESTIMONIALS[currentIndex];

    return (
        <section className="section-spacing !pt-12">
            <div className="container-custom flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center !mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                        Co mówią moi klienci?
                    </h2>
                    <p className="text-xl text-purple-100 max-w-4xl leading-relaxed text-center">
                        Zadowoleni klienci to mój największy sukces.
                    </p>
                </motion.div>

                <div
                    className="relative max-w-4xl w-full mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Testimonial Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="relative"
                        >
                            {/* Quote Bubble */}
                            <div
                                className="px-16 py-14 md:px-24 md:py-16 relative overflow-hidden"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(16px)',
                                    border: '2px solid rgba(255, 255, 255, 0.3)',
                                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                                    borderRadius: '1rem'
                                }}
                            >
                                {/* Quote */}
                                <blockquote className="text-lg md:text-xl text-white text-center leading-relaxed relative z-10 italic mb-8">
                                    "{currentTestimonial.quote}"
                                </blockquote>

                                {/* Author Info */}
                                <div className="flex items-center justify-center gap-4 relative z-10">
                                    {/* Avatar Circle with Initials */}
                                    <div
                                        className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0"
                                        style={{
                                            background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)'
                                        }}
                                    >
                                        {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
                                    </div>

                                    {/* Author Details */}
                                    <div className="text-left">
                                        <p className="text-lg font-bold text-white">
                                            {currentTestimonial.author}
                                        </p>
                                        <p className="text-sm text-purple-200">
                                            {currentTestimonial.position} • {currentTestimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 hidden md:flex items-center justify-center hover:scale-110 transition-all duration-300 z-20 group"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeftIcon className="w-10 h-10 md:w-12 md:h-12 text-white/70 group-hover:text-white transition-colors" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 hidden md:flex items-center justify-center hover:scale-110 transition-all duration-300 z-20 group"
                        aria-label="Next testimonial"
                    >
                        <ChevronRightIcon className="w-10 h-10 md:w-12 md:h-12 text-white/70 group-hover:text-white transition-colors" />
                    </button>

                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 !mt-10">
                    {TESTIMONIALS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-purple-400 w-8'
                                : 'bg-white/20 w-2 hover:bg-white/30'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
