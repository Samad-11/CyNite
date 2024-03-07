
import Hero from "@/components/Hero";
import ScrollYProgress from "@/components/ScrollProgress";
import EventSection from "@/components/EventSection";
import SectionHeading from "@/components/SectionHeading";
import AboutSection from "@/components/AboutSection";
import SponsorSection from "@/components/SponsorSection";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <main className="">
      <ScrollYProgress />
      <Hero />
      <EventSection />
      <AboutSection />
      {/* <SponsorSection /> */}
      <TeamSection />

    </main>
  );
}
