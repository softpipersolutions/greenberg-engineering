'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Use strict pure brand hexes for the gradients
const SECTOR_COLORS = {
    infrastructure: '#2C5DA9',
    esg: '#528940',
    systems: '#8D68AA',
    skills: '#EC954E',
    safety: '#D40114',
} as const;

const projects = [
    {
        id: 'infra-mumbai',
        title: 'Metro Line Extension',
        category: 'Infrastructure',
        location: 'Mumbai, India',
        year: '2024',
        sector: 'infrastructure',
    },
    {
        id: 'esg-rajasthan',
        title: 'Solar Farm Network',
        category: 'ESG',
        location: 'Rajasthan, India',
        year: '2023',
        sector: 'esg',
    },
    {
        id: 'sys-singapore',
        title: 'Smart City Hub',
        category: 'Systems',
        location: 'Singapore',
        year: '2024',
        sector: 'systems',
    },
    {
        id: 'skills-dubai',
        title: 'Training Academy',
        category: 'Skills',
        location: 'Dubai, UAE',
        year: '2023',
        sector: 'skills',
    },
    {
        id: 'saf-north',
        title: 'Offshore Platform',
        category: 'Safety',
        location: 'North Sea',
        year: '2024',
        sector: 'safety',
    },
    {
        id: 'infra-kenya',
        title: 'Highway Network',
        category: 'Infrastructure',
        location: 'Kenya',
        year: '2024',
        sector: 'infrastructure',
    },
];

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
    const x = useTransform(smoothScroll, [0, 1], ['0%', '-65%']); // Adjusted scroll speed for tight cards

    // Track active project to pulse the ambient background
    useEffect(() => {
        const unsubscribe = smoothScroll.on('change', (v) => {
            const index = Math.min(
                Math.floor(v * projects.length),
                projects.length - 1
            );
            setActiveIndex(index);
        });
        return () => unsubscribe();
    }, [smoothScroll]);

    const activeColor = SECTOR_COLORS[projects[activeIndex].sector as keyof typeof SECTOR_COLORS];

    return (
        <section
            ref={containerRef}
            id="projects"
            className="relative bg-void"
            style={{ height: '400vh' }}
        >
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                
                {/* 1. Global Ambient Core - Pulses with Active Project Color */}
                <motion.div 
                    className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen transition-colors duration-1000"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${activeColor} 0%, transparent 50%)`,
                        filter: 'blur(100px)',
                    }}
                />

                {/* Header */}
                <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 lg:px-24 py-12 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
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
                        <Link
                            href="/sectors"
                            className="hidden md:flex items-center gap-2 font-body text-sm text-stark/60 hover:text-stark transition-colors pointer-events-auto group"
                        >
                            View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* 2. The Horizontal Scroll Gallery */}
                <motion.div
                    ref={scrollContainerRef}
                    className="relative z-10 flex gap-12 px-24 py-20"
                    style={{ x }}
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                    {/* Padding block for the end */}
                    <div className="flex-shrink-0 w-24" />
                </motion.div>

                {/* 3. Telemetry Track UX Bottom Bar */}
                <div className="absolute bottom-12 left-0 w-full px-24 z-20 pointer-events-none flex items-center justify-between">
                    <div className="flex-1 max-w-[400px]">
                        <div className="flex justify-between mb-4">
                            <span className="font-mono text-[10px] text-stark/30 uppercase tracking-[0.2em]">Telemetry Track</span>
                            <span className="font-mono text-[10px] text-stark/50">0{activeIndex + 1} / 0{projects.length}</span>
                        </div>
                        {/* The Track */}
                        <div className="relative h-1 bg-white/5 rounded-full overflow-hidden">
                            {/* The filling needle */}
                            <motion.div
                                className="absolute top-0 left-0 bottom-0 bg-stark origin-left transition-colors duration-500"
                                style={{ 
                                    scaleX: smoothScroll,
                                    backgroundColor: activeColor
                                }}
                            />
                            {/* Tick markers */}
                            <div className="absolute inset-0 flex justify-between px-1">
                                {projects.map((_, i) => (
                                    <div key={i} className="w-[1px] h-full bg-void/50" />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-end">
                        <span className="font-mono text-[10px] text-stark/30 tracking-widest mb-1">AXIS_X_LOCK</span>
                        <motion.div
                            className="font-body text-xs text-stark/50"
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Scroll to explore →
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// -----------------------------------------------------------------------------
// PROJECT CARD: 3D HOLOGRAPHIC GLASS PHYSICS
// -----------------------------------------------------------------------------
function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const color = SECTOR_COLORS[project.sector as keyof typeof SECTOR_COLORS];
    
    // Physics Tracking
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    // Damping springs for the tilt
    const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
    const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        // Calculate normalized position (0 to 1)
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Animate back to resting center position
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    return (
        <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            style={{ perspective: 1200 }} // Establishes 3D camera drop
        >
            <Link href={`/sectors/${project.sector}`}>
                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    className="relative w-[340px] md:w-[400px] h-[500px] md:h-[580px] rounded-2xl cursor-pointer group"
                    style={{
                        rotateX: isHovered ? rotateX : 0,
                        rotateY: isHovered ? rotateY : 0,
                        transformStyle: 'preserve-3d',
                        zIndex: isHovered ? 50 : 10, // Bring hovered card to top
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {/* Layer 1: Procedural Architecture Core (Back Wall) */}
                    <div 
                        className="absolute inset-0 rounded-2xl overflow-hidden bg-[#050505] border border-white/5"
                        style={{ transform: 'translateZ(-20px)' }}
                    >
                        <ProceduralArt sector={project.sector} color={color} isHovered={isHovered} />
                    </div>

                    {/* Layer 2: Deep Frosted Glass Shell (Middle Plane) */}
                    <div 
                        className="absolute inset-0 rounded-2xl overflow-hidden bg-void/40 backdrop-blur-xl border border-white/10 group-hover:bg-void/10 transition-colors duration-500"
                        style={{
                            boxShadow: isHovered ? `inset 0 0 40px ${color}20` : 'inset 0 0 0px transparent'
                        }}
                    >
                        {/* Hover Inner Scanning Line */}
                        <div className={`absolute top-0 left-0 w-full h-px grid-scanner transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
                             style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}/>
                        
                        {/* Base aesthetic grid overlaid on glass */}
                        <div className="absolute inset-0 opacity-[0.03]" 
                             style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                    </div>

                    {/* Layer 3: Cybernetic UI Overlays (Front Plane +20px) */}
                    <div className="absolute inset-0 pointer-events-none" style={{ transform: 'translateZ(20px)' }}>
                        {/* 4 Bracket Corners */}
                        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-stark/30" />
                        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-stark/30" />
                        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-stark/30" />
                        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-stark/30" />
                        
                        {/* Top ID Badge */}
                        <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                            <span className="font-mono text-[10px] text-stark/40 uppercase tracking-[0.2em]">/{project.year}</span>
                            <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-stark/5 text-stark/70 border border-white/10"
                                  style={{ color: isHovered ? color : undefined, borderColor: isHovered ? `${color}40` : undefined }}>
                                {project.category}
                            </span>
                        </div>
                    </div>

                    {/* Layer 4: Deep Data Floating Content (Maximum Z-Axis +60px) */}
                    <div 
                        className="absolute bottom-0 left-0 w-full p-8 pointer-events-none flex flex-col justify-end"
                        style={{ transform: 'translateZ(60px)' }} // Physically hovers off the glass
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
                            <span className="font-mono text-xs text-stark/50 uppercase tracking-widest">{project.location}</span>
                        </div>
                        
                        <h3 className="font-heading text-3xl font-bold text-stark leading-tight mb-6">
                            {project.title.split(' ').map((word, i) => (
                                <span key={i} className="block">{word}</span>
                            ))}
                        </h3>

                        <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                            <span className="font-mono text-xs text-stark/30 uppercase tracking-[0.2em] group-hover:text-stark/80 transition-colors">View Hologram</span>
                            <ArrowRight className="w-4 h-4 text-stark/30 ml-auto group-hover:text-stark group-hover:translate-x-2 transition-all" />
                        </div>
                    </div>

                </motion.div>
            </Link>
        </motion.div>
    );
}

// -----------------------------------------------------------------------------
// PROCEDURAL ARCHITECTURE SVG GENERATOR (No Image Fetches Required)
// -----------------------------------------------------------------------------
function ProceduralArt({ sector, color, isHovered }: { sector: string, color: string, isHovered: boolean }) {
    
    // Renders custom geometric patterns based on the sector theme to act as high-tech backgrounds
    // This removes the need for laggy external placeholder APIs completely.

    switch (sector) {
        case 'infrastructure':
            // Blueprint Wireframe Grid
            return (
                <div className="absolute inset-0 bg-[#0A0F1D]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="infra-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.2" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#infra-grid)" />
                        {/* Perspective Lines */}
                        <path d="M 0 500 L 200 0 L 400 500" fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.4" className={`transition-all duration-1000 ${isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-50'}`} style={{ transformOrigin: 'bottom' }}/>
                    </svg>
                </div>
            );
        case 'esg':
            // Biological Honeycomb / Hexagons
            return (
                <div className="absolute inset-0 bg-[#08140B]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="esg-hex" width="50" height="86.6" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
                                <path d="M 25 0 L 50 14.4 L 50 43.3 L 25 57.7 L 0 43.3 L 0 14.4 Z" fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.3" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#esg-hex)" className={`transition-all duration-[2s] ${isHovered ? 'opacity-80' : 'opacity-40'}`} />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08140B] to-transparent" />
                </div>
            );
        case 'systems':
            // Data Matrix Nodes
            return (
                <div className="absolute inset-0 bg-[#120B1A]">
                    <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, ${color}20 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-[3s] ${isHovered ? 'scale-125' : 'scale-100'}`}>
                        <circle cx="200" cy="250" r="150" fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 8" />
                        <circle cx="200" cy="250" r="100" fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.4" strokeDasharray="10 2" />
                        <circle cx="200" cy="250" r="50" fill="none" stroke={color} strokeWidth="2" strokeOpacity="0.5" />
                    </svg>
                </div>
            );
        case 'skills':
            // Neural Networks / Flow Waves
            return (
                <div className="absolute inset-0 bg-[#1A0D05]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M -50 400 Q 100 200 200 350 T 450 100" fill="none" stroke={color} strokeWidth="2" strokeOpacity={isHovered ? '0.6' : '0.3'} className="transition-opacity duration-1000" />
                        <path d="M -50 450 Q 150 250 250 400 T 450 150" fill="none" stroke={color} strokeWidth="1" strokeOpacity={isHovered ? '0.4' : '0.2'} className="transition-opacity duration-1000" />
                        <path d="M -50 500 Q 200 300 300 450 T 450 200" fill="none" stroke={color} strokeWidth="0.5" strokeOpacity="0.1" />
                    </svg>
                </div>
            );
        case 'safety':
            // Radar sweeping rings
            return (
                <div className="absolute inset-0 bg-[#1D0505] overflow-hidden">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className={`transition-all duration-1000 origin-bottom ${isHovered ? 'scale-110' : 'scale-100'}`}>
                        <circle cx="200" cy="500" r="300" fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.1" />
                        <circle cx="200" cy="500" r="200" fill="none" stroke={color} strokeWidth="1" strokeOpacity="0.3" />
                        <circle cx="200" cy="500" r="100" fill="none" stroke={color} strokeWidth="2" strokeOpacity="0.5" />
                        {/* Radar arm */}
                        <line x1="200" y1="500" x2="0" y2="200" stroke={color} strokeWidth="1" strokeOpacity="0.6" className={`${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity delay-200`} />
                    </svg>
                </div>
            );
        default:
            return <div className="absolute inset-0" style={{ background: color, opacity: 0.1 }} />;
    }
}
