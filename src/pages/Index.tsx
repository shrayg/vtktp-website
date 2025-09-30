import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CodeInterface } from "@/components/CodeInterface";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="h-screen overflow-hidden bg-background">
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default Index;
