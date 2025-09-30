import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight">
          Competitive coding,
          <br />
          <span className="text-accent">just 10x better.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Fast-paced, realtime coding duels. LeetCode meets Chess.com, all within your browser.
        </p>

        <Button variant="varsAccent" size="lg" className="text-lg px-8 py-6 h-auto">
          Get started
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};