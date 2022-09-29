import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const THEME_CONTEXT_DEFAULT = {
  theme: "",
  setTheme: () => {},
  darkMode: "",
  setDarkMode: () => {},
};

export const ThemeContext = createContext(THEME_CONTEXT_DEFAULT);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Este tema é invalido");
  }
  useEffect(() => {
    document.body.classList.value =
      "transition-colors ease-in-out duration-200";
    document.body.classList.add(`theme-${context.theme}`);
  }, [context.theme]);

  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  const [darkMode, setDarkMode] = useState("");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, setDarkMode, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
