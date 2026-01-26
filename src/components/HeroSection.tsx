import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AccentBar } from "@/components/AccentBar";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-background">
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

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 
          className="text-7xl md:text-8xl lg:text-9xl font-serif mb-6 leading-[1] tracking-wide"
          style={{ 
            color: '#2b4c7e',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 400
          }}
        >
          ΚΘΠ
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 tracking-widest uppercase">
          Kappa Theta Pi
        </p>
        
        <div className="flex justify-center mb-8">
          <AccentBar color="blue" size="lg" />
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Kappa Theta Pi fosters a community of students passionate
          <br />
          about technology and innovation.
        </p>

        <Button 
          variant="outline" 
          className="bg-primary text-primary-foreground border-primary hover:bg-primary/90 font-medium px-6 py-3 text-base transition-transform duration-200 hover:scale-105"
          asChild
        >
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfGAmgra6nKbO95DBAfM4O08yxWK0S6bf1DWztz3KIytlgQHg/viewform" target="_blank" rel="noopener noreferrer">
            Spring 2026 Interest Form
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
};