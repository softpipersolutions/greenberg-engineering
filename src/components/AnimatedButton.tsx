'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children: ReactNode;
    variant?: 'outline' | 'solid';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export default function AnimatedButton({
    children,
    variant = 'outline',
    size = 'md',
    className = '',
    ...props
}: AnimatedButtonProps) {
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const baseClasses = `
    relative overflow-hidden
    font-heading font-medium tracking-wide uppercase
    border-2 border-white
    transition-colors duration-300 ease-out
    ${sizeClasses[size]}
    ${className}
  `;

    return (
        <motion.button
            className={baseClasses}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            {...props}
        >
            {/* Background fill animation */}
            <motion.span
                className="absolute inset-0 bg-white"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ transformOrigin: 'left' }}
            />

            {/* Text with color inversion on hover */}
            <span className="relative z-10 mix-blend-difference text-white">
                {children}
            </span>
        </motion.button>
    );
}
