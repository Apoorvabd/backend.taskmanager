import express from "express";
import { generateTaskDescription } from "../controlers/aiController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/generate-description", protect, generateTaskDescription);

export default router;