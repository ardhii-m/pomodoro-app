import React from "react";

function TimerButtons({ isRunning, toggleTimer, resetTimer, switchMode }) {
  return (
    <div className="flex justify-center space-x-3 px-6">
      <button
        onClick={toggleTimer}
        className={`p-2 sm:p-4 text-xl sm:text-3xl cursor-pointer border-2 rounded-xl sm:rounded-2xl transition-colors duration-200 
        ${
          isRunning
            ? "bg-red-400 hover:bg-red-500"
            : "bg-green-400 hover:bg-green-500"
        }`}
      >
        {isRunning === true ? "Pause" : "Start"}
      </button>
      <button 
        onClick={resetTimer}
        className="p-2 sm:p-4 text-xl sm:text-3xl cursor-pointer border-2 rounded-xl sm:rounder-2xl transition-colors duration-300 bg-red-400 hover:bg-red-500">
        Reset
      </button>
      <button 
        onClick={switchMode}
        className="p-2 sm:p-4 text-xl sm:text-3xl cursor-pointer border-2 rounded-xl sm:rounder-2xl transition-colors duration-300 bg-white hover:bg-gray-300">
        Switch
      </button>
    </div>
  );
}

export default TimerButtons;
