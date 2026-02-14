'use client';

import { motion } from 'framer-motion';
import VisualWrapper from '../VisualWrapper';

export default function Bridge() {
    return (
        <VisualWrapper gradientFrom="#0A0F3C" gradientTo="rgba(44, 93, 169, 0.2)">
            <svg width="100%" height="100%" viewBox="0 0 100 60" className="absolute opacity-50">
                {/* Cable 1 */}
                <motion.path
                    d="M0 50 Q 50 10 100 50"
                    fill="transparent"
                    stroke="rgba(235, 235, 237, 0.3)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                {/* Cable 2 */}
                <motion.path
                    d="M10 50 Q 50 20 90 50"
                    fill="transparent"
                    stroke="rgba(235, 235, 237, 0.2)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />

                {/* Vertical supports */}
                {[20, 40, 60, 80].map((x, i) => (
                    <motion.line
                        key={i}
                        x1={x} y1="50" x2={x} y2={30}
                        stroke="rgba(235, 235, 237, 0.1)"
                        strokeWidth="1"
                        initial={{ opacity: 0, y2: 50 }}
                        animate={{ opacity: 1, y2: [50, 25, 50] }}
                        transition={{ duration: 4, delay: i * 0.2, repeat: Infinity, ease: 'linear' }}
                    />
                ))}
            </svg>
        </VisualWrapper>
    );
}
