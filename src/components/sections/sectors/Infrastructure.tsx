'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function InfrastructureSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const gridOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, 1, 1, 0]);
    const buildingProgress = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);

    return (
        <section
            ref={containerRef}
            id="infrastructure"
            className="relative min-h-screen py-24 md:py-32 bg-void overflow-hidden"
        >
            {/* Blueprint grid background */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ opacity: gridOpacity }}
            >
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="blueprint-grid-hologram" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path
                                d="M 60 0 L 0 0 0 60"
                                fill="none"
                                stroke="rgba(0, 229, 255, 0.05)"
                                strokeWidth="1"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#blueprint-grid-hologram)" />
                </svg>

                {/* Animated line draws */}
                <motion.div
                    className="absolute top-[20%] left-0 w-full h-[1px]"
                    style={{
                        background: 'linear-gradient(90deg, transparent, #00E5FF, transparent)',
                        scaleX: useTransform(scrollYProgress, [0.1, 0.4], [0, 1]),
                        transformOrigin: 'left',
                    }}
                />
                <motion.div
                    className="absolute top-[80%] right-0 w-full h-[1px]"
                    style={{
                        background: 'linear-gradient(90deg, transparent, #2C5DA9, transparent)',
                        scaleX: useTransform(scrollYProgress, [0.2, 0.5], [0, 1]),
                        transformOrigin: 'right',
                    }}
                />
            </motion.div>

            {/* Ambient Gradient glow */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 30% 50%, rgba(44, 93, 169, 0.15) 0%, transparent 60%)',
                    opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]),
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Content Column */}
                    <div>
                        {/* Glassmorphic Sector Label */}
                        <motion.div
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(0,229,255,0.1)]"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative flex items-center justify-center w-2 h-2">
                                <div className="absolute inset-0 rounded-full bg-[#00E5FF] blur-[4px] animate-pulse" />
                                <div className="absolute inset-0 rounded-full bg-[#00E5FF] opacity-50 animate-ping" />
                                <div className="relative w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                            </div>
                            <span className="font-body text-xs font-semibold tracking-widest uppercase text-stark/80">
                                Sector 01 // Foundation
                            </span>
                        </motion.div>

                        {/* Title with Radiant Typography */}
                        <motion.h2
                            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-stark leading-[1] tracking-tight mb-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <span className="text-white/90">Infra</span>
                            <br />
                            <span className="relative inline-block text-transparent bg-clip-text mt-1 pb-2">
                                <span className="absolute inset-0 bg-gradient-to-r from-[#2C5DA9] to-[#00E5FF] blur-[24px] opacity-40 mix-blend-screen" />
                                <span
                                    className="relative inline-block"
                                    style={{
                                        backgroundImage: 'linear-gradient(to right, #2C5DA9, #00E5FF, #2C5DA9)',
                                        backgroundSize: '200% auto',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        animation: 'shimmer 4s linear infinite',
                                    }}
                                >
                                    structure
                                </span>
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="font-body text-lg md:text-xl text-stark/60 leading-relaxed mb-10 max-w-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Building the foundations of tomorrow. From hyper-loop networks to smart high-rises,
                            we engineer infrastructure powered by real-time analytics and next-gen material science.
                        </motion.p>

                        {/* Interactive Micro-Cards */}
                        <motion.div
                            className="grid grid-cols-2 gap-3 mb-10 w-full max-w-md"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {['Structural Design', 'Urban Planning', 'Bridge Engineering', 'Foundation Systems'].map((item, i) => (
                                <motion.div
                                    key={item}
                                    className="relative p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm group overflow-hidden cursor-default"
                                    whileHover={{ y: -4, borderColor: 'rgba(0, 229, 255, 0.3)', boxShadow: '0 10px 30px -10px rgba(0, 229, 255, 0.15)' }}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#2C5DA9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10 font-mono text-xs text-stark/70 group-hover:text-stark transition-colors font-medium tracking-tight">
                                        {item}
                                    </div>
                                    <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#00E5FF] opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-[0_0_5px_#00E5FF]" />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Premium Interactive CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="inline-block"
                        >
                            <Link href="/sectors/infrastructure" className="relative group inline-block">
                                <motion.div
                                    className="absolute inset-0 z-0 rounded-lg blur-[12px] bg-gradient-to-r from-[#2C5DA9] to-[#00E5FF] opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl"
                                />
                                <div className="relative z-10 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-heading text-xs uppercase tracking-[0.2em] text-stark overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md group-hover:bg-white/10 group-hover:border-[#00E5FF]/40 transition-all duration-300">
                                    <span className="relative z-10 flex items-center gap-2">
                                        EXPLORE PROJECTS
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Animated Holographic Visualization */}
                    <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
                        <BuildingVisualization progress={buildingProgress} />
                    </div>
                </div>
            </div>
            
            <style jsx global>{`
                @keyframes shimmer {
                    from { background-position: 200% center; }
                    to { background-position: 0% center; }
                }
            `}</style>
        </section>
    );
}

function BuildingVisualization({ progress }: { progress: import('framer-motion').MotionValue<number> }) {
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), { stiffness: 100, damping: 30 });
    
    // Laser height logic
    const [laserY, setLaserY] = useState(0);
    useEffect(() => {
        let startTime = performance.now();
        const animate = (time: number) => {
            const elapsed = time - startTime;
            // Oscillate between 10% and 90% over 4 seconds
            const progress = (Math.sin(elapsed / 800) + 1) / 2;
            setLaserY(10 + progress * 80);
            requestAnimationFrame(animate);
        };
        const id = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(id);
    }, []);

    const [telemetry, setTelemetry] = useState<Array<{ id: number; left: string; top: string; label: string; value: string; delay: number }>>([]);

    useEffect(() => {
        setTelemetry([
            { id: 1, left: '15%', top: '25%', label: 'TENSION', value: '450kN', delay: 0.5 },
            { id: 2, left: '60%', top: '75%', label: 'STRESS', value: 'NOMINAL', delay: 1.2 },
            { id: 3, left: '65%', top: '35%', label: 'DFLCT', value: '0.02mm', delay: 2.1 },
            { id: 4, left: '18%', top: '80%', label: 'TEMP', value: '22°C', delay: 1.8 }
        ]);
    }, []);

    return (
        <motion.div 
            className="group relative w-full h-full max-w-[500px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
        >
            <motion.div
                className="w-full h-full relative"
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            >
                {/* 3D Holographic Inner Container */}
                <div className="absolute inset-4 border border-[#2C5DA9]/30 rounded-[40px] bg-gradient-to-br from-[#2C5DA9]/5 to-transparent backdrop-blur-[2px] shadow-[inset_0_0_50px_rgba(44,93,169,0.1)] pointer-events-none overflow-hidden">
                    
                    {/* Laser scanning line */}
                    <div 
                        className="absolute left-0 w-full h-[1px] bg-[#00E5FF] shadow-[0_0_20px_" 
                        style={{ top: `${laserY}%`, boxShadow: '0 0 15px 2px #00E5FF, 0 0 30px #2C5DA9' }}
                    >
                         <div className="absolute inset-0 bg-[#00E5FF] blur-[2px]" />
                    </div>
                </div>

                <svg
                    viewBox="0 0 300 300"
                    className="w-full h-full absolute inset-0 pointer-events-none"
                    fill="none"
                >
                    <defs>
                        {/* Holographic Beam Gradient */}
                        <linearGradient id="holoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#80d0ff" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#2C5DA9" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.6" />
                        </linearGradient>
                        {/* Glow filters */}
                        <filter id="holoGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feFlood floodColor="#00E5FF" floodOpacity="0.5" result="glowColor" />
                            <feComposite in="glowColor" in2="blur" operator="in" result="glow" />
                            <feMerge>
                                <feMergeNode in="glow" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Circular Grid Alignment Guides */}
                    <motion.g style={{ opacity: useTransform(progress, [0.05, 0.25], [0, 0.4]) }}>
                        <motion.circle
                            cx="150" cy="150" r="100"
                            stroke="#2C5DA9"
                            strokeWidth="0.5"
                            fill="none"
                            strokeDasharray="2 4"
                            style={{ pathLength: useTransform(progress, [0.1, 0.35], [0, 1]) }}
                        />
                        <motion.circle
                            cx="150" cy="150" r="120"
                            stroke="#00E5FF"
                            strokeWidth="0.2"
                            fill="none"
                            style={{ pathLength: useTransform(progress, [0.15, 0.4], [0, 1]) }}
                        />
                    </motion.g>

                    {/* Central Holographic I-Beam Structure */}
                    <motion.g filter="url(#holoGlow)">
                        {/* Top flange */}
                        <motion.rect
                            x="110" y="80"
                            width="80" height="12"
                            fill="url(#holoGradient)"
                            stroke="#00E5FF"
                            strokeWidth="1.5"
                            style={{
                                scaleX: useTransform(progress, [0.15, 0.35], [0, 1]),
                                transformOrigin: '150px 86px',
                            }}
                        />
                        <motion.rect
                            x="110" y="80"
                            width="80" height="2"
                            fill="#FFFFFF"
                            opacity="0.8"
                            style={{
                                scaleX: useTransform(progress, [0.15, 0.35], [0, 1]),
                                transformOrigin: '150px 86px',
                            }}
                        />

                        {/* Web (vertical center) */}
                        <motion.rect
                            x="142" y="92"
                            width="16" height="116"
                            fill="url(#holoGradient)"
                            stroke="#00E5FF"
                            strokeWidth="1.5"
                            style={{
                                scaleY: useTransform(progress, [0.2, 0.45], [0, 1]),
                                transformOrigin: '150px 150px',
                            }}
                        />
                        {/* Edge highlight */}
                        <motion.rect
                            x="142" y="92"
                            width="2" height="116"
                            fill="#FFFFFF"
                            opacity="0.5"
                            style={{
                                scaleY: useTransform(progress, [0.2, 0.45], [0, 1]),
                                transformOrigin: '150px 150px',
                            }}
                        />

                        {/* Bottom flange */}
                        <motion.rect
                            x="110" y="208"
                            width="80" height="12"
                            fill="url(#holoGradient)"
                            stroke="#00E5FF"
                            strokeWidth="1.5"
                            style={{
                                scaleX: useTransform(progress, [0.3, 0.5], [0, 1]),
                                transformOrigin: '150px 214px',
                            }}
                        />
                        <motion.rect
                            x="110" y="218"
                            width="80" height="2"
                            fill="#FFFFFF"
                            opacity="0.8"
                            style={{
                                scaleX: useTransform(progress, [0.3, 0.5], [0, 1]),
                                transformOrigin: '150px 214px',
                            }}
                        />

                        {/* Joint Rivets - Rendered dynamically with glow */}
                        <motion.g style={{ opacity: useTransform(progress, [0.4, 0.55], [0, 1]) }}>
                            {[118, 134, 150, 166, 182].map((x) => (
                                <g key={`rivet-top-${x}`}>
                                    <circle cx={x} cy="86" r="2.5" fill="#00E5FF" />
                                    <circle cx={x} cy="86" r="1" fill="#FFFFFF" />
                                </g>
                            ))}
                            {[118, 134, 150, 166, 182].map((x) => (
                                <g key={`rivet-bot-${x}`}>
                                    <circle cx={x} cy="214" r="2.5" fill="#00E5FF" />
                                    <circle cx={x} cy="214" r="1" fill="#FFFFFF" />
                                </g>
                            ))}
                        </motion.g>
                    </motion.g>

                    {/* Laser Target Reticle (Follows mouse slightly) */}
                    <motion.g 
                        style={{ 
                            x: useTransform(mouseX, [0, 1], [-15, 15]), 
                            y: useTransform(mouseY, [0, 1], [-15, 15]),
                            opacity: useTransform(progress, [0.5, 0.7], [0, 0.4]) 
                        }}
                    >
                        <circle cx="150" cy="150" r="40" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="2 6" fill="none" />
                        <line x1="150" y1="100" x2="150" y2="135" stroke="#00E5FF" strokeWidth="0.5" />
                        <line x1="150" y1="200" x2="150" y2="165" stroke="#00E5FF" strokeWidth="0.5" />
                        <line x1="100" y1="150" x2="135" y2="150" stroke="#00E5FF" strokeWidth="0.5" />
                        <line x1="200" y1="150" x2="165" y2="150" stroke="#00E5FF" strokeWidth="0.5" />
                    </motion.g>
                </svg>

                {/* Floating Telemetry Data */}
                {telemetry.map((data, i) => (
                    <motion.div
                        key={data.id}
                        className="absolute pointer-events-none"
                        style={{ left: data.left, top: data.top }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                            opacity: [0, 1, 0.8, 0],
                            y: [0, -10],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: data.delay,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="flex items-center gap-1.5 backdrop-blur-sm bg-black/20 px-2 py-1 rounded border border-[#00E5FF]/20">
                            <div className="w-1 h-1 bg-[#00E5FF] rounded-full animate-blink" />
                            <div className="flex flex-col">
                                <span className="font-mono text-[8px] text-[#00E5FF] leading-none mb-0.5 opacity-80">{data.label}</span>
                                <span className="font-mono text-[10px] text-white leading-none tracking-wider">{data.value}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Subsurface reflection */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#00E5FF]/20 blur-[30px] rounded-full pointer-events-none transform scale-y-50" />
        </motion.div>
    );
}
