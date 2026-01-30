const express = require("express");
const router = express.Router();
const { getPrice, addPrice } = require("../controllers/priceController");

router.get("/price/:symbol", getPrice);

router.post("/price/add", addPrice);

module.exports = router;
