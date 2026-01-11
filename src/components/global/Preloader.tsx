'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    const letters = 'GREENBERG'.split('');

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {/* Logo letters */}
                    <div className="flex overflow-hidden">
                        {letters.map((letter, i) => (
                            <motion.span
                                key={i}
                                className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-stark"
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: i * 0.08,
                                    duration: 0.6,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>

                    {/* Subtitle */}
                    <motion.p
                        className="mt-4 font-body text-sm tracking-[0.5em] text-stark/40 uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        Engineering Excellence
                    </motion.p>

                    {/* Progress bar */}
                    <motion.div
                        className="mt-12 w-48 h-[2px] bg-white/10 overflow-hidden"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 1, duration: 0.4 }}
                    >
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                            transition={{ duration: 0.1 }}
                        />
                    </motion.div>

                    {/* Progress percentage */}
                    <motion.span
                        className="mt-4 font-mono text-xs text-stark/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        {Math.min(Math.round(progress), 100)}%
                    </motion.span>

                    {/* Ambient glow */}
                    <div className="absolute inset-0 pointer-events-none">
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                            style={{
                                background: 'radial-gradient(circle, rgba(45,90,169,0.15) 0%, transparent 70%)',
                            }}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
