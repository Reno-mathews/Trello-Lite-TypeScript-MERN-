import TaskItem from "./TaskItem";
import { Task } from "../types/Task";

export default function TaskList({ tasks, fetchTasks }: any) {
    return (
        <div>
            {tasks.map((task: Task) => (
                <TaskItem key ={tasks._id} task={task} fetchTasks={fetchTasks} />
            ))}
        </div>
    );
}