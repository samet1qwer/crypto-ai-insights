import React from "react";

function Header() {
  return (
    <header className="h-20 flex items-center justify-between">
      <div className="mx-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#142659] to-[#0B1020]">
        <h3 className="text-3xl text-green-500 font-bold">Logo</h3>
      </div>

      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <a
              href="#"
              className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent underline underline-offset-4 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-white hover:text-green-500 transition duration-300"
            >
              Assets
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-white hover:text-green-500 transition duration-300"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
