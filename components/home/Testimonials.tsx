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

    // Calculate which testimonials to show (prev, current, next)
    const getVisibleTestimonials = () => {
        const prev = (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
        const next = (currentIndex + 1) % TESTIMONIALS.length;
        return [prev, currentIndex, next];
    };

    const visibleIndices = getVisibleTestimonials();

    return (
        <section className="section-spacing !pt-12 overflow-hidden relative z-10">
            <div className="container-custom flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center !mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Co mówią moi klienci?
                    </h2>
                    <p className="text-xl text-purple-100 max-w-4xl leading-relaxed text-center">
                        Zadowoleni klienci to mój największy sukces.
                    </p>
                </motion.div>

                <div
                    className="relative w-full max-w-7xl mx-auto h-[500px] md:h-[450px] flex items-center justify-center"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* 3 Card Stack */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        {visibleIndices.map((testimonialIndex, position) => {
                            const testimonial = TESTIMONIALS[testimonialIndex];
                            const isCenter = position === 1;
                            const isLeft = position === 0;
                            const isRight = position === 2;

                            // Calculate transform based on position
                            let transform = 'translateX(0%) scale(1)';
                            let opacity = 1;
                            let zIndex = 20;

                            if (isLeft) {
                                transform = 'translateX(-85%) scale(0.85)';
                                opacity = 0.5;
                                zIndex = 10;
                            } else if (isRight) {
                                transform = 'translateX(85%) scale(0.85)';
                                opacity = 0.5;
                                zIndex = 10;
                            }

                            return (
                                <motion.div
                                    key={testimonialIndex}
                                    className={`absolute w-full md:w-[600px] ${!isCenter ? 'cursor-pointer' : ''}`}
                                    initial={false}
                                    animate={{
                                        scale: isCenter ? 1 : 0.85,
                                        x: isLeft ? '-85%' : isRight ? '85%' : '0%',
                                        opacity: isCenter ? 1 : 0.5,
                                        zIndex: isCenter ? 20 : 10,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.34, 1.56, 0.64, 1],
                                    }}
                                    onClick={() => {
                                        if (isLeft) goToPrevious();
                                        if (isRight) goToNext();
                                    }}
                                    whileHover={!isCenter ? { scale: 0.9 } : {}}
                                >
                                    {/* Gradient Background Card */}
                                    <div
                                        className="relative rounded-3xl p-10 md:p-12 overflow-hidden flex flex-col items-center justify-center shadow-2xl"
                                        style={{
                                            minHeight: '350px',
                                            background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%)',
                                            backgroundSize: '200% 200%',
                                            animation: isCenter ? 'gradientShift 8s ease infinite' : 'none',
                                        }}
                                    >
                                        {/* Subtle overlay for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />

                                        {/* Content - centered vertically and horizontally */}
                                        <div className="relative z-10 flex flex-col items-center text-center">
                                            {/* Avatar */}
                                            <motion.div
                                                className="mb-8"
                                                initial={{ y: 0 }}
                                                animate={{ y: isCenter ? [0, -10, 0] : 0 }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <div
                                                    className="w-20 h-20 rounded-full flex items-center justify-center text-purple-600 font-bold text-2xl border-4 border-white shadow-2xl bg-white"
                                                >
                                                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                                                </div>
                                            </motion.div>

                                            {/* Quote */}
                                            <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8 italic font-medium drop-shadow-lg">
                                                "{testimonial.quote}"
                                            </blockquote>

                                            {/* Author Info - Name only */}
                                            <div className="text-center">
                                                <p className="text-xl font-bold text-white drop-shadow">
                                                    {testimonial.author}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Keyframes for gradient animation */}
                                    <style jsx>{`
                                        @keyframes gradientShift {
                                            0% { background-position: 0% 50%; }
                                            50% { background-position: 100% 50%; }
                                            100% { background-position: 0% 50%; }
                                        }
                                    `}</style>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 hover:scale-110 transition-transform duration-300"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeftIcon className="w-12 h-12 text-white drop-shadow-lg" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 hover:scale-110 transition-transform duration-300"
                        aria-label="Next testimonial"
                    >
                        <ChevronRightIcon className="w-12 h-12 text-white drop-shadow-lg" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 !mt-12">
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
