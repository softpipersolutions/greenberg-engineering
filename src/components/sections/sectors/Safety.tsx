'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GlitchText } from '@/components/ui/AnimatedText';

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
            {/* Heartbeat Laser Scanner */}
            <HeartbeatLine />

            {/* Red alert ambient glow */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 75% 50%, rgba(212, 1, 20, 0.15) 0%, transparent 60%)',
                    opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]),
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    
                    {/* Content Column */}
                    <div className="order-1">
                        {/* Glassmorphic Sector Label */}
                        <motion.div
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(212,1,20,0.15)]"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative flex items-center justify-center w-2 h-2">
                                <div className="absolute inset-0 rounded-full bg-[#D40114] blur-[4px] animate-pulse" />
                                <div className="relative w-1.5 h-1.5 rounded-full bg-[#D40114]" />
                            </div>
                            <span className="font-body text-xs font-semibold tracking-widest uppercase text-stark/80">
                                Sector 05 // Security
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
                            <GlitchText className="block text-white/90">Zero</GlitchText>
                            <span className="relative inline-block text-transparent bg-clip-text mt-1 pb-2">
                                <span className="absolute inset-0 bg-gradient-to-r from-[#D40114] to-[#FF3B30] blur-[24px] opacity-40 mix-blend-screen" />
                                <span
                                    className="relative inline-block"
                                    style={{
                                        backgroundImage: 'linear-gradient(to right, #D40114, #FF3B30, #D40114)',
                                        backgroundSize: '200% auto',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        animation: 'shimmer 4s linear infinite',
                                    }}
                                >
                                    Compromise
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
                            Safety is not a priority—it's a core directive. Our comprehensive safety
                            management systems protect people, assets, and communities across
                            every project we undertake.
                        </motion.p>

                        {/* Interactive Deep-Glass Safety Checklist */}
                        <motion.div
                            className="space-y-3 mb-12 max-w-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {[
                                'ISO 45001 Certified',
                                'Zero Fatality Record',
                                '24/7 Threat Response',
                                'Predictive AI Audits',
                                'Elite Training Protocols',
                            ].map((item, i) => (
                                <motion.div
                                    key={item}
                                    className="relative flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm group overflow-hidden cursor-default"
                                    whileHover={{ x: 8, borderColor: 'rgba(212, 1, 20, 0.4)', boxShadow: '0 10px 30px -10px rgba(212, 1, 20, 0.2)' }}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                                    transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#D40114]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <motion.div
                                        className="relative z-10"
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-[#D40114] group-hover:text-[#FF3B30] transition-colors duration-300" />
                                    </motion.div>
                                    <span className="relative z-10 font-mono text-sm tracking-wide text-stark/70 group-hover:text-stark/95 transition-colors duration-300">
                                        {item}
                                    </span>
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
                            <Link href="/sectors/safety" className="relative group inline-block">
                                <motion.div
                                    className="absolute inset-0 z-0 rounded-lg blur-[12px] bg-gradient-to-r from-[#D40114] to-[#FF3B30] opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl"
                                />
                                <div className="relative z-10 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-heading text-xs uppercase tracking-[0.2em] text-stark overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md group-hover:bg-white/10 group-hover:border-[#D40114]/50 transition-all duration-300">
                                    <span className="relative z-10 flex items-center gap-2">
                                        SAFETY PROTOCOLS
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Holographic Forcefield Shield Visualization */}
                    <div className="relative h-[500px] lg:h-[600px] order-2 flex items-center justify-center">
                        <ShieldVisualization scrollProgress={scrollYProgress} />
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

// Full page moving laser scanner representing heartbeat
function HeartbeatLine() {
    return (
        <div className="absolute bottom-1/3 left-0 right-0 h-40 overflow-hidden pointer-events-none opacity-20 z-0">
            {/* The sweeping gradient laser */}
            <motion.div
                className="absolute top-0 bottom-0 w-[40vw] bg-gradient-to-r from-transparent via-[#D40114]/30 to-transparent blur-[20px]"
                animate={{ x: ['-100vw', '150vw'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* The crisp heartbeat line */}
            <svg
                className="absolute top-1/2 -translate-y-1/2 w-[200%] h-[120px]"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                {/* 
                  A sharp tech-heartbeat line graph that translates left infinitely.
                  We duplicate the pattern enough to tile smoothly before resetting.
                */}
                <motion.path
                    d="
                        M0 60 L180 60 L200 60 L220 20 L240 100 L260 50 L280 60 L480 60 
                        L500 60 L520 20 L540 100 L560 50 L580 60 L780 60
                        L800 60 L820 20 L840 100 L860 50 L880 60 L1080 60
                        L1100 60 L1120 20 L1140 100 L1160 50 L1180 60 L1380 60
                    "
                    stroke="#D40114"
                    strokeWidth="1.5"
                    fill="none"
                    initial={{ x: 0 }}
                    animate={{ x: -600 }} // Move by exactly half the SVG width to repeat
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

// 3D Holographic Forcefield Shield
function ShieldVisualization({ scrollProgress }: { scrollProgress: import('framer-motion').MotionValue<number> }) {
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
    const rotateX = useSpring(useTransform(mouseY, [0, 1], [25, -25]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-25, 25]), { stiffness: 100, damping: 30 });

    const shieldPathProgress = useTransform(scrollProgress, [0.1, 0.45], [0, 1]);
    const shieldOpacity = useTransform(scrollProgress, [0.1, 0.4], [0, 1]);

    const [radarBlips, setRadarBlips] = useState<Array<{ id: number; delay: number; angle: number }>>([]);
    const [hudLabels, setHudLabels] = useState<Array<{ id: number; text: string; top: string; left: string; delay: number }>>([]);

    useEffect(() => {
        setRadarBlips(Array.from({ length: 3 }, (_, i) => ({
            id: i,
            delay: i * 1.5,
            angle: Math.random() * 360
        })));
        
        setHudLabels([
            { id: 1, text: 'THREAT: 0%', top: '20%', left: '80%', delay: 0 },
            { id: 2, text: 'SHIELD: ON', top: '75%', left: '85%', delay: 1 },
            { id: 3, text: 'SCAN: DONE', top: '50%', left: '5%',  delay: 2 }
        ]);
    }, []);

    // Outer Shield Plate Geometry
    const innerShieldPath = "M100 30 L160 55 L160 115 Q160 180 100 215 Q40 180 40 115 L40 55 Z";
    const outerShieldPath = "M100 20 L170 50 L170 120 Q170 190 100 230 Q30 190 30 120 L30 50 Z";

    return (
        <motion.div 
            className="relative w-full h-full max-w-[450px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
        >
            {/* Ambient Background Glow mapping to scroll */}
            <motion.div 
                className="absolute inset-1/4 bg-[#D40114]/15 blur-[80px] rounded-full mix-blend-screen pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                transition={{ duration: 2, ease: "easeOut" }}
            />

            <motion.div
                className="w-full h-full relative flex items-center justify-center"
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            >
                <svg
                    viewBox="0 0 200 250"
                    className="w-[85%] h-[85%] absolute inset-0 m-auto pointer-events-none"
                    fill="none"
                    style={{ overflow: 'visible' }}
                >
                    <defs>
                        {/* Deep Glass Holographic Gradients */}
                        <linearGradient id="shieldFill" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#FF3B30" stopOpacity="0.25" />
                            <stop offset="50%" stopColor="#D40114" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#800000" stopOpacity="0.15" />
                        </linearGradient>

                        {/* Drop shadow filters for layer depth */}
                        <filter id="glow-shield" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#D40114" floodOpacity="0.5" />
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <motion.g 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {/* Outbound Radar Sweeps (Orbiting Rings) */}
                        <motion.ellipse
                            cx="100" cy="125" rx="140" ry="80"
                            fill="none"
                            stroke="#D40114"
                            strokeWidth="0.5"
                            strokeDasharray="4 8"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                            style={{ transformOrigin: "100px 125px", opacity: 0.3 }}
                        />
                        <motion.ellipse
                            cx="100" cy="125" rx="160" ry="60"
                            fill="none"
                            stroke="#FF3B30"
                            strokeWidth="1"
                            strokeDasharray="10 30"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                            style={{ transformOrigin: "100px 125px", opacity: 0.4 }}
                        />

                        {/* Outer Holographic Forcefield Polygon */}
                        <path
                            d={outerShieldPath}
                            fill="#000"
                            opacity="0.2"
                            filter="blur(15px)"
                        />
                        <path
                            d={outerShieldPath}
                            fill="url(#shieldFill)"
                            stroke="#FF3B30"
                            strokeWidth="1.5"
                            strokeOpacity="0.6"
                            filter="url(#glow-shield)"
                            style={{ transform: 'translateZ(10px)' }}
                        />

                        {/* Inner Density Core Polygon */}
                        <path
                            d={innerShieldPath}
                            fill="none"
                            stroke="#D40114"
                            strokeWidth="1.5"
                            strokeOpacity="0.3"
                            strokeDasharray="2 2"
                            style={{ transform: 'translateZ(30px)' }}
                        />

                        {/* Orbiting Radar Blips on the outer perimeter */}
                        {radarBlips.map(blip => (
                            <motion.circle
                                key={`blip-${blip.id}`}
                                cx={100 + 140 * Math.cos(blip.angle)}
                                cy={125 + 80 * Math.sin(blip.angle)}
                                r="3"
                                fill="#FFFFFF"
                                filter="url(#glow-shield)"
                                animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: blip.delay }}
                            />
                        ))}
                    </motion.g>

                    {/* Central Authorization Core (Checkmark) rendered dynamically on scroll */}
                    <motion.g style={{ transform: 'translateZ(50px)' }}>
                        {/* Outer confirmation pulse ring */}
                        <motion.circle
                            cx="100" cy="125" r="30"
                            fill="none"
                            stroke="#FF3B30"
                            strokeWidth="0.5"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                            animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
                            style={{ transformOrigin: "100px 125px" }}
                        />
                        <motion.circle
                            cx="100" cy="125" r="28"
                            fill="none"
                            stroke="#FF3B30"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'linear', opacity: { duration: 1, delay: 0.5 } }}
                            style={{ transformOrigin: "100px 125px" }}
                        />
                        
                        {/* The Checkmark Path */}
                        <motion.path
                            d="M85 125 L95 135 L120 110"
                            stroke="#FFFFFF"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                        />
                    </motion.g>
                </svg>

                {/* Orbiting HTML Telemetry Overlay Cards */}
                {hudLabels.map((lbl) => (
                    <motion.div
                        key={lbl.id}
                        className="absolute z-20"
                        style={{ top: lbl.top, left: lbl.left }}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + lbl.delay * 0.3 }}
                    >
                        <motion.div 
                            className="flex items-center gap-2 backdrop-blur-md bg-[#000000]/70 px-3 py-1.5 rounded-sm border border-[#D40114]/40 shadow-[0_0_15px_rgba(212,1,20,0.2)]"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: lbl.delay * 0.5, ease: "easeInOut" }}
                        >
                            <div className="w-1.5 h-1.5 bg-[#FF3B30] rounded-none animate-pulse" />
                            <span className="font-mono text-[9px] text-[#FF3B30] leading-none tracking-widest font-bold">
                                {lbl.text}
                            </span>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Subsurface projection shadow/reflection */}
            <motion.div 
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-6 bg-[#D40114]/15 blur-[25px] rounded-full pointer-events-none transform scale-y-50" 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                transition={{ duration: 1, delay: 0.2 }}
            />
        </motion.div>
    );
}
