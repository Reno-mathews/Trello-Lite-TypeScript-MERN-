import API from "../api";

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
        <div style={{ margin: "10px 0" }}>
            <span 
                onClick={toggleTask}
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    cursor: "pointer"
                }}
            >
                {task.title}
            </span>

            <button onClick={deleteTask}>Delete</button>
        </div>
    );
}