import React from "react";
import TaskItem from "./TaskItem";
import { BiPlus } from "react-icons/bi";

function TaskList() {
  const [tasks, setTasks] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem("tasks")) || []; }
    catch { return []; }
  });
  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setTasks([...tasks, { id: Date.now(), name: trimmed, completed: false }]);
    setInput("");
  };

  const toggleTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  return (
    <div className="flex justify-center px-4 pb-8">
      <div className="flex flex-col items-center my-4 w-full max-w-max text-center bg-[#f0f0f0] shadow-2xl rounded-2xl space-y-4 p-4 mx-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold">Task List</h2>

        <form onSubmit={addTask} className="flex gap-2 w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task..."
            className="flex-1 min-w-0 rounded-xl px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            maxLength={50}
          />
          <button
            type="submit"
            className="bg-[#FF6B6B] text-white px-4 py-2 rounded-xl font-semibold hover:bg-[#e05555] transition-colors"
          >
            <BiPlus size={20} />
          </button>
        </form>

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
