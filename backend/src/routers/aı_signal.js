const express = require("express");
const router = express.Router();

router.get("ai_signal/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  const signal = await signal.findOne({ symbol: symbol });
  res.send(signal);
});

router.post("/ai_signal/add", async (req, res) => {
  const crypto_id = req.body.crypto_id;
  const signal = req.body.signal;
  const confidance = req.body.confidance;
  const model_version = req.body.model_version;

  const newSignal = new signal({
    crypto_id: crypto_id,
    signal: signal,
    confidance: confidance,
    model_version: model_version,
  });

  const savedSignal = await newSignal.save();
  res.send(savedSignal);
});

router.put("/ai_signal/update/:id", async (req, res) => {
  const signal = await signal.findById(req.params.id);
  if (!signal) {
    return res.status(404).send("Signal not found");
  }
  signal.crypto_id = req.body.crypto_id;
  signal.signal = req.body.signal;
  signal.confidance = req.body.confidance;
  signal.model_version = req.body.model_version;

  const updatedSignal = await signal.save();
  res.send(updatedSignal);
});

router.delete("/ai_signal/delete/:id", async (req, res) => {
  const id = req.params.id;
  const signal = await signal.findByIdAndDelete(id);
  res.send(signal);
});

module.exports = router;
