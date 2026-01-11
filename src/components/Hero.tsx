'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import AnimatedButton from './AnimatedButton';

const HERO_TEXT = 'CREATE THE FUTURE WITH US';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    // Mouse position for flashlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for flashlight
    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                mouseX.set(e.clientX - rect.left);
                mouseY.set(e.clientY - rect.top);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Split text into words and characters
    const words = HERO_TEXT.split(' ');
    let charIndex = 0;

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-void"
        >
            {/* Flashlight effect layer */}
            {isClient && (
                <motion.div
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                        background: `radial-gradient(600px circle at ${springX.get()}px ${springY.get()}px, rgba(255,255,255,0.06), transparent 40%)`,
                    }}
                />
            )}

            {/* Grid pattern overlay */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Main content */}
            <div className="relative z-10 px-6 md:px-12 lg:px-24">
                {/* Massive hero text */}
                <h1 className="text-center font-heading font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-stark leading-[0.9] tracking-tighter">
                    {words.map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-block mr-[0.25em]">
                            {word.split('').map((char) => {
                                const currentCharIndex = charIndex++;
                                return (
                                    <motion.span
                                        key={currentCharIndex}
                                        className="inline-block"
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: currentCharIndex * 0.03,
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

                {/* Subtitle */}
                <motion.p
                    className="mt-8 md:mt-12 text-center text-lg md:text-xl lg:text-2xl text-stark/60 font-body max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    Engineering solutions that defy gravity
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    <AnimatedButton size="lg">
                        Explore Our Work
                    </AnimatedButton>
                    <AnimatedButton size="lg" variant="outline">
                        Get In Touch
                    </AnimatedButton>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-stark/30 rounded-full flex justify-center"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <motion.div
                        className="w-1.5 h-3 bg-stark/50 rounded-full mt-2"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
