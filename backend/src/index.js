const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ? db bağlantı
const db = require("./config/db");

// ? models

const user = require("./models/user");
const crypto_asset = require("./models/crypto_asset");
const crypto_price = require("./models/price_data");
const signal = require("./models/aı_signal");
const trade = require("./models/trade");

// ? routers

const userRouter = require("./routers/user");
const crypto_assetRouter = require("./routers/crypto_assets");
const crypto_priceRouter = require("./routers/price");
const signalRouter = require("./routers/aı_signal");
const tradeRouter = require("./routers/trade");
app.use("/api", userRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
