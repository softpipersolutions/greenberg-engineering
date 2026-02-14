'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function GET() {
    return (
        <VisualWrapper gradientFrom="#2e1d12" gradientTo="rgba(236,149,78, 0.2)">
            <div className="flex items-end gap-2 h-16">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-8 bg-[#EC954E]/20 backdrop-blur-sm border-t border-[#EC954E]/50 rounded-t-sm"
                        initial={{ height: "20%" }}
                        animate={{ height: ["20%", `${(i + 1) * 25}%`, "20%"] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                        }}
                    />
                ))}

                {/* Climbing dot */}
                <motion.div
                    className="absolute w-3 h-3 bg-[#EC954E] rounded-full shadow-[0_0_10px_#EC954E]"
                    animate={{
                        x: [0, 100],
                        y: [20, -40]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ left: "20%", bottom: "20%" }}
                />
            </div>
        </VisualWrapper>
    );
}
