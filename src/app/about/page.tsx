import { Metadata } from 'next';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import TeamGrid from '@/components/sections/about/TeamGrid';

export const metadata: Metadata = {
    title: 'About Us | Greenberg Engineering',
    description: 'Building the infrastructure intelligence layer for India. Led by Devansh Gulati and Gunjan Singh.',
};

export default function AboutPage() {
    return (
        <main className="bg-void min-h-screen pt-24">
            <div className="container mx-auto px-6 pt-12 pb-12 text-center">
                <span className="font-mono text-stark/40 text-xs tracking-[0.2em] uppercase mb-6 block">
                    Our Mission
                </span>
                <h1 className="font-heading text-4xl md:text-6xl font-bold text-stark max-w-4xl mx-auto leading-tight mb-8">
                    Building the <span className="text-[#2C5DA9]">Brain</span> for
                    India's Infrastructure.
                </h1>
                <p className="font-body text-xl text-stark/60 max-w-2xl mx-auto mb-12">
                    We combine deep structural expertise with cutting-edge intelligence to ensure every project is safe, compliant, and optimized for tomorrow.
                </p>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-stark/20 to-transparent mx-auto" />
            </div>

            <TeamGrid />
            <Contact />
            <Footer />
        </main>
    );
}
