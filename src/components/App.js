import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selected, setSelected] = useState("All")

  function handleDelete(text) {
    setTasks((prev) => prev.filter((task) => task.text !== text))
  }
  function handleCategory(category) {
    setSelected(category)
  }
  function handleAddingTask(task) {
    setTasks(prev => [...prev, task])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={selected} categories={CATEGORIES} handleCategory={handleCategory} />
      <NewTaskForm onTaskFormSubmit={handleAddingTask} categories={CATEGORIES} />
      <TaskList selectedCategory={selected} tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
