const express = require("express");
const router = express.Router();

const {
  getAssets,
  getAsset,
  addAsset,
  deleteAsset,
} = require("../controllers/assetController");

router.get("/crypto_assets", getAssets);

router.get("/crypto_assets/:id", getAsset);

router.post("/crypto_assets/add", addAsset);

router.get("/crypto_assets/delete/:id", deleteAsset);

module.exports = router;
