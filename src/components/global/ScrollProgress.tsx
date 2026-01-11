'use client';

import { motion } from 'framer-motion';
import { useScrollProgress } from '@/lib/hooks/useScrollProgress';

export default function ScrollProgress() {
    const progress = useScrollProgress();

    return (
        <>
            {/* Vertical progress line */}
            <motion.div
                className="fixed right-8 top-1/2 -translate-y-1/2 w-[2px] h-32 bg-white/10 rounded-full overflow-hidden z-50 hidden md:block"
            >
                <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 via-purple-500 to-red-500 rounded-full"
                    style={{
                        height: '100%',
                        scaleY: progress,
                        transformOrigin: 'bottom',
                    }}
                />
            </motion.div>

            {/* Section indicators */}
            <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 hidden md:flex">
                {/* Dots will be added dynamically based on sections */}
            </div>

            {/* Top progress bar (mobile) */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-50 md:hidden"
            >
                <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"
                    style={{
                        scaleX: progress,
                        transformOrigin: 'left',
                    }}
                />
            </motion.div>
        </>
    );
}
