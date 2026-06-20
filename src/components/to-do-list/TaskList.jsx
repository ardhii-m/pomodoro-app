import React from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

function TaskList() {
  const [tasks, setTasks] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem("tasks")) || []; }
    catch { return []; }
  });
  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) =>
    setTasks([...tasks, { id: Date.now(), name, completed: false }]);

  const toggleTask = (id) =>
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  return (
    <div className="flex justify-center px-4 pb-8">
      <div className="flex flex-col items-center my-4 w-full max-w-sm text-center bg-[#f0f0f0] shadow-2xl rounded-2xl space-y-4 p-4 mx-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold">Task List</h2>

        <TaskForm onAdd={addTask} />

        <ul className="space-y-2 w-full">
          {tasks.length === 0 && (
            <p className="text-center text-gray-400">No tasks yet.</p>
          )}
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
