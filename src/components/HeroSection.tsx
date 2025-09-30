import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Subtle grid background - exactly like vars.gg */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal mb-8 text-white leading-[1.1] tracking-tight">
          The Premier Professional
          <br />
          Technology Fraternity
          <br />
          <span className="text-white/60">at Virginia Tech</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Kappa Theta Pi fosters a community of students passionate
          <br />
          about technology and innovation.
        </p>

        <Button 
          variant="outline" 
          className="bg-white text-black border-white hover:bg-white/90 font-medium px-6 py-3 text-base"
          asChild
        >
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfGAmgra6nKbO95DBAfM4O08yxWK0S6bf1DWztz3KIytlgQHg/viewform" target="_blank" rel="noopener noreferrer">
            Fall 2025 Interest Form
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
};