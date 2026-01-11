'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock, Download } from 'lucide-react';
import MagneticButton from './MagneticButton';

interface ArticleCardProps {
    type: 'Article' | 'Whitepaper' | 'Case Study';
    title: string;
    description: string;
    date: string;
    readTime?: string;
    image?: string;
    link: string;
    downloadable?: boolean;
}

export default function ArticleCard({ article, index }: { article: ArticleCardProps, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col h-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-lg overflow-hidden"
        >
            {/* Image Placeholder or Actual Image */}
            <div className="h-48 bg-gradient-to-br from-void to-[#2C5DA9]/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#2C5DA9]/10 group-hover:bg-[#2C5DA9]/20 transition-colors" />
                {/* Type Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-void/80 backdrop-blur-sm border border-white/10 rounded-full">
                    <span className="text-xs font-mono text-stark/80 uppercase tracking-wider">
                        {article.type}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-stark/40 mb-4 font-mono">
                    <span className="flex items-center gap-1">
                        <Calendar size={12} /> {article.date}
                    </span>
                    {article.readTime && (
                        <span className="flex items-center gap-1">
                            <Clock size={12} /> {article.readTime}
                        </span>
                    )}
                </div>

                <h3 className="font-heading text-xl font-bold text-stark mb-3 group-hover:text-[#2C5DA9] transition-colors">
                    {article.title}
                </h3>

                <p className="font-body text-stark/60 text-sm leading-relaxed mb-6 flex-grow">
                    {article.description}
                </p>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#2C5DA9] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                        Read Now
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#2C5DA9] group-hover:border-[#2C5DA9] transition-all">
                        {article.downloadable ? (
                            <Download size={14} className="text-stark" />
                        ) : (
                            <ArrowUpRight size={14} className="text-stark" />
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
