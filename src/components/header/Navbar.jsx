import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex text-center gap-4 text-2xl sm:text-3xl items-center">
        <li>
          <button>
            <Link to="/timer" className="p-2 hover:font-bold">
              Timer
            </Link>
          </button>
        </li>
        <li><button className="m-2 hover:font-bold">Task List</button></li>
        <li><button className="p-2 hover:font-bold">About</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
