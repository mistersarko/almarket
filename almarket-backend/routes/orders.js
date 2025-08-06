import express from "express";
import {
  createOrder,
  getUserOrders,
  getAllOrders,
} from "../controllers/orderController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createOrder);
router.get("/user/:userId", verifyToken, getUserOrders);
router.get("/", verifyToken, getAllOrders);

export default router;
