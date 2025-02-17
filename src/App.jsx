import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <div className="bg-[#FF6B6B]">
        <header className=" flex flex-col sm:flex-row items-center gap-6 sm:gap-4 justify-between px-8 shadow-md py-4">
          <h1 className="text-4xl text-center font-bold">Pomodoro Timer</h1>
        </header>
        <main>
          <Routes>
            {/* Pomodoro Timer */}
            <Route path='/' element={<MainPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>

      </div>
    </>
  )
}

export default App;
