import Task from "../models/Task.js";

import router from "../routes/tasks.js";



export const getTasks = async(req ,res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

export const createTask = async(req, res) => {
    const task = new Task(req.body);
    const saved = await task.save();
    res.json(saved);
};

export const deleteTask = async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
}

e