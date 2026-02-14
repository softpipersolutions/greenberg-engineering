'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function IoT() {
    return (
        <VisualWrapper gradientFrom="#240046" gradientTo="rgba(123, 44, 191, 0.2)">
            <div className="relative w-full h-full flex items-center justify-center">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full border border-[#7B2CBF]/30"
                        style={{ width: (i + 1) * 30, height: (i + 1) * 30 }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, ease: "easeOut" }}
                    />
                ))}
                <div className="w-2 h-2 bg-[#7B2CBF] rounded-full shadow-[0_0_10px_#7B2CBF]" />
            </div>
        </VisualWrapper>
    );
}
