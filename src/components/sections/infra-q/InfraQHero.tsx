'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Cpu, Network, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { GlitchText } from '@/components/ui/AnimatedText';

export default function InfraQHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-void">
            {/* Background Neural Network */}
            <div className="absolute inset-0 z-0">
                <NeuralNetworkBackground />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-void/50 via-void/80 to-void z-0" />

            {/* Content */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 container mx-auto px-6 text-center"
            >
                {/* Product Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8D68AA]/30 bg-[#8D68AA]/10 backdrop-blur-sm">
                        <Brain className="w-4 h-4 text-[#8D68AA]" />
                        <span className="text-[#8D68AA] font-mono text-xs tracking-widest uppercase">
                            The Infrastructure Intelligence Layer
                        </span>
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-heading text-6xl md:text-8xl font-bold text-stark mb-6 tracking-tight"
                >
                    <GlitchText>Infra-Q</GlitchText>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-body text-xl md:text-2xl text-stark/60 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    India's infrastructure needs a brain, not just muscle.
                    <span className="text-[#8D68AA] block mt-2">
                        Automated DPRs. Predictive Risk. Intelligent Compliance.
                    </span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <MagneticButton className="px-8 py-4 bg-[#8D68AA] text-white font-heading text-sm uppercase tracking-widest hover:bg-[#7a5996] transition-colors border-none">
                        Request Demo <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                    </MagneticButton>
                    <MagneticButton className="px-8 py-4 border border-[#8D68AA]/50 text-stark font-heading text-sm uppercase tracking-widest hover:bg-[#8D68AA]/10">
                        View Roadmap
                    </MagneticButton>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-[#8D68AA] to-transparent bg-[length:100%_200%] animate-scroll-drip" />
            </motion.div>
        </section>
    );
}

function NeuralNetworkBackground() {
    return (
        <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" width="100%" height="100%">
                <defs>
                    <filter id="glow-purple">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                {/* Generate random nodes and connections */}
                {[...Array(20)].map((_, i) => <FloatingNode key={i} index={i} />)}
            </svg>
        </div>
    );
}

function FloatingNode({ index }: { index: number }) {
    // Deterministic random positions based on index
    const x = (index * 137.5) % 100;
    const y = (index * 269.3) % 100;

    return (
        <motion.g
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0.3, 0.7, 0.3],
                x: [0, Math.sin(index) * 20, 0],
                y: [0, Math.cos(index) * 20, 0]
            }}
            transition={{
                duration: 5 + (index % 5),
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <circle
                cx={`${x}%`}
                cy={`${y}%`}
                r={2 + (index % 3)}
                fill="#8D68AA"
                filter="url(#glow-purple)"
            />
            {/* Connections to nearby hypothetical nodes */}
            <motion.line
                x1={`${x}%`} y1={`${y}%`}
                x2={`${(x + 10) % 100}%`} y2={`${(y + 15) % 100}%`}
                stroke="#8D68AA"
                strokeWidth="0.5"
                strokeOpacity="0.3"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
            />
        </motion.g>
    );
}
