import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
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
  title: "Greenberg Engineering | Create The Future With Us",
  description: "Engineering solutions that defy gravity. Five pillars of excellence: Infrastructure, ESG, Systems, Skills, and Safety. Transforming industries across the globe.",
  keywords: ["engineering", "infrastructure", "ESG", "sustainability", "systems integration", "safety", "construction", "innovation"],
  authors: [{ name: "Greenberg Engineering" }],
  openGraph: {
    title: "Greenberg Engineering | Create The Future With Us",
    description: "Engineering solutions that defy gravity",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenberg Engineering",
    description: "Create The Future With Us",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
