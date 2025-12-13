'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundEffects() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            size: number;
            color: string;
            opacity: number;

            constructor(x: number, y: number, size: number, color: string) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = color;
                // Much slower, random drift
                this.directionX = (Math.random() * 0.4) - 0.2;
                this.directionY = (Math.random() * 0.4) - 0.2;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.globalAlpha = 1; // Reset alpha
            }

            update() {
                // Wrap around edges for seamless feel
                if (this.x > canvas!.width) this.x = 0;
                if (this.x < 0) this.x = canvas!.width;
                if (this.y > canvas!.height) this.y = 0;
                if (this.y < 0) this.y = canvas!.height;

                this.x += this.directionX;
                this.y += this.directionY;

                // Slight Twinkle
                if (Math.random() > 0.99) {
                    this.opacity = Math.random() * 0.5 + 0.1;
                }

                this.draw();
            }
        }

        const initParticles = () => {
            particles = [];
            // Higher density for dust effect
            const numberOfParticles = (canvas!.width * canvas!.height) / 10000;

            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2); // 0-2px size for dust
                let x = Math.random() * canvas!.width;
                let y = Math.random() * canvas!.height;
                // White and soft Purple colors
                let color = Math.random() > 0.5 ? '#FFFFFF' : '#C084FC';

                particles.push(new Particle(x, y, size, color));
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas!.width, canvas!.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none"
            style={{ width: '100vw', height: '100vh', background: 'transparent' }}
        />
    );
}
