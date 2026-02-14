'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function Lifecycle() {
    return (
        <VisualWrapper gradientFrom="#042F17" gradientTo="rgba(82, 137, 64, 0.2)">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute">
                <motion.circle
                    cx="50" cy="50" r="30"
                    fill="transparent"
                    stroke="rgba(82, 137, 64, 0.4)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="188" // 2 * pi * 30
                    initial={{ strokeDashoffset: 188 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                    cx="50" cy="50" r="22"
                    fill="transparent"
                    stroke="rgba(82, 137, 64, 0.2)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="138"
                    initial={{ strokeDashoffset: 138, rotate: -90 }}
                    animate={{ strokeDashoffset: 0, rotate: 270 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {/* Center Dot */}
                <motion.circle
                    cx="50" cy="50" r="4"
                    fill="#528940"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </svg>
        </VisualWrapper>
    );
}
