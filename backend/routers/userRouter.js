import express from "express";
import {
  getUserProfile,
  login,
  logout,
  register,
  updateUserProfile,
} from "../controllers/userControllers.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
