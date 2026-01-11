import { Metadata } from 'next';
import InfraQHero from '@/components/sections/infra-q/InfraQHero';
import InfraQFeatures from '@/components/sections/infra-q/InfraQFeatures';
import InfraQRoadmap from '@/components/sections/infra-q/InfraQRoadmap';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
    title: 'Infra-Q | The Infrastructure Brain',
    description: 'AI-powered Detailed Project Reports, Risk Assessment, and Compliance for India\'s construction sector.',
};

export default function InfraQPage() {
    return (
        <main className="bg-void min-h-screen">
            <InfraQHero />
            <InfraQFeatures />
            <InfraQRoadmap />
            <Contact />
            <Footer />
        </main>
    );
}
