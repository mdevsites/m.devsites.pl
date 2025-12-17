'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const BackgroundEffects = dynamic(() => import('@/components/ui/BackgroundEffects'), {
    ssr: false,
});

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black selection:bg-purple-500/30 selection:text-white">
            <BackgroundEffects />

            <div className="container-custom relative z-10 px-4">
                <div className="max-w-xl mx-auto text-center">
                    <h1 className="text-[120px] md:text-[180px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 leading-none select-none opacity-20 animate-pulse">
                        404
                    </h1>

                    <div className="glass-card -mt-16 relative z-20 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
                            Zgubiliśmy się...
                        </h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Strona, której szukasz, nie istnieje lub została przeniesiona.
                            Ale nie martw się, to tylko małe zboczenie z kursu!
                        </p>

                        <Link
                            href="/"
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20 inline-block"
                        >
                            Wróć do strony głównej
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
