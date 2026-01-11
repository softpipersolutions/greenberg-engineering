'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxWrapperProps {
    children: ReactNode;
    className?: string;
    speed?: number;
    direction?: 'up' | 'down';
}

export default function ParallaxWrapper({
    children,
    className = '',
    speed = 0.5,
    direction = 'up',
}: ParallaxWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const multiplier = direction === 'up' ? -1 : 1;
    const y = useTransform(scrollYProgress, [0, 1], [100 * speed * multiplier, -100 * speed * multiplier]);

    return (
        <motion.div ref={ref} className={className} style={{ y }}>
            {children}
        </motion.div>
    );
}

interface ParallaxLayerProps {
    children: ReactNode;
    className?: string;
    depth: number; // 0 = no parallax, 1 = full parallax
}

export function ParallaxLayer({ children, className = '', depth }: ParallaxLayerProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50 * depth, -50 * depth]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1 - 0.05 * depth, 1, 1 - 0.05 * depth]);

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ y, scale }}
        >
            {children}
        </motion.div>
    );
}
