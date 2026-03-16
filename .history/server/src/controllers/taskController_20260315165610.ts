import Task from "../models/Task.js";

export const getTasks = async(req ,res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

export const createTasks = async(req, res) => {
    const task = new Task(req.body);
    const saved = await task.save();
    res.json(saved);
};

export const deleteTask = async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
}

export const updateTask = async (req, res) => {
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

export const toggleTask = async (req, res) => {
    const task = await Task.findById(req.params.id);

    task.completed = !task.completed;

    await task?.save();

    res.json(task);

};
