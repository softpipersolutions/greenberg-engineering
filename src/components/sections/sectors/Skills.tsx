'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { GraduationCap, ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import { GlitchText } from '@/components/ui/AnimatedText';

export default function SkillsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    return (
        <section
            ref={containerRef}
            id="skills"
            className="relative min-h-screen py-24 md:py-32 bg-void overflow-hidden"
        >
            {/* Ember particles */}
            <EmberParticles />

            {/* Ambient Gradient glow */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 70% 50%, rgba(236, 149, 78, 0.15) 0%, transparent 60%)',
                    opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]),
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                    {/* Holographic Pyramid Visualization */}
                    <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1 flex items-center justify-center">
                        <KnowledgeVisualization scrollProgress={scrollYProgress} />
                    </div>

                    {/* Content Column */}
                    <div className="order-1 lg:order-2">
                        {/* Glassmorphic Sector Label */}
                        <motion.div
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(236,149,78,0.15)]"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative flex items-center justify-center w-2 h-2">
                                <div className="absolute inset-0 rounded-full bg-[#EC954E] blur-[4px] animate-pulse" />
                                <div className="relative w-1.5 h-1.5 rounded-full bg-[#EC954E]" />
                            </div>
                            <span className="font-body text-xs font-semibold tracking-widest uppercase text-stark/80">
                                Sector 04 // Learning
                            </span>
                        </motion.div>

                        {/* Title with Glitch & Radiant Typography */}
                        <motion.h2
                            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-stark leading-[1] tracking-tight mb-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <GlitchText className="block text-white/90">Building</GlitchText>
                            <span className="relative inline-block text-transparent bg-clip-text mt-1 pb-2">
                                <span className="absolute inset-0 bg-gradient-to-r from-[#EC954E] to-[#FFB76B] blur-[24px] opacity-40 mix-blend-screen" />
                                <span
                                    className="relative inline-block"
                                    style={{
                                        backgroundImage: 'linear-gradient(to right, #EC954E, #FFB76B, #EC954E)',
                                        backgroundSize: '200% auto',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        animation: 'shimmer 4s linear infinite',
                                    }}
                                >
                                    Skills
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
                            Empowering the next generation of engineers. Our comprehensive
                            training programs develop technical excellence and leadership
                            capabilities across all disciplines.
                        </motion.p>

                        {/* Interactive Deep-Glass Stat Cards */}
                        <motion.div
                            className="grid grid-cols-3 gap-4 mb-12 max-w-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {[
                                { icon: BookOpen, value: '200+', label: 'Courses' },
                                { icon: Users, value: '5K+', label: 'Trained' },
                                { icon: Award, value: '98%', label: 'Success' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className="relative p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm group overflow-hidden cursor-default flex flex-col items-center text-center"
                                    whileHover={{ y: -4, borderColor: 'rgba(236, 149, 78, 0.4)', boxShadow: '0 10px 30px -10px rgba(236, 149, 78, 0.2)' }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                                    transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#EC954E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <stat.icon
                                        className="relative z-10 w-5 h-5 mx-auto mb-2 text-[#EC954E]/70 group-hover:text-[#FFB76B] transition-colors duration-300"
                                    />
                                    <div className="relative z-10 font-mono text-xl md:text-2xl font-bold text-[#EC954E] group-hover:text-[#FFB76B] transition-colors mb-1 tracking-tight">
                                        {stat.value}
                                    </div>
                                    <div className="relative z-10 font-body text-[10px] text-stark/50 group-hover:text-stark/90 transition-colors uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Glowing Neon Progress Tracks */}
                        <motion.div
                            className="space-y-4 mb-12 max-w-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            {[
                                { name: 'Technical Engineering', progress: 95 },
                                { name: 'Project Management', progress: 88 },
                                { name: 'Safety Protocols', progress: 100 },
                                { name: 'Digital Tools', progress: 82 },
                            ].map((skill, i) => (
                                <SkillBar key={skill.name} skill={skill} index={i} />
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
                            <Link href="/sectors/skills" className="relative group inline-block">
                                <motion.div
                                    className="absolute inset-0 z-0 rounded-lg blur-[12px] bg-gradient-to-r from-[#EC954E] to-[#FFB76B] opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl"
                                />
                                <div className="relative z-10 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-heading text-xs uppercase tracking-[0.2em] text-stark overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md group-hover:bg-white/10 group-hover:border-[#EC954E]/40 transition-all duration-300">
                                    <span className="relative z-10 flex items-center gap-2">
                                        VIEW PROGRAMS
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes shimmer {
                    from { background-position: 200% center; }
                    to { background-position: 0% center; }
                }
                @keyframes pulse-light {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes ember-float {
                    0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.8; }
                    50% { opacity: 1; scale: 1.2; }
                    100% { transform: translateY(-100vh) scale(0) rotate(180deg); opacity: 0; }
                }
            `}</style>
        </section>
    );
}

// Glowing Progress Track Component
function SkillBar({ skill, index }: { skill: { name: string; progress: number }; index: number }) {
    return (
        <div className="group">
            <div className="flex justify-between mb-1.5 items-end">
                <span className="font-mono text-xs text-stark/60 group-hover:text-stark/90 transition-colors uppercase tracking-wider">{skill.name}</span>
                <span className="font-mono text-xs font-bold text-[#EC954E] group-hover:text-[#FFB76B] transition-colors">{skill.progress}%</span>
            </div>
            {/* The Track */}
            <div className="h-1.5 bg-[#EC954E]/5 rounded-full overflow-hidden border border-white/5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]">
                {/* The Bar Fill */}
                <motion.div
                    className="h-full rounded-full relative overflow-hidden"
                    style={{ background: 'linear-gradient(90deg, #EC954E, #FFB76B)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                    transition={{ duration: 1.2, delay: 0.6 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {/* Inner light sweep */}
                    <div className="absolute inset-0 w-[50%] bg-gradient-to-r from-transparent via-white/50 to-transparent" style={{ animation: 'pulse-light 3s ease-in-out infinite' }} />
                </motion.div>
            </div>
        </div>
    );
}

// 3D Holographic Pyramid Visualization
function KnowledgeVisualization({ scrollProgress }: { scrollProgress: import('framer-motion').MotionValue<number> }) {
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

    // 3D Tilt Reactivity
    const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), { stiffness: 100, damping: 30 });

    // Stage the animations for assembling the structure (SCROLL LINKED)
    const y1 = useTransform(scrollProgress, [0, 0.3], [100, 0]);
    const o1 = useTransform(scrollProgress, [0, 0.2], [0, 1]);

    const y2 = useTransform(scrollProgress, [0.1, 0.4], [150, 0]);
    const o2 = useTransform(scrollProgress, [0.1, 0.3], [0, 1]);

    const y3 = useTransform(scrollProgress, [0.2, 0.5], [200, 0]);
    const o3 = useTransform(scrollProgress, [0.2, 0.4], [0, 1]);

    const lineOpacity = useTransform(scrollProgress, [0.4, 0.6], [0, 0.6]);

    // Internal Energy Flow particles
    const [energyNodes, setEnergyNodes] = useState<Array<{ id: number; delay: number; duration: number }>>([]);
    const [hudLabels, setHudLabels] = useState<Array<{ id: number; text: string; top: string; delay: number }>>([]);

    useEffect(() => {
        setEnergyNodes(
            Array.from({ length: 5 }, (_, i) => ({
                id: i,
                delay: i * 0.8,
                duration: 4,
            }))
        );
        
        setHudLabels([
            { id: 1, text: 'TIER 01: FOUNDATION', top: '75%', delay: 0 },
            { id: 2, text: 'TIER 02: CORE',       top: '50%', delay: 1 },
            { id: 3, text: 'TIER 03: MASTERY',    top: '25%', delay: 2 }
        ]);
    }, []);

    return (
        <motion.div 
            className="relative w-full h-full max-w-[500px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
        >
            {/* Ambient Background Glow mapping to scroll */}
            <motion.div 
                className="absolute inset-1/4 bg-[#EC954E]/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none"
                style={{ opacity: o3 }}
            />

            <motion.div
                className="w-full h-full relative"
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            >
                <svg
                    viewBox="0 0 400 500"
                    className="w-full h-full absolute inset-0 pointer-events-none"
                    fill="none"
                    style={{ overflow: 'visible' }}
                >
                    <defs>
                        {/* Deep Glass Holographic Gradients */}
                        <linearGradient id="isoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#EC954E" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#844212" stopOpacity="0.05" />
                        </linearGradient>
                        
                        <linearGradient id="solidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFB76B" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#EC954E" stopOpacity="0.1" />
                        </linearGradient>

                        {/* Drop shadow filters for layer depth */}
                        <filter id="glow-iso" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#EC954E" floodOpacity="0.4" />
                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Central Energy Axis Guide */}
                    <motion.line
                        x1="200" y1="400" x2="200" y2="100"
                        stroke="url(#solidGrad)" strokeWidth="2" strokeDasharray="6 6"
                        style={{ opacity: lineOpacity }}
                    />

                    {/* Ascending Energy Particles */}
                    <g style={{ opacity: 0.8 }}>
                        {energyNodes.map(node => (
                            <motion.circle
                                key={`energy-${node.id}`}
                                cx="200" cy="380" r="3"
                                fill="#FFB76B"
                                filter="url(#glow-iso)"
                                animate={{
                                    cy: [400, 140],
                                    opacity: [0, 1, 0],
                                    scale: [0.5, 1.5, 0.5]
                                }}
                                transition={{
                                    duration: node.duration,
                                    repeat: Infinity,
                                    delay: node.delay,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </g>

                    {/* Level 1: Foundation (The Base Array) */}
                    <motion.g style={{ y: y1, opacity: o1 }} filter="url(#glow-iso)">
                        {/* Shadow plate */}
                        <path d="M200 440 L290 395 L200 350 L110 395 Z" fill="#000000" opacity="0.3" filter="blur(10px)" />
                        
                        {/* Deep Glass Isometric Base Plate */}
                        <path
                            d="M200 420 L280 380 L200 340 L120 380 Z"
                            fill="url(#isoGrad)"
                            stroke="#EC954E"
                            strokeWidth="1.5"
                            strokeOpacity="0.8"
                        />
                        {/* Internal grid lines for tech texture */}
                        <path d="M200 420 L200 340" stroke="#EC954E" strokeWidth="0.5" opacity="0.3" />
                        <path d="M120 380 L280 380" stroke="#EC954E" strokeWidth="0.5" opacity="0.3" />
                        
                        <path
                            d="M200 400 L260 370"
                            stroke="#FFB76B"
                            strokeWidth="1"
                            opacity="0.6"
                        />
                        <path
                            d="M200 400 L140 370"
                            stroke="#FFB76B"
                            strokeWidth="1"
                            opacity="0.6"
                        />
                        <circle cx="200" cy="380" r="5" fill="#FFB76B" />
                    </motion.g>

                    {/* Connecting Trusses 1-2 */}
                    <motion.g style={{ opacity: lineOpacity }}>
                        <line x1="120" y1="380" x2="140" y2="320" stroke="#EC954E" strokeWidth="1" opacity="0.4" strokeDasharray="3 3"/>
                        <line x1="280" y1="380" x2="260" y2="320" stroke="#EC954E" strokeWidth="1" opacity="0.4" strokeDasharray="3 3"/>
                    </motion.g>

                    {/* Level 2: Structure (The Core) */}
                    <motion.g style={{ y: y2, opacity: o2 }} filter="url(#glow-iso)">
                        {/* Floating Glass Cube Plate */}
                        <path
                            d="M200 320 L260 290 L200 260 L140 290 Z"
                            fill="url(#solidGrad)"
                            stroke="#EC954E"
                            strokeWidth="2"
                            strokeOpacity="0.9"
                        />
                        {/* Underside thickness lines */}
                        <path d="M140 290 L140 320 L200 350 L260 320 L260 290" stroke="#EC954E" strokeWidth="1.5" fill="none" opacity="0.6" />
                        <path d="M200 350 L200 320" stroke="#FFB76B" strokeWidth="1.5" opacity="0.8" />

                        {/* Central Core Pulse */}
                        <motion.circle
                            cx="200" cy="305" r="10"
                            fill="none"
                            stroke="#FFB76B"
                            strokeWidth="0.5"
                            strokeDasharray="2 4"
                            animate={{ rotate: 360, scale: [1, 1.3, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                            style={{ transformOrigin: "200px 305px" }}
                        />
                        <circle cx="200" cy="305" r="4" fill="#FFB76B" />
                    </motion.g>

                    {/* Connecting Trusses 2-3 */}
                    <motion.g style={{ opacity: lineOpacity }}>
                        <line x1="140" y1="290" x2="160" y2="200" stroke="#EC954E" strokeWidth="1" opacity="0.4" strokeDasharray="3 3"/>
                        <line x1="260" y1="290" x2="240" y2="200" stroke="#EC954E" strokeWidth="1" opacity="0.4" strokeDasharray="3 3"/>
                    </motion.g>

                    {/* Level 3: Excellence (The Peak Solid Matrix) */}
                    <motion.g style={{ y: y3, opacity: o3 }} filter="url(#glow-iso)">
                        {/* Top Pyramid Crystal Volume */}
                        <path
                            d="M200 230 L240 200 L200 140 Z"
                            fill="url(#solidGrad)"
                            stroke="#FFB76B"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M200 230 L160 200 L200 140 Z"
                            fill="#EC954E"
                            fillOpacity="0.4"
                            stroke="#EC954E"
                            strokeWidth="1.5"
                        />
                        <path d="M160 200 L240 200" stroke="#EC954E" strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="2 2"/>

                        {/* Orbiting Quantum Rings */}
                        <motion.ellipse
                            cx="200" cy="180" rx="65" ry="25"
                            fill="none"
                            stroke="#FFB76B"
                            strokeWidth="1"
                            strokeDasharray="4 8"
                            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            style={{ transformOrigin: "200px 180px", opacity: 0.6 }}
                        />
                        <motion.ellipse
                            cx="200" cy="180" rx="45" ry="15"
                            fill="none"
                            stroke="#EC954E"
                            strokeWidth="1.5"
                            strokeDasharray="1 4"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            style={{ transformOrigin: "200px 180px", opacity: 0.8 }}
                        />

                        {/* Peak Spark Flare */}
                        <circle cx="200" cy="140" r="4" fill="#FFFFFF" />
                        <motion.circle 
                            cx="200" cy="140" r="15" 
                            fill="rgba(255, 183, 107, 0.4)" 
                            animate={{ scale: [1, 0], opacity: [1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </motion.g>
                </svg>

                {/* Orbiting HTML Telemetry Overlay Cards */}
                {hudLabels.map((lbl) => (
                    <motion.div
                        key={lbl.id}
                        className="absolute right-[5%] z-20"
                        style={{ top: lbl.top, translateY: o1 }} // Tie the HTML elements to the assembly scroll progress
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + lbl.delay * 0.3 }}
                    >
                        <motion.div 
                            className="flex items-center gap-2 backdrop-blur-md bg-[#000000]/60 px-3 py-1.5 rounded-sm border border-[#EC954E]/30 shadow-[0_0_15px_rgba(236,149,78,0.1)]"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: lbl.delay * 0.5, ease: "easeInOut" }}
                        >
                            <div className="w-1.5 h-1.5 bg-[#FFB76B] rounded-none opacity-80" />
                            <span className="font-mono text-[9px] text-[#FFB76B] leading-none tracking-widest font-bold">
                                {lbl.text}
                            </span>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Subsurface projection shadow/reflection */}
            <motion.div 
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-6 bg-[#EC954E]/10 blur-[25px] rounded-full pointer-events-none transform scale-y-50" 
                style={{ opacity: o1 }}
            />
        </motion.div>
    );
}

// Background environmental ember system
function EmberParticles() {
    const [embers, setEmbers] = useState<Array<{ id: number; x: number; delay: number; size: number; duration: number }>>([]);

    useEffect(() => {
        setEmbers(Array.from({ length: 15 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            delay: Math.random() * 5,
            size: 2 + Math.random() * 4,
            duration: 8 + Math.random() * 6,
        })));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {embers.map((ember) => (
                <motion.div
                    key={ember.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${ember.x}%`,
                        bottom: '-10%',
                        width: ember.size,
                        height: ember.size,
                        background: 'radial-gradient(circle, #FFB76B 0%, rgba(236,149,78,0.5) 50%, transparent 100%)',
                        boxShadow: '0 0 10px 2px rgba(236,149,78,0.3)'
                    }}
                    animate={{
                        y: [0, -1200],
                        x: [0, Math.sin(ember.id) * 150],
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                        duration: ember.duration,
                        repeat: Infinity,
                        delay: ember.delay,
                        ease: 'easeOut',
                    }}
                />
            ))}
        </div>
    );
}
