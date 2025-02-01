import React from "react";
import CountdownTimer from "../components/timers/CountdownTimer";
import TaskList from "../components/to-do-list/TaskList";

function MainPage() {
  return (
    <section>
      <CountdownTimer />
      <TaskList />
    </section>
  )
}

export default MainPage;