import { useEffect, useState } from "react";
import { runSanityChecks } from "./utils/helpers";

// Layout Components
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Background } from "./components/layout/Background";

// Home Components
import { Hero } from "./components/home/Hero";
import { TrustStrip } from "./components/home/TrustStrip";
import { ClientStrip } from "./components/home/ClientStrip";
import { WhoWeAre } from "./components/home/WhoWeAre";
import { Services } from "./components/home/Services";
import { WhyChooseUs } from "./components/home/WhyChooseUs";
import { CTA } from "./components/home/CTA";

// Shared Components
import { Section } from "./components/shared/Section";
import { ShapeBand } from "./components/shared/ShapeBand";
import { LoadingScreen } from "./components/LoadingScreen";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    runSanityChecks();
    
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Loading animation
    const timer = setTimeout(() => setLoading(false), 1500);
    
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.documentElement.style.scrollBehavior = '';
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Background />
      <Header scrolled={scrolled} />

      <main>
        <Hero />

        <Section className="pt-10">
          <TrustStrip />
        </Section>

        <Section className="pt-10">
          <ClientStrip />
        </Section>

        <ShapeBand tone="blue" />

        <Section className="py-16">
          <WhoWeAre />
        </Section>

        <ShapeBand tone="slate" />

        <Section className="pb-16">
          <Services />
        </Section>

        <Section className="pb-16">
          <WhyChooseUs />
        </Section>

        <Section className="pb-16">
          <CTA />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
