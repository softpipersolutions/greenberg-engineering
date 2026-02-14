'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function Leadership() {
    return (
        <VisualWrapper gradientFrom="#2e1d12" gradientTo="rgba(236,149,78, 0.2)">
            <div className="relative w-full h-full">
                {/* Central Node */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4 bg-[#EC954E]/40 rounded-full border border-[#EC954E]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Satellites */}
                {[0, 90, 180, 270].map((angle, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-[#EC954E]/20"
                        animate={{
                            x: [0, Math.cos(angle * Math.PI / 180) * 40],
                            y: [0, Math.sin(angle * Math.PI / 180) * 40],
                            opacity: [0, 1]
                        }}
                        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatType: "reverse", ease: "easeOut" }}
                    />
                ))}
            </div>
        </VisualWrapper>
    );
}
