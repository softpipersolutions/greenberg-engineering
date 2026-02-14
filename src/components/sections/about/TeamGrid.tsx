'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, BadgeCheck, ArrowUpRight } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlightCard';

const team = [
    {
        name: 'Devansh Gulati',
        role: 'Founder & Technical Director',
        creds: ['NIT MTech', 'NEBOSH Level 6', 'NFPA Certified'],
        bio: 'A technical visionary obsessed with structural integrity and safety systems. Leading the charge to build India\'s infrastructure intelligence layer.',
        initials: 'DG',
        color: '#2C5DA9', // Infrastructure Blue
        delay: 0
    },
    {
        name: 'Gunjan Singh',
        role: 'Co-Founder & Growth Director',
        creds: ['Business Strategy', 'Govt. Relations', 'Operations Scale'],
        bio: 'The architect of scale. Expert in navigating complex regulatory landscapes and building high-performance operational engines.',
        initials: 'GS',
        color: '#EC954E', // Skills Orange
        delay: 0.1
    },
    {
        name: 'Amitabh Srivastav',
        role: 'Tech Lead',
        creds: ['System Arch', 'Full Stack', 'AI Integration'],
        bio: 'The digital architect. Transforming complex engineering requirements into scalable, intelligent software solutions.',
        initials: 'AS',
        color: '#8D68AA', // Systems Purple
        delay: 0.2
    },
    {
        name: 'Akshay Hudda',
        role: 'Operations Lead',
        creds: ['Logistics', 'Process Ops', 'Resource Mgmt'],
        bio: ' ensuring seamless execution across all project verticals. Optimizing workflows for maximum efficiency and safety.',
        initials: 'AH',
        color: '#33644A', // ESG Green
        delay: 0.3
    },
    {
        name: 'Aditya Sharma',
        role: 'Marketing and Sales',
        creds: ['Brand Strategy', 'Market Analysis', 'Client Growth'],
        bio: 'Driving the narrative. Expanding market reach and building lasting partnerships with industry leaders.',
        initials: 'AS',
        color: '#D40114', // Safety Red
        delay: 0.4
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: member.delay }}
            className="h-full"
        >
            <SpotlightCard className="h-full bg-void border-white/5 group relative overflow-hidden" spotlightColor={member.color}>
                <div className="p-8 relative h-full flex flex-col z-10">
                    {/* Header: Role & Initials */}
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 font-heading font-bold text-xl text-stark/80 group-hover:scale-110 transition-transform duration-500" style={{ borderColor: `${member.color}40`, color: member.color }}>
                            {member.initials}
                        </div>
                        <div className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] uppercase tracking-wider font-mono text-stark/60">
                            {member.role}
                        </div>
                    </div>

                    {/* Name & Bio */}
                    <div className="mb-8">
                        <h3 className="font-heading text-2xl font-bold text-stark mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                            {member.name}
                        </h3>
                        <p className="font-body text-sm text-stark/50 leading-relaxed group-hover:text-stark/70 transition-colors">
                            {member.bio}
                        </p>
                    </div>

                    {/* Creds Tags */}
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                        {member.creds.map((cred: string, j: number) => (
                            <span key={j} className="text-[10px] font-mono border border-white/5 bg-black/20 px-2 py-1 rounded text-stark/40 group-hover:border-white/10 group-hover:text-stark/60 transition-colors">
                                {cred}
                            </span>
                        ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                        <div className="flex gap-4">
                            <button className="text-stark/30 hover:text-stark transition-colors">
                                <Linkedin size={18} />
                            </button>
                            <button className="text-stark/30 hover:text-stark transition-colors">
                                <Mail size={18} />
                            </button>
                        </div>
                        <motion.div
                            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-stark/30 opacity-0 group-hover:opacity-100 transition-opacity"
                            whileHover={{ rotate: 45, scale: 1.1 }}
                        >
                            <ArrowUpRight size={16} />
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Background Gradient */}
                <div
                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                    style={{ background: member.color }}
                />
            </SpotlightCard>
        </motion.div>
    );
}
