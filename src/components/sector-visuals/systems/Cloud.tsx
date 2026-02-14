'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function Cloud() {
    return (
        <VisualWrapper gradientFrom="#240046" gradientTo="rgba(123, 44, 191, 0.2)">
            <div className="relative w-24 h-12">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-[#7B2CBF]/10 rounded-full backdrop-blur-sm"
                        style={{
                            width: Math.random() * 20 + 20,
                            height: Math.random() * 20 + 20,
                            left: Math.random() * 40,
                            top: Math.random() * 10
                        }}
                        animate={{
                            x: [0, 10, 0],
                            y: [0, 5, 0]
                        }}
                        transition={{
                            duration: 4 + Math.random(),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random()
                        }}
                    />
                ))}
            </div>
        </VisualWrapper>
    );
}
