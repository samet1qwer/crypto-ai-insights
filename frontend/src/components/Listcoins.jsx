import React from "react";
import { Link } from "react-router-dom";

function Listcoins({ coin }) {
  const priceChange = coin.price_change_percentage_24h;
  const isPositive = priceChange >= 0;

  return (
    <Link to={`/assets/${coin.id}`}>
      <div className="border border-gray-800 rounded-lg shadow-xl bg-[#142659]/30 p-5 transition duration-300 ease-in-out hover:scale-105 hover:shadow-green-500/40">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <img src={coin.image} alt={coin.name} className="w-8 h-8" />
            <div>
              <h2 className="text-white text-xl font-bold">{coin.name}</h2>
              <span className="text-gray-400 text-sm uppercase">
                {coin.symbol}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-400 text-sm">Price</p>
            <p className="text-white text-lg font-semibold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(coin.current_price)}
            </p>
          </div>

          <div
            className={`text-sm font-semibold ${
              isPositive ? "text-green-400" : "text-red-400"
            }`}
          >
            {priceChange.toFixed(2)}%
            <span className="text-gray-400 ml-1">24h</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Listcoins;
