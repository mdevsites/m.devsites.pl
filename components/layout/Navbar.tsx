'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NAV_LINKS } from '@/lib/constants';
import { Logo } from '../ui/Logo';
import { HamburgerIcon } from '../ui/HamburgerIcon';

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-medium' : 'bg-transparent'
                }`}
        >
            <div className="relative" style={{ margin: '0 40px' }}>
                <div className="flex items-center justify-between h-20">
                    {/* Logo - Left Section */}
                    <div className="flex-shrink-0 z-20">
                        <Logo />
                    </div>

                    {/* Desktop Navigation - Absolute Center */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-xl font-medium transition-colors duration-300 hover:text-purple-light px-4 py-2 ${pathname === link.href
                                    ? 'text-white'
                                    : 'text-gray-light hover:text-white'
                                    }`}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-button rounded-full" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA/Mobile Button - Right Section */}
                    <div className="flex-shrink-0 z-20 flex items-center gap-4">
                        <div className="hidden md:block">
                            <Link href="/contact" className="btn-glass">
                                Bezpłatna wycena
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden relative p-2 transition-all duration-300 hover:scale-110"
                            aria-label="Toggle menu"
                        >
                            <HamburgerIcon isOpen={isMobileMenuOpen} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden glass-nav border-t border-white/10 animate-slideInFromRight overflow-hidden"
                    style={{
                        background: 'linear-gradient(180deg, rgba(88, 28, 135, 0.15) 0%, rgba(126, 34, 206, 0.1) 100%)',
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    <div className="px-6 py-6 space-y-1">
                        {NAV_LINKS.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block py-7 px-5 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] text-center ${pathname === link.href
                                    ? 'text-white bg-gradient-to-r from-purple-500/30 to-pink-500/30 shadow-lg shadow-purple-500/20'
                                    : 'text-gray-light hover:text-white hover:bg-white/5'
                                    }`}
                                style={{
                                    animation: `fadeInUp 0.3s ease-out ${index * 0.1}s both`
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
