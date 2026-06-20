import React from "react";
import PropTypes from "prop-types";
import CheckButton from "./CheckButton";
import { BiTrash } from "react-icons/bi";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm w-full">
      <CheckButton id={task.id} onCheck={onToggle} checked={task.completed} />
      <span 
        className={`flex-1 min-w-0 text-left break-words ${task.completed ? "line-through text-gray-400" : ""

        }`}>
        {task.name}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        title="Delete task"
        className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
      >
        <BiTrash size={20} />
      </button>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskItem;
