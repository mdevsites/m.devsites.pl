"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    imageSrc: string;
    link: string;
    className?: string;
    onDetailsClick?: () => void;
}

export default function ProjectCard({
    title,
    description,
    tags,
    imageSrc,
    link,
    className = "",
    onDetailsClick,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`
                relative group rounded-[32px] overflow-hidden
                w-full ${className}
                flex flex-col md:block md:h-[500px]
                border border-white/5 bg-[#0A0A0A] md:bg-transparent
            `}
        >
            {/* Image Container */}
            <div className={`
                relative w-full shrink-0
                h-[250px] md:absolute md:inset-0 md:h-full
                transition-transform duration-700 md:group-hover:scale-105
            `}>
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Gradient Overlay - Desktop Only */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-80" />

            {/* Content Container */}
            <div className={`
                relative flex flex-col justify-end
                p-4 sm:p-6 md:p-8
                text-center
                h-auto md:h-full md:absolute md:inset-0
                z-10 bg-[#0A0A0A] md:bg-transparent
                border-t border-white/5 md:border-t-0
                
                md:opacity-0 md:group-hover:opacity-100 
                md:transition-all md:duration-500 
                md:translate-y-4 md:group-hover:translate-y-0
            `}>

                <div className="flex flex-wrap gap-2 mb-3 justify-center">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white border border-white/10 backdrop-blur-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:drop-shadow-lg leading-tight">
                    {title}
                </h3>

                <div className="overflow-hidden w-full flex flex-col items-center">
                    <p className="text-gray-400 md:text-gray-200 text-sm leading-relaxed mb-6 opacity-90 w-full max-w-[95%] mx-auto">
                        {description}
                    </p>
                    <button
                        onClick={onDetailsClick}
                        className="inline-flex items-center text-white font-medium hover:text-purple-300 transition-colors bg-transparent border-none cursor-pointer p-0"
                    >
                        Zobacz szczegóły
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
