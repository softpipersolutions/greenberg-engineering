'use client';

import Footer from '@/components/sections/Footer';

export default function TermsPage() {
    return (
        <main className="bg-void min-h-screen pt-24 pb-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-4xl">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-stark mb-12">Terms of Service</h1>

                <div className="prose prose-invert prose-lg text-stark/70">
                    <p>Last updated: October 24, 2024</p>

                    <h3>1. Agreement to Terms</h3>
                    <p>By accessing our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, you should not access or use this website.</p>

                    <h3>2. Intellectual Property Rights</h3>
                    <p>Unless otherwise indicated, the Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Greenberg Engineering.</p>

                    <h3>3. User Representations</h3>
                    <p>By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you will not access the Site through automated or non-human means.</p>

                    <h3>4. Limitation of Liability</h3>
                    <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
