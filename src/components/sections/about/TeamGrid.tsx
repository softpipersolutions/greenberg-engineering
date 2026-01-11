'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, BadgeCheck } from 'lucide-react';

const team = [
    {
        name: 'Devansh Gulati',
        role: 'Founder & Technical Director',
        creds: ['NIT MTech', 'NEBOSH Level 6', 'NFPA Certified'],
        bio: 'A technical visionary obsessed with structural integrity and safety systems. Leading the charge to build India\'s infrastructure intelligence layer.',
        image: '/team/devansh.jpg', // Placeholder
        initials: 'DG',
        color: '#2C5DA9'
    },
    {
        name: 'Gunjan Singh',
        role: 'Co-Founder & Growth Director',
        creds: ['Business Strategy', 'Govt. Relations', 'Operations Scale'],
        bio: 'The architect of scale. Expert in navigating complex regulatory landscapes and building high-performance operational engines.',
        image: '/team/gunjan.jpg', // Placeholder
        initials: 'GS',
        color: '#EC954E'
    }
];

export default function TeamGrid() {
    return (
        <section className="py-24 bg-void">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="font-mono text-stark/40 text-xs tracking-[0.2em] uppercase mb-4 block">
                        Leadership
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-stark">
                        The Minds Behind the <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-stark to-stark/50">
                            Structure
                        </span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {team.map((member, i) => (
                        <TeamCard key={i} member={member} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TeamCard({ member, index }: { member: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative"
        >
            {/* Image Area */}
            <div className="relative h-[400px] bg-[#1a1a1a] rounded-lg overflow-hidden mb-8 border border-white/5 group-hover:border-white/10 transition-colors">
                <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{ background: `linear-gradient(45deg, ${member.color}20, transparent)` }}
                />

                {/* Initials Placeholder since we don't have images yet */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span
                        className="font-heading text-9xl font-bold opacity-10 select-none group-hover:scale-110 transition-transform duration-700"
                        style={{ color: member.color }}
                    >
                        {member.initials}
                    </span>
                </div>

                {/* Corner details */}
                <div className="absolute top-4 right-4 flex gap-2">
                    {member.creds.map((cred: string, j: number) => (
                        <span key={j} className="text-[10px] font-mono border border-white/10 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-stark/60">
                            {cred}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="font-heading text-3xl font-bold text-stark mb-1 flex items-center gap-2">
                    {member.name}
                    {index === 0 && <BadgeCheck className="w-5 h-5 text-[#2C5DA9]" />}
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest block mb-4" style={{ color: member.color }}>
                    {member.role}
                </span>

                <p className="font-body text-stark/60 leading-relaxed mb-6 max-w-md">
                    {member.bio}
                </p>

                <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stark/40 hover:text-stark hover:border-white/30 hover:bg-white/5 transition-all">
                        <Linkedin size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stark/40 hover:text-stark hover:border-white/30 hover:bg-white/5 transition-all">
                        <Mail size={18} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
