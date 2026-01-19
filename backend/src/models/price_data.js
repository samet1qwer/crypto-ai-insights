const mongose = require("mongoose");

const price = new mongose.Schema({
  crypto_id: {
    type: mongose.Schema.Types.ObjectId,
    ref: "CryptoAsset",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const crypto_price = mongose.model("Crypto_price", price);

module.exports = crypto_price;
