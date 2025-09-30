import { VarsLogo } from "./VarsLogo";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="w-full border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <VarsLogo />
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Changelog
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <Button variant="varsAccent">
            Get started
          </Button>
        </div>
      </div>
    </nav>
  );
};