import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-8 text-3xl sm:text-4xl items-center">
        <li className="flex-2">
        <Link to="/timer" className="hover:text-gray-600">Timer</Link>
        </li>
        <li className="flex-5">
          <a>Task List</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;