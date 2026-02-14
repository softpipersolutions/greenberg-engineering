'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [cursorText, setCursorText] = useState('');

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smoother spring configuration
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

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
                target.dataset.cursor !== undefined; // Check for data-cursor attribute

            setIsHovering(!!isHoverable);

            // Prioritize data-cursor-text on the element or its closest parent
            const textElement = target.closest('[data-cursor-text]') as HTMLElement;
            setCursorText(textElement?.dataset.cursorText || '');
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousemove', handleElementHover);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousemove', handleElementHover);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
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
                        width: isHovering ? 60 : isClicking ? 6 : 8,
                        height: isHovering ? 60 : isClicking ? 6 : 8,
                        opacity: isVisible ? 1 : 0,
                        scale: isClicking ? 0.8 : 1,
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                >
                    {cursorText && (
                        <motion.span
                            className="absolute inset-0 flex items-center justify-center text-black text-[10px] font-bold uppercase tracking-wider text-center leading-tight px-1"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
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
                        width: isHovering ? 80 : isClicking ? 24 : 32,
                        height: isHovering ? 80 : isClicking ? 24 : 32,
                        opacity: isVisible ? (isHovering ? 0.8 : 0.5) : 0,
                        scale: isClicking ? 0.9 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </motion.div>

            {/* Hide default cursor */}
            <style jsx global>{`
                * {
                    cursor: none !important;
                }
                /* Ensure links and buttons don't force a cursor */
                a, button, [role="button"] {
                    cursor: none !important;
                }
            `}</style>
        </>
    );
}
