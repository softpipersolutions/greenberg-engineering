'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ESGSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const ecosystemProgress = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);

    return (
        <section
            ref={containerRef}
            id="esg"
            className="relative min-h-screen py-24 md:py-32 bg-void overflow-hidden"
        >
            {/* Floating leaf particles (Hydration safe) */}
            <LeafParticles />

            {/* Ambient Gradient glow */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 70% 50%, rgba(107, 191, 89, 0.15) 0%, transparent 60%)',
                    opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]),
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                    {/* Animated Holographic Visualization */}
                    <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1 flex items-center justify-center">
                        <TreeVisualization progress={ecosystemProgress} />
                    </div>

                    {/* Content Column */}
                    <div className="order-1 lg:order-2">
                        {/* Glassmorphic Sector Label */}
                        <motion.div
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(107,191,89,0.1)]"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative flex items-center justify-center w-2 h-2">
                                <div className="absolute inset-0 rounded-full bg-[#6BBF59] blur-[4px] animate-pulse" />
                                <div className="absolute inset-0 rounded-full bg-[#6BBF59] opacity-50 animate-ping" />
                                <div className="relative w-1.5 h-1.5 rounded-full bg-[#6BBF59]" />
                            </div>
                            <span className="font-body text-xs font-semibold tracking-widest uppercase text-stark/80">
                                Sector 02 // Ecosystem
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
                            <span className="text-white/90">ESG</span>
                            <br />
                            <span className="relative inline-block text-transparent bg-clip-text mt-1 pb-2">
                                <span className="absolute inset-0 bg-gradient-to-r from-[#6BBF59] to-[#00E5FF] blur-[24px] opacity-40 mix-blend-screen" />
                                <span
                                    className="relative inline-block"
                                    style={{
                                        backgroundImage: 'linear-gradient(to right, #6BBF59, #00E5FF, #6BBF59)',
                                        backgroundSize: '200% auto',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        animation: 'shimmer 4s linear infinite',
                                    }}
                                >
                                    Excellence
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
                            Sustainable solutions for a generative future. We integrate highly optimized environmental,
                            social, and governance AI models into every project node, ensuring pure long-term value.
                        </motion.p>

                        {/* Interactive Floating Stat Cards */}
                        <motion.div
                            className="grid grid-cols-3 gap-3 mb-12 max-w-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {[
                                { value: '100%', label: 'Net-Zero Commitment' },
                                { value: 'Zero', label: 'Waste Protocol' },
                                { value: '1M+', label: 'kWh Renewable' },
                            ].map((metric, i) => (
                                <motion.div
                                    key={metric.label}
                                    className="relative p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm group overflow-hidden text-center cursor-default"
                                    whileHover={{ y: -4, borderColor: 'rgba(107, 191, 89, 0.4)', boxShadow: '0 10px 30px -10px rgba(107, 191, 89, 0.15)' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#6BBF59]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10 font-heading text-xl md:text-2xl font-bold mb-1 text-[#6BBF59] group-hover:text-[#00E5FF] transition-colors">
                                        {metric.value}
                                    </div>
                                    <div className="relative z-10 font-mono text-[10px] text-stark/50 leading-tight group-hover:text-stark transition-colors">
                                        {metric.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Interactive Pill Attributes */}
                        <motion.div
                            className="flex flex-wrap gap-2 mb-10 max-w-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {['Carbon Neutrality', 'AI Energy Analysis', 'Water Management', 'Biodiversity Sensor Network'].map((item, i) => (
                                <motion.span
                                    key={item}
                                    className="px-4 py-2 rounded-full border border-white/10 font-mono text-xs text-stark/50 bg-void/50 backdrop-blur cursor-default"
                                    whileHover={{
                                        borderColor: '#6BBF59',
                                        backgroundColor: 'rgba(107, 191, 89, 0.1)',
                                        color: '#fff',
                                        scale: 1.02,
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {item}
                                </motion.span>
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
                            <Link href="/sectors/esg" className="relative group inline-block">
                                <motion.div
                                    className="absolute inset-0 z-0 rounded-lg blur-[12px] bg-gradient-to-r from-[#6BBF59] to-[#00E5FF] opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl"
                                />
                                <div className="relative z-10 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-heading text-xs uppercase tracking-[0.2em] text-stark overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md group-hover:bg-white/10 group-hover:border-[#6BBF59]/40 transition-all duration-300">
                                    <span className="relative z-10 flex items-center gap-2">
                                        OUR INITIATIVES
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
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </section>
    );
}

function LeafParticles() {
    const [leaves, setLeaves] = useState<Array<{ id: number; x: number; delay: number; duration: number }>>([]);
    
    useEffect(() => {
        setLeaves(
            Array.from({ length: 15 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 5,
                duration: 10 + Math.random() * 5,
            }))
        );
    }, []);

    if (leaves.length === 0) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {leaves.map((leaf) => (
                <motion.div
                    key={leaf.id}
                    className="absolute top-[-10%]"
                    style={{ left: `${leaf.x}%` }}
                    animate={{
                        y: ['0vh', '110vh'],
                        x: ['0vw', `${(leaf.id % 2 === 0 ? 1 : -1) * 20}vw`],
                        rotate: [0, 360 * (leaf.id % 3 + 1)],
                    }}
                    transition={{
                        duration: leaf.duration,
                        delay: leaf.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    <div 
                        className="w-2 h-2 rounded-full blur-[2px] opacity-20"
                        style={{ backgroundColor: leaf.id % 2 === 0 ? '#6BBF59' : '#00E5FF' }}
                    />
                </motion.div>
            ))}
        </div>
    );
}

function TreeVisualization({ progress }: { progress: import('framer-motion').MotionValue<number> }) {
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

    const rotateX = useSpring(useTransform(mouseY, [0, 1], [20, -20]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), { stiffness: 100, damping: 30 });

    const [telemetry, setTelemetry] = useState<Array<{ id: number; cx: number; cy: number; label: string; value: string; delay: number }>>([]);

    useEffect(() => {
        setTelemetry([
            { id: 1, cx: 80, cy: 70, label: 'CO2', value: 'OPTIMAL', delay: 0.5 },
            { id: 2, cx: 220, cy: 70, label: 'S-RATING', value: '100%', delay: 1.2 },
            { id: 3, cx: 150, cy: 230, label: 'ETHICS', value: 'VERIFIED', delay: 2.1 }
        ]);
    }, []);

    // Ecosystem core pulse
    const coreScale = useTransform(progress, [0, 1], [0, 1]);

    return (
        <motion.div 
            className="group relative w-full h-full max-w-[500px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
        >
            {/* Ambient Base Glow */}
            <div className="absolute inset-1/4 bg-[#6BBF59]/20 blur-[60px] rounded-full mix-blend-screen pointer-events-none" />

            <motion.div
                className="w-full h-full relative"
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            >
                <svg
                    viewBox="0 0 300 300"
                    className="w-full h-full absolute inset-0 pointer-events-none"
                    fill="none"
                >
                    <defs>
                        {/* Environmental Ring Gradient (Green to Cyan) */}
                        <linearGradient id="envRing" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6BBF59" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.4" />
                        </linearGradient>
                        
                        {/* Social Ring Gradient (Blue to Cyan) */}
                        <linearGradient id="socRing" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4a90d9" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.4" />
                        </linearGradient>

                        {/* Governance Ring Gradient (Purple to Green) */}
                        <linearGradient id="govRing" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8E7CC3" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#6BBF59" stopOpacity="0.4" />
                        </linearGradient>

                        {/* Holographic Filters */}
                        <filter id="esgHoloGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Outer Rotating Shield */}
                    <motion.g
                        style={{ opacity: useTransform(progress, [0.05, 0.4], [0, 0.2]), transformOrigin: '150px 150px' }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    >
                        <circle cx="150" cy="150" r="130" stroke="#6BBF59" strokeWidth="0.5" fill="none" strokeDasharray="10 20" />
                        <circle cx="150" cy="150" r="140" stroke="#00E5FF" strokeWidth="0.2" fill="none" strokeDasharray="1 4" />
                    </motion.g>

                    {/* Central Core Reactor Element */}
                    <motion.g style={{ opacity: progress, scale: coreScale, transformOrigin: '150px 140px' }} filter="url(#esgHoloGlow)">
                        <circle cx="150" cy="140" r="12" fill="#6BBF59" opacity="0.8" />
                        <circle cx="150" cy="140" r="25" stroke="#00E5FF" strokeWidth="1" fill="none" strokeDasharray="2 4" />
                        <circle cx="150" cy="140" r="4" fill="#FFFFFF" />
                    </motion.g>

                    {/* Inner Venn Rings - E, S, G */}
                    <motion.g filter="url(#esgHoloGlow)">
                        {/* E (Top) */}
                        <motion.circle
                            cx="150" cy="100" r="55"
                            stroke="url(#envRing)"
                            strokeWidth="3.5"
                            fill="rgba(107, 191, 89, 0.05)"
                            style={{ pathLength: useTransform(progress, [0.1, 0.35], [0, 1]) }}
                        />
                        <motion.circle
                            cx="150" cy="100" r="55"
                            stroke="#FFFFFF"
                            strokeWidth="1"
                            opacity="0.5"
                            fill="none"
                            style={{ pathLength: useTransform(progress, [0.1, 0.35], [0, 1]) }}
                        />
                        <motion.text
                            x="150" y="85"
                            fill="#6BBF59"
                            fontSize="28"
                            fontWeight="800"
                            fontFamily="sans-serif"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            style={{ opacity: useTransform(progress, [0.3, 0.45], [0, 1]) }}
                        >
                            E
                        </motion.text>

                        {/* S (Bottom Left) */}
                        <motion.circle
                            cx="115" cy="160" r="55"
                            stroke="url(#socRing)"
                            strokeWidth="3.5"
                            fill="rgba(74, 144, 217, 0.05)"
                            style={{ pathLength: useTransform(progress, [0.15, 0.4], [0, 1]) }}
                        />
                        <motion.circle
                            cx="115" cy="160" r="55"
                            stroke="#FFFFFF"
                            strokeWidth="1"
                            opacity="0.5"
                            fill="none"
                            style={{ pathLength: useTransform(progress, [0.15, 0.4], [0, 1]) }}
                        />
                        <motion.text
                            x="100" y="165"
                            fill="#4a90d9"
                            fontSize="28"
                            fontWeight="800"
                            fontFamily="sans-serif"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            style={{ opacity: useTransform(progress, [0.35, 0.5], [0, 1]) }}
                        >
                            S
                        </motion.text>

                        {/* G (Bottom Right) */}
                        <motion.circle
                            cx="185" cy="160" r="55"
                            stroke="url(#govRing)"
                            strokeWidth="3.5"
                            fill="rgba(142, 124, 195, 0.05)"
                            style={{ pathLength: useTransform(progress, [0.2, 0.45], [0, 1]) }}
                        />
                        <motion.circle
                            cx="185" cy="160" r="55"
                            stroke="#FFFFFF"
                            strokeWidth="1"
                            opacity="0.5"
                            fill="none"
                            style={{ pathLength: useTransform(progress, [0.2, 0.45], [0, 1]) }}
                        />
                        <motion.text
                            x="200" y="165"
                            fill="#8E7CC3"
                            fontSize="28"
                            fontWeight="800"
                            fontFamily="sans-serif"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            style={{ opacity: useTransform(progress, [0.4, 0.55], [0, 1]) }}
                        >
                            G
                        </motion.text>
                    </motion.g>
                    
                    {/* Glowing Nexus Lines Connecting Nodes to Core */}
                    <motion.g style={{ opacity: useTransform(progress, [0.4, 0.6], [0, 0.3]) }}>
                        <line x1="150" y1="140" x2="80" y2="70" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="2 2" />
                        <line x1="150" y1="140" x2="220" y2="70" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="2 2" />
                        <line x1="150" y1="140" x2="150" y2="230" stroke="#00E5FF" strokeWidth="0.5" strokeDasharray="2 2" />
                    </motion.g>
                </svg>

                {/* Orbiting Telemetry Nodes (HTML Overlays for text clarity) */}
                {telemetry.map((data, i) => (
                    <motion.div
                        key={data.id}
                        className="absolute pointer-events-none"
                        style={{ 
                            left: `${(data.cx / 300) * 100}%`, 
                            top: `${(data.cy / 300) * 100}%`,
                            transform: 'translate(-50%, -50%)' 
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + data.delay, duration: 0.8 }}
                    >
                        <motion.div 
                            className="flex items-center gap-1.5 backdrop-blur-md bg-black/40 px-2 py-1 rounded border border-[#6BBF59]/30 shadow-[0_0_10px_rgba(107,191,89,0.2)]"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: data.delay, ease: "easeInOut" }}
                        >
                            <div className="w-1.5 h-1.5 bg-[#6BBF59] rounded-full" style={{ animation: 'blink 1.5s infinite' }} />
                            <div className="flex flex-col">
                                <span className="font-mono text-[8px] text-[#00E5FF] leading-none mb-0.5 opacity-80">{data.label}</span>
                                <span className="font-mono text-[10px] text-white leading-none tracking-wider font-bold">{data.value}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Subsurface reflection */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-[#6BBF59]/10 blur-[25px] rounded-full pointer-events-none transform scale-y-50" />
        </motion.div>
    );
}
