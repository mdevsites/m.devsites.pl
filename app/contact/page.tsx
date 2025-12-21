'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone } from 'react-icons/fi';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

const AuroraBackground = dynamic(() => import('@/components/ui/AuroraBackground'), {
    ssr: false,
});

function ContactForm() {
    const searchParams = useSearchParams();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        package: '',
        budget: '',
        deadline: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Effect to handle pre-selection from URL
    useEffect(() => {
        const packageParam = searchParams.get('package');
        if (packageParam) {
            setFormData(prev => ({
                ...prev,
                package: packageParam,
                // Optional: pre-fill budget based on package if desired, currently left blank for user adjustment
            }));
        }
    }, [searchParams]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                package: '',
                budget: '',
                deadline: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.');
        }
    };

    return (
        <>
            <div className="container-custom w-full max-w-7xl relative z-10 px-4 pb-12 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* LEWA KOLUMNA - TEXT & INFO */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4 flex flex-col gap-6 pt-8"
                    >
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                Stwórzmy razem <br />
                                <span className="gradient-text">coś wielkiego</span>
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Opowiedz mi o swoim pomyśle. Pomogę Ci przekształcić go w nowoczesną stronę internetową, która przyciągnie klientów.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col mt-8">
                                {/* Email Row */}
                                <a href="mailto:m.devkontakt@gmail.com" className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-purple-500/50 transition-all duration-300">
                                    <div>
                                        <h3 className="text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider group-hover:text-purple-300 transition-colors">Napisz do mnie</h3>
                                        <p className="text-lg text-white font-semibold">m.devkontakt@gmail.com</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all duration-300">
                                        <FiMail className="w-5 h-5" />
                                    </div>
                                </a>

                                {/* Phone Row */}
                                <a href="tel:+48691630461" className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-pink-500/50 transition-all duration-300">
                                    <div>
                                        <h3 className="text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider group-hover:text-pink-300 transition-colors">Zadzwoń</h3>
                                        <p className="text-lg text-white font-semibold">+48 691 630 461</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-pink-500/20 group-hover:text-pink-300 transition-all duration-300">
                                        <FiPhone className="w-5 h-5" />
                                    </div>
                                </a>
                            </div>
                        </div>


                    </motion.div>

                    {/* PRAWA KOLUMNA - FORMULARZ */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-8"
                    >
                        {status === 'success' ? (
                            /* SUCCESS STATE CONTAINER - Custom styled */
                            <div className="glass-card w-full text-center py-16 px-8">
                                {/* Icon Container */}
                                <div className="inline-flex w-20 h-20 bg-green-500/10 rounded-full items-center justify-center border border-green-500/20 mb-6">
                                    <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-4">Dziękujemy!</h3>

                                {/* Text Block */}
                                <p className="text-gray-300 text-lg leading-relaxed w-full block">
                                    Twoja wiadomość została wysłana. <br className="hidden md:block" />
                                    Skontaktuję się z Tobą najszybciej jak to możliwe.
                                </p>

                                <div style={{ marginTop: '24px', marginBottom: '24px' }}>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white font-medium btn-glass inline-block"
                                    >
                                        Wyślij kolejną wiadomość
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* FORM CONTAINER - Strictly reverted to original styles */
                            <div className="glass-card" style={{ padding: '2rem' }}>
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                                    {status === 'error' && (
                                        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-200 text-sm">
                                            {errorMessage}
                                        </div>
                                    )}

                                    {/* SEKCJA 1: DANE */}
                                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.25rem' }}>
                                        <div className="space-y-3">
                                            <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Imię i nazwisko</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Jan Kowalski"
                                                className="input w-full rounded-xl py-4 bg-white/5 border-white/10 hover:border-white/20 focus:border-purple-500/50 focus:bg-white/10 transition-colors"
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Adres e-mail</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="jan@example.com"
                                                className="input w-full rounded-xl py-4 bg-white/5 border-white/10 hover:border-white/20 focus:border-purple-500/50 focus:bg-white/10 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* SEKCJA 2: PAKIET (ZMIANA Z PROJEKTU) */}
                                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.25rem' }}>
                                        <div className="space-y-3">
                                            <label htmlFor="package" className="text-sm font-medium text-gray-300 ml-1">Wybierz Pakiet</label>
                                            <select
                                                id="package"
                                                name="package"
                                                required
                                                value={formData.package}
                                                onChange={handleChange}
                                                className="input w-full rounded-xl py-4 bg-white/5 border-white/10 hover:border-white/20 focus:border-purple-500/50 focus:bg-white/10 transition-colors appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled className="bg-slate-900">Wybierz pakiet...</option>
                                                <option value="start" className="bg-slate-900">PAKIET START (1 199 PLN)</option>
                                                <option value="business" className="bg-slate-900">PAKIET BIZNES (2 299 PLN)</option>
                                                <option value="pro" className="bg-slate-900">PAKIET PRO (3 999 PLN)</option>
                                                <option value="custom" className="bg-slate-900">Inny / Indywidualna wycena</option>
                                            </select>
                                        </div>

                                        <div className="space-y-3">
                                            <label htmlFor="budget" className="text-sm font-medium text-gray-300 ml-1">Budżet (opcjonalne)</label>
                                            <input
                                                type="text"
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                placeholder="np. 3000 PLN"
                                                className="input w-full rounded-xl py-4 bg-white/5 border-white/10 hover:border-white/20 focus:border-purple-500/50 focus:bg-white/10 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Opowiedz mi o swoim pomyśle</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={8}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Jaki jest cel strony? Kto jest Twoim klientem? Masz już jakieś inspiracje?"
                                            className="input w-full rounded-xl py-4 bg-white/5 border-white/10 hover:border-white/20 focus:border-purple-500/50 focus:bg-white/10 transition-colors resize-none leading-relaxed"
                                        />
                                    </div>

                                    <div className="flex items-center justify-end" style={{ paddingTop: '1rem' }}>
                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="group w-full md:w-auto px-8 py-4 rounded-full text-white font-medium text-lg transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-3"
                                        >
                                            {status === 'loading' ? (
                                                <span className="flex items-center justify-center space-x-2">
                                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    <span>Wysyłanie...</span>
                                                </span>
                                            ) : (
                                                <>
                                                    <span>Wyślij zapytanie</span>
                                                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </motion.div>

                </div >

                <div className="h-16" />
            </div>

            {/* HORIZONTAL TIMELINE SECTION - Isolated Container */}
            <div className="w-full flex justify-center px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full max-w-5xl pt-12"
                >
                    <div className="text-center mb-12">
                        <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Co dzieje się po wysłaniu?</h4>
                    </div>

                    <div className="h-10" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

                        {/* Connecting Line (Desktop Only) */}
                        <div className="hidden md:block absolute top-[24px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

                        {/* Step 1 */}
                        <div className="relative flex flex-col items-center text-center group">
                            <div className="w-12 h-12 rounded-full bg-[#050505] border border-purple-500/50 flex items-center justify-center text-purple-400 mb-6 relative z-10 shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:scale-110 transition-transform duration-300">
                                <span className="text-lg font-bold">1</span>
                            </div>
                            <h5 className="text-white font-medium text-lg mb-2">Analiza</h5>
                            <p className="text-sm text-gray-400 leading-relaxed max-w-[250px] mx-auto">
                                Analizuję Twoje potrzeby i przygotowuję wstępną koncepcję.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative flex flex-col items-center text-center group">
                            <div className="w-12 h-12 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center text-gray-400 mb-6 relative z-10 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-colors duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                <span className="text-lg font-bold">2</span>
                            </div>
                            <h5 className="text-white font-medium text-lg mb-2">Konsultacja</h5>
                            <p className="text-sm text-gray-400 leading-relaxed max-w-[250px] mx-auto">
                                Kontaktuję się w ciągu 24h, aby omówić szczegóły i budżet.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative flex flex-col items-center text-center group">
                            <div className="w-12 h-12 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center text-gray-400 mb-6 relative z-10 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-colors duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                <span className="text-lg font-bold">3</span>
                            </div>
                            <h5 className="text-white font-medium text-lg mb-2">Realizacja</h5>
                            <p className="text-sm text-gray-400 leading-relaxed max-w-[250px] mx-auto">
                                Po akceptacji warunków, rozpoczynam pracę nad Twoim projektem.
                            </p>
                        </div>

                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default function ContactPage() {
    return (
        <main className="min-h-screen selection:bg-purple-500/30 font-sans relative lg:flex lg:flex-col lg:justify-center">
            {/* Particles Effect - Removed */}
            {/* <BackgroundEffects /> */}

            {/* Communication Signal Background */}
            {/* Aurora Mesh Background */}
            <AuroraBackground />

            {/* Spacer for Navbar */}
            <div className="h-32 md:h-40 w-full relative z-10 lg:hidden" />

            <Suspense fallback={<div className="text-white text-center pt-20">Ładowanie formularza...</div>}>
                <ContactForm />
            </Suspense>
        </main>
    );
}
