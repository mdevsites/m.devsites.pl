import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const SolutionSection = () => {
    return (
        <section className="section-spacing relative w-full overflow-hidden">
            {/* Subtle Gradient Connection */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container-custom relative z-10 text-center">

                <div className="flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Jak rozwiązuję ten problem
                    </h2>
                    <div className="h-6" />
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
                </div>

                <div className="h-16 md:h-20" />

                <div className="text-xl text-neutral-300 leading-relaxed font-light max-w-4xl mx-auto">
                    <p className="text-lg md:text-xl text-neutral-400">
                        Projektuję strony internetowe w inny sposób niż większość wykonawców.
                    </p>
                    <div className="h-6" />
                    <p className="text-2xl md:text-4xl text-white font-semibold leading-relaxed">
                        Nie zaczynam od szablonu ani motywu.<br />
                        Zaczynam od branży, celu i zachowania użytkownika.
                    </p>
                </div>

                <div className="h-12 md:h-16" />

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Projektowana indywidualnie", color: "from-blue-500 to-cyan-500", iconColor: "text-cyan-400" },
                        { title: "Kodowana od zera", color: "from-violet-500 to-fuchsia-500", iconColor: "text-fuchsia-400" },
                        { title: "Nastawiona na działanie", color: "from-green-500 to-emerald-500", iconColor: "text-emerald-400" }
                    ].map((item, idx) => (
                        <div key={idx} className="p-10 rounded-[2.5rem] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 relative group hover:border-white/10 transition-all duration-300 flex flex-col items-center justify-center hover:-translate-y-2 shadow-2xl overflow-hidden">

                            {/* Glow Effect */}
                            <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.color} blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />

                            <div className={`absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r ${item.color} opacity-70 group-hover:opacity-100 group-hover:h-[4px] transition-all duration-300`} />

                            <span className="text-white font-bold text-xl md:text-2xl tracking-tight relative z-10">{item.title}</span>
                        </div>
                    ))}
                </div>

                <div className="h-16" />

                <div className="flex flex-col items-center gap-2">
                    <p className="text-neutral-400 text-lg">Bez WordPressa.</p>
                    <p className="text-neutral-400 text-lg">Bez gotowych rozwiązań, które ograniczają projekt.</p>
                </div>

                <div className="h-12" />

                {/* Bouncing Arrow */}
                <div className="animate-bounce text-white/20 flex justify-center">
                    <ChevronDownIcon className="w-8 h-8" />
                </div>

            </div>
        </section>
    );
};

export default SolutionSection;
