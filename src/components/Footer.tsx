'use client';

import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-void border-t border-white/10">
            {/* CTA Section */}
            <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-stark leading-[1.1] mb-8">
                        Ready to build
                        <br />
                        <span className="text-stark/40">something extraordinary?</span>
                    </h2>

                    <p className="font-body text-lg md:text-xl text-stark/60 max-w-2xl mb-12">
                        Partner with us to engineer solutions that push boundaries and redefine possibilities.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <AnimatedButton size="lg">
                            Start a Project
                            <ArrowUpRight className="inline-block ml-2 w-5 h-5" />
                        </AnimatedButton>
                    </div>
                </motion.div>
            </section>

            {/* Footer links */}
            <div className="px-6 md:px-12 lg:px-24 py-12 border-t border-white/10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    {/* Logo/Brand */}
                    <div className="space-y-2">
                        <h3 className="font-heading text-2xl font-bold text-stark tracking-tight">
                            GREENBERG
                        </h3>
                        <p className="font-body text-sm text-stark/40">
                            Engineering Excellence
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap gap-8">
                        {['About', 'Services', 'Projects', 'Careers', 'Contact'].map((link) => (
                            <motion.a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="font-body text-sm text-stark/60 hover:text-stark transition-colors duration-300"
                                whileHover={{ x: 3 }}
                            >
                                {link}
                            </motion.a>
                        ))}
                    </nav>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <p className="font-body text-xs text-stark/30">
                        © {currentYear} Greenberg Engineering. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="font-body text-xs text-stark/30 hover:text-stark/60 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="font-body text-xs text-stark/30 hover:text-stark/60 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>

            {/* Large decorative text */}
            <div className="overflow-hidden py-8">
                <motion.div
                    className="font-heading text-[8vw] md:text-[6vw] font-bold text-white/[0.02] whitespace-nowrap"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                    GREENBERG ENGINEERING • ANTIGRAVITY • CREATE THE FUTURE • GREENBERG ENGINEERING • ANTIGRAVITY • CREATE THE FUTURE •
                </motion.div>
            </div>
        </footer>
    );
}
