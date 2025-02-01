import Navbar from "./components/header/Navbar";
import { Route, Routes } from "react-router-dom";
import CountdownTimer from "./components/timers/CountdownTimer"
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="bg-gray-100 h-screen w-screen">
        <header className="bg-gray-200 flex flex-col sm:flex-row items-center gap-4 justify-between px-8 border-b-2 shadow-md py-4">
          <h1 className="text-4xl text-center font-bold">Pomodoro Timer</h1>
          <Navbar />
        </header>
        <main>
          <Routes>
            {/* Pomodoro Timer */}
            <Route path='/' element={<CountdownTimer />} />
            <Route path='/timer' element={<CountdownTimer />} />
            {/* Task List */}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

      </div>
    </>
  )
}

export default App;
