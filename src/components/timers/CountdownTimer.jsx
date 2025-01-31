import React from "react";
// import TimerButtons from './TimerButtons';

function CountdownTimer() {
  const [time, setTime] = React.useState(25 * 60);
  const [isRunning, setIsRunning] = React.useState(false);
  const [mode, setMode] = React.useState('work');

  React.useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0) {
      setIsRunning(false);
      setMode((prevMode) => (prevMode === 'work' ? 'break' : 'work'));
      setTime((prevMode) => (prevMode === 'work' ? 5 * 60 : 25 * 60));
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(mode === 'work' ? 25 * 60 : 5 * 60);
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="p-6 pt-8 max-w-md mx-auto text-center bg-[#f0f0f0] shadow-xl rounded-2xl space-y-4 border-1">
      <h1 className="text-4xl font-bold">{mode === 'work' ? 'Work Time' : 'Rest Time'}</h1>
      <div className="text-8xl font-mono">{formatTime(time)}</div>
      <div className="flex justify-center space-x-5">
        <button onClick={toggleTimer} className={`p-1 text-3xl cursor-pointer border-2 rounded-2xl transition-all duration-200 
        ${isRunning ? "bg-red-400" : "bg-green-400"}`}>
            {isRunning === true ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetTimer} className="p-1 text-3xl cursor-pointer border-2 rounded-2xl transition-all duration-300 bg-red-400 hover:bg-red-600">Reset</button>
      </div>
    </div>
  )
}

export default CountdownTimer;