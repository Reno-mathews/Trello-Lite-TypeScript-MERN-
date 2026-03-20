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

    
}