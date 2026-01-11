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
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Brain outline */}
            <svg
                viewBox="0 0 200 200"
                className="w-full h-full max-w-[400px]"
                fill="none"
            >
                {/* Brain shape paths */}
                <motion.path
                    d="M100 20 Q60 30 50 60 Q40 90 50 120 Q60 150 80 170 Q100 185 100 180"
                    stroke="#EC954E"
                    strokeWidth="1"
                    fill="none"
                    style={{
                        pathLength: useTransform(scrollProgress, [0.1, 0.4], [0, 1]),
                        opacity: 0.5,
                    }}
                />
                <motion.path
                    d="M100 20 Q140 30 150 60 Q160 90 150 120 Q140 150 120 170 Q100 185 100 180"
                    stroke="#EC954E"
                    strokeWidth="1"
                    fill="none"
                    style={{
                        pathLength: useTransform(scrollProgress, [0.2, 0.5], [0, 1]),
                        opacity: 0.5,
                    }}
                />

                {/* Neural connections */}
                {[
                    { x1: 60, y1: 70, x2: 90, y2: 90 },
                    { x1: 140, y1: 70, x2: 110, y2: 90 },
                    { x1: 70, y1: 120, x2: 100, y2: 100 },
                    { x1: 130, y1: 120, x2: 100, y2: 100 },
                    { x1: 80, y1: 50, x2: 100, y2: 70 },
                    { x1: 120, y1: 50, x2: 100, y2: 70 },
                ].map((line, i) => (
                    <motion.line
                        key={i}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="#EC954E"
                        strokeWidth="0.5"
                        opacity={0.3}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                        transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                    />
                ))}

                {/* Knowledge nodes */}
                {[
                    { cx: 60, cy: 70, r: 4 },
                    { cx: 140, cy: 70, r: 4 },
                    { cx: 100, cy: 100, r: 6 },
                    { cx: 70, cy: 120, r: 3 },
                    { cx: 130, cy: 120, r: 3 },
                    { cx: 100, cy: 70, r: 4 },
                    { cx: 80, cy: 50, r: 3 },
                    { cx: 120, cy: 50, r: 3 },
                ].map((node, i) => (
                    <motion.circle
                        key={i}
                        cx={node.cx}
                        cy={node.cy}
                        r={node.r}
                        fill="#EC954E"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 0.8 }}
                        viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    />
                ))}

                {/* Pulse on center node */}
                <motion.circle
                    cx={100}
                    cy={100}
                    r={6}
                    fill="none"
                    stroke="#EC954E"
                    strokeWidth="1"
                    animate={{
                        r: [6, 20, 6],
                        opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                />
            </svg>

            {/* Floating knowledge tags */}
            {['Learn', 'Grow', 'Excel', 'Lead'].map((tag, i) => (
                <motion.div
                    key={tag}
                    className="absolute px-3 py-1 border border-white/10 font-body text-xs text-stark/40"
                    style={{
                        left: `${20 + (i % 2) * 60}%`,
                        top: `${20 + Math.floor(i / 2) * 60}%`,
                    }}
                    animate={{
                        y: [0, -10, 0],
                        opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                        duration: 3,
                        delay: i * 0.5,
                        repeat: Infinity,
                    }}
                >
                    {tag}
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
