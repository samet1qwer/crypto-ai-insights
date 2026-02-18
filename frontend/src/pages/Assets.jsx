import React, { useState, useEffect } from "react";
import axios from "axios";
import Listcoins from "../components/Listcoins";

function Assets() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 6,
              page: 1,
              sparkline: false,
            },
          },
        );

        setCoins(data);
      } catch (err) {
        setError("Failed to fetch assets");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

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

        {loading && (
          <p className="text-gray-400 text-center">Loading assets...</p>
        )}

        {error && <p className="text-red-500 text-center">{error}</p>}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coins.map((coin) => (
              <Listcoins coin={coin} key={coin.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Assets;
