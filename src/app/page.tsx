import Header from "@/components/ui/Header";
import MainLayout from "@/components/layout/MainLayout";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header />
      <MainLayout>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </MainLayout>
      <Footer />
    </div>
  );
}
