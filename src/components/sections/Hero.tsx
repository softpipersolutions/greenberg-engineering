'use client';

import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

/*
 * The keyword wall: a dense vertical list that scrolls upward in an infinite loop.
 * "GREENBERG ENGINEERING" is rendered as a separate sticky overlay, centered vertically.
 * The container has a CSS 3D perspective tilt to curve the list in space.
 *
 * Each keyword has: text, size class, opacity, and optional indent for organic feel.
 */
/* Keywords that loop — hero item removed (it's now a fixed overlay) */
const WALL_ITEMS = [
    { text: 'Audit & Feedback', style: 'italic', opacity: 0.15 },
    { text: 'Operational Excellence', style: 'italic', opacity: 0.2 },
    { text: 'Pollution Control', style: 'italic', opacity: 0.2 },
    { text: 'Civic Engineering', style: 'italic', opacity: 0.3 },
    { text: 'Training & Skills', style: 'italic', opacity: 0.3 },
    { text: 'Risk Engineering', style: 'italic', opacity: 0.35 },
    { text: 'Life-Cycle Thinking', style: 'italic', opacity: 0.4 },
    { text: 'ESG', style: 'bold', opacity: 0.5 },
    { text: 'Codified Memory', style: 'italic', opacity: 0.5 },
    { text: 'Health & Safety', style: 'italic', opacity: 0.55 },
    { text: 'Infrastructure', style: 'italic', opacity: 0.55 },
    { text: 'Sustainability', style: 'italic', opacity: 0.5 },
    { text: 'Human-First Design', style: 'italic', opacity: 0.45 },
    { text: 'Circular Economy', style: 'italic', opacity: 0.4 },
    { text: 'De-Centralization', style: 'italic', opacity: 0.35 },
    { text: 'Eco-Systems', style: 'italic', opacity: 0.25 },
    { text: 'Quality of Life', style: 'italic', opacity: 0.25 },
    { text: 'Waste Management', style: 'italic', opacity: 0.2 },
    { text: 'System Integration', style: 'italic', opacity: 0.2 },
    { text: 'Urban Resilience', style: 'italic', opacity: 0.15 },
    { text: 'Emergency Response', style: 'italic', opacity: 0.15 },
    { text: 'Standards & Codes', style: 'italic', opacity: 0.1 },
];

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
    const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scrollShift = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

    // Mouse parallax for background glows
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            mouseX.set((e.clientX / window.innerWidth) - 0.5);
            mouseY.set((e.clientY / window.innerHeight) - 0.5);
        };
        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }, [mouseX, mouseY]);

    return (
        <section ref={containerRef} className="relative min-h-screen bg-void overflow-hidden">
            {/* ═══ AMBIENT GLOWS ═══ */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-[-10%] left-[25%] w-[900px] h-[900px] rounded-full blur-[180px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(236,149,78,0.14) 0%, rgba(44,93,169,0.05) 50%, transparent 70%)',
                        x: useTransform(mouseX, [-0.5, 0.5], [-50, 50]),
                        y: useTransform(mouseY, [-0.5, 0.5], [-50, 50]),
                    }}
                />
                <motion.div
                    className="absolute top-[10%] right-[0%] w-[600px] h-[700px] rounded-full blur-[140px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(44,93,169,0.1) 0%, transparent 70%)',
                        x: useTransform(mouseX, [-0.5, 0.5], [30, -30]),
                    }}
                />
                <div
                    className="absolute bottom-[0%] left-[35%] w-[500px] h-[500px] rounded-full blur-[120px]"
                    style={{ background: 'radial-gradient(circle, rgba(141,104,170,0.06) 0%, transparent 70%)' }}
                />
            </div>

            {/* ═══ MAIN LAYOUT ═══ */}
            <motion.div className="relative z-10 min-h-screen flex flex-col md:flex-row" style={{ opacity: fadeOut }}>

                {/* ─── LEFT: The Keyword Wall ─── */}
                <div className="relative w-full md:w-[58%] min-h-[55vh] md:min-h-screen overflow-hidden">

                    {/* 3D Perspective Container — tilts the whole wall in 3D space */}
                    <div
                        className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_2%,black_12%,black_88%,transparent_98%)]"
                        style={{
                            perspective: '800px',
                            perspectiveOrigin: '30% 50%',
                        }}
                    >
                        {/* The scrolling column — rotated slightly in 3D for depth curve */}
                        <motion.div
                            className="flex flex-col items-start pl-4 md:pl-8 lg:pl-12"
                            style={{
                                transformStyle: 'preserve-3d',
                                rotateY: 12,
                                transformOrigin: 'left center',
                            }}
                            animate={{ y: ['0%', '-50%'] }}
                            transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
                        >
                            {/* Render the wall twice for seamless loop */}
                            {[...WALL_ITEMS, ...WALL_ITEMS].map((item, i) => (
                                <div
                                    key={i}
                                    className="leading-[1.15] tracking-tight whitespace-nowrap select-none py-[0.15em] font-heading font-medium text-[1.6rem] sm:text-3xl md:text-4xl lg:text-[2.8rem] text-stark italic"
                                    style={{
                                        opacity: item.opacity,
                                        paddingLeft: `${(i % 5) * 0.5}rem`,
                                    }}
                                >
                                    {item.text}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ─── Sticky GREENBERG ENGINEERING overlay ─── */}
                    <div className="absolute inset-0 flex items-center justify-start pointer-events-none z-10">
                        {/* Vignette glow behind the text for contrast */}
                        <div
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[180px] md:h-[220px]"
                            style={{
                                background: 'radial-gradient(ellipse 100% 100% at 30% 50%, rgba(10,5,15,0.85) 0%, rgba(10,5,15,0.5) 40%, transparent 70%)',
                            }}
                        />
                        <motion.div
                            className="relative pl-4 md:pl-8 lg:pl-12"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                        >
                            <h1 className="font-heading font-bold text-[2rem] sm:text-4xl md:text-5xl lg:text-[4rem] text-stark leading-[1.15] tracking-tight whitespace-nowrap select-none">
                                GREENBERG ENGINEERING
                            </h1>
                        </motion.div>
                    </div>
                </div>

                {/* ─── RIGHT: Identity + CTAs ─── */}
                <motion.div
                    className="w-full md:w-[42%] flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 md:py-0"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.6 }}
                    style={{ y: scrollShift }}
                >
                    {/* GE Monogram */}
                    <motion.div className="mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                        <div className="font-heading font-bold text-5xl md:text-6xl text-stark tracking-tighter mb-3">GE</div>
                        <div className="flex gap-1.5">
                            {[
                                { c: '#2C5DA9', l: 'Infrastructure' },
                                { c: '#33644A', l: 'ESG' },
                                { c: '#8D68AA', l: 'Systems' },
                                { c: '#EC954E', l: 'Skills' },
                                { c: '#D40114', l: 'Safety' },
                            ].map((d, i) => (
                                <motion.div
                                    key={i}
                                    className="w-2.5 h-2.5 rounded-full"
                                    style={{ backgroundColor: d.c }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1 + i * 0.08 }}
                                    title={d.l}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Tagline */}
                    <motion.h2
                        className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-stark leading-[1.1] mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        CREATE THE<br />FUTURE<span className="text-[#EC954E]">.</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="mb-8"
                    >
                        <span
                            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight"
                            style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.3)', WebkitTextFillColor: 'transparent' }}
                        >
                            WITH US
                        </span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className="font-body text-base md:text-lg text-stark/45 mb-10 max-w-sm leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                    >
                        Engineering solutions that defy gravity. Five pillars of excellence transforming industries across the globe.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.8 }}
                    >
                        <MagneticButton
                            href="#sectors"
                            className="px-8 py-4 bg-stark text-void font-heading text-xs uppercase tracking-[0.15em] hover:bg-white/90 transition-colors"
                        >
                            Explore Sectors
                        </MagneticButton>
                        <MagneticButton
                            href="#contact"
                            className="px-8 py-4 border border-white/20 text-stark font-heading text-xs uppercase tracking-[0.15em] hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                        >
                            Start a Project <ArrowRight size={14} />
                        </MagneticButton>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* ═══ SCROLL INDICATOR ═══ */}
            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
            >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-stark/25">Scroll to Explore</span>
                <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
                    <ArrowDown size={14} className="text-stark/25" />
                </motion.div>
            </motion.div>
        </section>
    );
}
