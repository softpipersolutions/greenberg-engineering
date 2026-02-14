'use client';

import Footer from '@/components/sections/Footer';

export default function ImpressumPage() {
    return (
        <main className="bg-void min-h-screen pt-24 pb-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-4xl">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-stark mb-12">Impressum</h1>

                <div className="space-y-8 text-stark/70 font-body text-lg">
                    <div>
                        <h3 className="text-stark font-heading text-2xl mb-2">Greenberg Engineering Pvt. Ltd.</h3>
                        <p>12th Floor, Cyber City Tower B</p>
                        <p>Gurugram, Haryana, 122002</p>
                        <p>India</p>
                    </div>

                    <div>
                        <h3 className="text-stark font-heading text-2xl mb-2">Represented by</h3>
                        <p>Devansh Gulati, Director</p>
                        <p>Gunjan Singh, Director</p>
                    </div>

                    <div>
                        <h3 className="text-stark font-heading text-2xl mb-2">Contact</h3>
                        <p>Phone: +91 124 456 7890</p>
                        <p>Email: contact@greenberg.engineering</p>
                    </div>

                    <div>
                        <h3 className="text-stark font-heading text-2xl mb-2">Corporate Identity Number (CIN)</h3>
                        <p>U74210DL2024PTC123456</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
