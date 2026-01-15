import React from 'react';

const ProcessSection = () => {
    const steps = [
        {
            number: "01",
            title: "Określenie celu strony",
            description: "Krótka informacja o branży, ofercie i tym, co strona ma robić."
        },
        {
            number: "02",
            title: "Koncepcja strony",
            description: "Przygotowuję koncepcję głównej struktury (układ + treść)."
        },
        {
            number: "03",
            title: "Projekt i kodowanie",
            description: "Tworzę indywidualny projekt i koduję stronę od zera."
        },
        {
            number: "04",
            title: "Dopracowanie i poprawki",
            description: "Wprowadzamy poprawki i dopasowujemy stronę pod realne użycie."
        },
        {
            number: "05",
            title: "Publikacja",
            description: "Strona trafia online i jest gotowa do działania."
        }
    ];

    return (
        <section className="section-spacing relative w-full overflow-hidden">

            <div className="container-custom relative z-10 flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight text-center">
                    Jak wygląda współpraca
                </h2>

                <div className="h-20 md:h-28" />

                {/* Centered Timeline */}
                <div className="relative w-full max-w-4xl">
                    {/* Connecting Line - Center */}
                    <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-[2px] bg-neutral-800 -translate-x-1/2" />

                    {steps.map((step, idx) => (
                        <div key={idx}>
                            {/* Spacer between steps */}
                            {idx > 0 && <div className="h-16 md:h-24" />}

                            <div className={`relative flex flex-col md:flex-row gap-8 items-center md:items-start group ${idx % 2 === 0 ? 'md:flex-row-reverse text-center md:text-left' : 'text-center md:text-right'}`}>

                                {/* Content Side */}
                                <div className="flex-1 pt-2 hidden md:block">
                                    {idx % 2 !== 0 && (
                                        <>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-4">{step.title}</h3>
                                            <p className="text-neutral-400 font-light text-lg">{step.description}</p>
                                        </>
                                    )}
                                </div>

                                {/* Number Bubble */}
                                <div className="relative z-10 w-14 h-14 rounded-full bg-black border border-neutral-700 text-neutral-400 hover:text-white hover:border-cyan-500 transition-colors flex items-center justify-center shrink-0">
                                    <span className="font-mono text-lg font-bold">{step.number}</span>
                                </div>

                                {/* Content Side (Right for odd, Left for even in flex-row-reverse) */}
                                <div className="flex-1 pt-2">
                                    {/* Mobile: Always show content under bubble. Desktop: Show based on parity */}
                                    <div className="md:hidden">
                                        <div className="h-4" />
                                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-4">{step.title}</h3>
                                        <p className="text-neutral-400 font-light text-lg">{step.description}</p>
                                    </div>

                                    <div className="hidden md:block">
                                        {idx % 2 === 0 && (
                                            <>
                                                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-4">{step.title}</h3>
                                                <p className="text-neutral-400 font-light text-lg">{step.description}</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="h-20" />

                <div className="w-full h-px bg-neutral-800" />

                <div className="h-10" />

                <div className="text-center w-full max-w-xl mx-auto">
                    <p className="text-neutral-500 uppercase tracking-widest text-sm font-medium">
                        Bez niepotrzebnych etapów. Bez chaosu.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ProcessSection;
