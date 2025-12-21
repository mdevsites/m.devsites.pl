'use client';

import { useEffect, useRef } from 'react';

export default function QuantumFieldBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles: Particle[] = [];
        // Dense field: lots of small particles
        const particleCount = width < 768 ? 400 : 1200;
        const mouseRadius = 150;
        const colorPalette = ['#a855f7', '#d8b4fe', '#818cf8', '#6366f1']; // Purple/Indigo mix

        let mouse = { x: -1000, y: -1000 };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            originX: number;
            originY: number;
            size: number;
            color: string;
            friction: number;
            ease: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = 0;
                this.vy = 0;
                this.originX = this.x;
                this.originY = this.y;
                this.size = Math.random() * 2 + 0.5; // Slightly larger for visibility
                this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
                this.friction = 0.95; // High friction for floaty feel
                this.ease = 0.05; // formatting
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }

            update() {
                // Return to origin logic
                this.originX += (Math.random() - 0.5) * 0.5; // Slowly drift origin
                this.originY += (Math.random() - 0.5) * 0.5;

                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Repulsion force
                const force = -mouseRadius / distance;
                let angle = Math.atan2(dy, dx);
                let fx = 0;
                let fy = 0;

                if (distance < mouseRadius) {
                    fx = Math.cos(angle) * force * 5; // Multiplier strength
                    fy = Math.sin(angle) * force * 5;
                }

                // Physics update
                this.vx += fx;
                this.vy += fy;

                // Drift back to "origin" elasticity
                // Simpler flow: Just retain current velocity with friction
                // But add constant tiny noise movement
                this.vx += (Math.random() - 0.5) * 0.2;
                this.vy += (Math.random() - 0.5) * 0.2;

                this.x += this.vx;
                this.y += this.vy;

                this.vx *= this.friction;
                this.vy *= this.friction;

                // Wrap around screen
                if (this.x > width) this.x = 0;
                if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0;
                if (this.y < 0) this.y = height;
            }
        }

        const init = () => {
            particles.length = 0; // Clear
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            // Trail effect: clear with opacity
            ctx.fillStyle = 'rgba(5, 5, 5, 0.2)'; // Fade out trails
            ctx.fillRect(0, 0, width, height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
            {/* Deep Background Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-purple-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full mix-blend-screen" />
        </div>
    );
}
