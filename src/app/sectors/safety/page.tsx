'use client';

import Footer from '@/components/sections/Footer';
import MagneticButton from '@/components/ui/MagneticButton';
import ParallaxHero from '@/components/ui/ParallaxHero';
import StatCard from '@/components/ui/StatCard';
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid';
import { Shield, AlertTriangle, Eye, Activity, ArrowRight } from 'lucide-react';
import { SECTOR_GRADIENTS } from '@/lib/gradients';
import Link from 'next/link';
import ZeroHarm from '@/components/sector-visuals/safety/ZeroHarm';
import HazardAI from '@/components/sector-visuals/safety/HazardAI';
import Emergency from '@/components/sector-visuals/safety/Emergency';
import Health from '@/components/sector-visuals/safety/Health';
import SpotlightCard from '@/components/ui/SpotlightCard';
import SectorNavigation from '@/components/ui/SectorNavigation';

const stats = [
    { label: 'LTI Free Hours', value: '4.5M', suffix: '+' },
    { label: 'Safety Audits', value: 1200, suffix: '/yr' },
    { label: 'Incidents', value: 0, suffix: 'Target' },
    { label: 'Training Hours', value: '250k', suffix: '+' },
];

const protocols = [
    {
        title: 'Zero Harm Policy',
        description: 'Our non-negotiable commitment to ensuring every worker returns home safe, every day.',
        header: <ZeroHarm />,
        icon: <Shield className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'AI Hazard Detection',
        description: 'Using computer vision to identify potential risks on site in real-time.',
        header: <HazardAI />,
        icon: <Eye className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Emergency Response',
        description: 'Rigorous drills and state-of-the-art medical facilities at every project site.',
        header: <Emergency />,
        icon: <AlertTriangle className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Health Monitoring',
        description: 'Wearable tech to monitor vitals and fatigue levels of workforce.',
        header: <Health />,
        icon: <Activity className="h-4 w-4 text-neutral-500" />,
    },
];

export default function SafetyPage() {
    return (
        <main className="bg-void min-h-screen">
            <ParallaxHero
                title="Safety"
                highlight="First"
                description="In our line of work, there is no margin for error. We engineer safety into the process before a single brick is laid."
                sectorId="05"
                gradient={SECTOR_GRADIENTS.safety}
            />

            {/* Zero Harm Stats */}
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

            {/* Protocols Bento Grid */}
            <section className="container mx-auto px-6 md:px-12 lg:px-24 py-24">
                <div className="mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl text-stark mb-6">Protective Shield</h2>
                    <p className="font-body text-xl text-stark/50 max-w-2xl">
                        Advanced technology meets rigorous discipline.
                    </p>
                </div>

                <BentoGrid>
                    {protocols.map((item, i) => (
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
                    name: "Infrastructure",
                    href: "/sectors/infrastructure",
                    tagline: "The foundation of civilization.",
                    color: "#2C5DA9"
                }}
            />

            <Footer />
        </main>
    );
}
