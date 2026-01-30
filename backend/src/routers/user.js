const express = require("express");
const router = express.Router();

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

router.patch("/user/update/:id", updateUser);

router.delete("/user/delete/:id", deleteUser);

module.exports = router;
