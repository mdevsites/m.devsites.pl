'use client';

import Link from 'next/link';
import {
    CheckIcon,
    CurrencyDollarIcon,
    GlobeAltIcon,
    RocketLaunchIcon,
    XMarkIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline';
import CTASection from '@/components/home/CTASection';
import dynamic from 'next/dynamic';

const AuroraBackground = dynamic(() => import('@/components/ui/AuroraBackground'), {
    ssr: false,
});

const PremiumBackground = dynamic(() => import('@/components/ui/PremiumBackground'), {
    ssr: false,
});

// --- DATA FROM USER REQUEST ---

const PRICING_PACKAGES = [
    {
        id: 'start',
        name: 'PAKIET START',
        price: '1 399',
        description: 'Idealny dla osób, które potrzebują prostej i estetycznej strony wizytówki.',
        features: [
            'Jedna strona przewijana w dół (one-page)',
            'Do 4 sekcji (np. oferta, o firmie, realizacje, kontakt)',
            'Dopasowanie wyglądu do Twojej branży i stylu',
            'Strona działa poprawnie na telefonach i tabletach',
            'Formularz kontaktowy',
            'Jeden etap poprawek po oddaniu projektu'
        ],
        excluded: [
            'Brak animacji',
            'Brak działań zwiększających widoczność w Google',
            'Brak rozbudowanych funkcji'
        ],
        icon: RocketLaunchIcon,
        popular: false,
        gradient: 'from-blue-500 to-cyan-400',
        highlightColor: 'hover:bg-cyan-400 border-cyan-400/50 hover:border-cyan-400',
        textColor: 'text-cyan-400',
    },
    {
        id: 'business',
        name: 'PAKIET BIZNES',
        price: '2 699',
        description: 'Dla firm, które chcą profesjonalnej strony firmowej.',
        features: [
            'Do 4 podstron (np. oferta, o firmie, realizacje, kontakt)',
            'Przemyślany układ strony dopasowany do Twojej działalności',
            'Delikatne animacje poprawiające odbiór strony',
            'Strona dostosowana do telefonów i tabletów',
            'Formularz kontaktowy',
            'Przygotowanie strony tak, aby była lepiej widoczna w Google',
            'Podpięcie statystyk odwiedzin strony',
            'Dwa etapy poprawek po oddaniu projektu'
        ],
        icon: GlobeAltIcon,
        popular: true,
        gradient: 'from-purple-600 to-pink-500',
        highlightColor: 'hover:bg-pink-500 border-pink-500/50 hover:border-pink-500',
        textColor: 'text-pink-500',
    },
    {
        id: 'pro',
        name: 'PAKIET PRO',
        price: '3 999',
        description: 'Dla marek, które chcą się wyróżnić wizualnie.',
        features: [
            'Do 6 podstron',
            'Układ strony zaprojektowany pod zachęcenie klientów do kontaktu',
            'Rozbudowane animacje wizualne',
            'Strona dostosowana do telefonów i tabletów',
            'Formularze kontaktowe i wyraźne wezwania do działania',
            'Przygotowanie strony tak, aby była lepiej widoczna w Google',
            'Przyspieszenie działania strony',
            'Priorytetowa realizacja',
            'Trzy etapy poprawek po oddaniu projektu'
        ],
        icon: CurrencyDollarIcon,
        popular: false,
        gradient: 'from-emerald-500 to-teal-400',
        highlightColor: 'hover:bg-teal-400 border-teal-400/50 hover:border-teal-400',
        textColor: 'text-teal-400',
    }
];

export default function PricingContent() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans">
            {/* Background Gradients */}
            {/* Background Gradients (Dual Tone Spot style from Hero) */}
            {/* Aurora Mesh Background */}
            <AuroraBackground />

            {/* Spacer for Navbar */}
            <div className="h-32 md:h-48 w-full relative z-10" />

            {/* Particles Effect - Removed */}
            {/* <BackgroundEffects /> */}
            <div className="relative z-10 pb-24 flex flex-col items-center" style={{ margin: '0 40px' }}>
                <div className="text-center w-full mb-32 flex flex-col items-center">
                    <h1
                        className="text-4xl md:text-6xl font-bold mb-6 text-center leading-tight flex flex-col md:block animate-[fadeIn_0.8s_ease-out]" // Stack on mobile, inline on desktop if fits
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Inwestycja w Twój&nbsp;
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                            Wizerunek Online
                        </span>
                    </h1>
                    <p
                        className="text-gray-400 text-lg md:text-xl text-center max-w-5xl px-4 animate-[fadeIn_0.8s_ease-out_0.1s_both]"
                    >
                        Przejrzyste pakiety dopasowane do Twoich potrzeb. Brak ukrytych kosztów.
                    </p>
                </div>

                {/* Rigid Spacer as requested */}
                <div style={{ height: '100px' }} className="w-full shrink-0" />

                {/* PRICING CARDS */}
                <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 justify-items-center">
                    {PRICING_PACKAGES.map((pkg, index) => (
                        <div
                            key={pkg.id}
                            className={`
                                relative group rounded-[2.5rem] p-0
                                bg-transparent
                                flex flex-col h-full max-w-[450px] mx-auto w-full min-h-[600px] md:min-h-[650px]
                                animate-[fadeIn_0.6s_ease-out_both]
                            `}
                            style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                        >
                            {/* Card Inner */}
                            <div className="h-full bg-[#0a0a0a]/90 backdrop-blur-xl rounded-[2.5rem] p-8 flex flex-col items-center relative overflow-hidden flex-grow border border-white/5 shadow-2xl transition-transform duration-300 hover:-translate-y-2">

                                {/* Glow Effect */}
                                {/* Glow Effect */}
                                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${pkg.gradient} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                                {/* Rigid Spacer at Top */}
                                <div style={{ height: '40px' }} className="w-full shrink-0" />

                                {/* Header - Centered Content */}
                                <div className="flex flex-col items-center justify-center w-full">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center shadow-lg shadow-purple-900/20`}>
                                        <pkg.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Rigid Spacer */}
                                    <div style={{ height: '40px' }} className="w-full shrink-0" />

                                    <h3 className="text-2xl font-bold mb-4 text-center w-full bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{pkg.name}</h3>
                                    {/* Description: Full width, no extra padding, fixed min-height for alignment */}
                                    <p className="text-gray-400 text-sm leading-relaxed text-center max-w-[85%] mx-auto min-h-[48px] flex items-center justify-center">{pkg.description}</p>
                                </div>

                                {/* Rigid Spacer */}
                                <div style={{ height: '20px' }} className="w-full shrink-0" />

                                {/* Price - Centered */}
                                <div className="w-full flex flex-col items-center justify-center">
                                    <div className="flex items-baseline gap-1 justify-center">
                                        <span className="text-5xl font-bold text-white tracking-tight">{pkg.price}</span>
                                        <span className="text-xl text-purple-400 font-bold">PLN</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-2 font-medium text-center">netto / jednorazowo</p>
                                </div>

                                {/* Rigid Spacer */}
                                <div style={{ height: '40px' }} className="w-full shrink-0" />

                                {/* Features List - Full width */}
                                <div className="w-full flex flex-col items-center flex-grow">
                                    <ul className="space-y-6 w-fit mx-auto px-4">
                                        {pkg.features.map((feat, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-300 leading-relaxed text-left max-w-[280px]">{feat}</span>
                                            </li>
                                        ))}
                                        {/* Excluded items */}
                                        {/* @ts-ignore - dynamic property check */}
                                        {pkg.excluded && pkg.excluded.map((feat, i) => (
                                            <li key={`ex-${i}`} className="flex items-start gap-3 opacity-50">
                                                <XMarkIcon className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-400 leading-relaxed text-left max-w-[280px]">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Rigid Spacer between Options and Button */}
                                <div style={{ height: '40px' }} className="w-full shrink-0" />

                                {/* Button */}
                                <div className="w-full mt-auto flex justify-center">
                                    <Link
                                        href={`/contact?package=${pkg.id}`}
                                        className={`group/btn relative w-[85%] mx-auto block bg-transparent border-2 py-6 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/10 hover:text-white ${pkg.highlightColor} ${pkg.textColor}`}
                                    >
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="font-bold text-lg tracking-wide transition-colors">
                                                WYBIERZ PAKIET
                                            </span>
                                            <ArrowRightIcon className="w-6 h-6 -rotate-45 transition-transform duration-300 group-hover/btn:rotate-0 group-hover/btn:translate-x-1" />
                                        </div>
                                    </Link>
                                </div>

                                {/* Rigid Spacer at Bottom */}
                                <div style={{ height: '50px' }} className="w-full shrink-0" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Rigid Spacer */}
                <div style={{ height: '100px' }} className="w-full shrink-0" />



                <div className="relative z-10 w-full flex justify-center">
                    <CTASection
                        title="Nie znalazłeś idealnego pakietu?"
                        description="Każdy biznes jest inny. Skontaktuj się ze mną, a przygotuję dla Ciebie indywidualną wycenę."
                        buttonText="Zapytaj o wycenę"
                    />
                </div>


            </div>
        </div >
    );
}
