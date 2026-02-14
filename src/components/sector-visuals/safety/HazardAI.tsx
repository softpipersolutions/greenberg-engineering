'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function HazardAI() {
    return (
        <VisualWrapper gradientFrom="#330000" gradientTo="rgba(212, 1, 20, 0.2)">
            <div className="relative w-full h-full overflow-hidden">
                {/* Scanning Line */}
                <motion.div
                    className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#D40114] to-transparent opacity-50"
                    animate={{ left: ["-10%", "110%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Targets */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 border border-[#D40114] rounded-sm"
                        style={{
                            left: Math.random() * 60 + 20 + "%",
                            top: Math.random() * 60 + 20 + "%"
                        }}
                        animate={{ opacity: [0, 1, 0], scale: [1.2, 1, 1.2] }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.7,
                            repeatDelay: 2
                        }}
                    />
                ))}
            </div>
        </VisualWrapper>
    );
}
