import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ASCIIText from "./ASCIIText";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background">
      {/* Subtle grid background - exactly like vars.gg */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] light:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* ASCII Text Effect - Desktop Only */}
      <div className="hidden lg:block relative w-full h-[600px] mb-12">
        <ASCIIText 
          text="KTP"
          asciiFontSize={10}
          textFontSize={300}
          textColor="#fdf9f3"
          planeBaseHeight={12}
          enableWaves={true}
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-8">
        <h1 className="lg:hidden text-5xl md:text-6xl font-normal mb-8 text-foreground leading-[1.1] tracking-tight">
          The Premier Professional
          <br />
          Technology Fraternity
          <br />
          <span className="text-muted-foreground">at Virginia Tech</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Kappa Theta Pi fosters a community of students passionate
          <br />
          about technology and innovation.
        </p>

        <Button 
          variant="outline" 
          className="bg-primary text-primary-foreground border-primary hover:bg-primary/90 font-medium px-6 py-3 text-base"
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