'use client';

import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export default function GradientOrb() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 50, stiffness: 100 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed pointer-events-none z-[1] opacity-50"
            style={{
                x,
                y,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            {/* Primary orb */}
            <motion.div
                className="w-[500px] h-[500px] rounded-full blur-[100px]"
                style={{
                    background: 'radial-gradient(circle, rgba(45,90,169,0.3) 0%, rgba(141,104,170,0.2) 50%, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Secondary smaller orb */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full blur-[60px]"
                style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                }}
                animate={{
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </motion.div>
    );
}
