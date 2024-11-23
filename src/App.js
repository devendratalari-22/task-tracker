import React from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import TaskFilters from "./components/TaskFilters/TaskFilters";
import { TaskProvider } from "./context/TaskContext";

import "./app.css"

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Tracker</h1>
        <TaskFilters />
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
