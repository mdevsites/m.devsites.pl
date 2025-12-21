'use client';

import { motion } from 'framer-motion';

export default function NebulaBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
            {/* Base Tone */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0f0518] opacity-100" />

            {/* Orb 1 - Deep Purple (Top Left) */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-900/20 blur-[130px] rounded-full mix-blend-screen"
            />

            {/* Orb 2 - Vibrant Fuchsia (Bottom Right) */}
            <motion.div
                animate={{
                    x: [0, -150, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-fuchsia-900/15 blur-[120px] rounded-full mix-blend-screen"
            />

            {/* Orb 3 - Indigo Accent (Center-ish moving) */}
            <motion.div
                animate={{
                    x: [0, 200, -200, 0],
                    y: [0, 100, -100, 0],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[30%] left-[20%] w-[600px] h-[600px] bg-indigo-900/15 blur-[150px] rounded-full mix-blend-screen"
            />

            {/* Subtle Overlay Grid/Texture for depth (Optional - keeping clean for now) */}
        </div>
    );
}
