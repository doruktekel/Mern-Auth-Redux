import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const alreadyUser = await User.findOne({ email });

  if (alreadyUser) {
    res.status(400);
    throw new Error(`This email : ${email} has been registered already`);
  }

  const newUser = await User.create({
    name,
    email,
    password,
  });

  if (newUser) {
    generateToken(res, newUser._id);
    res.status(201).json({
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
const login = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "login was suucessfully" });
});
const logout = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "logout was suucessfully" });
});
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "getUserProfile was suucessfully" });
});
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "updateUserProfile was suucessfully" });
});

export { register, login, logout, getUserProfile, updateUserProfile };
