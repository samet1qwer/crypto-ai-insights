const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../middleware/tokenJwt");
exports.getUser = async (req, res) => {
  const users = await user.find();
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
  res.json({
    token,
    user: savedUser,
  });
};

exports.updateUser = async (req, res) => {
  const foundUser = await user.findById(req.params.id);
  if (!foundUser) {
    return res.status(404).send("User not found");
  }

  foundUser.name = req.body.name;
  foundUser.email = req.body.email;
  foundUser.password = req.body.password;
  foundUser.role = req.body.role;

  const updatedfoundUser = await foundUser.save();
  res.send(updatedfoundUser);
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const foundUser = await user.findOne({ email });

  if (!foundUser) {
    return res.status(401).send("Invalid email or password");
  }

  const validPassword = await bcrypt.compare(password, foundUser.password);

  if (!validPassword) {
    return res.status(401).send("Invalid email or password");
  }

  const token = generateToken(foundUser);

  res.json({
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
};

exports.deleteUser = async (req, res) => {
  const user = await user.findByIdAndDelete(req.params.id);

  res.send(user);
};
