'use client';

import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '@/lib/constants';
import { MessageSquare, FileText, Palette, Code2, Headset } from 'lucide-react';

const getIcon = (name: string) => {
    switch (name) {
        case 'MessageSquare': return <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />;
        case 'FileText': return <FileText className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />;
        case 'Palette': return <Palette className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />;
        case 'Code2': return <Code2 className="w-8 h-8 md:w-10 md:h-10 text-fuchsia-400" />;
        case 'Headset': return <Headset className="w-8 h-8 md:w-10 md:h-10 text-pink-400" />;
        default: return null;
    }
};

export default function ProcessTimeline() {
    return (
        <section className="section-spacing !pt-12 relative z-10">
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
                        Prosty i przejrzysty proces od pomysłu do gotowej strony.
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
                                    <div className="relative p-6 pt-16 text-center min-h-[220px] flex flex-col justify-center overflow-visible group hover:-translate-y-2 transition-all duration-300 bg-white rounded-2xl shadow-xl hover:shadow-2xl">
                                        {/* Floating Badge Icon */}
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-black text-white shadow-xl flex items-center justify-center text-4xl border-4 border-white z-20">
                                            {getIcon(step.icon)}
                                        </div>

                                        {/* Giant Background Number */}
                                        <div className="absolute right-6 bottom-0 text-8xl font-black text-black/5 opacity-100 z-0 scale-110 group-hover:scale-100 transition-transform duration-500 origin-bottom-right select-none tracking-widest">
                                            {step.number}
                                        </div>

                                        <div className="relative z-10">
                                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 leading-relaxed font-medium">
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
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-black border-2 border-white z-10 shadow-xl">
                                        {getIcon(step.icon)}
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
