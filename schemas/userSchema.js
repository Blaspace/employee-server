const mongoose = require("mongoose");

const userSchemer = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  userRole: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  refreshtoken: {
    type: String,
    require: true,
  },
  salt: {
    type: String,
  },
});

const User = mongoose.model("user", userSchemer);

module.exports = User;
