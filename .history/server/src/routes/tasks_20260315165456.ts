import express from "express";

import { createTasks, deleteTask, getTasks, toggleTask, updateTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);

router.post("/", createTasks);

router.delete("/:id", deleteTask);

router.put("/:id", updateTask);

router.patch("/:id/toggle", toggleTask);

export default router;