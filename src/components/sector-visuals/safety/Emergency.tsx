'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function Emergency() {
    return (
        <VisualWrapper gradientFrom="#330000" gradientTo="rgba(212, 1, 20, 0.2)">
            <div className="flex items-center justify-center gap-4">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-16 h-1 bg-[#D40114]/20 rounded-full overflow-hidden"
                    >
                        <motion.div
                            className="h-full bg-[#D40114]"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 0.2
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </VisualWrapper>
    );
}
