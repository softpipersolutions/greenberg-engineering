import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Preloader from "@/components/global/Preloader";
import Navigation from "@/components/global/Navigation";
import CustomCursor from "@/components/global/CustomCursor";
import GradientOrb from "@/components/global/GradientOrb";
import ScrollProgress from "@/components/global/ScrollProgress";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://greenberg.engineering'),
  title: "Greenberg Engineering | Create The Future With Us",
  description: "Engineering solutions that defy gravity. Five pillars of excellence: Infrastructure, ESG, Systems, Skills, and Safety. Transforming industries across the globe.",
  keywords: ["engineering", "infrastructure", "ESG", "sustainability", "systems integration", "safety", "construction", "innovation"],
  authors: [{ name: "Greenberg Engineering" }],
  openGraph: {
    title: "Greenberg Engineering | Create The Future With Us",
    description: "Engineering solutions that defy gravity",
    type: "website",
    locale: "en_US",
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Greenberg Engineering — Create The Future With Us',
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenberg Engineering",
    description: "Create The Future With Us",
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} bg-void text-stark antialiased`}>
        <Preloader />
        <CustomCursor />
        <GradientOrb />
        <Navigation />
        <ScrollProgress />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
