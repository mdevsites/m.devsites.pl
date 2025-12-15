import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = PORTFOLIO_PROJECTS.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans pb-24">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/5 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            {/* Navbar Spacer */}
            <div className="h-24 w-full relative z-10" />

            <div className="container-custom relative z-10 max-w-5xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/portfolio"
                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
                >
                    <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Powrót do portfolio
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                        {project.shortDescription}
                    </p>
                </div>

                {/* Main Image */}
                <div className="relative aspect-video w-full rounded-[32px] overflow-hidden border border-white/10 mb-16 shadow-2xl">
                    <Image
                        src={project.imageSrc}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40" />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
                    {/* Main Content (Left) */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">O projekcie</h2>
                            <p className="text-gray-400 leading-relaxed">
                                {project.fullDescription}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">Wyzwanie</h2>
                            <p className="text-gray-400 leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/5">
                                {project.challenge}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">Rozwiązanie</h2>
                            <p className="text-gray-400 leading-relaxed">
                                {project.solution}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">Rezultaty</h2>
                            <ul className="space-y-4">
                                {project.results?.map((result, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mr-4 mt-0.5">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-300">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Sidebar (Right) */}
                    <div className="space-y-8">
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5 backdrop-blur-sm sticky top-32">
                            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-4">Szczegóły</h3>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Klient</p>
                                    <p className="font-medium">{project.client}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Czas realizacji</p>
                                    <p className="font-medium">{project.timeline}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Rola</p>
                                    <p className="font-medium">{project.role}</p>
                                </div>

                                <div className="pt-4">
                                    <a href={project.link} className="block w-full text-center py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
                                        Odwiedź stronę
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Generate static params for static export
export async function generateStaticParams() {
    return PORTFOLIO_PROJECTS.map((project) => ({
        id: project.id,
    }))
}
