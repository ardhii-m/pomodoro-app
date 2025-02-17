import React from "react";
import { BiPlay, BiReset, BiPause } from "react-icons/bi";
function TimerButtons({ isRunning, toggleTimer, resetTimer, switchMode }) {
  return (
    <div className="flex justify-center space-x-3 px-6">
      <button
        onClick={toggleTimer}
        className={`p-2 sm:p-4 text-4xl cursor-pointer border-2 rounded-full transition-colors duration-200 
        ${
          isRunning
            ? "bg-red-400 hover:bg-red-500"
            : "bg-green-400 hover:bg-green-500"
        }`}
      >
        {isRunning === true ? <BiPause /> : <BiPlay />}
      </button>
      <button 
        onClick={resetTimer}
        className="p-2 sm:p-4 text-4xl cursor-pointer border-2 rounded-full transition-colors duration-300 bg-red-400 hover:bg-red-500">
        <BiReset />
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
