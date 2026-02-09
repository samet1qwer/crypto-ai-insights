import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email,
          password,
        },
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setMessage("User logged successfully");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      setMessage("Error logging in");
    }
  };

  return (
    <div className=" bg-[#0B0F19] flex flex-col justify-center items-center">
      <section className="flex justify-center items-center mt-10 w-full ">
        <div className="bg-[#111827] p-8 rounded-2xl shadow-2xl border border-gray-800 w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Login to your account
          </h2>
          {message && <p className="text-green-500 text-center">{message}</p>}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full p-3 rounded bg-[#0B0F19] border border-gray-700 text-white focus:border-green-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Password</label>
              <input
                type="password"
                className="w-full p-3 rounded bg-[#0B0F19] border border-gray-700 text-white focus:border-green-500 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 hover:bg-green-600 text-[#0B0F19] font-bold py-3 rounded-lg transition duration-300 mt-4"
            >
              Sign In
            </button>
          </form>
          <p className="text-gray-500 text-center mt-6">
            Don't have an account?
            <span className="text-green-500 cursor-pointer hover:underline">
              Register
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;
