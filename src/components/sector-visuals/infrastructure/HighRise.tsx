'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function HighRise() {
    return (
        <VisualWrapper gradientFrom="#0A0F3C" gradientTo="rgba(44, 93, 169, 0.2)">
            <div className="flex items-end gap-1 h-20">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: "10%" }}
                        animate={{ height: ["10%", "80%", "30%", "100%", "20%"] }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: i * 0.2
                        }}
                        className="w-3 bg-stark/20 rounded-t-sm backdrop-blur-sm"
                        style={{
                            backgroundColor: `rgba(235, 235, 237, ${0.1 + (i * 0.05)})`
                        }}
                    />
                ))}
            </div>
        </VisualWrapper>
    );
}
