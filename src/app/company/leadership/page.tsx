'use client';

import Footer from '@/components/sections/Footer';
import TeamGrid from '@/components/sections/about/TeamGrid';
import ParallaxHero from '@/components/ui/ParallaxHero';
import SectorNavigation from '@/components/ui/SectorNavigation';

export default function LeadershipPage() {
    return (
        <main className="bg-void min-h-screen">
            <ParallaxHero
                title="Leadership"
                highlight="Team"
                description="Guiding Greenberg Engineering towards a safer, smarter, and more sustainable future."
                sectorId="00"
                gradient="linear-gradient(135deg, #FFFFFF 0%, #9CA3AF 100%)"
            />

            {/* Team Grid */}
            <div className="-mt-20 relative z-10">
                <TeamGrid />
            </div>

            <SectorNavigation
                nextSector={{
                    name: "Careers",
                    href: "/company/careers",
                    tagline: "Join the frontline of engineering excellence.",
                    color: "#EC954E"
                }}
            />

            <Footer />
        </main>
    );
}
