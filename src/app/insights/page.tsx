import { Metadata } from 'next';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import InsightsList from '@/components/sections/insights/InsightsList';

export const metadata: Metadata = {
    title: 'Insights | Greenberg Engineering',
    description: 'Technical whitepapers, case studies, and industry analysis on infrastructure, ESG, and safety.',
};

export default function InsightsPage() {
    return (
        <main className="bg-void min-h-screen">
            <InsightsList />
            <Contact />
            <Footer />
        </main>
    );
}
