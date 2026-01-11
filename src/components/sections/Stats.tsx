'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { SECTOR_GRADIENTS } from '@/lib/gradients';

const stats = [
    {
        value: 25,
        suffix: '+',
        label: 'Years of Excellence',
        description: 'Pioneering engineering solutions',
        gradient: SECTOR_GRADIENTS.infra,
    },
    {
        value: 500,
        suffix: '+',
        label: 'Projects Delivered',
        description: 'Across 30+ countries',
        gradient: SECTOR_GRADIENTS.esg,
    },
    {
        value: 1200,
        suffix: '+',
        label: 'Engineers Worldwide',
        description: 'United by excellence',
        gradient: SECTOR_GRADIENTS.systems,
    },
    {
        value: 50000,
        suffix: '+',
        label: 'Training Hours',
        description: 'Continuous development',
        gradient: SECTOR_GRADIENTS.skills,
    },
    {
        value: 5,
        suffix: '+',
        label: 'Years Zero Incidents',
        description: 'Safety first, always',
        gradient: SECTOR_GRADIENTS.safety,
    },
];

export default function Stats() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    return (
        <section
            ref={containerRef}
            className="relative py-24 md:py-40 bg-void overflow-hidden"
        >
            {/* Section header */}
            <div className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -200px 0px' }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="font-body text-sm tracking-[0.3em] text-stark/40 uppercase mb-4">
                        By The Numbers
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-stark leading-[1.1]">
                        Impact That
                        <br />
                        <span className="text-stark/40">Speaks Volumes</span>
                    </h2>
                </motion.div>
            </div>

            {/* Stats grid */}
            <div className="px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={stat.label}
                            stat={stat}
                            index={index}
                            scrollProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>

            {/* Background decoration */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 pointer-events-none"
                style={{
                    background: 'conic-gradient(from 0deg, #0A0F3C, #33644A, #3A294F, #844212, #A20505, #0A0F3C)',
                    filter: 'blur(100px)',
                    rotate: useTransform(scrollYProgress, [0, 1], [0, 180]),
                }}
            />
        </section>
    );
}

interface StatCardProps {
    stat: typeof stats[0];
    index: number;
    scrollProgress: any;
}

function StatCard({ stat, index, scrollProgress }: StatCardProps) {
    return (
        <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
            transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            <motion.div
                className="relative h-full p-6 md:p-8 border border-white/10 bg-void/50 backdrop-blur-sm overflow-hidden"
                whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.3)' }}
                transition={{ duration: 0.3 }}
            >
                {/* Gradient glow on hover */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: stat.gradient }}
                />

                {/* Pulsing glow */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30"
                    style={{ background: stat.gradient }}
                    animate={{
                        opacity: [0, 0.2, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {/* Content */}
                <div className="relative z-10">
                    {/* Number */}
                    <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl text-stark mb-2"
                        gradientColor={stat.gradient}
                    />

                    {/* Label */}
                    <h3 className="font-heading text-lg md:text-xl text-stark font-medium mb-2">
                        {stat.label}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-sm text-stark/50">
                        {stat.description}
                    </p>
                </div>

                {/* Corner accent */}
                <div
                    className="absolute top-0 right-0 w-8 h-8 border-r border-t transition-colors duration-500"
                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                />
            </motion.div>
        </motion.div>
    );
}
