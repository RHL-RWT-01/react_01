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
      <>
      <h1
      className="text-4xl text-center text-gray-800 dark:text-black font-bold py-4"
      >Rahul</h1>
      <div className="flex flex-wrap min-h-screeitems-center align-middle justify-center items-center bg-gray-100 bg-maroon-400">

       
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex- justify-end mb-4">
            <ThemeBTN />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
        <br/>

        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex- justify-end mb-4">
            <ThemeBTN />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>

      </div>
      </>
    </ThemeProvider>
  );
}

export default App;
