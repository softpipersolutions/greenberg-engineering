'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, ArrowRight, Loader2 } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('loading');
        setTimeout(() => setFormState('success'), 2000);
    };

    return (
        <section
            ref={containerRef}
            id="contact"
            className="relative min-h-screen py-24 md:py-32 bg-void overflow-hidden"
        >
            {/* Starfield background */}
            <Starfield />

            {/* Portal ring animation */}
            <PortalRing scrollProgress={scrollYProgress} />

            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <motion.div
                    className="text-center mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="font-body text-sm tracking-[0.3em] text-stark/40 uppercase mb-4">
                        Get In Touch
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-stark leading-[1.1]">
                        Let's Create
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
                            Something Great
                        </span>
                    </h2>
                </motion.div>

                {/* Contact form */}
                {formState === 'success' ? (
                    <SuccessState />
                ) : (
                    <motion.form
                        onSubmit={handleSubmit}
                        className="max-w-2xl mx-auto space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                focused={focusedField === 'name'}
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                                delay={0}
                            />
                            <FormField
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                focused={focusedField === 'email'}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                                delay={0.1}
                            />
                        </div>

                        <FormField
                            label="Company"
                            name="company"
                            type="text"
                            placeholder="Your company"
                            focused={focusedField === 'company'}
                            onFocus={() => setFocusedField('company')}
                            onBlur={() => setFocusedField(null)}
                            delay={0.2}
                        />

                        <FormField
                            label="Message"
                            name="message"
                            type="textarea"
                            placeholder="Tell us about your project..."
                            focused={focusedField === 'message'}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            delay={0.3}
                        />

                        {/* Submit button */}
                        <motion.div
                            className="flex justify-center pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                            transition={{ delay: 0.4 }}
                        >
                            <MagneticButton
                                className="px-10 py-4 border-2 border-stark font-heading text-sm uppercase tracking-widest flex items-center gap-3"
                                onClick={() => { }}
                            >
                                {formState === 'loading' ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </MagneticButton>
                        </motion.div>
                    </motion.form>
                )}

                {/* Contact info */}
                <motion.div
                    className="mt-24 grid md:grid-cols-3 gap-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {[
                        { label: 'Email', value: 'hello@greenberg.com' },
                        { label: 'Phone', value: '+1 (555) 123-4567' },
                        { label: 'Location', value: 'Global Offices' },
                    ].map((item, i) => (
                        <div key={item.label}>
                            <p className="font-body text-xs tracking-[0.2em] text-stark/40 uppercase mb-2">
                                {item.label}
                            </p>
                            <p className="font-heading text-lg text-stark">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

interface FormFieldProps {
    label: string;
    name: string;
    type: 'text' | 'email' | 'textarea';
    placeholder: string;
    focused: boolean;
    onFocus: () => void;
    onBlur: () => void;
    delay: number;
}

function FormField({ label, name, type, placeholder, focused, onFocus, onBlur, delay }: FormFieldProps) {
    const isTextarea = type === 'textarea';
    const Component = isTextarea ? 'textarea' : 'input';

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -150px 0px' }}
            transition={{ delay }}
        >
            {/* Floating label */}
            <motion.label
                htmlFor={name}
                className="absolute left-0 font-body text-xs tracking-[0.2em] uppercase text-stark/40 transition-all duration-300"
                animate={{
                    top: focused ? -20 : 0,
                    color: focused ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)',
                }}
            >
                {label}
            </motion.label>

            {/* Input field */}
            <Component
                id={name}
                name={name}
                type={type !== 'textarea' ? type : undefined}
                placeholder={focused ? placeholder : ''}
                onFocus={onFocus}
                onBlur={onBlur}
                rows={isTextarea ? 4 : undefined}
                className={`
          w-full bg-transparent border-b border-white/20 
          pt-6 pb-3 font-body text-stark text-lg
          placeholder:text-stark/30
          focus:outline-none focus:border-white/60
          transition-colors duration-300
          ${isTextarea ? 'resize-none' : ''}
        `}
            />

            {/* Animated underline */}
            <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: focused ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
            />
        </motion.div>
    );
}

function SuccessState() {
    return (
        <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Success burst animation */}
            <motion.div
                className="relative w-24 h-24 mx-auto mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 10, stiffness: 100 }}
            >
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative w-full h-full rounded-full bg-void flex items-center justify-center border border-white/20">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: 'spring' }}
                    >
                        <Send className="w-8 h-8 text-stark" />
                    </motion.div>
                </div>
            </motion.div>

            <h3 className="font-heading text-3xl md:text-4xl font-bold text-stark mb-4">
                Message Sent!
            </h3>
            <p className="font-body text-lg text-stark/60 max-w-md mx-auto">
                Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
        </motion.div>
    );
}

function PortalRing({ scrollProgress }: { scrollProgress: any }) {
    return (
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] pointer-events-none"
            style={{
                opacity: useTransform(scrollProgress, [0.2, 0.5, 0.8], [0, 0.3, 0]),
            }}
        >
            {/* Outer ring */}
            <motion.div
                className="absolute inset-0 rounded-full border border-white/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />

            {/* Middle ring with gradient */}
            <motion.div
                className="absolute inset-10 rounded-full"
                style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(45,90,169,0.3), transparent, rgba(141,104,170,0.3), transparent)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Inner ring */}
            <motion.div
                className="absolute inset-20 rounded-full border border-white/5"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
        </motion.div>
    );
}

function Starfield() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );
}
