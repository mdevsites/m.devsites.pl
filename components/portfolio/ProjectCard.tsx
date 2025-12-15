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
                h-[500px] w-full ${className}
                border border-white/5
            `}
        >
            {/* Full Background Image */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Gradient Overlay - Only visible on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-80" />

            {/* Content Overlay - Only visible on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end items-center text-center h-full z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">

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

                <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                    {title}
                </h3>

                <div className="overflow-hidden w-full">
                    <p className="text-gray-200 text-sm leading-relaxed mb-6 line-clamp-3 opacity-90">
                        {description}
                    </p>
                    <button
                        onClick={onDetailsClick}
                        className="inline-flex items-center text-white font-medium hover:text-purple-300 transition-colors bg-transparent border-none cursor-pointer"
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
