"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AuroraBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[#030005] pointer-events-none">
            {/* 1. Subtle Noise Texture (Static, lightweight) */}
            <div
                className="absolute inset-0 z-[20] opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                }}
            />

            {/* 2. Main Aurora Container */}
            <div className="absolute inset-0 z-0 blur-[80px] saturate-150">

                {/* Blob 1: Primary Purple - Top Left drift */}
                <motion.div
                    animate={{
                        x: [-100, 100, -100],
                        y: [-50, 50, -50],
                        rotate: [0, 90, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[-20%] left-[-20%] w-[150vw] h-[150vw] md:w-[90vw] md:h-[90vw] bg-purple-900/30 rounded-full mix-blend-screen"
                />

                {/* Blob 2: Deep Blue - Bottom Right drift */}
                <motion.div
                    animate={{
                        x: [50, -50, 50],
                        y: [100, -100, 100],
                        scale: [1, 1.4, 1]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-[-20%] right-[-20%] w-[150vw] h-[150vw] md:w-[90vw] md:h-[90vw] bg-blue-900/20 rounded-full mix-blend-screen"
                />

                {/* Blob 3: Vibrant Accent - Center-ish */}
                <motion.div
                    animate={{
                        x: [-50, 50, -50],
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[20%] left-[10%] w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] bg-indigo-600/20 rounded-full mix-blend-screen"
                />

                {/* Blob 4: Bright Highlight - Moving across */}
                <motion.div
                    animate={{
                        x: ["-20%", "120%"],
                        y: [0, 50],
                        opacity: [0, 0.2, 0]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 5
                    }}
                    className="absolute top-[10%] left-0 w-[100vh] h-[20vh] md:w-[80vh] md:h-[20vh] bg-teal-400/10 rotate-[-15deg] blur-[100px]"
                />

            </div>

            {/* 3. Vignette to focus center */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020003] via-transparent to-[#020003] z-[10]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020003] via-transparent to-[#020003] z-[10]" />

        </div>
    );
}
