'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

interface SectorNavigationProps {
    nextSector: {
        name: string;
        href: string;
        tagline: string; // e.g., "The Nervous System"
        color: string;   // e.g., "#528940"
    };
}

export default function SectorNavigation({ nextSector }: SectorNavigationProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Parallax or scroll effects for the footer
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[60vh] flex flex-col justify-center overflow-hidden border-t border-white/5 bg-void"
        >
            {/* Background Gradient Effect - Reveals on Hover */}
            <motion.div
                className="absolute inset-0 opacity-0 transition-opacity duration-700"
                animate={{ opacity: isHovered ? 0.15 : 0 }}
                style={{
                    background: `radial-gradient(circle at center, ${nextSector.color}, transparent 70%)`
                }}
            />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

                {/* CTA Section */}
                <div className="w-full md:w-1/3 flex flex-col items-start">
                    <h3 className="text-stark/60 font-body text-xl mb-6">Ready to engineer the future?</h3>
                    <MagneticButton
                        href="#contact"
                        className="px-8 py-4 border border-stark/20 text-stark bg-void hover:bg-stark hover:text-void transition-colors rounded-full font-heading text-sm tracking-widest uppercase"
                    >
                        Start a Project
                    </MagneticButton>
                </div>

                {/* Next Sector Link */}
                <div className="w-full md:w-2/3 flex flex-col items-end text-right">
                    <Link
                        href={nextSector.href}
                        className="group relative block"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <motion.div style={{ y, opacity }}>
                            <span className="block font-mono text-xs uppercase tracking-[0.2em] text-stark/40 mb-4 group-hover:text-stark/60 transition-colors">
                                Next Sector
                            </span>

                            <div className="flex items-center gap-6 justify-end">
                                <h2
                                    className="font-heading text-5xl md:text-7xl lg:text-8xl text-stark transition-colors duration-500"
                                    style={{
                                        color: isHovered ? nextSector.color : '#e0e0e0',
                                        textShadow: isHovered ? `0 0 30px ${nextSector.color}40` : 'none'
                                    }}
                                >
                                    {nextSector.name}
                                </h2>
                                <ArrowRight
                                    className="w-12 h-12 md:w-20 md:h-20 transition-all duration-500 group-hover:translate-x-4"
                                    style={{ color: isHovered ? nextSector.color : '#333' }}
                                />
                            </div>

                            <p
                                className="font-body text-lg md:text-2xl text-stark/40 mt-6 max-w-xl ml-auto transition-colors duration-500 group-hover:text-stark/80"
                            >
                                {nextSector.tagline}
                            </p>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
