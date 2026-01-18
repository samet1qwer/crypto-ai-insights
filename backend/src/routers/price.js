const express = require("express");
const router = express.Router();

router.get("/price/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  const price = await crypto_price.findOne({ symbol: symbol });
  if (!price) {
    res.status(404).send("Price not found");
  }
  res.send(price);
});

router.post("/price/add", async (req, res) => {
  const crypto_id = req.body.crypto_id;
  const price = req.body.price;

  const newPrice = new crypto_price({
    crypto_id: crypto_id,
    price: price,
  });

  const savedPrice = await newPrice.save();
  res.send(savedPrice);
});

module.exports = router;
