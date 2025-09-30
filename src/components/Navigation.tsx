import { VarsLogo } from "./VarsLogo";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="w-full bg-transparent relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <VarsLogo />
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Changelog
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Features
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Community
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Contact
            </a>
          </div>

          <Button variant="outline" className="bg-white text-black border-white hover:bg-white/90 font-medium">
            Get started
          </Button>
        </div>
      </div>
    </nav>
  );
};