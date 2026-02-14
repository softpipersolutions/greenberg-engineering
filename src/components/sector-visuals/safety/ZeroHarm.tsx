'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function ZeroHarm() {
    return (
        <VisualWrapper gradientFrom="#330000" gradientTo="rgba(212, 1, 20, 0.2)">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute">
                <motion.path
                    d="M50 20 L85 35 V55 C85 75 50 90 50 90 C50 90 15 75 15 55 V35 L50 20 Z"
                    fill="transparent"
                    stroke="rgba(212, 1, 20, 0.5)"
                    strokeWidth="2"
                    initial={{ scale: 0.9, opacity: 0.5 }}
                    animate={{ scale: [0.9, 1, 0.9], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.circle
                    cx="50" cy="50" r="15"
                    fill="transparent"
                    stroke="#D40114"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1.5], opacity: [1, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
            </svg>
        </VisualWrapper>
    );
}
