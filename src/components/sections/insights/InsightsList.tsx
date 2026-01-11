'use client';

import { motion } from 'framer-motion';
import ArticleCard from '@/components/ui/ArticleCard';

const insights = [
    {
        type: 'Whitepaper',
        title: 'The Infrastructure Intelligence Layer',
        description: 'How AI and digital twins are transforming the execution of Tier-2 city projects in India.',
        date: 'Oct 12, 2025',
        readTime: '15 min read',
        link: '#',
        downloadable: true
    },
    {
        type: 'Case Study',
        title: 'Saving ₹5 Cr on Lucknow Metro',
        description: 'A deep dive into how prescriptive resource modeling reduced waste by 18%.',
        date: 'Sep 28, 2025',
        readTime: '8 min read',
        link: '#'
    },
    {
        type: 'Article',
        title: 'The New OSH Code 2025: What You Need to Know',
        description: 'A comprehensive guide to the new safety compliance standards coming into effect this November.',
        date: 'Sep 15, 2025',
        readTime: '5 min read',
        link: '#'
    },
    {
        type: 'Whitepaper',
        title: 'Sustainable Concrete Modules',
        description: 'Research findings on high-performance, low-carbon concrete mixes for high-rise structures.',
        date: 'Aug 30, 2025',
        readTime: '20 min read',
        link: '#',
        downloadable: true
    },
    {
        type: 'Article',
        title: 'Digital DPRs vs Traditional Methods',
        description: 'Why the era of manual Detailed Project Reports is ending, and what replaces it.',
        date: 'Aug 10, 2025',
        readTime: '6 min read',
        link: '#'
    }
] as const;

export default function InsightsList() {
    return (
        <section className="min-h-screen pt-32 pb-24 bg-void relative">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[#2C5DA9]/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-20 max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-mono text-[#2C5DA9] text-xs tracking-widest uppercase mb-4 block"
                    >
                        Research & Thinking
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-5xl md:text-7xl font-bold text-stark mb-8"
                    >
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C5DA9] to-[#C8DAF9]">
                            Insights
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-body text-xl text-stark/60 max-w-2xl"
                    >
                        Deep dives into infrastructure technology, safety compliance, and the future of construction in India.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {insights.map((article, i) => (
                        <ArticleCard key={i} article={article as any} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
