'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Navigation Structure
const navData = [
    {
        label: 'Company',
        href: '/company',
        children: [
            { label: 'Overview', href: '/company' },
            { label: 'Leadership', href: '/company/leadership' },
            { label: 'Careers', href: '/company/careers' },
        ],
    },
    {
        label: 'Sectors',
        href: '/sectors',
        children: [
            { label: 'Infrastructure', href: '/sectors/infrastructure' },
            { label: 'ESG', href: '/sectors/esg' },
            { label: 'Systems', href: '/sectors/systems' },
            { label: 'Skills', href: '/sectors/skills' },
            { label: 'Safety', href: '/sectors/safety' },
        ],
    },
    { label: 'Infra-Q', href: '/infra-q' },
    { label: 'Insights', href: '/insights' },
    { label: 'Resources', href: '/resources/downloads' },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const { scrollY } = useScroll();
    const navBackground = useTransform(
        scrollY,
        [0, 100],
        ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']
    );
    const navBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(10px)']);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24"
                style={{
                    backgroundColor: navBackground,
                    backdropFilter: navBlur,
                }}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <div className="flex items-center justify-between h-20 md:h-24">
                    {/* Logo */}
                    <Link href="/">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer flex items-center h-full"
                        >
                            <Image
                                src="/logo-header.svg"
                                alt="Greenberg Engineering Logo"
                                width={350}
                                height={88}
                                className="h-14 md:h-16 lg:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                priority
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        {navData.map((item, i) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => setHoveredIndex(i)}
                            >
                                <Link href={item.href}>
                                    <motion.span
                                        className="relative px-4 py-3 font-body text-sm text-stark/60 hover:text-stark transition-colors group flex items-center gap-1 cursor-pointer"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * i }}
                                    >
                                        {item.label}
                                        {item.children && (
                                            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${hoveredIndex === i ? 'rotate-180' : ''}`} />
                                        )}
                                        {/* Hover Line */}
                                        <motion.span
                                            className="absolute bottom-1 left-4 right-4 h-[1px] bg-stark origin-left"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: hoveredIndex === i ? 1 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.span>
                                </Link>

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {hoveredIndex === i && item.children && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, clipPath: 'inset(0% 0% 100% 0%)' }}
                                            animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
                                            exit={{ opacity: 0, y: 5 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-48 bg-void/90 backdrop-blur-xl border border-white/5 rounded-lg overflow-hidden py-2"
                                        >
                                            {item.children.map((child) => (
                                                <Link key={child.label} href={child.href}>
                                                    <div className="px-4 py-2 hover:bg-white/5 transition-colors">
                                                        <span className="font-body text-sm text-stark/80 hover:text-stark">
                                                            {child.label}
                                                        </span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        {/* CTA Button */}
                        <motion.a
                            href="/#contact"
                            className="ml-6 px-6 py-3 border border-stark/30 font-body text-sm text-stark hover:bg-stark hover:text-void transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Start Project
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden w-10 h-10 flex items-center justify-center text-stark"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                className="fixed inset-0 z-40 bg-void md:hidden overflow-y-auto"
                initial={{ opacity: 0, pointerEvents: 'none' }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex flex-col pt-32 pb-12 px-8 gap-8">
                    {navData.map((item, i) => (
                        <div key={item.label}>
                            <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                                <motion.span
                                    className="font-heading text-3xl text-stark block mb-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{
                                        opacity: isMobileMenuOpen ? 1 : 0,
                                        y: isMobileMenuOpen ? 0 : 30,
                                    }}
                                    transition={{ delay: 0.1 * i }}
                                >
                                    {item.label}
                                </motion.span>
                            </Link>

                            {/* Mobile Submenu */}
                            {item.children && (
                                <div className="pl-4 border-l border-white/10 space-y-4">
                                    {item.children.map((child, j) => (
                                        <Link key={child.label} href={child.href} onClick={() => setIsMobileMenuOpen(false)}>
                                            <motion.span
                                                className="block font-body text-lg text-stark/60"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{
                                                    opacity: isMobileMenuOpen ? 1 : 0,
                                                    x: isMobileMenuOpen ? 0 : -10,
                                                }}
                                                transition={{ delay: 0.1 * i + 0.05 * j }}
                                            >
                                                {child.label}
                                            </motion.span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="block mt-8 py-4 text-center border text-stark border-stark/30 font-bold text-xl">
                            Start Project
                        </span>
                    </Link>
                </div>
            </motion.div>
        </>
    );
}
