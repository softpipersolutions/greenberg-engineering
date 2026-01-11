'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SECTOR_GRADIENTS, SECTORS } from '@/lib/gradients';

const projects = [
    {
        id: 1,
        title: 'Metro Line Extension',
        category: 'Infrastructure',
        location: 'Mumbai, India',
        year: '2024',
        sector: 'infra',
        image: '/api/placeholder/600/800',
    },
    {
        id: 2,
        title: 'Solar Farm Network',
        category: 'ESG',
        location: 'Rajasthan, India',
        year: '2023',
        sector: 'esg',
        image: '/api/placeholder/600/800',
    },
    {
        id: 3,
        title: 'Smart City Hub',
        category: 'Systems',
        location: 'Singapore',
        year: '2024',
        sector: 'systems',
        image: '/api/placeholder/600/800',
    },
    {
        id: 4,
        title: 'Training Academy',
        category: 'Skills',
        location: 'Dubai, UAE',
        year: '2023',
        sector: 'skills',
        image: '/api/placeholder/600/800',
    },
    {
        id: 5,
        title: 'Offshore Platform',
        category: 'Safety',
        location: 'North Sea',
        year: '2024',
        sector: 'safety',
        image: '/api/placeholder/600/800',
    },
    {
        id: 6,
        title: 'Highway Network',
        category: 'Infrastructure',
        location: 'Kenya',
        year: '2024',
        sector: 'infra',
        image: '/api/placeholder/600/800',
    },
];

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

    return (
        <section
            ref={containerRef}
            id="projects"
            className="relative bg-void"
            style={{ height: '300vh' }}
        >
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 lg:px-24 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                        className="flex justify-between items-end"
                    >
                        <div>
                            <p className="font-body text-sm tracking-[0.3em] text-stark/40 uppercase mb-4">
                                Featured Work
                            </p>
                            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-stark leading-[1.1]">
                                Project
                                <br />
                                <span className="text-stark/40">Showcase</span>
                            </h2>
                        </div>
                        <motion.a
                            href="#"
                            className="hidden md:flex items-center gap-2 font-body text-sm text-stark/60 hover:text-stark transition-colors"
                            whileHover={{ x: 5 }}
                        >
                            View All Projects <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Horizontal scroll container */}
                <motion.div
                    ref={scrollContainerRef}
                    className="absolute top-1/2 -translate-y-1/2 left-0 flex gap-8 px-24"
                    style={{ x }}
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </motion.div>

                {/* Scroll progress indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full"
                        style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
                    />
                </div>

                {/* Navigation hint */}
                <motion.div
                    className="absolute bottom-12 right-12 font-body text-xs text-stark/30"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Scroll to explore →
                </motion.div>
            </div>
        </section>
    );
}

interface ProjectCardProps {
    project: typeof projects[0];
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    const gradient = SECTOR_GRADIENTS[project.sector as keyof typeof SECTOR_GRADIENTS];

    return (
        <motion.div
            className="relative flex-shrink-0 w-[350px] md:w-[400px] lg:w-[450px] h-[500px] md:h-[550px] group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
        >
            <motion.div
                className="relative w-full h-full border border-white/10 bg-void overflow-hidden"
                whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                    z: 50,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
                {/* Image placeholder with gradient */}
                <div
                    className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    style={{ background: gradient }}
                />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
                        backgroundSize: '30px 30px',
                    }}
                />

                {/* Gradient border on hover */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `linear-gradient(135deg, transparent, ${gradient.split(',')[1]?.trim()?.replace(')', '') || 'white'})`,
                        opacity: 0,
                    }}
                    whileHover={{ opacity: 0.2 }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                    {/* Top */}
                    <div className="flex justify-between items-start">
                        <span
                            className="px-3 py-1 text-xs font-body uppercase tracking-wider border"
                            style={{ borderColor: gradient.split(',')[1]?.trim()?.replace(')', '') || 'white' }}
                        >
                            {project.category}
                        </span>
                        <motion.div
                            className="w-10 h-10 flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                            whileHover={{ scale: 1.1, rotate: 45 }}
                        >
                            <ArrowUpRight className="w-4 h-4 text-stark" />
                        </motion.div>
                    </div>

                    {/* Bottom */}
                    <div>
                        {/* Project number */}
                        <span className="font-mono text-xs text-stark/30 block mb-2">
                            {String(project.id).padStart(2, '0')}
                        </span>

                        {/* Title */}
                        <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-stark mb-4 leading-tight">
                            {project.title}
                        </h3>

                        {/* Meta */}
                        <div className="flex gap-4 text-stark/50 font-body text-sm">
                            <span>{project.location}</span>
                            <span>•</span>
                            <span>{project.year}</span>
                        </div>

                        {/* View project link */}
                        <motion.div
                            className="mt-6 flex items-center gap-2 text-stark/60 font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{ x: -10 }}
                            whileHover={{ x: 0 }}
                        >
                            View Project <ArrowRight className="w-4 h-4" />
                        </motion.div>
                    </div>
                </div>

                {/* Corner accent */}
                <div
                    className="absolute top-0 right-0 w-16 h-16 border-r border-t opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ borderColor: gradient.split(',')[1]?.trim()?.replace(')', '') || 'white' }}
                />
            </motion.div>
        </motion.div>
    );
}
