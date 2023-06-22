import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/auth-controller.ts";
import { protectMiddleware } from "../middleware/protect-middleware.ts";
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/logout", protectMiddleware, logoutUser);
router
  .route("/profile")
  .get(protectMiddleware, getUserProfile)
  .put(protectMiddleware, updateUserProfile);

export default router;
