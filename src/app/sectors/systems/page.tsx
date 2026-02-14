'use client';

import Footer from '@/components/sections/Footer';
import MagneticButton from '@/components/ui/MagneticButton';
import ParallaxHero from '@/components/ui/ParallaxHero';
import StatCard from '@/components/ui/StatCard';
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid';
import { Cpu, Network, Server, Share2, ArrowRight } from 'lucide-react';
import { SECTOR_GRADIENTS } from '@/lib/gradients';
import Link from 'next/link';
import BIM from '@/components/sector-visuals/systems/BIM';
import IoT from '@/components/sector-visuals/systems/IoT';
import DigitalTwin from '@/components/sector-visuals/systems/DigitalTwin';
import Cloud from '@/components/sector-visuals/systems/Cloud';
import SpotlightCard from '@/components/ui/SpotlightCard';
import SectorNavigation from '@/components/ui/SectorNavigation';

const stats = [
    { label: 'Data Points', value: '1B+', suffix: '/day' },
    { label: 'Uptime', value: 99.99, suffix: '%' },
    { label: 'Sensors Deployed', value: 5000, suffix: '+' },
    { label: 'Latency', value: '<5ms' },
];

const features = [
    {
        title: 'BIM Integration',
        description: 'Level 3 BIM models acting as the single source of truth.',
        header: <BIM />,
        icon: <Network className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'IoT Monitoring',
        description: 'Real-time structural health monitoring sensors.',
        header: <IoT />,
        icon: <Share2 className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Digital Twin',
        description: 'Virtual replicas for predictive maintenance.',
        header: <DigitalTwin />,
        icon: <Cpu className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Cloud Infrastructure',
        description: 'Secure, scalable data storage for project lifecycles.',
        header: <Cloud />,
        icon: <Server className="h-4 w-4 text-neutral-500" />,
    },
];

export default function SystemsPage() {
    return (
        <main className="bg-void min-h-screen">
            <ParallaxHero
                title="Systems"
                highlight="Engineering"
                description="Complexity requires choreography. We integrate mechanical, electrical, and digital systems into a unified intelligence that powers modern infrastructure."
                sectorId="03"
                gradient={SECTOR_GRADIENTS.systems}
            />

            {/* Tech Stats */}
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

            {/* Features Bento Grid */}
            <section className="container mx-auto px-6 md:px-12 lg:px-24 py-24">
                <div className="mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl text-stark mb-6">Digital Backbone</h2>
                    <p className="font-body text-xl text-stark/50 max-w-2xl">
                        Intelligent systems that think, react, and optimize.
                    </p>
                </div>

                <BentoGrid>
                    {features.map((item, i) => (
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
                    name: "Skills",
                    href: "/sectors/skills",
                    tagline: "Empowering the workforce of tomorrow.",
                    color: "#EC954E"
                }}
            />

            <Footer />
        </main>
    );
}
