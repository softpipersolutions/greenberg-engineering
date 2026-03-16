'use client';

import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Core content sequences
const MANIFESTO_LINES = [
    { text: "We don't just build", highlight: false },
    { text: "structures.", highlight: false },
    { text: "We architect", highlight: false },
    { text: "possibilities.", highlight: true, color: '#2C5DA9' }, // Infra Blue
    { text: "We engineer", highlight: false },
    { text: "dreams.", highlight: true, color: '#528940' }, // ESG Green
    { text: "We CREATE", highlight: true, color: 'gradient' },
    { text: "THE FUTURE.", highlight: true, color: 'future' }, // Climax
];

// Re-ordered core sector colors for the climax
const SECTOR_COLORS = [
    '#2C5DA9', // Infrastructure - Blue
    '#528940', // ESG - Green
    '#8D68AA', // Systems - Purple
    '#EC954E', // Skills - Orange
    '#D40114', // Safety - Red
];

export default function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentLine, setCurrentLine] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Spring-loaded damping for 60FPS precision
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 40, // Increased damping for less rubber-banding, feeling heavier/more industrial
        restDelta: 0.001,
    });

    // Track which line should be visible based on scroll (for timeline HUD)
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
            style={{ height: '400vh' }} // Extended scroll buffer
        >
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center bg-[#050505]">
                {/* 1. Hardware-Accelerated Cybernetic Grid Background */}
                <BackgroundGrid progress={smoothProgress} />

                {/* 2. Main Content Wrapper */}
                <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-12 flex flex-col items-center justify-center">
                    
                    {/* Top Identity Label */}
                    <motion.div
                        className="absolute top-12 md:top-24 w-full text-center"
                        style={{
                            opacity: useTransform(smoothProgress, [0, 0.05, 0.8, 0.9], [0, 1, 1, 0]),
                            y: useTransform(smoothProgress, [0, 0.05], [20, 0]),
                        }}
                    >
                        <p className="font-body text-xs md:text-sm tracking-[0.4em] text-stark/30 uppercase">
                            Our Manifesto
                        </p>
                    </motion.div>

                    {/* 3. 3D Typography Matrix */}
                    <div className="relative w-full min-h-[400px] flex items-center justify-center">
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
                </div>

                {/* 4. Precision Telemetry Timeline (Right HUD) */}
                <TelemetryHUD currentLine={currentLine} totalLines={MANIFESTO_LINES.length} progress={smoothProgress} />
            </div>
        </section>
    );
}

// ----------------------------------------------------------------------
// 1. High-Performance Background Grid
// ----------------------------------------------------------------------
function BackgroundGrid({ progress }: { progress: MotionValue<number> }) {
    // We map scroll to a subtle parallax tracking motion on the grid points
    const yOffset = useTransform(progress, [0, 1], [0, 150]);
    const scale = useTransform(progress, [0, 1], [1, 1.2]);
    const gridOpacity = useTransform(progress, [0.8, 1], [0.15, 0]); // Fades out before Climax

    return (
        <motion.div 
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: gridOpacity, scale }}
        >
            {/* Dark vignette to create depth focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)] z-10" />
            
            <motion.div 
                className="absolute inset-[-50%] w-[200%] h-[200%]"
                style={{ y: yOffset }}
            >
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="cyber-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#cyber-grid)" />
                </svg>
            </motion.div>
        </motion.div>
    );
}

// ----------------------------------------------------------------------
// 2. 3D Typography Engine (Split Letters/Words)
// ----------------------------------------------------------------------
interface ManifestoLineProps {
    line: { text: string; highlight: boolean; color?: string };
    index: number;
    totalLines: number;
    progress: MotionValue<number>;
}

function ManifestoLine({ line, index, totalLines, progress }: ManifestoLineProps) {
    const segmentSize = 1 / totalLines;
    const start = index * segmentSize;
    const peak = start + segmentSize * 0.4;
    const end = start + segmentSize;

    // 3D Depth Transforms
    // Z-axis simulation via scale & blur
    const zScale = useTransform(
        progress,
        [start, start + segmentSize * 0.2, peak, end - segmentSize * 0.2, end],
        [0.85, 1, 1.05, 1.15, index === totalLines - 1 ? 1 : 1.3]
    );

    const opacity = useTransform(
        progress,
        [start, start + segmentSize * 0.15, peak, end - segmentSize * 0.15, end],
        [0, 1, 1, 0.8, index === totalLines - 1 ? 1 : 0]
    );

    const y = useTransform(
        progress,
        [start, start + segmentSize * 0.2, peak, end],
        [40, 0, 0, index === totalLines - 1 ? 0 : -80]
    );

    const blurNum = useTransform(
        progress,
        [start, start + segmentSize * 0.15, peak, end - segmentSize * 0.15, end],
        [12, 0, 0, 4, index === totalLines - 1 ? 0 : 20]
    );
    const filter = useTransform(blurNum, (v) => `blur(${v}px)`);

    // Text splitting for words
    const words = line.text.split(' ');

    if (line.color === 'future') {
        return (
            <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-auto"
                style={{ opacity, y, scale: zScale, filter }}
            >
                <InteractiveFutureText progress={progress} peak={peak} />
            </motion.div>
        );
    }

    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity, y, scale: zScale, filter }}
        >
            <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center leading-tight flex flex-wrap justify-center gap-[0.3em]">
                {words.map((word, wIdx) => {
                    const wordColor = getWordColor(line, wIdx);
                    
                    return (
                        <span 
                            key={wIdx} 
                            style={wordColor.style}
                            className={wordColor.className}
                        >
                            {word}
                        </span>
                    );
                })}
            </h2>
        </motion.div>
    );
}

// Helper to colorize specific words or lines based on the manifesto config
function getWordColor(line: { text: string; highlight: boolean; color?: string }, wordIndex: number) {
    if (!line.highlight) {
        return { className: 'text-stark/70 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]' };
    }
    if (line.color === 'gradient') {
        return { className: 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent' };
    }
    // Solid sector colors
    return { 
        className: 'text-transparent bg-clip-text',
        style: {
            backgroundImage: `linear-gradient(to bottom right, ${line.color}, #ffffff)`,
            filter: `drop-shadow(0px 0px 20px ${line.color}40)`
        }
    };
}

// ----------------------------------------------------------------------
// 3. The Climax ("THE FUTURE.") Interactive Component
// ----------------------------------------------------------------------
function InteractiveFutureText({ progress, peak }: { progress: MotionValue<number>, peak: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    // Track mouse relative to center of the text core
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate distance from center (-1 to 1)
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        
        setMousePos({ x, y });
    };

    // Magnetic transforms
    const smoothX = useSpring(isHovered ? mousePos.x * 20 : 0, { stiffness: 100, damping: 25 });
    const smoothY = useSpring(isHovered ? mousePos.y * 20 : 0, { stiffness: 100, damping: 25 });
    
    // Chromatic Aberration spreads heavily on hover
    const aberrationR = useSpring(isHovered ? mousePos.x * 12 : 0, { stiffness: 120, damping: 20 });
    const aberrationB = useSpring(isHovered ? mousePos.x * -12 : 0, { stiffness: 120, damping: 20 });

    // The entire room ignites when progress passes the text's peak
    const igniteOpacity = useTransform(progress, [peak, 1], [0, 1]);

    return (
        <div 
            ref={containerRef}
            className="relative cursor-none select-none w-full h-full flex items-center justify-center z-50"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Climax Room Ignition - Sector Convergence Glow */}
            <motion.div 
                className="absolute inset-[-100%] rounded-full pointer-events-none"
                style={{ 
                    opacity: igniteOpacity,
                    background: `conic-gradient(from 0deg, ${SECTOR_COLORS[0]}40, ${SECTOR_COLORS[1]}40, ${SECTOR_COLORS[2]}40, ${SECTOR_COLORS[3]}40, ${SECTOR_COLORS[4]}40, ${SECTOR_COLORS[0]}40)`,
                    filter: 'blur(80px)',
                    scale: useTransform(progress, [peak, 1], [0.5, 1.2])
                }}
            />

            <motion.div 
                className="relative flex items-center justify-center p-20"
                style={{ x: smoothX, y: smoothY }}
            >
                {/* Layer 1: Red Chromatic Split */}
                <motion.h2 
                    className="absolute inset-0 flex items-center justify-center font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-center leading-tight tracking-tighter text-[#FF3B30] mix-blend-screen opacity-70"
                    style={{ x: aberrationR }}
                >
                    THE<br />FUTURE.
                </motion.h2>

                {/* Layer 2: Blue Chromatic Split */}
                <motion.h2 
                    className="absolute inset-0 flex items-center justify-center font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-center leading-tight tracking-tighter text-[#2C5DA9] mix-blend-screen opacity-70"
                    style={{ x: aberrationB }}
                >
                    THE<br />FUTURE.
                </motion.h2>

                {/* Layer 3: Solid Core White Text */}
                <motion.h2 
                    className="relative font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-center leading-tight tracking-tighter text-stark"
                    style={{
                        textShadow: isHovered ? '0px 0px 30px rgba(255,255,255,0.4)' : '0px 0px 10px rgba(255,255,255,0.1)'
                    }}
                >
                    THE<br />FUTURE.
                </motion.h2>
            </motion.div>
        </div>
    );
}

// ----------------------------------------------------------------------
// 4. Precision Telemetry Timeline HUD
// ----------------------------------------------------------------------
function TelemetryHUD({ currentLine, totalLines, progress }: { currentLine: number, totalLines: number, progress: MotionValue<number> }) {
    const laserHeight = useTransform(progress, [0, 1], ['0%', '100%']);

    return (
        <div className="absolute right-4 md:right-12 top-1/4 bottom-1/4 w-12 flex flex-col items-center pointer-events-none z-20">
            {/* The Track */}
            <div className="relative w-[2px] h-full bg-white/5 rounded-full overflow-hidden">
                {/* The Laser Fill */}
                <motion.div
                    className="w-full bg-gradient-to-b from-transparent via-[#FF3B30] to-[#FF3B30]"
                    style={{ height: laserHeight }}
                />
            </div>
            
            {/* The Markers */}
            <div className="absolute inset-0 flex flex-col justify-between items-center py-[2px]">
                {Array.from({ length: totalLines }).map((_, i) => (
                    <div key={i} className="relative flex items-center justify-center">
                        {/* Tick mark */}
                        <motion.div 
                            className="w-3 h-[2px] rounded-full transition-colors duration-300"
                            style={{
                                backgroundColor: currentLine >= i ? '#FFFFFF' : 'rgba(255,255,255,0.2)',
                                boxShadow: currentLine === i ? '0 0 10px #FFFFFF' : 'none',
                            }}
                        />
                        {/* Active Label Index */}
                        {currentLine === i && (
                            <motion.span 
                                className="absolute right-6 font-mono text-[10px] text-stark drop-shadow-md"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                0{i+1}
                            </motion.span>
                        )}
                    </div>
                ))}
            </div>
            
            <div className="absolute -bottom-8 font-mono text-[9px] text-stark/40 tracking-widest text-right rotate-180" style={{ writingMode: 'vertical-rl' }}>
                SCROLL SEQUENCE
            </div>
        </div>
    );
}
