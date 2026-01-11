import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Stats from "@/components/sections/Stats";
import InfrastructureSection from "@/components/sections/sectors/Infrastructure";
import ESGSection from "@/components/sections/sectors/ESG";
import SystemsSection from "@/components/sections/sectors/Systems";
import SkillsSection from "@/components/sections/sectors/Skills";
import SafetySection from "@/components/sections/sectors/Safety";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import InfraQPreview from "@/components/sections/InfraQPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-void">
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Manifesto */}
      <Manifesto />

      {/* Section 3: Stats */}
      <Stats />

      {/* Section 4-8: Sector Deep Dives */}
      <div id="sectors">
        <InfrastructureSection />
        <ESGSection />
        <SystemsSection />
        <SkillsSection />
        <SafetySection />
      </div>

      {/* Section 9: Projects */}
      <Projects />

      {/* Section 9.5: Infra-Q Preview */}
      <InfraQPreview />

      {/* Section 10: Testimonials */}
      <Testimonials />

      {/* Section 11: Contact */}
      <Contact />

      {/* Section 12: Footer */}
      <Footer />
    </main>
  );
}
