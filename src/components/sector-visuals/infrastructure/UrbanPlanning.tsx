'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import VisualWrapper from '../VisualWrapper';

export default function UrbanPlanning() {
    const [dots] = useState(() => 
        [...Array(6)].map(() => ({
            left: Math.random() * 80 + 10,
            top: Math.random() * 80 + 10,
            duration: 2 + Math.random(),
            delay: Math.random()
        }))
    );

    return (
        <VisualWrapper gradientFrom="#0A0F3C" gradientTo="rgba(44, 93, 169, 0.2)">
            <div className="relative w-full h-full">
                {dots.map((dot, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-stark rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                        style={{ left: `${dot.left}%`, top: `${dot.top}%` }}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                            duration: dot.duration,
                            repeat: Infinity,
                            delay: dot.delay
                        }}
                    />
                ))}

                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    <motion.line
                        x1="20%" y1="30%" x2="80%" y2="70%"
                        stroke="white" strokeWidth="1"
                        strokeDasharray="4 4"
                        animate={{ strokeDashoffset: [0, 8] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.line
                        x1="70%" y1="20%" x2="30%" y2="80%"
                        stroke="white" strokeWidth="1"
                        strokeDasharray="4 4"
                        animate={{ strokeDashoffset: [0, -8] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </div>
        </VisualWrapper>
    );
}
