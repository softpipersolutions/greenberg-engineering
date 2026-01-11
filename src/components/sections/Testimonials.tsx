'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import FloatingCard from '@/components/ui/FloatingCard';

const testimonials = [
    {
        id: 1,
        quote: "Greenberg's engineering expertise transformed our infrastructure vision into reality. Their attention to detail is unmatched.",
        author: 'Sarah Chen',
        role: 'Director of Development',
        company: 'Metropolis Group',
    },
    {
        id: 2,
        quote: "The team's commitment to sustainability aligned perfectly with our ESG goals. A true partner in building a greener future.",
        author: 'Michael Okonkwo',
        role: 'CEO',
        company: 'GreenPath Industries',
    },
    {
        id: 3,
        quote: "Their systems integration capabilities saved us months of development time. Truly innovative approach to complex problems.",
        author: 'Priya Sharma',
        role: 'CTO',
        company: 'TechVentures Asia',
    },
    {
        id: 4,
        quote: "The training programs elevated our team's capabilities beyond expectations. Greenberg doesn't just build — they empower.",
        author: 'James Morrison',
        role: 'Operations Director',
        company: 'Global Construct Ltd',
    },
    {
        id: 5,
        quote: "Five years of zero incidents on our offshore projects. Greenberg's safety culture is the gold standard in our industry.",
        author: 'Elena Volkov',
        role: 'HSE Manager',
        company: 'North Sea Energy',
    },
];

export default function Testimonials() {
    return (
        <section className="relative py-24 md:py-40 bg-void overflow-hidden">
            {/* Background gradient */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    background: 'radial-gradient(ellipse at 30% 50%, rgba(45,90,169,0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(141,104,170,0.3) 0%, transparent 50%)',
                }}
            />

            {/* Section header */}
            <div className="relative z-10 px-6 md:px-12 lg:px-24 mb-16 md:mb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -150px 0px' }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="font-body text-sm tracking-[0.3em] text-stark/40 uppercase mb-4">
                        Client Stories
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-stark leading-[1.1]">
                        Trusted by
                        <br />
                        <motion.span
                            className="text-stark/40"
                            animate={{
                                backgroundImage: [
                                    'linear-gradient(90deg, #2C5DA9, #8D68AA)',
                                    'linear-gradient(90deg, #8D68AA, #D40114)',
                                    'linear-gradient(90deg, #D40114, #2C5DA9)',
                                ],
                            }}
                            style={{
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                        >
                            Industry Leaders
                        </motion.span>
                    </h2>
                </motion.div>
            </div>

            {/* Testimonial cards */}
            <div className="relative z-10 px-6 md:px-12 lg:px-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <FloatingCard
                            key={testimonial.id}
                            delay={index * 0.1}
                            intensity={0.5}
                            className={`${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <TestimonialCard testimonial={testimonial} index={index} />
                        </FloatingCard>
                    ))}
                </div>
            </div>

            {/* Large quote decoration */}
            <motion.div
                className="absolute top-1/4 right-0 text-[20rem] font-heading text-white/[0.02] leading-none select-none pointer-events-none"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
            >
                "
            </motion.div>
        </section>
    );
}

interface TestimonialCardProps {
    testimonial: typeof testimonials[0];
    index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
    const gradients = [
        'linear-gradient(135deg, #0A0F3C, #2C5DA9)',
        'linear-gradient(135deg, #33644A, #528940)',
        'linear-gradient(135deg, #3A294F, #8D68AA)',
        'linear-gradient(135deg, #844212, #EC954E)',
        'linear-gradient(135deg, #A20505, #D40114)',
    ];

    return (
        <motion.div
            className="relative h-full p-6 md:p-8 border border-white/10 bg-void/50 backdrop-blur-sm group"
            whileHover={{
                borderColor: 'rgba(255,255,255,0.3)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            }}
            transition={{ duration: 0.3 }}
        >
            {/* Gradient accent on hover */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: gradients[index % gradients.length] }}
            />

            {/* Quote icon */}
            <Quote
                className="w-8 h-8 text-white/10 mb-6 group-hover:text-white/20 transition-colors"
                strokeWidth={1}
            />

            {/* Quote text */}
            <p className="font-body text-lg md:text-xl text-stark/70 leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
            </p>

            {/* Author info */}
            <div className="relative z-10 flex items-center gap-4">
                {/* Avatar placeholder */}
                <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-stark font-heading text-lg"
                    style={{ background: gradients[index % gradients.length] }}
                >
                    {testimonial.author.charAt(0)}
                </div>

                <div>
                    <p className="font-heading text-stark font-medium">
                        {testimonial.author}
                    </p>
                    <p className="font-body text-sm text-stark/50">
                        {testimonial.role}, {testimonial.company}
                    </p>
                </div>
            </div>

            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-12 h-12 border-r border-t border-white/5 group-hover:border-white/20 transition-colors" />
        </motion.div>
    );
}
