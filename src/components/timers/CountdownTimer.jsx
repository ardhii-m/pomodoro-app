import React from "react";
import TimerButtons from "./TimerButtons";
// import TimerButtons from './TimerButtons';

function CountdownTimer() {
  const [time, setTime] = React.useState(25 * 60);
  const [isRunning, setIsRunning] = React.useState(false);
  const [mode, setMode] = React.useState("work");

  React.useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0) {
      setIsRunning(false);
      setMode((prevMode) => (prevMode === "work" ? "break" : "work"));
      setTime((prevMode) => (prevMode === "work" ? 5 * 60 : 25 * 60));
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(mode === "work" ? 25 * 60 : 5 * 60);
  };

  const switchMode = () => {
    setIsRunning(false);
    resetTimer();
    setMode((prevMode) => (prevMode === "work" ? "break" : "work"));
    setTime(mode === "work" ? 5 * 60 : 25 * 60);
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="bg-[#FF6B6B] flex items-center justify-center px-2 pt-8 pb-6">
      <div className="my-4 w-full max-w-max text-center bg-[#f0f0f0] shadow-xl rounded-2xl space-y-4 border-1 p-4 mx-4">
        <h1 className="pt-2 text-3xl sm:text-4xl font-bold">
          {mode === "work" ? "Work Time" : "Rest Time"}
        </h1>
        {/* Timer Display */}
        <div className="text-7xl sm:text-8xl font-mono">
          {formatTime(time)}
        </div>
        {/* Phase counter (Work -> Break -> Work -> */}

        {/* Buttons */}
        <TimerButtons 
          isRunning={isRunning}
          toggleTimer={toggleTimer}
          resetTimer={resetTimer}
          switchMode={switchMode}
        />
      </div>
    </div>
  );
}

export default CountdownTimer;
