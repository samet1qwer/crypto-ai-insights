const mongose = require("mongoose");

const userSchema = new mongose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin", "manager"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const user = mongose.model("User", userSchema);

module.exports = user;
