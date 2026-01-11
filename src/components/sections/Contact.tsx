'use client';

import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Send, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
    const [focusedField, setFocusedField] = useState<string | null>(null);

    // Mouse tracking for background effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('loading');
        setTimeout(() => setFormState('success'), 2000);
    };

    return (
        <section
            ref={containerRef}
            id="contact"
            className="relative min-h-screen py-24 md:py-32 bg-void overflow-hidden flex items-center"
        >
            {/* Constellation Background */}
            <ConstellationField mouseX={mouseX} mouseY={mouseY} />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Column: Heading & Info */}
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stark/10 bg-stark/5 backdrop-blur-sm mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="font-mono text-xs text-stark/60 uppercase tracking-widest">
                                    Open for Collaboration
                                </span>
                            </div>

                            <h2 className="font-heading text-5xl md:text-7xl font-bold text-stark leading-tight mb-8">
                                Let's <br />
                                <span className="relative">
                                    Connect
                                    <motion.span
                                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                    />
                                </span>
                                <br /> The Dots.
                            </h2>

                            <p className="font-body text-xl text-stark/60 max-w-md leading-relaxed mb-12">
                                Ready to build the future? Whether it's a question, a project, or a partnership, we're here to engineer the answer.
                            </p>

                            <div className="space-y-6">
                                <ContactItem icon="✉️" label="Email" value="hello@greenberg.com" delay={0.2} />
                                <ContactItem icon="📍" label="HQ" value="Lucknow, India" delay={0.3} />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Interactive Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Glass card background */}
                        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/5" />

                        {formState === 'success' ? (
                            <SuccessState />
                        ) : (
                            <form onSubmit={handleSubmit} className="relative p-8 md:p-12 space-y-8">
                                <MagneticInput
                                    label="Name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    value=""
                                    mouseX={mouseX}
                                    mouseY={mouseY}
                                />
                                <MagneticInput
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value=""
                                    mouseX={mouseX}
                                    mouseY={mouseY}
                                />
                                <MagneticInput
                                    label="Message"
                                    name="message"
                                    type="textarea"
                                    placeholder="Tell us about your vision..."
                                    value=""
                                    mouseX={mouseX}
                                    mouseY={mouseY}
                                />

                                <div className="pt-4 flex justify-end">
                                    <MagneticButton
                                        className="px-8 py-4 bg-stark text-void font-heading text-sm uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2 group"
                                    >
                                        {formState === 'loading' ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </MagneticButton>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ContactItem({ icon, label, value, delay }: { icon: string, label: string, value: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className="flex items-center gap-4"
        >
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-lg">
                {icon}
            </div>
            <div>
                <div className="font-mono text-xs text-stark/40 uppercase tracking-wider mb-0.5">{label}</div>
                <div className="font-body text-stark">{value}</div>
            </div>
        </motion.div>
    );
}

function MagneticInput({ label, name, type, placeholder, value, mouseX, mouseY }: any) {
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [fieldValue, setFieldValue] = useState(value);

    // Calculate distance from mouse to input center to create a subtle pull effect
    // This is purely visual for the border glow

    const isTextarea = type === 'textarea';
    const Component = isTextarea ? 'textarea' : 'input';

    return (
        <div className="relative group">
            <label
                className={`
                    absolute left-0 top-0 font-mono text-xs uppercase tracking-widest transition-all duration-300 pointer-events-none z-10
                    ${isFocused || fieldValue ? '-translate-y-6 text-[#8D68AA]' : 'translate-y-4 text-stark/40'}
                `}
            >
                {label}
            </label>

            <Component
                ref={inputRef as any}
                name={name}
                value={fieldValue}
                onChange={(e: any) => setFieldValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                rows={isTextarea ? 4 : undefined}
                className={`
                    w-full bg-transparent border-b border-white/10 py-4 text-lg font-body text-stark
                    focus:outline-none focus:border-transparent transition-all relative z-10
                    ${isTextarea ? 'resize-none' : ''}
                `}
            />

            {/* Custom Interactive Border */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 overflow-hidden">
                {/* Spotlight effect that follows mouse horizontally when hovered/focused */}
                <motion.div
                    className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-transparent via-[#8D68AA] to-transparent h-[2px]"
                    initial={{ x: '-100%' }}
                    animate={{
                        x: isFocused ? '0%' : '-100%',
                        opacity: isFocused ? 1 : 0
                    }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Dot Animation on Focus */}
            <motion.div
                className="absolute right-0 bottom-4 w-2 h-2 rounded-full bg-[#8D68AA]"
                initial={{ scale: 0 }}
                animate={{ scale: isFocused ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <div className="absolute inset-0 bg-[#8D68AA] animate-ping rounded-full opacity-50" />
            </motion.div>
        </div>
    );
}

function ConstellationField({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
    // Generate static stars
    const stars = Array.from({ length: 40 }).map((_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* Gradient Orb following mouse */}
            <motion.div
                className="absolute w-[600px] h-[600px] bg-gradient-radial from-[#8D68AA]/10 to-transparent rounded-full blur-[100px]"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />

            {/* Stars */}
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{
                        opacity: [0.1, 0.5, 0.1],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: star.delay
                    }}
                />
            ))}

            {/* Connecting Lines (Simulated Constellation) */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
                <motion.line
                    x1="10%" y1="20%" x2="30%" y2="40%"
                    stroke="white" strokeWidth="0.5" strokeDasharray="5 5"
                    animate={{ strokeDashoffset: [0, 10] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.line
                    x1="30%" y1="40%" x2="70%" y2="30%"
                    stroke="white" strokeWidth="0.5" strokeDasharray="5 5"
                    animate={{ strokeDashoffset: [0, 10] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.line
                    x1="70%" y1="30%" x2="80%" y2="80%"
                    stroke="white" strokeWidth="0.5" strokeDasharray="5 5"
                    animate={{ strokeDashoffset: [0, 10] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
            </svg>
        </div>
    );
}

function SuccessState() {
    return (
        <motion.div
            className="h-full flex flex-col items-center justify-center text-center p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                <Sparkles className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="font-heading text-3xl font-bold text-stark mb-2">Message Received</h3>
            <p className="font-body text-stark/60">We'll signal back shortly.</p>
        </motion.div>
    );
}

