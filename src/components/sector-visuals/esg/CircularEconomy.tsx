'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function CircularEconomy() {
    return (
        <VisualWrapper gradientFrom="#042F17" gradientTo="rgba(82, 137, 64, 0.2)">
            <div className="relative flex items-center justify-center">
                <motion.div
                    className="absolute w-20 h-20 rounded-full border-2 border-dashed border-[#528940]/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute w-14 h-14 rounded-full border-2 border-dotted border-[#528940]/50"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute w-8 h-8 rounded-full bg-[#528940]/20"
                    animate={{ scale: [1, 0.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </VisualWrapper>
    );
}
