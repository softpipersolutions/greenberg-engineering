'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface StatCardProps {
    value: string | number;
    label: string;
    icon?: React.ReactNode;
    delay?: number;
    suffix?: string;
}

export default function StatCard({ value, label, icon, delay = 0, suffix = '' }: StatCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    // Numeric counting logic if value is a number
    const isNumeric = typeof value === 'number';
    const springValue = useSpring(0, { stiffness: 50, damping: 20 });
    const displayValue = useTransform(springValue, (latest) =>
        isNumeric ? Math.round(latest).toLocaleString() : value
    );

    useEffect(() => {
        if (isInView && isNumeric) {
            springValue.set(value as number);
        }
    }, [isInView, value, isNumeric, springValue]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay, duration: 0.6 }}
            className="group relative p-8 border border-white/5 bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] transition-colors"
        >
            {/* Hover Glare Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-4 text-stark/40 group-hover:text-stark/60 transition-colors">
                    {icon}
                </div>

                <div>
                    <motion.span className="font-heading text-4xl md:text-5xl font-bold text-stark block mb-2">
                        {isNumeric ? <motion.span>{displayValue}</motion.span> : value}
                        {suffix && <span className="text-2xl text-stark/40 ml-1">{suffix}</span>}
                    </motion.span>
                    <p className="font-mono text-xs text-stark/40 uppercase tracking-widest">
                        {label}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
