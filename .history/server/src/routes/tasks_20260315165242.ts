import express from "express";

import Task from "../models/Task.js";
import { createTask, deleteTask, getTasks } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);

router.post("/", createTasks);

router.delete("/:id", deleteTask);

router.put("/:id", async(req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true }
        );
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: "Update failed" });
    }
});

export default router;