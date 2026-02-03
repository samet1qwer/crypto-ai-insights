const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../middleware/tokenJwt");
exports.getUsers = (req, res) => {
  const users = user.find();
  res.send(users);
};
exports.createUser = async (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPassword = bcrypt.hashSync(req.body.password, 10);
  const userRole = req.body.role;

  const newUser = new user({
    name: userName,
    email: userEmail,
    password: userPassword,
    role: userRole,
  });

  const savedUser = await newUser.save();

  const token = generateToken(savedUser);
  res.header("auth-token", token).send(token);
};

exports.updateUser = async (req, res) => {
  const user = await user.findById(req.params.id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.role = req.body.role;

  const updatedUser = await user.save();
  res.send(updatedUser);
};

exports.loginUser = async (req, res) => {
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password, 10);

  const user = await user.findOne({ email: email, password: password });
  if (!user) {
    return res.status(401).send("Invalid email or password");
  }
  const token = generateToken(user);
  res.header("auth-token", token).send(token);
};

exports.deleteUser = async (req, res) => {
  const user = await user.findByIdAndDelete(req.params.id);

  res.send(user);
};
