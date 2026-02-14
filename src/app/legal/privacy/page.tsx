'use client';

import Footer from '@/components/sections/Footer';

export default function PrivacyPage() {
    return (
        <main className="bg-void min-h-screen pt-24 pb-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-4xl">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-stark mb-12">Privacy Policy</h1>

                <div className="prose prose-invert prose-lg text-stark/70">
                    <p>Last updated: October 24, 2024</p>

                    <h3>1. Introduction</h3>
                    <p>Greenberg Engineering respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>

                    <h3>2. Data We Collect</h3>
                    <p>We may collect, use, store and transfer different kinds of personal data about you including:</p>
                    <ul>
                        <li>Identity Data (Name, title)</li>
                        <li>Contact Data (Email address, phone number)</li>
                        <li>Technical Data (IP address, browser type)</li>
                    </ul>

                    <h3>3. How We Use Your Data</h3>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to:</p>
                    <ul>
                        <li>Respond to your inquiries via our contact forms.</li>
                        <li>Analyze website usage to improve our services.</li>
                    </ul>

                    <h3>4. Data Security</h3>
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
