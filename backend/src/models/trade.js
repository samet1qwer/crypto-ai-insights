const mongose = require("mongoose");

const tradeSchema = new mongose.Schema({
  user_id: {
    type: mongose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  crypto_id: {
    type: mongose.Schema.Types.ObjectId,
    ref: "Crypto_assets",
    required: true,
  },
  action: {
    type: String,
    enum: ["buy", "sell"],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const trade = mongose.model("Trade", tradeSchema);

module.exports = trade;
