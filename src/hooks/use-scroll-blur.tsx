import { useEffect, useState } from "react";

export const useScrollBlur = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };
    
    window.addEventListener("scroll", handleScroll, true);
    
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      clearTimeout(scrollTimeout);
    };
  }, []);
  
  return isScrolling;
};
