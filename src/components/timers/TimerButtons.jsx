import PropTypes from "prop-types";

function TimerButtons({ mode, isRunning, toggleTimer, switchMode }) {
  const isWork = mode === "work";

  return (
    <div className="flex justify-center space-x-3 px-6 w-full text-2xl">
      <button
        onClick={toggleTimer}
        title={`${isRunning ? "Pause" : "Start"} timer`}
        className={`text-white px-6 py-4 rounded-xl font-semibold transition-colors duration-200 cursor-pointer ${
          isWork
            ? "bg-[#FF6B6B] hover:bg-[#e05555]"
            : "bg-[#38858A] hover:bg-[#2d6d71]"
        }`}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={switchMode}
        title={`Switch to ${isWork ? "Rest" : "Work"} mode`}
        className="px-4 py-4 rounded-xl font-semibold bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors cursor-pointer"
      >
        Switch
      </button>
    </div>
  );
}

TimerButtons.propTypes = {
  mode: PropTypes.string.isRequired,
  isRunning: PropTypes.bool.isRequired,
  toggleTimer: PropTypes.func.isRequired,
  switchMode: PropTypes.func.isRequired,
};

export default TimerButtons;