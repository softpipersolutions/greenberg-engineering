'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SECTORS, SECTOR_GRADIENTS } from '@/lib/gradients';

export default function SectorsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="bg-void min-h-screen pt-24">
            {/* Secondary Navigation for Sectors */}
            <div className="sticky top-20 md:top-24 z-40 bg-void/80 backdrop-blur-md border-b border-white/5 overflow-x-auto">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center gap-8 h-12 md:h-16">
                    <span className="font-mono text-stark/40 text-xs uppercase tracking-widest hidden md:block">
                        Divisions
                    </span>
                    {SECTORS.map((sector) => {
                        const href = `/sectors/${sector.id}`;
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={sector.id}
                                href={href}
                                className={`font-body text-sm whitespace-nowrap transition-colors relative h-full flex items-center ${isActive ? 'text-stark' : 'text-stark/50 hover:text-stark'
                                    }`}
                            >
                                {sector.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="sectorActive"
                                        className="absolute bottom-0 left-0 right-0 h-[2px]"
                                        style={{ background: SECTOR_GRADIENTS[sector.id] }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {children}
        </div>
    );
}
