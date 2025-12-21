'use client';

import { useEffect, useRef } from 'react';

export default function GridBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let time = 0;

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            time += 0.5; // Speed

            // Perspective Grid parameters
            const horizonY = height * 0.4; // Where lines converge
            const gridSize = 40;
            const bottomSpread = 4; // Perspective spread

            // NO SHADOW BLUR - Performance critical
            ctx.shadowBlur = 0;

            ctx.lineWidth = 1.5;
            ctx.strokeStyle = 'rgba(192, 132, 252, 0.4)'; // Violet-400

            // Vertical Lines
            const centerX = width / 2;
            const verticalLines = 20; // Reduced count for performance

            for (let i = -verticalLines / 2; i <= verticalLines / 2; i++) {
                ctx.beginPath();
                ctx.moveTo(centerX + i * 20, horizonY);
                ctx.lineTo(centerX + i * gridSize * bottomSpread, height);
                ctx.stroke();
            }

            // Horizontal Lines
            const horizontalLines = 15; // Reduced count for performance
            const totalDistance = height - horizonY;

            for (let i = 0; i < horizontalLines; i++) {
                // Loop logic
                let progress = (i * gridSize + time) % (height * 1.5);
                const y = height - progress;

                if (y < horizonY) continue;

                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);

                // Simple opacity calc
                const alpha = Math.min(1, Math.max(0, (y - horizonY) / totalDistance));

                ctx.strokeStyle = `rgba(96, 165, 250, ${alpha * 0.6})`; // Blue-400
                ctx.stroke();
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
            {/* Deep static background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#08040c] to-[#040108]" />

            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* CSS-based Glow (Cheap performance cost compared to Canvas) */}
            <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        </div>
    );
}
