'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SECTORS } from '@/lib/gradients';
import SectorCard from './SectorCard';

export default function SectorPrism() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    return (
        <section ref={containerRef} className="relative bg-void py-24 md:py-32">
            {/* Section header */}
            <div className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <p className="font-body text-sm uppercase tracking-[0.3em] text-stark/40 mb-4">
                        Our Expertise
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-stark leading-[1.1]">
                        Five Pillars of
                        <br />
                        <span className="text-stark/40">Engineering Excellence</span>
                    </h2>
                </motion.div>
            </div>

            {/* Sector cards grid */}
            <div className="px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {SECTORS.map((sector, index) => (
                        <SectorCard key={sector.id} sector={sector} index={index} />
                    ))}
                </div>
            </div>

            {/* Decorative elements */}
            <motion.div
                className="absolute top-1/4 right-0 w-px h-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                style={{ scaleY: scrollYProgress }}
            />

            <motion.div
                className="absolute top-1/4 left-0 w-px h-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                style={{ scaleY: scrollYProgress }}
            />
        </section>
    );
}

// Alternative sticky scroll version for a more dramatic effect
export function SectorPrismSticky() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="relative bg-void">
            {/* Section header - sticky */}
            <div className="sticky top-0 z-10 bg-void py-12 md:py-16 px-6 md:px-12 lg:px-24 border-b border-white/5">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-end"
                >
                    <div>
                        <p className="font-body text-sm uppercase tracking-[0.3em] text-stark/40 mb-2">
                            Our Expertise
                        </p>
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-stark">
                            The Sector Prism
                        </h2>
                    </div>
                    <p className="hidden md:block font-body text-stark/40 max-w-xs text-right">
                        Hover to reveal the spectrum of our capabilities
                    </p>
                </motion.div>
            </div>

            {/* Sticky scroll cards */}
            <div className="relative">
                {SECTORS.map((sector, index) => (
                    <StickyCard key={sector.id} sector={sector} index={index} />
                ))}
            </div>
        </section>
    );
}

// Individual sticky card component
import { Sector, SECTOR_GRADIENTS } from '@/lib/gradients';
import { Building2, Leaf, Cpu, GraduationCap, Shield, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
    Building2,
    Leaf,
    Cpu,
    GraduationCap,
    Shield,
};

function StickyCard({ sector, index }: { sector: Sector; index: number }) {
    const Icon = iconMap[sector.icon] || Building2;
    const gradient = SECTOR_GRADIENTS[sector.id];
    const cardRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={cardRef}
            className="sticky top-24 min-h-[80vh] flex items-center px-6 md:px-12 lg:px-24 py-12"
            style={{
                zIndex: index + 1,
                y,
                opacity,
            }}
        >
            <motion.div
                className="relative w-full h-[60vh] overflow-hidden border border-white/20 bg-void group cursor-pointer"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
                {/* Gradient background */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: gradient }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
                    <div className="flex-1 space-y-6">
                        <div className="w-20 h-20 border border-white/30 flex items-center justify-center">
                            <Icon className="w-10 h-10 text-white/50 group-hover:text-white transition-colors duration-500" strokeWidth={1} />
                        </div>

                        <h3 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
                            {sector.name}
                        </h3>

                        <p className="font-body text-white/60 group-hover:text-white/90 text-xl md:text-2xl max-w-lg transition-colors duration-500">
                            {sector.description}
                        </p>
                    </div>

                    {/* Large index number */}
                    <div className="text-[20vw] font-heading font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500 leading-none">
                        {String(index + 1).padStart(2, '0')}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
