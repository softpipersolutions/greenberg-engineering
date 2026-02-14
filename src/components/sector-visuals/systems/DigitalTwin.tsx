'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function DigitalTwin() {
    return (
        <VisualWrapper gradientFrom="#240046" gradientTo="rgba(123, 44, 191, 0.2)">
            <div className="flex gap-4">
                <motion.div
                    className="w-8 h-12 bg-[#7B2CBF]/20 border border-[#7B2CBF]/50 rounded-sm"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="w-8 h-12 bg-[#7B2CBF]/10 border border-[#7B2CBF]/30 rounded-sm dashed"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} // Slight delay for ghost effect
                    style={{ borderStyle: 'dashed' }}
                />
            </div>
        </VisualWrapper>
    );
}
