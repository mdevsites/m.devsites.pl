import { motion } from "framer-motion";

export const Logo = () => {
    return (
        <a href="/" className="group relative flex items-center justify-center px-2 py-1 z-50">
            {/* Ambient Glow (Permanent, Subtle) */}
            <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full opacity-60" />

            {/* Unified Logo Container */}
            <div className="relative flex items-baseline tracking-tighter">
                {/* M (Permanent Gradient) */}
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 relative z-10">
                    M
                </span>

                {/* Dot (Pulsing) */}
                <span className="mx-0.5 relative flex items-end justify-center">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
                </span>

                {/* dev (White) */}
                <span className="text-3xl font-bold text-white relative z-10">
                    dev
                </span>

                {/* Glitch/Tech Decor elements (Permanent) */}
                <span className="absolute -top-1 -right-2 w-1 h-1 bg-purple-400 rounded-full opacity-80" />
                <span className="absolute top-1/2 -left-2 w-1 h-0.5 bg-pink-500 opacity-80" />
            </div>
        </a>
    );
};
