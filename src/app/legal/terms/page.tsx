import { Metadata } from 'next';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
    title: 'Terms of Service | Greenberg Engineering',
    description: 'Terms and conditions governing the use of Greenberg Engineering website and services.',
};

export default function TermsPage() {
    return (
        <main className="bg-void min-h-screen pt-24 pb-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-4xl">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-stark mb-12">Terms of Service</h1>

                <div className="prose prose-invert prose-lg text-stark/70">
                    <p>Last updated: March 13, 2026</p>

                    <h3>1. Agreement to Terms</h3>
                    <p>By accessing or using the Greenberg Engineering website (&quot;Site&quot;), you agree to be bound by these Terms of Service. If you do not agree, you should not access or use this Site.</p>

                    <h3>2. Intellectual Property Rights</h3>
                    <p>Unless otherwise indicated, the Site and its entire contents, features, and functionality — including all information, software, text, displays, images, video, audio, design, and code — are owned by Greenberg Engineering Pvt. Ltd. and are protected by international copyright, trademark, patent, and other intellectual property laws.</p>

                    <h3>3. Permitted Use</h3>
                    <p>You may access and use the Site for lawful purposes only. You agree not to:</p>
                    <ul>
                        <li>Use the Site in any way that violates any applicable law or regulation</li>
                        <li>Reproduce, distribute, or create derivative works from Site content without written permission</li>
                        <li>Attempt to gain unauthorized access to any part of the Site or its systems</li>
                        <li>Use automated means (bots, scrapers) to access the Site without our consent</li>
                    </ul>

                    <h3>4. User Representations</h3>
                    <p>By using the Site, you represent and warrant that:</p>
                    <ul>
                        <li>You have the legal capacity to comply with these Terms of Service</li>
                        <li>All information you provide is accurate and complete</li>
                        <li>You will not access the Site through automated or non-human means except as expressly permitted</li>
                    </ul>

                    <h3>5. Contact Form Submissions</h3>
                    <p>When you submit information through our contact forms, you acknowledge that the information provided will be used solely for the purpose of responding to your inquiry and for our internal records. We do not guarantee response times but endeavor to respond within a reasonable timeframe.</p>

                    <h3>6. Disclaimer of Warranties</h3>
                    <p>The Site is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We make no warranties, expressed or implied, regarding the Site&apos;s operation, accuracy, or availability.</p>

                    <h3>7. Limitation of Liability</h3>
                    <p>In no event will Greenberg Engineering, its directors, employees, or agents be liable for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the Site.</p>

                    <h3>8. Indemnification</h3>
                    <p>You agree to indemnify and hold harmless Greenberg Engineering from any claims, losses, or damages (including legal fees) arising out of your violation of these Terms or your use of the Site.</p>

                    <h3>9. Governing Law</h3>
                    <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh.</p>

                    <h3>10. Changes to Terms</h3>
                    <p>We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the Site after changes constitutes acceptance of the updated Terms.</p>

                    <h3>11. Contact Us</h3>
                    <p>For questions about these Terms, contact us at <a href="mailto:greenberg.connect@gmail.com" className="text-[#2C5DA9] hover:underline">greenberg.connect@gmail.com</a>.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
