"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

interface MobileProjectCarouselProps {
    onOpenProject: (project: typeof PORTFOLIO_PROJECTS[0]) => void;
}

export default function MobileProjectCarousel({ onOpenProject }: MobileProjectCarouselProps) {
    return (
        <div className="w-full min-h-[80vh] flex flex-col justify-center py-10 pb-24">

            {/* Header for Mobile context */}
            <div className="h-8 w-full" />
            <div className="px-6 mb-8">
                <p className="text-gray-400 text-sm uppercase tracking-wider font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Przesuń, aby odkryć więcej
                </p>
            </div>

            {/* Explicit Spacer */}
            <div className="h-8 w-full" />

            {/* Carousel Container */}
            <div className="w-full overflow-x-auto snap-x snap-mandatory flex items-stretch gap-6 px-0 pb-12 no-scrollbar">
                {/* Start Spacer */}
                <div className="w-6 shrink-0" />

                {PORTFOLIO_PROJECTS.map((project, index) => (
                    <div
                        key={project.id}
                        className="snap-center shrink-0 w-[90vw] sm:w-[600px] min-h-[60vh] relative rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] flex flex-col"
                    >
                        {/* Image Section - Natural Height */}
                        <div className="relative w-full">
                            <Image
                                src={project.imageSrc}
                                alt={project.title}
                                className="w-full h-auto object-cover block"
                                sizes="(max-width: 640px) 85vw, 600px"
                                priority={index === 0}
                                placeholder="blur"
                            />
                            {/* Gradient Overlay at bottom of image for seamless transition */}
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                        </div>

                        {/* Content Section - Below Image */}
                        <div className="pt-6 pb-8 flex-1 relative flex">

                            {/* Left Spacer */}
                            <div className="w-4 shrink-0" />

                            <div className="flex-1 flex flex-col gap-4">
                                {/* Header */}
                                <div>
                                    <h3 className="text-3xl font-bold text-white leading-tight">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-gray-400 text-base line-clamp-3 leading-relaxed">
                                    {project.shortDescription}
                                </p>

                                {/* Spacer between content and button */}
                                <div className="h-4" />

                                {/* Premium Large Button */}
                                <button
                                    onClick={() => onOpenProject(project)}
                                    className="mt-auto w-full h-24 rounded-xl border border-white/30 text-white font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:bg-white hover:text-black hover:border-transparent active:scale-95"
                                >
                                    <span>ZOBACZ PROJEKT</span>
                                    <Play className="w-4 h-4 fill-current" />
                                </button>
                            </div>

                            {/* Right Spacer */}
                            <div className="w-4 shrink-0" />
                        </div>
                    </div>
                ))}

                {/* Spacer for end of list padding */}
                <div className="w-2 shrink-0" />
            </div>
        </div>
    );
}
