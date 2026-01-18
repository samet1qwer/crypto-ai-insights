const mongose = require("mongoose");

const signalSchema = new mongose.Schema({
  crypto_id: {
    type: mongose.Schema.Types.ObjectId,
    ref: "Crypto_assets",
    required: true,
  },
  signal: {
    type: String,
    required: true,
  },
  confidance: {
    type: Number,
    required: true,
  },
  model_version: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const signal = mongose.model("Signal", signalSchema);

module.exports = signal;
