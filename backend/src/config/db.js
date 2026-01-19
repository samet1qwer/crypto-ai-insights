const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/crypto-ai";

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

module.exports = mongoose;
