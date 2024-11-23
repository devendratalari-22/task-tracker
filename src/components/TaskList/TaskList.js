import React, { useContext } from "react";
import TaskContext from "../../context/TaskContext";
import TaskItem from "../TaskItem/TaskItem"

import "../TaskList/TaskList.css"

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) return <p>No tasks available. Start adding some!</p>;

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
