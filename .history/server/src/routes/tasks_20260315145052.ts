import express from "express";

import Task from "../models/Task.js";

const router = express.Router();

router.get("/", async(req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post("/", async (req, res) => {
    const task = new Task(req.body);
    const saved = await task.save();
    res.json(saved);
});

router.delete("/:id", async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

export default router;