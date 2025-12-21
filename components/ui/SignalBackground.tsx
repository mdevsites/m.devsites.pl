'use client';

import { useEffect, useRef } from 'react';

export default function SignalBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const symbols = ['{ }', '< / >', ';', '#', '//', 'Opn', '()', '=>', '[]', 'div'];
        const particles: { x: number; y: number; text: string; speed: number; opacity: number; size: number }[] = [];

        // Settings
        const particleCount = width < 768 ? 15 : 30; // Not too crowded

        const createParticle = (yOption?: number) => {
            particles.push({
                x: Math.random() * width,
                y: yOption ?? height + 20, // Start below screen or at specific Y
                text: symbols[Math.floor(Math.random() * symbols.length)],
                speed: Math.random() * 0.5 + 0.2, // Slow rise
                opacity: Math.random() * 0.5 + 0.2,
                size: Math.floor(Math.random() * 10 + 14) // Font size 14-24
            });
        };

        // Init
        for (let i = 0; i < particleCount; i++) {
            createParticle(Math.random() * height); // Pre-fill screen
        }

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Maintain count
            if (particles.length < particleCount) {
                if (Math.random() < 0.05) createParticle();
            }

            ctx.font = 'bold 16px "JetBrains Mono", monospace';
            ctx.textAlign = 'center';

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];

                p.y -= p.speed;

                // Fade out at top (or middle of screen to keep it bottom-heavy)
                if (p.y < height * 0.4) {
                    p.opacity -= 0.005;
                }

                if (p.opacity <= 0 || p.y < 0) {
                    particles.splice(i, 1);
                    // Respawn immediately to keep density? No, let loop handle it
                    continue;
                }

                // Draw
                ctx.fillStyle = `rgba(147, 51, 234, ${p.opacity * 0.6})`; // Purple base

                // Random blue variation
                if (p.text.includes('<') || p.text.includes('=>')) {
                    ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity * 0.6})`; // Blue
                }

                ctx.font = `bold ${p.size}px monospace`;
                ctx.fillText(p.text, p.x, p.y);

                // Glow (expensive? keep it simple for now, or minimal)
                // ctx.shadowBlur = 5;
                // ctx.shadowColor = ctx.fillStyle;
            }

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0510] to-[#050505]" />
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* Bottom glow */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-fuchsia-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        </div>
    );
}
