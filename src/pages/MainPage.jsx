import React from "react";
import CountdownTimer from "../components/timers/CountdownTimer";
import TaskList from "../components/to-do-list/TaskList";

function MainPage() {
  return (
    <section className="flex-auto items-center justify-center px-2 pt-8 pb-6 transition-colors duration-200">
      <CountdownTimer />
      {/* <TaskList /> */}
    </section>
  )
}

export default MainPage;