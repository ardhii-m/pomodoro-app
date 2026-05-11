import PropTypes from "prop-types";
function TimerButtons({ isRunning, toggleTimer, resetTimer, switchMode }) {
  return (
    <div className="flex justify-center space-x-3 px-6 w-full">
      <button
        onClick={resetTimer}
        title="Reset timer"
        className="p-2 sm:p-4 text-xl sm:text-3xl cursor-pointer border-2 rounded-xl sm:rounder-2xl transition-colors duration-300 bg-red-400 hover:bg-red-500"
      >
        Reset
      </button>
      <button
        onClick={toggleTimer}
        className={`p-2 sm:p-4 text-xl sm:text-3xl cursor-pointer border-2 rounded-xl sm:rounder-2xl transition-colors duration-300 bg-white hover:bg-gray-300`}
        title={`${isRunning ? "Pause" : "Start"} timer`}
      >
        {isRunning === true ? "Pause" : "Start"}
      </button>
      <button
        title={`Switch to ${isRunning ? "Rest" : "Work"} mode`}
        onClick={switchMode}
        className="p-2 sm:p-4 text-xl sm:text-3xl cursor-pointer border-2 rounded-xl sm:rounder-2xl transition-colors duration-300 bg-white hover:bg-gray-300"
      >
        Switch
      </button>
    </div>
  );
}

TimerButtons.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  toggleTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  switchMode: PropTypes.func.isRequired,
};

export default TimerButtons;
