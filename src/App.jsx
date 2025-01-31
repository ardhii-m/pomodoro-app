import CountdownTimer from "./components/timers/CountdownTimer"

function App() {
  return (
    <>
      <div className="bg-[#FF6B6B] h-screen w-screen">
        {/* Pomodoro Timer */}
        <h1 className="text-center text-4xl sm:text-5xl font-bold p-8">Pomodoro Timer</h1>
        <CountdownTimer />
        {/* Task List */}
      </div>
    </>
  )
}

export default App;
