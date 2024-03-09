
import Hero from "@/components/Hero";
import ScrollYProgress from "@/components/ScrollProgress";
import EventSection from "@/components/EventSection";
import SectionHeading from "@/components/SectionHeading";
import AboutSection from "@/components/AboutSection";
import SponsorSection from "@/components/SponsorSection";
import TeamSection from "@/components/TeamSection";
import Footer2 from "@/components/Footer2";

export default function Home() {
  return (
    <main className="">
      <ScrollYProgress />
      <Hero />
      <EventSection />
      <AboutSection />
      {/* <SponsorSection /> */}
      <TeamSection />
      {/* <Footer2 /> */}

    </main>
  );
}
