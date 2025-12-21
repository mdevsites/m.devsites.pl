'use client';

import { useEffect, useRef } from 'react';

export default function FlowingWavesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let time = 0;

        const waves = [
            { y: height * 0.85, length: 0.01, amplitude: 50, speed: 0.02, color: 'rgba(147, 51, 234, 0.2)' }, // Purple
            { y: height * 0.88, length: 0.008, amplitude: 70, speed: 0.015, color: 'rgba(168, 85, 247, 0.15)' }, // Light Purple
            { y: height * 0.90, length: 0.012, amplitude: 40, speed: 0.01, color: 'rgba(59, 130, 246, 0.15)' }, // Blue
        ];

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            time += 1;

            waves.forEach((wave) => {
                ctx.beginPath();
                ctx.moveTo(0, height);

                for (let x = 0; x < width; x++) {
                    // Sine wave formula
                    const dy = Math.sin(x * wave.length + time * wave.speed) * wave.amplitude;
                    ctx.lineTo(x, wave.y + dy);
                }

                ctx.lineTo(width, height);
                ctx.lineTo(0, height);
                ctx.fillStyle = wave.color;
                ctx.fill();
            });

            // Subtle noise grain overlay drawing directly on canvas for performance
            // (Skipped to keep it clean, handled by CSS overlay if needed)

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Recalculate base Y positions
            waves[0].y = height * 0.85;
            waves[1].y = height * 0.88;
            waves[2].y = height * 0.90;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
            {/* Deep static background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0716] to-[#050505]" />

            {/* Waves Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* Top Light Glow */}
            <div className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-purple-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        </div>
    );
}
