'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { SECTOR_GRADIENTS } from '@/lib/gradients';

export default function SafetySection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    return (
        <section
            ref={containerRef}
            id="safety"
            className="relative min-h-screen py-24 md:py-32 bg-void overflow-hidden"
        >
            {/* Heartbeat line */}
            <HeartbeatLine scrollProgress={scrollYProgress} />

            {/* Red alert glow */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at center, rgba(212, 1, 20, 0.1) 0%, transparent 60%)`,
                    opacity: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]),
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Content */}
                    <div>
                        {/* Sector label */}
                        <motion.div
                            className="flex items-center gap-4 mb-8"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                className="w-12 h-12 flex items-center justify-center border"
                                style={{ borderColor: '#D40114' }}
                                animate={{
                                    boxShadow: [
                                        '0 0 0px rgba(212, 1, 20, 0)',
                                        '0 0 20px rgba(212, 1, 20, 0.4)',
                                        '0 0 0px rgba(212, 1, 20, 0)',
                                    ],
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <Shield className="w-6 h-6" style={{ color: '#D40114' }} />
                            </motion.div>
                            <span
                                className="font-body text-sm tracking-[0.3em] uppercase"
                                style={{ color: '#D40114' }}
                            >
                                Sector 05
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
                            Zero
                            <br />
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: SECTOR_GRADIENTS.safety }}
                            >
                                Compromise
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
                            Safety is not a priority — it's a value. Our comprehensive safety
                            management systems protect people, assets, and communities across
                            every project we undertake.
                        </motion.p>

                        {/* Safety checklist */}
                        <motion.div
                            className="space-y-3 mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {[
                                'ISO 45001 Certified',
                                'Zero Fatality Record',
                                '24/7 Emergency Response',
                                'Regular Safety Audits',
                                'Comprehensive Training Programs',
                            ].map((item, i) => (
                                <motion.div
                                    key={item}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                                        transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                                    >
                                        <CheckCircle2 className="w-5 h-5" style={{ color: '#D40114' }} />
                                    </motion.div>
                                    <span className="font-body text-stark/70">{item}</span>
                                </motion.div>
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
                                className="px-6 py-3 border border-[#D40114] font-heading text-sm uppercase tracking-widest"
                            >
                                Safety Policy <ArrowRight className="w-4 h-4" />
                            </MagneticButton>
                        </motion.div>
                    </div>

                    {/* Shield visualization */}
                    <div className="relative h-[500px] lg:h-[600px]">
                        <ShieldVisualization scrollProgress={scrollYProgress} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ShieldVisualization({ scrollProgress }: { scrollProgress: any }) {
    const shieldProgress = useTransform(scrollProgress, [0.1, 0.45], [0, 1]);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <svg
                viewBox="0 0 200 250"
                className="w-full h-full max-w-[350px]"
                fill="none"
            >
                {/* Shield outline */}
                <motion.path
                    d="M100 10 L180 40 L180 120 Q180 200 100 240 Q20 200 20 120 L20 40 Z"
                    stroke="#D40114"
                    strokeWidth="2"
                    fill="none"
                    style={{
                        pathLength: shieldProgress,
                    }}
                />

                {/* Inner shield glow */}
                <motion.path
                    d="M100 30 L160 55 L160 115 Q160 180 100 215 Q40 180 40 115 L40 55 Z"
                    fill="url(#shieldGlow)"
                    style={{
                        opacity: useTransform(scrollProgress, [0.2, 0.4], [0, 0.3]),
                    }}
                />

                {/* Checkmark in center */}
                <motion.path
                    d="M70 120 L90 140 L130 90"
                    stroke="#D40114"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    style={{
                        pathLength: useTransform(scrollProgress, [0.35, 0.5], [0, 1]),
                    }}
                />

                {/* Protective rays */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                    const radians = (angle * Math.PI) / 180;
                    const x1 = 100 + Math.cos(radians) * 100;
                    const y1 = 125 + Math.sin(radians) * 100;
                    const x2 = 100 + Math.cos(radians) * 130;
                    const y2 = 125 + Math.sin(radians) * 130;

                    return (
                        <motion.line
                            key={angle}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="#D40114"
                            strokeWidth="1"
                            style={{
                                opacity: useTransform(scrollProgress, [0.4 + i * 0.02, 0.5 + i * 0.02], [0, 0.3]),
                            }}
                        />
                    );
                })}

                {/* Gradient definition */}
                <defs>
                    <radialGradient id="shieldGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#D40114" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#A20505" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>

            {/* Protective aura */}
            <motion.div
                className="absolute w-80 h-80 rounded-full"
                style={{
                    background: `radial-gradient(circle, rgba(212, 1, 20, 0.1) 0%, transparent 70%)`,
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
}

function HeartbeatLine({ scrollProgress }: { scrollProgress: any }) {
    return (
        <div className="absolute bottom-1/3 left-0 right-0 h-20 overflow-hidden pointer-events-none opacity-30">
            <svg
                className="w-[200%] h-full"
                viewBox="0 0 1200 80"
                preserveAspectRatio="none"
            >
                <motion.path
                    d="M0 40 L200 40 L220 40 L240 10 L260 70 L280 40 L300 40 
             L500 40 L520 40 L540 10 L560 70 L580 40 L600 40
             L800 40 L820 40 L840 10 L860 70 L880 40 L900 40
             L1000 40 L1020 40 L1040 10 L1060 70 L1080 40 L1200 40"
                    stroke="#D40114"
                    strokeWidth="2"
                    fill="none"
                    initial={{ x: 0 }}
                    animate={{ x: -600 }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            </svg>
        </div>
    );
}
