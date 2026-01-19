const mongose = require("mongoose");

const aiSignalSchema = new mongose.Schema({
  crypto_id: {
    type: mongose.Schema.Types.ObjectId,
    ref: "Crypto_assets",
    required: true,
  },
  signal: {
    type: String,
    enum: ["BUY", "SELL", "HOLD"],
    required: true,
  },
  confidance: {
    type: Number,
    required: true,
  },
  model_version: {
    type: String,
    default: "v1-rule-based",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongose.model("AiSignal", aiSignalSchema);
