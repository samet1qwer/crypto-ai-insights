const mongose = require("mongoose");

const crypto_assets = new mongose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const crypto_asset = mongose.model("Crypto_assets", crypto_assets);

module.exports = crypto_asset;
