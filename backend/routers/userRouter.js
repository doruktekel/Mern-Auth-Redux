import express from "express";
import {
  getUserProfile,
  login,
  logout,
  register,
  updateUserProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
