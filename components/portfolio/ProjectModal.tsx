"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    demoUrl: string;
    projectTitle: string;
}

export default function ProjectModal({
    isOpen,
    onClose,
    demoUrl,
    projectTitle,
}: ProjectModalProps) {
    // Handle ESC key press
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            // Lock body scroll
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            // Restore body scroll
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    // Handle backdrop click
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Add hideNav parameter to URL
    const getDemoUrlWithParams = (url: string) => {
        if (!url || url === "#") return url;
        const separator = url.includes("?") ? "&" : "?";
        return `${url}${separator}hideNav=true`;
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={handleBackdropClick}
                >
                    {/* Modal Container */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full max-w-[95vw] max-h-[95vh] bg-[#050505] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-black/50 md:bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md transition-colors group"
                            aria-label="Zamknij modal"
                        >
                            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                        </button>



                        {/* Iframe Container */}
                        <div className="w-full h-full pt-16">
                            {demoUrl && demoUrl !== "#" ? (
                                <iframe
                                    src={getDemoUrlWithParams(demoUrl)}
                                    className="w-full h-full border-0"
                                    title={`Demo: ${projectTitle}`}
                                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400">
                                    <div className="text-center">
                                        <p className="text-xl mb-2">Demo niedostępne</p>
                                        <p className="text-sm">Ten projekt nie ma jeszcze dostępnego demo.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
