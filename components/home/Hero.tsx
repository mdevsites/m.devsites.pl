'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-purple-light/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left flex flex-col items-center lg:items-start"
                    >
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.8] tracking-tighter !mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Tworzymy{' '}
                            <span className="gradient-text">nowoczesne</span>
                            <br />
                            strony internetowe
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-gray-light leading-normal !mb-24"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Profesjonalne rozwiązania webowe dla biznesu, które wyróżnią Cię na rynku
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 w-full justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Link href="/contact" className="btn-glass text-lg px-8 py-4">
                                Bezpłatna wycena
                            </Link>
                            <Link href="/portfolio" className="btn-secondary text-lg px-8 py-4">
                                Zobacz portfolio
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image with 3D effect */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <motion.div
                            className="relative w-full h-[500px] rounded-3xl overflow-hidden"
                            style={{
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(124, 58, 237, 0.3)',
                            }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 25px 70px rgba(0, 0, 0, 0.5), 0 0 50px rgba(236, 72, 153, 0.4)',
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src="/images/programmer-v2.png"
                                alt="Programista tworzący stronę internetową"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - Bottom of screen */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1, duration: 0.5 },
                    y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                }}
            >
                <ChevronDownIcon className="w-10 h-10 text-white/60" />
            </motion.div>
        </section>
    );
}
