'use client';

import { motion, useMotionValue, MotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Loader2, CheckCircle2, AlertCircle, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                setErrorMessage(data.error || 'Something went wrong. Please try again.');
                setFormState('error');
                return;
            }

            setFormState('success');
            setFormData({ name: '', email: '', message: '' });
        } catch {
            setErrorMessage('Network error. Please check your connection and try again.');
            setFormState('error');
        }
    };

    return (
        <section
            ref={containerRef}
            id="contact"
            className="relative min-h-screen py-24 md:py-32 bg-void overflow-hidden flex items-center"
        >
            {/* Constellation Background */}
            <ConstellationField mouseX={mouseX} mouseY={mouseY} />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
                    {/* Left Column: Heading & Info */}
                    <div className="text-left lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            {/* Status badge */}
                            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 backdrop-blur-sm mb-10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="font-mono text-[11px] text-green-400/80 uppercase tracking-[0.2em]">
                                    Open for Collaboration
                                </span>
                            </div>

                            {/* Main heading */}
                            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-stark leading-[0.95] mb-4">
                                <motion.span
                                    className="block"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, duration: 0.7 }}
                                >
                                    Let&apos;s
                                </motion.span>
                                <motion.span
                                    className="block relative"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.7 }}
                                >
                                    <span className="relative inline-block">
                                        Connect
                                        <motion.span
                                            className="absolute -bottom-1 left-0 w-full h-[3px]"
                                            style={{
                                                background: 'linear-gradient(90deg, #8D68AA, #6B8DD6, #8D68AA)',
                                                backgroundSize: '200% 100%',
                                                transformOrigin: 'left',
                                            }}
                                            initial={{ scaleX: 0, opacity: 0 }}
                                            whileInView={{ scaleX: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                                        />
                                    </span>
                                </motion.span>
                                <motion.span
                                    className="block text-stark/40"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.7 }}
                                >
                                    The Dots.
                                </motion.span>
                            </h2>

                            {/* Subtitle */}
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="font-body text-lg text-stark/50 leading-relaxed max-w-md mb-14"
                            >
                                Whether you&apos;re planning a major infrastructure project or seeking
                                expert engineering consultation, we&apos;re here to help turn your
                                vision into reality.
                            </motion.p>

                            {/* Contact info cards */}
                            <div className="space-y-4">
                                <motion.a
                                    href="mailto:greenberg.connect@gmail.com"
                                    className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#8D68AA]/30 transition-all duration-300"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    whileHover={{ x: 4 }}
                                >
                                    <div className="w-11 h-11 rounded-lg bg-[#8D68AA]/10 border border-[#8D68AA]/20 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-[#8D68AA]" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-mono text-[10px] text-stark/30 uppercase tracking-[0.2em] mb-0.5">Contact</div>
                                        <div className="font-body text-sm text-stark/80 group-hover:text-stark transition-colors">
                                            greenberg.connect@gmail.com
                                        </div>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-stark/20 sm:ml-auto group-hover:text-[#8D68AA] group-hover:translate-x-1 transition-all" />
                                </motion.a>

                                <motion.div
                                    className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <div className="w-11 h-11 rounded-lg bg-[#8D68AA]/10 border border-[#8D68AA]/20 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-[#8D68AA]" />
                                    </div>
                                    <div>
                                        <div className="font-mono text-[10px] text-stark/30 uppercase tracking-[0.2em] mb-1">Registered Office</div>
                                        <div className="font-body text-sm text-stark/80 leading-relaxed">
                                            5/178, Vikas Nagar Thana Road<br />
                                            Vikas Nagar, Lucknow<br />
                                            Uttar Pradesh, 226022
                                            <span className="block mt-2 font-mono text-xs text-stark/40 tracking-wider">GSTIN: 09AAMCG0423A1Z3</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative"
                    >
                        {/* Animated gradient border */}
                        <div
                            className="absolute -inset-[1px] rounded-2xl opacity-40"
                            style={{
                                background: 'linear-gradient(135deg, rgba(141,104,170,0.4), rgba(107,141,214,0.2), rgba(141,104,170,0.1), transparent, transparent, rgba(141,104,170,0.2))',
                                backgroundSize: '300% 300%',
                                animation: 'gradient-shift 8s ease infinite',
                            }}
                        />

                        {/* Glass card */}
                        <div className="relative bg-[#0a0a0f]/80 backdrop-blur-2xl rounded-2xl border border-white/[0.06] overflow-hidden">
                            {/* Top accent line */}
                            <div
                                className="h-[1px] w-full"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(141,104,170,0.5), rgba(107,141,214,0.3), transparent)',
                                }}
                            />

                            {formState === 'success' ? (
                                <SuccessState />
                            ) : (
                                <form onSubmit={handleSubmit} className="p-8 md:p-10">
                                    {/* Form header */}
                                    <div className="mb-10">
                                        <p className="font-body text-sm text-stark/40 leading-relaxed">
                                            Are you interested in our engineering services, or looking to join our team?
                                            For career opportunities, visit our{' '}
                                            <a href="/company/careers" className="text-[#8D68AA] hover:text-[#a882c5] underline underline-offset-2 transition-colors">
                                                Careers page
                                            </a>.
                                            Otherwise, fill out the form below and our team will respond within 24 hours.
                                        </p>
                                    </div>

                                    {/* Error message */}
                                    {formState === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, height: 0 }}
                                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                                            exit={{ opacity: 0, y: -10, height: 0 }}
                                            className="mb-8"
                                        >
                                            <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/[0.06] border border-red-500/15">
                                                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                                <p className="font-body text-sm text-red-300/80 flex-1">{errorMessage}</p>
                                                <button
                                                    type="button"
                                                    onClick={() => setFormState('idle')}
                                                    className="text-red-400/40 hover:text-red-300 text-xs mt-0.5 transition-colors"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Form fields */}
                                    <div className="space-y-6">
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <FloatingInput
                                                label="Name"
                                                name="name"
                                                type="text"
                                                placeholder="Your full name"
                                                required
                                                value={formData.name}
                                                onChange={(val) => setFormData(prev => ({ ...prev, name: val }))}
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <FloatingInput
                                                label="Email"
                                                name="email"
                                                type="email"
                                                placeholder="your@email.com"
                                                required
                                                value={formData.email}
                                                onChange={(val) => setFormData(prev => ({ ...prev, email: val }))}
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <FloatingInput
                                                label="Message"
                                                name="message"
                                                type="textarea"
                                                placeholder="Tell us about your project or vision..."
                                                value={formData.message}
                                                onChange={(val) => setFormData(prev => ({ ...prev, message: val }))}
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Submit button */}
                                    <motion.div
                                        className="pt-8"
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <motion.button
                                            type="submit"
                                            disabled={formState === 'loading'}
                                            className="group relative w-full py-4 px-8 rounded-xl font-heading text-sm uppercase tracking-[0.15em] overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                            style={{
                                                background: 'linear-gradient(135deg, #8D68AA, #6B8DD6)',
                                            }}
                                            whileHover={{ scale: 1.01, y: -1 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {/* Shine effect */}
                                            <motion.span
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                style={{
                                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15), transparent 50%, rgba(255,255,255,0.05))',
                                                }}
                                            />

                                            <span className="relative z-10 flex items-center justify-center gap-3 text-white font-medium">
                                                {formState === 'loading' ? (
                                                    <>
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        Send Message
                                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                                    </>
                                                )}
                                            </span>

                                            {/* Bottom glow */}
                                            <span
                                                className="absolute -bottom-2 left-1/4 right-1/4 h-8 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                                                style={{ background: 'linear-gradient(135deg, #8D68AA, #6B8DD6)' }}
                                            />
                                        </motion.button>
                                    </motion.div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* CSS for gradient animation */}
            <style jsx>{`
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </section>
    );
}

/* ─── Floating Label Input ─── */

interface FloatingInputProps {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    required?: boolean;
    value?: string;
    onChange?: (value: string) => void;
}

function FloatingInput({ label, name, type, placeholder, required, value, onChange }: FloatingInputProps) {
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const fieldValue = value ?? '';
    const isActive = isFocused || fieldValue.length > 0;
    const isTextarea = type === 'textarea';

    return (
        <div
            className="relative group cursor-text"
            onClick={() => inputRef.current?.focus()}
        >
            {/* Label */}
            <label
                className={`
                    absolute left-4 font-mono text-[10px] uppercase tracking-[0.15em] transition-all duration-300 pointer-events-none z-10
                    ${isActive
                        ? 'top-2.5 text-[#8D68AA]'
                        : 'top-1/2 -translate-y-1/2 text-stark/30'
                    }
                    ${isTextarea && !isActive ? 'top-5 -translate-y-0' : ''}
                `}
            >
                {label}
            </label>

            {/* Input field */}
            {isTextarea ? (
                <textarea
                    ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                    name={name}
                    value={fieldValue}
                    placeholder={isFocused ? placeholder : ''}
                    required={required}
                    onChange={(e) => onChange?.(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    rows={4}
                    className={`
                        w-full bg-white/[0.03] border border-white/[0.08] rounded-xl
                        ${isActive ? 'pt-7 pb-3' : 'py-4'} px-4
                        text-[15px] font-body text-stark resize-none
                        placeholder:text-stark/20
                        focus:outline-none focus:border-[#8D68AA]/40 focus:bg-white/[0.04]
                        hover:border-white/[0.12]
                        transition-all duration-300
                    `}
                />
            ) : (
                <input
                    ref={inputRef as React.RefObject<HTMLInputElement>}
                    name={name}
                    type={type}
                    value={fieldValue}
                    placeholder={isFocused ? placeholder : ''}
                    required={required}
                    onChange={(e) => onChange?.(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={`
                        w-full bg-white/[0.03] border border-white/[0.08] rounded-xl
                        ${isActive ? 'pt-6 pb-2' : 'py-4'} px-4
                        text-[15px] font-body text-stark
                        placeholder:text-stark/20
                        focus:outline-none focus:border-[#8D68AA]/40 focus:bg-white/[0.04]
                        hover:border-white/[0.12]
                        transition-all duration-300
                    `}
                />
            )}

            {/* Focus glow */}
            {isFocused && (
                <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        boxShadow: '0 0 0 1px rgba(141,104,170,0.15), 0 4px 20px rgba(141,104,170,0.08)',
                    }}
                />
            )}
        </div>
    );
}

/* ─── Constellation Background ─── */

interface Star {
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
}

function ConstellationField({ mouseX, mouseY }: { mouseX: MotionValue<number>, mouseY: MotionValue<number> }) {
    const [stars] = useState<Star[]>(() =>
        Array.from({ length: 50 }).map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 0.5,
            delay: Math.random() * 5,
            duration: 3 + Math.random() * 3,
        }))
    );

    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* Gradient Orb following mouse */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
                style={{
                    background: 'radial-gradient(circle, rgba(141,104,170,0.08), transparent 70%)',
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />

            {/* Ambient gradient blobs */}
            <div
                className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-[150px] opacity-30"
                style={{ background: 'radial-gradient(circle, rgba(141,104,170,0.12), transparent 70%)' }}
            />
            <div
                className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: 'radial-gradient(circle, rgba(107,141,214,0.1), transparent 70%)' }}
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
                        opacity: [0.05, 0.4, 0.05],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay
                    }}
                />
            ))}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.08]">
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
                <motion.line
                    x1="50%" y1="10%" x2="85%" y2="50%"
                    stroke="white" strokeWidth="0.5" strokeDasharray="3 7"
                    animate={{ strokeDashoffset: [0, 10] }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                />
            </svg>
        </div>
    );
}

/* ─── Success State ─── */

function SuccessState() {
    return (
        <motion.div
            className="flex flex-col items-center justify-center text-center p-12 md:p-16 min-h-[420px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            {/* Success ring animation */}
            <div className="relative mb-8">
                <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, rgba(141,104,170,0.2), rgba(74,222,128,0.2))',
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [0.8, 1.5, 1.5], opacity: [0.6, 0.2, 0] }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                />
                <motion.div
                    className="w-20 h-20 rounded-full flex items-center justify-center border border-green-500/30"
                    style={{
                        background: 'linear-gradient(135deg, rgba(74,222,128,0.1), rgba(141,104,170,0.05))',
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                >
                    <CheckCircle2 className="w-9 h-9 text-green-400" />
                </motion.div>
            </div>

            <motion.h3
                className="font-heading text-2xl md:text-3xl font-bold text-stark mb-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                Message Sent
            </motion.h3>
            <motion.p
                className="font-body text-stark/50 max-w-xs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                Thank you for reaching out. Our team will get back to you within 24 hours.
            </motion.p>

            {/* Decorative particles */}
            {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-[#8D68AA]/60"
                    initial={{
                        x: 0,
                        y: 0,
                        opacity: 0,
                    }}
                    animate={{
                        x: Math.cos((i * Math.PI * 2) / 6) * 80,
                        y: Math.sin((i * Math.PI * 2) / 6) * 80,
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.5, 0],
                    }}
                    transition={{
                        duration: 1.2,
                        delay: 0.3 + i * 0.05,
                        ease: 'easeOut',
                    }}
                />
            ))}
        </motion.div>
    );
}
