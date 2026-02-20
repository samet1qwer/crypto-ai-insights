import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
function AssetDetail() {
  const user = localStorage.getItem("user");
  if (!user) {
    return <Navigate to="/login" />;
  }

  const { coin } = useParams();

  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCoin = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin}`,
        {
          params: {
            localization: false,
            tickers: false,
            market_data: true,
            sparkline: false,
          },
        },
      );

      setCoinData(data);
    } catch (err) {
      setError("Failed to fetch asset details.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (coin) {
      fetchCoin();
    }
  }, [coin]);

  if (loading) {
    return (
      <div className="bg-[#0B1020] min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#0B1020] min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  if (!coinData) return null;

  const priceChange = coinData?.market_data?.price_change_percentage_24h ?? 0;

  const isPositive = priceChange >= 0;

  return (
    <div className="bg-[#0B1020] min-h-screen rounded-lg">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/assets"
          className="bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-lg transition text-green-500 duration-300 hover:text-white hover:bg-green-500"
        >
          ← Back to Assets
        </Link>
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={coinData.image?.large}
                alt={coinData.name}
                className="w-12 h-12"
              />
              <div>
                <h2 className="text-xl text-white font-bold">
                  {coinData.name}
                </h2>
                <span className="text-gray-400 text-sm uppercase">
                  {coinData.symbol}
                </span>
              </div>
            </div>

            <div
              className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                isPositive
                  ? "bg-green-500/10 text-green-400"
                  : "bg-red-500/10 text-red-400"
              }`}
            >
              {priceChange.toFixed(2)}% (24h)
            </div>
          </div>
        </div>

        <div className="mt-8 bg-[#142659]/40 rounded-lg p-6 border border-gray-800">
          <h3 className="text-2xl font-bold text-gray-400 mb-2">
            Current Price
          </h3>
          <span className="text-3xl font-bold text-white">
            ${coinData.market_data?.current_price?.usd?.toLocaleString()}
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="bg-[#142659]/40 rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-gray-400 mb-2">Market Cap</h3>
            <span className="text-xl font-bold text-white">
              ${coinData.market_data?.market_cap?.usd?.toLocaleString()}
            </span>
          </div>

          <div className="bg-[#142659]/40 rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-gray-400 mb-2">
              Volume (24h)
            </h3>
            <span className="text-xl font-bold text-white">
              ${coinData.market_data?.total_volume?.usd?.toLocaleString()}
            </span>
          </div>

          <div className="bg-[#142659]/40 rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-gray-400 mb-2">
              Circulating Supply
            </h3>
            <span className="text-xl font-bold text-white">
              {coinData.market_data?.circulating_supply?.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="mt-8 bg-[#142659]/40 rounded-lg p-6 border border-gray-800">
          <h4 className="text-white text-xl font-bold mb-4">Price Chart</h4>

          <div className="py-16 border border-dashed border-gray-700 flex items-center justify-center">
            <h3 className="text-xl font-bold text-gray-400">
              Chart area will go here
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetDetail;
