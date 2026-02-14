'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function Health() {
    return (
        <VisualWrapper gradientFrom="#330000" gradientTo="rgba(212, 1, 20, 0.2)">
            <svg width="100%" height="100%" viewBox="0 0 200 100" className="absolute opacity-50">
                <motion.path
                    d="M0 50 L40 50 L50 20 L60 80 L70 50 L200 50"
                    fill="transparent"
                    stroke="#D40114"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, x: -200 }}
                    animate={{ pathLength: 1, x: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            </svg>
        </VisualWrapper>
    );
}
