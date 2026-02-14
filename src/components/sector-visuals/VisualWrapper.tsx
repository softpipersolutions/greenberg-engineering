'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface VisualWrapperProps {
    children: ReactNode;
    className?: string;
    gradientFrom?: string;
    gradientTo?: string;
}

export default function VisualWrapper({
    children,
    className,
    gradientFrom = "#0A0F3C",
    gradientTo = "rgba(44, 93, 169, 0.2)"
}: VisualWrapperProps) {
    return (
        <div
            className={cn(
                "flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative",
                "bg-gradient-to-br transition-all duration-500",
                className
            )}
            style={{
                backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`
            }}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                {children}
            </div>

            {/* Subtle inner shadow overlay */}
            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />
        </div>
    );
}
