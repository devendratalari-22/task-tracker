import React, { useContext } from "react";
import TaskContext from "../../context/TaskContext";
import "../TaskFilters/TaskFilters.css"

const TaskFilters = () => {
  const { setSortOptions, setFilterStatus } = useContext(TaskContext);

  const handleSortChange = (e) => {
    const { name, value } = e.target;
    setSortOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  return (
    <div className="task-filters">
      <div>
        <label>Sort by Due Date:</label>
        <select name="date" onChange={handleSortChange}>
          <option value="none">None</option>
          <option value="dueDateAsc">Due Date (Ascending)</option>
          <option value="dueDateDesc">Due Date (Descending)</option>
        </select>
      </div>
      <div>
        <label>Filter by Status:</label>
        <select onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilters;
