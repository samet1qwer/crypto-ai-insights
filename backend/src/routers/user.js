const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/tokenJwt.js");
const {
  getUser,
  createUser,
  updateUser,
  loginUser,
  deleteUser,
  getUserById,
} = require("../controllers/userController");
router.get("/user", getUser);

router.post("/user/create", createUser);

router.post("/user/login", loginUser);

router.put("/user/update", verifyToken, updateUser);

router.delete("/user/delete/:id", verifyToken, deleteUser);

router.get("/user/profile", verifyToken, getUserById);

module.exports = router;
