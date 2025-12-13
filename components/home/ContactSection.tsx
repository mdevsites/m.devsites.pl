'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
    return (
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0520] via-[#1a0b2e] to-[#0f0520]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]" />

            <div className="relative max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Gotowy na{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                            współpracę
                        </span>
                        ?
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Skontaktuj się ze mną, aby omówić szczegóły Twojego projektu.
                        Odpowiem najszybciej jak to możliwe.
                    </p>
                </motion.div>

                {/* Contact Options */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {/* Email */}
                    <motion.a
                        href="mailto:kontakt@m.dev"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <EnvelopeIcon className="w-7 h-7 text-purple-400" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">Email</h3>
                            <p className="text-white/60 text-sm">kontakt@m.dev</p>
                        </div>
                    </motion.a>

                    {/* Phone */}
                    <motion.a
                        href="tel:+48123456789"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <PhoneIcon className="w-7 h-7 text-purple-400" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">Telefon</h3>
                            <p className="text-white/60 text-sm">+48 123 456 789</p>
                        </div>
                    </motion.a>

                    {/* WhatsApp */}
                    <motion.a
                        href="https://wa.me/48123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <FaWhatsapp className="w-7 h-7 text-purple-400" />
                            </div>
                            <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                            <p className="text-white/60 text-sm">Szybki kontakt</p>
                        </div>
                    </motion.a>
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                    >
                        Formularz kontaktowy
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
