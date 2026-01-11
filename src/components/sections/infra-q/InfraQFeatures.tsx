'use client';

import { motion } from 'framer-motion';
import { Bot, FileCheck, ShieldAlert, Zap, Layers, BarChart3 } from 'lucide-react';
import { GlitchText } from '@/components/ui/AnimatedText';

const features = [
    {
        icon: FileCheck,
        title: 'Automated DPRs',
        desc: 'Generate Detailed Project Reports in minutes, not months. AI analyzes terrain data, local compliance codes, and resource availability to output bank-ready reports.',
    },
    {
        icon: ShieldAlert,
        title: 'Predictive Risk',
        desc: 'Identify safety hazards and financial risks before construction begins. Our model learns from historical accident data across 10,000+ Indian projects.',
    },
    {
        icon: Bot,
        title: 'Compliance Bot',
        desc: 'Real-time checking against NBC 2016, local bylaws, and the latest OSH codes (Nov 2025). Never miss a regulatory update again.',
    },
    {
        icon: Zap,
        title: 'Resource Optimization',
        desc: 'Reduce material waste by up to 15%. Smart algorithms suggest optimal procurement schedules and material alternatives.',
    },
    {
        icon: Layers,
        title: 'Digital Twins',
        desc: 'Create living digital replicas of your physical assets for real-time monitoring and predictive maintenance scheduling.',
    },
    {
        icon: BarChart3,
        title: 'Market Intelligence',
        desc: 'Access hyper-local insights on construction costs, labor availability, and competitor activity in Tier-2/3 cities.',
    }
];

export default function InfraQFeatures() {
    return (
        <section className="py-24 bg-void relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#8D68AA]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#8D68AA]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-heading text-4xl md:text-5xl font-bold text-stark mb-6"
                    >
                        Capabilities of the <span className="text-[#8D68AA]">Brain</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="h-1 w-24 bg-gradient-to-r from-[#8D68AA] to-transparent"
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, i) => (
                        <FeatureCard key={i} feature={feature} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ feature, index }: { feature: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, borderColor: 'rgba(141, 104, 170, 0.5)' }}
            className="group p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-300 rounded-lg relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <feature.icon size={64} />
            </div>

            <div className="w-12 h-12 rounded-lg bg-[#8D68AA]/10 flex items-center justify-center mb-6 border border-[#8D68AA]/20 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-[#8D68AA]" />
            </div>

            <h3 className="font-heading text-xl font-bold text-stark mb-3 group-hover:text-[#8D68AA] transition-colors">
                {feature.title}
            </h3>

            <p className="font-body text-stark/60 leading-relaxed text-sm">
                {feature.desc}
            </p>

            {/* Hover Corner Accent */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#8D68AA] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#8D68AA] opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    );
}
