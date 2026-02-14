'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/sections/Footer';
import ParallaxHero from '@/components/ui/ParallaxHero';
import SectorNavigation from '@/components/ui/SectorNavigation';
import JobBoard from '@/components/company/JobBoard';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { Target, Users, Zap } from 'lucide-react';

const culture = [
    {
        title: 'Radical Ownership',
        description: 'We don’t have managers; we have leaders. You own your outcomes.',
        icon: Target
    },
    {
        title: 'Continuous Growth',
        description: 'Unlimited access to courses, certifications, and mentorship.',
        icon: Zap
    },
    {
        title: 'Collaborative Genius',
        description: 'Work alongside the best minds in structural and digital engineering.',
        icon: Users
    }
];

export default function CareersPage() {
    return (
        <main className="bg-void min-h-screen">
            <ParallaxHero
                title="Careers"
                highlight="Impact"
                description="We are always looking for visionaries who want to build the future of infrastructure. If you thrive on challenge, we want you."
                sectorId="00"
                gradient="linear-gradient(135deg, #EC954E 0%, #FFD9B2 100%)"
            />

            {/* Culture Grid */}
            <section className="container mx-auto px-6 md:px-12 lg:px-24 py-24 relative z-10 -mt-20">
                <div className="grid md:grid-cols-3 gap-6">
                    {culture.map((item, index) => (
                        <SpotlightCard key={item.title} className="h-full bg-void border-white/5">
                            <div className="p-8 h-full">
                                <item.icon className="w-8 h-8 text-[#EC954E] mb-6" />
                                <h3 className="font-heading text-xl text-stark mb-3">{item.title}</h3>
                                <p className="font-body text-stark/50 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </section>

            {/* Job Board */}
            <section className="container mx-auto px-6 md:px-12 lg:px-24 py-24 border-t border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
                    <div>
                        <h2 className="font-heading text-4xl text-stark mb-2">Open Positions</h2>
                        <p className="font-body text-stark/50">Join our mission.</p>
                    </div>
                </div>
                <JobBoard />
            </section>

            <SectorNavigation
                nextSector={{
                    name: "Contact",
                    href: "/#contact",
                    tagline: "Let's build something iconic.",
                    color: "#D40114"
                }}
            />

            <Footer />
        </main>
    );
}
