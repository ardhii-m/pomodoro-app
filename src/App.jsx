import CountdownTimer from "./components/timers/CountdownTimer"


function App() {
  return (
    <>
      <div className="bg-white">
        {/* Pomodoro Timer */}
        <h1 className="text-center text-6xl font-bold p-8">Pomodoro Timer</h1>
        <CountdownTimer />
        {/* Task List */}
      </div>
    </>
  )
}

export default App
