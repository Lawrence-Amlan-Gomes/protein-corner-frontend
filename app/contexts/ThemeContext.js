"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for theme preference in localStorage
    const savedTheme = localStorage.getItem("proteinCornerTheme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    // Apply theme to document and save to localStorage
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("proteinCornerTheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("proteinCornerTheme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
