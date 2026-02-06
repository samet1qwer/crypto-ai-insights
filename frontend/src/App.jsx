import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen bg-[#0B0F19]">
      <header className="h-20 flex items-center">
        <div className="mx-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#142659] to-[#0B1020]">
          <h3 className="text-3xl text-green-500 font-bold">Logo</h3>
        </div>
      </header>

      <section
        id="title"
        className="text-center flex justify-center items-center"
      >
        <h1 className="font-extrabold  text-7xl text-green-500">
          AI TRADING EDGE
        </h1>
      </section>
    </div>
  );
}

export default App;
