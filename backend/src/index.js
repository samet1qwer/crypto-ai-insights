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

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
