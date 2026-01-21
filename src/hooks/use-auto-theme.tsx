import { useEffect } from "react";
import { useTheme } from "next-themes";

/**
 * Hook that automatically switches theme based on time of day
 * - Light mode: 6:00 AM to 6:00 PM (daytime)
 * - Dark mode: 6:00 PM to 6:00 AM (nighttime)
 */
export function useAutoTheme() {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    // Check if user has manually set a preference (stored in localStorage)
    const storedPreference = localStorage.getItem("ktp-theme-manual");
    if (storedPreference === "true") {
      // User has manually overridden, don't auto-switch
      return;
    }

    const updateThemeByTime = () => {
      const hour = new Date().getHours();
      // Daytime: 6 AM (6) to 6 PM (18)
      const isDaytime = hour >= 6 && hour < 18;
      const newTheme = isDaytime ? "light" : "dark";
      
      if (theme !== newTheme) {
        setTheme(newTheme);
      }
    };

    // Set initial theme based on time
    updateThemeByTime();

    // Check every minute to handle transitions
    const interval = setInterval(updateThemeByTime, 60000);

    return () => clearInterval(interval);
  }, [setTheme, theme]);
}

/**
 * Hook to mark that user has manually set theme preference
 */
export function useManualThemeOverride() {
  const setManualOverride = (enabled: boolean) => {
    if (enabled) {
      localStorage.setItem("ktp-theme-manual", "true");
    } else {
      localStorage.removeItem("ktp-theme-manual");
    }
  };

  const isManualOverride = () => {
    return localStorage.getItem("ktp-theme-manual") === "true";
  };

  const clearManualOverride = () => {
    localStorage.removeItem("ktp-theme-manual");
  };

  return { setManualOverride, isManualOverride, clearManualOverride };
}

