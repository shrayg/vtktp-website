import { useScrollBlur } from "@/hooks/use-scroll-blur";
import { ReactNode } from "react";

interface ScrollBlurWrapperProps {
  children: ReactNode;
}

export const ScrollBlurWrapper = ({ children }: ScrollBlurWrapperProps) => {
  const isScrolling = useScrollBlur();
  
  return (
    <div className={`transition-all duration-150 ${isScrolling ? "motion-blur-scrolling" : ""}`}>
      {children}
    </div>
  );
};
