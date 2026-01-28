const express = require("express");
const router = express.Router();
const { analyzeCrypto } = require("../controllers/cryptoController");

router.post("/analyze", analyzeCrypto);

module.exports = router;
