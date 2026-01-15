import React from 'react';

const TechStackSection = () => {
    const benefits = [
        { label: "Szybsze ładowanie", val: "🚀" },
        { label: "Brak zbędnych wtyczek", val: "💎" },
        { label: "Pełna kontrola nad wyglądem", val: "🎨" },
        { label: "Łatwiejsze dopasowanie", val: "🔧" },
    ];

    return (
        <section className="section-spacing relative w-full overflow-hidden">
            {/* Subtle Gradient Connection */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container-custom relative z-10 flex flex-col items-center text-center">

                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Dlaczego strony są <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">indywidualnie projektowane</span>?
                    </h2>
                    <div className="h-8 md:h-12" />
                    <p className="text-xl text-neutral-300 font-light leading-relaxed">
                        Strony tworzone od zera dają realne przewagi.
                        To rozwiązanie dla firm, które chcą strony działającej, a nie tylko „obecności w internecie”.
                    </p>
                </div>

                <div className="h-16 md:h-24" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {benefits.map((item, idx) => (
                        <div key={idx} className="p-10 rounded-[2.5rem] bg-neutral-900/20 backdrop-blur-md border border-white/5 hover:border-violet-500/30 transition-all duration-300 group flex flex-col items-center justify-center hover:-translate-y-1 shadow-2xl">
                            <div className="text-4xl md:text-5xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 group-hover:scale-110 transition-transform">{item.val}</div>
                            <div className="text-gray-400 font-medium group-hover:text-white text-lg transition-colors">{item.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TechStackSection;
