
import Hero from "@/components/Hero";
import ScrollYProgress from "@/components/ScrollProgress";
import EventSection from "@/components/EventSection";
import SectionHeading from "@/components/SectionHeading";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="cursor-none">
      <ScrollYProgress />
      <Hero />
      <EventSection />
      <AboutSection />
    </main>
  );
}
