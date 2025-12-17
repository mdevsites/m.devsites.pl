'use client';

import { useEffect } from 'react';
import BackgroundEffects from '@/components/ui/BackgroundEffects';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
            <BackgroundEffects />

            <div className="container-custom relative z-10 px-4">
                <div className="max-w-lg mx-auto text-center">
                    <div className="glass-card bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Coś poszło nie tak!
                        </h2>
                        <p className="text-gray-400 mb-8 text-sm">
                            Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę lub wróć później.
                        </p>

                        <button
                            onClick={
                                // Attempt to recover by trying to re-render the segment
                                () => reset()
                            }
                            className="px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                        >
                            Spróbuj ponownie
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
