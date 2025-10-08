import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { lazy, Suspense, useState, useEffect } from "react";
import { AccentBar } from "@/components/AccentBar";

// Lazy load the heavy ASCIIText component with Three.js
const ASCIIText = lazy(() => import("./ASCIIText"));

export const HeroSection = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      // Use 1080p (1080px) as the baseline height
      const baselineHeight = 1080;
      const currentHeight = window.innerHeight;
      const newScale = Math.min(currentHeight / baselineHeight, 1);
      setScale(newScale);
    };

    // Calculate initial scale
    calculateScale();

    // Recalculate on window resize
    window.addEventListener('resize', calculateScale);
    
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  return (
    <section 
      className="relative h-screen flex flex-col items-center justify-center bg-background"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center center'
      }}
    >
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

      {/* ASCII Text Effect - Desktop Only (xl breakpoint excludes tablets) */}
      <div className="hidden xl:flex relative w-full max-w-4xl mx-auto px-6 h-[500px] mb-4 ascii-container items-center justify-center">
        <Suspense fallback={
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground"></div>
          </div>
        }>
          <ASCIIText 
            text="KTP"
            asciiFontSize={8}
            textFontSize={250}
            textColor="#fdf9f3"
            planeBaseHeight={10}
            enableWaves={true}
          />
        </Suspense>
      </div>
      
      <style>{`
        .light .ascii-container {
          filter: invert(1);
        }
      `}</style>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="xl:hidden text-5xl md:text-6xl font-normal mb-8 text-foreground leading-[1.1] tracking-tight">
          The Premier Professional
          <br />
          Technology Fraternity
          <br />
          <span className="text-muted-foreground">at Virginia Tech</span>
        </h1>
        
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