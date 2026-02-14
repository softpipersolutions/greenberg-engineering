'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function NetZero() {
    return (
        <VisualWrapper gradientFrom="#042F17" gradientTo="rgba(82, 137, 64, 0.2)">
            <div className="flex items-center justify-center gap-2">
                {/* Left side (Energy use) */}
                <motion.div
                    className="w-8 h-8 rounded-full border border-[#528940]/50"
                    animate={{ scale: [1, 0.8, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Connector */}
                <motion.div
                    className="w-12 h-0.5 bg-[#528940]/30"
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Right side (Generation) */}
                <motion.div
                    className="w-8 h-8 rounded-full bg-[#528940]/20 backdrop-blur-sm"
                    animate={{ scale: [0.8, 1, 0.8], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </VisualWrapper>
    );
}
