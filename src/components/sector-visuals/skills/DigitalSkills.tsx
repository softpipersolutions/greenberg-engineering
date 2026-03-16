'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import VisualWrapper from '../VisualWrapper';

export default function DigitalSkills() {
    const [dots] = useState(() => 
        [...Array(12)].map(() => ({
            isOrange: Math.random() > 0.5,
            duration: 0.5 + Math.random(),
            delay: Math.random()
        }))
    );

    return (
        <VisualWrapper gradientFrom="#2e1d12" gradientTo="rgba(236,149,78, 0.2)">
            <div className="flex gap-1 flex-wrap w-20 justify-center">
                {dots.map((dot, i) => (
                    <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: dot.isOrange ? '#EC954E' : 'rgba(236,149,78, 0.3)' }}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{
                            duration: dot.duration,
                            repeat: Infinity,
                            delay: dot.delay
                        }}
                    />
                ))}
            </div>

            <motion.div
                className="absolute w-28 h-20 border border-[#EC954E]/20 rounded-md"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
            />
        </VisualWrapper>
    );
}
