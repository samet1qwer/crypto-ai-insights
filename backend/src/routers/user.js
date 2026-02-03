const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/tokenJwt.js");
const {
  getUser,
  createUser,
  updateUser,
  loginUser,
  deleteUser,
} = require("../controllers/userController");
router.get("/user", getUser);

router.post("/user/create", createUser);

router.post("/user/login", loginUser);

router.patch("/user/update/:id", verifyToken, updateUser);

router.delete("/user/delete/:id", verifyToken, deleteUser);

module.exports = router;
