'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import VisualWrapper from '../VisualWrapper';

export default function Biodiversity() {
    const [dots, setDots] = useState<Array<{ left: number; top: number; duration: number; delay: number }>>([]);

    useEffect(() => {
        setDots(
            [...Array(8)].map(() => ({
                left: Math.random() * 80 + 10,
                top: Math.random() * 80 + 10,
                duration: 3 + Math.random(),
                delay: Math.random() * 2
            }))
        );
    }, []);

    return (
        <VisualWrapper gradientFrom="#042F17" gradientTo="rgba(82, 137, 64, 0.2)">
            <div className="relative w-full h-full overflow-hidden">
                {dots.map((dot, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[#528940] shadow-[0_0_10px_#528940]"
                        style={{
                            left: `${dot.left}%`,
                            top: `${dot.top}%`
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0] }}
                        transition={{
                            duration: dot.duration,
                            repeat: Infinity,
                            delay: dot.delay,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </div>
        </VisualWrapper>
    );
}
