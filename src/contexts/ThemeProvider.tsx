import { createContext, useContext, useCallback, useEffect, useState } from "react";
import { type ThemeContextType } from "../types.ts";
import "../App.css";
import React from "react";

  const ThemeContext = createContext<ThemeContextType>({
    isDark: false,
    toggleTheme: () => {},
  });
  export const useTheme = () => useContext(ThemeContext);
  
  export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDark, setDark] = useState(false);
  
    const toggleTheme = useCallback(() => {
      setDark(!isDark);
  
      localStorage.setItem("theme", isDark ? "light" : "dark");
    }, [isDark]);
  
    useEffect(() => {
      const saved = localStorage.getItem("theme");
  
      setDark(saved === "dark");
    }, []);
  
    return (
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

  export default ThemeContext;