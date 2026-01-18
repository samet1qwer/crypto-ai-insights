const express = require("express");
const router = express.Router();
const trade = require("../models/trade");

router.get("/trade/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  const trades = await trade.find({ symbol: symbol });
  res.send(trades);
});

router.post("/trade/add", async (req, res) => {
  const user_id = req.body.user_id;
  const crypto_id = req.body.crypto_id;
  const action = req.body.action;
  const quantity = req.body.quantity;

  const newTrade = new trade({
    user_id: user_id,
    crypto_id: crypto_id,
    action: action,
    quantity: quantity,
  });

  const savedTrade = await newTrade.save();
  res.send(savedTrade);
});

router.delete("/trade/delete/:id", async (req, res) => {
  const id = req.params.id;
  const trade = await trade.findByIdAndDelete(id);
  res.send(trade);
});

router.put("/trade/update/:id", async (req, res) => {
  const trade = await trade.findById(req.params.id);
  if (!trade) {
    return res.status(404).send("Trade not found");
  }
  trade.user_id = req.body.user_id;
  trade.crypto_id = req.body.crypto_id;
  trade.action = req.body.action;
  trade.quantity = req.body.quantity;

  const updatedTrade = await trade.save();
  res.send(updatedTrade);
});

module.exports = router;
