'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { GraduationCap, ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { SECTOR_GRADIENTS } from '@/lib/gradients';

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

            {/* Gradient overlay */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at bottom, rgba(236, 149, 78, 0.15) 0%, transparent 60%)`,
                    opacity: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]),
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Brain/Knowledge visualization */}
                    <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
                        <KnowledgeVisualization scrollProgress={scrollYProgress} />
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        {/* Sector label */}
                        <motion.div
                            className="flex items-center gap-4 mb-8"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.6 }}
                        >
                            <div
                                className="w-12 h-12 flex items-center justify-center border"
                                style={{ borderColor: '#EC954E' }}
                            >
                                <GraduationCap className="w-6 h-6" style={{ color: '#EC954E' }} />
                            </div>
                            <span
                                className="font-body text-sm tracking-[0.3em] uppercase"
                                style={{ color: '#EC954E' }}
                            >
                                Sector 04
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-stark leading-[0.9] mb-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Building
                            <br />
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: SECTOR_GRADIENTS.skills }}
                            >
                                Skills
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="font-body text-lg md:text-xl text-stark/60 leading-relaxed mb-8 max-w-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Empowering the next generation of engineers. Our comprehensive
                            training programs develop technical excellence and leadership
                            capabilities across all disciplines.
                        </motion.p>

                        {/* Training stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-6 mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {[
                                { icon: BookOpen, value: '200+', label: 'Courses' },
                                { icon: Users, value: '5,000+', label: 'Trained' },
                                { icon: Award, value: '98%', label: 'Success Rate' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                >
                                    <stat.icon
                                        className="w-6 h-6 mx-auto mb-2 opacity-60"
                                        style={{ color: '#EC954E' }}
                                    />
                                    <div
                                        className="font-heading text-2xl md:text-3xl font-bold"
                                        style={{ color: '#EC954E' }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="font-body text-xs text-stark/40 mt-1">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Skill areas */}
                        <motion.div
                            className="space-y-3 mb-12"
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

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <MagneticButton
                                className="px-6 py-3 border border-[#EC954E] font-heading text-sm uppercase tracking-widest"
                            >
                                View Programs <ArrowRight className="w-4 h-4" />
                            </MagneticButton>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SkillBar({ skill, index }: { skill: { name: string; progress: number }; index: number }) {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="font-body text-sm text-stark/60">{skill.name}</span>
                <span className="font-mono text-sm" style={{ color: '#EC954E' }}>{skill.progress}%</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{ background: SECTOR_GRADIENTS.skills }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
            </div>
        </div>
    );
}

function KnowledgeVisualization({ scrollProgress }: { scrollProgress: any }) {
    // Stage the animations for assembling the structure
    // Base layer
    const y1 = useTransform(scrollProgress, [0, 0.3], [100, 0]);
    const o1 = useTransform(scrollProgress, [0, 0.2], [0, 1]);

    // Middle layer
    const y2 = useTransform(scrollProgress, [0.1, 0.4], [150, 0]);
    const o2 = useTransform(scrollProgress, [0.1, 0.3], [0, 1]);

    // Top layer
    const y3 = useTransform(scrollProgress, [0.2, 0.5], [200, 0]);
    const o3 = useTransform(scrollProgress, [0.2, 0.4], [0, 1]);

    // Connector lines opacity
    const lineOpacity = useTransform(scrollProgress, [0.4, 0.6], [0, 0.6]);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <svg
                viewBox="0 0 400 500"
                className="w-full h-full max-w-[500px]"
                fill="none"
                style={{ overflow: 'visible' }}
            >
                <defs>
                    <linearGradient id="isoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EC954E" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#EC954E" stopOpacity="0.05" />
                    </linearGradient>
                    <filter id="glow-iso">
                        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Central Axis Guide (Subtle) */}
                <motion.line
                    x1="200" y1="400" x2="200" y2="100"
                    stroke="#EC954E" strokeWidth="1" strokeDasharray="4 4"
                    style={{ opacity: 0.1 }}
                />

                {/* Level 1: Foundation (The Base) */}
                <motion.g style={{ translateY: y1, opacity: o1 }}>
                    {/* Isometric Base Plate */}
                    <path
                        d="M200 420 L280 380 L200 340 L120 380 Z"
                        fill="url(#isoGrad)"
                        stroke="#EC954E"
                        strokeWidth="1.5"
                    />
                    {/* Inner detail */}
                    <path
                        d="M200 400 L260 370"
                        stroke="#EC954E"
                        strokeWidth="0.5"
                        opacity="0.4"
                    />
                    <path
                        d="M200 400 L140 370"
                        stroke="#EC954E"
                        strokeWidth="0.5"
                        opacity="0.4"
                    />
                    <circle cx="200" cy="380" r="4" fill="#EC954E" />
                </motion.g>

                {/* Connecting Trusses 1-2 */}
                <motion.g style={{ opacity: lineOpacity }}>
                    <line x1="200" y1="340" x2="200" y2="300" stroke="#EC954E" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="120" y1="380" x2="140" y2="320" stroke="#EC954E" strokeWidth="0.5" opacity="0.3" />
                    <line x1="280" y1="380" x2="260" y2="320" stroke="#EC954E" strokeWidth="0.5" opacity="0.3" />
                </motion.g>

                {/* Level 2: Structure (The Core) */}
                <motion.g style={{ translateY: y2, opacity: o2 }}>
                    {/* Floating Cube Frame */}
                    <path
                        d="M200 320 L260 290 L200 260 L140 290 Z"
                        fill="url(#isoGrad)"
                        stroke="#EC954E"
                        strokeWidth="1.5"
                    />
                    <path d="M140 290 L140 320 L200 350 L260 320 L260 290" stroke="#EC954E" strokeWidth="1" fill="none" opacity="0.5" />
                    <path d="M200 350 L200 320" stroke="#EC954E" strokeWidth="1" opacity="0.5" />

                    {/* Central Core Pulse */}
                    <motion.circle
                        cx="200" cy="305" r="8"
                        fill="#EC954E"
                        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        filter="url(#glow-iso)"
                    />
                </motion.g>

                {/* Connecting Trusses 2-3 */}
                <motion.g style={{ opacity: lineOpacity }}>
                    <line x1="200" y1="260" x2="200" y2="220" stroke="#EC954E" strokeWidth="1" strokeDasharray="2 2" />
                </motion.g>

                {/* Level 3: Excellence (The Peak) */}
                <motion.g style={{ translateY: y3, opacity: o3 }}>
                    {/* Top Pyramid/Crystal */}
                    <path
                        d="M200 220 L240 200 L200 140 L160 200 Z"
                        fill="url(#isoGrad)"
                        stroke="#EC954E"
                        strokeWidth="1.5"
                    />
                    {/* Floating Rings around peak */}
                    <motion.ellipse
                        cx="200" cy="180" rx="60" ry="20"
                        fill="none"
                        stroke="#EC954E"
                        strokeWidth="0.5"
                        strokeDasharray="4 4"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ originX: "200px", originY: "180px", opacity: 0.4 }}
                    />
                    <motion.ellipse
                        cx="200" cy="180" rx="40" ry="12"
                        fill="none"
                        stroke="#EC954E"
                        strokeWidth="0.5"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        style={{ originX: "200px", originY: "180px", opacity: 0.6 }}
                    />

                    {/* Spark at top */}
                    <circle cx="200" cy="140" r="3" fill="#fff" filter="url(#glow-iso)" />
                </motion.g>
            </svg>

            {/* Orbiting text labels */}
            {[
                { text: 'Foundation', y: '75%', delay: 0 },
                { text: 'Structure', y: '50%', delay: 1 },
                { text: 'Mastery', y: '25%', delay: 2 }
            ].map((item, i) => (
                <motion.div
                    key={item.text}
                    className="absolute right-[10%] font-mono text-xs text-[#EC954E] border-b border-[#EC954E]/30 pb-1"
                    style={{ top: item.y }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + item.delay * 0.3 }}
                >
                    0{i + 1} // {item.text}
                </motion.div>
            ))}
        </div>
    );
}

function EmberParticles() {
    const [embers, setEmbers] = useState<Array<{ id: number; x: number; delay: number; size: number }>>([]);

    useEffect(() => {
        setEmbers(
            Array.from({ length: 20 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 3,
                size: 2 + Math.random() * 3,
            }))
        );
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {embers.map((ember) => (
                <motion.div
                    key={ember.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${ember.x}%`,
                        bottom: '-5%',
                        width: ember.size,
                        height: ember.size,
                        background: `radial-gradient(circle, #EC954E, #844212)`,
                    }}
                    animate={{
                        y: [0, -window.innerHeight * 1.2],
                        x: [0, Math.sin(ember.id) * 100],
                        opacity: [0.8, 0],
                        scale: [1, 0.5],
                    }}
                    transition={{
                        duration: 6 + Math.random() * 4,
                        repeat: Infinity,
                        delay: ember.delay,
                        ease: 'easeOut',
                    }}
                />
            ))}
        </div>
    );
}
