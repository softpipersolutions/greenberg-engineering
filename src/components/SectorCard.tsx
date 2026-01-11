'use client';

import { motion } from 'framer-motion';
import { SECTOR_GRADIENTS, Sector } from '@/lib/gradients';
import { Building2, Leaf, Cpu, GraduationCap, Shield, LucideIcon } from 'lucide-react';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
    Building2,
    Leaf,
    Cpu,
    GraduationCap,
    Shield,
};

interface SectorCardProps {
    sector: Sector;
    index: number;
}

export default function SectorCard({ sector, index }: SectorCardProps) {
    const Icon = iconMap[sector.icon] || Building2;
    const gradient = SECTOR_GRADIENTS[sector.id];

    return (
        <motion.div
            className="relative group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            <motion.div
                className="relative h-[400px] md:h-[500px] overflow-hidden border border-white/20 bg-void"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
                {/* Grayscale wireframe background (default state) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-0 transition-opacity duration-500">
                    <div className="w-full h-full border border-white/10">
                        {/* Grid pattern */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `
                  linear-gradient(to right, white 1px, transparent 1px),
                  linear-gradient(to bottom, white 1px, transparent 1px)
                `,
                                backgroundSize: '40px 40px',
                                opacity: 0.3,
                            }}
                        />
                    </div>
                </div>

                {/* Gradient reveal layer (visible on hover) */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: gradient }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
                    {/* Icon */}
                    <motion.div
                        className="w-16 h-16 border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-colors duration-500"
                        whileHover={{ rotate: 5 }}
                    >
                        <Icon
                            className="w-8 h-8 text-white/50 group-hover:text-white transition-colors duration-500"
                            strokeWidth={1}
                        />
                    </motion.div>

                    {/* Text content */}
                    <div className="space-y-4">
                        {/* Sector name */}
                        <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                            {sector.name}
                        </h3>

                        {/* Description */}
                        <p className="font-body text-white/60 group-hover:text-white/90 text-lg transition-colors duration-500 max-w-xs">
                            {sector.description}
                        </p>

                        {/* Tagline - rotates into view on hover */}
                        <motion.div
                            className="overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            whileHover={{ height: 'auto', opacity: 1 }}
                        >
                            <motion.p
                                className="font-heading text-sm uppercase tracking-[0.3em] text-white/80 pt-4 border-t border-white/20"
                                initial={{ y: 20, rotateX: -90 }}
                                whileInView={{ y: 0, rotateX: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                {sector.tagline}
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 border-r border-t border-white/10 group-hover:border-white/30 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-l border-b border-white/10 group-hover:border-white/30 transition-colors duration-500" />
                </div>

                {/* Hover indicator */}
                <motion.div
                    className="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-white/20 group-hover:bg-white transition-colors duration-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>
        </motion.div>
    );
}
