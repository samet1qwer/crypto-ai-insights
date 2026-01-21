const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema(
  {
    crypto_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CryptoAsset",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

priceSchema.index({ crypto_id: 1, date: 1 }, { unique: true });

module.exports = mongoose.model("Crypto_price", priceSchema);
