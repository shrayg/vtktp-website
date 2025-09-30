import { Code } from "lucide-react";

interface VarsLogoProps {
  className?: string;
}

export const VarsLogo = ({ className = "" }: VarsLogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
        <Code className="w-5 h-5 text-accent-foreground" />
      </div>
      <span className="text-xl font-bold text-foreground">vars.gg</span>
    </div>
  );
};