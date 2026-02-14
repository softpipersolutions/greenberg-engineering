'use client';

import Footer from '@/components/sections/Footer';
import MagneticButton from '@/components/ui/MagneticButton';
import ParallaxHero from '@/components/ui/ParallaxHero';
import StatCard from '@/components/ui/StatCard';
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid';
import { GraduationCap, Award, BookOpen, Users, ArrowRight } from 'lucide-react';
import { SECTOR_GRADIENTS } from '@/lib/gradients';
import Link from 'next/link';
import GET from '@/components/sector-visuals/skills/GET';
import SafetyCert from '@/components/sector-visuals/skills/SafetyCert';
import Leadership from '@/components/sector-visuals/skills/Leadership';
import DigitalSkills from '@/components/sector-visuals/skills/DigitalSkills';
import SpotlightCard from '@/components/ui/SpotlightCard';
import SectorNavigation from '@/components/ui/SectorNavigation';

const stats = [
    { label: 'Technicians Trained', value: '50000', suffix: '+' },
    { label: 'Placement Rate', value: 100, suffix: '%' },
    { label: 'Training Centers', value: 12 },
    { label: 'Courses Offered', value: 45 },
];

const programs = [
    {
        title: 'Graduate Engineer Trainee (GET)',
        description: 'Intensive 12-month rotation across all engineering disciplines.',
        header: <GET />,
        icon: <GraduationCap className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Advanced Safety Certification',
        description: 'Global standard safety protocols training (OSHA/NEBOSH).',
        header: <SafetyCert />,
        icon: <Award className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Leadership Development',
        description: 'Mentorship programs for future project managers.',
        header: <Leadership />,
        icon: <Users className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Digital Construction Skills',
        description: 'Mastery of BIM, drone surveying, and AI tools.',
        header: <DigitalSkills />,
        icon: <BookOpen className="h-4 w-4 text-neutral-500" />,
    },
];

export default function SkillsPage() {
    return (
        <main className="bg-void min-h-screen">
            <ParallaxHero
                title="Skills"
                highlight="Academy"
                description="Infrastructure is only as strong as the hands that build it. We invest heavily in training the next generation of engineers and skilled workforce."
                sectorId="04"
                gradient={SECTOR_GRADIENTS.skills}
            />

            {/* Academy Stats */}
            <section className="container mx-auto px-6 md:px-12 lg:px-24 py-24 relative z-10 -mt-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <SpotlightCard key={stat.label} className="h-full">
                            <StatCard
                                {...stat}
                                delay={index * 0.1}
                            />
                        </SpotlightCard>
                    ))}
                </div>
            </section>

            {/* Programs Bento Grid */}
            <section className="container mx-auto px-6 md:px-12 lg:px-24 py-24">
                <div className="mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl text-stark mb-6">Curriculum</h2>
                    <p className="font-body text-xl text-stark/50 max-w-2xl">
                        Building careers, not just structures.
                    </p>
                </div>

                <BentoGrid>
                    {programs.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                        />
                    ))}
                </BentoGrid>
            </section>

            <SectorNavigation
                nextSector={{
                    name: "Safety",
                    href: "/sectors/safety",
                    tagline: "No compromises. Zero harm.",
                    color: "#D40114"
                }}
            />

            <Footer />
        </main>
    );
}
