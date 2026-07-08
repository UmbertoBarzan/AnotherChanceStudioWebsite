import ContactSection from "@/components/ContactSection";
import HomeHeroClient from "@/components/HomeHeroClient";
import HomeAboutClient from "@/components/HomeAboutClient";
import ProjectGrid from "@/components/ProjectGrid";
import ServiceCards from "@/components/ServiceCards";

export default function Home() {
  return (
    <main className="bg-white text-neutral-950">
      <HomeHeroClient />
      <ServiceCards />
      <ProjectGrid />
      <HomeAboutClient />
      <ContactSection />
    </main>
  );
}
