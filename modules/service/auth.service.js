const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
exports.register = async ({ email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, passwordHash });
  return { message: "User registered", userId: user._id };
};
exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) throw new Error("Invalid password");
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  return { token };
};
