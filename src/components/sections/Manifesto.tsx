'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const MANIFESTO_LINES = [
    { text: "We don't just build", highlight: false },
    { text: "structures.", highlight: false },
    { text: "We architect", highlight: false },
    { text: "possibilities.", highlight: true, color: '#2C5DA9' },
    { text: "We engineer", highlight: false },
    { text: "dreams.", highlight: true, color: '#528940' },
    { text: "We CREATE", highlight: true, color: 'gradient' },
    { text: "THE FUTURE.", highlight: true, color: 'future' },
];

export default function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentLine, setCurrentLine] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Smooth spring animation for scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Track which line should be visible based on scroll
    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (value) => {
            const lineIndex = Math.floor(value * MANIFESTO_LINES.length);
            setCurrentLine(Math.min(lineIndex, MANIFESTO_LINES.length - 1));
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section
            ref={containerRef}
            id="manifesto"
            className="relative bg-void"
            style={{ height: '400vh' }} // Long scroll area for smooth animation
        >
            {/* Sticky container */}
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
                {/* Animated background elements */}
                <BackgroundElements progress={smoothProgress} />

                {/* Main content */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
                    {/* Label */}
                    <motion.p
                        className="font-body text-sm tracking-[0.3em] text-stark/40 uppercase mb-8 md:mb-12"
                        style={{
                            opacity: useTransform(smoothProgress, [0, 0.05], [0, 1]),
                            y: useTransform(smoothProgress, [0, 0.05], [30, 0]),
                        }}
                    >
                        Our Manifesto
                    </motion.p>

                    {/* Text display area */}
                    <div className="relative min-h-[300px] md:min-h-[400px]">
                        {MANIFESTO_LINES.map((line, index) => (
                            <ManifestoLine
                                key={index}
                                line={line}
                                index={index}
                                totalLines={MANIFESTO_LINES.length}
                                progress={smoothProgress}
                            />
                        ))}
                    </div>

                    {/* Progress indicator */}
                    <motion.div
                        className="mt-16 md:mt-24 flex items-center gap-4"
                        style={{
                            opacity: useTransform(smoothProgress, [0.1, 0.2], [0, 1]),
                        }}
                    >
                        <div className="flex gap-2">
                            {MANIFESTO_LINES.map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-8 h-1 rounded-full"
                                    style={{
                                        backgroundColor: i <= currentLine ? '#FFFFFF' : 'rgba(255,255,255,0.2)',
                                        scaleX: i === currentLine ? 1.5 : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            ))}
                        </div>
                        <span className="font-body text-sm text-stark/40 ml-4">Since 1999</span>
                    </motion.div>
                </div>

                {/* Side geometric elements */}
                <GeometricAccents progress={smoothProgress} />
            </div>
        </section>
    );
}

interface ManifestoLineProps {
    line: { text: string; highlight: boolean; color?: string };
    index: number;
    totalLines: number;
    progress: any;
}

function ManifestoLine({ line, index, totalLines, progress }: ManifestoLineProps) {
    const segmentSize = 1 / totalLines;
    const start = index * segmentSize;
    const peak = start + segmentSize * 0.5;
    const end = start + segmentSize;

    // Calculate transforms based on scroll position
    const opacity = useTransform(
        progress,
        [start, start + segmentSize * 0.2, peak, end - segmentSize * 0.1, end],
        [0, 1, 1, 1, index === totalLines - 1 ? 1 : 0]
    );

    const y = useTransform(
        progress,
        [start, start + segmentSize * 0.3, peak, end],
        [80, 0, 0, index === totalLines - 1 ? 0 : -50]
    );

    const scale = useTransform(
        progress,
        [start, peak, end],
        [0.9, 1, index === totalLines - 1 ? 1 : 0.95]
    );

    const blur = useTransform(
        progress,
        [start, start + segmentSize * 0.2, peak, end - segmentSize * 0.1, end],
        [10, 0, 0, 0, index === totalLines - 1 ? 0 : 5]
    );

    // Text style based on highlight
    const getTextStyle = () => {
        if (!line.highlight) {
            return 'text-stark/60';
        }
        if (line.color === 'gradient') {
            return 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent';
        }
        if (line.color === 'future') {
            return ''; // Handled by special component
        }
        return '';
    };

    // Special rendering for "THE FUTURE." line
    if (line.color === 'future') {
        return (
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    opacity,
                    y,
                    scale,
                    filter: useTransform(blur, (v) => `blur(${v}px)`),
                }}
            >
                <InteractiveFutureText />
            </motion.div>
        );
    }

    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
                opacity,
                y,
                scale,
                filter: useTransform(blur, (v) => `blur(${v}px)`),
            }}
        >
            <h2
                className={`font-heading text-4xl md:text-6xl lg:text-8xl font-bold text-center leading-tight ${getTextStyle()}`}
                style={line.highlight && line.color !== 'gradient' && line.color !== 'future' ? { color: line.color } : undefined}
            >
                {line.text}
            </h2>
        </motion.div>
    );
}

// Interactive "THE FUTURE." text with all-sector gradient and cursor light
function InteractiveFutureText() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    // Smooth mouse position
    const smoothX = useSpring(mousePos.x, { stiffness: 150, damping: 20 });
    const smoothY = useSpring(mousePos.y, { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });
    };

    // All 5 sector colors
    const sectorColors = [
        '#2C5DA9', // Infrastructure - Blue
        '#528940', // ESG - Green
        '#8D68AA', // Systems - Purple
        '#EC954E', // Skills - Orange
        '#D40114', // Safety - Red
    ];

    return (
        <div
            ref={containerRef}
            className="relative cursor-pointer select-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Cursor-following spotlight glow - only on hover */}
            {isHovered && (
                <motion.div
                    className="absolute pointer-events-none"
                    style={{
                        width: 250,
                        height: 250,
                        left: `${smoothX.get()}%`,
                        top: `${smoothY.get()}%`,
                        x: '-50%',
                        y: '-50%',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 50%)',
                        filter: 'blur(30px)',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                />
            )}

            {/* Main text container */}
            <div className="relative">
                {/* Shadow/glow layer */}
                <motion.h2
                    className="absolute inset-0 font-heading text-4xl md:text-6xl lg:text-8xl font-bold text-center leading-tight"
                    style={{
                        background: `linear-gradient(135deg, ${sectorColors.join(', ')})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundSize: '300% 300%',
                        filter: 'blur(20px)',
                        opacity: 0.5,
                    }}
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    THE<br />FUTURE.
                </motion.h2>

                {/* Main gradient text */}
                <motion.h2
                    className="relative font-heading text-4xl md:text-6xl lg:text-8xl font-bold text-center leading-tight"
                    style={{
                        background: `linear-gradient(135deg, ${sectorColors.join(', ')})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundSize: '300% 300%',
                    }}
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    THE<br />FUTURE.
                </motion.h2>

                {/* Interactive brightness on hover - applied to text only */}
                {isHovered && (
                    <motion.h2
                        className="absolute inset-0 font-heading text-4xl md:text-6xl lg:text-8xl font-bold text-center leading-tight pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at ${smoothX.get()}% ${smoothY.get()}%, rgba(255,255,255,0.5) 0%, transparent 40%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            mixBlendMode: 'overlay',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        THE<br />FUTURE.
                    </motion.h2>
                )}
            </div>

            {/* Floating particles around text */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full pointer-events-none"
                    style={{
                        background: sectorColors[i % sectorColors.length],
                        left: `${10 + i * 15}%`,
                        top: `${20 + (i % 2) * 60}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, i % 2 === 0 ? 10 : -10, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.2,
                    }}
                />
            ))}
        </div>
    );
}

function BackgroundElements({ progress }: { progress: any }) {
    // Rotating quotes
    const quoteRotate = useTransform(progress, [0, 1], [0, 360]);
    const quoteScale = useTransform(progress, [0, 0.5, 1], [0.5, 1, 0.5]);
    const quoteOpacity = useTransform(progress, [0, 0.2, 0.8, 1], [0.02, 0.05, 0.05, 0.02]);

    // Floating particles
    const particleY1 = useTransform(progress, [0, 1], [100, -100]);
    const particleY2 = useTransform(progress, [0, 1], [50, -150]);
    const particleY3 = useTransform(progress, [0, 1], [150, -50]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large rotating quote mark */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[40rem] text-white select-none"
                style={{
                    rotate: quoteRotate,
                    scale: quoteScale,
                    opacity: quoteOpacity,
                }}
            >
                "
            </motion.div>

            {/* Gradient orbs that move with scroll */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(44, 93, 169, 0.15) 0%, transparent 70%)',
                    left: '10%',
                    top: '20%',
                    y: particleY1,
                    scale: useTransform(progress, [0, 0.5, 1], [0.8, 1.2, 0.8]),
                }}
            />
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(141, 104, 170, 0.15) 0%, transparent 70%)',
                    right: '15%',
                    top: '40%',
                    y: particleY2,
                    scale: useTransform(progress, [0, 0.5, 1], [1, 0.8, 1.2]),
                }}
            />
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(82, 137, 64, 0.12) 0%, transparent 70%)',
                    left: '30%',
                    bottom: '10%',
                    y: particleY3,
                }}
            />

            {/* Animated lines */}
            <motion.div
                className="absolute left-0 top-1/4 w-full h-[1px]"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    scaleX: useTransform(progress, [0.1, 0.3], [0, 1]),
                    opacity: useTransform(progress, [0.1, 0.3, 0.7, 0.9], [0, 0.5, 0.5, 0]),
                }}
            />
            <motion.div
                className="absolute left-0 bottom-1/4 w-full h-[1px]"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    scaleX: useTransform(progress, [0.2, 0.4], [0, 1]),
                    opacity: useTransform(progress, [0.2, 0.4, 0.6, 0.8], [0, 0.5, 0.5, 0]),
                }}
            />
        </div>
    );
}

function GeometricAccents({ progress }: { progress: any }) {
    // Left side elements
    const leftY = useTransform(progress, [0, 1], [200, -200]);
    const rightY = useTransform(progress, [0, 1], [-100, 300]);

    return (
        <>
            {/* Left side geometric shapes */}
            <motion.div
                className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 flex flex-col gap-6"
                style={{ y: leftY }}
            >
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-2 h-2 border border-white/20"
                        style={{
                            rotate: useTransform(progress, [0, 1], [0, 180 + i * 60]),
                            opacity: useTransform(progress, [i * 0.1, i * 0.1 + 0.2], [0, 0.5]),
                        }}
                    />
                ))}
            </motion.div>

            {/* Right side geometric shapes */}
            <motion.div
                className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 flex flex-col gap-6"
                style={{ y: rightY }}
            >
                {[0, 1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="w-3 h-3 rounded-full border border-white/20"
                        style={{
                            scale: useTransform(progress, [i * 0.1, i * 0.1 + 0.3], [0, 1]),
                            opacity: useTransform(progress, [i * 0.1, i * 0.1 + 0.2], [0, 0.4]),
                        }}
                    />
                ))}
            </motion.div>

            {/* Corner brackets */}
            <motion.div
                className="absolute top-20 left-20 w-20 h-20 border-l-2 border-t-2 border-white/10"
                style={{
                    scale: useTransform(progress, [0, 0.2], [0.5, 1]),
                    opacity: useTransform(progress, [0, 0.2], [0, 0.5]),
                }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-20 h-20 border-r-2 border-b-2 border-white/10"
                style={{
                    scale: useTransform(progress, [0.8, 1], [0.5, 1]),
                    opacity: useTransform(progress, [0.8, 1], [0, 0.5]),
                }}
            />

            {/* Scroll progress line on the side */}
            <motion.div
                className="absolute right-4 md:right-8 top-1/4 w-[2px] h-1/2 bg-white/10 rounded-full overflow-hidden"
            >
                <motion.div
                    className="w-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full"
                    style={{
                        height: useTransform(progress, [0, 1], ['0%', '100%']),
                    }}
                />
            </motion.div>
        </>
    );
}
