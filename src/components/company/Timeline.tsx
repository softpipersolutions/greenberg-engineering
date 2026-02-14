'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const timelineEvents = [
    { year: '1999', title: 'Foundation', description: 'Established with a vision to redefine infrastructure engineering.' },
    { year: '2005', title: 'Pan-India Expansion', description: 'Expanded operations to major metro cities, delivering key public projects.' },
    { year: '2012', title: 'Green Energy', description: 'Launched dedicated ESG division focusing on sustainable development.' },
    { year: '2018', title: 'Digital Shift', description: 'Integrated AI and ML into project planning and risk assessment (Infra-Q).' },
    { year: '2024', title: 'Global Reach', description: 'Partnering with international firms to export engineering excellence.' },
];

export default function Timeline() {
    return (
        <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <div className="space-y-24">
                {timelineEvents.map((event, index) => (
                    <TimelineItem key={event.year} event={event} index={index} />
                ))}
            </div>
        </div>
    );
}

function TimelineItem({ event, index }: { event: any, index: number }) {
    const ref = useRef(null);
    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
        >
            {/* Content Side */}
            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                }`}>
                <span className="font-mono text-[#2C5DA9] text-xl md:text-2xl font-bold block mb-2">
                    {event.year}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl text-stark mb-3">
                    {event.title}
                </h3>
                <p className="font-body text-stark/60 text-lg leading-relaxed">
                    {event.description}
                </p>
            </div>

            {/* Center Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-void border-2 border-[#2C5DA9] rounded-full z-10 shadow-[0_0_15px_rgba(44,93,169,0.5)]">
                <div className="absolute inset-0 bg-[#2C5DA9] rounded-full animate-ping opacity-20" />
            </div>

            {/* Empty Side for Balance */}
            <div className="hidden md:block md:w-1/2" />
        </motion.div>
    );
}
