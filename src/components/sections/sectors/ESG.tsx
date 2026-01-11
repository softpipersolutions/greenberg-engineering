'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Leaf, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { SECTOR_GRADIENTS } from '@/lib/gradients';

export default function ESGSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const treeGrowth = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);

    return (
        <section
            ref={containerRef}
            id="esg"
            className="relative min-h-screen py-24 md:py-32 bg-void overflow-hidden"
        >
            {/* Floating leaves particles */}
            <LeafParticles />

            {/* Gradient overlay */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: SECTOR_GRADIENTS.esg,
                    opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 0.08, 0]),
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Tree Visualization */}
                    <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
                        <TreeVisualization progress={treeGrowth} />
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
                                style={{ borderColor: '#528940' }}
                            >
                                <Leaf className="w-6 h-6" style={{ color: '#528940' }} />
                            </div>
                            <span
                                className="font-body text-sm tracking-[0.3em] uppercase"
                                style={{ color: '#528940' }}
                            >
                                Sector 02
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
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: SECTOR_GRADIENTS.esg }}
                            >
                                ESG
                            </span>
                            <br />
                            Excellence
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="font-body text-lg md:text-xl text-stark/60 leading-relaxed mb-8 max-w-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Sustainable solutions for a greener future. We integrate environmental,
                            social, and governance principles into every project, ensuring long-term
                            value for communities and our planet.
                        </motion.p>

                        {/* Sustainability metrics */}
                        <motion.div
                            className="grid grid-cols-3 gap-4 mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {[
                                { value: '40%', label: 'Carbon Reduced' },
                                { value: '100+', label: 'Green Projects' },
                                { value: '95%', label: 'Waste Recycled' },
                            ].map((metric, i) => (
                                <div key={metric.label} className="text-center p-4 border border-white/10">
                                    <div
                                        className="font-heading text-2xl md:text-3xl font-bold mb-1"
                                        style={{ color: '#528940' }}
                                    >
                                        {metric.value}
                                    </div>
                                    <div className="font-body text-xs text-stark/40">{metric.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Capabilities */}
                        <motion.div
                            className="flex flex-wrap gap-2 mb-12"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {['Carbon Neutrality', 'Renewable Energy', 'Water Management', 'Biodiversity'].map((item, i) => (
                                <motion.span
                                    key={item}
                                    className="px-4 py-2 border border-white/20 font-body text-sm text-stark/60"
                                    whileHover={{
                                        borderColor: '#528940',
                                        color: '#528940',
                                        scale: 1.05,
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {item}
                                </motion.span>
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
                                className="px-6 py-3 border border-[#528940] font-heading text-sm uppercase tracking-widest"
                            >
                                Our Initiatives <ArrowRight className="w-4 h-4" />
                            </MagneticButton>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TreeVisualization({ progress }: { progress: any }) {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <svg
                viewBox="0 0 300 300"
                className="w-full h-full max-w-[450px]"
                fill="none"
            >
                <defs>
                    {/* E - Environmental Green */}
                    <linearGradient id="envGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6BBF59" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#33644A" stopOpacity="0.7" />
                    </linearGradient>
                    {/* S - Social Blue */}
                    <linearGradient id="socialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4a90d9" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#2C5DA9" stopOpacity="0.7" />
                    </linearGradient>
                    {/* G - Governance Purple */}
                    <linearGradient id="govGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8E7CC3" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#5B4A8C" stopOpacity="0.7" />
                    </linearGradient>
                    {/* Glow filter */}
                    <filter id="esgGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Background grid pattern */}
                <motion.g style={{ opacity: useTransform(progress, [0, 0.2], [0, 0.1]) }}>
                    {Array.from({ length: 15 }).map((_, i) => (
                        <line key={`grid-h-${i}`} x1="0" y1={i * 20} x2="300" y2={i * 20} stroke="#528940" strokeWidth="0.3" />
                    ))}
                    {Array.from({ length: 15 }).map((_, i) => (
                        <line key={`grid-v-${i}`} x1={i * 20} y1="0" x2={i * 20} y2="300" stroke="#528940" strokeWidth="0.3" />
                    ))}
                </motion.g>

                {/* Outer rotating ring */}
                <motion.g
                    style={{ opacity: useTransform(progress, [0.05, 0.2], [0, 0.3]), transformOrigin: '150px 150px' }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                    <circle cx="150" cy="150" r="130" stroke="#528940" strokeWidth="0.5" fill="none" strokeDasharray="3 5" />
                </motion.g>

                {/* Three interconnected rings - E, S, G */}
                {/* Environmental Ring (Top-left, Green) */}
                <motion.g>
                    <motion.circle
                        cx="115" cy="110" r="55"
                        stroke="url(#envGradient)"
                        strokeWidth="4"
                        fill="none"
                        style={{ pathLength: useTransform(progress, [0.1, 0.35], [0, 1]) }}
                    />
                    <motion.text
                        x="115" y="115"
                        fill="#6BBF59"
                        fontSize="24"
                        fontWeight="bold"
                        fontFamily="sans-serif"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{ opacity: useTransform(progress, [0.3, 0.45], [0, 1]) }}
                    >
                        E
                    </motion.text>
                    {/* Label */}
                    <motion.text
                        x="60" y="50"
                        fill="#528940"
                        fontSize="7"
                        fontFamily="monospace"
                        style={{ opacity: useTransform(progress, [0.4, 0.55], [0, 0.8]) }}
                    >
                        ENVIRONMENTAL
                    </motion.text>
                </motion.g>

                {/* Social Ring (Top-right, Blue) */}
                <motion.g>
                    <motion.circle
                        cx="185" cy="110" r="55"
                        stroke="url(#socialGradient)"
                        strokeWidth="4"
                        fill="none"
                        style={{ pathLength: useTransform(progress, [0.15, 0.4], [0, 1]) }}
                    />
                    <motion.text
                        x="185" y="115"
                        fill="#4a90d9"
                        fontSize="24"
                        fontWeight="bold"
                        fontFamily="sans-serif"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{ opacity: useTransform(progress, [0.35, 0.5], [0, 1]) }}
                    >
                        S
                    </motion.text>
                    {/* Label */}
                    <motion.text
                        x="200" y="50"
                        fill="#4a90d9"
                        fontSize="7"
                        fontFamily="monospace"
                        style={{ opacity: useTransform(progress, [0.45, 0.6], [0, 0.8]) }}
                    >
                        SOCIAL
                    </motion.text>
                </motion.g>

                {/* Governance Ring (Bottom-center, Purple) */}
                <motion.g>
                    <motion.circle
                        cx="150" cy="175" r="55"
                        stroke="url(#govGradient)"
                        strokeWidth="4"
                        fill="none"
                        style={{ pathLength: useTransform(progress, [0.2, 0.45], [0, 1]) }}
                    />
                    <motion.text
                        x="150" y="180"
                        fill="#8E7CC3"
                        fontSize="24"
                        fontWeight="bold"
                        fontFamily="sans-serif"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{ opacity: useTransform(progress, [0.4, 0.55], [0, 1]) }}
                    >
                        G
                    </motion.text>
                    {/* Label */}
                    <motion.text
                        x="150" y="245"
                        fill="#8E7CC3"
                        fontSize="7"
                        fontFamily="monospace"
                        textAnchor="middle"
                        style={{ opacity: useTransform(progress, [0.5, 0.65], [0, 0.8]) }}
                    >
                        GOVERNANCE
                    </motion.text>
                </motion.g>

                {/* Pulsing center beacon - rendered first as base */}
                <motion.circle
                    cx="150" cy="150" r="5"
                    fill="#528940"
                    filter="url(#esgGlow)"
                    style={{ opacity: useTransform(progress, [0.25, 0.35], [0, 1]) }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Central intersection - leaf grows FROM the beacon */}
                <motion.g
                    style={{
                        opacity: useTransform(progress, [0.35, 0.5], [0, 1]),
                        transformOrigin: '150px 150px',
                        scale: useTransform(progress, [0.35, 0.55], [0, 1]),
                    }}
                >
                    {/* Leaf shape - positioned to grow upward from center */}
                    <motion.path
                        d="M150 150 Q160 145 157 132 Q154 122 150 118 Q146 122 143 132 Q140 145 150 150"
                        fill="#528940"
                    />
                    {/* Leaf vein */}
                    <motion.path
                        d="M150 147 L150 122"
                        stroke="#33644A"
                        strokeWidth="1"
                        style={{ pathLength: useTransform(progress, [0.45, 0.6], [0, 1]) }}
                    />
                </motion.g>

                {/* Connection flow arrows - circular sustainability cycle */}
                <motion.g style={{ opacity: useTransform(progress, [0.45, 0.6], [0, 0.6]) }}>
                    {/* E to S flow */}
                    <motion.path
                        d="M145 65 Q165 55 185 65"
                        stroke="#528940"
                        strokeWidth="1.5"
                        fill="none"
                        strokeDasharray="4 2"
                        animate={{ strokeDashoffset: [0, -12] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    />
                    <polygon points="182,60 190,65 182,70" fill="#528940" />

                    {/* S to G flow */}
                    <motion.path
                        d="M225 140 Q240 165 220 195"
                        stroke="#4a90d9"
                        strokeWidth="1.5"
                        fill="none"
                        strokeDasharray="4 2"
                        animate={{ strokeDashoffset: [0, -12] }}
                        transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, ease: 'linear' }}
                    />
                    <polygon points="225,192 218,200 213,190" fill="#4a90d9" />

                    {/* G to E flow */}
                    <motion.path
                        d="M105 195 Q70 165 85 130"
                        stroke="#8E7CC3"
                        strokeWidth="1.5"
                        fill="none"
                        strokeDasharray="4 2"
                        animate={{ strokeDashoffset: [0, -12] }}
                        transition={{ duration: 1.5, delay: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    <polygon points="80,133 88,125 93,135" fill="#8E7CC3" />
                </motion.g>

                {/* Metric indicators around rings */}
                <motion.g style={{ opacity: useTransform(progress, [0.5, 0.65], [0, 0.8]) }}>
                    {/* Environmental metrics */}
                    <rect x="35" y="85" width="35" height="20" fill="rgba(82, 137, 64, 0.2)" stroke="#528940" strokeWidth="0.5" />
                    <text x="52.5" y="98" fill="#6BBF59" fontSize="8" fontFamily="monospace" textAnchor="middle">CO₂</text>

                    {/* Social metrics */}
                    <rect x="225" y="70" width="40" height="20" fill="rgba(74, 144, 217, 0.2)" stroke="#4a90d9" strokeWidth="0.5" />
                    <text x="245" y="83" fill="#4a90d9" fontSize="7" fontFamily="monospace" textAnchor="middle">EQUITY</text>

                    {/* Governance metrics */}
                    <rect x="130" y="255" width="40" height="20" fill="rgba(142, 124, 195, 0.2)" stroke="#8E7CC3" strokeWidth="0.5" />
                    <text x="150" y="268" fill="#8E7CC3" fontSize="7" fontFamily="monospace" textAnchor="middle">ETHICS</text>
                </motion.g>

                {/* Corner construction marks */}
                <motion.g style={{ opacity: useTransform(progress, [0.1, 0.3], [0, 0.4]) }}>
                    <motion.path d="M20 20 L20 40 M20 20 L40 20" stroke="#528940" strokeWidth="1" style={{ pathLength: useTransform(progress, [0.1, 0.3], [0, 1]) }} />
                    <motion.path d="M280 20 L280 40 M280 20 L260 20" stroke="#528940" strokeWidth="1" style={{ pathLength: useTransform(progress, [0.15, 0.35], [0, 1]) }} />
                    <motion.path d="M20 280 L20 260 M20 280 L40 280" stroke="#528940" strokeWidth="1" style={{ pathLength: useTransform(progress, [0.2, 0.4], [0, 1]) }} />
                    <motion.path d="M280 280 L280 260 M280 280 L260 280" stroke="#528940" strokeWidth="1" style={{ pathLength: useTransform(progress, [0.25, 0.45], [0, 1]) }} />
                </motion.g>

                {/* Technical label */}
                <motion.g style={{ opacity: useTransform(progress, [0.5, 0.65], [0, 0.9]) }}>
                    <rect x="25" y="10" width="90" height="18" fill="rgba(82, 137, 64, 0.2)" stroke="#528940" strokeWidth="0.5" />
                    <text x="70" y="22" fill="#528940" fontSize="7" fontFamily="monospace" textAnchor="middle">
                        ESG FRAMEWORK
                    </text>
                </motion.g>

                {/* Small data points orbiting */}
                <motion.g
                    style={{ opacity: useTransform(progress, [0.4, 0.55], [0, 0.7]), transformOrigin: '150px 150px' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                >
                    <circle cx="150" cy="65" r="3" fill="#6BBF59" />
                    <circle cx="220" cy="180" r="3" fill="#4a90d9" />
                    <circle cx="80" cy="180" r="3" fill="#8E7CC3" />
                </motion.g>
            </svg>

            {/* Ambient glow */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(82, 137, 64, 0.2) 0%, transparent 70%)' }}
                animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.15, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
        </div>
    );
}

function LeafParticles() {
    const [leaves, setLeaves] = useState<Array<{ id: number; x: number; delay: number }>>([]);

    useEffect(() => {
        setLeaves(
            Array.from({ length: 15 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 5,
            }))
        );
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {leaves.map((leaf) => (
                <motion.div
                    key={leaf.id}
                    className="absolute w-2 h-2 rounded-full opacity-30"
                    style={{
                        left: `${leaf.x}%`,
                        background: '#528940',
                    }}
                    animate={{
                        y: ['-10%', '110%'],
                        x: [0, Math.sin(leaf.id) * 50],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 5,
                        repeat: Infinity,
                        delay: leaf.delay,
                        ease: 'linear',
                    }}
                />
            ))}
        </div>
    );
}

