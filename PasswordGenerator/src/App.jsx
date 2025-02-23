import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(20);
  const [num, setNum] = useState(0);
  const [char, setChar] = useState(0);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const copyPassword = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(50);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const handleGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, num, char, setPassword]);

  useEffect(() => {
    handleGenerate();
  }, [length, num, char, handleGenerate]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600">
        <h1 className="text-2xl text-center py-2 text-white">
          Password Generator
        </h1>
      </div>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passRef}
        />
        <button
          className="bg-blue-500 text-black rounded-md mx-2"
          onClick={copyPassword}
        >
          copy
        </button>
      </div>
      <div className="flex items-center gap-x-1 ">
        <input
          type="range"
          min={8}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
        <label className="text-white"> Length {length}</label>
      </div>
      <div className="flex items-center gap-x-1 ">
        <input
          type="checkbox"
          defaultChecked={num}
          onChange={() => setNum((prev) => !prev)}
        />
        <label className="text-white">Include Number</label>
        <input
          className=" gap-15"
          type="checkbox"
          defaultChecked={char}
          onChange={() => setChar((prev) => !prev)}
        />
        <label className="text-white gap-3">Special Characters</label>
      </div>
      {/* <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white rounded-lg px-4 py-1"
      >
        Generate
      </button> */}
    </>
  );
}
export default App;
