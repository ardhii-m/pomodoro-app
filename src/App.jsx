import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import ThemeContext from "./contexts/ThemeContext.jsx";
import React from "react";

function AppContent() {
  const { mode } = React.useContext(ThemeContext);
  const bg = mode === "work" ? "bg-[#FF6B6B]" : "bg-[#38858A]";

  return (
    <div className={`${bg} transition-colors duration-500 min-h-screen`}>
      <header className="flex flex-col sm:flex-row items-center gap-6 sm:gap-4 justify-between px-8 shadow-md py-4">
        <h1 className="text-4xl text-center font-bold">Pomodoro Timer</h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
