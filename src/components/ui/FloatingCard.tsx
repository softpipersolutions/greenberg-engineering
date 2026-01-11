'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ReactNode, useEffect } from 'react';

interface FloatingCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    intensity?: number;
}

export default function FloatingCard({
    children,
    className = '',
    delay = 0,
    intensity = 1,
}: FloatingCardProps) {
    const y = useMotionValue(0);
    const rotate = useMotionValue(0);

    const ySpring = useSpring(y, { damping: 20, stiffness: 100 });
    const rotateSpring = useSpring(rotate, { damping: 20, stiffness: 100 });

    useEffect(() => {
        // Random floating animation
        const floatInterval = setInterval(() => {
            y.set((Math.random() - 0.5) * 20 * intensity);
            rotate.set((Math.random() - 0.5) * 4 * intensity);
        }, 2000 + Math.random() * 1000);

        return () => clearInterval(floatInterval);
    }, [y, rotate, intensity]);

    return (
        <motion.div
            className={`${className}`}
            style={{
                y: ySpring,
                rotate: rotateSpring,
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
                scale: 1.05,
                y: -20,
                rotate: 0,
                transition: { duration: 0.3 },
            }}
        >
            {children}
        </motion.div>
    );
}
