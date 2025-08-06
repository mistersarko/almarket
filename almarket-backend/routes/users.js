import express from "express";
import { getAllUsers, getUserProfile } from "../controllers/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getAllUsers);
router.get("/profile", verifyToken, getUserProfile);

export default router;
