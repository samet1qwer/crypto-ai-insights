const express = require("express");
const router = express.Router();
const crypto_asset = require("../models/crypto_asset");

router.get("/crypto_assets", async (req, res) => {
  const symbols = await crypto_asset.find();
  res.send(symbols);
});

router.get("/crypto_assets/:id", async (req, res) => {
  const id = req.params.id;
  const symbol = await crypto_asset.findById(id);
  res.send(symbol);
});

router.post("/crypto_assets/add/:id", async (req, res) => {
  const symbol = req.body.symbol;
  const price = req.body.price;

  const newSymbol = new crypto_asset({
    symbol: symbol,
    price: price,
  });

  const savedSymbol = await newSymbol.save();
  res.send(savedSymbol);
});
router.get("/crypto_assets/delete/:id", async (req, res) => {
  const id = req.params.id;
  const symbol = await crypto_asset.findByIdAndDelete(id);
  res.send(symbol);
});

module.exports = router;
