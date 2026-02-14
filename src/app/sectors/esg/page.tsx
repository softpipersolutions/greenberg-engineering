'use client';

import Footer from '@/components/sections/Footer';
import MagneticButton from '@/components/ui/MagneticButton';
import ParallaxHero from '@/components/ui/ParallaxHero';
import StatCard from '@/components/ui/StatCard';
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid';
import { Leaf, Wind, Activity, Globe, ArrowRight } from 'lucide-react';
import { SECTOR_GRADIENTS } from '@/lib/gradients';
import Link from 'next/link';
import Lifecycle from '@/components/sector-visuals/esg/Lifecycle';
import NetZero from '@/components/sector-visuals/esg/NetZero';
import Biodiversity from '@/components/sector-visuals/esg/Biodiversity';
import CircularEconomy from '@/components/sector-visuals/esg/CircularEconomy';
import SpotlightCard from '@/components/ui/SpotlightCard';
import SectorNavigation from '@/components/ui/SectorNavigation';

const metrics = [
    { label: 'Carbon Reduced', value: 450000, suffix: 'Tons' },
    { label: 'Water Recycled', value: '1.2M', suffix: 'Ltr' },
    { label: 'Green Energy', value: 85, suffix: '%' },
    { label: 'Compliance', value: 99.9, suffix: '%' },
];

const strategies = [
    {
        title: 'Lifecycle Assessment',
        description: 'Comprehensive analysis from raw material extraction to demolition.',
        header: <Lifecycle />,
        icon: <Activity className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Net-Zero Design',
        description: 'Buildings that generate as much energy as they consume.',
        header: <NetZero />,
        icon: <Wind className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Biodiversity Gain',
        description: 'Strategies to ensure post-development habitats are richer than before.',
        header: <Biodiversity />,
        icon: <Leaf className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Circular Economy',
        description: 'Waste management systems that prioritize reuse and regeneration.',
        header: <CircularEconomy />,
        icon: <Globe className="h-4 w-4 text-neutral-500" />,
    },
];

export default function ESGPage() {
    return (
        <main className="bg-void min-h-screen">
            <ParallaxHero
                title="E.S.G."
                highlight="Solutions"
                description="Sustainability is not an afterthought; it is the algorithm of our design. We engineer systems that regenerate the environment rather than deplete it."
                sectorId="02"
                gradient={SECTOR_GRADIENTS.esg}
            />

            {/* Impact Metrics */}
            <section className="container mx-auto px-6 md:px-12 lg:px-24 py-24 relative z-10 -mt-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {metrics.map((metric, index) => (
                        <SpotlightCard key={metric.label} className="h-full">
                            <StatCard
                                {...metric}
                                delay={index * 0.1}
                            />
                        </SpotlightCard>
                    ))}
                </div>
            </section>

            {/* Green Blueprint Bento Grid */}
            <section className="container mx-auto px-6 md:px-12 lg:px-24 py-24">
                <div className="mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl text-stark mb-6">The Green Blueprint</h2>
                    <p className="font-body text-xl text-stark/50 max-w-2xl">
                        Ecological integration at every scale of development.
                    </p>
                </div>

                <BentoGrid>
                    {strategies.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 1 || i === 2 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </section>

            <SectorNavigation
                nextSector={{
                    name: "Systems",
                    href: "/sectors/systems",
                    tagline: "The digital backbone of modern infrastructure.",
                    color: "#8D68AA"
                }}
            />

            <Footer />
        </main>
    );
}
