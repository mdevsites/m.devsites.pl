'use client';

import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '@/lib/constants';

export default function ProcessTimeline() {
    return (
        <section className="section-spacing !pt-12">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center !mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                        Jak wygląda proces współpracy?
                    </h2>
                    <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed text-center">
                        Prosty i przejrzysty proces od pomysłu do gotowej strony
                    </p>
                </motion.div>

                {/* Desktop Timeline (Horizontal) */}
                <div className="hidden lg:block">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-button opacity-30" />

                        <div className="grid grid-cols-5 gap-4">
                            {PROCESS_STEPS.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative pt-12"
                                >
                                    {/* Content Card with Floating Badge */}
                                    <div className="card-light p-6 pt-16 text-center min-h-[220px] flex flex-col justify-center relative overflow-visible group hover:-translate-y-2 transition-all duration-300">
                                        {/* Floating Badge Icon */}
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-4xl border-4 border-purple-50 z-20">
                                            {step.icon}
                                        </div>

                                        {/* Giant Background Number */}
                                        <div className="absolute right-6 bottom-0 text-8xl font-black text-gray-300 opacity-40 z-0 scale-110 group-hover:scale-100 transition-transform duration-500 origin-bottom-right select-none tracking-widest">
                                            {step.number}
                                        </div>

                                        <div className="relative z-10">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Timeline (Vertical) */}
                <div className="lg:hidden">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-light to-pink-500" />

                        <div className="flex flex-col gap-16">
                            {PROCESS_STEPS.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative flex items-start gap-6"
                                >
                                    {/* Circle Node */}
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-button flex items-center justify-center text-2xl shadow-glow-pink z-10 bg-purple-ultra-dark">
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    {/* Content (Mobile - Content Only) */}
                                    <div className="flex-grow pl-4 py-8 relative overflow-hidden rounded-2xl min-h-[140px] flex flex-col justify-center">
                                        {/* Giant Background Number - Lighter for Dark BG */}
                                        <div className="absolute right-0 bottom-0 text-7xl font-black text-purple-300 opacity-20 z-0 select-none tracking-widest">
                                            {step.number}
                                        </div>
                                        <div className="relative z-10">
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-purple-100 leading-relaxed text-sm">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
