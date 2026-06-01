import express from "express";
import { getTasks, createTask, updateTask, deleteTask, getTasksCount } from "../controlers/taskController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getTasks).post(protect, createTask);
router.route("/:id").put(protect, updateTask).delete(protect, deleteTask);
router.route("/count").get(protect, getTasksCount);

export default router;