import React from 'react';
import { Check, X } from 'lucide-react';

const TargetAudienceSection = () => {
    return (
        <section className="section-spacing relative w-full overflow-hidden">
            {/* Subtle Gradient Connection */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container-custom relative z-10">

                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Dla kogo to rozwiązanie?
                    </h2>
                    <div className="h-6" />
                    <p className="text-neutral-400 text-lg">To oszczędza czas obu stron.</p>
                </div>

                <div className="h-16 md:h-24" />

                <div className="grid md:grid-cols-2 gap-8 md:gap-16">

                    {/* Suitable For */}
                    <div className="p-12 rounded-[2.5rem] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 hover:border-emerald-500/30 transition-all duration-300 flex flex-col items-center text-center group shadow-2xl hover:-translate-y-1">
                        <h3 className="text-2xl font-bold text-white flex flex-col items-center mb-6">
                            <span className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mb-6 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-900/10"><Check size={32} /></span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">To rozwiązanie ma sens, jeśli:</span>
                        </h3>
                        <div className="h-4" />
                        <ul className="text-lg text-gray-300 w-full space-y-4">
                            <li className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/5 bg-white/5 group-hover:bg-white/10 transition-colors">
                                Prowadzisz firmę usługową
                            </li>
                            <li className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/5 bg-white/5 group-hover:bg-white/10 transition-colors">
                                Chcesz strony nastawionej na zapytania
                            </li>
                            <li className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/5 bg-white/5 group-hover:bg-white/10 transition-colors">
                                Zależy Ci na indywidualnym podejściu
                            </li>
                        </ul>
                    </div>

                    {/* Not Suitable For */}
                    <div className="p-12 rounded-[2.5rem] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 hover:border-red-500/30 transition-all duration-300 flex flex-col items-center text-center group shadow-2xl hover:-translate-y-1">
                        <h3 className="text-2xl font-bold text-white flex flex-col items-center mb-6">
                            <span className="p-5 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 mb-6 border border-red-500/20 text-red-400 group-hover:scale-110 transition-transform shadow-lg shadow-red-900/10"><X size={32} /></span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">To nie dla Ciebie, jeśli:</span>
                        </h3>
                        <div className="h-4" />
                        <ul className="text-lg text-gray-300 w-full space-y-4">
                            <li className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/5 bg-white/5 group-hover:bg-white/10 transition-colors">
                                Szukasz najtańszego rozwiązania
                            </li>
                            <li className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/5 bg-white/5 group-hover:bg-white/10 transition-colors">
                                Chcesz gotowy szablon
                            </li>
                            <li className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/5 bg-white/5 group-hover:bg-white/10 transition-colors">
                                Strona ma być tylko „żeby była”
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TargetAudienceSection;
