'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, HomeIcon, ViewColumnsIcon, CurrencyDollarIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { NAV_LINKS } from '@/lib/constants';
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

    const getIconForLink = (path: string) => {
        switch (path) {
            case '/': return HomeIcon;
            case '/portfolio': return ViewColumnsIcon;
            case '/pricing': return CurrencyDollarIcon;
            case '/contact': return EnvelopeIcon;
            default: return HomeIcon;
        }
    };

    if (hideNav) return null;

    return (
        <nav className={`fixed top-6 left-0 right-0 z-50 flex justify-end md:justify-center px-4 transition-all duration-300 ${isScrolled ? 'top-4' : 'top-6'}`}>
            <div
                style={{ paddingInline: 'var(--spacing-md)', paddingBlock: 'var(--spacing-xs)', gap: 'var(--spacing-md)' }}
                className={`flex items-center bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 ${isScrolled ? 'scale-95 bg-white/[0.05]' : 'scale-100'}`}
            >

                {/* Desktop Navigation - ICON DOCK STYLE */}
                <div style={{ gap: 'var(--spacing-sm)' }} className="hidden md:flex items-center">
                    {NAV_LINKS.map((link) => {
                        const Icon = getIconForLink(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{ paddingInline: 'var(--spacing-sm)', paddingBlock: 'var(--spacing-xs)', gap: 'var(--spacing-xs)' }}
                                className={`group relative flex flex-col items-center justify-center rounded-2xl min-w-[90px] transition-all duration-300 hover:-translate-y-1 ${pathname === link.href
                                    ? 'text-white bg-white/10 shadow-[0_0_60px_rgba(255,255,255,0.3)]'
                                    : 'text-white/70 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-bold uppercase tracking-wide">{link.name}</span>
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

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div
                    className="absolute top-20 left-4 right-4 bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-6 md:hidden animate-slideUp flex flex-col gap-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
                >
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center py-4 rounded-2xl text-white text-lg font-bold border border-transparent transition-all active:scale-95"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
