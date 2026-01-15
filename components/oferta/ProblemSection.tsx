import React from 'react';
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const ProblemSection = () => {
    return (
        <section className="section-spacing relative w-full overflow-hidden">
            {/* Background Gradients REMOVED */}

            <div className="container-custom relative z-10 flex flex-col items-center text-center">

                {/* Top: Text Content */}
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        Dlaczego większość stron <br /> <span className="text-red-500">nie działa</span>?
                    </h1>

                    <div className="h-8 md:h-12" />

                    <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light max-w-4xl mx-auto">
                        Wiele firm ma stronę internetową, ale nie ma z niej żadnych zapytań.<br className="hidden md:block" />
                        Najczęstsze powody są powtarzalne.
                    </p>
                </div>

                <div className="h-8 md:h-12" />

                {/* Middle: The Problems List */}
                <div className="w-full max-w-6xl">
                    {/* Problems List - Replaced Boxes with Clean List */}
                    <div className="w-full mx-auto">
                        <div className="bg-transparent rounded-[2.5rem] py-8 px-6 md:px-12 md:py-12 flex flex-col items-center">
                            <ul className="text-left inline-block">
                                <li className="flex items-center gap-6 md:gap-8 group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-300">
                                        <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 rotate-45" />
                                    </div>
                                    <span className="text-xl md:text-3xl text-gray-300 font-light group-hover:text-white transition-colors">
                                        Strona powstała na gotowym szablonie
                                    </span>
                                </li>

                                <div className="h-5 md:h-6" />

                                <li className="flex items-center gap-6 md:gap-8 group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-300">
                                        <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 rotate-45" />
                                    </div>
                                    <span className="text-xl md:text-3xl text-gray-300 font-light group-hover:text-white transition-colors">
                                        Jest przeładowana i wolna
                                    </span>
                                </li>

                                <div className="h-5 md:h-6" />

                                <li className="flex items-center gap-6 md:gap-8 group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-300">
                                        <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 rotate-45" />
                                    </div>
                                    <span className="text-xl md:text-3xl text-gray-300 font-light group-hover:text-white transition-colors">
                                        Nie prowadzi użytkownika do kontaktu
                                    </span>
                                </li>

                                <div className="h-5 md:h-6" />

                                <li className="flex items-center gap-6 md:gap-8 group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-300">
                                        <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 rotate-45" />
                                    </div>
                                    <span className="text-xl md:text-3xl text-gray-300 font-light group-hover:text-white transition-colors">
                                        Wygląda „ładnie”, ale nie ma jasnego celu
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="h-16" />

                {/* Bottom: Effect */}
                <div className="text-lg text-neutral-300">
                    <p className="uppercase tracking-widest text-sm text-neutral-500 mb-4 font-semibold">Efekt jest prosty</p>
                    <p className="font-semibold text-white text-2xl md:text-3xl">Użytkownik wchodzi, chwilę patrzy i wychodzi.</p>
                </div>

            </div>
        </section>
    );
};

export default ProblemSection;
