import React from "react";
import Task from './Task'

function TaskList({ tasks, handleDelete, selectedCategory }) {

  const taskFiltered = tasks.filter(
    (task) => (selectedCategory === "All" || task.category === selectedCategory)
  );
  return (
    <div className="tasks">
      {tasks.map((task) => <Task key={task.text} category={task.category} text={task.text} handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default TaskList;
