import React from "react";

export default function Register() {
  return (
    <div className=" bg-[#0B0F19] flex flex-col justify-center items-center">
      <section className="flex justify-center items-center mt-10 w-full ">
        <div className="bg-[#111827] p-8 rounded-2xl shadow-2xl border border-gray-800 w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Register to your account
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Full name</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-[#0B0F19] border border-gray-700 text-white focus:border-green-500 outline-none"
                placeholder="Enter your Full name"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full p-3 rounded bg-[#0B0F19] border border-gray-700 text-white focus:border-green-500 outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Password</label>
              <input
                type="password"
                className="w-full p-3 rounded bg-[#0B0F19] border border-gray-700 text-white focus:border-green-500 outline-none"
                placeholder="Enter your password"
              />
            </div>
            <button className="w-full bg-green-500 hover:bg-green-600 text-[#0B0F19] font-bold py-3 rounded-lg transition duration-300 mt-4">
              Register
            </button>
          </form>
          <p className="text-gray-500 text-center mt-6">
            you have an account?
            <span className="text-green-500 cursor-pointer hover:underline">
              Sign In
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
