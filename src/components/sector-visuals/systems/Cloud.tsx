'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import VisualWrapper from '../VisualWrapper';

export default function Cloud() {
    const [clouds] = useState(() => 
        [...Array(5)].map(() => ({
            width: Math.random() * 20 + 20,
            height: Math.random() * 20 + 20,
            left: Math.random() * 40,
            top: Math.random() * 10,
            duration: 4 + Math.random(),
            delay: Math.random()
        }))
    );

    return (
        <VisualWrapper gradientFrom="#240046" gradientTo="rgba(123, 44, 191, 0.2)">
            <div className="relative w-24 h-12">
                {clouds.map((cloud, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-[#7B2CBF]/10 rounded-full backdrop-blur-sm"
                        style={{
                            width: cloud.width,
                            height: cloud.height,
                            left: cloud.left,
                            top: cloud.top
                        }}
                        animate={{
                            x: [0, 10, 0],
                            y: [0, 5, 0]
                        }}
                        transition={{
                            duration: cloud.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: cloud.delay
                        }}
                    />
                ))}
            </div>
        </VisualWrapper>
    );
}
