'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function Geotechnical() {
    return (
        <VisualWrapper gradientFrom="#0A0F3C" gradientTo="rgba(44, 93, 169, 0.2)">
            <div className="flex flex-col gap-2 w-3/4 h-3/4 justify-center">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-full h-2 rounded-full"
                        style={{
                            backgroundColor: `rgba(235, 235, 237, ${0.4 - (i * 0.08)})`
                        }}
                        initial={{ x: 0, width: "100%" }}
                        animate={{
                            x: i % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
                            width: ["100%", "90%", "100%"]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.1
                        }}
                    />
                ))}
            </div>
        </VisualWrapper>
    );
}
