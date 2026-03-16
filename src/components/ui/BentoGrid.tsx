'use client';

import { motion } from 'framer-motion';

interface BentoItemProps {
    title: string;
    description: string;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    delay?: number;
}

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ${className}`}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    delay = 0,
}: BentoItemProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className={`
                row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 
                bg-void border border-white/10 justify-between flex flex-col space-y-4 hover:border-white/20
                ${className}
            `}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-heading font-bold text-stark mb-2 mt-2">
                    {title}
                </div>
                <div className="font-body font-normal text-stark/50 text-xs">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};
