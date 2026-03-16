'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
    Sectors: [
        { label: 'Infrastructure', href: '/sectors/infrastructure' },
        { label: 'ESG', href: '/sectors/esg' },
        { label: 'Systems', href: '/sectors/systems' },
        { label: 'Skills', href: '/sectors/skills' },
        { label: 'Safety', href: '/sectors/safety' },
    ],
    Company: [
        { label: 'Overview', href: '/company' },
        { label: 'Leadership', href: '/company/leadership' },
        { label: 'Careers', href: '/company/careers' },
        { label: 'Contact', href: '/#contact' },
    ],
    Resources: [
        { label: 'Downloads', href: '/resources/downloads' },
        { label: 'Infra-Q', href: '/infra-q' },
        { label: 'Insights', href: '/insights' },
    ],
};

const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-void border-t border-white/5">
            {/* Main footer content */}
            <div className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                        {/* Brand column */}
                        <div className="lg:col-span-2">
                            <Link href="/">
                                <motion.div
                                    className="mb-6 inline-block"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Image
                                        src="/logo.svg"
                                        alt="Greenberg Engineering Logo"
                                        width={350}
                                        height={88}
                                        className="h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                    />
                                </motion.div>
                            </Link>
                            <p className="font-body text-stark/50 max-w-sm mb-8 leading-relaxed">
                                Engineering excellence since 1999. Five pillars of innovation
                                transforming industries across the globe.
                            </p>

                            {/* Social links */}
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center border border-white/10 text-stark/50 hover:text-stark hover:border-white/30 transition-colors"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-4 h-4" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Link columns */}
                        {Object.entries(footerLinks).map(([title, links], columnIndex) => (
                            <div key={title}>
                                <h4 className="font-heading text-sm font-medium text-stark mb-6 tracking-wider">
                                    {title}
                                </h4>
                                <ul className="space-y-4">
                                    {links.map((link, linkIndex) => (
                                        <motion.li
                                            key={link.label}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                                            transition={{ delay: columnIndex * 0.1 + linkIndex * 0.05 }}
                                        >
                                            <Link href={link.href}>
                                                <motion.span
                                                    className="font-body text-sm text-stark/50 hover:text-stark transition-colors inline-block"
                                                    whileHover={{ x: 3 }}
                                                >
                                                    {link.label}
                                                </motion.span>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Back to top button */}
            <div className="absolute right-6 md:right-12 lg:right-24 top-16 md:top-24">
                <motion.button
                    onClick={scrollToTop}
                    className="group flex flex-col items-center gap-2"
                    whileHover="hover"
                >
                    <motion.div
                        className="w-12 h-12 flex items-center justify-center border border-white/20 text-stark/50 group-hover:text-stark group-hover:border-white/40 transition-colors"
                        variants={{
                            hover: {
                                y: -5,
                                boxShadow: '0 10px 30px rgba(255,255,255,0.1)',
                            },
                        }}
                    >
                        <motion.div
                            variants={{
                                hover: { y: [-2, -8, -2], transition: { duration: 0.6, repeat: Infinity } },
                            }}
                        >
                            <ArrowUp className="w-5 h-5" />
                        </motion.div>
                    </motion.div>
                    <span className="font-body text-xs text-stark/30 group-hover:text-stark/50 transition-colors">
                        Top
                    </span>
                </motion.button>
            </div>

            {/* Bottom bar */}
            <div className="px-6 md:px-12 lg:px-24 py-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-body text-xs text-stark/30">
                        © {currentYear} GREENBERG ENGINEERING PRIVATE LIMITED. All rights reserved.
                        <span className="block mt-1 text-[10px] text-stark/20">
                            Registered Office: 5/178, Vikas Nagar Thana Road, Lucknow, UP 226022 | GSTIN: 09AAMCG0423A1Z3
                        </span>
                    </p>
                    <div className="flex gap-6">
                        <Link href="/legal/privacy" className="font-body text-xs text-stark/30 hover:text-stark/60 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/legal/terms" className="font-body text-xs text-stark/30 hover:text-stark/60 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/legal/impressum" className="font-body text-xs text-stark/30 hover:text-stark/60 transition-colors">
                            Impressum
                        </Link>
                    </div>
                </div>
            </div>

            {/* Infinite scrolling marquee */}
            <div className="overflow-hidden py-8 border-t border-white/5">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                    {[...Array(2)].map((_, i) => (
                        <span
                            key={i}
                            className="font-heading text-[8vw] md:text-[6vw] font-bold text-white/[0.02] mx-4"
                        >
                            GREENBERG ENGINEERING • CREATE THE FUTURE • ENGINEERING EXCELLENCE • BUILD WITH US •
                        </span>
                    ))}
                </motion.div>
            </div>
        </footer>
    );
}
