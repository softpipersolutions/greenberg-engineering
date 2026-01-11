'use client';

import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxOptions {
    offset?: [string, string];
    speed?: number;
}

export function useParallax(options: ParallaxOptions = {}) {
    const { offset = ['start end', 'end start'], speed = 0.5 } = options;
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: offset as any,
    });

    const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return { ref, y, opacity, scale, scrollYProgress };
}

export function useParallaxLayer(scrollYProgress: MotionValue<number>, depth: number) {
    const y = useTransform(scrollYProgress, [0, 1], [0, -200 * depth]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1 + 0.1 * depth]);

    return { y, scale };
}
