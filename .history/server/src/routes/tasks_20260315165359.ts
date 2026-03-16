import express from "express";

import Task from "../models/Task.js";
import { createTasks, deleteTask, getTasks, toggleTask, updateTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);

router.post("/", createTasks);

router.delete("/:id", deleteTask);

router.put("/:id", updateTask);

router.patch("/:id", toggleTask);

export default router;