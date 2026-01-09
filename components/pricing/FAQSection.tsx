'use client';

import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const FAQS = [
    {
        question: 'Czy wystawiasz faktury?',
        answer: 'Tak, wystawiam faktury (bez VAT). Jestem przedsiębiorcą zwolnionym z VAT, więc otrzymujesz rachunek/fakturę uproszczoną. Podane na stronie ceny są cenami ostatecznymi do zapłaty.'
    },
    {
        question: 'Ile trwa realizacja strony?',
        answer: 'Czas realizacji zależy od wybranego pakietu i skomplikowania projektu. Proste strony wizytówki (Pakiet Start) powstają zazwyczaj w 5-10 dni roboczych. Bardziej rozbudowane serwisy (Pakiet Biznes/Pro) to zwykle 2-4 tygodnie.'
    },
    {
        question: 'Czy muszę dostarczyć teksty i zdjęcia?',
        answer: 'Nie musisz, ale to przyspiesza pracę. Jeśli nie masz własnych materiałów, w ramach współpracy mogę przygotować profesjonalne treści (copywriting) oraz dobrać wysokiej jakości zdjęcia stockowe lub wygenerowane przez AI.'
    },
    {
        question: 'Co to jest "animacja premium"?',
        answer: 'To zaawansowane efekty wizualne, takie jak płynne przejścia, elementy reagujące na kursor, animacje scrollowania (parallax) czy interaktywne tła, które sprawiają, że strona „żyje” i robi niesamowite wrażenie na odwiedzających.'
    },
    {
        question: 'Czy strona będzie działać na telefonie?',
        answer: 'Tak, każda strona którą tworzę jest w 100% responsywna (RWD). Oznacza to, że wygląda świetnie i działa płynnie zarówno na komputerach, tabletach, jak i smartfonach.'
    },
    {
        question: 'Czy są jakieś ukryte koszty?',
        answer: 'Nie. Przed rozpoczęciem współpracy ustalamy pełny kosztorys. Jedynymi stałymi kosztami utrzymania strony (niezależnymi ode mnie) są domena (adres www) i hosting (serwer), które opłacasz raz w roku u wybranego dostawcy (pomagam w konfiguracji).'
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full max-w-4xl mx-auto pb-32 flex">

            {/* Left Spacer */}
            <div className="w-8 shrink-0" />

            <div className="flex-1 w-full min-w-0">
                <div className="text-center mb-0">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Często zadawane pytania
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Wszystko, co musisz wiedzieć przed rozpoczęciem współpracy
                    </p>
                </div>

                <div style={{ height: '80px' }} className="w-full shrink-0" />

                <div className="space-y-0 divide-y divide-white/5 border-t border-b border-white/5">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="group bg-transparent transition-all duration-300"
                        >
                            {/* Top Spacer */}
                            <div className="h-2 w-full" />

                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-4 text-left outline-none hover:bg-white/[0.02] transition-colors"
                            >
                                <span className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                    {faq.question}
                                </span>
                                <span className={`
                                    ml-4 p-2 rounded-full border border-white/10 text-gray-400 transition-all duration-300
                                    ${openIndex === index ? 'bg-white text-black rotate-180 border-white' : 'group-hover:text-white group-hover:border-white/30'}
                                `}>
                                    {openIndex === index ? (
                                        <MinusIcon className="w-6 h-6" />
                                    ) : (
                                        <PlusIcon className="w-6 h-6" />
                                    )}
                                </span>
                            </button>

                            <div
                                className={`
                                    overflow-hidden transition-all duration-500 ease-in-out
                                    ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                                `}
                            >
                                {/* Inner Spacer between Question and Answer */}
                                <div className="h-6 w-full" />

                                <div className="pb-4 pt-0 text-gray-400 leading-relaxed text-lg md:text-xl w-full">
                                    {faq.answer}
                                </div>
                            </div>

                            {/* Bottom Spacer */}
                            <div className="h-2 w-full" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Spacer */}
            <div className="w-8 shrink-0" />
        </section>
    );
}
