'use client';

import React from 'react';

const problems = [
    {
        title: "Strona jest, ale nie ma zapytań",
        why: [
            "Strona nie prowadzi użytkownika do żadnego konkretnego działania.",
            "Brakuje jasnego celu, struktury i czytelnego CTA."
        ],
        solution: [
            "Projektuję stronę wokół jednego celu — kontaktu lub zapytania.",
            "Każda sekcja ma jasno określoną rolę i prowadzi użytkownika krok po kroku."
        ]
    },
    {
        title: "Strona wygląda dobrze, ale jest wolna",
        why: [
            "Gotowe motywy i nadmiar wtyczek powodują długie czasy ładowania."
        ],
        solution: [
            "Tworzę strony od zera, bez zbędnych elementów.",
            "Lekki kod = szybsze ładowanie = większa szansa na kontakt."
        ]
    },
    {
        title: "Strona nie pasuje do branży",
        why: [
            "Szablony są uniwersalne i nie uwzględniają specyfiki konkretnego biznesu."
        ],
        solution: [
            "Projektuję strukturę strony pod jedną branżę i jednego odbiorcę.",
            "Dzięki temu użytkownik od razu wie, że trafił w dobre miejsce."
        ]
    },
    {
        title: "Trudno coś zmienić lub rozbudować",
        why: [
            "Gotowe rozwiązania szybko stają się ograniczeniem przy rozwoju strony."
        ],
        solution: [
            "Strona tworzona od podstaw daje pełną kontrolę nad rozwojem i zmianami.",
            "Bez walki z motywem czy wtyczkami."
        ]
    },
    {
        title: "Klient boi się, że kupuje w ciemno",
        why: [
            "Brakuje jasnego procesu i wizji końcowego efektu."
        ],
        solution: [
            "Zaczynam od koncepcji strony, żeby od początku było wiadomo,",
            "jak będzie wyglądać i działać finalny projekt."
        ]
    },
    {
        title: "Strona jest \"ładna\", ale nikt z niej nie korzysta",
        why: [
            "Projekt skupia się na wyglądzie, a nie na zachowaniu użytkownika."
        ],
        solution: [
            "Projektuję strony jako narzędzie, nie dekorację.",
            "Układ, treść i kolejność sekcji mają prowadzić do działania."
        ]
    },
    {
        title: "Zbyt skomplikowany proces współpracy",
        why: [
            "Niejasne etapy, chaos komunikacyjny i brak kontroli po stronie klienta."
        ],
        solution: [
            "Prosty, przewidywalny proces:",
            "koncepcja → projekt → wykonanie → publikacja."
        ]
    }
];

const ProblemsSection = () => {
    return (
        <section className="relative w-full overflow-hidden flex flex-col items-center">
            {/* Top Transition Gradient */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none z-0" />

            {/* Top Atomic Spacer */}
            <div className="h-40" />

            {/* Background gradient - Significantly reduced opacity */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none" />

            {/* Container - ATOMICALLY CENTERED */}
            <div className="relative z-10 w-full max-w-[1400px] px-6 flex flex-col items-center">

                {/* Section Header */}
                <div className="text-center max-w-5xl">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        PROBLEMY, Z KTÓRYMI<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            PRZYCHODZĄ KLIENCI
                        </span>
                    </h2>
                    <p className="text-xl text-neutral-400 font-light">
                        i jak je rozwiązuję
                    </p>
                </div>

                {/* Header to Cards Spacer */}
                <div className="h-32" />

                {/* Problems - Flex Centered Layout */}
                <div className="flex flex-wrap justify-center gap-8 w-full">
                    {problems.map((problem, idx) => {
                        // Random offset for organic feel
                        const offsets = [
                            'mt-0',
                            'mt-12',
                            'mt-4',
                            'mt-16',
                            'mt-8',
                            'mt-2',
                            'mt-14'
                        ];

                        return (
                            <div
                                key={idx}
                                className={`relative group ${offsets[idx]} transition-all duration-500 w-[90%] md:w-[26rem] mx-auto flex-shrink-0`}
                            >
                                {/* Card Container */}
                                <div className="relative bg-neutral-900/20 backdrop-blur-md rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-500 group-hover:bg-neutral-900/40 group-hover:border-white/10 group-hover:-translate-y-2">

                                    {/* Large Background Number - REMOVED */}

                                    {/* Content Wrapper using Spacer Grid */}
                                    <div className="flex flex-col">

                                        {/* Top Padding Spacer */}
                                        <div className="h-12" />

                                        <div className="flex">
                                            {/* Left Padding Spacer */}
                                            <div className="w-10 shrink-0" />

                                            {/* Main Content Area */}
                                            <div className="flex-1 z-10">

                                                {/* Title */}
                                                <h3 className="text-3xl font-bold text-white leading-tight group-hover:text-blue-200 transition-colors">
                                                    {problem.title}
                                                </h3>

                                                {/* Spacer between Title and Divider */}
                                                <div className="h-10" />

                                                {/* Minimal Divider */}
                                                <div className="w-12 h-[2px] bg-white/20 group-hover:w-full group-hover:bg-blue-500/50 transition-all duration-700 ease-out" />

                                                {/* Spacer between Divider and Content */}
                                                <div className="h-10" />

                                                {/* Why Block */}
                                                <div>
                                                    <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">
                                                        Diagnoza
                                                    </div>
                                                    <div className="space-y-2">
                                                        {problem.why.map((line, i) => (
                                                            <p key={i} className="text-neutral-400 text-base leading-relaxed">
                                                                {line}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Spacer between blocks */}
                                                <div className="h-8" />

                                                {/* Solution Block */}
                                                <div className="relative">
                                                    {/* Side Accent Line */}
                                                    <div className="absolute -left-5 top-1 bottom-1 w-[2px] bg-blue-500/0 group-hover:bg-blue-500/50 transition-colors duration-500" />

                                                    <div className="text-xs font-bold text-blue-400/80 uppercase tracking-widest mb-4">
                                                        Rozwiązanie
                                                    </div>
                                                    <div className="space-y-2">
                                                        {problem.solution.map((line, i) => (
                                                            <p key={i} className="text-neutral-300 text-base leading-relaxed font-medium">
                                                                {line}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>

                                            </div>

                                            {/* Right Padding Spacer */}
                                            <div className="w-10 shrink-0" />
                                        </div>

                                        {/* Bottom Padding Spacer */}
                                        <div className="h-12" />
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Atomic Spacer */}
            <div className="h-40" />
        </section>
    );
};

export default ProblemsSection;
