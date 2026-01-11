'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { SECTOR_GRADIENTS } from '@/lib/gradients';

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
                        <pattern id="blueprint-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path
                                d="M 60 0 L 0 0 0 60"
                                fill="none"
                                stroke="rgba(44, 93, 169, 0.15)"
                                strokeWidth="0.5"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
                </svg>

                {/* Animated line draws */}
                <motion.div
                    className="absolute top-1/4 left-0 w-full h-[1px]"
                    style={{
                        background: SECTOR_GRADIENTS.infra,
                        scaleX: useTransform(scrollYProgress, [0.1, 0.4], [0, 1]),
                        transformOrigin: 'left',
                    }}
                />
                <motion.div
                    className="absolute top-3/4 right-0 w-full h-[1px]"
                    style={{
                        background: SECTOR_GRADIENTS.infra,
                        scaleX: useTransform(scrollYProgress, [0.2, 0.5], [0, 1]),
                        transformOrigin: 'right',
                    }}
                />
            </motion.div>

            {/* Gradient overlay */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: SECTOR_GRADIENTS.infra,
                    opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 0.1, 0]),
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
                            <div
                                className="w-12 h-12 flex items-center justify-center border"
                                style={{ borderColor: '#2C5DA9' }}
                            >
                                <Building2 className="w-6 h-6" style={{ color: '#2C5DA9' }} />
                            </div>
                            <span
                                className="font-body text-sm tracking-[0.3em] uppercase"
                                style={{ color: '#2C5DA9' }}
                            >
                                Sector 01
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
                            Infra
                            <br />
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: SECTOR_GRADIENTS.infra }}
                            >
                                structure
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
                            Building the foundations of tomorrow. From highways to high-rises,
                            we engineer infrastructure that stands the test of time while pushing
                            the boundaries of modern construction.
                        </motion.p>

                        {/* Capabilities */}
                        <motion.div
                            className="grid grid-cols-2 gap-4 mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {['Structural Design', 'Urban Planning', 'Bridge Engineering', 'Foundation Systems'].map((item, i) => (
                                <motion.div
                                    key={item}
                                    className="flex items-center gap-2 text-stark/50 font-body text-sm"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#2C5DA9' }} />
                                    {item}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <MagneticButton
                                className="px-6 py-3 border font-heading text-sm uppercase tracking-widest"
                                style={{ borderColor: '#2C5DA9' } as any}
                            >
                                Explore Projects <ArrowRight className="w-4 h-4" />
                            </MagneticButton>
                        </motion.div>
                    </div>

                    {/* Animated Building Visualization */}
                    <div className="relative h-[500px] lg:h-[600px]">
                        <BuildingVisualization progress={buildingProgress} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function BuildingVisualization({ progress }: { progress: any }) {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <svg
                viewBox="0 0 300 300"
                className="w-full h-full max-w-[450px]"
                fill="none"
            >
                <defs>
                    {/* Main structural gradient */}
                    <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4a90d9" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#2C5DA9" stopOpacity="1" />
                        <stop offset="100%" stopColor="#1a3a6e" stopOpacity="0.8" />
                    </linearGradient>
                    {/* Glow filter */}
                    <filter id="structuralGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Background grid pattern */}
                <motion.g style={{ opacity: useTransform(progress, [0, 0.2], [0, 0.15]) }}>
                    {Array.from({ length: 15 }).map((_, i) => (
                        <line
                            key={`grid-h-${i}`}
                            x1="0" y1={i * 20}
                            x2="300" y2={i * 20}
                            stroke="#2C5DA9"
                            strokeWidth="0.5"
                        />
                    ))}
                    {Array.from({ length: 15 }).map((_, i) => (
                        <line
                            key={`grid-v-${i}`}
                            x1={i * 20} y1="0"
                            x2={i * 20} y2="300"
                            stroke="#2C5DA9"
                            strokeWidth="0.5"
                        />
                    ))}
                </motion.g>

                {/* Circular construction guides */}
                <motion.g style={{ opacity: useTransform(progress, [0.05, 0.25], [0, 0.3]) }}>
                    <motion.circle
                        cx="150" cy="150" r="120"
                        stroke="#2C5DA9"
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="4 4"
                        style={{ pathLength: useTransform(progress, [0.1, 0.35], [0, 1]) }}
                    />
                    <motion.circle
                        cx="150" cy="150" r="90"
                        stroke="#4a90d9"
                        strokeWidth="0.5"
                        fill="none"
                        style={{ pathLength: useTransform(progress, [0.15, 0.4], [0, 1]) }}
                    />
                    <motion.circle
                        cx="150" cy="150" r="60"
                        stroke="#2C5DA9"
                        strokeWidth="0.5"
                        fill="none"
                        strokeDasharray="2 2"
                        style={{ pathLength: useTransform(progress, [0.2, 0.45], [0, 1]) }}
                    />
                </motion.g>

                {/* Central I-Beam Structure */}
                <motion.g>
                    {/* Top flange */}
                    <motion.rect
                        x="100" y="80"
                        width="100" height="15"
                        fill="url(#beamGradient)"
                        stroke="#4a90d9"
                        strokeWidth="1"
                        style={{
                            scaleX: useTransform(progress, [0.15, 0.35], [0, 1]),
                            transformOrigin: '150px 87.5px',
                        }}
                    />
                    {/* Web (vertical center) */}
                    <motion.rect
                        x="140" y="95"
                        width="20" height="110"
                        fill="url(#beamGradient)"
                        stroke="#4a90d9"
                        strokeWidth="1"
                        style={{
                            scaleY: useTransform(progress, [0.2, 0.45], [0, 1]),
                            transformOrigin: '150px 150px',
                        }}
                    />
                    {/* Bottom flange */}
                    <motion.rect
                        x="100" y="205"
                        width="100" height="15"
                        fill="url(#beamGradient)"
                        stroke="#4a90d9"
                        strokeWidth="1"
                        style={{
                            scaleX: useTransform(progress, [0.3, 0.5], [0, 1]),
                            transformOrigin: '150px 212.5px',
                        }}
                    />

                    {/* Inner beam details - rivets */}
                    <motion.g style={{ opacity: useTransform(progress, [0.4, 0.55], [0, 0.6]) }}>
                        {[110, 130, 150, 170, 190].map((x) => (
                            <circle key={`rivet-t-${x}`} cx={x} cy="87.5" r="2" fill="#1a3a6e" />
                        ))}
                        {[110, 130, 150, 170, 190].map((x) => (
                            <circle key={`rivet-b-${x}`} cx={x} cy="212.5" r="2" fill="#1a3a6e" />
                        ))}
                    </motion.g>
                </motion.g>

                {/* Dimension lines - Width */}
                <motion.g style={{ opacity: useTransform(progress, [0.35, 0.5], [0, 0.8]) }}>
                    <line x1="100" y1="65" x2="200" y2="65" stroke="#4a90d9" strokeWidth="1" />
                    <line x1="100" y1="60" x2="100" y2="70" stroke="#4a90d9" strokeWidth="1" />
                    <line x1="200" y1="60" x2="200" y2="70" stroke="#4a90d9" strokeWidth="1" />
                    <text x="150" y="58" fill="#4a90d9" fontSize="8" fontFamily="monospace" textAnchor="middle">
                        W 250mm
                    </text>
                </motion.g>

                {/* Dimension lines - Height */}
                <motion.g style={{ opacity: useTransform(progress, [0.4, 0.55], [0, 0.8]) }}>
                    <line x1="215" y1="80" x2="215" y2="220" stroke="#4a90d9" strokeWidth="1" />
                    <line x1="210" y1="80" x2="220" y2="80" stroke="#4a90d9" strokeWidth="1" />
                    <line x1="210" y1="220" x2="220" y2="220" stroke="#4a90d9" strokeWidth="1" />
                    <text x="230" y="155" fill="#4a90d9" fontSize="8" fontFamily="monospace" textAnchor="middle" transform="rotate(90, 230, 155)">
                        H 350mm
                    </text>
                </motion.g>

                {/* Load arrows (downward force) */}
                <motion.g style={{ opacity: useTransform(progress, [0.45, 0.6], [0, 0.7]) }}>
                    {[120, 150, 180].map((x, i) => (
                        <motion.g key={`load-${i}`}>
                            <motion.line
                                x1={x} y1="40" x2={x} y2="70"
                                stroke="#EC954E"
                                strokeWidth="2"
                                animate={{ y1: [35, 40, 35] }}
                                transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                            />
                            <motion.polygon
                                points={`${x - 5},70 ${x},80 ${x + 5},70`}
                                fill="#EC954E"
                                animate={{ y: [0, 5, 0] }}
                                transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                            />
                        </motion.g>
                    ))}
                    <text x="150" y="32" fill="#EC954E" fontSize="7" fontFamily="monospace" textAnchor="middle">
                        P = 450 kN
                    </text>
                </motion.g>

                {/* Support reactions (upward arrows) */}
                <motion.g style={{ opacity: useTransform(progress, [0.5, 0.65], [0, 0.7]) }}>
                    {[110, 190].map((x, i) => (
                        <g key={`support-${i}`}>
                            <line x1={x} y1="260" x2={x} y2="230" stroke="#528940" strokeWidth="2" />
                            <polygon points={`${x - 5},230 ${x},220 ${x + 5},230`} fill="#528940" />
                            <polygon points={`${x - 10},265 ${x + 10},265 ${x},260`} fill="none" stroke="#528940" strokeWidth="1" />
                        </g>
                    ))}
                    <text x="150" y="280" fill="#528940" fontSize="7" fontFamily="monospace" textAnchor="middle">
                        R = 225 kN
                    </text>
                </motion.g>

                {/* Corner construction marks */}
                <motion.g style={{ opacity: useTransform(progress, [0.1, 0.3], [0, 0.5]) }}>
                    <motion.path d="M20 20 L20 40 M20 20 L40 20" stroke="#2C5DA9" strokeWidth="1" style={{ pathLength: useTransform(progress, [0.1, 0.3], [0, 1]) }} />
                    <motion.path d="M280 20 L280 40 M280 20 L260 20" stroke="#2C5DA9" strokeWidth="1" style={{ pathLength: useTransform(progress, [0.15, 0.35], [0, 1]) }} />
                    <motion.path d="M20 280 L20 260 M20 280 L40 280" stroke="#2C5DA9" strokeWidth="1" style={{ pathLength: useTransform(progress, [0.2, 0.4], [0, 1]) }} />
                    <motion.path d="M280 280 L280 260 M280 280 L260 280" stroke="#2C5DA9" strokeWidth="1" style={{ pathLength: useTransform(progress, [0.25, 0.45], [0, 1]) }} />
                </motion.g>

                {/* Technical label */}
                <motion.g style={{ opacity: useTransform(progress, [0.5, 0.65], [0, 0.9]) }}>
                    <rect x="30" y="10" width="80" height="18" fill="rgba(44, 93, 169, 0.2)" stroke="#2C5DA9" strokeWidth="0.5" />
                    <text x="70" y="22" fill="#4a90d9" fontSize="7" fontFamily="monospace" textAnchor="middle">
                        I-BEAM W250×73
                    </text>
                </motion.g>

                {/* Stress visualization lines */}
                <motion.g style={{ opacity: useTransform(progress, [0.6, 0.75], [0, 0.4]) }}>
                    {[100, 110, 120, 130, 140].map((y, i) => (
                        <motion.line
                            key={`stress-${i}`}
                            x1="145" y1={y} x2="155" y2={y}
                            stroke="#EC954E" strokeWidth="0.5"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                        />
                    ))}
                    {[160, 170, 180, 190, 200].map((y, i) => (
                        <motion.line
                            key={`stress-b-${i}`}
                            x1="145" y1={y} x2="155" y2={y}
                            stroke="#528940" strokeWidth="0.5"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                        />
                    ))}
                </motion.g>

                {/* Rotating construction compass */}
                <motion.g
                    style={{ opacity: useTransform(progress, [0.3, 0.5], [0, 0.4]), transformOrigin: '150px 150px' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                    <line x1="150" y1="35" x2="150" y2="45" stroke="#2C5DA9" strokeWidth="1" />
                    <line x1="150" y1="255" x2="150" y2="265" stroke="#2C5DA9" strokeWidth="1" />
                    <line x1="35" y1="150" x2="45" y2="150" stroke="#2C5DA9" strokeWidth="1" />
                    <line x1="255" y1="150" x2="265" y2="150" stroke="#2C5DA9" strokeWidth="1" />
                </motion.g>

                {/* Pulsing center point */}
                <motion.circle
                    cx="150" cy="150" r="3"
                    fill="#4a90d9"
                    filter="url(#structuralGlow)"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </svg>

            {/* Ambient glow */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(44, 93, 169, 0.2) 0%, transparent 70%)' }}
                animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.15, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
        </div>
    );
}

