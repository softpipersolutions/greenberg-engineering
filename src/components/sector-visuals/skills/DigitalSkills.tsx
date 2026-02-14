'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function DigitalSkills() {
    return (
        <VisualWrapper gradientFrom="#2e1d12" gradientTo="rgba(236,149,78, 0.2)">
            <div className="flex gap-1 flex-wrap w-20 justify-center">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: Math.random() > 0.5 ? '#EC954E' : 'rgba(236,149,78, 0.3)' }}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{
                            duration: 0.5 + Math.random(),
                            repeat: Infinity,
                            delay: Math.random()
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
