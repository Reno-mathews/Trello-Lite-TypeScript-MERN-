import Task from "../models/Task.js";

import type { Request, Response} from "express";

export const getTasks = async(req: Request ,res: Response) => {
    const tasks = await Task.find();
    res.json(tasks);
};

export const createTasks = async(req: Request, res: Response) => {
    const task = new Task(req.body);
    const saved = await task.save();
    res.json(saved);
};

export const deleteTask = async(req: Request, res: Response) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
}

export const updateTask = async (req: Request, res: Response) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true }
        );

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message : "Update failed" });
    }
}

export const toggleTask = async (req: Request, res: Response) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    task.completed = !task.completed;

    await task?.save();

    res.json(task);

};