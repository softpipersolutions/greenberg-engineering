'use client';

import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    className?: string;
    gradientColor?: string;
}

export default function AnimatedCounter({
    value,
    suffix = '',
    prefix = '',
    duration = 2,
    className = '',
    gradientColor,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
        duration: duration * 1000,
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
            }
        });

        return () => unsubscribe();
    }, [springValue, prefix, suffix]);

    return (
        <motion.span
            ref={ref}
            className={`font-heading font-bold ${className}`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
            transition={{ duration: 0.5 }}
            style={gradientColor ? {
                background: gradientColor,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            } : undefined}
        >
            {prefix}0{suffix}
        </motion.span>
    );
}
