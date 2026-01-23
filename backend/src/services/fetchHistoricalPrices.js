const https = require("https");

const httpsAgent = new https.Agent({
  keepAlive: true,
  minVersion: "TLSv1.2",
  maxVersion: "TLSv1.3",
});

const axios = require("axios");
const prices_data = require("../models/price_data");
const crypto_assets = require("../models/crypto_asset");

const fetchHistoricalPrices = async (symbol, name, period) => {
  try {
    let cryptoAsset = await crypto_assets.findOne({ symbol });

    if (!cryptoAsset) {
      cryptoAsset = await crypto_assets.create({
        symbol,
        name,
      });
    }
    const response = await axios.get("https://api.binance.com/api/v3/klines", {
      params: {
        symbol: `${symbol}USDT`,
        interval: period,
        limit: 1000,
      },
      httpsAgent,
      timeout: 15000,
    });

    const prices = response.data.map((item) => ({
      crypto_id: cryptoAsset._id,
      price: Number(item[4]),
      date: new Date(item[0]),
    }));

    await prices_data.insertMany(prices, { ordered: false });

    console.log(`✅ ${symbol}: ${prices.length} kayıt eklendi`);
  } catch (error) {
    console.error(`❌ ${symbol} hata:`, error.response?.data || error.message);
  }
};

module.exports = fetchHistoricalPrices;
