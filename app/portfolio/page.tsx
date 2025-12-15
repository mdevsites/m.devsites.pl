"use client";

import { useState } from "react";
import ProjectCard from "@/components/portfolio/ProjectCard";
import ProjectModal from "@/components/portfolio/ProjectModal";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

export default function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<{
        title: string;
        link: string;
    } | null>(null);
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            {/* Spacer for Navbar */}
            <div className="h-24 w-full relative z-10" />

            <div className="relative z-10 pb-24 container-custom">
                <div className="text-center w-full flex flex-col items-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Moje&nbsp;
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                            Realizacje
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl text-center max-w-5xl px-4">
                        Wybrane projekty, które pokazują moje podejście do designu i technologii.
                        Tworzę rozwiązania, które łączą estetykę z funkcjonalnością.
                    </p>
                </div>

                {/* Rigid Spacer */}
                <div style={{ height: '100px' }} className="w-full shrink-0" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {PORTFOLIO_PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className="w-full"
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.shortDescription}
                                tags={project.tags}
                                imageSrc={project.imageSrc}
                                link={project.link}
                                onDetailsClick={() => setSelectedProject({
                                    title: project.title,
                                    link: project.link,
                                })}
                            />
                        </div>
                    ))}
                </div>

                {/* Rigid Spacer for Footer */}
                <div style={{ height: '100px' }} className="w-full shrink-0" />
            </div>

            {/* Project Modal */}
            <ProjectModal
                isOpen={selectedProject !== null}
                onClose={() => setSelectedProject(null)}
                demoUrl={selectedProject?.link || ""}
                projectTitle={selectedProject?.title || ""}
            />
        </div>
    );
}
