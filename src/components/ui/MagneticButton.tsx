'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    strength?: number;
}

export default function MagneticButton({
    children,
    className = '',
    onClick,
    href,
    strength = 0.3,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set((e.clientX - centerX) * strength);
        y.set((e.clientY - centerY) * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            ref={ref as any}
            href={href}
            onClick={onClick}
            className={`relative overflow-hidden group ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: xSpring, y: ySpring }}
            whileTap={{ scale: 0.95 }}
            data-cursor
        >
            {/* Background fill */}
            <motion.span
                className="absolute inset-0 bg-stark"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ transformOrigin: 'left' }}
            />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2 text-stark group-hover:text-void transition-colors duration-300">
                {children}
            </span>

            {/* Glow effect */}
            <motion.span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    boxShadow: '0 0 40px rgba(255,255,255,0.2)',
                }}
            />
        </Component>
    );
}
