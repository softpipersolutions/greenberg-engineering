'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/sections/Footer';
import SectorPrism from '@/components/SectorPrism';

export default function SectorsPage() {
    return (
        <main>
            <section className="py-20 text-center container mx-auto px-6">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-mono text-stark/40 text-xs tracking-[0.3em] uppercase mb-8 block"
                >
                    Our Expertise
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-heading text-5xl md:text-7xl font-bold text-stark mb-8"
                >
                    The Sector <span className="text-[#2C5DA9]">Prism</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-body text-xl text-stark/60 max-w-2xl mx-auto leading-relaxed"
                >
                    Detailed engineering capabilities across five distinct yet interconnected domains.
                </motion.p>
            </section>

            {/* Reusing the Prism component for the list */}
            <SectorPrism />

            <Footer />
        </main>
    );
}
