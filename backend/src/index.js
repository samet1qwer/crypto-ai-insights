const express = require("express");
const app = express();

// ? db bağlantı
const db = require("./config/db");

// ? models
app.use(express.json());
const user = require("./models/user");
const crypto_asset = require("./models/crypto_asset");
const crypto_price = require("./models/price_data");
const signal = require("./models/aı_signal");
const trade = require("./models/trade");

// ? services
const fetchHistoricalPrices = require("./services/fetchHistoricalPrices");

const get_asset = async () => {
  const assets = await crypto_asset.find();

  for (const asset of assets) {
    await fetchHistoricalPrices(asset.symbol, asset.name, "1d");
    await new Promise((r) => setTimeout(r, 500));
  }
};

get_asset();

// ? routers

const userRouter = require("./routers/user");
const crypto_assetRouter = require("./routers/crypto_assets");
const crypto_priceRouter = require("./routers/price");
const signalRouter = require("./routers/aı_signal");
const tradeRouter = require("./routers/trade");
app.use("/api", userRouter);
app.use("/api", crypto_assetRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
