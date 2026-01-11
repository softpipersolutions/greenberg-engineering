'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
    { label: 'About', href: '#manifesto' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            >
                <div className="flex items-center justify-between h-20 md:h-24">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="font-heading text-xl md:text-2xl font-bold text-stark tracking-tight"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        GREENBERG
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item, i) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                className="relative px-5 py-2 font-body text-sm text-stark/60 hover:text-stark transition-colors group"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                data-cursor
                                data-cursor-text="Go"
                            >
                                {item.label}
                                <motion.span
                                    className="absolute bottom-0 left-5 right-5 h-[1px] bg-stark origin-left"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>
                        ))}

                        {/* CTA Button */}
                        <motion.a
                            href="#contact"
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
                className="fixed inset-0 z-40 bg-void md:hidden"
                initial={{ opacity: 0, pointerEvents: 'none' }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navItems.map((item, i) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            className="font-heading text-3xl text-stark"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{
                                opacity: isMobileMenuOpen ? 1 : 0,
                                y: isMobileMenuOpen ? 0 : 30,
                            }}
                            transition={{ delay: 0.1 * i }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </>
    );
}
