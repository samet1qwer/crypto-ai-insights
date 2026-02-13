import React from "react";
import { SiBitcoin, SiEthereum, SiSolana } from "react-icons/si";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function AssetDetail() {
  const { coin } = useParams();

  return (
    <div className="bg-[#0B1020] min-h-screen rounded-lg">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/assets"
          className="bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-lg transition text-green-500 duration-300 hover:text-white hover:bg-green-500"
        >
          ← Back to Assets
        </Link>
        <div className="mt-8 ">
          <div className="flex align-center justify-between">
            <div className="flex align-center gap-4">
              <SiBitcoin className="text-yellow-500" size={50}></SiBitcoin>
              <div>
                <h2 className="text-xl text-white font-bold">Bitcoin</h2>
                <span className="text-gray-400 text-sm">BTC</span>
              </div>
            </div>
            <div className="bg-green-500/10 border-green-500/20 px-2 py-1 rounded-lg transition text-green-500 duration-300 hover:text-white hover:bg-green-500 text-center text-green-500 flex items-center gap-2 justify-center">
              <span className="p-0">+0.01%</span>
              <span className="p-0"> (24h)</span>
            </div>
          </div>
        </div>

        <div className="mt-8 py-8 bg-[#142659]/40 rounded-lg p-4 border border-gray-800 ">
          <div>
            <h3 className="text-2xl font-bold text-gray-400">Currency Price</h3>

            <span className="text-3xl font-bold text-white">$3,000</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="mt-4 py-8 bg-[#142659]/40 rounded-lg p-4 border border-gray-800">
            <h3 className="text-xl font-bold text-gray-400">Market Cap</h3>
            <span className="text-xl font-bold text-white">$3,000</span>
          </div>
          <div className="mt-4 py-8 bg-[#142659]/40 rounded-lg p-4 border border-gray-800">
            <h3 className="text-xl font-bold text-gray-400">Volume</h3>
            <span className="text-xl font-bold text-white">$3,000</span>
          </div>
          <div className="mt-4 py-8 bg-[#142659]/40 rounded-lg p-4 border border-gray-800">
            <h3 className="text-xl font-bold text-gray-400">
              Circulating Supply
            </h3>
            <span className="text-xl font-bold text-white">$3,000</span>
          </div>
        </div>

        <div className="mt-8 py-8 bg-[#142659]/40 rounded-lg p-4 border border-gray-800 ">
          <div>
            <h4 className="text-white m-2 text-xl font-bold">Prize chart</h4>
          </div>

          <div className="mt-8 py-16  rounded-lg p-4 border border-dashed border-gray-700 flex items-center justify-center w-full ">
            <div className="w-full text-center h-full">
              <h3 className="text-xl font-bold text-gray-400">
                Chart area will go here
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetDetail;
