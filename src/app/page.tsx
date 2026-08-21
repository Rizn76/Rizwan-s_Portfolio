import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import EducationCertifications from "@/components/EducationCertifications";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <Hero />
      <FeaturedProjects />
      <ExperienceSection />
      <SkillsSection />
      <AboutSection />
      <EducationCertifications />
      <ContactSection />
    </div>
  );
}
