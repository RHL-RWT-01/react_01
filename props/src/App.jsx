import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
const obj={
  name:"Rahul",
  age:20
}
  return (
    <>
      <h1 className="bg-pink-400 text-black rounded-xl">Tailwind Test</h1>
   <Card name="Rahul" option="Connect"/>
   <Card name="Rawat" option="Connect"/>
   <Card name="Engineer" option="Connect"/>

      
    </>
  );
}

export default App;
