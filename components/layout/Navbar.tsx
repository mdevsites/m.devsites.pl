'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, HomeIcon, ViewColumnsIcon, CurrencyDollarIcon, EnvelopeIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { HamburgerIcon } from '../ui/HamburgerIcon';

export default function Navbar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const hideNav = searchParams.get('hideNav') === 'true';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const getIconForLink = (path: string) => {
        switch (path) {
            case '/': return HomeIcon;
            case '/portfolio': return ViewColumnsIcon;
            case '/oferta': return BriefcaseIcon;
            case '/pricing': return CurrencyDollarIcon;
            case '/contact': return EnvelopeIcon;
            default: return HomeIcon;
        }
    };

    if (hideNav) return null;

    return (
        <nav className={`fixed top-6 left-0 right-0 z-[100] flex justify-end md:justify-center px-4 transition-all duration-300 ${isScrolled ? 'top-4' : 'top-6'}`}>
            <div
                style={{ paddingInline: 'var(--spacing-md)', paddingBlock: 'var(--spacing-xs)', gap: 'var(--spacing-md)' }}
                className={`relative z-[110] flex items-center bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 ${isScrolled ? 'scale-95 bg-white/[0.05]' : 'scale-100'}`}
            >

                {/* Desktop Navigation - ICON DOCK STYLE */}
                <div style={{ gap: 'var(--spacing-sm)' }} className="hidden md:flex items-center">
                    {NAV_LINKS.map((link) => {
                        const Icon = getIconForLink(link.href);
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{ paddingInline: 'var(--spacing-sm)', paddingBlock: 'var(--spacing-xs)', gap: 'var(--spacing-xs)' }}
                                className={`group relative flex flex-col items-center justify-center rounded-2xl min-w-[90px] transition-all duration-300 hover:-translate-y-1 ${isActive
                                    ? 'text-white'
                                    : 'text-white/70 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {/* Animated Background Indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabBackground"
                                        className="absolute inset-0 bg-white/10 rounded-2xl shadow-[0_0_60px_rgba(255,255,255,0.3)]"
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30
                                        }}
                                    />
                                )}
                                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform relative z-10" />
                                <span className="text-[10px] font-bold uppercase tracking-wide relative z-10">{link.name}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden flex flex-col items-center justify-center gap-1 p-3 rounded-2xl text-white border border-transparent transition-all active:scale-95"
                    aria-label="Toggle menu"
                >
                    <HamburgerIcon isOpen={isMobileMenuOpen} />
                </button>
            </div>

            {/* External Spacer to push pill from edge */}
            <div className="w-2 md:hidden" />

            {/* Mobile Menu Dropdown */}

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center md:hidden"
                    >
                        {/* Menu Items */}
                        <div className="flex flex-col items-center gap-8 z-50">
                            {NAV_LINKS.map((link, index) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{
                                            delay: 0.1 + index * 0.1,
                                            duration: 0.5,
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`relative text-5xl font-bold tracking-tight uppercase transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/40 hover:text-white'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Social Links Footer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute bottom-12 flex gap-8"
                        >
                            <div className="flex gap-6">
                                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                                    <Github className="w-8 h-8" />
                                </a>
                                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                                    <Linkedin className="w-8 h-8" />
                                </a>

                                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                                    <Facebook className="w-8 h-8" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
