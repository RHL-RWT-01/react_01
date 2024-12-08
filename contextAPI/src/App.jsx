import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(1);

  return (
    <UserContextProvider>
      <div className="text-center bg-slate-500">
      <Login />
      <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
