import { KTPLogo } from "./VarsLogo";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="w-full bg-transparent relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/">
            <KTPLogo />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm transition-colors ${isActive('/') ? 'text-white' : 'text-white/70 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm transition-colors ${isActive('/about') ? 'text-white' : 'text-white/70 hover:text-white'}`}
            >
              About KTP
            </Link>
            <Link 
              to="/philanthropy" 
              className={`text-sm transition-colors ${isActive('/philanthropy') ? 'text-white' : 'text-white/70 hover:text-white'}`}
            >
              Philanthropy
            </Link>
            <Link 
              to="/members" 
              className={`text-sm transition-colors ${isActive('/members') ? 'text-white' : 'text-white/70 hover:text-white'}`}
            >
              Members
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm transition-colors ${isActive('/contact') ? 'text-white' : 'text-white/70 hover:text-white'}`}
            >
              Contact
            </Link>
          </div>

          <Button 
            variant="outline" 
            className="bg-white text-black border-white hover:bg-white/90 font-medium"
            asChild
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfGAmgra6nKbO95DBAfM4O08yxWK0S6bf1DWztz3KIytlgQHg/viewform" target="_blank" rel="noopener noreferrer">
              Join KTP
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};