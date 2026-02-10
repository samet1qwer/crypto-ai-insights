import React from "react";
import { SiBitcoin, SiEthereum, SiSolana } from "react-icons/si";

function Assets() {
  return (
    <div className="bg-[#0B1020] min-h-screen rounded-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl text-green-500 font-bold">
              Popular Assets
            </h2>
            <span className="text-gray-400 text-sm">
              Market overview and analytics here
            </span>
          </div>

          <button className="bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-lg transition text-green-500 duration-300 hover:text-white hover:bg-green-500">
            View More
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-800 rounded-lg shadow-xl bg-[#142659]/30 p-5 hover:shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:shadow-green-500/100">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-white text-xl font-bold">Bitcoin</h2>
                <span className="text-gray-400 text-sm">BTC</span>
              </div>
              <SiBitcoin size={32} className="text-green-400" />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm">Price</p>
                <p className="text-white text-lg font-semibold">$43,250</p>
              </div>

              <div className="text-green-400 text-sm font-semibold">
                +2.4% <span className="text-gray-400 ml-1">24h</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 rounded-lg shadow-xl bg-[#142659]/30 p-5 hover:shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:shadow-green-500/100">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-white text-xl font-bold">Ethereum</h2>
                <span className="text-gray-400 text-sm">ETH</span>
              </div>
              <SiEthereum size={32} className="text-green-400" />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm">Price</p>
                <p className="text-white text-lg font-semibold">$2,350</p>
              </div>

              <div className="text-red-400 text-sm font-semibold">
                -1.2% <span className="text-gray-400 ml-1">24h</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-800 rounded-lg shadow-xl bg-[#142659]/30 p-5 hover:shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:shadow-green-500/100">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-white text-xl font-bold">Solana</h2>
                <span className="text-gray-400 text-sm">SOL</span>
              </div>
              <SiSolana size={32} className="text-green-400" />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm">Price</p>
                <p className="text-white text-lg font-semibold">$102</p>
              </div>

              <div className="text-green-400 text-sm font-semibold">
                +5.8% <span className="text-gray-400 ml-1">24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assets;
