const mongose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/crypto-ai";
mongose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

module.exports = mongose;
