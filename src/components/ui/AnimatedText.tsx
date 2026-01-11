'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
    children: string;
    className?: string;
    variant?: 'character' | 'word' | 'line';
    delay?: number;
    once?: boolean;
}

export function AnimatedText({
    children,
    className = '',
    variant = 'word',
    delay = 0,
    once = true,
}: AnimatedTextProps) {
    const elements = variant === 'character'
        ? children.split('')
        : variant === 'word'
            ? children.split(' ')
            : children.split('\n');

    return (
        <span className={className}>
            {elements.map((element, i) => (
                <span key={i} className="inline-block overflow-hidden">
                    <motion.span
                        className="inline-block"
                        initial={{ y: '100%', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once }}
                        transition={{
                            duration: 0.5,
                            delay: delay + i * (variant === 'character' ? 0.02 : 0.08),
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >
                        {element}
                        {variant === 'word' && ' '}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

interface RevealTextProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function RevealText({ children, className = '', delay = 0 }: RevealTextProps) {
    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                transition={{
                    duration: 0.8,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

interface GlitchTextProps {
    children: string;
    className?: string;
}

export function GlitchText({ children, className = '' }: GlitchTextProps) {
    return (
        <motion.span
            className={`relative inline-block ${className}`}
            whileHover="hover"
        >
            {/* Main text */}
            <span className="relative z-10">{children}</span>

            {/* Glitch layers */}
            <motion.span
                className="absolute inset-0 text-cyan-500 z-0"
                variants={{
                    hover: {
                        x: [-2, 2, -2, 0],
                        opacity: [0, 1, 1, 0],
                        transition: { duration: 0.3, repeat: 2 },
                    },
                }}
                aria-hidden
            >
                {children}
            </motion.span>
            <motion.span
                className="absolute inset-0 text-red-500 z-0"
                variants={{
                    hover: {
                        x: [2, -2, 2, 0],
                        opacity: [0, 1, 1, 0],
                        transition: { duration: 0.3, repeat: 2 },
                    },
                }}
                aria-hidden
            >
                {children}
            </motion.span>
        </motion.span>
    );
}

interface TypewriterTextProps {
    text: string;
    className?: string;
    speed?: number;
}

export function TypewriterText({ text, className = '', speed = 50 }: TypewriterTextProps) {
    return (
        <motion.span className={className}>
            {text.split('').map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                    transition={{ delay: i * (speed / 1000) }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
}
