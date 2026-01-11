'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { GlitchText } from '@/components/ui/AnimatedText';
import { SECTOR_GRADIENTS } from '@/lib/gradients';

export default function SystemsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    return (
        <section
            ref={containerRef}
            id="systems"
            className="relative min-h-screen py-24 md:py-32 bg-void overflow-hidden"
        >
            {/* Circuit pattern background */}
            <CircuitPattern scrollProgress={scrollYProgress} />

            {/* Gradient overlay */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: SECTOR_GRADIENTS.systems,
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
                            <motion.div
                                className="w-12 h-12 flex items-center justify-center border"
                                style={{ borderColor: '#8D68AA' }}
                                animate={{
                                    boxShadow: [
                                        '0 0 0px rgba(141, 104, 170, 0)',
                                        '0 0 20px rgba(141, 104, 170, 0.5)',
                                        '0 0 0px rgba(141, 104, 170, 0)',
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Cpu className="w-6 h-6" style={{ color: '#8D68AA' }} />
                            </motion.div>
                            <span
                                className="font-body text-sm tracking-[0.3em] uppercase"
                                style={{ color: '#8D68AA' }}
                            >
                                Sector 03
                            </span>
                        </motion.div>

                        {/* Title with glitch effect */}
                        <motion.h2
                            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-stark leading-[0.9] mb-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <GlitchText className="block">Integrated</GlitchText>
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: SECTOR_GRADIENTS.systems }}
                            >
                                Systems
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
                            Connecting the dots of modern engineering. Our systems integration
                            expertise brings together complex components into seamless,
                            intelligent solutions.
                        </motion.p>

                        {/* System nodes */}
                        <motion.div
                            className="grid grid-cols-2 gap-4 mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {[
                                { name: 'SCADA', desc: 'Control Systems' },
                                { name: 'IoT', desc: 'Smart Sensors' },
                                { name: 'BIM', desc: 'Digital Twins' },
                                { name: 'AI/ML', desc: 'Predictive Models' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    className="p-4 border border-white/10 bg-white/[0.02] group"
                                    whileHover={{
                                        borderColor: '#8D68AA',
                                        boxShadow: '0 0 30px rgba(141, 104, 170, 0.2)',
                                    }}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                >
                                    <span
                                        className="font-mono text-lg font-bold"
                                        style={{ color: '#8D68AA' }}
                                    >
                                        {item.name}
                                    </span>
                                    <span className="block font-body text-sm text-stark/40 mt-1">
                                        {item.desc}
                                    </span>
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
                                style={{ borderColor: '#8D68AA' } as any}
                            >
                                View Architecture <ArrowRight className="w-4 h-4" />
                            </MagneticButton>
                        </motion.div>
                    </div>

                    {/* Hexagonal systems visualization */}
                    <div className="relative h-[500px] lg:h-[600px]">
                        <SystemsVisualization />
                    </div>
                </div>
            </div>
        </section>
    );
}

function CircuitPattern({ scrollProgress }: { scrollProgress: any }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Horizontal lines */}
            {[20, 40, 60, 80].map((top, i) => (
                <motion.div
                    key={`h-${i}`}
                    className="absolute left-0 h-[1px]"
                    style={{
                        top: `${top}%`,
                        width: '100%',
                        background: `linear-gradient(90deg, transparent, rgba(141, 104, 170, 0.3), transparent)`,
                        scaleX: useTransform(scrollProgress, [0.05 + i * 0.05, 0.2 + i * 0.05], [0, 1]),
                    }}
                />
            ))}

            {/* Vertical lines */}
            {[25, 50, 75].map((left, i) => (
                <motion.div
                    key={`v-${i}`}
                    className="absolute top-0 w-[1px]"
                    style={{
                        left: `${left}%`,
                        height: '100%',
                        background: `linear-gradient(180deg, transparent, rgba(141, 104, 170, 0.2), transparent)`,
                        scaleY: useTransform(scrollProgress, [0.1 + i * 0.05, 0.3 + i * 0.05], [0, 1]),
                    }}
                />
            ))}

            {/* Connection nodes */}
            {[
                { x: 25, y: 20 },
                { x: 50, y: 40 },
                { x: 75, y: 60 },
                { x: 25, y: 80 },
                { x: 50, y: 20 },
            ].map((pos, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        left: `${pos.x}%`,
                        top: `${pos.y}%`,
                        background: '#8D68AA',
                    }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                    }}
                />
            ))}
        </div>
    );
}

function SystemsVisualization() {
    // Hexagon grid positions
    const hexagons = [
        { cx: 100, cy: 80, size: 35, label: 'CORE', primary: true },
        { cx: 45, cy: 50, size: 25, label: 'IoT' },
        { cx: 155, cy: 50, size: 25, label: 'AI' },
        { cx: 45, cy: 110, size: 25, label: 'BIM' },
        { cx: 155, cy: 110, size: 25, label: 'DATA' },
        { cx: 100, cy: 20, size: 20, label: '' },
        { cx: 100, cy: 140, size: 20, label: 'API' },
    ];

    // Connection lines between hexagons
    const connections = [
        { from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 },
        { from: 0, to: 4 }, { from: 0, to: 5 }, { from: 0, to: 6 },
        { from: 1, to: 5 }, { from: 2, to: 5 }, { from: 3, to: 6 }, { from: 4, to: 6 },
    ];

    const createHexPath = (cx: number, cy: number, size: number) => {
        const points = [];
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i - Math.PI / 6;
            points.push(`${cx + size * Math.cos(angle)},${cy + size * Math.sin(angle)}`);
        }
        return `M${points.join('L')}Z`;
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <svg
                viewBox="0 0 200 160"
                className="w-full h-full max-w-[450px]"
                fill="none"
            >
                <defs>
                    {/* Gradient for hexagons */}
                    <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8D68AA" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#5B3D6E" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#A88BC8" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#8D68AA" stopOpacity="0.4" />
                    </linearGradient>
                    {/* Glow filter */}
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    {/* Data flow gradient */}
                    <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8D68AA" stopOpacity="0" />
                        <stop offset="50%" stopColor="#C9B8D8" stopOpacity="1" />
                        <stop offset="100%" stopColor="#8D68AA" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Connection lines with data flow */}
                {connections.map((conn, i) => {
                    const from = hexagons[conn.from];
                    const to = hexagons[conn.to];
                    return (
                        <g key={`conn-${i}`}>
                            {/* Base line */}
                            <motion.line
                                x1={from.cx}
                                y1={from.cy}
                                x2={to.cx}
                                y2={to.cy}
                                stroke="#8D68AA"
                                strokeWidth="1"
                                strokeOpacity="0.3"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                                transition={{ duration: 0.8, delay: i * 0.05 }}
                            />
                            {/* Animated data pulse */}
                            <motion.circle
                                r="2"
                                fill="#C9B8D8"
                                filter="url(#glow)"
                                animate={{
                                    cx: [from.cx, to.cx],
                                    cy: [from.cy, to.cy],
                                    opacity: [0, 1, 1, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    delay: i * 0.3,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                }}
                            />
                        </g>
                    );
                })}

                {/* Hexagons */}
                {hexagons.map((hex, i) => (
                    <motion.g key={`hex-${i}`}>
                        {/* Outer glow for primary */}
                        {hex.primary && (
                            <motion.path
                                d={createHexPath(hex.cx, hex.cy, hex.size + 5)}
                                fill="none"
                                stroke="#8D68AA"
                                strokeWidth="1"
                                strokeOpacity="0.3"
                                animate={{
                                    strokeOpacity: [0.2, 0.5, 0.2],
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        )}
                        {/* Hexagon fill */}
                        <motion.path
                            d={createHexPath(hex.cx, hex.cy, hex.size)}
                            fill={hex.primary ? 'url(#coreGradient)' : 'url(#hexGradient)'}
                            stroke="#8D68AA"
                            strokeWidth={hex.primary ? 2 : 1}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.5, delay: 0.1 + i * 0.08, type: 'spring' }}
                            style={{ transformOrigin: `${hex.cx}px ${hex.cy}px` }}
                        />
                        {/* Inner circuit pattern */}
                        <motion.path
                            d={createHexPath(hex.cx, hex.cy, hex.size * 0.6)}
                            fill="none"
                            stroke="#8D68AA"
                            strokeWidth="0.5"
                            strokeOpacity="0.5"
                            strokeDasharray="3 2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        />
                        {/* Label */}
                        {hex.label && (
                            <motion.text
                                x={hex.cx}
                                y={hex.cy + 4}
                                textAnchor="middle"
                                fill="#FFFFFF"
                                fontSize={hex.primary ? 8 : 6}
                                fontFamily="monospace"
                                fontWeight="bold"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.9 }}
                                viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                            >
                                {hex.label}
                            </motion.text>
                        )}
                        {/* Rotating indicator on core */}
                        {hex.primary && (
                            <motion.circle
                                cx={hex.cx + hex.size * 0.8}
                                cy={hex.cy}
                                r="3"
                                fill="#C9B8D8"
                                filter="url(#glow)"
                                animate={{
                                    cx: [
                                        hex.cx + hex.size * 0.8,
                                        hex.cx,
                                        hex.cx - hex.size * 0.8,
                                        hex.cx,
                                        hex.cx + hex.size * 0.8,
                                    ],
                                    cy: [
                                        hex.cy,
                                        hex.cy - hex.size * 0.8,
                                        hex.cy,
                                        hex.cy + hex.size * 0.8,
                                        hex.cy,
                                    ],
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                            />
                        )}
                    </motion.g>
                ))}

                {/* Floating data particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.circle
                        key={`particle-${i}`}
                        r="1"
                        fill="#8D68AA"
                        opacity="0.6"
                        animate={{
                            cx: [20 + Math.random() * 160, 20 + Math.random() * 160],
                            cy: [10 + Math.random() * 140, 10 + Math.random() * 140],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                    />
                ))}

                {/* Corner circuit details */}
                <motion.path
                    d="M10 10 L30 10 L30 20 M180 10 L190 10 L190 30"
                    stroke="#8D68AA"
                    strokeWidth="0.5"
                    strokeOpacity="0.4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                    transition={{ duration: 1 }}
                />
                <motion.path
                    d="M10 150 L10 140 L20 140 M190 150 L190 140 L170 140"
                    stroke="#8D68AA"
                    strokeWidth="0.5"
                    strokeOpacity="0.4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                    transition={{ duration: 1, delay: 0.2 }}
                />
            </svg>

            {/* Ambient glow behind */}
            <motion.div
                className="absolute w-48 h-48 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(141, 104, 170, 0.3) 0%, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />
        </div>
    );
}
