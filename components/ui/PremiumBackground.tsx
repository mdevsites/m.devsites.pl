'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function PremiumBackground() {
    // Mouse position state for spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the spotlight
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        // Set initial position to center or some default to avoid jump
        if (typeof window !== 'undefined') {
            mouseX.set(window.innerWidth / 2);
            mouseY.set(window.innerHeight / 2);
        }

        const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
            mouseX.set(clientX);
            mouseY.set(clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Dynamic background gradient based on mouse position
    const background = useMotionTemplate`radial-gradient(
        600px circle at ${springX}px ${springY}px,
        rgba(147, 51, 234, 0.15),
        transparent 80%
    )`;

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#030005]">
            {/* NOISE TEXTURE - Essential for premium feel */}
            <div className="absolute inset-0 z-[10] opacity-[0.04] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                }}
            />

            {/* AMBIENT FLOATING ORBS - To break uniformity */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                    x: [0, 50, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full mix-blend-screen z-0"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.25, 0.15],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[20%] right-[30%] w-[700px] h-[700px] bg-blue-900/10 blur-[140px] rounded-full mix-blend-screen z-0"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                className="absolute top-[40%] left-[60%] w-[500px] h-[500px] bg-fuchsia-900/10 blur-[130px] rounded-full mix-blend-screen z-0"
            />

            {/* INTERACTIVE SPOTLIGHT */}
            <motion.div
                className="absolute inset-0 z-[1]"
                style={{
                    background: background,
                }}
            />

            {/* SECONDARY AMBIENT GLOW (Bottom Right) - To keep it from being too empty */}
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-900/10 blur-[120px] rounded-full mix-blend-screen z-0 animate-pulse"
                style={{ animationDuration: '8s' }}
            />

            {/* TERTIARY AMBIENT GLOW (Top Left) */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen z-0" />

        </div>
    );
}
