'use client';

import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useRef, MouseEvent } from 'react';

interface ParallaxHeroProps {
    title: string;
    highlight: string;
    description: string;
    sectorId: string; // 'infra' | 'esg' | 'systems' | 'skills' | 'safety'
    gradient: string;
    pattern?: 'grid' | 'dots' | 'lines';
}

export default function ParallaxHero({
    title,
    highlight,
    description,
    sectorId,
    gradient
}: ParallaxHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }: MouseEvent) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set((clientX - left) / width);
        mouseY.set((clientY - top) / height);
    };

    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    const backgroundX = useTransform(mouseX, [0, 1], [-20, 20]);
    const backgroundY = useTransform(mouseY, [0, 1], [-20, 20]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-void"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic Background */}
            <motion.div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    x: backgroundX,
                    y: backgroundY,
                    scale
                }}
            >
                <div
                    className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] mix-blend-screen"
                    style={{ background: gradient }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] mix-blend-screen opacity-50"
                    style={{ background: gradient }}
                />
            </motion.div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/patterns/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

            {/* Content */}
            <motion.div
                className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 text-center"
                style={{ y: yText, opacity: opacityText }}
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-mono text-xs tracking-[0.3em] uppercase mb-8 block text-stark/40"
                >
                    Sector: {sectorId}
                </motion.span>

                <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-stark mb-8 tracking-tighter">
                    {title}
                    <span
                        className="text-transparent bg-clip-text block md:inline ml-0 md:ml-4"
                        style={{ backgroundImage: gradient }}
                    >
                        {highlight}
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-body text-xl md:text-2xl text-stark/60 max-w-3xl mx-auto leading-relaxed"
                >
                    {description}
                </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-stark/0 via-stark/20 to-stark/0" />
            </motion.div>
        </section>
    );
}
