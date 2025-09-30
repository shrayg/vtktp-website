import { useScrollBlur } from "@/hooks/use-scroll-blur";
import { ReactNode } from "react";

interface ScrollBlurWrapperProps {
  children: ReactNode;
}

export const ScrollBlurWrapper = ({ children }: ScrollBlurWrapperProps) => {
  const isScrolling = useScrollBlur();
  
  return (
    <div className="relative">
      <div 
        className="transition-all duration-100 ease-out"
        style={{
          filter: isScrolling ? "blur(2px)" : "blur(0px)",
        }}
      >
        {children}
      </div>
    </div>
  );
};
