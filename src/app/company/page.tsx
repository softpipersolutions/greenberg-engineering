'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import Footer from '@/components/sections/Footer';
import { ArrowRight, Shield, Zap, TrendingUp, Users, Target } from 'lucide-react';
import ParallaxHero from '@/components/ui/ParallaxHero';
import StatCard from '@/components/ui/StatCard';
import Timeline from '@/components/company/Timeline';
import SpotlightCard from '@/components/ui/SpotlightCard';
import SectorNavigation from '@/components/ui/SectorNavigation';
import { SECTOR_GRADIENTS } from '@/lib/gradients';

const values = [
    { icon: Shield, title: 'Uncompromising Safety', description: 'Zero accidents is our only acceptable target.' },
    { icon: Zap, title: 'Radical Innovation', description: 'We don’t just follow standards; we set them.' },
    { icon: TrendingUp, title: 'Sustainable Growth', description: 'Engineering for a future that lasts generations.' },
];

const stats = [
    { label: 'Years of Excellence', value: 25, suffix: '+' },
    { label: 'Projects Delivered', value: 500, suffix: '+' },
    { label: 'Cities Covered', value: 12 },
    { label: 'Team Strength', value: 350, suffix: '+' },
];

export default function CompanyPage() {
    return (
        <main className="bg-void min-h-screen">
            <ParallaxHero
                title="About Us"
                highlight="Vision"
                description="Greenberg Engineering is more than a construction firm. We are an intelligence company that happens to build."
                sectorId="00"
                gradient="linear-gradient(135deg, #2C5DA9 0%, #79A3E7 50%, #C8DAF9 100%)"
            />

            {/* Stats Section */}
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

            {/* Timeline Section */}
            <section className="container mx-auto px-6 md:px-12 lg:px-24 py-24 border-t border-white/5">
                <div className="mb-24 text-center">
                    <h2 className="font-heading text-4xl md:text-5xl text-stark mb-6">Our Journey</h2>
                    <p className="font-body text-xl text-stark/50 max-w-2xl mx-auto">
                        From local roots to global impact.
                    </p>
                </div>
                <Timeline />
            </section>

            {/* Values Grid */}
            <section className="container mx-auto px-6 md:px-12 lg:px-24 py-24 border-t border-white/5">
                <div className="mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl text-stark mb-6">Core Values</h2>
                    <p className="font-body text-xl text-stark/50 max-w-2xl">
                        The principles that ground us.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <SpotlightCard key={value.title} className="h-full bg-white/[0.02] border-white/10">
                            <div className="p-8 h-full flex flex-col">
                                <value.icon className="w-10 h-10 text-stark/80 mb-6" />
                                <h3 className="font-heading text-xl text-stark mb-3">{value.title}</h3>
                                <p className="font-body text-stark/50 leading-relaxed">{value.description}</p>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </section>

            <SectorNavigation
                nextSector={{
                    name: "Leadership",
                    href: "/company/leadership",
                    tagline: "Meet the visionaries guiding our path.",
                    color: "#2C5DA9"
                }}
            />

            <Footer />
        </main>
    );
}
