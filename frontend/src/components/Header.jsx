import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import btc from "../assets/btc.png";
function Header() {
  const location = useLocation();
  const user = localStorage.getItem("user");
  const Login = user ? true : false;

  const activeClass =
    "bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent";

  const normalClass =
    "text-white hover:text-green-400 transition-all duration-300";
  return (
    <header className="h-20 flex items-center justify-between">
      <div className="mx-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#142659] to-[#0B1020]">
        <h3 className="text-3xl text-green-500 font-bold">Logo</h3>
      </div>
      <nav className="flex items-center justify-between py-4">
        <ul className="flex items-center gap-4 mr-4 text-sm font-medium">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? activeClass : normalClass
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/assets"
              className={`${
                location.pathname === "/assets" ? activeClass : normalClass
              }`}
            >
              Assets
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {!Login && (
            <Link
              to="/login"
              className={`${
                location.pathname === "/login" ? activeClass : normalClass
              }`}
            >
              <div>
                <button className="px-4 py-1 border border-green-400 rounded-lg cursor-pointer hover:text-green-400 hover:scale-105 transition-all duration-300">
                  Login
                </button>
              </div>
            </Link>
          )}
          {Login && (
            <Link to="/profile">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 p-[2px] hover:scale-105 transition duration-300">
                <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center text-white font-semibold">
                  <img
                    src={btc}
                    alt="profile"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
