import React, { useState, useEffect, createContext, useContext } from "react";

// Theme context and hook
const ThemeContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);

// CSS for themes - Complete theme system
const themeStyles = `
  :root {
    --bg-primary: #ffffff;
    --bg-secondary: #f9fafb;
    --text-primary: #111827;
    --text-secondary: #4b5563;
    --text-tertiary: #9ca3af;
    --border-primary: #e5e7eb;
    --border-secondary: #d1d5db;
    --shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    --card-bg: #ffffff;
    --card-hover: #f9fafb;
    --navbar-bg: rgba(255, 255, 255, 0.9);
  }

  [data-theme="dark"] {
    --bg-primary: #0a0a0a;
    --bg-secondary: #171717;
    --text-primary: #f9fafb;
    --text-secondary: #d1d5db;
    --text-tertiary: #9ca3af;
    --border-primary: #262626;
    --border-secondary: #404040;
    --shadow: 0 1px 2px 0 rgb(255 255 255 / 0.05);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.5);
    --card-bg: #171717;
    --card-hover: #262626;
    --navbar-bg: rgba(10, 10, 10, 0.9);
  }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
  }

  .theme-bg-primary { background-color: var(--bg-primary); }
  .theme-bg-secondary { background-color: var(--bg-secondary); }
  .theme-bg-card { background-color: var(--card-bg); }
  .theme-bg-card-hover:hover { background-color: var(--card-hover); }
  .theme-text-primary { color: var(--text-primary); }
  .theme-text-secondary { color: var(--text-secondary); }
  .theme-text-tertiary { color: var(--text-tertiary); }
  .theme-border { border-color: var(--border-primary); }
  .theme-border-secondary { border-color: var(--border-secondary); }
  .theme-shadow { box-shadow: var(--shadow); }
  .theme-shadow-lg { box-shadow: var(--shadow-lg); }
  .theme-navbar-bg { background-color: var(--navbar-bg); }
  .theme-input-bg { background-color: var(--input-bg); }
  .theme-purple-hover:hover { background-color: var(--purple-hover); }
  
  .gradient-text {
    color: var(--text-primary);
    font-weight: 600;
  }

  .gradient-bg {
    background-color: var(--text-primary);
    color: var(--bg-primary);
  }

  .glass-effect {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

// Theme Provider
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <style>{themeStyles}</style>
      {children}
    </ThemeContext.Provider>
  );
};
