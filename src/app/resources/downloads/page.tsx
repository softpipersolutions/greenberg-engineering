'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/sections/Footer';
import ArticleCard from '@/components/ui/ArticleCard'; // Reusing ArticleCard for downloads
import { FileText, Download } from 'lucide-react';

const downloads = [
    {
        type: 'Whitepaper',
        title: 'The Future of Urban Mobility',
        description: 'Analysis of transport trends in megacities for the next decade.',
        date: 'Oct 2024',
        link: '#',
        downloadable: true,
    },
    {
        type: 'Case Study',
        title: 'Zenith Interchange Impact Report',
        description: 'Data-driven overview of traffic reduction metrics.',
        date: 'Sept 2024',
        link: '#',
        downloadable: true,
    },
    {
        type: 'Article',
        title: 'ESG Compliance Guide 2025',
        description: 'Navigating the new regulatory landscape in construction.',
        date: 'Aug 2024',
        link: '#',
        downloadable: true,
    },
    {
        type: 'Whitepaper',
        title: 'Digital Twin Implementation Framework',
        description: 'Technical manual for deploying IoT sensors on site.',
        date: 'July 2024',
        link: '#',
        downloadable: true,
    },
];

export default function DownloadsPage() {
    return (
        <main className="container mx-auto px-6 md:px-12 lg:px-24 pb-24 pt-24 bg-void min-h-screen">
            {/* Header */}
            <section className="py-20 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-mono text-stark/40 text-xs tracking-[0.3em] uppercase mb-8 block"
                >
                    Resources
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-heading text-5xl md:text-6xl font-bold text-stark mb-8"
                >
                    Knowledge <span className="text-[#2C5DA9]">Bank</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-body text-xl text-stark/60 max-w-2xl mx-auto leading-relaxed"
                >
                    Access our library of technical papers, case studies, and industry reports.
                </motion.p>
            </section>

            {/* Downloads Grid */}
            <section className="mb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {downloads.map((item: any, index) => (
                        <div key={item.title}> {/* Wrapper to avoid type issues in mapping if any */}
                            <ArticleCard article={item} index={index} />
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
