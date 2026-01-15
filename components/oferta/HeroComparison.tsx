'use client';

import React, { useState } from 'react';
import { ArrowRightIcon, ChevronDownIcon, CheckIcon } from '@heroicons/react/24/outline';

const HeroComparison = () => {
    const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

    return (
        <section className="relative w-full min-h-screen flex flex-col lg:block overflow-hidden bg-black">

            {/* --- MOBILE LAYOUT (Stacked) --- */}
            <div className="lg:hidden flex flex-col w-full relative z-40">

                {/* Navbar Spacer */}
                <div className="h-24" />

                {/* Problem Section (Mobile) */}
                <div className="px-5 pb-8 pt-4 w-full flex flex-col items-center">
                    <div className="w-full backdrop-blur-sm bg-neutral-900/30 rounded-[2rem] py-10 px-6 shadow-2xl flex flex-col items-center">
                        <div className="text-center flex flex-col items-center w-full">
                            <h2 className="text-3xl font-bold text-white mb-2 leading-tight w-full">
                                Dlaczego strony <br /> <span className="text-red-500">nie działają</span>?
                            </h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-red-500/50 to-transparent mt-3" />
                        </div>

                        {/* Header Spacer */}
                        <div className="h-6" />

                        <ul className="flex flex-col items-start w-fit mx-auto">
                            {/* Item 1 */}
                            <li className="flex items-center justify-start gap-4 text-neutral-300 w-full text-left">
                                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                                    <ArrowRightIcon className="w-4 h-4 text-red-500 rotate-45" />
                                </div>
                                <span className="text-lg font-medium">Strona z szablonu</span>
                            </li>

                            {/* Spacer */}
                            <div className="h-2" />

                            {/* Item 2 */}
                            <li className="flex items-center justify-start gap-4 text-neutral-300 w-full text-left">
                                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                                    <ArrowRightIcon className="w-4 h-4 text-red-500 rotate-45" />
                                </div>
                                <span className="text-lg font-medium">Wolna i przeładowana</span>
                            </li>

                            {/* Spacer */}
                            <div className="h-2" />

                            {/* Item 3 */}
                            <li className="flex items-center justify-start gap-4 text-neutral-300 w-full text-left">
                                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                                    <ArrowRightIcon className="w-4 h-4 text-red-500 rotate-45" />
                                </div>
                                <span className="text-lg font-medium">Brak jasnego celu</span>
                            </li>

                            {/* Spacer */}
                            <div className="h-2" />

                            {/* Item 4 */}
                            <li className="flex items-center justify-start gap-4 text-neutral-300 w-full text-left">
                                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                                    <ArrowRightIcon className="w-4 h-4 text-red-500 rotate-45" />
                                </div>
                                <span className="text-lg font-medium">Klient wychodzi</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Gap Spacer between boxes */}
                <div className="h-12" />

                {/* Solution Section (Mobile) */}
                <div className="px-5 pb-64 w-full flex flex-col items-center">
                    <div className="w-full backdrop-blur-sm bg-neutral-900/30 rounded-[2rem] py-10 px-6 shadow-2xl flex flex-col items-center">
                        <div className="text-center flex flex-col items-center w-full">
                            <h2 className="text-3xl font-bold text-white mb-2 leading-tight w-full">
                                Jak ja <br /> <span className="text-blue-500">rozwiązuję problem</span>?
                            </h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mt-3" />
                        </div>

                        {/* Header Spacer */}
                        <div className="h-6" />

                        <ul className="flex flex-col items-start w-fit mx-auto">
                            {/* Item 1 */}
                            <li className="flex items-center justify-start gap-4 text-neutral-300 w-full text-left">
                                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                                    <CheckIcon className="w-4 h-4 text-blue-500" />
                                </div>
                                <span className="text-lg font-medium">Indywidualny projekt</span>
                            </li>

                            {/* Spacer */}
                            <div className="h-2" />

                            {/* Item 2 */}
                            <li className="flex items-center justify-start gap-4 text-neutral-300 w-full text-left">
                                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                                    <CheckIcon className="w-4 h-4 text-blue-500" />
                                </div>
                                <span className="text-lg font-medium">Kodowanie od zera</span>
                            </li>

                            {/* Spacer */}
                            <div className="h-2" />

                            {/* Item 3 */}
                            <li className="flex items-center justify-start gap-4 text-neutral-300 w-full text-left">
                                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                                    <CheckIcon className="w-4 h-4 text-blue-500" />
                                </div>
                                <span className="text-lg font-medium">Nastawienie na cel</span>
                            </li>

                            {/* Spacer */}
                            <div className="h-2" />

                            {/* Item 4 */}
                            <li className="flex items-center justify-start gap-4 text-neutral-300 w-full text-left">
                                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                                    <CheckIcon className="w-4 h-4 text-blue-500" />
                                </div>
                                <span className="text-lg font-medium">Konwersja i sprzedaż</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* --- DESKTOP LAYOUT (Diagonal Split) --- */}
            <div className="hidden lg:block absolute inset-0 w-full h-full">

                {/* LEFT SIDE (Problem) - Clipped Diagonal */}
                <div
                    className={`absolute inset-0 bg-[#050505] transition-all duration-700 ease-in-out ${hoveredSide === 'right' ? 'opacity-40 grayscale blur-[2px]' : 'opacity-100'
                        }`}
                    style={{ clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)', zIndex: 10 }}
                    onMouseEnter={() => setHoveredSide('left')}
                    onMouseLeave={() => setHoveredSide(null)}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-80" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(220,38,38,0.08),transparent_40%)]" />

                    <div className="absolute left-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
                        <div className="w-full max-w-[52rem] px-8 pt-32">
                            <h2 className="text-6xl font-bold text-white leading-tight">
                                Dlaczego strony <br /> <span className="text-red-500">nie działają</span>?
                            </h2>
                            <div className="h-12 lg:h-16" />
                            <ul>
                                {[
                                    "Strona powstała na gotowym szablonie",
                                    "Jest przeładowana i wolna",
                                    "Nie prowadzi użytkownika do kontaktu",
                                    "Wygląda „ładnie”, ale nie ma jasnego celu"
                                ].map((problem, idx) => (
                                    <React.Fragment key={idx}>
                                        {idx > 0 && <div className="h-6" />}
                                        <li className="flex items-center gap-6 group">
                                            <div className="w-12 h-12 shrink-0 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                                <ArrowRightIcon className="w-5 h-5 rotate-45" />
                                            </div>
                                            <span className="text-xl md:text-2xl text-neutral-400 font-light group-hover:text-white transition-colors">
                                                {problem}
                                            </span>
                                        </li>
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE (Solution) - Clipped Diagonal */}
                <div
                    className={`absolute inset-0 bg-[#0a0a0a] transition-all duration-700 ease-in-out ${hoveredSide === 'left' ? 'opacity-40 blur-[2px] scale-[0.98]' : 'opacity-100'
                        }`}
                    style={{ clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)', zIndex: 10 }} // Matches the left clip
                    onMouseEnter={() => setHoveredSide('right')}
                    onMouseLeave={() => setHoveredSide(null)}
                >
                    <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent opacity-80" />
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(59,130,246,0.08),transparent_40%)]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

                    <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center lg:justify-end">
                        <div className="w-full max-w-[52rem] px-8 lg:px-0 lg:pr-24 pt-32 text-left">
                            <h2 className="text-6xl font-bold text-white leading-tight">
                                Jak ja <br /> <span className="text-blue-500">rozwiązuję problem</span>?
                            </h2>
                            <div className="h-12 lg:h-16" />
                            <ul>
                                {[
                                    "Indywidualny projekt, dopasowany do marki",
                                    "Kodowanie od zera – szybkość i bezpieczeństwo",
                                    "Nastawienie na cel, konwersję i sprzedaż",
                                    "Budowanie silnej i wiarygodnej marki"
                                ].map((item, idx) => (
                                    <React.Fragment key={idx}>
                                        {idx > 0 && <div className="h-6" />}
                                        <li className="flex items-center gap-6 group">
                                            <div className="w-12 h-12 shrink-0 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                                <CheckIcon className="w-5 h-5" />
                                            </div>
                                            <span className="text-xl md:text-2xl text-neutral-300 font-light group-hover:text-white transition-colors">
                                                {item}
                                            </span>
                                        </li>
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* DIAGONAL SEPARATOR LINE */}
                <div
                    className="absolute inset-0 pointer-events-none select-none z-20"
                    style={{
                        background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)',
                        width: '1px',
                        left: '50%',
                        transform: 'skewX(-20deg)', // This approximates the visual separator if needed, but clip-path might leave a gap. 
                        // Actually, creating a dedicated separator div positioned exactly on the clip line is safer.
                    }}
                />

                {/* Better Separator Approach: SVG Line overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" preserveAspectRatio="none">
                    <line x1="60%" y1="0" x2="40%" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                </svg>

                {/* Bouncing Arrow */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce text-white/20">
                    <ChevronDownIcon className="w-10 h-10" />
                </div>

            </div>

            {/* Smooth Gradient Transition to Next Section */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-black/80 to-black z-30 pointer-events-none" />
        </section>
    );
};

export default HeroComparison;
