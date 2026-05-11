import React from "react";

const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = React.useState("work");
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
