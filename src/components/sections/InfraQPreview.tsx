'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Brain } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import Link from 'next/link';

export default function InfraQPreview() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const rotateX = useTransform(scrollYProgress, [0, 0.5], [45, 0]);

    return (
        <section ref={containerRef} className="py-32 bg-void relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    style={{ scale, opacity, rotateX, transformPerspective: '1000px' }}
                    className="relative rounded-3xl overflow-hidden border border-[#8D68AA]/30 bg-[#8D68AA]/5 backdrop-blur-sm"
                >
                    {/* Background Grid */}
                    <div className="absolute inset-0 z-0">
                        <GridAnimation />
                        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
                    </div>

                    <div className="relative z-10 px-8 py-24 md:py-32 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8D68AA]/30 bg-[#8D68AA]/10 backdrop-blur-sm mb-8"
                        >
                            <Brain className="w-4 h-4 text-[#8D68AA]" />
                            <span className="text-[#8D68AA] font-mono text-xs tracking-widest uppercase">
                                The Intelligence Layer
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-stark mb-6 tracking-tight max-w-4xl mx-auto"
                        >
                            India's Infrastructure Needs a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8D68AA] to-[#F4D6FF]">Brain</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="font-body text-xl text-stark/60 max-w-2xl mx-auto mb-12 leading-relaxed"
                        >
                            Transition from manual execution to AI-driven intelligence.
                            Automated DPRs, Predictive Risk Modeling, and Real-time Compliance.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link href="/infra-q">
                                <MagneticButton className="px-8 py-4 bg-[#8D68AA] text-white font-heading text-sm uppercase tracking-widest hover:bg-[#7a5996] transition-colors border-none inline-flex items-center gap-2">
                                    Discover Infra-Q <ArrowRight className="w-4 h-4" />
                                </MagneticButton>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function GridAnimation() {
    return (
        <div className="absolute inset-0 overflow-hidden opacity-30">
            <svg className="w-full h-full" width="100%" height="100%">
                <defs>
                    <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8D68AA" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />

                {/* Random glowing nodes on the grid */}
                {[...Array(10)].map((_, i) => (
                    <motion.circle
                        key={i}
                        cx={`${Math.random() * 100}%`}
                        cy={`${Math.random() * 100}%`}
                        r="2"
                        fill="#8D68AA"
                        animate={{
                            opacity: [0, 1, 0],
                            r: [2, 4, 2],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}
