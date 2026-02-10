import { Hero } from "../components/home/Hero";
import { TrustStrip } from "../components/home/TrustStrip";
import { ClientStrip } from "../components/home/ClientStrip";
import { WhoWeAre } from "../components/home/WhoWeAre";
import { Services } from "../components/home/Services";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { GlobalReach } from "../components/home/GlobalReach";
import { Section } from "../components/shared/Section";
import { ShapeBand } from "../components/shared/ShapeBand";

export function Home() {
  return (
    <>
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

      <Section className="py-16">
        <GlobalReach />
      </Section>
    </>
  );
}
