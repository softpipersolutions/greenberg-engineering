'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/sections/Footer';
import MagneticButton from '@/components/ui/MagneticButton';
import ParallaxHero from '@/components/ui/ParallaxHero';
import StatCard from '@/components/ui/StatCard';
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid';
import { Building2, Route, Hammer, Map, ArrowRight } from 'lucide-react';
import { SECTOR_GRADIENTS } from '@/lib/gradients';
import Link from 'next/link';
import HighRise from '@/components/sector-visuals/infrastructure/HighRise';
import Bridge from '@/components/sector-visuals/infrastructure/Bridge';
import UrbanPlanning from '@/components/sector-visuals/infrastructure/UrbanPlanning';
import Geotechnical from '@/components/sector-visuals/infrastructure/Geotechnical';
import SpotlightCard from '@/components/ui/SpotlightCard';
import SectorNavigation from '@/components/ui/SectorNavigation';

const capabilities = [
    {
        title: 'High-Rise Structural Design',
        description: 'Optimization for wind loads and seismic activity up to Zone V.',
        header: <HighRise />,
        icon: <Building2 className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Bridge & Highway Engineering',
        description: 'Long-span structural systems and durability planning.',
        header: <Bridge />,
        icon: <Route className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Urban Master Planning',
        description: 'Integrated utility and transport networks for smart cities.',
        header: <UrbanPlanning />,
        icon: <Map className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'Geotechnical Analysis',
        description: 'Advanced soil modeling and foundation optimization.',
        header: <Geotechnical />,
        icon: <Hammer className="h-4 w-4 text-neutral-500" />,
    },
];

const techSpecs = [
    { label: 'Max Height Designed', value: 450, suffix: 'm' },
    { label: 'Concrete Grade', value: 'M80+' },
    { label: 'Seismic Zone', value: 'Zone V' },
    { label: 'Design Life', value: 100, suffix: 'Years' },
];

export default function InfrastructurePage() {
    return (
        <main className="bg-void min-h-screen">
            <ParallaxHero
                title="Infra"
                highlight="structure"
                description="We don't just build structures; we architect the skeleton of civilization. From defining skylines to connecting nations, our infrastructure division operates at the limit of what physics allows."
                sectorId="01"
                gradient={SECTOR_GRADIENTS.infrastructure}
            />

            {/* Core Specs */}
            <section className="container mx-auto px-6 md:px-12 lg:px-24 py-24 relative z-10 -mt-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {techSpecs.map((spec, index) => (
                        <SpotlightCard key={spec.label} className="h-full">
                            <StatCard
                                {...spec}
                                delay={index * 0.1}
                            />
                        </SpotlightCard>
                    ))}
                </div>
            </section>

            {/* Capabilities Bento Grid */}
            <section className="container mx-auto px-6 md:px-12 lg:px-24 py-24">
                <div className="mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl text-stark mb-6">Capabilities</h2>
                    <p className="font-body text-xl text-stark/50 max-w-2xl">
                        Advanced computational design and BIM levels 3 & 4 delivering iconic efficiency.
                    </p>
                </div>

                <BentoGrid>
                    {capabilities.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 0 || i === 3 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </section>

            {/* Featured Project */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="relative h-[80vh] w-full rounded-3xl overflow-hidden border border-white/10 group cursor-pointer">
                    <div className="absolute inset-0 bg-[#0A0F3C] transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3">
                        <span className="font-mono text-[#2C5DA9] text-xs uppercase tracking-widest mb-4 block">Featured Project</span>
                        <h2 className="font-heading text-4xl md:text-6xl text-stark mb-6">The Zenith Interchange</h2>
                        <p className="font-body text-lg text-stark/60 mb-8 border-l-2 border-[#2C5DA9] pl-6">
                            A multi-level transport hub connecting 4 major highways, reducing congestion by 60% using predictive traffic modeling.
                        </p>
                        <div className="flex items-center gap-4 text-stark hover:text-[#2C5DA9] transition-colors">
                            <span className="font-body font-bold">View Case Study</span>
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </section>

            <SectorNavigation
                nextSector={{
                    name: "ESG",
                    href: "/sectors/esg",
                    tagline: "Sustainable solutions for a regenerative future.",
                    color: "#528940"
                }}
            />

            <Footer />
        </main>
    );
}
