import React from "react";
import PropTypes from "prop-types";
import { BiPlus } from "react-icons/bi";

function TaskForm({ onAdd }) {
  const [input, setInput] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full text-lg">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
        className="flex-1 min-w-0 rounded-xl px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        maxLength={50}
      />
      <button
        type="submit"
        title="Add task"
        className="bg-gray-700 text-white px-4 py-2 rounded-xl font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
      >
        <BiPlus size={20} />
      </button>
    </form>
  );
}

TaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default TaskForm;