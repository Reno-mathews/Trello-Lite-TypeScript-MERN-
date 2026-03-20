import { useState } from "react";
import API from "../api";

export default function TaskInput({ fetchTasks }: any) {
    const [title, setTitle] = useState("");

    const addTask = async () => {
        if (!title) return;

        await API.post("/tasks", { title });

        setTitle("");
        fetchTasks();
    };

    return (
        <div>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Task"
            />
            <button onClick={addTask}>Add</button>
        </div>
    );
}