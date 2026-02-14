'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function SafetyCert() {
    return (
        <VisualWrapper gradientFrom="#2e1d12" gradientTo="rgba(236,149,78, 0.2)">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute">
                <motion.path
                    d="M50 20 L80 30 V60 C80 80 50 90 50 90 C50 90 20 80 20 60 V30 L50 20 Z"
                    fill="transparent"
                    stroke="rgba(236,149,78, 0.5)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path
                    d="M40 55 L50 65 L65 45"
                    fill="transparent"
                    stroke="#EC954E"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 2, repeat: Infinity, repeatDelay: 3 }}
                />
            </svg>
        </VisualWrapper>
    );
}
