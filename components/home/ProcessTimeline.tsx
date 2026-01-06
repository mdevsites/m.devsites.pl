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
                                    {/* Glass Background Card */}
                                    <div
                                        className="relative p-6 pt-16 text-center min-h-[260px] flex flex-col items-center justify-center overflow-visible group hover:-translate-y-2 transition-all duration-300 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/10 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
                                    >
                                        {/* Floating Badge Icon */}
                                        <div
                                            className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl bg-[#030014] border border-white/10 flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all duration-300"
                                        >
                                            <div className="relative z-10">
                                                {getIcon(step.icon)}
                                            </div>
                                            {/* Glow effect behind icon */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        {/* Giant Background Number */}
                                        <div className="absolute right-4 bottom-2 text-8xl font-black text-white/[0.03] opacity-100 z-0 select-none tracking-widest group-hover:text-white/[0.05] transition-colors">
                                            {step.number}
                                        </div>

                                        <div className="relative z-10 w-full">
                                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-slate-400 leading-relaxed font-medium">
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
                        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/20 via-pink-500/20 to-transparent" />

                        <div className="flex flex-col gap-12">
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
                                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-[#0a0a0a] border border-white/10 z-10 shadow-lg relative group overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-50" />
                                        {getIcon(step.icon)}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow p-6 relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                                        {/* Giant Background Number */}
                                        <div className="absolute right-4 bottom-2 text-6xl font-black text-white/[0.03] z-0 select-none tracking-widest">
                                            {step.number}
                                        </div>

                                        <div className="relative z-10">
                                            <h3 className="text-lg font-bold text-white mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-slate-400 leading-relaxed text-sm">
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
