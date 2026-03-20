import API from "../api";
import { Task } from "../types/Task";

export default function TaskItem({ task, fetchTasks }: any) {
    const toggleTask = async () => {
        await API.patch(`/tasks/${task._id}toggle`);
        fetchTasks();
    };

    const deleteTask = async () => {
        await API.delete(`/tasks/${task._id}`);
        fetchTasks();
    };

    return (
        <div
    )
}