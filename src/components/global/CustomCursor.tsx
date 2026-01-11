'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [cursorText, setCursorText] = useState('');

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Detect hoverable elements
        const handleElementHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isHoverable =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.dataset.cursor;

            setIsHovering(!!isHoverable);
            setCursorText(target.dataset.cursorText || '');
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousemove', handleElementHover);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousemove', handleElementHover);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [cursorX, cursorY]);

    // Hide on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                    animate={{
                        width: isHovering ? 60 : 8,
                        height: isHovering ? 60 : 8,
                        opacity: isVisible ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {cursorText && (
                        <motion.span
                            className="absolute inset-0 flex items-center justify-center text-black text-xs font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {cursorText}
                        </motion.span>
                    )}
                </motion.div>
            </motion.div>

            {/* Cursor ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30"
                    animate={{
                        width: isHovering ? 80 : 32,
                        height: isHovering ? 80 : 32,
                        opacity: isVisible ? 0.5 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                />
            </motion.div>

            {/* Hide default cursor */}
            <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
        </>
    );
}
