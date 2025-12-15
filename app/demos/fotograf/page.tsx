import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Anna Kowalska Photography | Portret & Ślub",
    description: "Profesjonalna fotografia portretowa i ślubna. Zobacz portfolio.",
};

export default function PhotographerPage() {
    return (
        <main className="bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
            {/* SEKCJA 1: HERO */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background Image Placeholder - using a dark abstract or nature image to represent 'generic artistic' */}
                <div className="absolute inset-0 bg-gray-200">
                    {/* In a real project, we would use a real image. Using a placeholder color/div for now or a generic URL if allowed. 
               Using a simple gradient placeholder for the demo to ensure it loads cleanly locally. */}
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-80" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4 animate-fade-in-up">
                        Anna Kowalska
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-light tracking-widest uppercase mb-12 opacity-90 animate-fade-in-up delay-100">
                        Fotografia Portretowa & Ślubna
                    </p>
                    <div className="flex flex-col items-center gap-6 animate-fade-in-up delay-200">
                        <a
                            href="#gallery"
                            className="text-sm tracking-[0.2em] uppercase hover:text-gray-300 transition-colors duration-300"
                        >
                            Zobacz Portfolio
                        </a>
                        <a href="#gallery" className="animate-bounce opacity-80 hover:opacity-100 transition-opacity">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* SEKCJA 2: GALERIA */}
            {/* Spacer for visual separation and scroll anchoring */}
            <div id="gallery" className="h-24 md:h-32 bg-white w-full" />

            <section className="pb-24 pt-4 px-4 bg-white">
                <div className="w-full flex justify-center">
                    <div className="flex flex-col md:flex-row gap-4 max-w-6xl w-full px-4 md:px-0">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-4 flex-1">
                            {[
                                { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80", aspect: "aspect-[3/4]" },
                                { src: "https://images.unsplash.com/photo-1623150502742-6a849aa94be4?w=800&q=80", aspect: "aspect-[3/4]" },
                                { src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80", aspect: "aspect-[4/3]" },
                                { src: "https://images.unsplash.com/photo-1519657337289-077653f724ed?w=800&q=80", aspect: "aspect-[3/4]" },
                            ].map((item, index) => (
                                <div key={`col1-${index}`} className={`relative overflow-hidden group w-full ${item.aspect} bg-gray-100 shadow-sm hover:shadow-md transition-shadow`}>
                                    <img src={item.src} alt="Portfolio" className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" loading="lazy" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>
                            ))}
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-4 flex-1">
                            {[
                                { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", aspect: "aspect-square" },
                                { src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=800&q=80", aspect: "aspect-square" },
                                { src: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=800&q=80", aspect: "aspect-[3/4]" },
                                { src: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&q=80", aspect: "aspect-[4/3]" },
                            ].map((item, index) => (
                                <div key={`col2-${index}`} className={`relative overflow-hidden group w-full ${item.aspect} bg-gray-100 shadow-sm hover:shadow-md transition-shadow`}>
                                    <img src={item.src} alt="Portfolio" className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" loading="lazy" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>
                            ))}
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col gap-4 flex-1">
                            {[
                                { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80", aspect: "aspect-[4/3]" },
                                { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", aspect: "aspect-[3/4]" },
                                { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80", aspect: "aspect-square" },
                                { src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=80", aspect: "aspect-[3/4]" },
                            ].map((item, index) => (
                                <div key={`col3-${index}`} className={`relative overflow-hidden group w-full ${item.aspect} bg-gray-100 shadow-sm hover:shadow-md transition-shadow`}>
                                    <img src={item.src} alt="Portfolio" className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" loading="lazy" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Spacer for visual separation */}
            <div className="h-16 md:h-32 bg-white w-full" />
            {/* SEKCJA 3: O MNIE */}
            <section className="px-4 bg-gray-100" style={{ paddingTop: '12rem', paddingBottom: '12rem' }}>
                <div className="w-full flex justify-center">
                    <div className="max-w-4xl mx-auto text-center w-full">
                        <h2 className="font-serif text-3xl md:text-4xl mb-8">Cześć, jestem Anna</h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                            <p>
                                Fotografią zajmuję się od ponad 10 lat. To, co kocham najbardziej, to uchwycenie prawdziwych emocji i autentycznych momentów, które zostają z nami na zawsze.
                            </p>
                            <p>
                                Specjalizuję się w fotografii portretowej i ślubnej. Każda sesja to dla mnie nowa przygoda i wyjątkowa historia do opowiedzenia światłem i cieniem. Wierzę, że najlepsze zdjęcie to takie, na którym widać duszę człowieka.
                            </p>
                            <p>
                                Pracuję na profesjonalnym sprzęcie Canon i wykorzystuję przede wszystkim naturalne światło, aby stworzyć ponadczasowe, piękne obrazy, które będą cieszyć oko przez lata.
                            </p>
                        </div>
                        {/* Signature or visual element removed as per request */}
                    </div>
                </div>
            </section>

            {/* Spacer for visual separation */}
            <div className="h-16 md:h-32 bg-white w-full" />

            {/* SEKCJA 4: KONTAKT */}
            <section className="py-24 md:py-32 px-4 bg-white" id="contact">
                <div className="w-full flex justify-center">
                    <div className="max-w-4xl mx-auto w-full">
                        <div className="text-center" style={{ marginBottom: '4rem' }}>
                            <h2 className="font-serif text-3xl md:text-4xl mb-4">Zarezerwuj sesję</h2>
                            <p className="text-gray-500 font-light">
                                Skontaktuj się ze mną, aby omówić szczegóły Twojej sesji zdjęciowej
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-1">
                                <label htmlFor="name" className="text-xs uppercase tracking-wider text-gray-500">Imię i nazwisko</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors rounded-none bg-transparent"
                                    placeholder="Jan Kowalski"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label htmlFor="email" className="text-xs uppercase tracking-wider text-gray-500">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors rounded-none bg-transparent"
                                        placeholder="jan@example.com"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="phone" className="text-xs uppercase tracking-wider text-gray-500">Telefon (opcjonalnie)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors rounded-none bg-transparent"
                                        placeholder="+48 123 456 789"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="type" className="text-xs uppercase tracking-wider text-gray-500">Rodzaj sesji</label>
                                <select
                                    id="type"
                                    name="type"
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors rounded-none bg-transparent"
                                >
                                    <option value="portrait">Portret</option>
                                    <option value="wedding">Ślub / Wesele</option>
                                    <option value="lifestyle">Lifestyle / Rodzinna</option>
                                    <option value="other">Inna</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="message" className="text-xs uppercase tracking-wider text-gray-500">Wiadomość</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors rounded-none bg-transparent resize-none"
                                    placeholder="Opowiedz mi o swojej wizji..."
                                />
                            </div>

                            <div className="pt-8 text-center">
                                <button
                                    type="submit"
                                    className="bg-black text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors w-full md:w-auto"
                                >
                                    Wyślij zapytanie
                                </button>
                            </div>
                        </form>

                        <div className="mt-24 text-center space-y-2 text-sm text-gray-500 font-light">
                            <p>anna@fotografia.pl</p>
                            <p>@anna.kowalska.photo</p>
                            <p>+48 600 700 800</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spacer for visual separation */}
            <div className="h-16 md:h-32 bg-white w-full" />

            {/* FOOTER */}
            <footer className="bg-black text-white py-12 border-t border-gray-900 border-none">
                <div className="w-full flex justify-center">
                    <div className="max-w-7xl mx-auto px-4 text-center w-full">
                        <p className="font-serif text-2xl mb-4">Anna Kowalska</p>
                        <p className="text-gray-500 text-xs tracking-widest uppercase">
                            © 2024 Photography. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </main >
    );
}
