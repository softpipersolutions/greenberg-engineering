'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Cpu, ArrowRight } from 'lucide-react';
import { GlitchText } from '@/components/ui/AnimatedText';

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
            {/* Ambient Circuit Pattern */}
            <CircuitPattern scrollProgress={scrollYProgress} />

            {/* Ambient Gradient glow */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 30% 50%, rgba(141, 104, 170, 0.15) 0%, transparent 60%)',
                    opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]),
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                    {/* Content Column */}
                    <div className="order-1">
                        {/* Glassmorphic Sector Label */}
                        <motion.div
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(141,104,170,0.15)]"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative flex items-center justify-center w-2 h-2">
                                <div className="absolute inset-0 rounded-full bg-[#FF00FF] blur-[4px] animate-pulse" />
                                <div className="relative w-1.5 h-1.5 rounded-full bg-[#FF00FF]" />
                            </div>
                            <span className="font-body text-xs font-semibold tracking-widest uppercase text-stark/80">
                                Sector 03 // Logic
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
                            <GlitchText className="block text-white/90">Integrated</GlitchText>
                            <span className="relative inline-block text-transparent bg-clip-text mt-1 pb-2">
                                <span className="absolute inset-0 bg-gradient-to-r from-[#8D68AA] to-[#FF00FF] blur-[24px] opacity-40 mix-blend-screen" />
                                <span
                                    className="relative inline-block"
                                    style={{
                                        backgroundImage: 'linear-gradient(to right, #8D68AA, #FF00FF, #8D68AA)',
                                        backgroundSize: '200% auto',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        animation: 'shimmer 4s linear infinite',
                                    }}
                                >
                                    Systems
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
                            Connecting the dots of modern engineering. Our neural-mesh integration
                            expertise brings together complex physical components into seamless,
                            autonomous intelligence networks.
                        </motion.p>

                        {/* Interactive Floating Micro-Cards */}
                        <motion.div
                            className="grid grid-cols-2 gap-3 mb-12 max-w-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {[
                                { name: 'SCADA', desc: 'Central Control' },
                                { name: 'IoT', desc: 'Neural Sensors' },
                                { name: 'BIM', desc: 'Digital Twins' },
                                { name: 'AI/ML', desc: 'Predictive Cores' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    className="relative p-5 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm group overflow-hidden cursor-default"
                                    whileHover={{ y: -4, borderColor: 'rgba(255, 0, 255, 0.4)', boxShadow: '0 10px 30px -10px rgba(141, 104, 170, 0.2)' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#8D68AA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10 flex flex-col">
                                        <span className="font-mono text-xl font-bold mb-1 text-[#8D68AA] group-hover:text-[#FF00FF] transition-colors">
                                            {item.name}
                                        </span>
                                        <span className="font-body text-xs text-stark/50 group-hover:text-stark/90 transition-colors uppercase tracking-wider">
                                            {item.desc}
                                        </span>
                                    </div>
                                    <div className="absolute top-3 right-3 w-1 h-1 bg-[#FF00FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" />
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
                            <Link href="/sectors/systems" className="relative group inline-block">
                                <motion.div
                                    className="absolute inset-0 z-0 rounded-lg blur-[12px] bg-gradient-to-r from-[#8D68AA] to-[#FF00FF] opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl"
                                />
                                <div className="relative z-10 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-heading text-xs uppercase tracking-[0.2em] text-stark overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md group-hover:bg-white/10 group-hover:border-[#FF00FF]/40 transition-all duration-300">
                                    <span className="relative z-10 flex items-center gap-2">
                                        VIEW PLATFORM ARCHITECTURE
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Holographic Neural Matrix Visualization */}
                    <div className="relative h-[500px] lg:h-[600px] order-2 flex items-center justify-center">
                        <SystemsVisualization />
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

// Minimal Circuit Pattern Background
function CircuitPattern({ scrollProgress }: { scrollProgress: import('framer-motion').MotionValue<number> }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            {/* Horizontal lines */}
            {[20, 50, 80].map((top, i) => (
                <HorizontalLine key={`h-${i}`} top={top} index={i} scrollProgress={scrollProgress} />
            ))}
            {/* Vertical lines */}
            {[25, 50, 75].map((left, i) => (
                <VerticalLine key={`v-${i}`} left={left} index={i} scrollProgress={scrollProgress} />
            ))}
        </div>
    );
}

function HorizontalLine({ top, index, scrollProgress }: { top: number, index: number, scrollProgress: import('framer-motion').MotionValue<number> }) {
    const scaleX = useTransform(scrollProgress, [0.05 + index * 0.05, 0.2 + index * 0.05], [0, 1]);
    return (
        <motion.div
            className="absolute left-0 h-[1px]"
            style={{
                top: `${top}%`,
                width: '100%',
                background: `linear-gradient(90deg, transparent, rgba(141, 104, 170, 0.15), transparent)`,
                scaleX,
            }}
        />
    );
}

function VerticalLine({ left, index, scrollProgress }: { left: number, index: number, scrollProgress: import('framer-motion').MotionValue<number> }) {
    const scaleY = useTransform(scrollProgress, [0.1 + index * 0.05, 0.3 + index * 0.05], [0, 1]);
    return (
        <motion.div
            className="absolute top-0 w-[1px]"
            style={{
                left: `${left}%`,
                height: '100%',
                background: `linear-gradient(180deg, transparent, rgba(141, 104, 170, 0.1), transparent)`,
                scaleY,
            }}
        />
    );
}

// 3D Holographic Neural Matrix
function SystemsVisualization() {
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

    const rotateX = useSpring(useTransform(mouseY, [0, 1], [25, -25]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-25, 25]), { stiffness: 100, damping: 30 });

    const [particles, setParticles] = useState<Array<{ cx1: number; cx2: number; cy1: number; cy2: number; duration: number; delay: number }>>([]);
    const [telemetry, setTelemetry] = useState<Array<{ id: number; cx: number; cy: number; label: string; value: string; delay: number }>>([]);

    // Hexagon grid network definition
    const hexagons = [
        { cx: 100, cy: 80, size: 35, label: 'CORE', primary: true }, // Index 0 (Center)
        { cx: 45,  cy: 50, size: 25, label: 'IoT' }, // Index 1
        { cx: 155, cy: 50, size: 25, label: 'AI' }, // Index 2
        { cx: 45,  cy: 110, size: 25, label: 'BIM' }, // Index 3
        { cx: 155, cy: 110, size: 25, label: 'DATA' }, // Index 4
        { cx: 100, cy: 150, size: 20, label: 'API' }, // Index 5
    ];

    // Outbound connections from CORE (0)
    const connections = [
        { from: 0, to: 1 }, { from: 0, to: 2 }, 
        { from: 0, to: 3 }, { from: 0, to: 4 }, 
        { from: 0, to: 5 }
    ];

    useEffect(() => {
        // Generate active flow packets exactly along connection paths
        const flows = connections.map((conn, i) => ({
            cx1: hexagons[conn.from].cx,
            cy1: hexagons[conn.from].cy,
            cx2: hexagons[conn.to].cx,
            cy2: hexagons[conn.to].cy,
            duration: 1.5 + Math.random(),
            delay: Math.random() * 2,
        }));
        setParticles(flows);

        // Generate random network traffic overlay nodes
        setTelemetry([
            { id: 1, cx: 30,  cy: 20,  label: 'UPLINK',  value: 'ACTIVE', delay: 0 },
            { id: 2, cx: 180, cy: 140, label: 'LATENCY', value: '2MS',    delay: 1.3 },
            { id: 3, cx: 160, cy: 15,  label: 'NODES',   value: 'SYNCED', delay: 2.1 },
        ]);
    }, []);

    const createHexPath = (cx: number, cy: number, size: number) => {
        const points = [];
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i - Math.PI / 6;
            points.push(`${cx + size * Math.cos(angle)},${cy + size * Math.sin(angle)}`);
        }
        return `M${points.join('L')}Z`;
    };

    return (
        <motion.div 
            className="group relative w-full h-full max-w-[500px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
        >
            {/* Ambient Base Core Glow */}
            <div className="absolute inset-1/4 bg-[#8D68AA]/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />

            <motion.div
                className="w-full h-full relative"
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            >
                <svg
                    viewBox="0 0 200 160"
                    className="w-full h-full absolute inset-0 pointer-events-none"
                    fill="none"
                    style={{ overflow: 'visible' }}
                >
                    <defs>
                        {/* Gradients */}
                        <linearGradient id="coreGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FF00FF" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#8D68AA" stopOpacity="0.1" />
                        </linearGradient>
                        <linearGradient id="nodeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8D68AA" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0.05" />
                        </linearGradient>

                        {/* Drop shadow filter to give depth */}
                        <filter id="hexShadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#8D68AA" floodOpacity="0.3" />
                        </filter>
                        
                        {/* High intensity bloom for data packets */}
                        <filter id="bloom" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Matrix connection lines layer (underneath hexagons) */}
                    <g>
                        {connections.map((conn, i) => (
                            <motion.line
                                key={`line-${i}`}
                                x1={hexagons[conn.from].cx}
                                y1={hexagons[conn.from].cy}
                                x2={hexagons[conn.to].cx}
                                y2={hexagons[conn.to].cy}
                                stroke="#8D68AA"
                                strokeWidth="1"
                                strokeOpacity="0.4"
                                strokeDasharray="3 3"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: i * 0.1 }}
                            />
                        ))}
                    </g>

                    {/* Data Packets layer (traveling along lines) */}
                    <g filter="url(#bloom)">
                        {particles.map((p, i) => (
                            <motion.circle
                                key={`packet-${i}`}
                                r="1.5"
                                fill="#FF00FF"
                                animate={{
                                    cx: [p.cx1, p.cx2],
                                    cy: [p.cy1, p.cy2],
                                    opacity: [0, 1, 0],
                                    scale: [0.5, 1.5, 0.5]
                                }}
                                transition={{
                                    duration: p.duration,
                                    repeat: Infinity,
                                    delay: p.delay,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </g>

                    {/* Holographic Hexagons Layer */}
                    {hexagons.map((hex, i) => (
                        <motion.g 
                            key={`hex-${i}`} 
                            filter="url(#hexShadow)"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + (i * 0.1), type: 'spring' }}
                            style={{ transformOrigin: `${hex.cx}px ${hex.cy}px` }}
                        >
                            {/* Outer glowing border for depth */}
                            <path
                                d={createHexPath(hex.cx, hex.cy, hex.size)}
                                fill={hex.primary ? 'url(#coreGlow)' : 'url(#nodeGlow)'}
                                stroke={hex.primary ? '#FF00FF' : '#8D68AA'}
                                strokeWidth={hex.primary ? 1.5 : 0.5}
                                strokeOpacity={hex.primary ? 0.8 : 0.5}
                            />
                            
                            {/* Inner tech lines for texture */}
                            <path
                                d={createHexPath(hex.cx, hex.cy, hex.size * 0.7)}
                                fill="none"
                                stroke="#FFFFFF"
                                strokeWidth="0.5"
                                strokeOpacity="0.2"
                            />

                            {/* Node Label */}
                            {hex.label && (
                                <text
                                    x={hex.cx}
                                    y={hex.cy + (hex.primary ? 4 : 3)}
                                    textAnchor="middle"
                                    fill="#FFFFFF"
                                    opacity="0.9"
                                    fontSize={hex.primary ? 9 : 7}
                                    fontFamily="monospace"
                                    fontWeight="bold"
                                    letterSpacing="1"
                                >
                                    {hex.label}
                                </text>
                            )}

                            {/* Core pulsing reactor overlay */}
                            {hex.primary && (
                                <motion.circle
                                    cx={hex.cx}
                                    cy={hex.cy}
                                    r={hex.size * 0.4}
                                    fill="none"
                                    stroke="#FF00FF"
                                    strokeWidth="0.5"
                                    strokeDasharray="2 4"
                                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                                    style={{ transformOrigin: `${hex.cx}px ${hex.cy}px` }}
                                />
                            )}
                        </motion.g>
                    ))}
                    
                    {/* Floating Corner Bracket Aesthetics */}
                    <g opacity="0.4" stroke="#8D68AA" strokeWidth="0.5" fill="none">
                        <path d="M5 25 L5 5 L25 5" />
                        <path d="M195 25 L195 5 L175 5" />
                        <path d="M5 135 L5 155 L25 155" />
                        <path d="M195 135 L195 155 L175 155" />
                    </g>
                </svg>

                {/* Orbiting Telemetry Data Cards (HTML Overlays for text crispness) */}
                {telemetry.map((data, i) => (
                    <motion.div
                        key={data.id}
                        className="absolute pointer-events-none z-20"
                        style={{ 
                            left: `${(data.cx / 200) * 100}%`, 
                            top: `${(data.cy / 160) * 100}%`,
                            transform: 'translate(-50%, -50%)' 
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + data.delay, duration: 0.8 }}
                    >
                        <motion.div 
                            className="flex items-center gap-1.5 backdrop-blur-md bg-[#09050d]/60 px-2 py-1 rounded border border-[#8D68AA]/40 shadow-[0_0_15px_rgba(255,0,255,0.15)]"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: data.delay, ease: "easeInOut" }}
                        >
                            <div className="w-1.5 h-1.5 bg-[#FF00FF] rounded-full" style={{ animation: 'blink 1.2s infinite' }} />
                            <div className="flex flex-col">
                                <span className="font-mono text-[7px] text-[#8D68AA] leading-none mb-0.5">{data.label}</span>
                                <span className="font-mono text-[9px] text-white leading-none tracking-wider font-bold">{data.value}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Subsurface projection shadow/reflection */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[#8D68AA]/15 blur-[20px] rounded-full pointer-events-none transform scale-y-50" />
        </motion.div>
    );
}
