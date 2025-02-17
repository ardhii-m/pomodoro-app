import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import TimerButtons from "./TimerButtons";

function CountdownTimer() {
  const workTime = 25 * 60;
  const breakTime = 5 * 60;
  const [time, setTime] = React.useState(workTime);
  const [isRunning, setIsRunning] = React.useState(false);
  const [mode, setMode] = React.useState("work");
  const [timerKey, setTimerKey] = React.useState(0);


  React.useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => Math.max(prev - 1, 0));
      }, 1000);
    }

    if (time === 0) {
      setIsRunning(false);
      setMode((prevMode) => (prevMode === "work" ? "break" : "work"));
      setTime((prevMode) => (prevMode === "work" ? breakTime : workTime));
    }

    return () => clearInterval(timer);
  }, [isRunning, time, breakTime, workTime]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(mode === "work" ? workTime : breakTime);
    setTimerKey((prevKey) => prevKey + 1); // Force re-render
  };

  const switchMode = () => {
    setIsRunning(false);
    resetTimer();
    setMode((prevMode) => (prevMode === "work" ? "break" : "work"));
    setTime(mode === "work" ? breakTime : workTime);
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className={`flex items-center justify-center px-2 pt-8 pb-6 transition-colors duration-200`}>
      <div className="flex flex-col items-center my-4 w-full max-w-max text-center bg-[#f0f0f0] shadow-2xl rounded-2xl space-y-4 p-4 mx-4">
        <h1 className="pt-2 text-3xl sm:text-4xl font-bold">
          {mode === "work" ? "Work Time" : "Rest Time"}
        </h1>

        {/* Timer Display */}
        <div className="py-4">
          <CountdownCircleTimer
            key={timerKey}
            isPlaying={isRunning}
            duration={mode === 'work' ? 25 * 60 : 5 * 60}
            initialRemainingTime={time}
            colors={mode === 'work' ? "#FF6B6B" : "#38858A"}
            trailColor="#d3d3d3"
            strokeWidth={20}
            size={250}
          >
            {({ remainingTime }) => <span className="text-5xl font-mono">{formatTime(remainingTime)}</span>}
          </CountdownCircleTimer>
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