'use client';

import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import MagneticButton from '@/components/ui/MagneticButton';
import { ArrowDown } from 'lucide-react';

const HERO_TEXT = 'CREATE THE FUTURE';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    // Mouse position for 3D effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 100 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
                mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Split text into words
    const words = HERO_TEXT.split(' ');

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-void"
        >
            {/* Animated grid background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
                        backgroundSize: '60px 60px',
                    }}
                    animate={{
                        backgroundPosition: ['0px 0px', '60px 60px'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            </div>

            {/* Gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
                    style={{
                        background: 'radial-gradient(circle, #2C5DA9 0%, transparent 70%)',
                    }}
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
                    style={{
                        background: 'radial-gradient(circle, #8D68AA 0%, transparent 70%)',
                    }}
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Main content with parallax */}
            <motion.div
                className="relative z-10 px-6 md:px-12 lg:px-24 text-center"
                style={{ opacity, scale, y }}
            >
                {/* 3D Text container */}
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: 'preserve-3d',
                        perspective: 1000,
                    }}
                >
                    {/* Subtitle */}
                    <motion.p
                        className="font-body text-sm md:text-base tracking-[0.5em] text-stark/40 uppercase mb-6 md:mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Greenberg Engineering
                    </motion.p>

                    {/* Main headline */}
                    <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] text-stark leading-[0.85] tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span key={wordIndex} className="inline-block mr-[0.15em]">
                                {word.split('').map((char, charIndex) => {
                                    const i = wordIndex * 10 + charIndex;
                                    return (
                                        <motion.span
                                            key={charIndex}
                                            className="inline-block"
                                            initial={{ y: 150, opacity: 0, rotateX: -90 }}
                                            animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.8 + i * 0.04,
                                                ease: [0.25, 0.46, 0.45, 0.94],
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    );
                                })}
                            </span>
                        ))}
                    </h1>

                    {/* "WITH US" with outline style */}
                    <motion.div
                        className="mt-4 md:mt-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.8 }}
                    >
                        <span
                            className="font-heading font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight"
                            style={{
                                WebkitTextStroke: '2px rgba(255,255,255,0.5)',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            WITH US
                        </span>
                    </motion.div>
                </motion.div>

                {/* Subtext */}
                <motion.p
                    className="mt-8 md:mt-12 text-base md:text-xl lg:text-2xl text-stark/50 font-body max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.2 }}
                >
                    Engineering solutions that defy gravity. Five pillars of excellence
                    transforming industries across the globe.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.5 }}
                >
                    <MagneticButton
                        href="#sectors"
                        className="px-8 py-4 border-2 border-stark font-heading text-sm uppercase tracking-widest"
                    >
                        Explore Sectors
                    </MagneticButton>
                    <MagneticButton
                        href="#contact"
                        className="px-8 py-4 border-2 border-stark/30 font-heading text-sm uppercase tracking-widest"
                    >
                        Start a Project
                    </MagneticButton>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
            >
                <motion.span
                    className="font-body text-xs tracking-[0.3em] text-stark/30 uppercase"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Scroll to explore
                </motion.span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown className="w-5 h-5 text-stark/30" />
                </motion.div>
            </motion.div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white/5 m-8" />
            <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-white/5 m-8" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-white/5 m-8" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/5 m-8" />
        </section>
    );
}
