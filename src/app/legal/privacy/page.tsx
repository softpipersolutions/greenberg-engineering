import { Metadata } from 'next';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
    title: 'Privacy Policy | Greenberg Engineering',
    description: 'How Greenberg Engineering collects, uses, and protects your personal data.',
};

export default function PrivacyPage() {
    return (
        <main className="bg-void min-h-screen pt-24 pb-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-4xl">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-stark mb-12">Privacy Policy</h1>

                <div className="prose prose-invert prose-lg text-stark/70">
                    <p>Last updated: March 13, 2026</p>

                    <h3>1. Introduction</h3>
                    <p>Greenberg Engineering Pvt. Ltd. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.</p>

                    <h3>2. Data We Collect</h3>
                    <p>We may collect, use, store, and transfer different kinds of personal data about you, including:</p>
                    <ul>
                        <li><strong>Identity Data:</strong> Name, title, and job role</li>
                        <li><strong>Contact Data:</strong> Email address, phone number, and company name</li>
                        <li><strong>Technical Data:</strong> IP address, browser type, operating system, and device information</li>
                        <li><strong>Usage Data:</strong> Pages visited, time spent on pages, and navigation paths</li>
                    </ul>

                    <h3>3. How We Collect Your Data</h3>
                    <p>We collect data through:</p>
                    <ul>
                        <li>Contact forms submitted on our website</li>
                        <li>Cookies and similar tracking technologies</li>
                        <li>Server logs and analytics tools</li>
                    </ul>

                    <h3>4. How We Use Your Data</h3>
                    <p>We use your personal data to:</p>
                    <ul>
                        <li>Respond to your inquiries via our contact forms</li>
                        <li>Analyze website usage to improve our services</li>
                        <li>Send you information about our services, where you have opted in</li>
                        <li>Comply with legal obligations</li>
                    </ul>

                    <h3>5. Data Sharing</h3>
                    <p>We do not sell your personal data to third parties. We may share data with trusted service providers who assist us in operating our website and delivering our services, subject to confidentiality agreements.</p>

                    <h3>6. Data Retention</h3>
                    <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law.</p>

                    <h3>7. Data Security</h3>
                    <p>We have implemented appropriate technical and organizational measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. These include encryption, access controls, and regular security assessments.</p>

                    <h3>8. Your Rights</h3>
                    <p>Under applicable data protection laws, you may have the right to:</p>
                    <ul>
                        <li>Request access to your personal data</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Object to processing of your data</li>
                        <li>Request data portability</li>
                    </ul>

                    <h3>9. Cookies</h3>
                    <p>Our website uses cookies to enhance your browsing experience and collect analytics data. You can control cookie settings through your browser preferences.</p>

                    <h3>10. Contact Us</h3>
                    <p>For any questions about this privacy policy or to exercise your data rights, please contact us at <a href="mailto:greenberg.connect@gmail.com" className="text-[#2C5DA9] hover:underline">greenberg.connect@gmail.com</a>.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
