'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const jobs = [
    {
        id: 1,
        title: 'Senior Structural Engineer',
        location: 'Mumbai, India',
        type: 'Full-time',
        department: 'Infrastructure',
        tags: ['High-Rise', 'Seismic Design', 'Team Lead']
    },
    {
        id: 2,
        title: 'ESG Data Analyst',
        location: 'Remote / Bengaluru',
        type: 'Full-time',
        department: 'ESG',
        tags: ['Python', 'Sustainability', 'Reporting']
    },
    {
        id: 3,
        title: 'Site Safety Manager',
        location: 'Delhi NCR',
        type: 'Contract',
        department: 'Safety',
        tags: ['OSHA', 'On-site', 'Training']
    },
    {
        id: 4,
        title: 'BIM Modeler',
        location: 'Hyderabad',
        type: 'Full-time',
        department: 'Systems',
        tags: ['Revit', '3D Modeling', 'Digital Twin']
    }
];

export default function JobBoard() {
    const [hoveredJob, setHoveredJob] = useState<number | null>(null);

    return (
        <div className="grid gap-4">
            {jobs.map((job, index) => (
                <Link
                    key={job.id}
                    href={`mailto:careers@greenberg.engineering?subject=Application for ${job.title}`}
                    className="group relative block"
                    onMouseEnter={() => setHoveredJob(job.id)}
                    onMouseLeave={() => setHoveredJob(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative overflow-hidden bg-white/[0.02] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                    >
                        {/* Hover Gradient */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                            style={{ background: 'linear-gradient(90deg, transparent, #2C5DA9, transparent)' }}
                        />

                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">

                            {/* Role Info */}
                            <div className="space-y-4">
                                <div>
                                    <span className="font-mono text-xs uppercase tracking-widest text-[#2C5DA9] mb-2 block">
                                        {job.department}
                                    </span>
                                    <h3 className="font-heading text-2xl md:text-3xl text-stark group-hover:text-white transition-colors">
                                        {job.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-4 text-stark/50 text-sm font-mono uppercase tracking-wide">
                                    <span className="flex items-center gap-2">
                                        <MapPin size={14} /> {job.location}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock size={14} /> {job.type}
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    {job.tags.map(tag => (
                                        <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/5 text-stark/40">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action */}
                            <div className="flex items-center gap-4 md:pl-8 md:border-l border-white/5">
                                <span className="hidden md:block font-body text-stark/40 group-hover:text-stark transition-colors">
                                    Apply Now
                                </span>
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#2C5DA9] group-hover:border-[#2C5DA9] transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5 text-stark/60 group-hover:text-white transition-colors" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </div>
    );
}
