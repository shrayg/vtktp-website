import { KTPLogo } from "./VarsLogo";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About KTP" },
    { path: "/philanthropy", label: "Philanthropy" },
    { path: "/members", label: "Members" },
    { path: "/contact", label: "Contact" },
  ];
  
  return (
    <nav className="w-full bg-transparent relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Mobile Menu */}
          <div className="flex items-center gap-4 md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-foreground hover:bg-muted"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background border-border w-64">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={`text-base transition-colors ${
                        isActive(link.path) 
                          ? 'text-foreground font-medium' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <ThemeToggle />
                </div>
              </SheetContent>
            </Sheet>
            
            <Link to="/">
              <KTPLogo />
            </Link>
          </div>

          {/* Desktop Logo */}
          <Link to="/" className="hidden md:block">
            <KTPLogo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  isActive(link.path) 
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};