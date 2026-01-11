'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const roadmapData = [
    {
        year: '2026',
        title: 'Launch & Learn',
        items: ['Infra-Q Beta Release', 'First 500 Subscribers', 'Regional Partnerships (UP)'],
        status: 'current'
    },
    {
        year: '2027',
        title: 'Mobile & Scale',
        items: ['iOS/Android App Launch', '2,000+ Active Users', 'First Govt. Ministry Pilot'],
        status: 'upcoming'
    },
    {
        year: '2028',
        title: 'Thought Leadership',
        items: ['Whitepaper Series', 'Ministry Advisory Role', '₹18 Cr Revenue Target'],
        status: 'upcoming'
    },
    {
        year: '2029',
        title: 'National Intelligence',
        items: ['Pan-India Risk Database', 'Series A Funding / IPO Prep', '10,000+ Subscribers'],
        status: 'future'
    }
];

export default function InfraQRoadmap() {
    return (
        <section className="py-24 bg-void border-t border-[#8D68AA]/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="font-mono text-[#8D68AA] text-xs tracking-[0.2em] uppercase mb-4 block">
                        The Long Game
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-stark">
                        Roadmap to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8D68AA] to-[#F4D6FF]">Intelligence</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#8D68AA]/20 -translate-x-1/2" />

                    <div className="space-y-12 md:space-y-24">
                        {roadmapData.map((item, i) => (
                            <TimelineItem key={i} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ item, index }: { item: any, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
        >
            {/* Content Side */}
            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                <div className="bg-white/[0.03] border border-white/5 p-6 rounded-lg hover:border-[#8D68AA]/30 transition-colors">
                    <span className="font-heading text-3xl font-bold text-[#8D68AA] mb-2 block">{item.year}</span>
                    <h3 className="font-heading text-xl text-stark mb-4">{item.title}</h3>
                    <ul className={`space-y-2 ${isEven ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                        {item.items.map((point: string, j: number) => (
                            <li key={j} className="text-stark/60 text-sm font-body flex items-center gap-2">
                                {isEven ? (
                                    <>
                                        {point} <div className="w-1.5 h-1.5 rounded-full bg-[#8D68AA]" />
                                    </>
                                ) : (
                                    <>
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#8D68AA]" /> {point}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Center Node */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-void border-2 border-[#8D68AA] z-10">
                {item.status === 'current' && (
                    <div className="absolute inset-0 bg-[#8D68AA] animate-ping rounded-full opacity-50" />
                )}
            </div>

            {/* Empty Side for Balance */}
            <div className="hidden md:block w-1/2" />
        </motion.div>
    );
}
