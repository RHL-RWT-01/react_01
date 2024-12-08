import { useState, useEffect } from "react";

import "./App.css";
import ThemeBTN from "./components/ThemeBTN";
import Card from "./components/Card";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.remove("dark", "light"); 
    htmlElement.classList.add(themeMode); 
}, [themeMode]);


  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screeitems-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex- justify-end mb-4">
            <ThemeBTN />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
