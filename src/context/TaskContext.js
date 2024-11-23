import React, { createContext, useState, useEffect } from "react";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/localStorage";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => getFromLocalStorage("tasks"));
  const [sortOptions, setSortOptions] = useState({ date: "none", status: "none" });
  const [filterStatus, setFilterStatus] = useState("all"); // New state for filtering

  

  useEffect(() => {
    saveToLocalStorage("tasks", tasks);
  }, [tasks]);

  const addTask = (task) => setTasks((prevTasks) => [...prevTasks, task]);


  const updateTask = (updatedTask) =>
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const getSortedAndFilteredTasks = () => {
    let sortedTasks = [...tasks];

    // Apply sorting
    if (sortOptions.date === "dueDateAsc") {
      sortedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else if (sortOptions.date === "dueDateDesc") {
      sortedTasks.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
    }

    // Apply filtering
    if (filterStatus !== "all") {
      sortedTasks = sortedTasks.filter((task) => task.status === filterStatus);
    }

    return sortedTasks;
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: getSortedAndFilteredTasks(),
        addTask,
        updateTask,
        deleteTask,
        setSortOptions,
        setFilterStatus,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
